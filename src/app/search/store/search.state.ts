import { Category, Episode, Podcast, Topic } from 'src/app/shared/Models'
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
  recommendationsLoading: boolean
  recommendationsLoaded: boolean
  topicRecommendations: Topic[]
  categoryRecommendations: Category[]
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
  episodeSearchPage: 0,
  recommendationsLoading: false,
  recommendationsLoaded: false,
  topicRecommendations: [],
  categoryRecommendations: []
}
