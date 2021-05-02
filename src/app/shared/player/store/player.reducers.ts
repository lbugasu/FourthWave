import * as PlayerActions from './player.actions'
import { createReducer, on } from '@ngrx/store'
import { initialPlayerState } from './player.state'

const _playerReducer = createReducer(
  initialPlayerState,
  on(PlayerActions.changeVolume, (state, action) => {
    return { ...state }
  }),
  on(PlayerActions.changeVolumeSuccess, (state, action) => {
    return { ...state, volume: +action.volume }
  }),
  on(PlayerActions.addToQueueStart, (state, action) => {
    return { ...state }
  }),
  on(PlayerActions.addToQueueSuccess, (state, action) => {
    return { ...state, queue: action.plays }
  }),
  on(PlayerActions.addToQueueFailure, state => {
    // How do we deal with failure?
    return { ...state }
  }),
  on(PlayerActions.getPlayingQueueStart, state => {
    return {
      ...state,
      loadingPlayPlayingQueue: true
    }
  }),
  on(PlayerActions.getPlayingQueueSuccess, (state, action) => {
    return {
      ...state,
      loadingPlayPlayingQueue: false,
      loadedPlayingQueue: true,
      queue: action.plays
    }
  }),
  on(PlayerActions.getPlayingQueueFailure, state => {
    return {
      ...state,
      loadingPlayPlayingQueue: false,
      loadedPlayingQueue: false
    }
  }),
  on(PlayerActions.playPauseSuccess, (state, action) => {
    return { ...state, playing: action.playing }
  }),
  on(PlayerActions.playPauseFailure, (state, action) => {
    return { ...state }
  }),
  on(PlayerActions.pauseStart, state => {
    return { ...state }
  }),
  on(PlayerActions.stopStart, state => {
    return { ...state }
  }),
  on(PlayerActions.nextStart, state => {
    return { ...state }
  }),
  on(PlayerActions.prevStart, state => {
    return { ...state }
  }),
  on(PlayerActions.forwardStart, state => {
    return { ...state }
  }),
  on(PlayerActions.rewindStart, state => {
    return { ...state }
  }),
  on(PlayerActions.toggleMiniPlayer, state => {
    return { ...state, mini: !state.mini }
  })
)
export function playerReducer (state, action) {
  return _playerReducer(state, action)
}
