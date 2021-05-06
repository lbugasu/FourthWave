// Store a list of podcasts for the user, for each, if loaded

import { Podcast } from 'src/app/shared/Models'

export const PODCAST_STATE_NAME = 'podcasts'
// load from the store
export interface PodcastState extends Podcast {
  loaded: boolean
  loading: boolean
  page: number
}

export interface GlobalPodcastState {
  library: PodcastState[]
}
export const initialPodcastState: GlobalPodcastState = {
  library: []
}

export const initialPodState = {
  loading: true,
  loaded: false,
  slug: '',
  title: 'sss',
  publisher: '',
  image: '',
  link: '',
  lastRssBuildDate: new Date(),
  categories: [],
  episodes: [],
  palette: [],
  page: 0,
  rssFeed: '',
  description: ''
}
