import { UserState, USER_STATE_NAME } from './../state/user.state'
import { createFeatureSelector, createSelector } from '@ngrx/store'

const getUserState = createFeatureSelector<UserState>(USER_STATE_NAME)

export const getUser = createSelector(getUserState, (state: UserState) => {
  return state
})

export const getUserLoggedInStatus = createSelector(
  getUser,
  state => state.loggedIn
)
