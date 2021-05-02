import { Episode } from 'src/app/shared/Models/Episode'
import { Podcast } from 'src/app/shared/Models/Podcast'

export const SEARCH_STATE_NAME = 'search'

export interface SearchState {
  loading: boolean
  loaded: boolean
  searchTerm: string
  podcastResults: Podcast[]
  episodeResults: Episode[]
  searchPodcasts: boolean
  searchEpisodes: boolean
  podcastSearchPage: number
  episodeSearchPage: number
}

export const initiaialSearchState: SearchState = {
  loading: false,
  loaded: false,
  searchTerm: '',
  podcastResults: [],
  episodeResults: [],
  searchEpisodes: false,
  searchPodcasts: true,
  podcastSearchPage: 0,
  episodeSearchPage: 0
}
