(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RmqX:function(e,t,c){"use strict";c.r(t),c.d(t,"SearchModule",function(){return me});var s=c("l7P3"),n=c("9jGm"),o=c("3Pt+"),i=c("xgIS"),a=c("wO+i"),r=c("Kj3r"),d=c("/uUt"),l=c("eIep");const h=Object(s.n)("search start"),g=Object(s.n)("search success",Object(s.s)()),b=Object(s.n)("search failure"),p=Object(s.n)("search podcasts",Object(s.s)()),m=Object(s.n)("search episodes",Object(s.s)()),u=Object(s.n)("set search term",Object(s.s)()),O=Object(s.n)("set episode search page",Object(s.s)()),f=Object(s.n)("set podcast search page",Object(s.s)()),v=Object(s.n)("load search recommendations start"),j=Object(s.n)("load search recommendations success",Object(s.s)()),_=Object(s.n)("load search recommendations failure"),P="search",C=Object(s.o)(P),y=Object(s.q)(C,e=>e),M=Object(s.q)(y,e=>e.searchTerm),S=(Object(s.q)(y,e=>e.loading),Object(s.q)(y,e=>e.loaded),Object(s.q)(y,e=>null==e?void 0:e.podcastResults)),T=Object(s.q)(y,e=>null==e?void 0:e.episodeResults),k=Object(s.q)(y,e=>e.searchEpisodes),x=Object(s.q)(y,e=>e.searchPodcasts),w=(Object(s.q)(y,e=>e.podcastSearchPage),Object(s.q)(y,e=>e.episodeSearchPage),Object(s.q)(y,e=>e.topicRecommendations)),E=Object(s.q)(y,e=>e.categoryRecommendations);var U=c("fXoL"),$=c("kmnG"),q=c("qFsG"),R=c("/1cH"),F=c("ofXK"),D=c("bSwM"),L=c("FKr1"),I=c("A5z7"),A=c("tyNb");function G(e,t){if(1&e&&(U.Ub(0,"mat-option",11),U.Ec(1),U.Tb()),2&e){const e=t.$implicit;U.lc("value",e.title),U.Db(1),U.Gc(" ",e.title," ")}}const N=function(e){return{"background-color":e}};function K(e,t){if(1&e&&(U.Ub(0,"mat-chip",17),U.Ec(1),U.Tb()),2&e){const e=t.$implicit,c=t.index,s=U.fc(2);U.lc("ngStyle",U.oc(2,N,"#"+s.getCategoryColors()[c]+"76")),U.Db(1),U.Fc(e.title)}}function Q(e,t){if(1&e&&(U.Ub(0,"mat-chip",17),U.Ec(1),U.Tb()),2&e){const e=t.$implicit,c=t.index,s=U.fc(2);U.lc("ngStyle",U.oc(2,N,"#"+s.getTopicColors()[c]+"66")),U.Db(1),U.Fc(e.name)}}function X(e,t){if(1&e&&(U.Ub(0,"div",12),U.Ub(1,"div",13),U.Ub(2,"h4"),U.Ec(3,"Categories"),U.Tb(),U.Ub(4,"mat-chip-list",14),U.Cc(5,K,2,4,"mat-chip",15),U.gc(6,"async"),U.Tb(),U.Tb(),U.Ub(7,"div",16),U.Ub(8,"h4"),U.Ec(9,"Topics:"),U.Tb(),U.Ub(10,"mat-chip-list",14),U.Cc(11,Q,2,4,"mat-chip",15),U.gc(12,"async"),U.Tb(),U.Tb(),U.Tb()),2&e){const e=U.fc();U.Db(5),U.lc("ngForOf",U.hc(6,2,e.categories$)),U.Db(6),U.lc("ngForOf",U.hc(12,4,e.topics$))}}const J=function(e){return["/podcast",e]},Y=function(e){return{podcast:e}};function B(e,t){if(1&e&&(U.Ub(0,"div",25),U.Ub(1,"a",26),U.Pb(2,"img",27),U.Ub(3,"h2"),U.Ec(4),U.Tb(),U.Tb(),U.Tb()),2&e){const e=t.$implicit;U.Db(1),U.lc("routerLink",U.oc(4,J,e.slug))("state",U.oc(6,Y,e)),U.Db(1),U.mc("src",e.image,U.vc),U.Db(2),U.Fc(e.title)}}function z(e,t){if(1&e&&(U.Ub(0,"div",28),U.Pb(1,"img",29),U.Ub(2,"h3"),U.Ec(3),U.Tb(),U.Tb()),2&e){const e=t.$implicit;U.Db(1),U.mc("src",e.image,U.vc),U.mc("alt",e.title),U.Db(2),U.Gc(" ",e.title," ")}}function H(e,t){if(1&e&&(U.Ub(0,"div",18),U.Ub(1,"div",19),U.Ub(2,"h2"),U.Ec(3,"Podcasts"),U.Tb(),U.Ub(4,"div",20),U.Cc(5,B,5,8,"div",21),U.gc(6,"async"),U.Tb(),U.Tb(),U.Ub(7,"div",22),U.Ub(8,"h2"),U.Ec(9,"Episodes"),U.Tb(),U.Ub(10,"div",23),U.Cc(11,z,4,3,"div",24),U.gc(12,"async"),U.Tb(),U.Tb(),U.Tb()),2&e){const e=U.fc();U.Db(5),U.lc("ngForOf",U.hc(6,2,e.podcasts$)),U.Db(6),U.lc("ngForOf",U.hc(12,4,e.episodes$))}}const Z=c("NXEx");let V=(()=>{class e{constructor(e,t){this.fb=e,this.store=t,this.hideRequiredControl=new o.e(!1),this.floatLabelControl=new o.e("auto"),this.options=this.fb.group({hideRequired:this.hideRequiredControl,floatLabel:this.floatLabelControl})}ngOnInit(){const e=document.getElementById("search")||document,t=Object(i.a)(e,"keyup").pipe(Object(a.a)("target","value"),Object(r.a)(200),Object(d.a)(),Object(l.a)(e=>(this.store.dispatch(u({searchTerm:e})),this.store.select(M))));this.podcasts$=this.store.select(S),this.episodes$=this.store.select(T),this.searchTerm$=this.store.select(M),this.checkEpisodes$=this.store.select(k),this.checkPodcasts$=this.store.select(x),this.topics$=this.store.select(w),this.categories$=this.store.select(E),t.subscribe(e=>{this.store.dispatch(h())}),this.store.dispatch(v())}checkPodcasts(e){this.store.dispatch(p({search:e}))}checkEpisodes(e){this.store.dispatch(m({search:e}))}getTopicColors(){var e=new Z;return e.from_hue(20).scheme("triade").variation("default"),e.colors()}getCategoryColors(){var e=new Z;return e.from_hue(50).scheme("tetrade").variation("pastel"),e.colors()}}return e.\u0275fac=function(t){return new(t||e)(U.Ob(o.d),U.Ob(s.h))},e.\u0275cmp=U.Ib({type:e,selectors:[["app-search"]],decls:21,vars:17,consts:[[1,"page"],[1,"search__bar"],["appearance","fill",3,"floatLabel"],["id","search","matInput","","placeholder","eg. Stuff of Life","value","","type","text","aria-label","Search","matInput","",3,"matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"checked"],[3,"checked","change"],["class","search__recommendations",4,"ngIf"],["class","results",4,"ngIf"],[3,"value"],[1,"search__recommendations"],[1,"categories"],["aria-label","list of topics"],[3,"ngStyle",4,"ngFor","ngForOf"],[1,"topics"],[3,"ngStyle"],[1,"results"],[1,"pods"],[1,"pod__list"],["class","podcast",4,"ngFor","ngForOf"],[1,"episodes"],[1,"eps__list"],["class","episode",4,"ngFor","ngForOf"],[1,"podcast"],["routerLinkActive","active",3,"routerLink","state"],["alt","",3,"src"],[1,"episode"],[3,"src","alt"]],template:function(e,t){if(1&e&&(U.Ub(0,"div",0),U.Ub(1,"div",1),U.Ub(2,"mat-form-field",2),U.Ub(3,"mat-label"),U.Ec(4,"Search"),U.Tb(),U.Pb(5,"input",3),U.Ub(6,"mat-autocomplete",4,5),U.Cc(8,G,2,2,"mat-option",6),U.gc(9,"async"),U.Tb(),U.Tb(),U.Ub(10,"section",7),U.Ub(11,"mat-checkbox",8),U.bc("change",function(e){return t.checkPodcasts(e.checked)}),U.gc(12,"async"),U.Ec(13,"Podcasts"),U.Tb(),U.Ub(14,"mat-checkbox",8),U.bc("change",function(e){return t.checkEpisodes(e.checked)}),U.gc(15,"async"),U.Ec(16,"Episodes"),U.Tb(),U.Tb(),U.Tb(),U.Cc(17,X,13,6,"div",9),U.gc(18,"async"),U.Cc(19,H,13,6,"div",10),U.gc(20,"async"),U.Tb()),2&e){const e=U.rc(7);U.Db(2),U.lc("floatLabel",t.floatLabelControl.value),U.Db(3),U.lc("matAutocomplete",e),U.Db(3),U.lc("ngForOf",U.hc(9,7,t.podcasts$)),U.Db(3),U.lc("checked",U.hc(12,9,t.checkPodcasts$)),U.Db(3),U.lc("checked",U.hc(15,11,t.checkEpisodes$)),U.Db(3),U.lc("ngIf",U.hc(18,13,t.searchTerm$).length<3),U.Db(2),U.lc("ngIf",U.hc(20,15,t.searchTerm$).length>2)}},directives:[$.b,$.e,q.b,R.c,R.a,F.j,D.a,F.k,L.m,I.b,I.a,F.l,A.d,A.c],pipes:[F.b],styles:["div.page[_ngcontent-%COMP%]{height:100%;overflow-y:scroll}h2[_ngcontent-%COMP%]{font-family:highgate,sans-serif;font-weight:400;font-style:normal}div.search__bar[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;align-items:center;flex-direction:column;top:0;position:sticky;background-color:var(--background-light);z-index:1;box-shadow:0 3px 3px -3px var(--background-primary)}div.search__bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:35%}div.search__bar[_ngcontent-%COMP%]   section.checked[_ngcontent-%COMP%]{display:flex;flex-direction:row}div.search__bar[_ngcontent-%COMP%]   section.checked[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{padding:2.5%;display:block}div.search__recommendations[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;text-align:center}div.search__recommendations[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]{height:15%}div.search__recommendations[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-items:center;text-align:center}div.search__recommendations[_ngcontent-%COMP%]   div.topics[_ngcontent-%COMP%]{height:10%;text-align:center}div.search__recommendations[_ngcontent-%COMP%]   div.topics[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-items:center;text-align:center}div.results[_ngcontent-%COMP%]{display:flex}div.results[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}div.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]{width:57.5%;display:inline-block}div.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}div.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]{width:20%;margin:1%}div.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}div.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]{width:37.5%;padding-left:2.5%;display:inline-block}div.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%]{display:flex;flex-direction:column}div.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%]   div.episode[_ngcontent-%COMP%]{display:flex;flex-direction:row}div.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%]   div.episode[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}"]}),e})();var W=c("6HvO"),ee=c("5+tZ"),te=c("JIr8"),ce=c("lJxs"),se=c("XqQ8"),ne=c("ALmS");const oe=ne.gql`
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
`,ie=ne.gql`
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
      podcast
    }
  }
`,ae=ne.gql`
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
      topics {
        name
        type
      }
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
`,re=ne.gql`
  query GetSearchRecommendations {
    getTopicSearchRecommendations {
      type
      name
    }
    getCategorySearchRecommendations {
      title
    }
  }
`;var de=c("/IUn");let le=(()=>{class e{constructor(e){this.apollo=e}searchPodcast(e){return this.apollo.watchQuery({query:oe,variables:{searchString:e}}).valueChanges}searchEpisodes(e){return this.apollo.watchQuery({query:ie,variables:{searchString:e}}).valueChanges}searchPodcastsAndEpisodes(e){return this.apollo.watchQuery({query:ae,variables:{searchString:e}}).valueChanges}getSearchRecommendations(){return this.apollo.watchQuery({query:re}).valueChanges}}return e.\u0275fac=function(t){return new(t||e)(U.Yb(de.b))},e.\u0275prov=U.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),he=(()=>{class e{constructor(e,t,c){this.actions$=e,this.searchService=t,this.store=c,this.search$=Object(n.d)(()=>this.actions$.pipe(Object(n.e)(h),Object(n.c)(e=>this.store.select(y)),Object(ee.a)(([e,t])=>{let c;return t.searchEpisodes&&t.searchPodcasts?c=this.searchService.searchPodcastsAndEpisodes(t.searchTerm).pipe(Object(te.a)(e=>(console.log(e.message),e))):t.searchEpisodes?c=this.searchService.searchEpisodes(t.searchTerm).pipe(Object(te.a)(e=>(console.log(e.message),e))):t.searchPodcasts&&(c=this.searchService.searchPodcast(t.searchTerm).pipe(Object(te.a)(e=>(console.log(e.message),e)))),c})).pipe(Object(a.a)("data"),Object(ce.a)(e=>(console.log(e),g({podcasts:(null==e?void 0:e.findPodcasts)||[],episodes:(null==e?void 0:e.findEpisodes)||[]}))),Object(te.a)(e=>(console.log(e.message),[b()])))),this.loadSearchRecommendations$=Object(n.d)(()=>this.actions$.pipe(Object(n.e)(v),Object(se.a)(e=>this.searchService.getSearchRecommendations())).pipe(Object(a.a)("data"),Object(ce.a)(e=>(console.log(e),j({categories:e.getCategorySearchRecommendations,topics:e.getTopicSearchRecommendations}))),Object(te.a)(e=>(console.log(e.message),[_()]))))}}return e.\u0275fac=function(t){return new(t||e)(U.Yb(n.a),U.Yb(le),U.Yb(s.h))},e.\u0275prov=U.Kb({token:e,factory:e.\u0275fac}),e})();const ge=Object(s.p)({loading:!1,loaded:!1,searchTerm:"",podcastResults:[],episodeResults:[],searchEpisodes:!1,searchPodcasts:!0,podcastSearchPage:0,episodeSearchPage:0,recommendationsLoading:!1,recommendationsLoaded:!1,topicRecommendations:[],categoryRecommendations:[]},Object(s.r)(h,e=>Object.assign(Object.assign({},e),{loading:!0})),Object(s.r)(g,(e,t)=>Object.assign(Object.assign({},e),{loading:!1,loaded:!0,podcastResults:[...e.searchPodcasts?t.podcasts:e.podcastResults],episodeResults:[...e.searchEpisodes?t.episodes:e.episodeResults]})),Object(s.r)(b,(e,t)=>Object.assign(Object.assign({},e),{loading:!1,loaded:!1})),Object(s.r)(u,(e,t)=>Object.assign(Object.assign({},e),{searchTerm:t.searchTerm})),Object(s.r)(O,(e,t)=>Object.assign(Object.assign({},e),{episodeSearchPage:t.page})),Object(s.r)(f,(e,t)=>Object.assign(Object.assign({},e),{podcastSearchPage:t.page})),Object(s.r)(m,(e,t)=>Object.assign(Object.assign({},e),{searchEpisodes:t.search})),Object(s.r)(p,(e,t)=>Object.assign(Object.assign({},e),{searchPodcasts:t.search})),Object(s.r)(v,e=>Object.assign(Object.assign({},e),{recommendationsLoading:!0})),Object(s.r)(j,(e,t)=>Object.assign(Object.assign({},e),{recommendationsLoading:!1,recommendationsLoaded:!0,topicRecommendations:[...t.topics],categoryRecommendations:[...t.categories]})),Object(s.r)(_,e=>Object.assign(Object.assign({},e),{recommendationsLoaded:!1,recommendationsLoading:!1}))),be=(e,t)=>ge(e,t),pe=[{path:"",component:V}];let me=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=U.Mb({type:e}),e.\u0275inj=U.Lb({imports:[[F.c,W.a,o.q,A.e.forChild(pe),n.b.forFeature([he]),s.j.forFeature(P,be)]]}),e})()}}]);