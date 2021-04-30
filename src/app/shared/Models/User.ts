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
