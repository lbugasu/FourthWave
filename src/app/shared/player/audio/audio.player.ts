import { MatSliderChange } from '@angular/material/slider'
import { Injectable } from '@angular/core'
import { State, Store } from '@ngrx/store'
import { Howl, Howler } from 'howler'
import { AppState } from 'src/app/store/app.state'
import { Play } from '../../Models'
import * as PlayerSelectors from '../store/player.selectors'
import * as PlayerActions from '../store/player.actions'
import { asyncScheduler, Subject } from 'rxjs'
import { throttleTime } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AudioPlayer {
  player: Howl = null
  queue: Play[] = []
  active: boolean
  totalDuration = 0
  currentTime = 0
  trackProgress = 0
  trackProgress$ = new Subject<number>()
  volume = 0.5
  currentlyPlaying: Play

  constructor (private store: Store<AppState>) {
    this.store.select(PlayerSelectors.getQueue).subscribe(queue => {
      this.queue = queue
      if (this.queue?.length > 0) {
        this.active = true
        if (!this.player) {
          this.defineNewState(this.queue[0])
        }
      }
    })
    this.store.select(PlayerSelectors.getPlayerVolume).subscribe(volume => {
      if (!!this.player) this.player.volume(volume)
      this.volume = volume
    })

    this.trackProgress$
      .asObservable()
      .pipe(
        throttleTime(1000 * 10, asyncScheduler, {
          leading: false,
          trailing: true
        })
      )
      .subscribe(() => {
        if (this.player.playing()) {
          this.store.dispatch(
            PlayerActions.updatePlayPositionStart({
              position: this.currentTime,
              item: this.queue.length > 0 ? this.queue[0] : null
            })
          )
        }
      })
  }

  changeVolume (volume: number) {
    if (!!this.player) this.player.volume(volume)
  }

  stop () {
    this.player.stop()
  }

  defineNewState (item: Play) {
    this.currentlyPlaying = item
    this.player = new Howl({
      html5: true,
      src: [item.episode.sourceUrl],
      preload: 'metadata',
      onplay: () => {
        // playerStore.updateState({ playingState: true })
        requestAnimationFrame(this.step)
      },
      onpause: () => {
        // this.playing = false
      },
      onseek: () => {
        this.step()
      },
      onplayerror: () => {
        console.log(new Error('playback error'))
      },
      onend: () => {
        console.log('ended')
        if (this.queue.length >= 1) {
          this.store.dispatch(PlayerActions.completeAndPlayNextStart())
        } else {
          this.active = false
        }
      },
      onstop: () => {
        // this.playing = true
      }
    })
    this.player.seek(item.position)
  }

  step = () => {
    this.totalDuration = Math.floor(this.player.duration())
    this.currentTime = Math.floor(this.player.seek() as number)

    this.trackProgress$.next(this.currentTime)

    requestAnimationFrame(this.step)
  }
  seek (change: MatSliderChange) {
    const position = change.value
    const goTo = position * this.totalDuration
    this.player.seek(goTo)
  }
  seekTrack (): number | 'auto' {
    this.trackProgress = this.currentTime / this.totalDuration
    return 0
  }
  changeVol ($event: MatSliderChange) {
    this.store.dispatch(PlayerActions.changeVolume({ volume: $event.value }))
  }
}
