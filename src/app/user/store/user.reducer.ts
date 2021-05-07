import { createReducer, on } from '@ngrx/store'
import { initialUserState, UserState } from './user.state'
import { UserActions } from './'
import { Episode, Podcast } from 'src/app/shared/Models'
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
   * On Liking a podcast
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
  }),
  /******************************************************* */
  /** On UNDOING an action to a podcast or episode
   *
   */
  on(UserActions.unsubscribeToPodcastStart, (state, action) => {
    return {
      ...state,
      unsubscribeInProgress: true,
      unsubscribeDone: false
    }
  }),
  /** Removethe podcast to the user's subscribed podcasts
   */
  on(UserActions.unsubscribeToPodcastSuccess, (state, action) => {
    const _subscribed = [...state.subscribedPodcasts]

    const indx = _subscribed.findIndex((podcast: Podcast) => {
      return podcast.slug == action.podcast.slug
    })

    _subscribed.splice(indx, 1)

    return {
      ...state,
      subscribedPodcasts: [..._subscribed],
      unsubscribeInProgress: false,
      unsubscribeDone: true
    }
  }),
  on(UserActions.unsubscribeToPodcastFailure, (state, action) => {
    return {
      ...state,
      unsubscribeInProgress: false,
      unsubscribeDone: false
    }
  }),
  /**
   * On UNLiking a podcast
   *
   */
  on(UserActions.unlikePodcastStart, (state, action) => {
    return {
      ...state,
      unlikePodcastInProgress: true,
      unlikePodcastDone: false
    }
  }),
  /** Remove the podcast to the user's subscribed podcasts
   */
  on(UserActions.unlikePodcastSuccess, (state, action) => {
    const _liked = [...state.likedPodcasts]

    const indx = _liked.findIndex((podcast: Podcast) => {
      return podcast.slug == action.podcast.slug
    })

    _liked.splice(indx, 1)

    return {
      ...state,
      likedPodcasts: [..._liked],
      unlikePodcastInProgress: false,
      unlikePodcastDone: true
    }
  }),
  on(UserActions.unlikePodcastFailure, (state, action) => {
    return {
      ...state,
      unlikePodcastInProgress: true,
      unlikePodcastDone: false
    }
  }),
  /**
   * On UNLiking a podcast episode
   *
   */
  on(UserActions.unlikeEpisodeStart, (state, action) => {
    return {
      ...state,
      unlikeEpisodeInProgress: true,
      unlikeEpisodeDone: false
    }
  }),
  /** Removes podcast to the user's subscribed podcasts
   */
  on(UserActions.unlikeEpisodeSuccess, (state, action) => {
    const _likedEpisodes = [...state.likedEpisodes]

    const indx = _likedEpisodes.findIndex((episode: Episode) => {
      return episode.slug == action.episode.slug
    })

    _likedEpisodes.splice(indx, 1)

    return {
      ...state,
      likedEpisodes: [..._likedEpisodes],
      unlikeEpisodeInProgress: false,
      unlikeEpisodeDone: true
    }
  }),
  on(UserActions.unlikeEpisodeFailure, (state, action) => {
    return {
      ...state,
      unlikeEpisodeInProgress: true,
      unlikeEpisodeDone: false
    }
  }),
  /**
   * On UNbookmarking podcast episode
   *
   */
  on(UserActions.unbookmarkEpisodeStart, (state, action) => {
    return {
      ...state,
      unbookmarkEpisodeInProgress: true,
      unbookmarkEpisodeDone: false
    }
  }),
  /** Removes podcast to the user's subscribed podcasts
   */
  on(UserActions.unbookmarkEpisodeSuccess, (state, action) => {
    const _bookmarkedEpisodes = [...state.bookmarkedEpisodes]

    const indx = _bookmarkedEpisodes.findIndex((episode: Episode) => {
      return episode.slug == action.episode.slug
    })

    _bookmarkedEpisodes.splice(indx, 1)

    return {
      ...state,
      bookmarkedEpisodes: [..._bookmarkedEpisodes],
      unbookmarkEpisodeInProgress: false,
      unbookmarkEpisodeDone: true
    }
  }),
  on(UserActions.unbookmarkEpisodeFailure, (state, action) => {
    return {
      ...state,
      unbookmarkEpisodeInProgress: true,
      unbookmarkEpisodeDone: false
    }
  }),
  on(UserActions.clearUserState, state => {
    return {
      ...initialUserState
    }
  })
)

export function userReducer (state, action) {
  return _userReducer(state, action)
}
