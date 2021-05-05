import { Episode } from './'
import { Podcast } from './'

export default class Topic {
  type: string
  name: string
  episodes: Episode[]
  podcasts: Podcast[]
}
