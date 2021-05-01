import { Episode } from 'src/app/shared/Models/Episode'
import { Podcast } from 'src/app/shared/Models/Podcast'

export const DISCOVER_STATE_NAME = 'discover'

// Define the initial state

export interface DiscoverState {
  featured: Podcast[]
  trending: Podcast[]
  genres: string[]
  topEpisodes: Episode[]
  mostPopular: Podcast[]
  loading: boolean
  loaded: boolean
}

export const initialDiscoverState: DiscoverState = {
  featured: [],
  trending: [],
  genres: [],
  topEpisodes: [],
  mostPopular: [],
  loading: false,
  loaded: false
}
