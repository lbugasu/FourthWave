(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RmqX:function(e,t,c){"use strict";c.r(t),c.d(t,"SearchModule",function(){return z});var s=c("l7P3"),n=c("9jGm"),i=c("3Pt+"),o=c("xgIS"),a=c("wO+i"),r=c("Kj3r"),d=c("/uUt"),l=c("eIep"),h=c("hH97"),g=c("rGS8"),p=c("fXoL"),b=c("kmnG"),m=c("qFsG"),u=c("/1cH"),O=c("ofXK"),f=c("bSwM"),v=c("FKr1"),_=c("A5z7"),P=c("tyNb");function C(e,t){if(1&e&&(p.Ub(0,"mat-option",11),p.Ec(1),p.Tb()),2&e){const e=t.$implicit;p.lc("value",e.title),p.Db(1),p.Gc(" ",e.title," ")}}const S=function(e){return{"background-color":e}};function j(e,t){if(1&e&&(p.Ub(0,"mat-chip",17),p.Ec(1),p.Tb()),2&e){const e=t.$implicit,c=t.index,s=p.fc(2);p.lc("ngStyle",p.oc(2,S,"#"+s.getCategoryColors()[c]+"76")),p.Db(1),p.Fc(e.title)}}function y(e,t){if(1&e&&(p.Ub(0,"mat-chip",17),p.Ec(1),p.Tb()),2&e){const e=t.$implicit,c=t.index,s=p.fc(2);p.lc("ngStyle",p.oc(2,S,"#"+s.getTopicColors()[c]+"66")),p.Db(1),p.Fc(e.name)}}function M(e,t){if(1&e&&(p.Ub(0,"div",12),p.Ub(1,"div",13),p.Ub(2,"h4"),p.Ec(3,"Categories"),p.Tb(),p.Ub(4,"mat-chip-list",14),p.Cc(5,j,2,4,"mat-chip",15),p.gc(6,"async"),p.Tb(),p.Tb(),p.Ub(7,"div",16),p.Ub(8,"h4"),p.Ec(9,"Topics:"),p.Tb(),p.Ub(10,"mat-chip-list",14),p.Cc(11,y,2,4,"mat-chip",15),p.gc(12,"async"),p.Tb(),p.Tb(),p.Tb()),2&e){const e=p.fc();p.Db(5),p.lc("ngForOf",p.hc(6,2,e.categories$)),p.Db(6),p.lc("ngForOf",p.hc(12,4,e.topics$))}}const T=function(e){return["/podcast",e]},k=function(e){return{podcast:e}};function x(e,t){if(1&e&&(p.Ub(0,"div",25),p.Ub(1,"a",26),p.Pb(2,"img",27),p.Ub(3,"h2"),p.Ec(4),p.Tb(),p.Tb(),p.Tb()),2&e){const e=t.$implicit;p.Db(1),p.lc("routerLink",p.oc(4,T,e.slug))("state",p.oc(6,k,e)),p.Db(1),p.mc("src",e.image,p.vc),p.Db(2),p.Fc(e.title)}}function w(e,t){if(1&e&&(p.Ub(0,"div",28),p.Pb(1,"img",29),p.Ub(2,"h3"),p.Ec(3),p.Tb(),p.Tb()),2&e){const e=t.$implicit;p.Db(1),p.mc("src",e.image,p.vc),p.mc("alt",e.title),p.Db(2),p.Gc(" ",e.title," ")}}function E(e,t){if(1&e&&(p.Ub(0,"div",18),p.Ub(1,"div",19),p.Ub(2,"h2"),p.Ec(3,"Podcasts"),p.Tb(),p.Ub(4,"div",20),p.Cc(5,x,5,8,"div",21),p.gc(6,"async"),p.Tb(),p.Tb(),p.Ub(7,"div",22),p.Ub(8,"h2"),p.Ec(9,"Episodes"),p.Tb(),p.Ub(10,"div",23),p.Cc(11,w,4,3,"div",24),p.gc(12,"async"),p.Tb(),p.Tb(),p.Tb()),2&e){const e=p.fc();p.Db(5),p.lc("ngForOf",p.hc(6,2,e.podcasts$)),p.Db(6),p.lc("ngForOf",p.hc(12,4,e.episodes$))}}const U=c("NXEx");let $=(()=>{class e{constructor(e,t){this.fb=e,this.store=t,this.hideRequiredControl=new i.e(!1),this.floatLabelControl=new i.e("auto"),this.searchBoxValue="",this.options=this.fb.group({hideRequired:this.hideRequiredControl,floatLabel:this.floatLabelControl})}ngOnInit(){const e=document.getElementById("search")||document,t=Object(o.a)(e,"keydown").pipe(Object(a.a)("target","value"),Object(r.a)(200),Object(d.a)(),Object(l.a)(e=>(this.store.dispatch(h.setSearchTerm({searchTerm:e})),this.store.select(g.h))));this.podcasts$=this.store.select(g.b),this.episodes$=this.store.select(g.a),this.searchTerm$=this.store.select(g.h),this.checkEpisodes$=this.store.select(g.f),this.checkPodcasts$=this.store.select(g.g),this.topics$=this.store.select(g.d),this.categories$=this.store.select(g.c),t.subscribe(e=>{this.store.dispatch(h.searchStart())}),this.store.dispatch(h.loadSearchRecommendationsStart())}checkPodcasts(e){this.store.dispatch(h.setSearchPodcasts({search:e}))}checkEpisodes(e){this.store.dispatch(h.setSearchEpisodes({search:e}))}getTopicColors(){var e=new U;return e.from_hue(20).scheme("triade").variation("default"),e.colors()}getCategoryColors(){var e=new U;return e.from_hue(50).scheme("tetrade").variation("pastel"),e.colors()}}return e.\u0275fac=function(t){return new(t||e)(p.Ob(i.d),p.Ob(s.h))},e.\u0275cmp=p.Ib({type:e,selectors:[["app-search"]],inputs:{searchBoxValue:"searchBoxValue"},decls:21,vars:17,consts:[[1,"page"],[1,"search__bar"],["appearance","fill",3,"floatLabel"],["id","search","matInput","","placeholder","eg. Stuff of Life","value","","type","text","aria-label","Search","matInput","",3,"matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"checked"],[3,"checked","change"],["class","search__recommendations",4,"ngIf"],["class","results",4,"ngIf"],[3,"value"],[1,"search__recommendations"],[1,"categories"],["aria-label","list of topics"],[3,"ngStyle",4,"ngFor","ngForOf"],[1,"topics"],[3,"ngStyle"],[1,"results"],[1,"pods"],[1,"pod__list"],["class","podcast",4,"ngFor","ngForOf"],[1,"episodes"],[1,"eps__list"],["class","episode",4,"ngFor","ngForOf"],[1,"podcast"],["routerLinkActive","active",3,"routerLink","state"],["alt","",3,"src"],[1,"episode"],[3,"src","alt"]],template:function(e,t){if(1&e&&(p.Ub(0,"div",0),p.Ub(1,"div",1),p.Ub(2,"mat-form-field",2),p.Ub(3,"mat-label"),p.Ec(4,"Search"),p.Tb(),p.Pb(5,"input",3),p.Ub(6,"mat-autocomplete",4,5),p.Cc(8,C,2,2,"mat-option",6),p.gc(9,"async"),p.Tb(),p.Tb(),p.Ub(10,"section",7),p.Ub(11,"mat-checkbox",8),p.bc("change",function(e){return t.checkPodcasts(e.checked)}),p.gc(12,"async"),p.Ec(13,"Podcasts"),p.Tb(),p.Ub(14,"mat-checkbox",8),p.bc("change",function(e){return t.checkEpisodes(e.checked)}),p.gc(15,"async"),p.Ec(16,"Episodes"),p.Tb(),p.Tb(),p.Tb(),p.Cc(17,M,13,6,"div",9),p.gc(18,"async"),p.Cc(19,E,13,6,"div",10),p.gc(20,"async"),p.Tb()),2&e){const e=p.rc(7);p.Db(2),p.lc("floatLabel",t.floatLabelControl.value),p.Db(3),p.lc("matAutocomplete",e),p.Db(3),p.lc("ngForOf",p.hc(9,7,t.podcasts$)),p.Db(3),p.lc("checked",p.hc(12,9,t.checkPodcasts$)),p.Db(3),p.lc("checked",p.hc(15,11,t.checkEpisodes$)),p.Db(3),p.lc("ngIf",p.hc(18,13,t.searchTerm$).length<3),p.Db(2),p.lc("ngIf",p.hc(20,15,t.searchTerm$).length>2)}},directives:[b.b,b.e,m.b,u.c,u.a,O.j,f.a,O.k,v.m,_.b,_.a,O.l,P.d,P.c],pipes:[O.b],styles:["div.page[_ngcontent-%COMP%]{height:100%;overflow-y:scroll}h2[_ngcontent-%COMP%]{font-family:highgate,sans-serif;font-weight:400;font-style:normal}div.search__bar[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;align-items:center;flex-direction:column;top:0;position:sticky;background-color:var(--background-light);z-index:1;box-shadow:0 3px 3px -3px var(--background-primary)}div.search__bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:35%}div.search__bar[_ngcontent-%COMP%]   section.checked[_ngcontent-%COMP%]{display:flex;flex-direction:row}div.search__bar[_ngcontent-%COMP%]   section.checked[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{padding:2.5%;display:block}div.search__recommendations[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;text-align:center}div.search__recommendations[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]{height:15%}div.search__recommendations[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-items:center;text-align:center}div.search__recommendations[_ngcontent-%COMP%]   div.topics[_ngcontent-%COMP%]{height:10%;text-align:center}div.search__recommendations[_ngcontent-%COMP%]   div.topics[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;justify-items:center;text-align:center}div.results[_ngcontent-%COMP%]{display:flex}div.results[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}div.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]{width:57.5%;display:inline-block}div.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}div.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]{width:20%;margin:1%}div.results[_ngcontent-%COMP%]   div.pods[_ngcontent-%COMP%]   div.pod__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}div.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]{width:37.5%;padding-left:2.5%;display:inline-block}div.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%]{display:flex;flex-direction:column}div.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%]   div.episode[_ngcontent-%COMP%]{display:flex;flex-direction:row}div.results[_ngcontent-%COMP%]   div.episodes[_ngcontent-%COMP%]   div.eps__list[_ngcontent-%COMP%]   div.episode[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}"]}),e})();var F=c("6HvO"),R=c("5+tZ"),D=c("JIr8"),q=c("lJxs"),L=c("XqQ8"),I=c("ALmS");const A=I.gql`
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
`,G=I.gql`
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
`,B=I.gql`
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
`,N=I.gql`
  query GetSearchRecommendations {
    getTopicSearchRecommendations {
      type
      name
    }
    getCategorySearchRecommendations {
      title
    }
  }
`;var K=c("/IUn");let Q=(()=>{class e{constructor(e){this.apollo=e}searchPodcast(e){return this.apollo.watchQuery({query:A,variables:{searchString:e}}).valueChanges}searchEpisodes(e){return this.apollo.watchQuery({query:G,variables:{searchString:e}}).valueChanges}searchPodcastsAndEpisodes(e){return this.apollo.watchQuery({query:B,variables:{searchString:e}}).valueChanges}getSearchRecommendations(){return this.apollo.watchQuery({query:N}).valueChanges}}return e.\u0275fac=function(t){return new(t||e)(p.Yb(K.b))},e.\u0275prov=p.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),X=(()=>{class e{constructor(e,t,c){this.actions$=e,this.searchService=t,this.store=c,this.search$=Object(n.d)(()=>this.actions$.pipe(Object(n.e)(h.searchStart),Object(n.c)(e=>this.store.select(g.e)),Object(R.a)(([e,t])=>{let c;return t.searchEpisodes&&t.searchPodcasts?c=this.searchService.searchPodcastsAndEpisodes(t.searchTerm).pipe(Object(D.a)(e=>(console.log(e.message),e))):t.searchEpisodes?c=this.searchService.searchEpisodes(t.searchTerm).pipe(Object(D.a)(e=>(console.log(e.message),e))):t.searchPodcasts&&(c=this.searchService.searchPodcast(t.searchTerm).pipe(Object(D.a)(e=>(console.log(e.message),e)))),c})).pipe(Object(a.a)("data"),Object(q.a)(e=>(console.log(e),h.searchSuccess({podcasts:(null==e?void 0:e.findPodcasts)||[],episodes:(null==e?void 0:e.findEpisodes)||[]}))),Object(D.a)(e=>(console.log(e.message),[h.searchFailure()])))),this.loadSearchRecommendations$=Object(n.d)(()=>this.actions$.pipe(Object(n.e)(h.loadSearchRecommendationsStart),Object(L.a)(e=>this.searchService.getSearchRecommendations())).pipe(Object(a.a)("data"),Object(q.a)(e=>(console.log(e),h.loadSearchRecommendationsSuccess({categories:e.getCategorySearchRecommendations,topics:e.getTopicSearchRecommendations}))),Object(D.a)(e=>(console.log(e.message),[h.loadSearchRecommendationsFailure()]))))}}return e.\u0275fac=function(t){return new(t||e)(p.Yb(n.a),p.Yb(Q),p.Yb(s.h))},e.\u0275prov=p.Kb({token:e,factory:e.\u0275fac}),e})();var J=c("dSjq");const Y=Object(s.p)(J.b,Object(s.r)(h.searchStart,e=>Object.assign(Object.assign({},e),{loading:!0})),Object(s.r)(h.searchSuccess,(e,t)=>Object.assign(Object.assign({},e),{loading:!1,loaded:!0,podcastResults:[...e.searchPodcasts?t.podcasts:e.podcastResults],episodeResults:[...e.searchEpisodes?t.episodes:e.episodeResults]})),Object(s.r)(h.searchFailure,(e,t)=>Object.assign(Object.assign({},e),{loading:!1,loaded:!1})),Object(s.r)(h.setSearchTerm,(e,t)=>Object.assign(Object.assign({},e),{searchTerm:t.searchTerm})),Object(s.r)(h.setEpisodeSearchPage,(e,t)=>Object.assign(Object.assign({},e),{episodeSearchPage:t.page})),Object(s.r)(h.setPodcastSearchPage,(e,t)=>Object.assign(Object.assign({},e),{podcastSearchPage:t.page})),Object(s.r)(h.setSearchEpisodes,(e,t)=>Object.assign(Object.assign({},e),{searchEpisodes:t.search})),Object(s.r)(h.setSearchPodcasts,(e,t)=>Object.assign(Object.assign({},e),{searchPodcasts:t.search})),Object(s.r)(h.loadSearchRecommendationsStart,e=>Object.assign(Object.assign({},e),{recommendationsLoading:!0})),Object(s.r)(h.loadSearchRecommendationsSuccess,(e,t)=>Object.assign(Object.assign({},e),{recommendationsLoading:!1,recommendationsLoaded:!0,topicRecommendations:[...t.topics],categoryRecommendations:[...t.categories]})),Object(s.r)(h.loadSearchRecommendationsFailure,e=>Object.assign(Object.assign({},e),{recommendationsLoaded:!1,recommendationsLoading:!1})),Object(s.r)(h.clearSearchState,e=>Object.assign({},J.b))),H=(e,t)=>Y(e,t),V=[{path:"",component:$}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Mb({type:e}),e.\u0275inj=p.Lb({imports:[[O.c,F.a,i.i,i.q,P.e.forChild(V),n.b.forFeature([X]),s.j.forFeature(J.a,H)]]}),e})()}}]);