import { Apollo } from 'apollo-angular'
import { Injectable } from '@angular/core'
import {
  SET_VOLUME,
  GET_USER_PLAYING_QUEUE,
  ADD_TO_PLAYING_QUEUE,
  CHANGE_PLAYING_SPEED,
  UPDATE_PLAY_POSITION,
  CLEAR_QUEUE,
  UPDATE_PLAYER_QUEUE,
  ADD_TO_BEGINNING_OF_QUEUE
} from './gql'
import { Play } from '../../Models/Play'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor (private apollo: Apollo) {}

  setUserVolume (volume: number) {
    return this.apollo.mutate({
      mutation: SET_VOLUME,
      variables: { volume: volume }
    })
  }

  getPlayingQueue () {
    return this.apollo.watchQuery({
      query: GET_USER_PLAYING_QUEUE
    }).valueChanges
  }

  addToPlayingQueue (slug: string) {
    return this.apollo.mutate({
      mutation: ADD_TO_PLAYING_QUEUE,
      variables: { slug: slug }
    })
  }
  addToBeginningOfQueue (slug: string) {
    return this.apollo.mutate({
      mutation: ADD_TO_BEGINNING_OF_QUEUE,
      variables: { slug: slug }
    })
  }

  changePlayingSpeed (speed: number) {
    return this.apollo.mutate({
      mutation: CHANGE_PLAYING_SPEED,
      variables: { speed: speed }
    })
  }

  updatePlayPosition (position: number, playId: string) {
    return this.apollo.mutate({
      mutation: UPDATE_PLAY_POSITION,
      variables: { position: position, playId: playId }
    })
  }

  updatePlayerQueue (queue: Play[]) {
    return this.apollo.mutate({
      mutation: UPDATE_PLAYER_QUEUE,
      variables: { queue: queue }
    })
  }
  clearQueue () {
    return this.apollo.mutate({
      mutation: CLEAR_QUEUE
    })
  }
}
