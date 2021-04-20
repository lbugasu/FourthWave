import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const SEARCH_QUERY = gql`
  query FindPodcasts($searchString: String!){
  findPodcasts(searchString: $searchString){
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
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apollo: Apollo) { }

  searchPodcast(searchString: string){
    return this.apollo.watchQuery({
      query: SEARCH_QUERY,
      variables:{searchString:searchString}
    })
  }
}
