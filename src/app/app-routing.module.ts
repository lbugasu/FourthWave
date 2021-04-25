import { YourLibraryComponent } from "./pages/your-library/your-library.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiscoverComponent } from "./pages/discover/discover.component";
import { HomeComponent } from "./pages/home/home.component";
import { PodcastComponent } from "./pages/podcast/podcast.component";
import { SearchComponent } from "./pages/search/search.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { SigninComponent } from "./pages/signin/signin.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "podcast/:slug", component: PodcastComponent },
  { path: "discover", component: DiscoverComponent },
  { path: "library", component: YourLibraryComponent },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
