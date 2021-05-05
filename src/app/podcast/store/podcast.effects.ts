import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { catchError, exhaustMap, map, pluck } from 'rxjs/operators'
import { PodcastActions } from './'
import { PodcastService } from '../services/podcast.service'
import { Podcast } from 'src/app/shared/Models'
@Injectable()
export class PodcastEffects {
  constructor (
    private actions$: Actions,
    private podcastService: PodcastService
  ) {}
  loadPodcast$ = createEffect(() => {
    const request$ = this.actions$.pipe(
      ofType(PodcastActions.loadPodcastStart),
      exhaustMap(action => {
        return this.podcastService.getPodcastAndEpisodes(action.slug)
      })
    )

    const response$ = request$.pipe(
      pluck('data'),
      map((data: any) => {
        return PodcastActions.loadPodcastSuccess({
          podcast: data.getPodcast,
          episodes: data.getPodcastEpisodes
        })
      }),
      catchError((error: Error) => {
        console.log(error.message)
        return [PodcastActions.loadPodcastFailure()]
      })
    )
    return response$
  })
}
