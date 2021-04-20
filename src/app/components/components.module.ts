import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastPreviewComponent } from './podcast-preview/podcast-preview.component';



@NgModule({
  declarations: [
    PodcastPreviewComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[PodcastPreviewComponent]
})
export class ComponentsModule { }
