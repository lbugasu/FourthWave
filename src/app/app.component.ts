import { signInWithToken } from './user/store/actions/user.actions'
import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PlayerState } from './shared/player/store/state/player.state'
import * as playerSelectors from './shared/player/store/selectors'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eycho'
  somethingPlaying: boolean = false
  mini = false
  playing: boolean = false
  constructor (
    private router: Router,
    private store: Store<{ player: PlayerState }>
  ) {}
  navigate (path: string) {
    this.router.navigateByUrl(path)
  }
  ngOnInit () {
    // log in with token
    const token = localStorage.getItem('token')
    if (!!token) {
      this.store.dispatch(signInWithToken())
    }
    const sth$ = this.store.select(playerSelectors.getQueue)
    sth$.subscribe(queue => {
      if (queue.length > 0) {
        this.somethingPlaying = true
        this.playing = this.somethingPlaying && !this.mini
      } else {
        this.somethingPlaying = false
      }
    })
    this.store.select(playerSelectors.getMini).subscribe(value => {
      this.mini = value

      this.playing = this.somethingPlaying && !this.mini
    })
  }
  getWindowWidth () {
    return window.innerWidth
  }

  getUser () {}
}
