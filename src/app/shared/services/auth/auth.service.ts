import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { SIGN_IN, SIGN_UP } from './mutations'
import { NewUser } from './User'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (private apollo: Apollo) {}

  signIn (username: string, password: string) {
    return this.apollo.mutate({
      mutation: SIGN_IN,
      variables: { username: username, password: password }
    })
  }

  signUp (user: NewUser) {
    return this.apollo.mutate({
      mutation: SIGN_UP,
      variables: { user: user }
    })
  }
}
