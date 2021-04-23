import { distinctUntilChanged, tap } from "rxjs/operators";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Howl, Howler} from "howler";

import { playerStore } from "../../store/player";
import { Episode } from "../Models/Episode";
import { MatSliderChange } from "@angular/material/slider";
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
})
export class PlayerComponent implements OnInit {

  palette!: number;

  currentEp!: Episode;
  howler!: Howl;
  playing: boolean = false;
  volume: number = 0.5;
  trackProgress: number = 0;;
  totalDuration = 0;
  currentTime = 0;
  somethingInQueue: boolean = false
  constructor() {
    this.howler = new Howl({
      html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
      src: [],
      onplay: function () {
        console.log("playing");
      },
    });
    // playerStore.updateState({ playingState: false });
  }

  ngOnInit(): void {
    playerStore
      .selectState("queue")
      .pipe(distinctUntilChanged())
      .subscribe((items: Episode[]) => {
        if(!!this.howler.state())
          this.howler.pause()
        
        if (items.length > 0)
          this.defineNewState(items)
      });
  }

  defineNewState(items: Episode[]) {
    this.howler = new Howl({
      html5: true,
      src: items.map((item) => item.sourceUrl),
      preload: "metadata",
      onplay: () => {
        this.playing = true;
        playerStore.updateState({ playingState: true });

        requestAnimationFrame(this.step);
      },
      onpause: () => {
        this.playing = false;
      },
      onseek: () => {
        this.step();
      },
      onplayerror: () => {
        console.log(new Error('playback error'))
      },
      onend: () => {
        playerStore.updateState({ playingState: false });
        this.playing = true;
      },
      onstop: () => {
        this.playing = true;
        
      }
    });
    playerStore.updateState({ somethingInPlayingQueue: true });
    playerStore.updateState({ currentTracks: items });

    this.currentEp = items[0]

    this.somethingInQueue = true;
    this.howler.play();

  }

  playPause() {
    playerStore.updateState({'playingState': !this.howler.playing()})
    this.howler.playing() ? this.howler.pause() : this.howler.play();
  }
  
  getPlayingState() {
    return this.playing ? "pause_circle_filled" : "play_circle_filled";
  }
  getTitle() {
    if (!!this.currentEp) {
      return this.currentEp.title;
    }
    return "";
  }
  getImage() {
    if (!!this.currentEp) {
      return this.currentEp.image;
    }
    return "";
  }

  changeVol($event: MatSliderChange) {
    Howler.volume($event.value as number);
  }
  step = () => {
    if (!!this.howler) {
      this.totalDuration = Math.floor(this.howler.duration());
      this.currentTime = Math.floor(this.howler.seek() as number);
      if (this.howler.playing()) {
        requestAnimationFrame(this.step);
      }
    }
  };
  seek() {    
    const goTo = this.trackProgress * this.totalDuration
    this.howler.pause()
    this.howler.seek(goTo)
    this.howler.play()
  }
  seekTrack(): number | "auto" {
    this.trackProgress = this.currentTime / this.totalDuration;
    return 0;
  }
  getVolumeIcon() {
    if (this.volume == 0) {
      return "volume_off";
    }
    if (this.volume < 0.5) {
      return "volume_down";
    }
    else {
      return 'volume_up';
    }
  }
}
