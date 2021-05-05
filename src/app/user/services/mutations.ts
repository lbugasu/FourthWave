import { gql } from 'apollo-angular'

export const SIGN_IN = gql`
  mutation SignIn($password: String!, $username: String!) {
    signin(password: $password, username: $username) {
      firstname
      lastname
      username
      email
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
      queue {
        _id
        episode {
          title
          slug
          datePublished
          description
          duration
          image
          snNo
          epNo
          sourceUrl
        }
        position
        started
        completed
      }
      playingSpeed
      volume
      authtoken
      admin
    }
  }
`

export const SIGN_UP = gql`
  mutation SignUp(
    $username: String!
    $email: String!
    $firstname: String!
    $lastname: String!
    $password: String!
  ) {
    signup(
      username: $username
      email: $email
      firstname: $firstname
      lastname: $lastname
      password: $password
    ) {
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
      queue {
        _id
        episode {
          title
          slug
          datePublished
          description
          duration
          image
          snNo
          epNo
          sourceUrl
        }
        position
        started
        completed
      }
      playingSpeed
      volume
      authtoken
    }
  }
`
export const SIGN_OUT = gql`
  mutation {
    signout
  }
`

export const SIGN_IN_WITH_TOKEN = gql`
  mutation SignInWithToken {
    signInWithToken {
      firstname
      lastname
      username
      email
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
      queue {
        _id
        episode {
          title
          slug
          datePublished
          description
          duration
          image
          snNo
          epNo
          sourceUrl
        }
        position
        started
        completed
      }
      playingSpeed
      volume
      authtoken
      admin
    }
  }
`
