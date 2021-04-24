import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Episode } from '../../Models/Episode';

const GET_PODCASTS_QUERY = gql`
  query GetPodcasts($page: Float!) {
    getPodcasts(page: $page) {
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
  query GetPodcastEpisodes($slug: String!, $page: Float!) {
    getPodcastEpisodes(slug: $slug, page: $page) {
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

  getPodcasts(page: number) {
    return this.apollo.watchQuery({
      query: GET_PODCASTS_QUERY,
      variables: {  page: page  },
    });
  }

  getPodcast(slug: string) {
    return this.apollo.watchQuery({
      query: SINGLE_PODCAST_QUERY,
      variables: { slug: slug },
    });
  }

  getEpisodes(slug: string, page: number) {
    return this.apollo.watchQuery<Episode[]>({
      query: PODCAST_EPISODES_QUERY,
      variables: { slug: slug , page: page},
    });
  }
}
