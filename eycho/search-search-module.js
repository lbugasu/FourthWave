(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "2SfO":
/*!***************************************************!*\
  !*** ./src/app/search/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const SEARCH_QUERY = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
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
`;
const SEARH_EPISODES_QUERY = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
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
`;
const SEARCH_PODCASTS_AND_EPISODES = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
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
`;
class SearchService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    searchPodcast(searchString) {
        return this.apollo.watchQuery({
            query: SEARCH_QUERY,
            variables: { searchString: searchString }
        }).valueChanges;
    }
    searchEpisodes(searchString) {
        return this.apollo.watchQuery({
            query: SEARH_EPISODES_QUERY,
            variables: { searchString: searchString }
        }).valueChanges;
    }
    searchPodcastsAndEpisodes(searchString) {
        return this.apollo.watchQuery({
            query: SEARCH_PODCASTS_AND_EPISODES,
            variables: { searchString: searchString }
        }).valueChanges;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RmqX":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "tq2C");
/* harmony import */ var src_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/libs */ "6HvO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _store_search_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/search.effects */ "UHRu");
/* harmony import */ var _store_search_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/search.state */ "dSjq");
/* harmony import */ var _store_search_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/search.reducers */ "vTQ3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    {
        path: '',
        component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
    }
];
class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            src_libs__WEBPACK_IMPORTED_MODULE_3__["Material"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_store_search_effects__WEBPACK_IMPORTED_MODULE_7__["SearchEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forFeature(_store_search_state__WEBPACK_IMPORTED_MODULE_8__["SEARCH_STATE_NAME"], _store_search_reducers__WEBPACK_IMPORTED_MODULE_9__["searchReducer"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        src_libs__WEBPACK_IMPORTED_MODULE_3__["Material"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreFeatureModule"]] }); })();


/***/ }),

/***/ "UHRu":
/*!************************************************!*\
  !*** ./src/app/search/store/search.effects.ts ***!
  \************************************************/
/*! exports provided: SearchEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEffects", function() { return SearchEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.actions */ "hH97");
/* harmony import */ var _search_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.selectors */ "rGS8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/search.service */ "2SfO");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");








class SearchEffects {
    constructor(actions$, searchService, store) {
        this.actions$ = actions$;
        this.searchService = searchService;
        this.store = store;
        this.search$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["searchStart"]), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["concatLatestFrom"])(action => this.store.select(_search_selectors__WEBPACK_IMPORTED_MODULE_3__["getSearch"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(([action, searchState]) => {
                let query$;
                if (searchState.searchEpisodes && searchState.searchPodcasts) {
                    query$ = this.searchService
                        .searchPodcastsAndEpisodes(searchState.searchTerm)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                        console.log(error.message);
                        return error;
                    }));
                }
                else if (searchState.searchEpisodes) {
                    query$ = this.searchService
                        .searchEpisodes(searchState.searchTerm)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                        console.log(error.message);
                        return error;
                    }));
                }
                else if (searchState.searchPodcasts) {
                    query$ = this.searchService
                        .searchPodcast(searchState.searchTerm)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                        console.log(error.message);
                        return error;
                    }));
                }
                return query$;
            }));
            const result$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
                return _search_actions__WEBPACK_IMPORTED_MODULE_2__["searchSuccess"]({
                    podcasts: (result === null || result === void 0 ? void 0 : result.findPodcasts) || [],
                    episodes: (result === null || result === void 0 ? void 0 : result.findEpisodes) || []
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_search_actions__WEBPACK_IMPORTED_MODULE_2__["searchFailure"]()];
            }));
            return result$;
        });
    }
}
SearchEffects.ɵfac = function SearchEffects_Factory(t) { return new (t || SearchEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
SearchEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SearchEffects, factory: SearchEffects.ɵfac });


/***/ }),

/***/ "dSjq":
/*!**********************************************!*\
  !*** ./src/app/search/store/search.state.ts ***!
  \**********************************************/
/*! exports provided: SEARCH_STATE_NAME, initiaialSearchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_STATE_NAME", function() { return SEARCH_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initiaialSearchState", function() { return initiaialSearchState; });
const SEARCH_STATE_NAME = 'search';
const initiaialSearchState = {
    loading: false,
    loaded: false,
    searchTerm: '',
    podcastResults: [],
    episodeResults: [],
    searchEpisodes: false,
    searchPodcasts: true,
    podcastSearchPage: 0,
    episodeSearchPage: 0
};


/***/ }),

/***/ "hH97":
/*!************************************************!*\
  !*** ./src/app/search/store/search.actions.ts ***!
  \************************************************/
/*! exports provided: SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE, SET_SEARCH_PODCASTS, SET_SEARCH_EPISODES, SET_PODCAST_SEARCH_PAGE, SET_EPISODE_SEARCH_PAGE, SET_SEARCH_TERM, searchStart, searchSuccess, searchFailure, setSearchPodcasts, setSearchEpisodes, setSearchTerm, setEpisodeSearchPage, setPodcastSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_START", function() { return SEARCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SUCCESS", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_FAILURE", function() { return SEARCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_PODCASTS", function() { return SET_SEARCH_PODCASTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_EPISODES", function() { return SET_SEARCH_EPISODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PODCAST_SEARCH_PAGE", function() { return SET_PODCAST_SEARCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EPISODE_SEARCH_PAGE", function() { return SET_EPISODE_SEARCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_TERM", function() { return SET_SEARCH_TERM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStart", function() { return searchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSuccess", function() { return searchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFailure", function() { return searchFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchPodcasts", function() { return setSearchPodcasts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchEpisodes", function() { return setSearchEpisodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchTerm", function() { return setSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEpisodeSearchPage", function() { return setEpisodeSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPodcastSearchPage", function() { return setPodcastSearchPage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const SEARCH_START = 'search start';
const SEARCH_SUCCESS = 'search success';
const SEARCH_FAILURE = 'search failure';
const SET_SEARCH_PODCASTS = 'search podcasts';
const SET_SEARCH_EPISODES = 'search episodes';
const SET_PODCAST_SEARCH_PAGE = 'set podcast search page';
const SET_EPISODE_SEARCH_PAGE = 'set episode search page';
const SET_SEARCH_TERM = 'set search term';
const searchStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEARCH_START);
const searchSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEARCH_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const searchFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEARCH_FAILURE);
const setSearchPodcasts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_SEARCH_PODCASTS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setSearchEpisodes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_SEARCH_EPISODES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setSearchTerm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_SEARCH_TERM, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setEpisodeSearchPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_EPISODE_SEARCH_PAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setPodcastSearchPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_PODCAST_SEARCH_PAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "rGS8":
/*!**************************************************!*\
  !*** ./src/app/search/store/search.selectors.ts ***!
  \**************************************************/
/*! exports provided: getSearch, getSearchTerm, getSearchLoading, getSearchLoaded, getPodcastResults, getEpisodeResults, getSearchEpisodes, getSearchPodcasts, getPodcastSearchPage, getEpisodeSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearch", function() { return getSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchTerm", function() { return getSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchLoading", function() { return getSearchLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchLoaded", function() { return getSearchLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodcastResults", function() { return getPodcastResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEpisodeResults", function() { return getEpisodeResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchEpisodes", function() { return getSearchEpisodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchPodcasts", function() { return getSearchPodcasts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodcastSearchPage", function() { return getPodcastSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEpisodeSearchPage", function() { return getEpisodeSearchPage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _search_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.state */ "dSjq");


const getSearchState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_search_state__WEBPACK_IMPORTED_MODULE_1__["SEARCH_STATE_NAME"]);
const getSearch = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearchState, (state) => {
    return state;
});
const getSearchTerm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state.searchTerm;
});
const getSearchLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state.loading;
});
const getSearchLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state.loaded;
});
const getPodcastResults = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state === null || state === void 0 ? void 0 : state.podcastResults;
});
const getEpisodeResults = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state === null || state === void 0 ? void 0 : state.episodeResults;
});
const getSearchEpisodes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state.searchEpisodes;
});
const getSearchPodcasts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state.searchPodcasts;
});
const getPodcastSearchPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state.podcastSearchPage;
});
const getEpisodeSearchPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSearch, (state) => {
    return state.episodeSearchPage;
});


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_search_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/search.actions */ "hH97");
/* harmony import */ var _store_search_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/search.selectors */ "rGS8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/search.service */ "2SfO");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");














const _c0 = function (a1) { return ["/podcast", a1]; };
function SearchComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pod_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, pod_r2.slug))("state", pod_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", pod_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](pod_r2.title);
} }
function SearchComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const episode_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", episode_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", episode_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", episode_r3.title, " ");
} }
class SearchComponent {
    constructor(fb, searchService, store) {
        this.fb = fb;
        this.searchService = searchService;
        this.store = store;
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('auto');
        this.options = this.fb.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl
        });
    }
    ngOnInit() {
        const inputElement = document.getElementById('search') || document;
        const input$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(inputElement, 'keyup');
        const search$ = input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((value) => {
            // console.log(value)
            this.store.dispatch(_store_search_actions__WEBPACK_IMPORTED_MODULE_3__["setSearchTerm"]({ searchTerm: value }));
            return this.store.select(_store_search_selectors__WEBPACK_IMPORTED_MODULE_4__["getSearchTerm"]);
        }));
        this.podcasts$ = this.store.select(_store_search_selectors__WEBPACK_IMPORTED_MODULE_4__["getPodcastResults"]);
        this.episodes$ = this.store.select(_store_search_selectors__WEBPACK_IMPORTED_MODULE_4__["getEpisodeResults"]);
        this.searchTerm$ = this.store.select(_store_search_selectors__WEBPACK_IMPORTED_MODULE_4__["getSearchTerm"]);
        this.checkEpisodes$ = this.store.select(_store_search_selectors__WEBPACK_IMPORTED_MODULE_4__["getSearchEpisodes"]);
        this.checkPodcasts$ = this.store.select(_store_search_selectors__WEBPACK_IMPORTED_MODULE_4__["getSearchPodcasts"]);
        search$.subscribe(results => {
            //@ts-ignore
            this.store.dispatch(_store_search_actions__WEBPACK_IMPORTED_MODULE_3__["searchStart"]());
        });
    }
    checkPodcasts(value) {
        this.store.dispatch(_store_search_actions__WEBPACK_IMPORTED_MODULE_3__["setSearchPodcasts"]({ search: value }));
    }
    checkEpisodes(value) {
        this.store.dispatch(_store_search_actions__WEBPACK_IMPORTED_MODULE_3__["setSearchEpisodes"]({ search: value }));
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 25, vars: 13, consts: [[1, "search__bar"], ["appearance", "fill", 3, "floatLabel"], ["id", "search", "matInput", "", "placeholder", "eg. Stuff of Life"], [1, "checked"], [3, "checked", "change"], [1, "results"], [1, "pods"], [1, "pod__list"], ["class", "podcast", 4, "ngFor", "ngForOf"], [1, "episodes"], [1, "eps__list"], ["class", "episode", 4, "ngFor", "ngForOf"], [1, "podcast"], ["routerLinkActive", "active", 3, "routerLink", "state"], ["alt", "", 3, "src"], [1, "episode"], [3, "src", "alt"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SearchComponent_Template_mat_checkbox_change_6_listener($event) { return ctx.checkPodcasts($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SearchComponent_Template_mat_checkbox_change_9_listener($event) { return ctx.checkEpisodes($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, SearchComponent_div_17_Template, 5, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, SearchComponent_div_23_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("floatLabel", ctx.floatLabelControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 5, ctx.checkPodcasts$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 7, ctx.checkEpisodes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 9, ctx.podcasts$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 11, ctx.episodes$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\ndiv.search__bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\ndiv.search__bar[_ngcontent-%COMP%]   section.checked[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.search__bar[_ngcontent-%COMP%]   section.checked[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  padding: 2.5%;\n  display: block;\n}\n\ndiv.results[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ndiv.results[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ndiv.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%] {\n  width: 57.5%;\n  display: inline-block;\n}\n\ndiv.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\ndiv.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 1%;\n}\n\ndiv.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ndiv.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%] {\n  width: 37.5%;\n  padding-left: 2.5%;\n  display: inline-block;\n}\n\ndiv.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%]   div.episode[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%]   div.episode[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFGSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBSU47O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBRkU7RUFDRSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBSUo7O0FBSEk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFLTjs7QUFKTTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBTVI7O0FBTFE7RUFDRSxXQUFBO0FBT1Y7O0FBREU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSU47O0FBSE07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFLUjs7QUFKUTtFQUNFLFlBQUE7QUFNViIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udC1mYW1pbHk6IGhpZ2hnYXRlLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbmRpdi5zZWFyY2hfX2JhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHNlY3Rpb24uY2hlY2tlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hdC1jaGVja2JveCB7XHJcbiAgICAgIHBhZGRpbmc6IDIuNSU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5kaXYucmVzdWx0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGRpdi5wb2RzIHtcclxuICAgIHdpZHRoOiA1Ny41JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGRpdi5wb2RfX2xpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBkaXYucG9kY2FzdCB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpdi5lcGlzb2RlcyB7XHJcbiAgICB3aWR0aDogMzcuNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXYuZXBzX19saXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZGl2LmVwaXNvZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vTQ3":
/*!*************************************************!*\
  !*** ./src/app/search/store/search.reducers.ts ***!
  \*************************************************/
/*! exports provided: searchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return searchReducer; });
/* harmony import */ var _search_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.state */ "dSjq");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.actions */ "hH97");



const _searchReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_search_state__WEBPACK_IMPORTED_MODULE_0__["initiaialSearchState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["searchStart"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["searchSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { loading: false, loaded: true, podcastResults: [
            ...(state.searchPodcasts ? action.podcasts : state.podcastResults)
        ], episodeResults: [
            ...(state.searchEpisodes ? action.episodes : state.episodeResults)
        ] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["searchFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { loading: false, loaded: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["setSearchTerm"], (state, action) => {
    return Object.assign(Object.assign({}, state), { searchTerm: action.searchTerm });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["setEpisodeSearchPage"], (state, action) => {
    return Object.assign(Object.assign({}, state), { episodeSearchPage: action.page });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["setPodcastSearchPage"], (state, action) => {
    return Object.assign(Object.assign({}, state), { podcastSearchPage: action.page });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["setSearchEpisodes"], (state, action) => {
    return Object.assign(Object.assign({}, state), { searchEpisodes: action.search });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_2__["setSearchPodcasts"], (state, action) => {
    return Object.assign(Object.assign({}, state), { searchPodcasts: action.search });
}));
const searchReducer = (state, action) => {
    return _searchReducer(state, action);
};


/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map