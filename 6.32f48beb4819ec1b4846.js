(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{y6lh:function(t,n,e){"use strict";e.r(n),e.d(n,"DiscoverModule",function(){return X});var o=e("9jGm"),i=e("XqQ8"),c=e("wO+i"),s=e("lJxs"),d=e("JIr8"),g=e("l7P3");const r=Object(g.n)("load discover start"),a=Object(g.n)("load discover success",Object(g.s)()),l=Object(g.n)("load discover failure");var p=e("fXoL"),v=e("ALmS"),_=e("/IUn");let b=(()=>{class t{constructor(t){this.apollo=t,this.getDiscoveryContent=()=>this.apollo.watchQuery({query:O}).valueChanges}}return t.\u0275fac=function(n){return new(n||t)(p.Yb(_.b))},t.\u0275prov=p.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const O=v.gql`
  query GetDiscoveryContent {
    getTopPlayed {
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
      categories {
        title
      }
      topics {
        name
        type
      }
      episodes
    }

    getFeatured {
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
      categories {
        title
      }
      topics {
        name
        type
      }
      episodes
    }

    getTrending {
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
      categories {
        title
      }
      topics {
        name
        type
      }
      episodes
    }

    getCategories {
      title
    }

    topEpisodes {
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
  }
`;let u=(()=>{class t{constructor(t,n){this.actions$=t,this.discoverService=n,this.loadDiscoveryContent$=Object(o.d)(()=>this.actions$.pipe(Object(o.e)(r),Object(i.a)(t=>this.discoverService.getDiscoveryContent())).pipe(Object(c.a)("data"),Object(s.a)(t=>a({featured:t.getFeatured,trending:t.getTrending,categories:t.getCategories,topEpisodes:t.topEpisodes,mostPopular:t.getTopPlayed})),Object(d.a)(t=>(console.log(t.message),[l]))))}}return t.\u0275fac=function(n){return new(n||t)(p.Yb(o.a),p.Yb(b))},t.\u0275prov=p.Kb({token:t,factory:t.\u0275fac}),t})();var h=e("6HvO"),P=e("dlKe"),C=e("ofXK"),M=e("2Vo4");const f="discover",m=Object(g.o)(f),w=Object(g.q)(m,t=>t),y=Object(g.q)(w,t=>t.loaded);var x=e("DskF"),T=e("tyNb"),k=e("A5z7"),U=e("f0Cb");let j=(()=>{class t{transform(t){if(!t)return"";const n=t.split(" ");if(n.length>70){const t=[];let e=0;for(let o=0;o<n.length;o++)e<3&&("."!=n[o]&&"."!=n[o][n[o].length-1]||e++,t.push(n[o]));return t.join(" ")}return t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=p.Nb({name:"wordcount",type:t,pure:!0}),t})();function D(t,n){if(1&t){const t=p.Vb();p.Ub(0,"div",23),p.Ub(1,"div",24),p.Ub(2,"h2"),p.Ec(3," Trending "),p.Tb(),p.Ub(4,"h1"),p.Ec(5),p.Tb(),p.Ub(6,"mat-chip-list",25),p.Ub(7,"mat-chip",26),p.bc("click",function(){p.tc(t);const e=n.$implicit;return p.fc().goToFeatured(e)}),p.Ec(8,"Listen"),p.Tb(),p.Tb(),p.Tb(),p.Ub(9,"div",27),p.Pb(10,"p",28),p.gc(11,"wordcount"),p.Tb(),p.Ub(12,"div",29),p.Pb(13,"img",30),p.Tb(),p.Tb()}if(2&t){const t=n.$implicit;p.yc("background-color","#",t.palette[0],"36"),p.zc("background","linear-gradient(-45deg, #",t.palette[0],"66, #",t.palette[1],"66, #",t.palette[2],"66)"),p.Db(2),p.yc("color","#",t.palette[4],""),p.Db(2),p.yc("color","#",t.palette[0],"BF"),p.Db(1),p.Gc(" ",t.title," "),p.Db(2),p.yc("background-color","#",t.palette[1],"66"),p.Db(3),p.lc("innerHTML",p.hc(11,20,t.description),p.uc),p.Db(3),p.mc("src",t.image,p.vc)}}const F=function(t){return["/podcast",t]},E=function(t){return{podcast:t}},S=function(t){return{"box-shadow":t}};function L(t,n){if(1&t&&(p.Ub(0,"div",31),p.Ub(1,"a",32),p.Pb(2,"img",33),p.Tb(),p.Tb()),2&t){const t=n.$implicit;p.Db(1),p.lc("routerLink",p.oc(5,F,t.slug))("state",p.oc(7,E,t)),p.Db(1),p.mc("src",t.image,p.vc),p.mc("alt",t.title),p.lc("ngStyle",p.oc(9,S,"-5px 5px 10px #"+t.palette[1]+", 5px -5px 10px#"+t.palette[2]))}}function $(t,n){if(1&t&&(p.Ub(0,"div",34),p.Ub(1,"p"),p.Ec(2),p.Tb(),p.Tb()),2&t){const t=n.$implicit,e=n.index,o=p.fc();p.yc("background-color","#",o.getColors()[e],"66"),p.Db(2),p.Fc(t.title)}}function z(t,n){1&t&&p.Pb(0,"mat-divider")}function N(t,n){if(1&t&&(p.Ub(0,"div",31),p.Ub(1,"a",32),p.Ub(2,"span",35),p.Ub(3,"h3",36),p.Ec(4),p.Tb(),p.Pb(5,"img",30),p.Ub(6,"h3"),p.Ec(7),p.Tb(),p.Tb(),p.Tb(),p.Cc(8,z,1,0,"mat-divider",37),p.gc(9,"async"),p.Tb()),2&t){const t=n.$implicit,e=n.index,o=p.fc();p.Db(1),p.lc("routerLink",p.oc(8,F,t.slug))("state",p.oc(10,E,t)),p.Db(3),p.Gc("",e+1,"."),p.Db(1),p.mc("src",t.image,p.vc),p.Db(2),p.Fc(t.title),p.Db(1),p.lc("ngIf",e+1!=p.hc(9,6,o.content$).mostPopular.length)}}const B=function(t){return{visibility:t}},I=e("NXEx");let q=(()=>{class t{constructor(t,n,e){this.podcastService=t,this.store=n,this.router=e,this.podcasts=[],this.viewState=3,this.pageNo=0,this.page=new M.a(this.pageNo)}ngOnInit(){this.store.select(y).subscribe(t=>{t||this.store.dispatch(r())}),this.content$=this.store.select(w)}onScroll(){this.pageNo+=1,this.page.next(this.pageNo)}changeView(t){this.viewState=t}goToFeatured(t){this.router.navigateByUrl(`podcast/${t.slug}`)}getColors(){var t=new I;return t.from_hue(21).scheme("tetrade").variation("default"),t.colors()}scrollThrough(t){const n=document.querySelector("div.featured__list");this.sideScroll(n,t,10,300,10),console.log(n.scrollLeft)}show(t){const n=document.querySelector("div.featured__list"),e=n.scrollLeft;return t?e!=n.scrollWidth:0===e}sideScroll(t,n,e,o,i){let c=0;var s=setInterval(function(){"left"==n?t.scrollLeft-=i:t.scrollLeft+=i,c+=i,c>=o&&window.clearInterval(s)},e)}ngOnDestroy(){var t;null===(t=this.subscription)||void 0===t||t.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(p.Ob(x.a),p.Ob(g.h),p.Ob(T.b))},t.\u0275cmp=p.Ib({type:t,selectors:[["app-discover"]],decls:39,vars:23,consts:[[1,"page"],["class","trending",3,"background-color","background",4,"ngFor","ngForOf"],[1,"featured"],[1,"go__left",3,"ngStyle"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"h-5","w-5",3,"click"],["fill-rule","evenodd","d","M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clip-rule","evenodd"],[1,"featured__list"],["class","podcast",4,"ngFor","ngForOf"],[1,"go__right"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","black",1,"h-5","w-5",3,"ngStyle","click"],["fill-rule","evenodd","d","M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clip-rule","evenodd"],[1,"collections"],[1,"categories"],[1,"header"],[1,"spacer"],[1,"more"],["xmlns","http://www.w3.org/2000/svg","className","h-6 w-6","fill","none","viewBox","0 0 24 24","stroke","currentColor"],["strokeLinecap","round","strokeLinejoin","round","strokeWidth","{2}","d","M14 5l7 7m0 0l-7 7m7-7H3"],[1,"category__boxes"],["class","category",3,"background-color",4,"ngFor","ngForOf"],[1,"top__podcasts"],[1,"podcast__list"],[1,"top__episodes"],[1,"trending"],[1,"details"],["aria-label","Trending play button"],["style.margin","1%",3,"click"],[1,"description"],[3,"innerHTML"],[1,"cover"],["alt","",3,"src"],[1,"podcast"],["routerLinkActive","active",3,"routerLink","state"],[3,"src","alt","ngStyle"],[1,"category"],[1,"content"],[1,"number"],[4,"ngIf"]],template:function(t,n){1&t&&(p.Ub(0,"div",0),p.Cc(1,D,14,22,"div",1),p.gc(2,"slice"),p.gc(3,"async"),p.Ub(4,"div",2),p.Ub(5,"div",3),p.ec(),p.Ub(6,"svg",4),p.bc("click",function(){return n.scrollThrough("left")}),p.Pb(7,"path",5),p.Tb(),p.Tb(),p.dc(),p.Ub(8,"h2"),p.Ec(9,"Featured"),p.Tb(),p.Ub(10,"div",6),p.Cc(11,L,3,11,"div",7),p.gc(12,"async"),p.Tb(),p.Ub(13,"div",8),p.ec(),p.Ub(14,"svg",9),p.bc("click",function(){return n.scrollThrough("right")}),p.Pb(15,"path",10),p.Tb(),p.Tb(),p.Tb(),p.dc(),p.Ub(16,"div",11),p.Ub(17,"div",12),p.Ub(18,"div",13),p.Ub(19,"h2"),p.Ec(20,"Categories"),p.Tb(),p.Pb(21,"span",14),p.Ub(22,"div",15),p.Ub(23,"h3"),p.Ec(24),p.ec(),p.Ub(25,"svg",16),p.Pb(26,"path",17),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.dc(),p.Ub(27,"div",18),p.Cc(28,$,3,4,"div",19),p.gc(29,"async"),p.Tb(),p.Tb(),p.Ub(30,"div",20),p.Ub(31,"h2"),p.Ec(32," Top Podcasts "),p.Tb(),p.Ub(33,"div",21),p.Cc(34,N,10,12,"div",7),p.gc(35,"async"),p.Tb(),p.Tb(),p.Ub(36,"div",22),p.Ub(37,"h2"),p.Ec(38," Top Episodes "),p.Tb(),p.Tb(),p.Tb(),p.Tb()),2&t&&(p.Db(1),p.lc("ngForOf",p.ic(2,7,p.hc(3,11,n.content$).trending,0,1)),p.Db(4),p.lc("ngStyle",p.oc(19,B,n.show(!1)?"hidden":"visible")),p.Db(6),p.lc("ngForOf",p.hc(12,13,n.content$).featured),p.Db(3),p.lc("ngStyle",p.oc(21,B,n.show(!0)?"visible":"hidden")),p.Db(10),p.Gc(" See all "," "," "),p.Db(4),p.lc("ngForOf",p.hc(29,15,n.content$).categories.slice(0,9)),p.Db(6),p.lc("ngForOf",p.hc(35,17,n.content$).mostPopular))},directives:[C.j,C.l,k.b,k.a,T.d,T.c,C.k,U.a],pipes:[C.s,C.b,j],styles:["span.spacer[_ngcontent-%COMP%]{flex:1 1 auto}h3[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}h2[_ngcontent-%COMP%]{font-weight:500;font-size:16pt}div.page[_ngcontent-%COMP%]{height:100%;overflow-y:scroll}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]{height:25%;padding:1%;background-size:200% 200%;animation:gradient 15s ease infinite;display:flex;flex-direction:row}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-content:center;width:30%;height:80%;padding:1%}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{height:20%;font-size:16pt;font-family:Sailec Bold;font-weight:900;margin-bottom:2.5%}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{height:60%;font-size:28pt;margin-bottom:5%}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]   div.details[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:hover{cursor:pointer}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]{width:45%;display:flex;justify-content:center;align-items:center;height:100%}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]   div.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;font-size:14pt}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]   div.cover[_ngcontent-%COMP%]{width:30%;text-align:right}div.page[_ngcontent-%COMP%]   div.trending[_ngcontent-%COMP%]   div.cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]{height:30%;margin:1%;position:relative}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:18pt}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   div.featured__list[_ngcontent-%COMP%]{height:90%;display:flex;flex-direction:row;justify-content:space-between;width:100%;overflow-y:hidden;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   div.featured__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]{border-radius:5%;height:90%;padding:1%;background-size:cover}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   div.featured__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80%;border-radius:5%}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:0!important}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   div.go__left[_ngcontent-%COMP%]{position:absolute;left:0;top:50%}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   div.go__left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:30px;width:30px;fill:var(--background-primary);background-color:var(--text-light);border-radius:50%}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   div.go__right[_ngcontent-%COMP%]{position:absolute;right:0;top:50%}div.page[_ngcontent-%COMP%]   div.featured[_ngcontent-%COMP%]   div.go__right[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:30px;width:30px;fill:var(--background-primary);background-color:var(--text-light);border-radius:50%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]{height:40%;display:flex;justify-content:space-around;flex-direction:row;flex-wrap:wrap}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]{width:30%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]{display:flex;flex-direction:row}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   div.more[_ngcontent-%COMP%]{width:20%;display:flex;flex-direction:row;justify-content:center;align-items:center;height:100%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]   div.more[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]   div.category__boxes[_ngcontent-%COMP%]{width:100%;display:flex;height:22%;flex-wrap:wrap;justify-content:space-between;align-items:center}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]   div.category__boxes[_ngcontent-%COMP%]   div.category[_ngcontent-%COMP%]{width:30%;height:100%;display:flex;justify-self:center;align-items:flex-end;margin-bottom:1%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.categories[_ngcontent-%COMP%]   div.category__boxes[_ngcontent-%COMP%]   div.category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:5%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__podcasts[_ngcontent-%COMP%]{width:30%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__podcasts[_ngcontent-%COMP%]   div.podcast__list[_ngcontent-%COMP%]{display:flex;flex-direction:column}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__podcasts[_ngcontent-%COMP%]   div.podcast__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:1%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__podcasts[_ngcontent-%COMP%]   div.podcast__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--background-primary)}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__podcasts[_ngcontent-%COMP%]   div.podcast__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   span.content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;align-items:flex-start}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__podcasts[_ngcontent-%COMP%]   div.podcast__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   span.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__podcasts[_ngcontent-%COMP%]   div.podcast__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   span.content[_ngcontent-%COMP%]   h3.number[_ngcontent-%COMP%]{width:5%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__podcasts[_ngcontent-%COMP%]   div.podcast__list[_ngcontent-%COMP%]   div.podcast[_ngcontent-%COMP%]   span.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;padding:1%}div.page[_ngcontent-%COMP%]   div.collections[_ngcontent-%COMP%]   div.top__episodes[_ngcontent-%COMP%]{width:30%}@keyframes gradient{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}"]}),t})();const H=Object(g.p)({featured:[],trending:[],categories:[],topEpisodes:[],mostPopular:[],loading:!1,loaded:!1},Object(g.r)(r,t=>Object.assign(Object.assign({},t),{loading:!0,loaded:!1})),Object(g.r)(a,(t,n)=>Object.assign(Object.assign({},t),{featured:n.featured,trending:n.trending,categories:n.categories,topEpisodes:n.topEpisodes,mostPopular:n.mostPopular,loading:!1,loaded:!0})),Object(g.r)(l,t=>Object.assign(Object.assign({},t),{loading:!1,loaded:!1}))),G=(t,n)=>H(t,n);var J=e("PCNd");const K=[{path:"",component:q}];let X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.Mb({type:t}),t.\u0275inj=p.Lb({imports:[[C.c,P.b,h.a,T.e.forChild(K),o.b.forFeature([u]),g.j.forFeature(f,G),J.a]]}),t})()}}]);