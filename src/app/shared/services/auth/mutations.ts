import { gql } from 'apollo-angular'

export const SIGN_IN = gql`
  mutation SignIn($password: String!, $username: String!) {
    signIn(password: $password, username: $password) {
      firstname
      lastname
      username
      email
      password
      contributions
      LikedPodcasts {
        title
      }
      subscribedPodcasts {
        title
      }
      likedEpisodes {
        title
      }
      bookmarkedEpisodes {
        title
      }
      plays {
        episode
      }
      playingSpeed
      volume
      authtoken
      admin
    }
  }
`

export const SIGN_UP = gql`
  mutation SignUp($user: NewUser!) {
    signUp(user: $user) {
      firstname
      lastname
      username
      email
      password
      contributions
      LikedPodcasts {
        title
      }
      subscribedPodcasts {
        title
      }
      likedEpisodes {
        title
      }
      bookmarkedEpisodes {
        title
      }
      plays {
        episode
      }
      playingSpeed
      volume
      authtoken
    }
  }
`
