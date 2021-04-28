import { setUser } from './app.action'
import { createReducer, on } from '@ngrx/store'
import { AppState } from './app.selector'
const initialState: AppState = { user: { username: '', email: '' } }

export const _userReducer = createReducer(
  initialState,
  on(
    setUser,
    (state: AppState, { user }): AppState => ({ ...state, user: user })
  )
)

export function userReducer (state: AppState, action: any): AppState {
  return _userReducer(state, action)
}
