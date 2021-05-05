import { Podcast, Category, Episode } from 'src/app/shared/Models'

export const DISCOVER_STATE_NAME = 'discover'

// Define the initial state

export interface DiscoverState {
  featured: Podcast[]
  trending: Podcast[]
  categories: Category[]
  topEpisodes: Episode[]
  mostPopular: Podcast[]
  loading: boolean
  loaded: boolean
}

export const initialDiscoverState: DiscoverState = {
  featured: [],
  trending: [],
  categories: [],
  topEpisodes: [],
  mostPopular: [],
  loading: false,
  loaded: false
}
