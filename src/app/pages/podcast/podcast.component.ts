import { PodcastService } from "./../../shared/services/podcast/podcast.service";
import { Component, OnInit } from "@angular/core";
import { Podcast } from "src/app/shared/Models/Podcast";
import { Location } from "@angular/common";
import { tap, pluck, first } from 'rxjs/operators'
import { Episode } from "src/app/shared/Models/Episode";

@Component({
  selector: "app-podcast",
  templateUrl: "./podcast.component.html",
  styleUrls: ["./podcast.component.scss"],
})
export class PodcastComponent implements OnInit {
  podcast!: Podcast;
  slug!: string;
  episodes:Episode[] = []
  constructor(
    private podcastService: PodcastService,
    private location: Location
  ) {
    // This data is passed on the router
    // If the data isn't loaded, load from the server
    const state: any = this.location.getState();
    if (!!state.navigationId) {
      const slug = this.location.path().substr(9);
      this.slug = slug;
      this.getPodcastEpisodes(this.slug);

      const query$ = this.podcastService.getPodcast(slug).valueChanges;

      query$
        .pipe(first(), tap(console.log), pluck("data", "getPodcast"))
        .subscribe((res: Podcast) => {
          console.log(res);
          this.podcast = res;
        });
    } else {
      console.log(this.location.getState());
      this.podcast = history.state;
      this.slug = this.podcast.slug;
      this.getPodcastEpisodes(this.slug)
    }
  }

  ngOnInit(): void {
    
  }

  getPodcastEpisodes(slug: string) {
    const req$ = this.podcastService.getEpisodes(slug).valueChanges
    req$.pipe(pluck("data", "getPodcastEpisodes")).subscribe((episodes) => {
      //@ts-ignore
      this.episodes = episodes
    })
  }
  getNiceDate(date: Date) {
    return new Date(date).toDateString();
  }
}
