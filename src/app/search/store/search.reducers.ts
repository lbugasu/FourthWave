import { initiaialSearchState, SearchState } from './search.state'
import { createReducer, on } from '@ngrx/store'
import * as SearchActions from './search.actions'
const _searchReducer = createReducer(
  initiaialSearchState,
  on(SearchActions.searchStart, (state: SearchState) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(SearchActions.searchSuccess, (state: SearchState, action) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      podcastResults: [
        ...(state.searchPodcasts ? action.podcasts : state.podcastResults)
      ],
      episodeResults: [
        ...(state.searchEpisodes ? action.episodes : state.episodeResults)
      ]
    }
  }),
  on(SearchActions.searchFailure, (state: SearchState, action) => {
    return {
      ...state,
      loading: false,
      loaded: false
    }
  }),
  on(SearchActions.setSearchTerm, (state: SearchState, action) => {
    return {
      ...state,
      searchTerm: action.searchTerm
    }
  }),
  on(SearchActions.setEpisodeSearchPage, (state: SearchState, action) => {
    return {
      ...state,
      episodeSearchPage: action.page
    }
  }),
  on(SearchActions.setPodcastSearchPage, (state: SearchState, action) => {
    return {
      ...state,
      podcastSearchPage: action.page
    }
  }),
  on(SearchActions.setSearchEpisodes, (state: SearchState, action) => {
    return {
      ...state,
      searchEpisodes: action.search
    }
  }),
  on(SearchActions.setSearchPodcasts, (state: SearchState, action) => {
    return {
      ...state,
      searchPodcasts: action.search
    }
  })
)

export const searchReducer = (state, action) => {
  return _searchReducer(state, action)
}
