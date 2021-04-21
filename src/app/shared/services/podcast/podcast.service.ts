import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_PODCASTS_QUERY = gql`
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
      palette
    }
  }
`;

const SINGLE_PODCAST_QUERY = gql`
  query GetPodcast($slug: String!) {
    getPodcast(slug: $slug) {
      title
      publisher
      rssFeed
      link
      image
      description
      lastRssBuildDate
      slug
      categories
      palette
    }
  }
`;

const PODCAST_EPISODES_QUERY = gql`
  query GetPodcastEpisodes($slug: String!) {
    getPodcastEpisodes(slug: $slug) {
      title
      datePublished
      description
      duration
      sourceUrl
      image
      slug
    }
  }
`;
@Injectable({
  providedIn: "root",
})
export class PodcastService {
  constructor(private apollo: Apollo) {}

  getAllPodcasts() {
    return this.apollo.watchQuery({
      query: GET_PODCASTS_QUERY,
    });
  }

  getPodcast(slug: string) {
    return this.apollo.watchQuery({
      query: SINGLE_PODCAST_QUERY,
      variables: { slug: slug },
    });
  }

  getEpisodes(slug: string) {
    return this.apollo.watchQuery({
      query: PODCAST_EPISODES_QUERY,
      variables:  {  slug: slug  },
    });;
  }
}
