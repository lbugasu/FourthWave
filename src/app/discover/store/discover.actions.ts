import { createAction, props } from '@ngrx/store'
import { Episode } from 'src/app/shared/Models/Episode'
import { Podcast } from 'src/app/shared/Models/Podcast'
export const LOAD_DISCOVER_START = 'load discover start'
export const LOAD_DISCOVER_SUCCESS = 'load discover success'
export const LOAD_DISCOVER_FAILURE = 'load discover failure'

export const loadDiscoverStart = createAction(LOAD_DISCOVER_START)

export const loadDiscoverSuccess = createAction(
  LOAD_DISCOVER_SUCCESS,
  props<{
    featured: Podcast[]
    trending: Podcast[]
    genres: string[]
    mostPopular: Podcast[]
    topEpisodes: Episode[]
  }>()
)

export const loadDiscoverFailure = createAction( LOAD_DISCOVER_FAILURE)