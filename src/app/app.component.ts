import { signInWithToken } from './user/store/actions/user.actions'
import { AudioPlayer } from './shared/player/audio/audio.player'
import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { getUserLoggedInStatus } from './user/store/selectors/user.selector'
import { AppState } from './store/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eycho'
  somethingPlaying: boolean = true
  mini = false
  playing: boolean = false
  loggedIn = false
  constructor (
    private router: Router,
    private store: Store<{ player: AppState }>,
    public player: AudioPlayer
  ) {}
  navigate (path: string) {
    this.router.navigateByUrl(path)
  }
  ngOnInit () {
    // log in with token
    const token = localStorage.getItem('token')
    if (!!token) {
      setTimeout(() => {
        this.store.dispatch(signInWithToken())
      }, 2000)
    }

    // Logged in Status
    this.store
      .select(getUserLoggedInStatus)
      .subscribe(state => (this.loggedIn = state))
  }
  getWindowWidth () {
    return window.innerWidth
  }

  getUser () {}

  signIn () {
    if (this.loggedIn) {
      this.router.navigateByUrl('me')
    } else {
      this.router.navigateByUrl('me/signin')
    }
  }
}
