import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { Material } from "src/libs";
import { PodcastComponent } from "./podcast/podcast.component";
import { ComponentsModule } from "../components/components.module";
import { SearchComponent } from "./search/search.component";
import { RouterModule } from "@angular/router";
import { DiscoverComponent } from "./discover/discover.component";
import { YourLibraryComponent } from "./your-library/your-library.component";

@NgModule({
  declarations: [
    HomeComponent,
    PodcastComponent,
    SearchComponent,
    DiscoverComponent,
    YourLibraryComponent,
  ],
  imports: [
    CommonModule,
    Material,
    RouterModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [HomeComponent, PodcastComponent],
})
export class PagesModule {}
