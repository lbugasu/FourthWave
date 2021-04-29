import { Action } from '@ngrx/store'
import { User } from 'src/app/shared/services/auth/User'

export const SIGN_IN = 'Sign In'
export const SIGN_IN_SUCCESS = 'Sign In'
export const SIGN_IN_FAILURE = 'Sign In'

export const SIGN_UP = 'Sign Up'
export const SIGN_UP_SUCCESS = 'Sign Up'
export const SIGN_UP_FAILURE = 'Sign Up'

export const SIGN_OUT = 'Sign Up'
export const SIGN_OUT_SUCCESS = 'Sign Up'
export const SIGN_OUT_FAILURE = 'Sign Up'

export class SignIn implements Action {
  readonly type = SIGN_IN
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS
  constructor (public payload: User) {}
}

export class SignInFailure implements Action {
  readonly type = SIGN_IN_FAILURE
  constructor (public payload: any) {}
}

export class SignUp implements Action {
  readonly type = SIGN_UP
}

export class SignUpSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS
  constructor (public payload: User) {}
}

export class SignUpFailure implements Action {
  readonly type = SIGN_IN_FAILURE
  constructor (public payload: any) {}
}

// action types
export type UserAction =
  | SignIn
  | SignInSuccess
  | SignInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
