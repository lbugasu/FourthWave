import { Episode } from './'

export default interface Play {
  episode: Episode
  position: number
  completed: boolean
  started: boolean
  _id: any
}
