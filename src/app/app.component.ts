import { distinctUntilChanged } from 'rxjs/operators';
import { playerStore } from './store/player';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "eycho";
  somethingPlaying: boolean = false
  constructor(private router: Router) {}
  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
  ngOnInit() {
    const sth$ = playerStore
      .selectState("somethingInPlayingQueue")
      .pipe(
        distinctUntilChanged()
      )
    
    sth$.subscribe((anything: boolean) => {
      this.somethingPlaying = anything;
    });
  }
  getWindowWidth() {
    return window.innerWidth;
  }

  somethingInQueue() {
    
  }
}
