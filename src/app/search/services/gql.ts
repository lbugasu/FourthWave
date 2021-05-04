import { gql } from "apollo-angular";

export const SEARCH_QUERY = gql`
  query FindPodcasts($searchString: String!) {
    findPodcasts(searchString: $searchString) {
      title
      publisher
      rssFeed
      link
      image
      description
      lastRssBuildDate
      slug
      categories
    }
  }
`

export const SEARH_EPISODES_QUERY = gql`
  query SearchEpisodes($searchString: String!) {
    findEpisodes(searchString: $searchString) {
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
  }
`

export const SEARCH_PODCASTS_AND_EPISODES = gql`
  query($searchString: String!) {
    findEpisodes(searchString: $searchString) {
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
    findPodcasts(searchString: $searchString) {
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
      categories
    }
  }
`
