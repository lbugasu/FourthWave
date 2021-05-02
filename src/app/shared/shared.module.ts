import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerComponent } from './player/player.component'
import { Material } from 'src/libs'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TimePipe } from './pipes/time/time.pipe'
import { DatePipe } from './pipes/date/date.pipe'
import { WordcountPipe } from './pipes/wordcount/wordcount.pipe'

@NgModule({
  declarations: [PlayerComponent, TimePipe, DatePipe, WordcountPipe],
  imports: [CommonModule, Material, FormsModule, ReactiveFormsModule],
  exports: [PlayerComponent, TimePipe, DatePipe, WordcountPipe]
})
export class SharedModule {}
