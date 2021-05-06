import { createAction, props } from '@ngrx/store'
import { Episode, Podcast } from 'src/app/shared/Models'

const LOAD_PODCAST_START = 'load podcast start'
const LOAD_PODCAST_SUCCESS = 'load podcast success'
const LOAD_PODCAST_FAILURE = 'load podcast failure'

export const loadPodcastStart = createAction(
  LOAD_PODCAST_START,
  props<{ slug: string; page: number }>()
)
export const loadPodcastSuccess = createAction(
  LOAD_PODCAST_SUCCESS,
  props<{ podcast: Podcast }>()
)
export const loadPodcastFailure = createAction(
  LOAD_PODCAST_FAILURE,
  props<{ slug: string }>()
)

const LOAD_PODCAST_WITH_EPISODES_START = 'load podcast with episodes start'
const LOAD_PODCAST_WITH_EPISODES_SUCCESS = 'load podcast with episodes success'
const LOAD_PODCAST_WITH_EPISODES_FAILURE = 'load podcast with episodes failure'

export const loadPodcastWithEpisodesStart = createAction(
  LOAD_PODCAST_WITH_EPISODES_START,
  props<{ slug: string; page: number }>()
)
export const loadPodcastWithEpisodesSuccess = createAction(
  LOAD_PODCAST_WITH_EPISODES_SUCCESS,
  props<{ podcast: Podcast; episodes: Episode[] }>()
)
export const loadPodcastWithEpisodesFailure = createAction(
  LOAD_PODCAST_WITH_EPISODES_FAILURE,
  props<{ slug: string }>()
)

const LOAD_MORE_EPISODES_START = 'load more episodes start'
const LOAD_MORE_EPISODES_SUCCESS = 'load more episodes success'
const LOAD_MORE_EPISODES_FAILURE = 'load more episodes failure'

export const loadMoreEpisodesStart = createAction(
  LOAD_MORE_EPISODES_START,
  props<{ slug: string }>()
)
export const loadMoreEpisodesFailure = createAction(
  LOAD_MORE_EPISODES_FAILURE,
  props<{ slug: string }>()
)
export const loadMoreEpisodesSuccess = createAction(
  LOAD_MORE_EPISODES_SUCCESS,
  props<{ episodes: Episode[]; slug: string }>()
)
