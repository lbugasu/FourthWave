import { setUser } from './app.action'
import { createReducer, on } from '@ngrx/store'
import { AppState } from './app.selector'
const initialState: AppState = {}

export const _userReducer = createReducer(initialState)

export function userReducer (state: AppState, action: any): AppState {
  return _userReducer(state, action)
}
