import { initialPodcastState } from './podcast.state'
import { createReducer, on } from '@ngrx/store'
import * as PodcastActions from './podcast.actions'

const _podcastReducer = createReducer(initialPodcastState)

export const podcastReducer = (state, action) => {
  return _podcastReducer(state, action)
}
