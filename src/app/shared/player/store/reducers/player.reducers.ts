import * as playerActions from '../actions'
import { createReducer, on } from '@ngrx/store'
import { initialPlayerState } from '../state/player.state'

const _playerReducer = createReducer(
  initialPlayerState,
  on(playerActions.changeVolume, (state, action) => {
    return { ...state, volume: +action.value }
  }),
  on(playerActions.addToQueue, (state, action) => {
    return { ...state, queue: [action.episode, ...state.queue] }
  }),
  on(playerActions.play, state => {
    return { ...state, playing: !state.playing }
  }),
  on(playerActions.pause, state => {
    return { ...state }
  }),
  on(playerActions.stop, state => {
    return { ...state }
  }),
  on(playerActions.next, state => {
    return { ...state }
  }),
  on(playerActions.prev, state => {
    return { ...state }
  }),
  on(playerActions.fastForward, state => {
    return { ...state }
  }),
  on(playerActions.rewind, state => {
    return { ...state }
  }),
  on(playerActions.toggleMini, state => {
    return { ...state, mini: !state.mini }
  })
)
export function playerReducer (state, action) {
  return _playerReducer(state, action)
}
