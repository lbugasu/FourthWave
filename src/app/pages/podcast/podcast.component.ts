import { PlayerStore, playerStore} from './../../store/player';
import { PodcastService } from "./../../shared/services/podcast/podcast.service";
import { Component, OnInit } from "@angular/core";
import { Podcast } from "src/app/shared/Models/Podcast";
import { Location } from "@angular/common";
import { tap, pluck, first } from 'rxjs/operators'
import { Episode } from "src/app/shared/Models/Episode";
import { Howl, Howler } from "howler";
@Component({
  selector: "app-podcast",
  templateUrl: "./podcast.component.html",
  styleUrls: ["./podcast.component.scss"],
})
export class PodcastComponent implements OnInit {
  podcast!: Podcast;
  slug!: string;
  episodes: Episode[] = [];
  player!: PlayerStore
  constructor(
    private podcastService: PodcastService,
    private location: Location
  ) {
    this.player = new PlayerStore({})
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
      this.getPodcastEpisodes(this.slug);
    }
  }

  ngOnInit(): void {}

  getPodcastEpisodes(slug: string) {
    const req$ = this.podcastService.getEpisodes(slug).valueChanges;
    req$.pipe(pluck("data", "getPodcastEpisodes")).subscribe((episodes) => {
      //@ts-ignore
      this.episodes = episodes;
      const episode = (this.episodes[0]);
      
    });
  }
  getNiceDate(date: Date) {
    return new Date(date).toDateString();
  }
  getNiceDuration(duration: string) {
    if (duration.split(':').length == 1) {
      return new Date(+duration * 1000).toISOString().substr(11, 8);
    }
    return duration
  }

  play(episode: Episode) {
    console.log("playing");
    playerStore.updateState({ queue: [episode] })
    
    
  }
  amPlaying(episode: Episode) {
    let state = false
    const ep = playerStore.store.value.queue[0] 
    if (!!ep) {
      // console.log(ep)
      state = (episode.sourceUrl == ep.sourceUrl);
      
      
      if (state) {
        console.log(ep);
      }
    }
    return state?'pause_circle_filled':'play_circle_filled'
  
    // console.log(episode.sourceUrl)
  }

  toHHMMSS (secs: string) {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  }
}
