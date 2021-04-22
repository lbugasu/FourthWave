import { pluck, tap } from 'rxjs/operators';
import { PodcastService } from './../../shared/services/podcast/podcast.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Podcast } from 'src/app/shared/Models/Podcast';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  podcasts: Podcast[] = [];
  viewState = 3;
  constructor(private podcastService: PodcastService) {}

  ngOnInit(): void {
    console.log("init");
    const obs$ = this.podcastService.getAllPodcasts().valueChanges;

    const newObs$ = obs$.pipe(tap(console.log), pluck("data", "getPodcasts"));

    this.subscription = newObs$.subscribe((res) => {
      const pods = res;
      this.podcasts = res;
      console.log(res);
    });
  }

  changeView(view: number):   void {
    this.viewState = view;
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
