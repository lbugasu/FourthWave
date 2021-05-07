(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "DskF":
/*!*****************************************************!*\
  !*** ./src/app/podcast/services/podcast.service.ts ***!
  \*****************************************************/
/*! exports provided: PodcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastService", function() { return PodcastService; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const GET_PODCASTS_QUERY = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
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
      topics {
        type
        name
      }
    }
  }
`;
const SINGLE_PODCAST_QUERY = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
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
      topics {
        type
        name
      }
    }
  }
`;
const PODCAST_EPISODES_QUERY = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
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
`;
class PodcastService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    getPodcasts(page) {
        return this.apollo.watchQuery({
            query: GET_PODCASTS_QUERY,
            variables: { page: page }
        });
    }
    getPodcast(slug) {
        return this.apollo.watchQuery({
            query: SINGLE_PODCAST_QUERY,
            variables: { slug: slug }
        });
    }
    getEpisodes(slug, page) {
        return this.apollo.watchQuery({
            query: PODCAST_EPISODES_QUERY,
            variables: { slug: slug, page: page }
        });
    }
}
PodcastService.ɵfac = function PodcastService_Factory(t) { return new (t || PodcastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
PodcastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PodcastService, factory: PodcastService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map