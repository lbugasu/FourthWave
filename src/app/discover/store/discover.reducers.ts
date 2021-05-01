import { createReducer, on } from '@ngrx/store'
import * as discoverActions from './discover.actions'
import { DiscoverState, initialDiscoverState } from './discover.state'

const _discoverReducer = createReducer(
  initialDiscoverState,
  on(discoverActions.loadDiscoverStart, (state: DiscoverState) => {
    return { ...state, loading: true, loaded: false }
  }),
  on(discoverActions.loadDiscoverSuccess, (state: DiscoverState, action) => {
    return {
      ...state,
      featured: action.featured,
      trending: action.trending,
      genres: action.genres,
      topEpisodes: action.topEpisodes,
      mostPopular: action.mostPopular,
      loading: false,
      loaded: true
    }
  }),
  on(discoverActions.loadDiscoverFailure, (state: DiscoverState) => {
    return {
      ...state,
      loading: false,
      loaded: false
    }
  })
)

export const discoverReducer = (state, action) => {
  return _discoverReducer(state, action)
}
