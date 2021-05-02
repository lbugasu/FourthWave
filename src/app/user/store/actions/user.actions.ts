import { NewUser } from '../../../shared/Models/User'
import { Action, createAction, props } from '@ngrx/store'
import { User } from 'src/app/shared/Models/User'

export const SIGN_IN_START = 'sign in start'
export const SIGN_IN_SUCCESS = 'sign in success'
export const SIGN_IN_FAILURE = 'sign in failure'

export const SIGN_IN_WITH_TOKEN = 'sign in with token'

export const SIGN_UP_START = 'sign up start'
export const SIGN_UP_SUCCESS = 'sign up success'
export const SIGN_UP_FAILURE = 'sign up failure'

export const SIGN_OUT_START = 'sign up start'
export const SIGN_OUT_SUCCESS = 'sign out success'
export const SIGN_OUT_FAILURE = 'sign out failure'

export const signInStart = createAction(
  SIGN_IN_START,
  props<{ username: string; password: string }>()
)
export const signInSuccess = createAction(
  SIGN_IN_SUCCESS,
  props<{ user: User }>()
)
export const signInFailure = createAction(SIGN_IN_FAILURE)

export const signUpStart = createAction(
  SIGN_UP_START,
  props<{ user: NewUser }>()
)
export const signUpSuccess = createAction(
  SIGN_UP_SUCCESS,
  props<{ user: User }>()
)
export const signInWithToken = createAction(SIGN_IN_WITH_TOKEN)
export const signUpFailure = createAction(SIGN_UP_FAILURE)

export const signOutStart = createAction(
  SIGN_OUT_START,
  props<{ token: string }>()
)
export const signOutSuccess = createAction(SIGN_OUT_SUCCESS)

export const signOutFailure = createAction(SIGN_OUT_FAILURE)

// export const changeVolume = createAction(
//   'change_volume',
//   props<{ volume: number }>()
// )

// action types
