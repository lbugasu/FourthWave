// import {
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   createSelectorFactory
// } from '@ngrx/store'
// import * as fromUser from './user.reducer'
// import { UserState } from './user.reducer'

// export interface MeState {
//   user: fromUser.UserState
// }

// export const reducers: ActionReducerMap<MeState> = {
//   user: fromUser.reducer
// }

// export const getAppState = createFeatureSelector('me')

// export const getUserState = createSelector(
//   getAppState,
//   (state: MeState) => state.user
// )

// export const getUser = createSelector(getUserState, fromUser.getUser)

// export const getUserLoaded = createSelector(
//   getUserState,
//   fromUser.getUserLoaded
// )
// export const getUserLoading = createSelector(
//   getUserState,
//   fromUser.getUserLoading
// )
