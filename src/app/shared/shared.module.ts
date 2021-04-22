import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { Material } from "src/libs";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, Material, FormsModule, ReactiveFormsModule],
  exports: [PlayerComponent],
})
export class SharedModule {}
