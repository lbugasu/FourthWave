import { Store } from '@ngrx/store'
import { distinctUntilChanged } from 'rxjs/operators'
import { playerStore } from './store/player'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from './shared/services/auth/User'
import { Observable } from 'rxjs'
import { AppState } from './store/app.selector'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eycho'
  somethingPlaying: boolean = false
  user$!: Observable<User>
  constructor (private router: Router, private store: Store<User>) {
    this.user$ = this.store.select(user => {
      return user
    })
  }
  navigate (path: string) {
    this.router.navigateByUrl(path)
  }
  ngOnInit () {
    const sth$ = playerStore
      .selectState('somethingInPlayingQueue')
      .pipe(distinctUntilChanged())

    sth$.subscribe((anything: boolean) => {
      this.somethingPlaying = anything
    })
  }
  getWindowWidth () {
    return window.innerWidth
  }

  somethingInQueue () {}
  getUser () {}
}
