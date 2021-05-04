import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { User } from '../../shared/Models/User'
import { SIGN_IN, SIGN_IN_WITH_TOKEN, SIGN_OUT, SIGN_UP } from './mutations'
import { NewUser } from '../../shared/Models/User'
import { Play } from 'src/app/shared/Models/Play'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
      variables: { user: user }
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
}
