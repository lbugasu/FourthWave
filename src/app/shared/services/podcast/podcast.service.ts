import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_PODCASTS_WUERY = gql`
  query {
    getPodcasts {
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
`;
@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  constructor(private apollo: Apollo) {}

  getAllPodcasts() {
    return this.apollo.watchQuery({
      query: GET_PODCASTS_WUERY,
    });
  }
}
