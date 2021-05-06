import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { User, NewUser } from '../../shared/Models'
import {
  BOOKMARK_EPISODE,
  LIKE_EPISODE,
  LIKE_PODCAST,
  SIGN_IN,
  SIGN_IN_WITH_TOKEN,
  SIGN_OUT,
  SIGN_UP,
  SUBSCRIBE_TO_PODCAST
} from './gql'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor (private apollo: Apollo) {}

  signIn (username: string, password: string) {
    return this.apollo.mutate<User>({
      mutation: SIGN_IN,
      variables: { username: username, password: password }
    })
  }

  signUp (user: NewUser) {
    return this.apollo.mutate<User>({
      mutation: SIGN_UP,
      variables: { ...user }
    })
  }

  signOut () {
    return this.apollo.mutate<boolean>({
      mutation: SIGN_OUT
    })
  }

  signInWithToken () {
    return this.apollo.mutate<User>({
      mutation: SIGN_IN_WITH_TOKEN
    })
  }

  likePodcast (slug: string) {
    return this.apollo.mutate({
      mutation: LIKE_PODCAST,
      variables: { slug: slug }
    })
  }
  likeEpisode (slug: string) {
    return this.apollo.mutate({
      mutation: LIKE_EPISODE,
      variables: { slug: slug }
    })
  }
  subscribeToPodcast (slug: string) {
    return this.apollo.mutate({
      mutation: SUBSCRIBE_TO_PODCAST,
      variables: { slug: slug }
    })
  }
  bookmarkEpisode (slug: string) {
    return this.apollo.mutate({
      mutation: BOOKMARK_EPISODE,
      variables: { slug: slug }
    })
  }
}
