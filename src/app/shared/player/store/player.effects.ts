import { AudioPlayer } from './../audio/audio.player'
import { Injectable } from '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'

import {
  catchError,
  debounceTime,
  exhaustMap,
  map,
  pluck,
  tap,
  throttleTime
} from 'rxjs/operators'
import { PlayerService } from '../services/player.service'
import { Play } from '../../Models/Play'
import { AppState } from 'src/app/store/app.state'
import * as PlayerActions from './player.actions'
import * as PlayerSelectors from './player.selectors'
import { Episode } from '../../Models/Episode'

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
        if (this.player.player.playing()) {
          this.player.player.pause()
        } else {
          this.player.player.play()
        }
        return PlayerActions.playPauseSuccess({ playing: !playerState.playing })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PlayerActions.playPauseFailure()]
      })
    )
  })

  addToBegginingOfQueue$ = createEffect(() => {
    let ep: Episode
    const request$ = this.actions$.pipe(
      ofType(PlayerActions.addToBeginningOfQueueStart),
      concatLatestFrom(action => this.store.select(PlayerSelectors.getPlayer)),
      exhaustMap(([action, playerState]) => {
        ep = action.episode

        const newPlay: Play = {
          episode: ep,
          completed: false,
          position: 0,
          started: false,
          _id: ''
        }
        if (!!this.player.player) this.player.player.pause()
        this.player.defineNewState(newPlay)
        this.player.player.play()

        return this.playerService.addToBeginningOfQueue(ep.slug)
      })
    )

    const response$ = request$.pipe(
      pluck('data', 'addToBeginningOfQueue'),
      map((play: Play) => {
        // this.player.pause()
        // this.player.defineNewState(play)
        // this.player.play()

        return PlayerActions.addToBeginningOfQueueSuccess({ play: play })
      }),
      catchError((error: Error) => {
        console.log(error.message)

        // On failure, still play the episode
        const newPlay: Play = {
          episode: ep,
          completed: false,
          position: 0,
          started: false,
          _id: ''
        }
        return [PlayerActions.addToBeginningOfQueueFailure({ play: newPlay })]
      })
    )
    return response$
  })
  addToQueue$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(PlayerActions.addToQueueStart),
      concatLatestFrom(action => this.store.select(PlayerSelectors.getPlayer)),
      exhaustMap(([action, playerState]) => {
        console.log(action.episode.slug)
        // Add the episode to the user's queue
        return this.playerService.addToPlayingQueue(action.episode.slug)
        // update the current queue
      })
    )
    const result$ = request$.pipe(
      pluck('data', 'addToPlayerQueue'),
      map((result: any) => {
        console.log(result)
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

  changePlayingSpeed$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(PlayerActions.changePlayingSpeed),
      concatLatestFrom(action => this.store.select(PlayerSelectors.getPlayer)),
      exhaustMap(([action, playerState]) => {
        return this.playerService.changePlayingSpeed(action.speed)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'changePlayingSpeed'),
      map((speed: number) => {
        return PlayerActions.changePlayingSpeedSuccess({ speed: speed })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PlayerActions.changePlayingSpeedFailure()]
      })
    )
    return response$
  })

  // Updates the current play position
  updatePlayPosition$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(PlayerActions.updatePlayPositionStart),
      concatLatestFrom(action =>
        this.store.select(PlayerSelectors.getCurrentlyPlayingItem)
      ),
      throttleTime(1000 * 10),
      exhaustMap(([action, playerState]) => {
        console.log('updating')

        return this.playerService.updatePlayPosition(
          action.position,
          action.item._id
        )
      })
    )

    const response$ = request$.pipe(
      pluck('data', 'updatePlayPosition'),
      map((play: Play) => {
        console.log('updated playing position')
        return PlayerActions.updatePlayPositionSuccess()
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PlayerActions.updatePlayingQueueFailure()]
      })
    )

    return response$
  })

  // Updates the queue
  updateQueue$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(PlayerActions.updatePlayingQueueStart),
      concatLatestFrom(action => this.store.select(PlayerSelectors.getQueue)),
      exhaustMap(([action, playerState]) => {
        return this.playerService.updatePlayerQueue(action.queue)
      })
    )

    const response$ = request$.pipe(
      pluck('data', 'updatePlayerQueue'),
      map((queue: Play[]) => {
        console.log('updated player queue')
        return PlayerActions.updatePlayingQueueSuccess({ queue: queue })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PlayerActions.updatePlayingQueueFailure()]
      })
    )
    return response$
  })

  // clears the queue
  clearQueue = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(PlayerActions.clearQueueStart),
      exhaustMap(() => {
        return this.playerService.clearQueue()
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'clearQueue'),
      map((response: any) => {
        console.log(response)
        return PlayerActions.clearQueueSuccess()
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PlayerActions.clearQueueFailure()]
      })
    )
    return response$
  })
}
