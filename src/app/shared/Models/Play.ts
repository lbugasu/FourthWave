import { Episode } from './Episode'

export interface Play {
  episode: Episode
  position: number
  completed: boolean
  started: boolean
  _id: any
}
