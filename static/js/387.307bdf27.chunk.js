"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,c,i,o,u,p,s=e(5861),f=e(9439),d=e(7757),h=e.n(d),l=e(2791),x=e(7689),g=e(4390),m=e(168),v=e(6444),w=v.ZP.div(r||(r=(0,m.Z)(["\n  margin-top: 30px;\n  padding-right: 80px;\n  padding-left: 80px;\n  padding-bottom: 40px;\n"]))),Z=v.ZP.h3(a||(a=(0,m.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n  text-align: center;\n"]))),k=v.ZP.ul(c||(c=(0,m.Z)(["\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  flex-wrap: wrap;\n"]))),b=v.ZP.li(i||(i=(0,m.Z)(["\n  width: calc((100% - 4 * 40px) / 5);\n  height: 400px;\n  word-wrap: break-word;\n"]))),y=v.ZP.div(o||(o=(0,m.Z)(["\n  margin-top: 20px;\n  max-width: 220px;\n"]))),_=v.ZP.h3(u||(u=(0,m.Z)(["\n  margin-bottom: 10px;\n"]))),j=v.ZP.p(p||(p=(0,m.Z)(["\n  margin: 30px auto 0 auto;\n  text-align: center;\n  padding: 20px;\n  background-color: #f8f8f8;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n"]))),P=e(184),S=function(){var n=(0,x.UO)().movieId,t=(0,l.useState)([]),e=(0,f.Z)(t,2),r=e[0],a=e[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,s.Z)(h().mark((function t(){var e,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,g.uV)(n);case 3:e=t.sent,r=e.cast,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,P.jsxs)(w,{children:[(0,P.jsx)(Z,{children:"Cast"})," ",r.length?(0,P.jsx)(k,{children:r.map((function(n){return(0,P.jsxs)(b,{className:"cast-card",children:[n.profile_path?(0,P.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name," profile")}):(0,P.jsx)("img",{src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(n.name," profile")}),(0,P.jsxs)(y,{children:[(0,P.jsx)(_,{children:n.name}),(0,P.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))}):(0,P.jsx)(j,{children:"We don't have any information about the cast yet."})]})}},4390:function(n,t,e){e.d(t,{E3:function(){return s},Hx:function(){return h},Mc:function(){return f},_k:function(){return p},uV:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),o="https://api.themoviedb.org",u="28027c59bdca8e7ee28a28ecaf4d25ca",p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"}/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.307bdf27.chunk.js.map