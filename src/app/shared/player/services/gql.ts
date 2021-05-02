import { gql } from 'apollo-angular'

export const SET_VOLUME = gql`
  mutation SetUserVolume($volume: Float!) {
    setUserVolume(volume: $volume)
  }
`
export const GET_USER_PLAYING_QUEUE = gql`
  query GetQueue {
    getUserQueue {
      episode {
        title
        slug
        datePublished
        description
        duration
        image
        snNo
        epNo
        topics {
          name
        }
      }
      position
      started
      completed
    }
  }
`
export const ADD_TO_PLAYING_QUEUE = gql`
  mutation AddToQueue($slug: String!) {
    addToPlayerQueue(slug: $slug) {
      episode {
        title
        slug
        datePublished
        description
        duration
        image
        snNo
        epNo
        topics {
          name
        }
        plays {
          completed
        }
      }
      position
      started
      completed
    }
  }
`
