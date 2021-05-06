import { Episode } from './'
import { Play } from './'
import { Podcast } from './'

export default interface User {
  firstname: string
  lastname: string
  username: string
  email: string
  active: boolean
  likedPodcasts: Podcast[]
  likedEpisodes: Episode[]
  bookmarkedEpisodes: Episode[]
  subscribedPodcasts: Podcast[]
  plays: Play[]
  playingSpeed: number
  volume: number
  authtoken: string
  queue: Play[]
}

export interface NewUser {
  firstname?: string

  lastname?: string

  email: string

  username: string

  password: string
}
