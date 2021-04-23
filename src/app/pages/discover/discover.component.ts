import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Podcast } from "src/app/shared/Models/Podcast";
import { pluck, tap } from "rxjs/operators";
import { PodcastService } from "./../../shared/services/podcast/podcast.service";
@Component({
  selector: "app-discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"],
})
export class DiscoverComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  podcasts: Podcast[] = [];
  viewState = 3;

  constructor(private podcastService: PodcastService) {}

  ngOnInit(): void {
    const obs$ = this.podcastService.getAllPodcasts().valueChanges;

    const newObs$ = obs$.pipe( pluck("data", "getPodcasts"));

    this.subscription = newObs$.subscribe((res: any) => {
      this.podcasts = res;
    });
  }

  changeView(view: number): void {
    this.viewState = view;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
