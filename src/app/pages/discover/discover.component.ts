import { Component, OnDestroy, OnInit } from '@angular/core'
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs'
import { Podcast } from 'src/app/shared/Models/Podcast'
import { pluck, switchMap, tap } from 'rxjs/operators'
import { PodcastService } from './../../shared/services/podcast/podcast.service'
import { Subject } from 'rxjs'
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
  constructor (private podcastService: PodcastService) {}

  ngOnInit (): void {
    this.page
      .asObservable()
      .pipe(
        switchMap((value: number) => {
          console.log(value)
          return this.podcastService.getPodcasts(value).valueChanges
        })
      )
      .pipe(pluck('data', 'getPodcasts'))
      .subscribe((data: any) => {
        this.podcasts = [...this.podcasts, ...data]
      })
  }

  onScroll () {
    console.log('scrolled!!')
    // fetch more pods
    this.pageNo += 1
    this.page.next(this.pageNo)
  }

  changeView (view: number): void {
    this.viewState = view
  }

  ngOnDestroy (): void {
    this.subscription?.unsubscribe()
  }
}
