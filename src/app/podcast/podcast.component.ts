import { AudioPlayer } from './../shared/player/audio/audio.player'
import { PodcastService } from './services/podcast.service'
import { Component, OnInit } from '@angular/core'
import { Podcast, Episode } from 'src/app/shared/Models'
import { Location } from '@angular/common'
import { Observable, Subject, Subscription } from 'rxjs'
import { BehaviorSubject } from 'rxjs'
const colors = require('nice-color-palettes')

import { Store } from '@ngrx/store'
import { AppState } from '../store/app.state'
import * as PlayerSelectors from '../shared/player/store/player.selectors'
import * as PlayerActions from '../shared/player/store/player.actions'
import { PodcastActions, PodcastSelectors } from './store'
import { ActivatedRoute, Router } from '@angular/router'
import { UserActions, UserSelectors } from '../user/store'
@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  podcast$!: Observable<Podcast>
  slug!: string
  episodes$: Observable<Episode[]>
  playing: boolean
  subscriptions!: Subscription
  episodeQueue: Episode[]
  subscribed$: Observable<boolean>
  liked$: Observable<boolean>

  panelOpenState: boolean = false

  togglePanel () {
    this.panelOpenState = !this.panelOpenState
  }
  constructor (
    private store: Store<{ player: AppState }>,
    private player: AudioPlayer,
    private activeRoute: ActivatedRoute
  ) {
    // This data is passed on the router
    // If the data isn't loaded, load from the server
  }

  ngOnInit (): void {
    this.activeRoute.params.subscribe(params => {
      console.log(history.state.navigationId)
      this.slug = params.slug

      if (!history.state.podcast) {
        console.log('nothing in history')
        this.store.dispatch(
          PodcastActions.loadPodcastWithEpisodesStart({
            slug: this.slug,
            page: 0
          })
        )
      } else {
        const podcast: Podcast = history.state.podcast
        this.store.dispatch(
          PodcastActions.loadPodcastSuccess({ podcast: podcast })
        )
        this.store.dispatch(
          PodcastActions.loadMoreEpisodesStart({ slug: this.slug })
        )
      }
      this.podcast$ = this.store.select(PodcastSelectors.getPodcast(this.slug))
      this.subscribed$ = this.store.select(
        UserSelectors.checkSubscribedPodcast(this.slug)
      )
      this.liked$ = this.store.select(
        UserSelectors.checkLikedPodcast(this.slug)
      )
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
    if (!this.player.currentlyPlaying) {
      return 'play_circle_filled'
    }
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
    if (this.player.player) {
      const _slug = this.player.currentlyPlaying.episode.slug.split('?')[0]
      return _slug == this.slug && this.player.player.playing() ? true : false
    } else return false
  }

  loadMoreEpisodes () {
    this.store.dispatch(
      PodcastActions.loadMoreEpisodesStart({ slug: this.slug })
    )
  }

  subscribe () {
    this.store.dispatch(
      UserActions.subscribeToPodcastStart({ slug: this.slug })
    )
  }
  unsubscribe () {}
  like () {
    this.store.dispatch(UserActions.likePodcastStart({ slug: this.slug }))
  }
  unlike () {}
  ngOnDestroy (): void {}
}
