import { gql } from 'apollo-angular'

export const SIGN_IN = gql`
  mutation SignIn($password: String!, $username: String!) {
    signin(password: $password, username: $username) {
      firstname
      lastname
      username
      email
      contributions
      likedPodcasts {
        title
      }
      subscribedPodcasts {
        title
        publisher
        rssFeed
        base64image
        link
        image
        description
        palette
        lastRssBuildDate
        slug
      }
      likedPodcasts {
        title
        publisher
        rssFeed
        base64image
        link
        image
        description
        palette
        lastRssBuildDate
        slug
      }
      likedEpisodes {
        title
        datePublished
        description
        duration
        sourceUrl
        image
        podcast
        epNo
        snNo
        slug
      }
      bookmarkedEpisodes {
        title
        datePublished
        description
        duration
        sourceUrl
        image
        podcast
        epNo
        snNo
        slug
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
      likedPodcasts {
        title
      }
      subscribedPodcasts {
        title
        publisher
        rssFeed
        base64image
        link
        image
        description
        palette
        lastRssBuildDate
        slug
      }
      likedPodcasts {
        title
        publisher
        rssFeed
        base64image
        link
        image
        description
        palette
        lastRssBuildDate
        slug
      }
      likedEpisodes {
        title
        datePublished
        description
        duration
        sourceUrl
        image
        podcast
        epNo
        snNo
        slug
      }
      bookmarkedEpisodes {
        title
        datePublished
        description
        duration
        sourceUrl
        image
        podcast
        epNo
        snNo
        slug
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
      likedPodcasts {
        title
        publisher
        rssFeed
        base64image
        link
        image
        description
        palette
        lastRssBuildDate
        slug
      }
      subscribedPodcasts {
        title
        publisher
        rssFeed
        base64image
        link
        image
        description
        palette
        lastRssBuildDate
        slug
      }
      likedPodcasts {
        title
        publisher
        rssFeed
        base64image
        link
        image
        description
        palette
        lastRssBuildDate
        slug
      }
      likedEpisodes {
        title
        datePublished
        description
        duration
        sourceUrl
        image
        podcast
        epNo
        snNo
        slug
      }
      bookmarkedEpisodes {
        title
        datePublished
        description
        duration
        sourceUrl
        image
        podcast
        epNo
        snNo
        slug
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

export const LIKE_PODCAST = gql`
  mutation likePodcast($slug: String!) {
    likePodcast(slug: $slug) {
      title
      publisher
      rssFeed
      link
      image
      description
      lastRssBuildDate
      slug
      palette
      categories {
        title
      }
      topics {
        name
        type
      }
    }
  }
`
export const LIKE_EPISODE = gql`
  mutation LikEpisode($slug: String!) {
    likeEpisode(slug: $slug) {
      title
      datePublished
      description
      duration
      sourceUrl
      image
      podcast
      epNo
      snNo
      topics {
        name
      }
      categories {
        title
      }
      slug
    }
  }
`
export const BOOKMARK_EPISODE = gql`
  mutation bookmarkEpisode($slug: String!) {
    bookmarkEpisode(slug: $slug) {
      title
      datePublished
      description
      duration
      sourceUrl
      image
      podcast
      epNo
      snNo
      topics {
        name
      }
      categories {
        title
      }
      slug
    }
  }
`
export const SUBSCRIBE_TO_PODCAST = gql`
  mutation SubscribeToPodcast($slug: String!) {
    subscribeToPodcast(slug: $slug) {
      title
      publisher
      rssFeed
      link
      image
      description
      lastRssBuildDate
      slug
      palette
      categories {
        title
      }
      topics {
        name
        type
      }
    }
  }
`
