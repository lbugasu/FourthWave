import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PlayerState } from '../state/player.state'

const getPlayerState = createFeatureSelector<PlayerState>('player')

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

export const getMini = createSelector(getPlayer, state => {
  return state.mini
})
