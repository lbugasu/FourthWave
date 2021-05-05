import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Podcast } from 'src/app/shared/Models'
import {
  GlobalPodcastState,
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
    return state.podcasts.find((podcast: Podcast) => podcast.slug == slug)
  })
