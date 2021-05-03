import { DiscoverState, DISCOVER_STATE_NAME } from './store/discover.state'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs'
import { Podcast } from 'src/app/shared/Models/Podcast'
import { pluck, switchMap, tap } from 'rxjs/operators'
import { PodcastService } from '../podcast/services/podcast.service'
import * as DiscoverSelectors from './store/discover.selectors'
import * as DiscoverActions from './store/discover.actions'
import { Store } from '@ngrx/store'
const ColorScheme = require('color-scheme')

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit, OnDestroy {
  subscription!: Subscription
  podcasts: Podcast[] = []
  viewState = 3
  pageNo = 0
  page = new BehaviorSubject<number>(this.pageNo)

  content$: Observable<DiscoverState>
  constructor (
    private podcastService: PodcastService,
    private store: Store<{ discover: DiscoverState }>
  ) {}

  ngOnInit (): void {
    // this.page
    //   .asObservable()
    //   .pipe(
    //     switchMap((value: number) => {
    //       console.log(value)
    //       return this.podcastService.getPodcasts(value).valueChanges
    //     })
    //   )
    //   .pipe(pluck('data', 'getPodcasts'))
    //   .subscribe((data: any) => {
    //     console.log(data)
    //     this.podcasts = [...this.podcasts, ...data]
    //   })

    const loaded$ = this.store.select(DiscoverSelectors.getDiscoverLoaded)
    loaded$.subscribe(value => {
      if (!value) {
        this.store.dispatch(DiscoverActions.loadDiscoverStart())
      }
    })
    this.content$ = this.store.select(DiscoverSelectors.getDiscover)
  }

  onScroll () {
    // fetch more pods
    this.pageNo += 1
    this.page.next(this.pageNo)
  }

  changeView (view: number): void {
    this.viewState = view
  }

  getColors () {
    var scheme = new ColorScheme()
    scheme
      .from_hue(21)
      .scheme('tetrade')
      .variation('default')
    return scheme.colors()
  }
  ngOnDestroy (): void {
    this.subscription?.unsubscribe()
  }
  scrollThrough (direction: string) {
    const element = <HTMLElement>document.querySelector('div.featured__list')
    this.sideScroll(element, direction, 10, 300, 10)

    console.log(element.scrollLeft)
  }
  show (position: boolean) {
    const element = <HTMLElement>document.querySelector('div.featured__list')
    const width = element.scrollWidth
    const left = element.scrollLeft

    if (!position) return left === 0
    else {
      return left != width
    }
  }
  sideScroll (
    element: HTMLElement,
    direction: string,
    speed: number,
    distance: number,
    step: number
  ) {
    let scrollAmount = 0
    var slideTimer = setInterval(function () {
      if (direction == 'left') {
        element.scrollLeft -= step
      } else {
        element.scrollLeft += step
      }
      scrollAmount += step
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer)
      }
    }, speed)
  }
}
