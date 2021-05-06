import { UserState } from '../user/store/user.state'
import { userReducer } from '../user/store/user.reducer'

export interface AppState {
  user: UserState
}

export const appReducer = {
  user: userReducer
}
