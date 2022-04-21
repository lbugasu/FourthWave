import { Observable } from 'rxjs'
import { AudioPlayer } from './shared/player/audio/audio.player'
import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { getUserLoggedInStatus } from './user/store/user.selectors'
import { UserActions } from './user/store'
import { AppState } from './store/app.state'
import { PlayerSelectors } from './shared/player/store'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'fourthwave'
    somethingPlaying: boolean = true
    mini = false
    playing: boolean = false
    loggedIn$: Observable<boolean>
    mini$: Observable<boolean>
    constructor(public router: Router, private store: Store<{ player: AppState }>, public player: AudioPlayer) {}
    navigate(path: string) {
        this.router.navigateByUrl(path)
    }
    ngOnInit() {
        // log in with token
        const token = localStorage.getItem('token')
        if (!!token) {
            // setTimeout(() => {
            this.store.dispatch(UserActions.signInWithTokenStart())
            // }, 1000)
        }

        // Logged in Status
        this.loggedIn$ = this.store.select(getUserLoggedInStatus)

        this.mini$ = this.store.select(PlayerSelectors.getMini)
    }
    getWindowWidth() {
        return window.innerWidth
    }

    getUser() {}

    signIn() {
        this.router.navigateByUrl('me/signin')
    }
    signOut() {
        this.store.dispatch(UserActions.signOutStart())
        this.router.navigateByUrl('discover')
    }
}
