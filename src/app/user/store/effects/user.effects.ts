import { AuthService } from '../../services/auth.service'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, pluck, tap } from 'rxjs/operators'

import * as userActions from '../actions/user.actions'
import * as PlayerActions from '../../../shared/player/store/player.actions'
import { User } from 'src/app/shared/Models/User'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
@Injectable()
export class UserEffects {
  constructor (
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.signInStart),
      exhaustMap(action => {
        return this.authService.signIn(action.username, action.password).pipe(
          tap(console.log),
          pluck('data', 'signin'),
          map((data: User) => {
            console.log(data)
            const user: User = data

            // Save the auth token to the local storage.
            localStorage.setItem('token', user.authtoken)
            this.store.dispatch(
              PlayerActions.getPlayingQueueSuccess({ plays: user.queue })
            )
            this.store.dispatch(
              PlayerActions.changeVolumeSuccess({ volume: user.volume })
            )
            return userActions.signInSuccess({ user: user })
          }),
          catchError(error => {
            console.log(error.message)
            return [userActions.signInFailure()]
          })
        )
      })
    )
  })

  signInWithtoken$ = createEffect(() => {
    console.log('signint in with token')
    const req$ = this.actions$.pipe(
      ofType(userActions.signInWithToken),
      exhaustMap(action => {
        console.log('here')
        return this.authService.signInWithToken()
      }),
      catchError(error => {
        return [userActions.signInFailure()]
      })
    )
    console.log(req$)
    req$.subscribe(console.log)

    const res$ = req$.pipe(
      tap(data => console.log(data)),
      pluck('data'),
      map((user: User) => {
        console.log(user)
        return userActions.signInSuccess({ user: user })
      }),
      catchError((error: Error) => {
        console.log('failed')
        return [userActions.signInFailure()]
      })
    )
    console.log('here 2')

    console.log(req$)
    return res$
  })

  signOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.signOutStart),
      exhaustMap(action => {
        return this.authService.signOut().pipe(
          pluck('data', 'signout'),
          map((result: boolean) => {
            return userActions.signOutSuccess()
          }),
          catchError(error => {
            console.log(error.message)
            return [userActions.signOutFailure()]
          })
        )
      })
    )
  })

  signUp$ = createEffect((): any => {
    const request$ = this.actions$.pipe(
      ofType(userActions.signUpStart),
      exhaustMap(action => {
        return this.authService.signUp({ ...action.user })
      })
    )

    const result$ = request$.pipe(
      pluck('data', 'signup'),
      map((result: User) => {
        return userActions.signUpSuccess({ user: result })
      }),
      catchError(error => {
        console.log(error.message)
        return [userActions.signInFailure]
      })
    )
    return result$
  })
}
