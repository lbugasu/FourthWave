import { createReducer, on } from '@ngrx/store'
import { initialUserState, UserState } from './user.state'
import { UserActions } from './'
const _userReducer = createReducer(
  initialUserState,
  on(UserActions.signInStart, state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  }),
  on(UserActions.signInWithTokenStart, state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  }),
  on(UserActions.signInSuccess, (state: UserState, action) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      loggedIn: true,
      ...action.user
    }
  }),
  on(UserActions.signInWithTokenSuccess, (state: UserState, action) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      loggedIn: true,
      ...action.user
    }
  }),
  on(UserActions.signInWithTokenFailure, (state: UserState, action) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      loggedIn: false
    }
  }),
  on(UserActions.signInFailure, state => {
    return { ...state, loading: false, loaded: false }
  }),
  on(UserActions.signUpStart, state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  }),
  on(UserActions.signUpSuccess, (state: UserState, action) => {
    return {
      ...state,
      ...action.user,
      loading: false,
      loaded: true,
      loggedIn: true
    }
  }),
  on(UserActions.signUpFailure, state => {
    return {
      ...state,
      loading: false,
      loaded: false
    }
  }),
  /** On Subscribing to a podcast
   *
   */
  on(UserActions.subscribeToPodcastStart, (state, action) => {
    return {
      ...state,
      subscribeInProgress: true,
      subscribeDone: false
    }
  }),
  /** Add the podcast to the user's subscribed podcasts
   */
  on(UserActions.subscribeToPodcastSuccess, (state, action) => {
    return {
      ...state,
      subscribedPodcasts: [...state.subscribedPodcasts, action.podcast],
      subscribeInProgress: false,
      subscribeDone: true
    }
  }),
  on(UserActions.subscribeToPodcastFailure, (state, action) => {
    return {
      ...state,
      subscribeInProgress: false,
      subscribeDone: false
    }
  }),
  /**
   * On Likeing a podcast
   *
   */
  on(UserActions.likePodcastStart, (state, action) => {
    return {
      ...state,
      likePodcastInProgress: true,
      likePodcastDone: false
    }
  }),
  /** Add the podcast to the user's subscribed podcasts
   */
  on(UserActions.likePodcastSuccess, (state, action) => {
    return {
      ...state,
      likedPodcasts: [...state.likedPodcasts, action.podcast],
      likePodcastInProgress: false,
      likePodcastDone: true
    }
  }),
  on(UserActions.likePodcastFailure, (state, action) => {
    return {
      ...state,
      likePodcastInProgress: true,
      likePodcastDone: false
    }
  }),
  /**
   * On Liking a podcast episode
   *
   */
  on(UserActions.likeEpisodeStart, (state, action) => {
    return {
      ...state,
      likeEpisodeInProgress: true,
      likeEpisodeDone: false
    }
  }),
  /** Add the podcast to the user's subscribed podcasts
   */
  on(UserActions.likeEpisodeSuccess, (state, action) => {
    return {
      ...state,
      likedEpisodes: [...state.likedEpisodes, action.episode],
      likeEpisodeInProgress: false,
      likeEpisodeDone: true
    }
  }),
  on(UserActions.likeEpisodeFailure, (state, action) => {
    return {
      ...state,
      likeEpisodeInProgress: true,
      likeEpisodeDone: false
    }
  }),
  /**
   * On bookmarking podcast episode
   *
   */
  on(UserActions.bookmarkEpisodeStart, (state, action) => {
    return {
      ...state,
      bookmarkEpisodeInProgress: true,
      bookmarkEpisodeDone: false
    }
  }),
  /** Add the podcast to the user's subscribed podcasts
   */
  on(UserActions.bookmarkEpisodeSuccess, (state, action) => {
    return {
      ...state,
      bookmarkedEpisodes: [...state.bookmarkedEpisodes, action.episode],
      bookmarkEpisodeInProgress: false,
      bookmarkEpisodeDone: true
    }
  }),
  on(UserActions.bookmarkEpisodeFailure, (state, action) => {
    return {
      ...state,
      bookmarkEpisodeInProgress: true,
      bookmarkEpisodeDone: false
    }
  })
)

export function userReducer (state, action) {
  return _userReducer(state, action)
}
