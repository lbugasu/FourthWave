import { createAction, props } from '@ngrx/store'
import { Category, Episode, Podcast } from 'src/app/shared/Models'

export const LOAD_DISCOVER_START = 'load discover start'
export const LOAD_DISCOVER_SUCCESS = 'load discover success'
export const LOAD_DISCOVER_FAILURE = 'load discover failure'

export const loadDiscoverStart = createAction(LOAD_DISCOVER_START)

export const loadDiscoverSuccess = createAction(
  LOAD_DISCOVER_SUCCESS,
  props<{
    featured: Podcast[]
    trending: Podcast[]
    categories: Category[]
    mostPopular: Podcast[]
    topEpisodes: Episode[]
  }>()
)

export const loadDiscoverFailure = createAction(LOAD_DISCOVER_FAILURE)
