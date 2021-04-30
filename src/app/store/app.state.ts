import { PlayerState } from './../shared/player/store/state/player.state'
import { UserState } from '../user/store/state/user.state'
import { playerReducer } from '../shared/player/store/reducers'
import { userReducer } from '../user/store/reducers/user.reducer'

export interface AppState {
  player: PlayerState
  user: UserState
}

export const appReducer = {
  player: playerReducer,
  user: userReducer
}
