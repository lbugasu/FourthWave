import { Podcast } from './'

export default interface Category {
  title: string
  podcasts: Podcast[]
  slug: string
}
