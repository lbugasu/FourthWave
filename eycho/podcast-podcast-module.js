(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["podcast-podcast-module"],{

/***/ "S+t2":
/*!**********************************************!*\
  !*** ./src/app/podcast/podcast.component.ts ***!
  \**********************************************/
/*! exports provided: PodcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastComponent", function() { return PodcastComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/player/store/player.actions */ "LwLl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_podcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/podcast.service */ "DskF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_player_audio_audio_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/player/audio/audio.player */ "lLkD");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _shared_pipes_date_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/pipes/date/date.pipe */ "6ONQ");
/* harmony import */ var _shared_pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/pipes/time/time.pipe */ "fehW");
















function PodcastComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PodcastComponent_div_22_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const episode_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.play(episode_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const episode_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_4_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstylePropInterpolate1"]("color", "#", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 10, ctx_r0.podcast$)) == null ? null : tmp_0_0.palette[4], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.amPlaying(episode_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](episode_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 12, episode_r1.datePublished), " | ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 14, episode_r1.duration), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstylePropInterpolate1"]("color", "#", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 16, ctx_r0.podcast$)) == null ? null : tmp_4_0.palette[4], "");
} }
const colors = __webpack_require__(/*! nice-color-palettes */ "aJAY");
class PodcastComponent {
    constructor(podcastService, location, store, player) {
        // This data is passed on the router
        // If the data isn't loaded, load from the server
        this.podcastService = podcastService;
        this.location = location;
        this.store = store;
        this.player = player;
        this.episodes = [];
        this.pageNo = 0;
        this.page = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.pageNo);
        // const state: any = this.location.getState()
        // if (!!history.state.navigationId) {
        // console.log(this.location.path())
        const slug = this.location.path().substr(9);
        this.slug = slug;
        this.getPodcastEpisodes(this.slug);
        const query$ = this.podcastService.getPodcast(slug).valueChanges;
        this.podcast$ = query$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'getPodcast'));
        // } else {
        //   this.podcast = history.state
        //   this.slug = this.podcast.slug
        //   this.getPodcastEpisodes(this.slug)
        // }
    }
    ngOnInit() { }
    getPodcastEpisodes(slug) {
        this.page
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((value) => {
            return this.podcastService.getEpisodes(slug, value).valueChanges;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('data', 'getPodcastEpisodes'))
            .subscribe((episodes) => {
            this.episodes = [...this.episodes, ...episodes];
        });
    }
    getColors() {
        return colors[66];
    }
    getNiceDate(date) {
        return new Date(date).toDateString();
    }
    getNiceDuration(duration) {
        if (duration.split(':').length == 1) {
            return new Date(+duration * 1000).toISOString().substr(11, 8);
        }
        return duration;
    }
    play(episode) {
        var _a;
        // check if the episode is already in the queue, otherwise, add to the top of the queue and play
        // this.store.dispatch(PlayerActions.addToQueueStart({ episode: episode }))
        if (!this.player.player) {
            this.store.dispatch(_shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_2__["addToBeginningOfQueueStart"]({ episode: episode }));
        }
        else if (((_a = this.player) === null || _a === void 0 ? void 0 : _a.currentlyPlaying.episode.slug) == episode.slug) {
            this.store.dispatch(_shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_2__["playPause"]());
        }
        else {
            this.store.dispatch(_shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_2__["addToBeginningOfQueueStart"]({ episode: episode }));
        }
    }
    amPlaying(episode) {
        var _a;
        const epIndx = (_a = this.episodeQueue) === null || _a === void 0 ? void 0 : _a.findIndex(ep => episode.sourceUrl == ep.sourceUrl);
        if (!this.player.currentlyPlaying) {
            return 'play_circle_filled';
        }
        // epIndx == 0 ? console.log(episode) : ''
        return this.player.currentlyPlaying.episode.slug == episode.slug &&
            this.player.player.playing()
            ? 'pause_circle_filled'
            : 'play_circle_filled';
    }
    loadMoreEpisodes() {
        this.pageNo += 1;
        this.page.next(this.pageNo);
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        // this.subscriptions.unsubscribe()
    }
}
PodcastComponent.ɵfac = function PodcastComponent_Factory(t) { return new (t || PodcastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_podcast_service__WEBPACK_IMPORTED_MODULE_4__["PodcastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_player_audio_audio_player__WEBPACK_IMPORTED_MODULE_7__["AudioPlayer"])); };
PodcastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PodcastComponent, selectors: [["app-podcast"]], decls: 23, vars: 39, consts: [["infiniteScroll", "", 1, "page", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollUpDistance", "scrollWindow", "scrolled"], [1, "header"], [1, "podcast__image"], ["id", "podcast__image", "alt", "", 3, "src"], [1, "podcast__data"], [1, "container"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"], [1, "content"], ["class", "single__episode", 4, "ngFor", "ngForOf"], [1, "single__episode"], [1, "play"], [3, "click"], [1, "episode__details"]], template: function PodcastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scrolled", function PodcastComponent_Template_div_scrolled_0_listener() { return ctx.loadMoreEpisodes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "play_circle_filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, PodcastComponent_div_22_Template, 15, 18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        let tmp_10_0 = null;
        let tmp_11_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("infiniteScrollUpDistance", 1.5)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstylePropInterpolate1"]("background-color", "#", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 23, ctx.podcast$)) == null ? null : tmp_4_0.palette[0], "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstylePropInterpolate1"]("background-color", "#", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 25, ctx.podcast$)) == null ? null : tmp_5_0.palette[4], "66");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 27, ctx.podcast$)) == null ? null : tmp_6_0.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstylePropInterpolate1"]("color", "#", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 29, ctx.podcast$)) == null ? null : tmp_7_0.palette[4], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 31, ctx.podcast$)) == null ? null : tmp_8_0.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstylePropInterpolate1"]("color", "#", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 33, ctx.podcast$)) == null ? null : tmp_9_0.palette[2], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 35, ctx.podcast$)) == null ? null : tmp_10_0.publisher, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstylePropInterpolate1"]("color", "#", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 37, ctx.podcast$)) == null ? null : tmp_11_0.palette[3], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.episodes);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _shared_pipes_date_date_pipe__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _shared_pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_14__["TimePipe"]], styles: ["div.page[_ngcontent-%COMP%] {\n  overflow: scroll;\n  height: 100%;\n  overflow-x: hidden;\n}\n\ndiv.header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2.5%;\n}\n\ndiv.header[_ngcontent-%COMP%]   mat-card.podcast__image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 15%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.header[_ngcontent-%COMP%]   mat-card.podcast__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ndiv.header[_ngcontent-%COMP%]   div.podcast__data[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-left: 2.5%;\n}\n\ndiv.header[_ngcontent-%COMP%]   div.podcast__data[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\ndiv.header[_ngcontent-%COMP%]   div.podcast__data[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 24pt 24pt 24pt 0;\n}\n\ndiv.header[_ngcontent-%COMP%]   div.podcast__data[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36pt;\n}\n\ndiv.header[_ngcontent-%COMP%]   div.podcast__data[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  float: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n\ndiv.content[_ngcontent-%COMP%] {\n  padding-top: 1.5%;\n}\n\ndiv.content[_ngcontent-%COMP%]   div.single__episode[_ngcontent-%COMP%] {\n  padding: 1% 2.5% 1% 2.5%;\n}\n\ndiv.content[_ngcontent-%COMP%]   div.single__episode[_ngcontent-%COMP%]   div.play[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 5%;\n  height: 100%;\n}\n\ndiv.content[_ngcontent-%COMP%]   div.single__episode[_ngcontent-%COMP%]   div.episode__details[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 95%;\n}\n\ndiv.content[_ngcontent-%COMP%]   div.single__episode[_ngcontent-%COMP%]   div.episode__details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  line-height: 0.5em;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BvZGNhc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUVBLGFBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNFLFdBQUE7QUFFTjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUFJO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBTUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUhOOztBQUZNO0VBQ0Usd0JBQUE7QUFJUjs7QUFDTTtFQUNFLGVBQUE7QUFDUjs7QUFFTTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFBUjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBSUU7RUFtQkUsd0JBQUE7QUFwQko7O0FBRUk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUVJO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBQU47O0FBQ007RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1IiLCJmaWxlIjoicG9kY2FzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5wYWdlIHtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuZGl2LmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBoZWlnaHQ6IDUwJTtcclxuICBwYWRkaW5nOiAyLjUlO1xyXG5cclxuICBtYXQtY2FyZC5wb2RjYXN0X19pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXYucG9kY2FzdF9fZGF0YSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICBkaXYuY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgIC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gICAgICAgIG1hcmdpbjogMjRwdCAyNHB0IDI0cHQgMDtcclxuICAgICAgfVxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZwdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWNoaXAtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbG9hdDogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5kaXYuY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDEuNSU7XHJcblxyXG4gIGRpdi5zaW5nbGVfX2VwaXNvZGUge1xyXG4gICAgZGl2LnBsYXkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA1JTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgZGl2LmVwaXNvZGVfX2RldGFpbHMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBhZGRpbmc6IDElIDIuNSUgMSUgMi41JTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZeBp":
/*!*******************************************!*\
  !*** ./src/app/podcast/podcast.module.ts ***!
  \*******************************************/
/*! exports provided: PodcastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastModule", function() { return PodcastModule; });
/* harmony import */ var _podcast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./podcast.component */ "S+t2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var src_libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/libs */ "6HvO");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '',
        component: _podcast_component__WEBPACK_IMPORTED_MODULE_0__["PodcastComponent"]
    }
];
class PodcastModule {
}
PodcastModule.ɵfac = function PodcastModule_Factory(t) { return new (t || PodcastModule)(); };
PodcastModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PodcastModule });
PodcastModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_libs__WEBPACK_IMPORTED_MODULE_3__["Material"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__["InfiniteScrollModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PodcastModule, { declarations: [_podcast_component__WEBPACK_IMPORTED_MODULE_0__["PodcastComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_libs__WEBPACK_IMPORTED_MODULE_3__["Material"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__["InfiniteScrollModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();


/***/ }),

/***/ "aJAY":
/*!***************************************************!*\
  !*** ./node_modules/nice-color-palettes/100.json ***!
  \***************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

module.exports = JSON.parse("[[\"#69d2e7\",\"#a7dbd8\",\"#e0e4cc\",\"#f38630\",\"#fa6900\"],[\"#fe4365\",\"#fc9d9a\",\"#f9cdad\",\"#c8c8a9\",\"#83af9b\"],[\"#ecd078\",\"#d95b43\",\"#c02942\",\"#542437\",\"#53777a\"],[\"#556270\",\"#4ecdc4\",\"#c7f464\",\"#ff6b6b\",\"#c44d58\"],[\"#774f38\",\"#e08e79\",\"#f1d4af\",\"#ece5ce\",\"#c5e0dc\"],[\"#e8ddcb\",\"#cdb380\",\"#036564\",\"#033649\",\"#031634\"],[\"#490a3d\",\"#bd1550\",\"#e97f02\",\"#f8ca00\",\"#8a9b0f\"],[\"#594f4f\",\"#547980\",\"#45ada8\",\"#9de0ad\",\"#e5fcc2\"],[\"#00a0b0\",\"#6a4a3c\",\"#cc333f\",\"#eb6841\",\"#edc951\"],[\"#e94e77\",\"#d68189\",\"#c6a49a\",\"#c6e5d9\",\"#f4ead5\"],[\"#3fb8af\",\"#7fc7af\",\"#dad8a7\",\"#ff9e9d\",\"#ff3d7f\"],[\"#d9ceb2\",\"#948c75\",\"#d5ded9\",\"#7a6a53\",\"#99b2b7\"],[\"#ffffff\",\"#cbe86b\",\"#f2e9e1\",\"#1c140d\",\"#cbe86b\"],[\"#efffcd\",\"#dce9be\",\"#555152\",\"#2e2633\",\"#99173c\"],[\"#343838\",\"#005f6b\",\"#008c9e\",\"#00b4cc\",\"#00dffc\"],[\"#413e4a\",\"#73626e\",\"#b38184\",\"#f0b49e\",\"#f7e4be\"],[\"#ff4e50\",\"#fc913a\",\"#f9d423\",\"#ede574\",\"#e1f5c4\"],[\"#99b898\",\"#fecea8\",\"#ff847c\",\"#e84a5f\",\"#2a363b\"],[\"#655643\",\"#80bca3\",\"#f6f7bd\",\"#e6ac27\",\"#bf4d28\"],[\"#00a8c6\",\"#40c0cb\",\"#f9f2e7\",\"#aee239\",\"#8fbe00\"],[\"#351330\",\"#424254\",\"#64908a\",\"#e8caa4\",\"#cc2a41\"],[\"#554236\",\"#f77825\",\"#d3ce3d\",\"#f1efa5\",\"#60b99a\"],[\"#5d4157\",\"#838689\",\"#a8caba\",\"#cad7b2\",\"#ebe3aa\"],[\"#8c2318\",\"#5e8c6a\",\"#88a65e\",\"#bfb35a\",\"#f2c45a\"],[\"#fad089\",\"#ff9c5b\",\"#f5634a\",\"#ed303c\",\"#3b8183\"],[\"#ff4242\",\"#f4fad2\",\"#d4ee5e\",\"#e1edb9\",\"#f0f2eb\"],[\"#f8b195\",\"#f67280\",\"#c06c84\",\"#6c5b7b\",\"#355c7d\"],[\"#d1e751\",\"#ffffff\",\"#000000\",\"#4dbce9\",\"#26ade4\"],[\"#1b676b\",\"#519548\",\"#88c425\",\"#bef202\",\"#eafde6\"],[\"#5e412f\",\"#fcebb6\",\"#78c0a8\",\"#f07818\",\"#f0a830\"],[\"#bcbdac\",\"#cfbe27\",\"#f27435\",\"#f02475\",\"#3b2d38\"],[\"#452632\",\"#91204d\",\"#e4844a\",\"#e8bf56\",\"#e2f7ce\"],[\"#eee6ab\",\"#c5bc8e\",\"#696758\",\"#45484b\",\"#36393b\"],[\"#f0d8a8\",\"#3d1c00\",\"#86b8b1\",\"#f2d694\",\"#fa2a00\"],[\"#2a044a\",\"#0b2e59\",\"#0d6759\",\"#7ab317\",\"#a0c55f\"],[\"#f04155\",\"#ff823a\",\"#f2f26f\",\"#fff7bd\",\"#95cfb7\"],[\"#b9d7d9\",\"#668284\",\"#2a2829\",\"#493736\",\"#7b3b3b\"],[\"#bbbb88\",\"#ccc68d\",\"#eedd99\",\"#eec290\",\"#eeaa88\"],[\"#b3cc57\",\"#ecf081\",\"#ffbe40\",\"#ef746f\",\"#ab3e5b\"],[\"#a3a948\",\"#edb92e\",\"#f85931\",\"#ce1836\",\"#009989\"],[\"#300030\",\"#480048\",\"#601848\",\"#c04848\",\"#f07241\"],[\"#67917a\",\"#170409\",\"#b8af03\",\"#ccbf82\",\"#e33258\"],[\"#aab3ab\",\"#c4cbb7\",\"#ebefc9\",\"#eee0b7\",\"#e8caaf\"],[\"#e8d5b7\",\"#0e2430\",\"#fc3a51\",\"#f5b349\",\"#e8d5b9\"],[\"#ab526b\",\"#bca297\",\"#c5ceae\",\"#f0e2a4\",\"#f4ebc3\"],[\"#607848\",\"#789048\",\"#c0d860\",\"#f0f0d8\",\"#604848\"],[\"#b6d8c0\",\"#c8d9bf\",\"#dadabd\",\"#ecdbbc\",\"#fedcba\"],[\"#a8e6ce\",\"#dcedc2\",\"#ffd3b5\",\"#ffaaa6\",\"#ff8c94\"],[\"#3e4147\",\"#fffedf\",\"#dfba69\",\"#5a2e2e\",\"#2a2c31\"],[\"#fc354c\",\"#29221f\",\"#13747d\",\"#0abfbc\",\"#fcf7c5\"],[\"#cc0c39\",\"#e6781e\",\"#c8cf02\",\"#f8fcc1\",\"#1693a7\"],[\"#1c2130\",\"#028f76\",\"#b3e099\",\"#ffeaad\",\"#d14334\"],[\"#a7c5bd\",\"#e5ddcb\",\"#eb7b59\",\"#cf4647\",\"#524656\"],[\"#dad6ca\",\"#1bb0ce\",\"#4f8699\",\"#6a5e72\",\"#563444\"],[\"#5c323e\",\"#a82743\",\"#e15e32\",\"#c0d23e\",\"#e5f04c\"],[\"#edebe6\",\"#d6e1c7\",\"#94c7b6\",\"#403b33\",\"#d3643b\"],[\"#fdf1cc\",\"#c6d6b8\",\"#987f69\",\"#e3ad40\",\"#fcd036\"],[\"#230f2b\",\"#f21d41\",\"#ebebbc\",\"#bce3c5\",\"#82b3ae\"],[\"#b9d3b0\",\"#81bda4\",\"#b28774\",\"#f88f79\",\"#f6aa93\"],[\"#3a111c\",\"#574951\",\"#83988e\",\"#bcdea5\",\"#e6f9bc\"],[\"#5e3929\",\"#cd8c52\",\"#b7d1a3\",\"#dee8be\",\"#fcf7d3\"],[\"#1c0113\",\"#6b0103\",\"#a30006\",\"#c21a01\",\"#f03c02\"],[\"#000000\",\"#9f111b\",\"#b11623\",\"#292c37\",\"#cccccc\"],[\"#382f32\",\"#ffeaf2\",\"#fcd9e5\",\"#fbc5d8\",\"#f1396d\"],[\"#e3dfba\",\"#c8d6bf\",\"#93ccc6\",\"#6cbdb5\",\"#1a1f1e\"],[\"#f6f6f6\",\"#e8e8e8\",\"#333333\",\"#990100\",\"#b90504\"],[\"#1b325f\",\"#9cc4e4\",\"#e9f2f9\",\"#3a89c9\",\"#f26c4f\"],[\"#a1dbb2\",\"#fee5ad\",\"#faca66\",\"#f7a541\",\"#f45d4c\"],[\"#c1b398\",\"#605951\",\"#fbeec2\",\"#61a6ab\",\"#accec0\"],[\"#5e9fa3\",\"#dcd1b4\",\"#fab87f\",\"#f87e7b\",\"#b05574\"],[\"#951f2b\",\"#f5f4d7\",\"#e0dfb1\",\"#a5a36c\",\"#535233\"],[\"#8dccad\",\"#988864\",\"#fea6a2\",\"#f9d6ac\",\"#ffe9af\"],[\"#2d2d29\",\"#215a6d\",\"#3ca2a2\",\"#92c7a3\",\"#dfece6\"],[\"#413d3d\",\"#040004\",\"#c8ff00\",\"#fa023c\",\"#4b000f\"],[\"#eff3cd\",\"#b2d5ba\",\"#61ada0\",\"#248f8d\",\"#605063\"],[\"#ffefd3\",\"#fffee4\",\"#d0ecea\",\"#9fd6d2\",\"#8b7a5e\"],[\"#cfffdd\",\"#b4dec1\",\"#5c5863\",\"#a85163\",\"#ff1f4c\"],[\"#9dc9ac\",\"#fffec7\",\"#f56218\",\"#ff9d2e\",\"#919167\"],[\"#4e395d\",\"#827085\",\"#8ebe94\",\"#ccfc8e\",\"#dc5b3e\"],[\"#a8a7a7\",\"#cc527a\",\"#e8175d\",\"#474747\",\"#363636\"],[\"#f8edd1\",\"#d88a8a\",\"#474843\",\"#9d9d93\",\"#c5cfc6\"],[\"#046d8b\",\"#309292\",\"#2fb8ac\",\"#93a42a\",\"#ecbe13\"],[\"#f38a8a\",\"#55443d\",\"#a0cab5\",\"#cde9ca\",\"#f1edd0\"],[\"#a70267\",\"#f10c49\",\"#fb6b41\",\"#f6d86b\",\"#339194\"],[\"#ff003c\",\"#ff8a00\",\"#fabe28\",\"#88c100\",\"#00c176\"],[\"#ffedbf\",\"#f7803c\",\"#f54828\",\"#2e0d23\",\"#f8e4c1\"],[\"#4e4d4a\",\"#353432\",\"#94ba65\",\"#2790b0\",\"#2b4e72\"],[\"#0ca5b0\",\"#4e3f30\",\"#fefeeb\",\"#f8f4e4\",\"#a5b3aa\"],[\"#4d3b3b\",\"#de6262\",\"#ffb88c\",\"#ffd0b3\",\"#f5e0d3\"],[\"#fffbb7\",\"#a6f6af\",\"#66b6ab\",\"#5b7c8d\",\"#4f2958\"],[\"#edf6ee\",\"#d1c089\",\"#b3204d\",\"#412e28\",\"#151101\"],[\"#9d7e79\",\"#ccac95\",\"#9a947c\",\"#748b83\",\"#5b756c\"],[\"#fcfef5\",\"#e9ffe1\",\"#cdcfb7\",\"#d6e6c3\",\"#fafbe3\"],[\"#9cddc8\",\"#bfd8ad\",\"#ddd9ab\",\"#f7af63\",\"#633d2e\"],[\"#30261c\",\"#403831\",\"#36544f\",\"#1f5f61\",\"#0b8185\"],[\"#aaff00\",\"#ffaa00\",\"#ff00aa\",\"#aa00ff\",\"#00aaff\"],[\"#d1313d\",\"#e5625c\",\"#f9bf76\",\"#8eb2c5\",\"#615375\"],[\"#ffe181\",\"#eee9e5\",\"#fad3b2\",\"#ffba7f\",\"#ff9c97\"],[\"#73c8a9\",\"#dee1b6\",\"#e1b866\",\"#bd5532\",\"#373b44\"],[\"#805841\",\"#dcf7f3\",\"#fffcdd\",\"#ffd8d8\",\"#f5a2a2\"]]");

/***/ })

}]);
//# sourceMappingURL=podcast-podcast-module.js.map