import { User } from 'src/app/shared/Models/User'

export const initialUserState: UserState = {
  username: 'lbugasu',
  firstname: 'lbugasu',
  lastname: 'lbugasu',
  email: 'lbugasu',
  active: false,
  likedPodcasts: [],
  likedEpisodes: [],
  bookmarkedEpisodes: [],
  plays: [],
  playingSpeed: 1,
  volume: 0.5,
  loading: false,
  loaded: false,
  authtoken: null
}
export interface UserState extends User {
  loading: boolean
  loaded: boolean
}
