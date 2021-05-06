import { GlobalPodcastState } from './podcast.state'
import { loadPodcastFailure } from './podcast.actions'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { catchError, exhaustMap, map, pluck, switchMap } from 'rxjs/operators'
import { PodcastActions } from './'
import { PodcastService } from '../services/podcast.service'
import { Episode, Podcast } from 'src/app/shared/Models'
import { PodcastSelectors } from './'
import { Store } from '@ngrx/store'
@Injectable()
export class PodcastEffects {
  constructor (
    private actions$: Actions,
    private podcastService: PodcastService,
    private store: Store<GlobalPodcastState>
  ) {}
  /**
   * Load podcast with episodes$ of podcast effects
   */
  loadPodcastWithEpisodes$ = createEffect(() => {
    let slug
    const request$ = this.actions$.pipe(
      ofType(PodcastActions.loadPodcastWithEpisodesStart),
      switchMap(action => {
        slug = action.slug
        return this.podcastService.getPodcastAndEpisodes(
          action.slug,
          action.page
        )
      })
    )

    const response$ = request$.pipe(
      pluck('data'),
      map((data: any) => {
        return PodcastActions.loadPodcastWithEpisodesSuccess({
          podcast: data.getPodcast,
          episodes: data.getPodcastEpisodes
        })
      }),
      catchError((error: Error) => {
        return [PodcastActions.loadPodcastWithEpisodesFailure({ slug: slug })]
      })
    )
    return response$
  })

  /**
   * Load podcast$ of podcast effects
   */
  loadPodcast$ = createEffect(() => {
    let slug
    const request$ = this.actions$.pipe(
      ofType(PodcastActions.loadPodcastStart),
      switchMap(action => {
        slug = action.slug
        return this.podcastService.getPodcast(action.slug)
      })
    )
    const response$ = request$.pipe(
      pluck('data', 'getPodcast'),
      map((podcast: Podcast) => {
        return PodcastActions.loadPodcastSuccess({ podcast: podcast })
      }),
      catchError((error: Error) => {
        return [PodcastActions.loadPodcastFailure({ slug: slug })]
      })
    )
    return response$
  })
  /**
   * Load more episodes$ of podcast effects
   */
  loadMoreEpisodes$ = createEffect(() => {
    let slug
    const request$ = this.actions$.pipe(
      ofType(PodcastActions.loadMoreEpisodesStart),
      concatLatestFrom(action => {
        slug = action.slug

        return this.store.select(PodcastSelectors.getPodcast(action.slug))
      }),
      switchMap(([action, podcast]) => {
        return this.podcastService.getEpisodes(podcast.slug, podcast.page)
      })
    )

    const response$ = request$.pipe(
      pluck('data', 'getPodcastEpisodes'),
      map((episodes: Episode[]) => {
        return PodcastActions.loadMoreEpisodesSuccess({
          episodes: episodes,
          slug: slug
        })
      }),
      catchError((error: Error) => {
        return [PodcastActions.loadMoreEpisodesFailure({ slug: slug })]
      })
    )
    return response$
  })
}
