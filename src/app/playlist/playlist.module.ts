import { RouterModule } from '@angular/router'
import { SharedModule } from './../shared/shared.module'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlaylistComponent } from './playlist.component'
import { Material } from 'src/libs'

const routes = [
  {
    path: '',
    component: PlaylistComponent
  }
]
@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    Material,
    InfiniteScrollModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PlaylistModule {}
