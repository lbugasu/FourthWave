import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PlayerState } from './player.state'

export const PLAYER_STATE_NAME = 'player'
const getPlayerState = createFeatureSelector<PlayerState>(PLAYER_STATE_NAME)

export const getPlayer = createSelector(
  getPlayerState,
  (state: PlayerState) => {
    return state
  }
)

export const getPlayerVolume = createSelector(getPlayer, state => state.volume)

export const getPlaying = createSelector(getPlayer, state => state.playing)

export const getQueue = createSelector(getPlayer, state => {
  return state.queue
})

export const getCurrentlyPlayingItem = createSelector(getQueue, state => {
  return state[0]
})

export const getMini = createSelector(getPlayer, state => {
  return state.mini
})
