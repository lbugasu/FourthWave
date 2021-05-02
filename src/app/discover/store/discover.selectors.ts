import { DiscoverState, DISCOVER_STATE_NAME } from './discover.state'
import { createFeatureSelector, createSelector } from '@ngrx/store'

const getDiscoverState = createFeatureSelector<DiscoverState>(
  DISCOVER_STATE_NAME
)

export const getDiscover = createSelector(
  getDiscoverState,
  (state: DiscoverState) => {
    return state
  }
)

export const getDiscoverLoaded = createSelector(
  getDiscover,
  (state: DiscoverState) => {
    return state.loaded
  }
)
