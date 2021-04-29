import { SharedModule } from './../shared/shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { Material } from 'src/libs'
import { PodcastComponent } from './podcast/podcast.component'
import { ComponentsModule } from '../components/components.module'
import { SearchComponent } from './search/search.component'
import { RouterModule } from '@angular/router'
import { DiscoverComponent } from './discover/discover.component'
import { YourLibraryComponent } from './your-library/your-library.component'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { SignInComponent } from '../me/sign-in/sign-in.component'
import { SignUpComponent } from '../me/sign-up/sign-up.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    HomeComponent,
    PodcastComponent,
    SearchComponent,
    DiscoverComponent,
    YourLibraryComponent
  ],
  imports: [
    CommonModule,
    Material,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    SharedModule,
    InfiniteScrollModule
  ],
  exports: [HomeComponent, PodcastComponent]
})
export class PagesModule {}
