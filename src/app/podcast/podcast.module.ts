import { TimePipe } from './../shared/pipes/time/time.pipe'
import { PodcastComponent } from './podcast.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { Material } from 'src/libs'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'

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
    RouterModule.forChild(routes)
  ]
})
export class PodcastModule {}
