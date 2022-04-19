import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  comments: Array<Comment>;
  contributor: User;
  episodes: Array<Episode>;
  podcasts: Array<Podcast>;
  title: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  podcasts: Array<Podcast>;
};

export type Comment = {
  __typename?: 'Comment';
  categories: Category;
  content: Scalars['String'];
  likes: Array<User>;
  podcast: Podcast;
  userId: User;
};

export type Entity = {
  __typename?: 'Entity';
  episodes: Array<Episode>;
  name: Array<Scalars['String']>;
  podcasts: Array<Podcast>;
  type: Scalars['String'];
};

export type Episode = {
  __typename?: 'Episode';
  categories?: Maybe<Array<Category>>;
  comments?: Maybe<Array<Comment>>;
  datePublished: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  entities: Array<Entity>;
  epNo?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<User>>;
  plays?: Maybe<Play>;
  podcast?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  snNo?: Maybe<Scalars['String']>;
  sourceUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Library = {
  __typename?: 'Library';
  bookmarkedEpisodes: Array<Episode>;
  collections: Array<Collection>;
  followedCategories: Array<Category>;
  likedEpisodes: Array<Episode>;
  likedPodcasts: Array<Podcast>;
  subscribedPodcasts: Array<Podcast>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Adds an episode to a player's queue */
  addToBeginningOfQueue: Play;
  /** Adds an episode to a player's queue */
  addToPlayerQueue: Array<Play>;
  bookmarkEpisode: Episode;
  /** Changes a user's playing speed */
  changePlayingSpeed: Scalars['Float'];
  /** Deletes/Clears a user's playing queue */
  clearQueue: Array<Play>;
  /** completes the currently playing item and loads the current queue */
  completeAndGoToNext: Array<Play>;
  /** Generates the palettes of a podcast based on the podcasts image */
  generatePalettes: Scalars['String'];
  likeEpisode: Episode;
  likePodcast: Podcast;
  rerunPods: Scalars['String'];
  /** Sets a user Volume */
  setUserVolume: Scalars['Float'];
  signUp: User;
  /** Starts the playing of a Play object */
  startPlay: Play;
  subscribeToPodcast: Podcast;
  unbookmarkEpisode: Episode;
  unlikeEpisode: Episode;
  unlikePodcast: Podcast;
  unsubscribeToPodcast: Podcast;
  /** Updates the play position of a Play object */
  updatePlayPosition: Play;
  /** Updates a user's player queue */
  updatePlayerQueue: Play;
  /** Updates the position of a user's Play object */
  updatePosition: Play;
};


export type MutationAddToBeginningOfQueueArgs = {
  slug: Scalars['String'];
};


export type MutationAddToPlayerQueueArgs = {
  slug: Scalars['String'];
};


export type MutationBookmarkEpisodeArgs = {
  slug: Scalars['String'];
};


export type MutationChangePlayingSpeedArgs = {
  speed: Scalars['Float'];
};


export type MutationCompleteAndGoToNextArgs = {
  playId: Scalars['String'];
};


export type MutationGeneratePalettesArgs = {
  slug: Scalars['String'];
};


export type MutationLikeEpisodeArgs = {
  slug: Scalars['String'];
};


export type MutationLikePodcastArgs = {
  slug: Scalars['String'];
};


export type MutationSetUserVolumeArgs = {
  volume: Scalars['Float'];
};


export type MutationStartPlayArgs = {
  slug: Scalars['String'];
};


export type MutationSubscribeToPodcastArgs = {
  slug: Scalars['String'];
};


export type MutationUnbookmarkEpisodeArgs = {
  slug: Scalars['String'];
};


export type MutationUnlikeEpisodeArgs = {
  slug: Scalars['String'];
};


export type MutationUnlikePodcastArgs = {
  slug: Scalars['String'];
};


export type MutationUnsubscribeToPodcastArgs = {
  slug: Scalars['String'];
};


export type MutationUpdatePlayPositionArgs = {
  playId: Scalars['Float'];
  position: Scalars['Float'];
};


export type MutationUpdatePlayerQueueArgs = {
  queue: Scalars['String'];
};


export type MutationUpdatePositionArgs = {
  playId: Scalars['String'];
  position: Scalars['Float'];
};

export type Play = {
  __typename?: 'Play';
  _id: Scalars['String'];
  completed?: Maybe<Scalars['Boolean']>;
  /** The slug of the epiosde */
  episode: Episode;
  position: Scalars['Float'];
  started: Scalars['Boolean'];
};

export type PlayingQueue = {
  __typename?: 'PlayingQueue';
  plays: Array<Play>;
};

export type Podcast = {
  __typename?: 'Podcast';
  base64image?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Category>>;
  description: Scalars['String'];
  entities?: Maybe<Array<Entity>>;
  episodes?: Maybe<Array<Episode>>;
  frequency?: Maybe<Scalars['Float']>;
  image: Scalars['String'];
  lastEpisodeDate?: Maybe<Scalars['DateTime']>;
  lastRssBuildDate?: Maybe<Scalars['DateTime']>;
  link?: Maybe<Scalars['String']>;
  palette: Array<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  releaseDay?: Maybe<Scalars['Float']>;
  rssFeed?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Find episodes based on a search string */
  findEpisodes: Array<Episode>;
  /** Searches for a podcast based on a search string */
  findPodcasts: Array<Podcast>;
  /** Returns a list of all the genres */
  getCategories: Array<Category>;
  getCategorySearchRecommendations: Array<Category>;
  getComment?: Maybe<Comment>;
  getEntityCoverPhoto: Scalars['String'];
  /** Returns a list of recommended topics */
  getEntitySearchRecommendations: Array<Entity>;
  /** Returns the featured podcasts */
  getFeatured: Array<Podcast>;
  /** Find a podcast based on it's slug */
  getPodcast: Podcast;
  /** Returns a podcasts'episodes */
  getPodcastEpisodes: Array<Episode>;
  /** Get all podcasts */
  getPodcasts: Array<Podcast>;
  /** Returns the Most Played Podcasts */
  getTopPlayed: Array<Podcast>;
  /** Returns the Trending Podcasts */
  getTrending: Array<Podcast>;
  /** Returns a user's player queue */
  getUserQueue: Array<Play>;
  print: Scalars['String'];
  /** Returns the Most Popular Podcast Episodes */
  topEpisodes: Array<Episode>;
};


export type QueryFindEpisodesArgs = {
  searchString: Scalars['String'];
};


export type QueryFindPodcastsArgs = {
  searchString: Scalars['String'];
};


export type QueryGetEntityCoverPhotoArgs = {
  title: Scalars['String'];
};


export type QueryGetPodcastArgs = {
  slug: Scalars['String'];
};


export type QueryGetPodcastEpisodesArgs = {
  page: Scalars['Float'];
  slug: Scalars['String'];
};


export type QueryGetPodcastsArgs = {
  page: Scalars['Float'];
};

/** UI Mode - Either '"Light" or "Dark" */
export enum UiMode {
  Dark = 'Dark',
  Light = 'Light'
}

export type User = {
  __typename?: 'User';
  active: Scalars['Boolean'];
  admin: Scalars['Boolean'];
  contributions: Array<Scalars['String']>;
  email: Scalars['String'];
  library: Library;
  name: Scalars['String'];
  plays: Array<Play>;
  preferences: UserPreference;
  queue: Array<PlayingQueue>;
  uid: Scalars['String'];
};

export type UserPreference = {
  __typename?: 'UserPreference';
  playbackSpeed: Scalars['Float'];
  skipAds: Scalars['Boolean'];
  uiMode: UiMode;
  volume: Scalars['Float'];
};
