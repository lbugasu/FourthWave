import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YourLibraryComponent } from './your-library.component'
import { RouterModule } from '@angular/router'
import { Material } from 'src/libs';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component'

const routes = [
  {
    path: '',
    component: YourLibraryComponent
  }
]
@NgModule({
  declarations: [YourLibraryComponent, PodcastListComponent, EpisodeListComponent],
  imports: [CommonModule, Material, RouterModule.forChild(routes)]
})
export class YourLibraryModule {}
