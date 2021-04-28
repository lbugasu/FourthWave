import { YourLibraryComponent } from './pages/your-library/your-library.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DiscoverComponent } from './pages/discover/discover.component'
import { HomeComponent } from './pages/home/home.component'
import { PodcastComponent } from './pages/podcast/podcast.component'
import { SearchComponent } from './pages/search/search.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'podcast/:slug', component: PodcastComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'library', component: YourLibraryComponent },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
