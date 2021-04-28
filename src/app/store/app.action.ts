import { createAction, props } from '@ngrx/store'
import { User } from '../shared/services/auth/User'

export const setUser = createAction(
  '[SIGN IN COMPONENT] ADD USER',
  props<{ user: User }>()
)
