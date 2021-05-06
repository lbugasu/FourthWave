import { UserState, USER_STATE_NAME } from './user.state'
import { createFeatureSelector, createSelector } from '@ngrx/store'

const getUserState = createFeatureSelector<UserState>(USER_STATE_NAME)

export const getUser = createSelector(getUserState, (state: UserState) => {
  return state
})

export const getUserLoggedInStatus = createSelector(
  getUser,
  state => state.loggedIn
)

export const getToken = createSelector(getUser, state => {
  return state.authtoken
})

export const getPodcastSubscriptions = createSelector(getUser, state => {
  return state.subscribedPodcasts
})

export const getLikedPodcasts = createSelector(getUser, state => {
  return state.likedPodcasts
})

export const getLikedEpisodes = createSelector(getUser, state => {
  return state.likedEpisodes
})

export const checkSubscribedPodcast = (slug: string) =>
  createSelector(getPodcastSubscriptions, state => {
    const indx = state.findIndex(pod => pod.slug === slug)
    return indx >= 0
  })
export const checkLikedPodcast = (slug: string) =>
  createSelector(getLikedPodcasts, state => {
    const indx = state.findIndex(pod => pod.slug === slug)
    return indx >= 0
  })
