(this["webpackJsonpmovie-db"]=this["webpackJsonpmovie-db"]||[]).push([[0],{106:function(e,t,a){e.exports={"form-wrapper":"style_form-wrapper__37STz"}},109:function(e,t,a){e.exports={"not-found":"style_not-found__2Ui7B"}},116:function(e,t,a){e.exports={"nav-bar":"style_nav-bar__TN4te"}},121:function(e,t,a){e.exports=a(248)},21:function(e,t,a){e.exports={"side-bar":"style_side-bar__1vvQt","nav-icon":"style_nav-icon__p6gtK","nav-text":"style_nav-text__uzns2",logo:"style_logo__2ipVV"}},23:function(e,t,a){e.exports={"section-list":"style_section-list__14nDy","section-list__container":"style_section-list__container__3cFHw","section-list__item":"style_section-list__item__2jiXu","section-list__no-content":"style_section-list__no-content__3weTJ","section-list__pagination":"style_section-list__pagination__M22hZ",pageLink:"style_pageLink__1iotN",currentLink:"style_currentLink__2yDf9"}},246:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=a(31),i=a(33),l=a(104),u=a(105),m=a(13),p="TVSHOWS_START_LOADING",d="TVSHOWS_HANDLE_SUCCESS",g=function(e){return{type:p,payload:e}},v=function(e){return{type:d,payload:e}},h=function(e,t){var a=t.type,n=t.payload;switch(a){case p:case d:return Object(m.a)(Object(m.a)({},e),{},{isLoading:n});default:return e}},b=a(4),f=a.n(b),y=a(7),_=a(53),E=a.n(_),w="5628e59945411114e5c3545e385349d1",S=function(){var e=Object(y.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/".concat(a,"/popular?api_key=").concat(w,"&language=en-US&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data||null);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(y.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"?api_key=").concat(w,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data||null);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(y.a)(f.a.mark((function e(t,a,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/search/".concat(n,"?api_key=").concat(w,"&language=en-US&query=").concat(t,"&page=").concat(a,"&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data||null);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),k={setItem:function(){var e=Object(y.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",localStorage.setItem(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getItem:function(){var e=Object(y.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",localStorage.getItem(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){return t.includes(String(e.id))?Object(m.a)(Object(m.a)({},e),{},{checked:!0}):e}))},L=function(){var e=Object(y.a)(f.a.mark((function e(t){var a,n,r,c,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.dispatch,n=t.startLoading,r=t.handleSuccess,c=t.fetch,e.next=3,c();case 3:o=e.sent,s=!o,"function"===typeof n&&a(n(s)),"function"===typeof r&&a(r(s));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N={noAccessMessage:"No access. Try again",keyLocalStorage:"user",noContent:"No content",baseImgUrl:"https://image.tmdb.org/t/p/w500",cardsOnPage:20,delay:2e3,typeVideos:{movie:"movie",tvShow:"tv"},pages:{search:{searchResults:"Search results:"},myLibrary:{myLibraryCaption:"My library:"}},routes:{home:{title:"Home",url:"/"},login:{title:"Login",url:"/login"},logout:{title:"Logout"},tvShow:{title:"TV Shows",detailsUrl:"/tv-shows/:id",paginationUrl:"/tv-shows/page/:id",paginationPage:"/tv-shows/page",url:"/tv-shows"},myLibrary:{title:"My Library",paginationUrl:"/my-library/:typeVideo/page/:id",tabs:{movies:"Movies",tvShows:"TV Shows"},url:"/my-library"},search:{title:"Search",searchUrl:"/search/:query/page/:id",tabs:{movies:"Movies",tvShows:"TV Shows"},url:"/search"},movie:{title:"Movies",detailsUrl:"/movies/:id",paginationUrl:"/movies/page/:id",paginationPage:"/movies/page",url:"/movies"}}},P="SET_TVSHOWS_LIST",V=function(e,t){var a=t.type,n=t.payload;switch(a){case P:return Object(m.a)(Object(m.a)({},e),{},{tvShowsList:n});default:return e}},C="SET_TVSHOWS_ITEM",U=function(e,t){var a=t.type,n=t.payload;switch(a){case C:return Object(m.a)(Object(m.a)({},e),{},{tvShowDetail:n});default:return e}},T=Object(u.a)({tvShowDetail:{},tvShowsList:{},isLoading:!0},h,V,U),I=[],A=Object(i.c)({tvShowsReducer:T}),M=a(12),F=a(9),q=a(250),D=Object(n.createContext)(null),J=function(){return Object(n.useContext)(D)},z=function(e){var t=e.toString();e instanceof Error||!e.message||(t=e.message),alert(t)},R=a(8),H=function(e,t,a){if(t.match(N.typeVideos.movie)){var n=e.moviesLibrary,r=void 0===n?[]:n,c=r.findIndex((function(e){return e===a}));-1===c?r.push(a):r.splice(c,1),e.moviesLibrary=r}else{var o=e.tvShowLibrary,s=void 0===o?[]:o,i=s.findIndex((function(e){return e===a}));-1===i?s.push(a):s.splice(i,1),e.tvShowLibrary=s}return e},K=a(28),W=a.n(K),B=Object(n.memo)((function(e){var t=J().userSearchString,a=Object(F.f)(),c=function(){var t=Object(y.a)(f.a.mark((function t(n){var r,c,o,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.target.name,t.next=3,k.getItem(N.keyLocalStorage);case 3:if(c=t.sent,!(o=JSON.parse(c))){t.next=11;break}return s=H(o,e.typeVideo,r),t.next=9,k.setItem(N.keyLocalStorage,JSON.stringify(s));case 9:t.next=12;break;case 11:a.push(N.routes.login.url);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(R.a,{className:W.a["section-card"],onClick:function(){t("")},to:"".concat(e.detailsUrl,"/").concat(e.id)},r.a.createElement("div",{className:W.a["section-card__wrapper"]},r.a.createElement("img",{className:W.a["section-card__img"],src:e.imageLink?e.imageLink:"",alt:e.title}))),r.a.createElement("span",{className:W.a.bookmark},r.a.createElement("input",{type:"checkbox",className:W.a["bookmark-input"],name:e.id,id:e.id,defaultChecked:e.checked,onClick:c}),r.a.createElement("label",{htmlFor:e.id,className:W.a["bookmark-star"]})))})),Q=a(118),G=a(23),X=a.n(G),Y=Object(n.memo)((function(e){var t=Object(F.f)(),a=J().setRunPush;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:X.a["section-list"]},r.a.createElement("div",{className:X.a["section-list__container"]},e.data.length?e.data.map((function(t){return r.a.createElement("div",{key:t.id,className:X.a["section-list__item"]},r.a.createElement(B,{key:t.id,id:t.id,title:t.name?t.name:t.title,imageLink:"".concat(N.baseImgUrl).concat(t.poster_path),detailsUrl:e.detailsUrl,typeVideo:e.typeVideo,checked:null===t||void 0===t?void 0:t.checked}))})):r.a.createElement("div",{className:X.a["section-list__no-content"]},r.a.createElement("h2",null,N.noContent)),e.data.length?r.a.createElement("div",{className:X.a["section-list__pagination"]},r.a.createElement(Q.a,{currentPage:e.activePage-1,pageCount:e.totalPage,pageLinkClassName:X.a.pageLink,currentLinkClassName:X.a.currentLink,onPageClick:function(n){t.push("".concat(e.paginationUrl,"/").concat(n+1)),a("".concat(e.paginationUrl,"/").concat(n+1))}})):r.a.createElement(n.Fragment,null))))})),Z=a(70),$=a.n(Z),ee=Object(n.memo)((function(){var e=J(),t=e.movies,a=e.setMovies,c=e.isLoading,o=e.moviePages,s=e.searchString,i=e.setIsLoading,l=e.setMoviePages,u=e.isAuthenticated,m=Object(F.f)(),p=Object(F.g)();return Object(n.useEffect)((function(){s.length>2&&m.push("".concat(N.routes.search.url,"/").concat(s,"/page/1"))}),[m,s]),Object(n.useEffect)((function(){(function(){var e=Object(y.a)(f.a.mark((function e(){var t,n,r,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!u){e.next=14;break}return i(!0),t=p.query?1:p.id,e.next=6,k.getItem(N.keyLocalStorage);case 6:return n=e.sent,r=JSON.parse(n),e.next=10,S(t,N.typeVideos.movie);case 10:c=e.sent,o=j(c.results,null===r||void 0===r?void 0:r.moviesLibrary),a(o),l({page:c.page,totalPage:c.total_pages});case 14:i(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),z(e.t0),i(!1);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}})()()}),[a,p.id,p.query,i,l,u]),r.a.createElement(n.Fragment,null,c?r.a.createElement("div",{className:$.a.page},r.a.createElement(q.a,{animation:"border",variant:"secondary"})):r.a.createElement("div",{className:$.a.page},r.a.createElement(Y,{data:t,detailsUrl:N.routes.movie.url,paginationUrl:N.routes.movie.paginationPage,activePage:o.page,totalPage:o.totalPage,typeVideo:N.typeVideos.movie})))})),te=a(107),ae=a(119),ne=a(108),re=a(251),ce=a(47),oe=function(e,t){var a=t.field,n=t.value;return Object(m.a)(Object(m.a)({},e),{},Object(ce.a)({},a,n))},se=function(e){var t=Object(n.useReducer)(oe,e),a=Object(M.a)(t,2),r=a[0],c=a[1];return{loginEmail:(null===r||void 0===r?void 0:r.loginEmail)||"",loginPassword:(null===r||void 0===r?void 0:r.loginPassword)||"",onChange:function(e){c({field:e.target.name,value:e.target.value})}}},ie=a(106),le=a.n(ie),ue=Object(n.memo)((function(){var e=se(null),t=Object(F.f)(),a=J().userHasAuthenticated,n=function(){var n=Object(y.a)(f.a.mark((function n(r){var c,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),n.prev=1,"test@test.test"!==e.loginEmail||"test1234"!==e.loginPassword){n.next=14;break}return a(!0),n.next=6,k.getItem(N.keyLocalStorage);case 6:return c=n.sent,(o=JSON.parse(c))?o.isAuth=!0:o={isAuth:!0},n.next=11,k.setItem(N.keyLocalStorage,JSON.stringify(o));case 11:t.push(N.routes.home.url),n.next=15;break;case 14:alert("".concat(N.noAccessMessage));case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(1),z(n.t0);case 20:case"end":return n.stop()}}),n,null,[[1,17]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:le.a["form-wrapper"]},r.a.createElement("form",null,r.a.createElement(te.a,{controlId:"email"},r.a.createElement(ae.a,null,"Email"),r.a.createElement(ne.a,{autoFocus:!0,type:"email",name:"loginEmail",placeholder:"Type test@test.test",value:e.loginEmail,onChange:e.onChange})),r.a.createElement(te.a,{controlId:"password"},r.a.createElement(ae.a,null,"Password"),r.a.createElement(ne.a,{type:"password",name:"loginPassword",placeholder:"Type test1234",value:e.loginPassword,onChange:e.onChange})),r.a.createElement(re.a,{block:!0,type:"button",variant:"dark",onClick:n,disabled:!(e.loginEmail.length>0&&e.loginPassword.length>0)},"Login")))})),me=a(109),pe=a.n(me),de=Object(n.memo)((function(){return r.a.createElement("div",{className:pe.a["not-found"]},r.a.createElement("h3",null,"Sorry, page not found!"))})),ge=Object(n.memo)((function(e){var t=e.children,a=Object(F.f)(),c=J().isAuthenticated;return Object(n.useEffect)((function(){c||a.push(N.routes.login.url)}),[a,c]),r.a.createElement(n.Fragment,null,t)})),ve=a(110),he=a(35),be=a.n(he),fe=Object(s.b)((function(e){return{tvShowDetail:e.tvShowsReducer}}),(function(e){return{loadTVShowDescription:function(t){return e((a=t,function(e){return L({dispatch:e,startLoading:g,handleSuccess:v,fetch:function(){var t=Object(y.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(a,N.typeVideos.tvShow);case 2:return n=t.sent,e({type:C,payload:n}),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})}));var a}}}))((function(e){var t=Object(n.useState)(null),a=Object(M.a)(t,2),c=a[0],o=a[1],s=J(),i=s.isAuthenticated,l=s.searchString,u=e.tvShowDetail,m=u.tvShowDetail,p=u.isLoading,d=Object(F.f)(),g=Object(F.g)();return Object(n.useEffect)((function(){l.length>2&&d.push("".concat(N.routes.search.url,"/").concat(l,"/page/1"))}),[d,l]),Object(n.useEffect)((function(){(function(){var t=Object(y.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!i){t.next=13;break}if(!d.location.pathname.split("/").slice(1)[0].toLowerCase().match(N.routes.movie.title.toLowerCase())){t.next=11;break}return a=N.typeVideos.movie,t.next=7,O(g.id,a);case 7:n=t.sent,o(n),t.next=13;break;case 11:a=N.typeVideos.tvShow,r=g.id,Promise.all([e.loadTVShowDescription(r)]);case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),z(t.t0);case 18:case"end":return t.stop()}var r}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}})()()}),[p,g.id,i,d.location.pathname]),r.a.createElement(n.Fragment,null,c||m?r.a.createElement("div",{className:be.a["section-card"]},r.a.createElement("img",{className:be.a["section-card__image"],src:c?"".concat(N.baseImgUrl).concat(c.poster_path):"".concat(N.baseImgUrl).concat(m.poster_path),alt:c?c.title:m.name}),r.a.createElement("div",{className:be.a["section-card__description"]},r.a.createElement("h2",null,c?c.title:m.name),(null===c||void 0===c?void 0:c.overview)||(null===m||void 0===m?void 0:m.overview),r.a.createElement("div",{className:be.a["section-card__graph"]},r.a.createElement(ve.HorizontalBar,{data:{labels:[c?c.title:m.name],datasets:[{label:"Rating",data:[c?c.vote_average:m.vote_average],backgroundColor:"rgba(49,64,82,0.4)",borderColor:"rgba(70,95,122,1)",borderWidth:1,hoverBackgroundColor:"rgba(49,64,82,0.6)",hoverBorderColor:"rgba(70,95,122,1)",barThickness:50}]},options:{legend:{labels:{fontColor:"rgb(255,255,255)"}},scales:{xAxes:[{ticks:{fontColor:"rgb(255,255,255)"},scaleLabel:{fontColor:"rgb(255,255,255)"},gridLines:{color:"transparent"}}],yAxes:[{ticks:{fontColor:"rgb(255,255,255)"},gridLines:{color:"rgb(255,255,255)"}}]}}})))):r.a.createElement("div",{className:be.a.page},r.a.createElement(q.a,{animation:"border",variant:"secondary"})))})),ye=a(71),_e=a.n(ye),Ee=Object(s.b)((function(e){return{tvShowsList:e.tvShowsReducer}}),(function(e){return{loadTVShows:function(t){return e((a=t,function(e){return L({dispatch:e,startLoading:g,handleSuccess:v,fetch:function(){var t=Object(y.a)(f.a.mark((function t(){var n,r,c,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a,N.typeVideos.tvShow);case 2:return n=t.sent,t.next=5,k.getItem(N.keyLocalStorage);case 5:return r=t.sent,c=JSON.parse(r),o=j(null===n||void 0===n?void 0:n.results,null===c||void 0===c?void 0:c.tvShowLibrary),e((s=Object(m.a)(Object(m.a)({},n),{},{markedVideos:o}),{type:P,payload:s})),t.abrupt("return",n);case 10:case"end":return t.stop()}var s}),t)})));return function(){return t.apply(this,arguments)}}()})}));var a}}}))((function(e){var t=J(),a=t.searchString,c=t.isAuthenticated,o=Object(F.f)(),s=Object(F.g)(),i=e.tvShowsList,l=i.tvShowsList,u=i.isLoading;Object(n.useEffect)((function(){a.length>2&&o.push("".concat(N.routes.search.url,"/").concat(a,"/page/1"))}),[o,a]);return Object(n.useEffect)((function(){try{if(c)(function(t){Promise.all([e.loadTVShows(t)])})(s.query?1:s.id)}catch(t){z(t)}}),[s.id,u,s.query,c]),r.a.createElement(n.Fragment,null,u?r.a.createElement("div",{className:_e.a.page},r.a.createElement(q.a,{animation:"border",variant:"secondary"})):r.a.createElement("div",{className:_e.a.page},r.a.createElement(Y,{data:(null===l||void 0===l?void 0:l.markedVideos)||(null===l||void 0===l?void 0:l.tvShowsList)||[],detailsUrl:N.routes.tvShow.url,paginationUrl:N.routes.tvShow.paginationPage,activePage:l.page||1,totalPage:l.total_pages||1,typeVideo:N.typeVideos.tvShow})))})),we=a(254),Se=a(252),Oe=a(72),xe=a.n(Oe),ke=Object(n.memo)((function(e){var t=e.typeVideo,a=e.activeTab,c=J(),o=c.tvs,s=c.movies,i=c.setTvs,l=c.tvPages,u=c.setMovies,m=c.isLoading,p=c.moviePages,d=c.setTvPages,g=c.setIsLoading,v=c.searchString,h=c.setMoviePages,b=c.isAuthenticated,_=Object(F.g)(),E=Object(F.f)();return Object(n.useEffect)((function(){v.length>2&&E.push("".concat(N.routes.search.url,"/").concat(v,"/page/1"))}),[E,v]),Object(n.useEffect)((function(){(function(){var e=Object(y.a)(f.a.mark((function e(){var t,n,r,c,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(_.query.length>2&&b)){e.next=22;break}return g(!0),e.next=5,k.getItem(N.keyLocalStorage);case 5:if(t=e.sent,n=JSON.parse(t),!a.match(N.routes.movie.title)){e.next=16;break}return e.next=10,x(_.query,_.id,N.typeVideos.movie);case 10:r=e.sent,c=j(r.results,null===n||void 0===n?void 0:n.moviesLibrary),u(c),h({page:r.page,totalPage:r.total_pages}),e.next=22;break;case 16:return e.next=18,x(_.query,_.id,N.typeVideos.tvShow);case 18:o=e.sent,s=j(o.results,null===n||void 0===n?void 0:n.tvShowLibrary),i(s),d({page:o.page,totalPage:o.total_pages});case 22:g(!1),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(0),z(e.t0),g(!1);case 29:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(){return e.apply(this,arguments)}})()()}),[i,u,_.id,t,a,d,v,_.query,g,h,b]),r.a.createElement(n.Fragment,null,m?r.a.createElement("div",{className:xe.a.page__spinner},r.a.createElement(q.a,{animation:"border",variant:"secondary"})):r.a.createElement("div",{className:xe.a.page},a.match(N.routes.movie.title)?r.a.createElement(Y,{data:s,detailsUrl:N.routes.movie.url,paginationUrl:"".concat(N.routes.search.url,"/").concat(_.query,"/page"),activePage:p.page,totalPage:p.totalPage,typeVideo:N.typeVideos.movie}):r.a.createElement(Y,{data:o,detailsUrl:N.routes.tvShow.url,paginationUrl:"".concat(N.routes.search.url,"/").concat(_.query,"/page"),activePage:l.page,totalPage:l.totalPage,typeVideo:N.typeVideos.tvShow})))})),je=a(73),Le=a.n(je),Ne=Object(n.memo)((function(){var e=Object(n.useState)(N.routes.movie.title),t=Object(M.a)(e,2),a=t[0],c=t[1],o=Object(F.f)(),s=Object(F.g)();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:Le.a.page},r.a.createElement("div",{className:Le.a["page__search-results-title"]},N.pages.search.searchResults),r.a.createElement(we.a,{activeKey:a,onSelect:function(e){c(e),o.push("".concat(N.routes.search.url,"/").concat(s.query,"/page/1"))}},r.a.createElement(Se.a,{eventKey:N.routes.movie.title,title:N.routes.movie.title},r.a.createElement(ke,{typeVideo:N.typeVideos.movie,activeTab:a})),r.a.createElement(Se.a,{eventKey:N.routes.tvShow.title,title:N.routes.tvShow.title},r.a.createElement(ke,{typeVideo:N.typeVideos.tvShow,activeTab:a})))))})),Pe=function(e,t){var a=e-1>=1?(e-1)*N.cardsOnPage:0;return{startIndex:a,endIndex:a+N.cardsOnPage,page:e||1,totalPage:Math.ceil(t/N.cardsOnPage)}},Ve=a(74),Ce=a.n(Ve),Ue=Object(n.memo)((function(e){var t=e.typeVideo,a=e.activeTab,c=J(),o=c.tvs,s=c.movies,i=c.setTvs,l=c.tvPages,u=c.setMovies,m=c.isLoading,p=c.moviePages,d=c.setTvPages,g=c.setIsLoading,v=c.searchString,h=c.setMoviePages,b=c.isAuthenticated,_=Object(F.g)(),E=Object(F.f)();return Object(n.useEffect)((function(){v.length>2&&E.push("".concat(N.routes.search.url,"/").concat(v,"/page/1"))}),[E,v]),Object(n.useEffect)((function(){(function(){var e=Object(y.a)(f.a.mark((function e(){var t,n,r,c,o,s,l,m,p,v,E,w,S,x,L,P,V,C;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!b){e.next=26;break}return g(!0),e.next=5,k.getItem(N.keyLocalStorage);case 5:if(t=e.sent,n=JSON.parse(t),!a.match(N.routes.movie.title)){e.next=18;break}return r=(null===n||void 0===n?void 0:n.moviesLibrary)||[],e.next=11,Promise.all(r.map(function(){var e=Object(y.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,N.typeVideos.movie);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:c=e.sent,o=j(c,null===n||void 0===n?void 0:n.moviesLibrary),s=Pe(_.id,o.length),l=s.startIndex,m=s.endIndex,p=s.page,v=s.totalPage,u(o.slice(l,m)),h({page:p,totalPage:v}),e.next=26;break;case 18:return E=(null===n||void 0===n?void 0:n.tvShowLibrary)||[],e.next=21,Promise.all(E.map(function(){var e=Object(y.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,N.typeVideos.tvShow);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 21:w=e.sent,S=j(w,null===n||void 0===n?void 0:n.tvShowLibrary),x=Pe(_.id,S.length),L=x.startIndex,P=x.endIndex,V=x.page,C=x.totalPage,i(S.slice(L,P)),d({page:V,totalPage:C});case 26:g(!1),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(0),z(e.t0),g(!1);case 33:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(){return e.apply(this,arguments)}})()()}),[i,u,_.id,t,a,d,v,_.query,g,h,b]),r.a.createElement(n.Fragment,null,m?r.a.createElement("div",{className:Ce.a.page__spinner},r.a.createElement(q.a,{animation:"border",variant:"secondary"})):r.a.createElement("div",{className:Ce.a.page},a.match(N.routes.movie.title)?r.a.createElement(Y,{data:s,detailsUrl:N.routes.movie.url,paginationUrl:"".concat(N.routes.myLibrary.url,"/").concat(N.typeVideos.movie,"/page"),activePage:p.page,totalPage:p.totalPage,typeVideo:N.typeVideos.movie}):r.a.createElement(Y,{data:o,detailsUrl:N.routes.tvShow.url,paginationUrl:"".concat(N.routes.myLibrary.url,"/").concat(N.typeVideos.tvShow,"/page"),activePage:l.page,totalPage:l.totalPage,typeVideo:N.typeVideos.tvShow})))})),Te=a(75),Ie=a.n(Te),Ae=Object(n.memo)((function(){var e=Object(n.useState)(N.routes.movie.title),t=Object(M.a)(e,2),a=t[0],c=t[1],o=Object(F.f)();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:Ie.a.page},r.a.createElement("div",{className:Ie.a["page__my-library-caption"]},N.pages.myLibrary.myLibraryCaption),r.a.createElement(we.a,{activeKey:a,onSelect:function(e){c(e),o.push(N.routes.myLibrary.url)}},r.a.createElement(Se.a,{eventKey:N.routes.movie.title,title:N.routes.movie.title},r.a.createElement(Ue,{typeVideo:N.typeVideos.movie,activeTab:a})),r.a.createElement(Se.a,{eventKey:N.routes.tvShow.title,title:N.routes.tvShow.title},r.a.createElement(Ue,{typeVideo:N.typeVideos.tvShow,activeTab:a})))))})),Me=Object(n.memo)((function(){return r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:[N.routes.home.url,N.routes.movie.url,N.routes.movie.paginationUrl]},r.a.createElement(ge,null,r.a.createElement(ee,null))),r.a.createElement(F.a,{exact:!0,path:[N.routes.tvShow.url,N.routes.tvShow.paginationUrl]},r.a.createElement(ge,null,r.a.createElement(Ee,null))),r.a.createElement(F.a,{exact:!0,path:N.routes.login.url},r.a.createElement(ge,null,r.a.createElement(ue,null))),r.a.createElement(F.a,{exact:!0,path:[N.routes.movie.detailsUrl,N.routes.tvShow.detailsUrl]},r.a.createElement(ge,null,r.a.createElement(fe,null))),r.a.createElement(F.a,{exact:!0,path:[N.routes.myLibrary.url,N.routes.myLibrary.paginationUrl]},r.a.createElement(ge,null,r.a.createElement(Ae,null))),r.a.createElement(F.a,{exact:!0,path:[N.routes.search.searchUrl]},r.a.createElement(ge,null,r.a.createElement(Ne,null))),r.a.createElement(F.a,null,r.a.createElement(de,null)))})),Fe=a(24),qe=a(25),De=a(21),Je=a.n(De),ze=Object(n.memo)((function(e){var t=e.cleanUp,a=e.handleLogout,c=J().isAuthenticated;return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{className:Je.a["side-bar"]},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:Je.a.logo},r.a.createElement(Fe.a,{size:"lg",icon:qe.c}))),c?r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement(R.b,{activeclassname:"text-body font-weight-bold",className:"text-muted pr-3",onClick:t,to:N.routes.home.url},r.a.createElement(Fe.a,{size:"lg",icon:qe.d}),r.a.createElement("span",{className:Je.a["nav-text"]},N.routes.home.title))),r.a.createElement("li",null,r.a.createElement(R.b,{activeclassname:"text-body font-weight-bold",className:"text-muted pr-3",onClick:t,to:N.routes.movie.url},r.a.createElement(Fe.a,{size:"lg",icon:qe.b}),r.a.createElement("span",{className:Je.a["nav-text"]},N.routes.movie.title))),r.a.createElement("li",null,r.a.createElement(R.b,{activeclassname:"text-body font-weight-bold",className:"text-muted pr-3",onClick:t,to:N.routes.tvShow.url},r.a.createElement(Fe.a,{size:"lg",icon:qe.g}),r.a.createElement("span",{className:Je.a["nav-text"]},N.routes.tvShow.title))),r.a.createElement("li",null,r.a.createElement(R.b,{activeclassname:"text-body font-weight-bold",className:"text-muted pr-3",onClick:t,to:N.routes.myLibrary.url},r.a.createElement(Fe.a,{size:"lg",icon:qe.a}),r.a.createElement("span",{className:Je.a["nav-text"]},N.routes.myLibrary.title))),r.a.createElement("li",{onClick:a},r.a.createElement(R.b,{activeclassname:"text-body font-weight-bold",className:"text-muted pr-3",onClick:t,to:N.routes.login.url},r.a.createElement(Fe.a,{size:"lg",icon:qe.f}),r.a.createElement("span",{className:Je.a["nav-text"]},N.routes.logout.title)))):r.a.createElement("li",{onClick:a},r.a.createElement(R.b,{activeclassname:"text-body font-weight-bold",className:"text-muted pr-3",onClick:t,to:N.routes.login.url},r.a.createElement(Fe.a,{size:"lg",icon:qe.e}),r.a.createElement("span",{className:Je.a["nav-text"]},N.routes.login.title))))))})),Re=a(48),He=a(255),Ke=a(253),We=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];clearTimeout(a),a=setTimeout((function(){a=null,e.apply(void 0,r)}),t)}},Be=a(77),Qe=a.n(Be),Ge=Object(n.memo)((function(){var e=J().userSearchString,t=Object(n.useState)(""),a=Object(M.a)(t,2)[1],c=Object(n.useCallback)(We((function(t){return e(t)}),N.delay),[]);return r.a.createElement(n.Fragment,null,r.a.createElement(He.a,{inline:!0,className:"pr-3"},r.a.createElement(Ke.a,{className:Qe.a["search-box"]},r.a.createElement(Ke.a.Prepend,null,r.a.createElement(Ke.a.Text,{id:"pre-text"},"@")),r.a.createElement(ne.a,{type:"text",placeholder:"Search",className:Qe.a["search-box__input"],name:"search","aria-describedby":"pre-text",onChange:function(e){var t=e.target.value;a(t),c(t)}}))))})),Xe=a(116),Ye=a.n(Xe),Ze=Object(n.memo)((function(e){var t=e.cleanUp,a=e.handleLogout,c=J().isAuthenticated;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:Ye.a["nav-bar"]},c?r.a.createElement(n.Fragment,null,r.a.createElement(Ge,null),r.a.createElement(Re.a,{className:"pt-1",onClick:a},r.a.createElement(R.b,{activeclassname:"text-body font-weight-bold",className:"text-muted",onClick:t,to:N.routes.login.url},N.routes.logout.title))):r.a.createElement(Re.a,null,r.a.createElement(R.b,{activeclassname:"text-body font-weight-bold",className:"text-muted",onClick:t,to:N.routes.login.url},N.routes.login.title))))})),$e=Object(n.memo)((function(){var e=J(),t=e.userHasAuthenticated,a=e.userSearchString,c=Object(F.f)(),o=function(){a("")},s=function(){var e=Object(y.a)(f.a.mark((function e(){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!1),e.next=3,k.getItem(N.keyLocalStorage);case 3:return a=e.sent,(n=JSON.parse(a))?n.isAuth=!1:n={isAuth:!1},e.next=8,k.setItem(N.keyLocalStorage,JSON.stringify(n));case 8:c.push("".concat(N.routes.login.url));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(Ze,{cleanUp:o,handleLogout:s}),r.a.createElement(ze,{cleanUp:o,handleLogout:s}))})),et=a(14),tt=Object(et.a)(),at=Object(n.memo)((function(){var e=Object(n.useState)(k.getItem(N.keyLocalStorage)),t=Object(M.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({page:0,totalPage:0}),s=Object(M.a)(o,2),i=s[0],l=s[1],u=Object(n.useState)(""),m=Object(M.a)(u,2),p=m[0],d=m[1],g=Object(n.useState)({page:0,totalPage:0}),v=Object(M.a)(g,2),h=v[0],b=v[1],_=Object(n.useState)(!0),E=Object(M.a)(_,2),w=E[0],S=E[1],O=Object(n.useState)([]),x=Object(M.a)(O,2),j=x[0],L=x[1],P=Object(n.useState)([]),V=Object(M.a)(P,2),C=V[0],U=V[1],T=Object(n.useState)(""),I=Object(M.a)(T,2),A=I[0],q=I[1];return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getItem(N.keyLocalStorage);case 2:t=e.sent,a=JSON.parse(t),c((null===a||void 0===a?void 0:a.isAuth)||!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement(D.Provider,{value:{tvs:C,movies:j,setTvs:U,runPush:A,tvPages:h,isLoading:w,setMovies:L,setRunPush:q,moviePages:i,setTvPages:b,searchString:p,setIsLoading:S,setMoviePages:l,isAuthenticated:a,userSearchString:d,userHasAuthenticated:c}},r.a.createElement(F.b,{history:tt},r.a.createElement($e,null),r.a.createElement(Me,null)))}));a(246),a(247),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var nt,rt=Object(i.d)(A,nt,i.a.apply(void 0,[l.a].concat(I)));o.a.render(r.a.createElement(s.a,{store:rt},r.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,a){e.exports={"section-card":"style_section-card__428CY","section-card__wrapper":"style_section-card__wrapper__1rvXY","section-card__btn":"style_section-card__btn__MfEA5","section-card__img":"style_section-card__img__1CFbR",bookmark:"style_bookmark__IR6qp","bookmark-input":"style_bookmark-input__1uM2N","bookmark-star":"style_bookmark-star__3GLzL"}},35:function(e,t,a){e.exports={"section-card":"style_section-card__skU5l","section-card__image":"style_section-card__image__2tULK","section-card__description":"style_section-card__description__--Q3u","section-card__graph":"style_section-card__graph__34gtM",page:"style_page__aMjTf"}},70:function(e,t,a){e.exports={page:"style_page__2meyi"}},71:function(e,t,a){e.exports={page:"style_page__3mTtq"}},72:function(e,t,a){e.exports={page:"style_page__2veyq",page__spinner:"style_page__spinner__2q7K-"}},73:function(e,t,a){e.exports={page:"style_page__16OKR","page__search-results-title":"style_page__search-results-title__3QpD2"}},74:function(e,t,a){e.exports={page:"style_page__2sTzc",page__spinner:"style_page__spinner__-3LEb"}},75:function(e,t,a){e.exports={page:"style_page__3DEW3","page__my-library-caption":"style_page__my-library-caption__3vqzI"}},77:function(e,t,a){e.exports={"search-box":"style_search-box__1a5Le","search-box__input":"style_search-box__input__2am79"}}},[[121,1,2]]]);
//# sourceMappingURL=main.3e2982c3.chunk.js.map