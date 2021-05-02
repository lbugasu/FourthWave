import { Apollo } from 'apollo-angular'
import { Injectable } from '@angular/core'
import { SET_VOLUME, GET_USER_PLAYING_QUEUE, ADD_TO_PLAYING_QUEUE } from './gql'

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
}
