import { createAction, props } from '@ngrx/store'
import { Category, Episode, Podcast, Topic } from 'src/app/shared/Models'

export const SEARCH_START = 'search start'
export const SEARCH_SUCCESS = 'search success'
export const SEARCH_FAILURE = 'search failure'
export const SET_SEARCH_PODCASTS = 'search podcasts'
export const SET_SEARCH_EPISODES = 'search episodes'
export const SET_PODCAST_SEARCH_PAGE = 'set podcast search page'
export const SET_EPISODE_SEARCH_PAGE = 'set episode search page'
export const SET_SEARCH_TERM = 'set search term'

export const searchStart = createAction(SEARCH_START)
export const searchSuccess = createAction(
  SEARCH_SUCCESS,
  props<{ episodes?: Episode[]; podcasts?: Podcast[] }>()
)

export const searchFailure = createAction(SEARCH_FAILURE)

export const setSearchPodcasts = createAction(
  SET_SEARCH_PODCASTS,
  props<{ search: boolean }>()
)
export const setSearchEpisodes = createAction(
  SET_SEARCH_EPISODES,
  props<{ search: boolean }>()
)
export const setSearchTerm = createAction(
  SET_SEARCH_TERM,
  props<{ searchTerm: string }>()
)

export const setEpisodeSearchPage = createAction(
  SET_EPISODE_SEARCH_PAGE,
  props<{ page: number }>()
)
export const setPodcastSearchPage = createAction(
  SET_PODCAST_SEARCH_PAGE,
  props<{ page: number }>()
)

export const LOAD_SEARCH_RECOMMENDATIONS_START =
  'load search recommendations start'
export const LOAD_SEARCH_RECOMMENDATIONS_SUCCESS =
  'load search recommendations success'
export const LOAD_SEARCH_RECOMMENDATIONS_FAILURE =
  'load search recommendations failure'

export const loadSearchRecommendationsStart = createAction(
  LOAD_SEARCH_RECOMMENDATIONS_START
)
export const loadSearchRecommendationsSuccess = createAction(
  LOAD_SEARCH_RECOMMENDATIONS_SUCCESS,
  props<{ categories: Category[]; topics: Topic[] }>()
)
export const loadSearchRecommendationsFailure = createAction(
  LOAD_SEARCH_RECOMMENDATIONS_FAILURE
)

const CLEAR_SEARCH_STATE = 'clear search state'
export const clearSearchState = createAction(CLEAR_SEARCH_STATE)
