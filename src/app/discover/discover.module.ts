import { Material } from 'src/libs'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DiscoverComponent } from './discover.component'
import { RouterModule } from '@angular/router'

const routes = [
  {
    path: '',
    component: DiscoverComponent
  }
]
@NgModule({
  declarations: [DiscoverComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    Material,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class DiscoverModule {}
