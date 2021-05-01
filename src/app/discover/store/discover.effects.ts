import { Injectable } from '@angular/core'
import { Actions, ofType } from '@ngrx/effects'
import { createEffect } from '@ngrx/effects'
import { catchError, exhaustMap, map, pluck, tap } from 'rxjs/operators'
import { DiscoverService } from '../services/discover.service'
import * as DiscoverActions from '../store/discover.actions'
@Injectable()
export class DiscoverEffects {
  constructor (
    private actions$: Actions,
    private discoverService: DiscoverService
  ) {}

  loadDiscoveryContent$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(DiscoverActions.loadDiscoverStart),
      exhaustMap(action => {
        return this.discoverService.getDiscoveryContent()
      })
    )
    const response$ = request$.pipe(
      tap(console.log),
      pluck('data'),
      map(result => {
        console.log(result)
        return DiscoverActions.loadDiscoverSuccess({
          featured: result.getFeatured,
          trending: result.getTrending,
          genres: result.getGenres,
          topEpisodes: result.topEpisodes,
          mostPopular: result.getTopPlayed
        })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [DiscoverActions.loadDiscoverFailure]
      })
    )
    return response$
  })
}
