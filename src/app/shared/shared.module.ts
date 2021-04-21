import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { Material } from "src/libs";



@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, Material],
  exports: [PlayerComponent],
})
export class SharedModule {}
