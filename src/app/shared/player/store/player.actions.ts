import { createAction, props } from '@ngrx/store'
import { Episode } from 'src/app/shared/Models/Episode'
import { Play } from '../../Models/Play'

const CHANGE_VOLUME_START = 'change volume start'
const CHANGE_VOLUME_SUCCESS = 'change volume success'
const CHANGE_VOLUME_FAILURE = 'change volume failure'

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

const CHANGE_PLAYING_SPEED_START = 'change playing speed start'
const CHANGE_PLAYING_SPEED_SUCCESS = 'change playing speed success'
const CHANGE_PLAYING_SPEED_FAILURE = 'change playing speed failure'

export const changePlayingSpeed = createAction(
  CHANGE_PLAYING_SPEED_START,
  props<{ speed: number }>()
)
export const changePlayingSpeedSuccess = createAction(
  CHANGE_PLAYING_SPEED_SUCCESS,
  props<{ speed: number }>()
)
export const changePlayingSpeedFailure = createAction(
  CHANGE_PLAYING_SPEED_FAILURE
)

const PAUSE_START = 'pause start'
const PAUSE_SUCCESS = 'pause success'
const PAUSE_FAILURE = 'pause failure'

export const pauseStart = createAction(PAUSE_START)
export const pauseSuccess = createAction(PAUSE_SUCCESS)
export const pauseFailure = createAction(PAUSE_FAILURE)

const PLAY_PAUSE_START = 'play start'
const PLAY_PAUSE_SUCCESS = 'play success'
const PLAY_PAUSE_FAILURE = 'play failure'

export const playPause = createAction(PLAY_PAUSE_START)
export const playPauseStart = createAction(PLAY_PAUSE_START)
export const playPauseSuccess = createAction(
  PLAY_PAUSE_SUCCESS,
  props<{ playing: boolean }>()
)
export const playPauseFailure = createAction(PLAY_PAUSE_FAILURE)

const STOP_START = 'stop success'
const STOP_SUCCESS = 'stop success'
const STOP_FAILURE = 'stop failure'

export const stopStart = createAction(STOP_START)
export const stopSuccess = createAction(STOP_SUCCESS)
export const stopFailure = createAction(STOP_FAILURE)

const ADD_TO_BEGINNING_OF_QUEUE = 'add to beginning of queue'
const ADD_TO_BEGINNING_OF_QUEUE_SUCCESS = 'add to beginning of queue success'
const ADD_TO_BEGINNING_OF_QUEUE_FAILURE = 'add to beginning of queue failure'

export const addToBeginningOfQueueStart = createAction(
  ADD_TO_BEGINNING_OF_QUEUE,
  props<{ episode: Episode }>()
)
export const addToBeginningOfQueueSuccess = createAction(
  ADD_TO_BEGINNING_OF_QUEUE_SUCCESS,
  props<{ play: Play }>()
)

export const addToBeginningOfQueueFailure = createAction(
  ADD_TO_BEGINNING_OF_QUEUE_FAILURE,
  props<{ play: Play }>()
)

const ADD_TO_QUEUE_START = 'add to queue'
const ADD_TO_QUEUE_SUCCESS = 'add to queue success'
const ADD_TO_QUEUE_FAILURE = 'add to queue failure'

export const addToQueueStart = createAction(
  ADD_TO_QUEUE_START,
  props<{ episode: Episode }>()
)
export const addToQueueSuccess = createAction(
  ADD_TO_QUEUE_SUCCESS,
  props<{ plays: Play[] }>()
)

export const addToQueueFailure = createAction(ADD_TO_QUEUE_FAILURE)

const GET_PLAYING_QUEUE_START = 'get playing queue start'
const GET_PLAYING_QUEUE_SUCCESS = 'get playing queue success'
const GET_PLAYING_QUEUE_FAILURE = 'get playing queue failure'

export const getPlayingQueueStart = createAction(GET_PLAYING_QUEUE_START)
export const getPlayingQueueSuccess = createAction(
  GET_PLAYING_QUEUE_SUCCESS,
  props<{ plays: Play[] }>()
)
export const getPlayingQueueFailure = createAction(GET_PLAYING_QUEUE_FAILURE)

const UPDATE_PLAYING_QUEUE_START = 'update playing queue start'
const UPDATE_PLAYING_QUEUE_SUCCESS = 'update playing queue success'
const UPDATE_PLAYING_QUEUE_FAILURE = 'update playing queue failure'

export const updatePlayingQueueStart = createAction(
  UPDATE_PLAYING_QUEUE_START,
  props<{ queue: Play[] }>()
)
export const updatePlayingQueueFailure = createAction(
  UPDATE_PLAYING_QUEUE_FAILURE
)
export const updatePlayingQueueSuccess = createAction(
  UPDATE_PLAYING_QUEUE_SUCCESS,
  props<{ queue: Play[] }>()
)

/* Clears a user's queue */
const CLEAR_QUEUE_START = 'clear queue start'
const CLEAR_QUEUE_SUCCESS = 'clear queue success'
const CLEAR_QUEUE_FAILURE = 'clear queue failure'

export const clearQueueStart = createAction(CLEAR_QUEUE_START)
export const clearQueueSuccess = createAction(CLEAR_QUEUE_SUCCESS)
export const clearQueueFailure = createAction(CLEAR_QUEUE_FAILURE)

/* Update the play position of currently playing item */
const UPDATE_PLAY_POSITION_START = 'update play position start'
const UPDATE_PLAY_POSITION_SUCCESS = 'update play position success'
const UPDATE_PLAY_POSITION_FAILURE = 'update play position failure'

export const updatePlayPositionStart = createAction(
  UPDATE_PLAY_POSITION_START,
  props<{ position: number; item: Play }>()
)
export const updatePlayPositionSuccess = createAction(
  UPDATE_PLAY_POSITION_SUCCESS
)
export const updatePlayPositionFailure = createAction(
  UPDATE_PLAY_POSITION_FAILURE
)

const REWIND_START = 'rewind start'
const REWIND_SUCCESS = 'rewind success'
const REWIND_FAILURE = 'rewind failure'

export const rewindStart = createAction(REWIND_START)
export const rewindSuccess = createAction(REWIND_SUCCESS)
export const rewindFailure = createAction(REWIND_FAILURE)

const FORWARD_START = 'forward start'
const FORWARD_SUCCESS = 'forward success'
const FORWARD_FAILURE = 'forward failure'

export const forwardStart = createAction(FORWARD_START)
export const forwardSuccess = createAction(FORWARD_SUCCESS)
export const forwardFailure = createAction(FORWARD_FAILURE)

const NEXT_START = 'next start'
const NEXT_SUCCESS = 'next success'
const NEXT_FAILURE = 'next failure'

export const nextStart = createAction(NEXT_START)
export const nextSuccess = createAction(NEXT_SUCCESS)
export const nextFailure = createAction(NEXT_FAILURE)

const PREVIOUS_START = 'previous start'
const PREVIOUS_SUCCESS = 'previous success'
const PREVIOUS_FAILURE = 'previous failure'

export const prevStart = createAction(PREVIOUS_START)
export const prevSuccess = createAction(PREVIOUS_SUCCESS)
export const prevFailure = createAction(PREVIOUS_FAILURE)

const TOGGLE_MINI_PLAYER = 'toggle mini player'

export const toggleMiniPlayer = createAction(TOGGLE_MINI_PLAYER)

const COMPLETE_AND_PLAY_NEXT_START = 'complete and play next start'
const COMPLETE_AND_PLAY_NEXT_SUCCESS = 'complete and play next success'
const COMPLETE_AND_PLAY_NEXT_FAILURE = 'complete and play next failure'

export const completeAndPlayNextStart = createAction(
  COMPLETE_AND_PLAY_NEXT_START
)
export const completeAndPlayNextSuccess = createAction(
  COMPLETE_AND_PLAY_NEXT_SUCCESS,
  props<{ queue: Play[] }>()
)
export const completeAndPlayNextFailure = createAction(
  COMPLETE_AND_PLAY_NEXT_FAILURE
)
