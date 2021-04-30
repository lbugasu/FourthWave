import { createAction, props } from '@ngrx/store'
import { Episode } from 'src/app/shared/Models/Episode'

export const changeVolume = createAction(
  'increase_volume',
  props<{ value: number }>()
)
export const pause = createAction('pause')
export const play = createAction('play')
export const stop = createAction('stop')
export const addToQueue = createAction(
  'add_to_queue',
  props<{ episode: Episode }>()
)
export const rewind = createAction('rewind')
export const fastForward = createAction('fast_forward')
export const next = createAction('next')
export const prev = createAction('prev')
export const toggleMini = createAction('toggle_mini')
