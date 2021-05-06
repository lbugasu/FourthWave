import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Podcast } from 'src/app/shared/Models'
import {
  GlobalPodcastState,
  initialPodState,
  PodcastState,
  PODCAST_STATE_NAME
} from './podcast.state'

export const geGlobalPodcastState = createFeatureSelector<GlobalPodcastState>(
  PODCAST_STATE_NAME
)

export const getPodcastState = createSelector(
  geGlobalPodcastState,
  (state: GlobalPodcastState) => {
    return state
  }
)

export const getPodcast = (slug: string) =>
  createSelector(getPodcastState, (state: GlobalPodcastState) => {
    const podcastIndex = state.library.findIndex(
      (pod: Podcast) => pod.slug == slug
    )
    // console.log(state.library[podcastIndex])
    return !!state.library[podcastIndex]
      ? state.library[podcastIndex]
      : initialPodState
  })
