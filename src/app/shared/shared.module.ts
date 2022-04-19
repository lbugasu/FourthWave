import { PlayerEffects } from './player/store/player.effects'
import { PLAYER_STATE_NAME } from './player/store/player.selectors'
import { EffectsModule } from '@ngrx/effects'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerComponent } from './player/player.component'
import { Material } from 'src/libs'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TimePipe } from './pipes/time/time.pipe'
import { DatePipe } from './pipes/date/date.pipe'
import { WordcountPipe } from './pipes/wordcount/wordcount.pipe'
import { StoreModule } from '@ngrx/store'
import { playerReducer } from './player/store/player.reducers'
import { AudioPlayer } from './player/audio/audio.player'
import { GraphQLModule } from './graphql/graphql.module'

@NgModule({
  declarations: [PlayerComponent, TimePipe, DatePipe, WordcountPipe],
  imports: [
    CommonModule,
    Material,
    FormsModule,
    GraphQLModule,
    ReactiveFormsModule,
    // EffectsModule.forFeature([PlayerEffects]),
    StoreModule.forFeature(PLAYER_STATE_NAME, playerReducer)
  ],
  exports: [PlayerComponent, TimePipe, DatePipe, WordcountPipe]
})
export class SharedModule {}
