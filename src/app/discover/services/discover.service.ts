import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  constructor (private apollo: Apollo) {}

  getDiscoveryContent = () => {
    return this.apollo.watchQuery({ query: discoverQuery }).valueChanges
  }
}

const discoverQuery = gql`
  query GetDiscoveryContent {
    getTopPlayed {
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
      topics {
        name
        type
      }
      episodes
    }

    getFeatured {
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
      topics {
        type
        name
      }
      episodes
    }

    getTrending {
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
      topics {
        type
        name
      }
      episodes
    }

    getGenres

    topEpisodes {
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
