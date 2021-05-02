import { UserState } from '../user/store/state/user.state'
import { userReducer } from '../user/store/reducers/user.reducer'

export interface AppState {
  user: UserState
}

export const appReducer = {
  user: userReducer
}
