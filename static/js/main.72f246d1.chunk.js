(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},46:function(e,t,n){e.exports=n(93)},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),l=n(10),u=n(11),c=n(14),s=n(12),p=n(15),m=n(18),d=n(17),f=n(6),g=n.n(f),v=n(16),h=n(2),b=n(3),y=n.n(b),E=n(1);function x(){var e=Object(h.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return x=function(){return e},e}function j(){var e=Object(h.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return j=function(){return e},e}function O(){var e=Object(h.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return O=function(){return e},e}var w=E.default.div(O()),_=E.default.span(j()),k=E.default.div(x()),S=function(e){var t=e.title,n=e.children;return r.a.createElement(w,null,r.a.createElement(_,null,t),r.a.createElement(k,null,n))};S.prototype={title:y.a.string.isRequited,children:y.a.oneOfType([y.a.arrayOf(y.a.node),y.a.node])};var R=S,T=n(13),M=n.n(T);function U(){var e=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return U=function(){return e},e}var z=E.default.div(U()),P=function(){return r.a.createElement(z,null,r.a.createElement(M.a,null,r.a.createElement("title",null,"Loading | Nomflix")),r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function C(){var e=Object(h.a)(["\n  color: ",";\n"]);return C=function(){return e},e}function N(){var e=Object(h.a)(["\n  width: 100vw;\n  display: fles;\n  justify-content: center;\n"]);return N=function(){return e},e}var q=E.default.div(N()),D=E.default.span(C(),function(e){return e.color}),I=function(e){var t=e.color,n=e.text;return r.a.createElement(q,null,r.a.createElement(D,{color:t},n))};I.prototype={color:y.a.string.isRequired,text:y.a.string.isRequired};var A=I;function B(){var e=Object(h.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return B=function(){return e},e}function F(){var e=Object(h.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return F=function(){return e},e}function V(){var e=Object(h.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  overflow: hidden;\n  &:hover {\n    "," {\n      opacity: 0.3;\n      transform: scale(1.5);\n      transition: transform 0.35s;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return V=function(){return e},e}function L(){var e=Object(h.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return L=function(){return e},e}function J(){var e=Object(h.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return J=function(){return e},e}function G(){var e=Object(h.a)(["\n  font-size: 12px;\n"]);return G=function(){return e},e}var H=E.default.div(G()),K=E.default.div(J(),function(e){return e.bgUrl}),Q=E.default.span(L()),W=E.default.div(V(),K,Q),X=E.default.span(F()),Y=E.default.span(B()),Z=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(m.b,{to:c?"/movie/".concat(t):"/tv/".concat(t)},r.a.createElement(H,null,r.a.createElement(W,null,r.a.createElement(K,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(32)}),r.a.createElement(Q,null,r.a.createElement("span",{role:"img","aria-label":"rating"},o>9?"\u2b50\u2b50\u2b50\u2b50\u2b50":o>=7?"\u2b50\u2b50\u2b50\u2b50\u2605 ":o>=5?"\u2b50\u2b50\u2b50\u2605 \u2605 ":o>=3?"\u2b50\u2b50\u2605 \u2605 \u2605 ":o>=1?"\u2b50\u2605 \u2605 \u2605 \u2605 ":"\u2605 \u2605 \u2605 \u2605 \u2605 ")," ",o,"/10")),r.a.createElement(X,null,i),r.a.createElement(Y,null,l)))};Z.prototype={id:y.a.number.isRequired,imageUrl:y.a.string,title:y.a.string.isRequired,rating:y.a.number,year:y.a.string,isMovie:y.a.bool};var $=Z;function ee(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return ee=function(){return e},e}var te=E.default.div(ee()),ne=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,o=e.error;return i?r.a.createElement(P,null):r.a.createElement(te,null,r.a.createElement(M.a,null,r.a.createElement("title",null,"Movies | Nomflix")),t&&t.length>0&&r.a.createElement(R,{title:"Now Playing"},t.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),a&&a.length>0&&r.a.createElement(R,{title:"Upcoming Movies"},a.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(R,{title:"Popular Movies"},n.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),o&&r.a.createElement(A,{color:"#e74c3c",text:o}))};ne.prototype={nowPlaying:y.a.array,popular:y.a.array,upcoming:y.a.array,loading:y.a.bool.isRequired,error:y.a.string};var ae=ne,re=n(42),ie=n.n(re),oe=n(43);n.n(oe).a.config();var le=ie.a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"5cfb932826da3af3647e453e24eb3291",language:"ko"}}),ue={nowPlaying:function(){return le.get("movie/now_playing")},upcoming:function(){return le.get("movie/upcoming")},popular:function(){return le.get("movie/popular")},movieDetail:function(e){return le.get("movie/".concat(e),{params:{append_to_response:"videos"}})},recommendation:function(e){return le.get("movie/".concat(e,"/recommendations"))},search:function(e){return le.get("search/movie",{params:{query:e}})}},ce={topRated:function(){return le.get("tv/top_rated")},popular:function(){return le.get("tv/popular")},airingToday:function(){return le.get("tv/airing_today")},tvDetail:function(e){return le.get("tv/".concat(e),{params:{append_to_response:"videos"}})},recommendation:function(e){return le.get("tv/".concat(e,"/recommendations"))},search:function(e){return le.get("search/tv",{params:{query:e}})}},se=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){var t,n,a,r,i,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,ue.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,ue.popular();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(ae,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),t}(r.a.Component);function pe(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return pe=function(){return e},e}var me=E.default.div(pe()),de=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return i?r.a.createElement(P,null):r.a.createElement(me,null,r.a.createElement(M.a,null,r.a.createElement("title",null,"TV Shows | Nomflix")),t&&t.length>0&&r.a.createElement(R,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(R,{title:"Popular Shows"},n.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(R,{title:"Airing Today"},a.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(A,{color:"#e74c3c",text:o}))},fe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){var t,n,a,r,i,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,ce.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,ce.airingToday();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find tv information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(de,{topRated:t,popular:n,airingToday:a,loading:i,error:o})}}]),t}(r.a.Component);function ge(){var e=Object(h.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return ge=function(){return e},e}function ve(){var e=Object(h.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return ve=function(){return e},e}function he(){var e=Object(h.a)(["\n  display: flex;\n"]);return he=function(){return e},e}function be(){var e=Object(h.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return be=function(){return e},e}var ye=E.default.header(be()),Ee=E.default.ul(he()),xe=E.default.li(ve(),function(e){return e.current?"#3498db":"transparent"}),je=Object(E.default)(m.b)(ge()),Oe=Object(d.f)(function(e){var t=e.location.pathname;return r.a.createElement(ye,null,r.a.createElement(Ee,null,r.a.createElement(xe,{current:"/"===t},r.a.createElement(je,{to:"/"},"Movies")),r.a.createElement(xe,{current:"/tv"===t},r.a.createElement(je,{to:"/tv"},"TV")),r.a.createElement(xe,{current:"/search"===t},r.a.createElement(je,{to:"/search"},"Search"))))});function we(){var e=Object(h.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return we=function(){return e},e}function _e(){var e=Object(h.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return _e=function(){return e},e}function ke(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return ke=function(){return e},e}var Se=E.default.div(ke()),Re=E.default.form(_e()),Te=E.default.input(we()),Me=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.searchTerm,o=e.handleSubmit,l=e.updateTerm,u=e.error;return r.a.createElement(Se,null,a?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement("title",null,"Search | Nomflix")),r.a.createElement(Re,{onSubmit:o},r.a.createElement(Te,{placeholder:"Search Movies or TV Shows...",value:i,onChange:l})),t&&t.length>0&&r.a.createElement(R,{title:"Movie Results"},t.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(R,{title:"TV Show Results"},n.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),u&&r.a.createElement(A,{color:"#e74c3c",text:u}),n&&0===n.length&&t&&0===t.length&&r.a.createElement(A,{text:"Nothing found",color:"#95a5a6"}))},Ue=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(v.a)(g.a.mark(function e(){var t,a,r,i,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,ue.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,ce.search(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find result."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,this,[[2,14,17,20]])})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error;return r.a.createElement(Me,{movieResults:t,tvResults:n,loading:i,error:o,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function ze(){var e=Object(h.a)(["\n  margin-bottom: 50px;\n  padding-top: 25px;\n"]);return ze=function(){return e},e}function Pe(){var e=Object(h.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  margin-bottom: 10px;\n"]);return Pe=function(){return e},e}function Ce(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(h.a)(["\n  padding-top: 56.25%;\n  position: relative;\n"]);return Ne=function(){return e},e}function qe(){var e=Object(h.a)(["\n  margin: 10px;\n"]);return qe=function(){return e},e}function De(){var e=Object(h.a)([""]);return De=function(){return e},e}function Ie(){var e=Object(h.a)(["\n  margin: 10px 0px;\n"]);return Ie=function(){return e},e}function Ae(){var e=Object(h.a)(["\n  font-size: 32px;\n"]);return Ae=function(){return e},e}function Be(){var e=Object(h.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Be=function(){return e},e}function Fe(){var e=Object(h.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return Fe=function(){return e},e}function Ve(){var e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  margin-bottom: 30px;\n"]);return Ve=function(){return e},e}function Le(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Le=function(){return e},e}function Je(){var e=Object(h.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Je=function(){return e},e}var Ge=E.default.div(Je()),He=E.default.div(Le(),function(e){return e.bgImage}),Ke=E.default.div(Ve()),Qe=E.default.div(Fe(),function(e){return e.bgImage}),We=E.default.div(Be()),Xe=E.default.h3(Ae()),Ye=E.default.div(Ie()),Ze=E.default.span(De()),$e=E.default.span(qe()),et=E.default.div(Ne()),tt=E.default.iframe(Ce()),nt=E.default.p(Pe()),at=E.default.div(ze()),rt=function(e){var t=e.loading,a=e.error,i=e.result,o=e.isMovie,l=e.recommendation;return t?r.a.createElement(P,null):r.a.createElement(Ge,null,r.a.createElement(M.a,null,r.a.createElement("title",null,i.original_title?i.original_title:i.original_name," ","| Nomflix")),r.a.createElement(He,{bgImage:"https://image.tmdb.org/t/p/original".concat(i.backdrop_path)}),r.a.createElement(Ke,null,r.a.createElement(Qe,{bgImage:i.poster_path?"https://image.tmdb.org/t/p/original".concat(i.poster_path):n(32)}),r.a.createElement(We,null,r.a.createElement(Xe,null,i.title?i.title:i.name),r.a.createElement(Ye,null,r.a.createElement(Ze,null,i.release_date?i.release_date.substring(0,4):i.first_air_date.substring(0,4)),r.a.createElement($e,null,"\u2022"),r.a.createElement(Ze,null,i.runtime?i.runtime:i.episode_run_time[0]," min"),r.a.createElement($e,null,"\u2022"),r.a.createElement(Ze,null,i.genres&&i.genres.map(function(e,t){return t===i.genres.length-1?e.name:"".concat(e.name," / ")})),r.a.createElement($e,null,"\u2022"),r.a.createElement(Ze,null,r.a.createElement("span",{role:"img","aria-label":"rating"},i.vote_average>9?"\u2b50\u2b50\u2b50\u2b50\u2b50":i.vote_average>=7?"\u2b50\u2b50\u2b50\u2b50\u2605 ":i.vote_average>=5?"\u2b50\u2b50\u2b50\u2605 \u2605 ":i.vote_average>=3?"\u2b50\u2b50\u2605 \u2605 \u2605 ":i.vote_average>=1?"\u2b50\u2605 \u2605 \u2605 \u2605 ":"\u2605 \u2605 \u2605 \u2605 \u2605 "))),r.a.createElement(nt,null,i.overview),r.a.createElement(et,null,i.videos.results.length>0?r.a.createElement(tt,{key:i.videos.results[0].id,src:"http://www.youtube.com/embed/".concat(i.videos.results[0].key),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):""))),r.a.createElement(at,null,l&&l.length>0&&r.a.createElement(R,{title:"Recommendations"},l.map(function(e,t){return t<6?r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:o?e.title:e.name,rating:e.vote_average,isMovie:o}):""}))),a&&r.a.createElement(A,{color:"#e74c3c",text:a}))};rt.prototype={result:y.a.object};var it=rt,ot=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={loading:!0,error:null,isMovie:a.includes("/movie/"),result:null,recommendation:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){var t,n,a,r,i,o,l;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,l=null,e.prev=7,!r){e.next=14;break}return e.next=11,ue.movieDetail(i);case 11:e.t0=e.sent,e.next=17;break;case 14:return e.next=16,ce.tvDetail(i);case 16:e.t0=e.sent;case 17:if(o=e.t0,!r){e.next=24;break}return e.next=21,ue.recommendation(i);case 21:e.t1=e.sent,e.next=27;break;case 24:return e.next=26,ce.recommendation(i);case 26:e.t1=e.sent;case 27:l=e.t1,e.next=33;break;case 30:e.prev=30,e.t2=e.catch(7),this.setState({error:"Can't find anything."});case 33:return e.prev=33,this.setState({loading:!1,result:o.data,recommendation:l.data.results}),e.finish(33);case 36:case"end":return e.stop()}},e,this,[[7,30,33,36]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.error,a=e.result,i=e.isMovie,o=e.recommendation;return r.a.createElement(it,{loading:t,error:n,result:a,isMovie:i,recommendation:o})}}]),t}(r.a.Component),lt=function(){return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:se}),r.a.createElement(d.b,{path:"/tv",exact:!0,component:fe}),r.a.createElement(d.b,{path:"/search",component:Ue}),r.a.createElement(d.b,{path:"/movie/:id",component:ot}),r.a.createElement(d.b,{path:"/tv/:id",component:ot}),r.a.createElement(d.a,{from:"*",to:"/"}))))},ut=n(44),ct=n.n(ut);function st(){var e=Object(h.a)(["\n    ",";\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    body{\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color: rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 50px;\n    }\n"]);return st=function(){return e},e}var pt=Object(E.createGlobalStyle)(st(),ct.a),mt=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(lt,null),r.a.createElement(pt,null))}}]),t}(a.Component);o.a.render(r.a.createElement(mt,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.72f246d1.chunk.js.map