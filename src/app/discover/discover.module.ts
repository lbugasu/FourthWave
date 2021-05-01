import { DiscoverEffects } from './store/discover.effects';
import { EffectsModule } from '@ngrx/effects';
import { Material } from 'src/libs'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DiscoverComponent } from './discover.component'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store';
import { DISCOVER_STATE_NAME } from './store/discover.state';
import { discoverReducer } from './store/discover.reducers';

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
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ DiscoverEffects ]),
    StoreModule.forFeature(DISCOVER_STATE_NAME, discoverReducer )
  ],
  exports: []
})
export class DiscoverModule {}
