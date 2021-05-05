// Store a list of podcasts for the user, for each, if loaded

import { Podcast } from 'src/app/shared/Models'

export const PODCAST_STATE_NAME = 'podcast'
// load from the store
export interface PodcastState extends Podcast {
  loaded: boolean
  loading: boolean
  page: number
}

export interface GlobalPodcastState {
  podcasts: PodcastState[]
}
export const initialPodcastState: GlobalPodcastState = {
  podcasts: []
}
