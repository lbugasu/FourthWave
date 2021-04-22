import { distinctUntilChanged, tap } from "rxjs/operators";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Options } from "@angular-slider/ngx-slider";
import { Howl, Howler} from "howler";

import { PlayerStore, playerStore } from "../../store/player";
import { Episode } from "../Models/Episode";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { MatSliderChange } from "@angular/material/slider";
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
})
export class PlayerComponent implements OnInit {
  @Output()
  onVolChange = new EventEmitter<MatSliderChange>();
  @Output()
  onInputChange = new EventEmitter<MatSliderChange>();

  palette!: number;

  currentEp!: Episode;
  howler!: Howl;
  playing: boolean = false;
  volume: number = 0.5;
  constructor() {
    this.howler = new Howl({
      html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
      src: [],
      onplay: function () {
        console.log("playing");
      },
    });
  }

  ngOnInit(): void {
    playerStore.selectState("queue").subscribe((items: Episode[]) => {
      console.log(items);
      console.log(this.howler.state());

      !!this.howler.state() ? this.howler.pause() : console.log("pausing");
      items.length > 0
        ? this.defineNewState(items)
        : console.log("nothing to play");
    });
    const vol$ = this.onVolChange.asObservable();
    this.onVolChange.subscribe((value) => {
      console.log(value);
    });
    vol$
      .pipe(tap(console.log), distinctUntilChanged(), tap(console.log))
      .subscribe((value) => console.log(value));

    this.onInputChange.subscribe(console.log);
    console.log(this.onVolChange);
  }

  defineNewState(items: Episode[]) {
    console.log("new state");
    this.howler = new Howl({
      html5: true,
      src: items.map((item) => item.sourceUrl),
      onplay: () => {
        this.playing = true;
      },
      onpause: () => {
        this.playing = false;
      },
    });
    console.log((this.currentEp = items[0]));
    this.howler.play();
  }

  playPause() {
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
 
  changeVol(): number | "auto" {
    console.log(this.volume)
    Howler.volume(this.volume)
    return 0;
  }
}
