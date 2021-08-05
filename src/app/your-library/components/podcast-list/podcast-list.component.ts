import { AppState } from 'src/app/store/app.state'
import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { Podcast } from 'src/app/shared/Models'
import { Store } from '@ngrx/store'
import { UserSelectors } from 'src/app/user/store'

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit {
  podcasts$: Observable<Podcast[]>
  view: string = 'stacked'
  constructor (private store: Store<AppState>) {}

  ngOnInit (): void {
    this.podcasts$ = this.store.select(UserSelectors.getPodcastSubscriptions)
  }

  changeView (view: string) {
    this.view = view
  }
}
