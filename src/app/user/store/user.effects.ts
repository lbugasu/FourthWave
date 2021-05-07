import { Router } from '@angular/router'
import { setContext } from '@apollo/client/link/context'
import { Apollo } from 'apollo-angular'
import { UserService } from '../services/user.service'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, pluck, tap } from 'rxjs/operators'

import { UserActions } from './'
import * as PlayerActions from '../../shared/player/store/player.actions'
import { Episode, Podcast, User } from 'src/app/shared/Models'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
@Injectable()
export class UserEffects {
  constructor (
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>,
    private apollo: Apollo,
    private router: Router
  ) {}

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.signInStart),
      exhaustMap(action => {
        return this.userService.signIn(action.username, action.password).pipe(
          pluck('data', 'signin'),
          map((data: User) => {
            const user: User = data

            // Save the auth token to the local storage.
            localStorage.setItem('token', user.authtoken)
            this.store.dispatch(
              PlayerActions.getPlayingQueueSuccess({ plays: user.queue })
            )
            this.store.dispatch(
              PlayerActions.changeVolumeSuccess({ volume: user.volume })
            )
            this.router.navigateByUrl('')
            return UserActions.signInSuccess({ user: user })
          }),
          catchError(error => {
            console.log(error.message)
            return [UserActions.signInFailure()]
          })
        )
      })
    )
  })

  signInWithtoken$ = createEffect(() => {
    const req$ = this.actions$.pipe(
      ofType(UserActions.signInWithTokenStart),
      exhaustMap(action => {
        return this.userService.signInWithToken()
      }),
      catchError(error => {
        return [UserActions.signInFailure()]
      })
    )

    const res$ = req$.pipe(
      pluck('data', 'signInWithToken'),
      map((user: User) => {
        this.store.dispatch(
          PlayerActions.getPlayingQueueSuccess({ plays: user.queue })
        )
        this.store.dispatch(
          PlayerActions.changeVolumeSuccess({ volume: user.volume })
        )
        return UserActions.signInWithTokenSuccess({ user: user })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.signInWithTokenFailure()]
      })
    )

    return res$
  })

  signOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.signOutStart),
      exhaustMap(action => {
        return this.userService.signOut().pipe(
          pluck('data', 'signout'),
          map((result: boolean) => {
            return UserActions.signOutSuccess()
          }),
          catchError(error => {
            console.log(error.message)
            return [UserActions.signOutFailure()]
          })
        )
      })
    )
  })

  signUp$ = createEffect((): any => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.signUpStart),
      exhaustMap(action => {
        return this.userService.signUp({ ...action.user })
      })
    )

    const result$ = request$.pipe(
      pluck('data', 'signup'),
      map((result: User) => {
        return UserActions.signUpSuccess({ user: result })
      }),
      catchError(error => {
        console.log(error.message)
        return [UserActions.signUpFailure()]
      })
    )
    return result$
  })

  subscribeToPodcast$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.subscribeToPodcastStart),
      exhaustMap(action => {
        return this.userService.subscribeToPodcast(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'subscribeToPodcast'),
      map((podcast: Podcast) => {
        return UserActions.subscribeToPodcastSuccess({ podcast: podcast })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.subscribeToPodcastFailure()]
      })
    )
    return response$
  })

  likePodcast$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.likePodcastStart),
      exhaustMap(action => {
        return this.userService.likePodcast(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'likePodcast'),
      map((podcast: Podcast) => {
        return UserActions.likePodcastSuccess({ podcast: podcast })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.likePodcastFailure()]
      })
    )
    return response$
  })

  likeEpisode$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.likeEpisodeStart),
      exhaustMap(action => {
        return this.userService.likeEpisode(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'likeEpisode'),
      map((episode: Episode) => {
        return UserActions.likeEpisodeSuccess({ episode: episode })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.likeEpisodeFailure()]
      })
    )
    return response$
  })

  bookmarkEpisode$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.bookmarkEpisodeStart),
      exhaustMap(action => {
        return this.userService.bookmarkEpisode(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'likeEpisode'),
      map((episode: Episode) => {
        return UserActions.bookmarkEpisodeSuccess({ episode: episode })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.bookmarkEpisodeFailure()]
      })
    )
    return response$
  })

  unsubscribeToPodcast$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.unsubscribeToPodcastStart),
      exhaustMap(action => {
        return this.userService.unsubscribeToPodcast(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'unsubscribeToPodcast'),
      map((podcast: Podcast) => {
        return UserActions.unsubscribeToPodcastSuccess({ podcast: podcast })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.unsubscribeToPodcastFailure()]
      })
    )
    return response$
  })

  unlikePodcast$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.unlikePodcastStart),
      exhaustMap(action => {
        return this.userService.unlikePodcast(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'unlikePodcast'),
      map((podcast: Podcast) => {
        return UserActions.unlikePodcastSuccess({ podcast: podcast })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.unlikePodcastFailure()]
      })
    )
    return response$
  })

  unlikeEpisode$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.unlikeEpisodeStart),
      exhaustMap(action => {
        return this.userService.unlikeEpisode(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'unlikeEpisode'),
      map((episode: Episode) => {
        return UserActions.unlikeEpisodeSuccess({ episode: episode })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.unlikeEpisodeFailure()]
      })
    )
    return response$
  })

  unbookmarkEpisode$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(UserActions.unbookmarkEpisodeStart),
      exhaustMap(action => {
        return this.userService.unbookmarkEpisode(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'unlikeEpisode'),
      map((episode: Episode) => {
        return UserActions.unbookmarkEpisodeSuccess({ episode: episode })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [UserActions.unbookmarkEpisodeFailure()]
      })
    )
    return response$
  })
}
