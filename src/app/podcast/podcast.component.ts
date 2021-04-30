import { switchMap } from 'rxjs/operators'
import { playerStore } from '../store/player'
import { PodcastService } from '../shared/services/podcast/podcast.service'
import { Component, OnInit } from '@angular/core'
import { Podcast } from 'src/app/shared/Models/Podcast'
import { Location } from '@angular/common'
import { pluck, first } from 'rxjs/operators'
import { Episode } from 'src/app/shared/Models/Episode'
import { Observable, Subscription } from 'rxjs'
import { BehaviorSubject } from 'rxjs'
const colors = require('nice-color-palettes')
import * as playerActions from '../shared/player/store/actions'
import * as playerSelectors from '../shared/player/store/selectors'

import { PlayerState } from 'src/app/shared/player/store/state/player.state'
import { Store } from '@ngrx/store'
@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  podcast$!: Observable<Podcast>
  slug!: string
  episodes: Episode[] = []
  pageNo = 0
  page = new BehaviorSubject<number>(this.pageNo)
  // playingState$: Observable<boolean>
  playing: boolean
  subscriptions!: Subscription
  episodeQueue: Episode[]
  constructor (
    private podcastService: PodcastService,
    private location: Location,
    private store: Store<{ player: PlayerState }>
  ) {
    // This data is passed on the router
    // If the data isn't loaded, load from the server
    const playingState$ = this.store.select(playerSelectors.getPlaying)

    this.subscriptions = playingState$.subscribe((status: boolean) => {
      this.playing = status
    })

    const episodeQueue$ = this.store.select(playerSelectors.getQueue)
    this.subscriptions.add(
      episodeQueue$.subscribe(episodes => {
        this.episodeQueue = episodes
      })
    )
    // const state: any = this.location.getState()

    // if (!!history.state.navigationId) {
    console.log(this.location.path())
    const slug = this.location.path().substr(9)
    this.slug = slug
    this.getPodcastEpisodes(this.slug)

    const query$ = this.podcastService.getPodcast(slug).valueChanges

    this.podcast$ = query$.pipe(first(), pluck('data', 'getPodcast'))

    // } else {

    //   this.podcast = history.state
    //   this.slug = this.podcast.slug
    //   this.getPodcastEpisodes(this.slug)
    // }
  }

  ngOnInit (): void {}

  getPodcastEpisodes (slug: string) {
    this.subscriptions.add(
      this.page
        .asObservable()
        .pipe(
          switchMap((value: number) => {
            return this.podcastService.getEpisodes(slug, value).valueChanges
          })
        )
        .pipe(pluck('data', 'getPodcastEpisodes'))
        .subscribe((episodes: any) => {
          this.episodes = [...this.episodes, ...episodes]
        })
    )
    const element = document.querySelector('#content')
    console.log(element)
  }

  getColors () {
    return colors[66]
  }
  getNiceDate (date: Date) {
    return new Date(date).toDateString()
  }
  getNiceDuration (duration: string) {
    if (duration.split(':').length == 1) {
      return new Date(+duration * 1000).toISOString().substr(11, 8)
    }
    return duration
  }

  play (episode: Episode) {
    const epIndx = this.episodeQueue.findIndex(
      ep => episode.sourceUrl == ep.sourceUrl
    )
    if (epIndx != 0) {
      this.store.dispatch(playerActions.addToQueue({ episode: episode }))
    }

    this.store.dispatch(playerActions.play())
  }

  amPlaying (episode: Episode) {
    const epIndx = this.episodeQueue.findIndex(
      ep => episode.sourceUrl == ep.sourceUrl
    )
    // epIndx == 0 ? console.log(episode) : ''
    return epIndx == 0 && this.playing
      ? 'pause_circle_filled'
      : 'play_circle_filled'
  }

  loadMoreEpisodes () {
    this.pageNo += 1
    this.page.next(this.pageNo)
  }
  ngOnDestroy (): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.unsubscribe()
  }
}
