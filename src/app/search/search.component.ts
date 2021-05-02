import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { fromEvent, Observable } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  pluck,
  switchMap
} from 'rxjs/operators'
import { SearchService } from './services/search.service'
import { Podcast } from 'src/app/shared/Models/Podcast'
import { Episode } from 'src/app/shared/Models/Episode'
import { Store } from '@ngrx/store'
import { AppState } from '../store/app.state'
import * as SearchActions from './store/search.actions'
import * as SearchSelectors from './store/search.selectors'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  options: FormGroup
  hideRequiredControl = new FormControl(false)
  floatLabelControl = new FormControl('auto')

  podcasts$: Observable<Podcast[]>
  episodes$: Observable<Episode[]>
  searchTerm$: Observable<string>
  checkPodcasts$: Observable<boolean>
  checkEpisodes$: Observable<boolean>

  constructor (
    private fb: FormBuilder,
    private searchService: SearchService,
    private store: Store<AppState>
  ) {
    this.options = this.fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    })
  }

  ngOnInit (): void {
    const inputElement = document.getElementById('search') || document
    const input$ = fromEvent(inputElement, 'keyup')

    const search$ = input$.pipe(
      pluck('target', 'value'),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value: string) => {
        // console.log(value)
        this.store.dispatch(SearchActions.setSearchTerm({ searchTerm: value }))

        return this.store.select(SearchSelectors.getSearchTerm)
      })
    )
    this.podcasts$ = this.store.select(SearchSelectors.getPodcastResults)
    this.episodes$ = this.store.select(SearchSelectors.getEpisodeResults)
    this.searchTerm$ = this.store.select(SearchSelectors.getSearchTerm)
    this.checkEpisodes$ = this.store.select(SearchSelectors.getSearchEpisodes)
    this.checkPodcasts$ = this.store.select(SearchSelectors.getSearchPodcasts)
    search$.subscribe(results => {
      //@ts-ignore
      this.store.dispatch(SearchActions.searchStart())
    })
  }

  checkPodcasts (value: boolean) {
    this.store.dispatch(SearchActions.setSearchPodcasts({ search: value }))
  }

  checkEpisodes (value: boolean) {
    this.store.dispatch(SearchActions.setSearchEpisodes({ search: value }))
  }
}
