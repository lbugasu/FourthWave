import { NewUser } from './../../../shared/services/auth/User'
import { Action, createAction, props } from '@ngrx/store'
import { User } from 'src/app/shared/Models/User'

export const SIGN_IN_START = '[sign in] sign in start'
export const SIGN_IN_SUCCESS = '[sign in] sign in success'
export const SIGN_IN_FAILURE = '[sign in] sign in failure'
export const SIGN_UP_START = '[sign up] sign up start'
export const SIGN_UP_SUCCESS = '[sign up] sign in success'
export const SIGN_UP_FAILURE = '[sign up] sign in failure'

export const signInStart = createAction(
  SIGN_IN_START,
  props<{ username: string; password: string }>()
)
export const signInSuccess = createAction(
  'sign_in_success',
  props<{ user: User }>()
)
export const signInFailure = createAction('sign_in_failure')

export const signUpStart = createAction('sign_up', props<{ user: NewUser }>())
export const signUpSuccess = createAction(
  'sign_up_success',
  props<{ user: User }>()
)
export const signInWithToken = createAction('sign_in_with_token')
export const signUpFailure = createAction('sign_up_failure')

export const signOut = createAction('sign_out', props<{ token: string }>())
export const signOutSuccess = createAction('sign_out_success')

export const signOutFailure = createAction('sign_out_failure')

// export const changeVolume = createAction(
//   'change_volume',
//   props<{ volume: number }>()
// )

// action types
