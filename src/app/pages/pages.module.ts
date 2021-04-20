import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Material } from 'src/libs';
import { PodcastComponent } from './podcast/podcast.component';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    PodcastComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    Material, 
    ComponentsModule,
  ], 
  exports:[HomeComponent, PodcastComponent]
})
export class PagesModule { }
