import { Episode } from './Episode'
import { Podcast } from './Podcast'

export class Topic {
  type: string
  name: string
  episodes: Episode[]
  podcasts: Podcast[]
}
