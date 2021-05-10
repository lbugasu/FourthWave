import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TopicComponent } from './topic.component'
import { RouterModule } from '@angular/router'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { Material } from 'src/libs'
import { SharedModule } from '../shared/shared.module'
import { WorldMapComponent } from './components/world-map/world-map.component'

const routes = [
  {
    path: '',
    component: TopicComponent
  },
  {
    path: 'map',
    component: WorldMapComponent
  }
]
@NgModule({
  declarations: [TopicComponent, WorldMapComponent],
  imports: [
    CommonModule,
    Material,
    InfiniteScrollModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TopicModule {}
