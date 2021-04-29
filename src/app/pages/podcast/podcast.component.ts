import { switchMap } from 'rxjs/operators'
import { PlayerStore, playerStore } from './../../store/player'
import { PodcastService } from './../../shared/services/podcast/podcast.service'
import { Component, OnInit } from '@angular/core'
import { Podcast } from 'src/app/shared/Models/Podcast'
import { Location } from '@angular/common'
import { tap, pluck, first, take, distinctUntilChanged } from 'rxjs/operators'
import { Episode } from 'src/app/shared/Models/Episode'
import { Howl, Howler } from 'howler'
import { Subscription } from 'rxjs'
import { BehaviorSubject } from 'rxjs'

const colors = require('nice-color-palettes')
const random = require('canvas-sketch-util/random')

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  podcast!: Podcast
  slug!: string
  episodes: Episode[] = []
  pageNo = 0
  page = new BehaviorSubject<number>(this.pageNo)
  playingState: boolean = false
  subscriptions!: Subscription
  constructor (
    private podcastService: PodcastService,
    private location: Location
  ) {
    // This data is passed on the router
    // If the data isn't loaded, load from the server
    this.subscriptions = playerStore
      .selectState('playingState')
      .subscribe((status: boolean) => {
        this.playingState = status
      })

    const state: any = this.location.getState()

    if (!!history.state.navigationId) {
      console.log(this.location.path())
      const slug = this.location.path().substr(9)
      this.slug = slug
      this.getPodcastEpisodes(this.slug)

      const query$ = this.podcastService.getPodcast(slug).valueChanges

      this.subscriptions.add(
        query$
          .pipe(first(), pluck('data', 'getPodcast'))
          .subscribe((res: any) => {
            this.podcast = res
          })
      )
    } else {
      console.log(history)
      console.log(this.location)
      console.log(location)

      this.podcast = history.state
      this.slug = this.podcast.slug
      this.getPodcastEpisodes(this.slug)
    }
  }

  ngOnInit (): void {
    // console.log(this.subscriptions);
    // const element = <HTMLElement>document.querySelector(".page");
    // console.log(element);
    // element?.addEventListener("scroll", function (e) {
    //   console.log(this);
    // });
  }

  getPodcastEpisodes (slug: string) {
    // const req$ = this.podcastService.getEpisodes(slug, this.pageNo).valueChanges;
    // req$.pipe(pluck("data", "getPodcastEpisodes")).subscribe((episodes) => {
    //   //@ts-ignore
    //   this.episodes = episodes;
    // });
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
    playerStore.updateState({ queue: [episode] })
  }
  amPlaying (episode: Episode) {
    let state = false
    const ep = playerStore.store.value.queue[0]
    if (!!ep) {
      state = episode.sourceUrl == ep.sourceUrl
    }

    return state && this.playingState
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
