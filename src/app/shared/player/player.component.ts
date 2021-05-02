import { AudioPlayer } from './audio/audio.player'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/store/app.state'
import { Play } from '../Models/Play'

import * as PlayerSelectors from './store/player.selectors'
import * as PlayerActions from './store/player.actions'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playing$: Observable<boolean>
  volume$: Observable<number>
  queue$: Observable<Play[]>
  mini$: Observable<boolean>

  constructor (private store: Store<AppState>, public player: AudioPlayer) {}

  ngOnInit (): void {
    this.playing$ = this.store.select(PlayerSelectors.getPlaying)
    this.queue$ = this.store.select(PlayerSelectors.getQueue)
    this.mini$ = this.store.select(PlayerSelectors.getMini)
  }

  playPause () {
    this.store.dispatch(PlayerActions.playPause())
  }

  getMainPlayingIcon () {
    return this.player.player?.playing()
      ? 'pause_circle_filled'
      : 'play_circle_filled'
  }
  getMiniPlayingIcon () {
    return this.player.player?.playing() ? 'pause' : 'play_arrow'
  }

  toggleMini () {
    this.store.dispatch(PlayerActions.toggleMiniPlayer())
  }

  getVolumeIcon () {
    if (this.player.volume == 0) {
      return 'volume_off'
    }
    if (this.player.volume < 0.5) {
      return 'volume_down'
    } else {
      return 'volume_up'
    }
  }
}
