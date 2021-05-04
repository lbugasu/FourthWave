import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { Observable } from 'rxjs'
import { Podcast } from 'src/app/shared/Models/Podcast'
import {
  SEARCH_QUERY,
  SEARH_EPISODES_QUERY,
  SEARCH_PODCASTS_AND_EPISODES
} from './gql'

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
