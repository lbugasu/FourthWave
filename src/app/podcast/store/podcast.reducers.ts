import {
  GlobalPodcastState,
  initialPodcastState,
  PodcastState
} from './podcast.state'
import { createReducer, on } from '@ngrx/store'
import * as PodcastActions from './podcast.actions'
import { Podcast } from 'src/app/shared/Models'

const _podcastReducer = createReducer(
  initialPodcastState,
  on(
    /** On loading podcasts with its episodes,
     * create a new podcast object and populate it with it's slug
     */
    PodcastActions.loadPodcastWithEpisodesStart,
    (state: GlobalPodcastState, action) => {
      let newPodcastState: PodcastState = {
        loading: true,
        loaded: false,
        slug: action.slug,
        title: '',
        publisher: '',
        image: '',
        link: '',
        lastRssBuildDate: new Date(),
        categories: [],
        episodes: [],
        palette: [],
        page: 1,
        rssFeed: '',
        description: ''
      }
      const index = state.library.findIndex(
        (pod: Podcast) => pod.slug == action.slug
      )
      if (index >= 0) {
        newPodcastState = state.library[index]
        const newState = [...state.library]
        newState[index] = { ...newPodcastState, loaded: false, loading: true }
        return {
          ...state,
          library: [...newState]
        }
      } else {
        return {
          ...state,
          library: [...state.library, { ...newPodcastState }]
        }
      }
    }
  ),
  /** On load podcast with episodes Success,
   * Update the loading state to loaded,
   * Update the podcast object and its episodes
   */
  on(
    PodcastActions.loadPodcastWithEpisodesSuccess,
    (state: GlobalPodcastState, action) => {
      // const podcast = podcast
      const index = state.library.findIndex(
        (pod: Podcast) => pod.slug == action.podcast.slug
      )
      const pod = {
        ...state.library[index],
        ...action.podcast,
        loaded: true,
        loading: false,
        episodes: [...action.episodes]
      }
      const copy = [...state.library]

      copy[index] = pod

      return {
        ...state,
        library: [...copy]
      }
    }
  ),
  /** On Load podcast with episodes failure,
   * Update the stae of the podcast to:
   *      {loaded: false, loading: false}
   */
  on(
    PodcastActions.loadPodcastWithEpisodesFailure,
    (state: GlobalPodcastState, action) => {
      const podcasts: PodcastState[] = state.library
      const index = state.library.findIndex(
        (pod: Podcast) => pod.slug == action.slug
      )

      const pod = {
        ...podcasts[index],
        loading: false,
        loaded: false
      }

      const copy = [...state.library]
      copy[index] = pod
      return {
        ...state,
        library: [...copy]
      }
    }
  ),
  /** On load Podcast start,
   * Create a new podcast index, with the slug of the podcast
   */
  on(PodcastActions.loadPodcastStart, (state: GlobalPodcastState, action) => {
    let newPodcastState: PodcastState = {
      loading: true,
      loaded: false,
      slug: action.slug,
      title: '',
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
    const index = state.library.findIndex(
      (pod: Podcast) => pod.slug == action.slug
    )
    if (index >= 0) {
      newPodcastState = state.library[index]
      const newState = [...state.library]
      newState[index] = { ...newPodcastState, loaded: false, loading: true }
      return {
        ...state,
        library: [...newState]
      }
    } else {
      return {
        ...state,
        library: [...state.library, { ...newPodcastState }]
      }
    }
  }),
  /**
   * On loading a podcast:
   * Add a podcast to the index if it wasn't loaded previously
   */
  on(PodcastActions.loadPodcastSuccess, (state, action) => {
    const index = state.library.findIndex(
      (pod: Podcast) => pod.slug == action.podcast.slug
    )

    const pod = {
      ...state.library[index],
      ...action.podcast,
      loaded: true,
      loading: false,
      episodes: [],
      page: 0
    }
    const copy = [...state.library]

    if (index < 0) {
      copy.push(pod)
    } else {
      copy[index] = pod
    }

    return { ...state, library: [...copy] }
  }),
  /**
   * On loadMoreEpisodes START, create a new podcast index , if it doesn't exist, and update the state
   */
  on(PodcastActions.loadMoreEpisodesStart, (state, action) => {
    const index = state.library.findIndex(
      (_pod: Podcast) => _pod.slug == action.slug
    )
    const pod = {
      ...state.library[index],

      loaded: true,
      loading: true
    }
    const copy = [...state.library]

    if (index < 0) {
      copy.push(pod)
    } else {
      copy[index] = pod
    }

    return { ...state, library: [...copy] }
  }),
  /**
   * On loadMoreEpisodes Success,
   * add the podcasts to the current list of podcasts
   * Increase the page number by 1
   */
  on(PodcastActions.loadMoreEpisodesSuccess, (state, action) => {
    const index = state.library.findIndex(
      (_pod: Podcast) => _pod.slug == action.slug
    )
    const pod = {
      ...state.library[index],
      loaded: true,
      loading: false,
      episodes: [...state.library[index].episodes, ...action.episodes],
      page: state.library[index].page + 1
    }
    const copy = [...state.library]

    if (index < 0) {
      copy.push(pod)
    } else {
      copy[index] = pod
    }

    return { ...state, library: [...copy] }
  }),
  /** On load more episodes FAILURE,
   * Update the  loading state
   */
  on(PodcastActions.loadMoreEpisodesFailure, (state, action) => {
    const index = state.library.findIndex(
      (_pod: Podcast) => _pod.slug == action.slug
    )
    const pod = {
      ...state.library[index],
      loaded: true,
      loading: false,
      episodes: [...state.library[index].episodes],
      page: state.library[index].page
    }
    const copy = [...state.library]

    if (index < 0) {
      copy.push(pod)
    } else {
      copy[index] = pod
    }

    return { ...state, library: [...copy] }
  })
)

export const podcastReducer = (state, action) => {
  return _podcastReducer(state, action)
}
