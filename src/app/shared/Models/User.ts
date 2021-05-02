import { Episode } from './Episode'
import { Play } from './Play'
import { Podcast } from './Podcast'

export interface User {
  firstname: string
  lastname: string
  username: string
  email: string
  active: boolean
  likedPodcasts: Podcast[]
  likedEpisodes: Episode[]
  bookmarkedEpisodes: Episode[]
  plays: Play[]
  playingSpeed: number
  volume: number
  authtoken: string
}

export interface NewUser {
  firstname?: string

  lastname?: string

  email: string

  username: string

  password: string
}
