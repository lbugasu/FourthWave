import { SearchComponent } from './search.component'
import { Material } from 'src/libs'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

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
    RouterModule.forChild(routes)
  ]
})
export class SearchModule {}
