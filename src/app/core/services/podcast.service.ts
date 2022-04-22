import { Injectable, Optional } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { Episode } from '../../shared/Models'

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
            topics {
                type
                name
            }
        }
    }
`

const GET_PODCAST_WITH_EPISODES = gql`
    query GetPodcastWithEpisodes($slug: String!, $page: Float!) {
        getPodcast(slug: $slug) {
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
        getPodcastEpisodes(page: $page, slug: $slug) {
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
@Injectable({
    providedIn: 'root',
})
export class PodcastService {
    constructor(@Optional() private apollo: Apollo) {}

    getPodcasts(page: number) {
        return this.apollo.watchQuery({
            query: GET_PODCASTS_QUERY,
            variables: { page: page },
        }).valueChanges
    }

    getPodcast(slug: string) {
        return this.apollo.watchQuery({
            query: SINGLE_PODCAST_QUERY,
            variables: { slug: slug },
        }).valueChanges
    }

    getPodcastAndEpisodes(slug: string, page: number) {
        return this.apollo.watchQuery({
            query: GET_PODCAST_WITH_EPISODES,
            variables: { slug: slug, page: page },
        }).valueChanges
    }

    getEpisodes(slug: string, page: number) {
        return this.apollo.watchQuery<Episode[]>({
            query: PODCAST_EPISODES_QUERY,
            variables: { slug: slug, page: page },
        }).valueChanges
    }
}
