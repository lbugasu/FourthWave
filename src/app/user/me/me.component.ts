import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import * as UserSelectors from '../store/user.selectors'
import * as UserActions from '../store/user.actions'
import { User } from 'src/app/shared/Models'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  user$: Observable<User>
  constructor (private store: Store<AppState>) {}

  ngOnInit (): void {
    this.user$ = this.store.select(UserSelectors.getUser)
  }
}
