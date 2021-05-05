import { Episode } from './'

export default class Podcast {
  public title!: string

  public publisher!: string

  public rssFeed!: string

  public link!: string

  public image!: string

  public description!: string

  public lastRssBuildDate!: Date

  public slug!: string

  public categories!: string[]

  public episodes!: Episode[]

  public palette!: string[]
}
