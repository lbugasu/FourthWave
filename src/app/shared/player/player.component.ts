import * as playerActions from './store/actions'
import { distinctUntilChanged } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core'
import { Howl, Howler } from 'howler'

import { playerStore } from '../../store/player'
import { Episode } from '../Models/Episode'
import { MatSliderChange } from '@angular/material/slider'
import { Store } from '@ngrx/store'
import { PlayerState } from './store/state/player.state'
import * as playerSelectors from './store/selectors'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  palette!: number
  currentEp!: Episode
  howler: Howl = null
  playing$: Observable<boolean>
  playing: boolean
  volume: number = 0.5
  trackProgress: number = 0
  totalDuration = 0
  currentTime = 0
  somethingInQueue: boolean = false
  mini = false

  volume$: Observable<number>
  episodeQueue: Episode[]
  subscriptions!: Subscription

  constructor (private store: Store<{ player: PlayerState }>) {}

  ngOnInit (): void {
    // playerStore
    //   .selectState('queue')
    //   .pipe(distinctUntilChanged())
    //   .subscribe((items: Episode[]) => {
    //     if (!!this.howler.state()) this.howler.pause()

    //     if (items.length > 0) this.defineNewState(items)
    //   })
    this.volume$ = this.store.select(playerSelectors.getPlayerVolume)

    this.volume$.subscribe(volume => {
      Howler.volume(volume)
    })
    this.playing$ = this.store.select(playerSelectors.getPlaying)
    this.playing$.subscribe(playingState => {
      this.playing = playingState
      if (!!this.howler) {
        playingState ? this.howler.play() : this.howler.pause()
      }
    })

    const episodeQueue$ = this.store.select(playerSelectors.getQueue)
    episodeQueue$.subscribe(episodes => {
      this.episodeQueue = episodes
      if (this.episodeQueue.length > 0) {
        if (!!this.howler) this.howler.pause()
        this.defineNewState(this.episodeQueue)
        this.somethingInQueue = true
      } else {
        this.somethingInQueue = false
      }
    })
  }

  defineNewState (items: Episode[]) {
    console.log(items)
    this.howler = new Howl({
      html5: true,
      src: items.map(item => item.sourceUrl),
      preload: 'metadata',
      onplay: () => {
        // playerStore.updateState({ playingState: true })

        requestAnimationFrame(this.step)
      },
      onpause: () => {
        this.playing = false
      },
      onseek: () => {
        this.step()
      },
      onplayerror: () => {
        console.log(new Error('playback error'))
      },
      onend: () => {
        playerStore.updateState({ playingState: false })
        // this.playing = true
      },
      onstop: () => {
        // this.playing = true
      }
    })
    // playerStore.updateState({ somethingInPlayingQueue: true })
    // playerStore.updateState({ currentTracks: items })

    this.currentEp = items[0]

    this.somethingInQueue = true
    this.howler.play()
  }

  playPause () {
    this.store.dispatch(playerActions.play())
  }

  getPlayingState () {
    return this.playing ? 'pause_circle_filled' : 'play_circle_filled'
  }
  getMiniPlayingState () {
    return this.playing ? 'pause' : 'play_arrow'
  }
  getTitle () {
    if (!!this.currentEp) {
      return this.currentEp.title
    }
    return ''
  }
  getImage () {
    if (!!this.currentEp) {
      return this.currentEp.image
    }
    return ''
  }

  toggleMini () {
    this.mini = !this.mini
    this.store.dispatch(playerActions.toggleMini())
  }
  changeVol ($event: MatSliderChange) {
    this.store.dispatch(playerActions.changeVolume({ value: $event.value }))
  }
  step = () => {
    if (!!this.howler) {
      this.totalDuration = Math.floor(this.howler.duration())
      this.currentTime = Math.floor(this.howler.seek() as number)
      if (this.howler.playing()) {
        requestAnimationFrame(this.step)
      }
    }
  }
  seek () {
    const goTo = this.trackProgress * this.totalDuration
    this.howler.pause()
    this.howler.seek(goTo)
    this.howler.play()
  }
  seekTrack (): number | 'auto' {
    this.trackProgress = this.currentTime / this.totalDuration
    return 0
  }
  getVolumeIcon () {
    if (this.volume == 0) {
      return 'volume_off'
    }
    if (this.volume < 0.5) {
      return 'volume_down'
    } else {
      return 'volume_up'
    }
  }
}
