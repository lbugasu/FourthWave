import { User } from 'src/app/shared/services/auth/User'
import * as fromUser from '../actions/user.actions'
export interface UserState {
  data: User[]
  loaded: boolean
  loading: boolean
}

export const initialState: UserState = {
  data: [],
  loaded: false,
  loading: false
}

export function reducer (
  state = initialState,
  action: fromUser.UserAction
): UserState {
  switch (action.type) {
    case fromUser.SIGN_IN: {
      return {
        ...state,
        loading: true,
        loaded: false
      }
    }
    case fromUser.SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      }
    }
    case fromUser.SIGN_IN_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }
  return state
}

// Selectors

export const getUserLoading = (state: UserState) => {
  return state.loading
}

export const getUserLoaded = (state: UserState) => {
  return state.loaded
}
export const getUser = (state: UserState) => {
  return state.data
}

// case fromUser.SIGN_UP: {
//   return {
//     ...state,
//     loading: true,
//     loaded: false
//   }
// }
// case fromUser.SIGN_UP_SUCCESS: {
//   return {
//     ...state,
//     loading: false,
//     loaded: true
//   }
// }
// case fromUser.SIGN_UP_FAILURE: {
//   return {
//     ...state,
//     loading: false,
//     loaded: false
//   }
// }
