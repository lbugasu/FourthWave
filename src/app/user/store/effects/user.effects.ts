import { AuthService } from './../../../shared/services/auth/auth.service'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, pluck } from 'rxjs/operators'

import * as userActions from '../actions/user.actions'
import { User } from 'src/app/shared/Models/User'
@Injectable()
export class UserEffects {
  constructor (private actions$: Actions, private authService: AuthService) {}

  signIn$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(userActions.signInStart),
      exhaustMap(action => {
        return this.authService.signIn(action.username, action.password).pipe(
          pluck('data', 'signin'),
          map((data: User) => {
            console.log(data)
            const user: User = data

            // Save the auth token to the local storage.
            localStorage.setItem('token', user.authtoken)
            return userActions.signInSuccess({ user })
          }),
          catchError(error => {
            console.log(error.message)
            return [userActions.signInFailure()]
          })
        )
      })
    )
  })

  signInWithtoken$ = createEffect((): any => {
    const req$ = this.actions$.pipe(
      ofType(userActions.signInWithToken),
      exhaustMap(action => {
        return this.authService.signInWithToken()
      })
    )

    const res$ = req$.pipe(
      pluck('data', 'signInWithToken'),
      map((user: User) => {
        console.log(user)
        return userActions.signInSuccess({ user })
      }),
      catchError(error => {
        return [userActions.signInFailure()]
      })
    )
    return res$
  })
  signOut$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(userActions.signOut),
      exhaustMap(action => {
        return this.authService.signOut().pipe(
          pluck('data', 'signout'),
          map((result: boolean) => {
            return userActions.signOutSuccess
          }),
          catchError(error => {
            console.log(error.message)
            return [userActions.signOutFailure]
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
        return userActions.signUpSuccess
      }),
      catchError(error => {
        console.log(error.message)
        return [userActions.signInFailure]
      })
    )
    return result$
  })
}
