import { User } from 'src/app/shared/Models'
export const USER_STATE_NAME = 'user'

export interface UserState extends User {
  loading: boolean
  loaded: boolean
  loggedIn: boolean
  subscribeInProgress: boolean
  subscribeDone: boolean
}

export const initialUserState: UserState = {
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  active: false,
  likedPodcasts: [],
  likedEpisodes: [],
  bookmarkedEpisodes: [],
  subscribedPodcasts: [],
  plays: [],
  playingSpeed: 1,
  volume: 0.5,
  loading: false,
  loaded: false,
  authtoken: null,
  loggedIn: false,
  queue: [],
  subscribeInProgress: false,
  subscribeDone: false
}
