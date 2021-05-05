import { AudioPlayer } from './../shared/player/audio/audio.player'
import { switchMap } from 'rxjs/operators'
import { PodcastService } from './services/podcast.service'
import { Component, OnInit } from '@angular/core'
import { Podcast } from 'src/app/shared/Models/Podcast'
import { Location } from '@angular/common'
import { pluck, first } from 'rxjs/operators'
import { Episode } from 'src/app/shared/Models/Episode'
import { Observable, Subscription } from 'rxjs'
import { BehaviorSubject } from 'rxjs'
const colors = require('nice-color-palettes')

import { Store } from '@ngrx/store'
import { AppState } from '../store/app.state'
import * as PlayerSelectors from '../shared/player/store/player.selectors'
import * as PlayerActions from '../shared/player/store/player.actions'
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
    private store: Store<{ player: AppState }>,
    private player: AudioPlayer
  ) {
    // This data is passed on the router
    // If the data isn't loaded, load from the server

    // const state: any = this.location.getState()

    // if (!!history.state.navigationId) {
    // console.log(this.location.path())
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
    this.page
      .asObservable()
      .pipe(
        switchMap((value: number) => {
          return this.podcastService.getEpisodes(slug, value).valueChanges
        })
      )
      .pipe(pluck('data', 'getPodcastEpisodes'))
      .subscribe((episodes: any) => {
        console.log(episodes)
        this.episodes = [...this.episodes, ...episodes]
      })
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
    // check if the episode is already in the queue, otherwise, add to the top of the queue and play
    // this.store.dispatch(PlayerActions.addToQueueStart({ episode: episode }))
    if (!this.player.player) {
      this.store.dispatch(
        PlayerActions.addToBeginningOfQueueStart({ episode: episode })
      )
    } else if (this.player?.currentlyPlaying.episode.slug == episode.slug) {
      this.store.dispatch(PlayerActions.playPause())
    } else {
      this.store.dispatch(
        PlayerActions.addToBeginningOfQueueStart({ episode: episode })
      )
    }
  }

  amPlaying (episode: Episode) {
    const epIndx = this.episodeQueue?.findIndex(
      ep => episode.sourceUrl == ep.sourceUrl
    )
    if (!this.player.currentlyPlaying) {
      return 'play_circle_filled'
    }
    // epIndx == 0 ? console.log(episode) : ''
    return this.player.currentlyPlaying.episode.slug == episode.slug &&
      this.player.player.playing()
      ? 'pause_circle_filled'
      : 'play_circle_filled'
  }

  podcastPlaying () {
    const _slug = this.player.currentlyPlaying.episode.slug.split('?')[0]
    return _slug == this.slug && this.player.player.playing()
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
    // this.subscriptions.unsubscribe()
  }
}
