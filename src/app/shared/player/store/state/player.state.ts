import { Episode } from 'src/app/shared/Models/Episode'

export const initialPlayerState: PlayerState = {
  queue: [],
  playingState: false,
  mini: false,
  volume: 0.1,
  playing: false
}

export interface PlayerState {
  queue: Episode[]
  playingState: boolean
  mini: boolean
  volume: number
  playing: boolean
}
