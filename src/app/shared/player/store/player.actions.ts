import { createAction, props } from '@ngrx/store'
import { Episode } from 'src/app/shared/Models/Episode'
import { Play } from '../../Models/Play'

const CHANGE_VOLUME_START = 'change volume start'
const CHANGE_VOLUME_SUCCESS = 'change volume success'
const CHANGE_VOLUME_FAILURE = 'change volume failure'

const PLAY_PAUSE_START = 'play start'
const PLAY_PAUSE_SUCCESS = 'play success'
const PLAY_PAUSE_FAILURE = 'play failure'

const PAUSE_START = 'pause start'
const PAUSE_SUCCESS = 'pause success'
const PAUSE_FAILURE = 'pause failure'

const STOP_START = 'stop'
const STOP_SUCCESS = 'stop'
const STOP_FAILURE = 'stop'

const ADD_TO_QUEUE_START = 'add to queue'
const ADD_TO_QUEUE_SUCESS = 'add to queue'
const ADD_TO_QUEUE_FAILURE = 'add to queue'

const GET_PLAYING_QUEUE_START = 'get playing queue start'
const GET_PLAYING_QUEUE_SUCCESS = 'get playing queue success'
const GET_PLAYING_QUEUE_FAILURE = 'get playing queue failure'

const REWIND_START = 'rewind start'
const REWIND_SUCCESS = 'rewind success'
const REWIND_FAILURE = 'rewind failure'

const FORWARD_START = 'forward start'
const FORWARD_SUCCESS = 'forward success'
const FORWARD_FAILURE = 'forward failure'

const NEXT_START = 'next start'
const NEXT_SUCCESS = 'next success'
const NEXT_FAILURE = 'next failure'

const PREVIOUS_START = 'previous start'
const PREVIOUS_SUCCESS = 'previous success'
const PREVIOUS_FAILURE = 'previous failure'

const TOGGLE_MINI_PLAYER = 'toggle mini player'

export const changeVolume = createAction(
  CHANGE_VOLUME_START,
  props<{ volume: number }>()
)
export const changeVolumeSuccess = createAction(
  CHANGE_VOLUME_SUCCESS,
  props<{ volume: number }>()
)
export const changeVolumeFailure = createAction(
  CHANGE_VOLUME_FAILURE,
  props<{ volume: number }>()
)

export const pauseStart = createAction(PAUSE_START)
export const pauseSuccess = createAction(PAUSE_SUCCESS)
export const pauseFailure = createAction(PAUSE_FAILURE)

export const playPause = createAction(PLAY_PAUSE_START)
export const playPauseStart = createAction(PLAY_PAUSE_START)
export const playPauseSuccess = createAction(
  PLAY_PAUSE_SUCCESS,
  props<{ playing: boolean }>()
)
export const playPauseFailure = createAction(PLAY_PAUSE_FAILURE)

export const stopStart = createAction(STOP_START)
export const stopSuccess = createAction(STOP_SUCCESS)
export const stopFailure = createAction(STOP_FAILURE)

export const addToQueueStart = createAction(
  ADD_TO_QUEUE_START,
  props<{ episode: Episode }>()
)
export const addToQueueSuccess = createAction(
  ADD_TO_QUEUE_SUCESS,
  props<{ plays: Play[] }>()
)

export const addToQueueFailure = createAction(ADD_TO_QUEUE_FAILURE)

export const getPlayingQueueStart = createAction(GET_PLAYING_QUEUE_START)
export const getPlayingQueueSuccess = createAction(
  GET_PLAYING_QUEUE_SUCCESS,
  props<{ plays: Play[] }>()
)
export const getPlayingQueueFailure = createAction(GET_PLAYING_QUEUE_FAILURE)

export const rewindStart = createAction(REWIND_START)
export const rewindSuccess = createAction(REWIND_SUCCESS)
export const rewindFailure = createAction(REWIND_FAILURE)

export const forwardStart = createAction(FORWARD_START)
export const forwardSuccess = createAction(FORWARD_SUCCESS)
export const forwardFailure = createAction(FORWARD_FAILURE)

export const nextStart = createAction(NEXT_START)
export const nextSuccess = createAction(NEXT_SUCCESS)
export const nextFailure = createAction(NEXT_FAILURE)

export const prevStart = createAction(PREVIOUS_START)
export const prevSuccess = createAction(PREVIOUS_SUCCESS)
export const prevFailure = createAction(PREVIOUS_FAILURE)

export const toggleMiniPlayer = createAction(TOGGLE_MINI_PLAYER)
