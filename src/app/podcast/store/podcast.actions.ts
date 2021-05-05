import { createAction, props } from '@ngrx/store'
import { Episode, Podcast } from 'src/app/shared/Models'
const LOAD_PODCAST_START = 'load podcast start'
const LOAD_PODCAST_SUCCESS = 'load podcast success'
const LOAD_PODCAST_FAILURE = 'load podcast failure'

export const loadPodcastStart = createAction(
  LOAD_PODCAST_START,
  props<{ slug: string }>()
)
export const loadPodcastSuccess = createAction(
  LOAD_PODCAST_SUCCESS,
  props<{ podcast: Podcast; episodes: Episode[] }>()
)
export const loadPodcastFailure = createAction(LOAD_PODCAST_FAILURE)

const LOAD_MORE_EPISODES_START = 'load more episodes start'
const LOAD_MORE_EPISODES_SUCCESS = 'load more episodes success'
const LOAD_MORE_EPISODES_FAILURE = 'load more episodes failure'

export const loadMoreEpisodeStart = createAction(LOAD_MORE_EPISODES_START)
export const loadMoreEpisodesFailure = createAction(LOAD_MORE_EPISODES_FAILURE)
export const loadMoreEpisodesSuccess = createAction(
  LOAD_MORE_EPISODES_SUCCESS,
  props<{ episodes: Episode[] }>()
)

const SUBSCRIBE_TO_PODCAST_START = 'subscribe to podcast start'
const SUBSCRIBE_TO_PODCAST_FAILURE = 'subscribe to podcast failure'
const SUBSCRIBE_TO_PODCAST_SUCCESS = 'subscribe to podcast success'

export const subscribeToPodcastStart = createAction(SUBSCRIBE_TO_PODCAST_START)
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

export const likePodcastStart = createAction(LIKE_PODCAST_START)
export const likePodcastSuccess = createAction(
  LIKE_PODCAST_SUCCESS,
  props<{ podcast: Podcast }>()
)
export const likePodcastFailure = createAction(LIKE_PODCAST_FAILURE)

const LIKE_EPISODE_START = 'like episode start'
const LIKE_EPISODE_FAILURE = 'like episode failure'
const LIKE_EPISODE_SUCCESS = 'like episode success'

export const likeEpisodeStart = createAction(LIKE_EPISODE_START)
export const likeEpisodeSuccess = createAction(
  LIKE_EPISODE_START,
  props<{ episode: Episode }>()
)
export const likeEpisodeFailure = createAction(LIKE_EPISODE_FAILURE)

const BOOKMARK_EPISODE_START = 'bookmark episode start'
const BOOKMARK_EPISODE_FAILURE = 'bookmark episode failure'
const BOOKMARK_EPISODE_SUCCESS = 'bookmark episode success'

export const bookmarkEpisodeStart = createAction(BOOKMARK_EPISODE_START)
export const bookmarkEpisodeSuccess = createAction(
  BOOKMARK_EPISODE_SUCCESS,
  props<{ episode: Episode }>()
)
export const bookmarkEpisodeFailure = createAction(BOOKMARK_EPISODE_FAILURE)
