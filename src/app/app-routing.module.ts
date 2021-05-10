import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PodcastComponent } from './podcast/podcast.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'me',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'podcast/:slug',
    component: PodcastComponent
  },
  {
    path: 'discover',
    loadChildren: () =>
      import('./discover/discover.module').then(m => m.DiscoverModule)
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./your-library/your-library.module').then(
        m => m.YourLibraryModule
      )
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./playlist/playlist.module').then(m => m.PlaylistModule)
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'topics',
    loadChildren: () => import('./topic/topic.module').then(m => m.TopicModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
