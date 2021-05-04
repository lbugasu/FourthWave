import { gql } from 'apollo-angular'

export const SET_VOLUME = gql`
  mutation SetUserVolume($volume: Float!) {
    setUserVolume(volume: $volume)
  }
`
export const GET_USER_PLAYING_QUEUE = gql`
  query GetQueue {
    getUserQueue {
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
  }
`
export const ADD_TO_PLAYING_QUEUE = gql`
  mutation AddToQueue($slug: String!) {
    addToPlayerQueue(slug: $slug) {
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
  }
`

export const ADD_TO_BEGINNING_OF_QUEUE = gql`
  mutation AddToBeginningOfQueue($slug: String!) {
    addToBeginningOfQueue(slug: $slug) {
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
  }
`

export const CHANGE_PLAYING_SPEED = gql`
  mutation ChangePlayingSpeed($speed: Float!) {
    changePlayingSpeed(speed: $speed)
  }
`

export const UPDATE_PLAY_POSITION = gql`
  mutation UpdatePosition($position: Float!, $playId: String!) {
    updatePosition(position: $position, playId: $playId) {
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
      }
      position
      started
      completed
    }
  }
`
export const UPDATE_PLAYER_QUEUE = gql`
  mutation updatePlayerQueue($queue: [String]!) {
    updatePlayerQueue(queue: $queue) {
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
  }
`
export const CLEAR_QUEUE = gql`
  mutation ClearQueue {
    clearQueue
  }
`
