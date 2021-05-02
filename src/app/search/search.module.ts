import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { SearchComponent } from './search.component'
import { Material } from 'src/libs'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { SearchEffects } from './store/search.effects'
import { SEARCH_STATE_NAME } from './store/search.state'
import { searchReducer } from './store/search.reducers'

const routes = [
  {
    path: '',
    component: SearchComponent
  }
]

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    Material,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([SearchEffects]),
    StoreModule.forFeature(SEARCH_STATE_NAME, searchReducer)
  ]
})
export class SearchModule {}
