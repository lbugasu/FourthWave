import { Action, createAction, props } from '@ngrx/store'
import { User, NewUser, Episode, Podcast } from 'src/app/shared/Models'

export const SIGN_IN_START = 'sign in start'
export const SIGN_IN_SUCCESS = 'sign in success'
export const SIGN_IN_FAILURE = 'sign in failure'

export const SIGN_IN_WITH_TOKEN_START = 'sign in with token start'
export const SIGN_IN_WITH_TOKEN_SUCCESS = 'sign in with token success'
export const SIGN_IN_WITH_TOKEN_FAILURE = 'sign in with token failure'

export const SIGN_UP_START = 'sign up start'
export const SIGN_UP_SUCCESS = 'sign up success'
export const SIGN_UP_FAILURE = 'sign up failure'

export const SIGN_OUT_START = 'sign up start'
export const SIGN_OUT_SUCCESS = 'sign out success'
export const SIGN_OUT_FAILURE = 'sign out failure'

export const signInStart = createAction(
  SIGN_IN_START,
  props<{ username: string; password: string }>()
)
export const signInSuccess = createAction(
  SIGN_IN_SUCCESS,
  props<{ user: User }>()
)
export const signInFailure = createAction(SIGN_IN_FAILURE)

export const signUpStart = createAction(
  SIGN_UP_START,
  props<{ user: NewUser }>()
)
export const signUpSuccess = createAction(
  SIGN_UP_SUCCESS,
  props<{ user: User }>()
)
export const signInWithTokenStart = createAction(SIGN_IN_WITH_TOKEN_START)
export const signInWithTokenSuccess = createAction(
  SIGN_IN_WITH_TOKEN_SUCCESS,
  props<{ user: User }>()
)
export const signInWithTokenFailure = createAction(SIGN_IN_WITH_TOKEN_FAILURE)

export const signUpFailure = createAction(SIGN_UP_FAILURE)

export const signOutStart = createAction(
  SIGN_OUT_START,
  props<{ token: string }>()
)
export const signOutSuccess = createAction(SIGN_OUT_SUCCESS)

export const signOutFailure = createAction(SIGN_OUT_FAILURE)

const SUBSCRIBE_TO_PODCAST_START = 'subscribe to podcast start'
const SUBSCRIBE_TO_PODCAST_FAILURE = 'subscribe to podcast failure'
const SUBSCRIBE_TO_PODCAST_SUCCESS = 'subscribe to podcast success'

export const subscribeToPodcastStart = createAction(
  SUBSCRIBE_TO_PODCAST_START,
  props<{ slug: string }>()
)
export const subscribeToPodcastSuccess = createAction(
  SUBSCRIBE_TO_PODCAST_SUCCESS,
  props<{ podcast: Podcast }>()
)
export const subscribeToPodcastFailure = createAction(
  SUBSCRIBE_TO_PODCAST_FAILURE
)

const LIKE_PODCAST_START = 'like podcast start'
const LIKE_PODCAST_SUCCESS = 'like podcast success'
const LIKE_PODCAST_FAILURE = 'like podcast failure'

export const likePodcastStart = createAction(
  LIKE_PODCAST_START,
  props<{ slug: string }>()
)
export const likePodcastSuccess = createAction(
  LIKE_PODCAST_SUCCESS,
  props<{ podcast: Podcast }>()
)
export const likePodcastFailure = createAction(LIKE_PODCAST_FAILURE)

const LIKE_EPISODE_START = 'like episode start'
const LIKE_EPISODE_FAILURE = 'like episode failure'
const LIKE_EPISODE_SUCCESS = 'like episode success'

export const likeEpisodeStart = createAction(
  LIKE_EPISODE_START,
  props<{ slug: string }>()
)
export const likeEpisodeSuccess = createAction(
  LIKE_EPISODE_SUCCESS,
  props<{ episode: Episode }>()
)
export const likeEpisodeFailure = createAction(LIKE_EPISODE_FAILURE)

const BOOKMARK_EPISODE_START = 'bookmark episode start'
const BOOKMARK_EPISODE_FAILURE = 'bookmark episode failure'
const BOOKMARK_EPISODE_SUCCESS = 'bookmark episode success'

export const bookmarkEpisodeStart = createAction(
  BOOKMARK_EPISODE_START,
  props<{ slug: string }>()
)
export const bookmarkEpisodeSuccess = createAction(
  BOOKMARK_EPISODE_SUCCESS,
  props<{ episode: Episode }>()
)
export const bookmarkEpisodeFailure = createAction(BOOKMARK_EPISODE_FAILURE)
