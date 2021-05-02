import { AudioPlayer } from './../audio/audio.player'
import { Injectable } from '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'

import { catchError, exhaustMap, map, pluck } from 'rxjs/operators'
import { PlayerService } from '../services/player.service'
import { Play } from '../../Models/Play'
import { AppState } from 'src/app/store/app.state'
import * as PlayerActions from './player.actions'
import * as PlayerSelectors from './player.selectors'

@Injectable()
export class PlayerEffects {
  constructor (
    private store: Store<AppState>,
    private actions$: Actions,
    private player: AudioPlayer,
    private playerService: PlayerService
  ) {}

  changeVolume$ = createEffect(() => {
    // Update player volume and update on server
    return this.actions$.pipe(
      ofType(PlayerActions.changeVolume),
      exhaustMap(action => {
        // change player volume
        this.player.changeVolume(action.volume)
        // Change the volume on the server
        return this.playerService.setUserVolume(action.volume).pipe(
          pluck('data', 'setUserVolume'),
          map(data => {
            return PlayerActions.changeVolumeSuccess({ volume: +data })
          })
        )
      })
    )
  })

  playPause$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlayerActions.playPauseStart),
      concatLatestFrom(action => this.store.select(PlayerSelectors.getPlayer)),
      map(([action, playerState]) => {
        // PAUSE or PLAY
        if (playerState.playing) {
          this.player.pause()
        } else {
          this.player.play()
        }
        return PlayerActions.playPauseSuccess({ playing: !playerState.playing })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PlayerActions.playPauseFailure()]
      })
    )
  })

  addToQueue = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(PlayerActions.addToQueueStart),
      exhaustMap(action => {
        // Add the episode to the user's queue
        return this.playerService.addToPlayingQueue(action.episode.slug)
        // update the current queue
      })
    )
    const result$ = request$.pipe(
      pluck('data', 'addToPlayerQueue'),
      map((result: any) => {
        return PlayerActions.addToQueueSuccess({ plays: result })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PlayerActions.addToQueueFailure()]
      })
    )

    return result$
  })

  loadPlayingQueue = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(PlayerActions.getPlayingQueueStart),
      exhaustMap(action => {
        return this.playerService.getPlayingQueue()
      })
    )

    const response$ = request$.pipe(
      pluck('data', 'getPlayingQueue'),
      map((plays: Play[]) => {
        console.log(plays)
        return PlayerActions.getPlayingQueueSuccess({ plays: [] })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PlayerActions.getPlayingQueueFailure()]
      })
    )
    return response$
  })
}
