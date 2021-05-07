import { User } from 'src/app/shared/Models'
export const USER_STATE_NAME = 'user'

export interface UserState extends User {
  loading: boolean
  loaded: boolean
  loggedIn: boolean
  subscribeInProgress: boolean
  subscribeDone: boolean
  likePodcastInProgress: boolean
  likePodcastDone: boolean
  likeEpisodeInProgress: boolean
  likeEpisodeDone: boolean
  bookmarkEpisodeInProgress: boolean
  bookmarkEpisodeDone: boolean

  // UNDO ACTION
  unsubscribeInProgress: boolean
  unsubscribeDone: boolean
  unlikePodcastInProgress: boolean
  unlikePodcastDone: boolean
  unlikeEpisodeInProgress: boolean
  unlikeEpisodeDone: boolean
  unbookmarkEpisodeInProgress: boolean
  unbookmarkEpisodeDone: boolean
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
  subscribeDone: false,
  likePodcastInProgress: false,
  likePodcastDone: false,
  likeEpisodeInProgress: false,
  likeEpisodeDone: false,
  bookmarkEpisodeInProgress: false,
  bookmarkEpisodeDone: false,
  //UNDO an action
  unsubscribeInProgress: false,
  unsubscribeDone: false,
  unlikePodcastInProgress: false,
  unlikePodcastDone: false,
  unlikeEpisodeInProgress: false,
  unlikeEpisodeDone: false,
  unbookmarkEpisodeInProgress: true,
  unbookmarkEpisodeDone: false
}
