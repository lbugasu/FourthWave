import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Category, Episode, Podcast, Topic } from 'src/app/shared/Models'
import { SearchState, SEARCH_STATE_NAME } from './search.state'

const getSearchState = createFeatureSelector<SearchState>(SEARCH_STATE_NAME)
export const getSearch = createSelector(
  getSearchState,
  (state: SearchState): SearchState => {
    return state
  }
)

export const getSearchTerm = createSelector(getSearch, (state: SearchState) => {
  return state.searchTerm
})
export const getSearchLoading = createSelector(
  getSearch,
  (state: SearchState): boolean => {
    return state.loading
  }
)

export const getSearchLoaded = createSelector(
  getSearch,
  (state: SearchState): boolean => {
    return state.loaded
  }
)

export const getPodcastResults = createSelector(
  getSearch,
  (state: SearchState): Podcast[] => {
    return state?.podcastResults
  }
)

export const getEpisodeResults = createSelector(
  getSearch,
  (state: SearchState): Episode[] => {
    return state?.episodeResults
  }
)

export const getSearchEpisodes = createSelector(
  getSearch,
  (state: SearchState): boolean => {
    return state.searchEpisodes
  }
)

export const getSearchPodcasts = createSelector(
  getSearch,
  (state: SearchState): boolean => {
    return state.searchPodcasts
  }
)

export const getPodcastSearchPage = createSelector(
  getSearch,
  (state: SearchState): number => {
    return state.podcastSearchPage
  }
)

export const getEpisodeSearchPage = createSelector(
  getSearch,
  (state: SearchState): number => {
    return state.episodeSearchPage
  }
)

export const getRecommendedTopics = createSelector(
  getSearch,
  (state: SearchState): Topic[] => {
    return state.topicRecommendations
  }
)

export const getRecommendedCategories = createSelector(
  getSearch,
  (state: SearchState): Category[] => {
    return state.categoryRecommendations
  }
)
