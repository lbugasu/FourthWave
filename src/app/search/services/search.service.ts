import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { Observable } from 'rxjs'
import { Podcast } from 'src/app/shared/Models/Podcast'

const SEARCH_QUERY = gql`
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

const SEARH_EPISODES_QUERY = gql`
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

const SEARCH_PODCASTS_AND_EPISODES = gql`
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
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor (private apollo: Apollo) {}

  searchPodcast (searchString: string) {
    return this.apollo.watchQuery<Podcast[]>({
      query: SEARCH_QUERY,
      variables: { searchString: searchString }
    }).valueChanges
  }

  searchEpisodes (searchString: string) {
    return this.apollo.watchQuery({
      query: SEARH_EPISODES_QUERY,
      variables: { searchString: searchString }
    }).valueChanges
  }

  searchPodcastsAndEpisodes (searchString: string) {
    return this.apollo.watchQuery({
      query: SEARCH_PODCASTS_AND_EPISODES,
      variables: { searchString: searchString }
    }).valueChanges
  }
}
