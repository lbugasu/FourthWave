import { Injectable } from '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { forkJoin, Observable } from 'rxjs'
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  pluck,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators'
import { AppState } from 'src/app/store/app.state'
import { SearchService } from '../services/search.service'
import * as SearchActions from './search.actions'
import { SearchState } from './search.state'

import * as SearchSelectors from './search.selectors'
@Injectable()
export class SearchEffects {
  constructor (
    private actions$: Actions,
    private searchService: SearchService,
    private store: Store<AppState>
  ) {}

  search$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(SearchActions.searchStart),
      concatLatestFrom(action => this.store.select(SearchSelectors.getSearch)),
      mergeMap(([action, searchState]) => {
        let query$
        if (searchState.searchEpisodes && searchState.searchPodcasts) {
          query$ = this.searchService
            .searchPodcastsAndEpisodes(searchState.searchTerm)
            .pipe(
              catchError((error: Error): any => {
                console.log(error.message)
                return error
              })
            )
        } else if (searchState.searchEpisodes) {
          query$ = this.searchService
            .searchEpisodes(searchState.searchTerm)
            .pipe(
              catchError((error: Error): any => {
                console.log(error.message)
                return error
              })
            )
        } else if (searchState.searchPodcasts) {
          query$ = this.searchService
            .searchPodcast(searchState.searchTerm)
            .pipe(
              catchError((error: Error): any => {
                console.log(error.message)
                return error
              })
            )
        }
        return query$
      })
    )
    const result$ = request$.pipe(
      pluck('data'),
      map((result: any) => {
        return SearchActions.searchSuccess({
          podcasts: result?.findPodcasts || [],
          episodes: result?.findEpisodes || []
        })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [SearchActions.searchFailure()]
      })
    )

    return result$
  })

  loadSearchRecommendations$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(SearchActions.loadSearchRecommendationsStart),
      exhaustMap(action => {
        return this.searchService.getSearchRecommendations()
      })
    )

    const response$ = request$.pipe(
      pluck('data', 'getSearchRecommendations'),
      map((result: any) => {
        return SearchActions.loadSearchRecommendationsSuccess({
          categories: result.categories,
          topics: result.topics
        })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [SearchActions.loadSearchRecommendationsFailure()]
      })
    )
    return response$
  })
}
