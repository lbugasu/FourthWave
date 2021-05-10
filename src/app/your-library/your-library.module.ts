import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YourLibraryComponent } from './your-library.component'
import { RouterModule } from '@angular/router'
import { Material } from 'src/libs'

const routes = [
  {
    path: '',
    component: YourLibraryComponent
  }
]
@NgModule({
  declarations: [YourLibraryComponent],
  imports: [CommonModule, Material, RouterModule.forChild(routes)]
})
export class YourLibraryModule {}
