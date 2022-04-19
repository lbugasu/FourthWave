import { PodcastComponent } from './podcast.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { Material } from 'src/libs'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { PODCAST_STATE_NAME } from './store/podcast.state'
import { EffectsModule } from '@ngrx/effects'
import { podcastReducer } from './store/podcast.reducers'
import { StoreModule } from '@ngrx/store'
import { PodcastEffects } from './store/podcast.effects'

const routes = [
  {
    path: '',
    component: PodcastComponent
  }
]

@NgModule({
  declarations: [PodcastComponent],
  imports: [
    CommonModule,
    Material,
    InfiniteScrollModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(PODCAST_STATE_NAME, podcastReducer),
    // EffectsModule.forFeature([PodcastEffects])
  ]
})
export class PodcastModule {}
