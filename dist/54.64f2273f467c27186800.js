(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{q5Ad:function(t,n,r){"use strict";r.r(n);var e=r("CcnG"),u=function(){return function(){}}(),o=r("pMnS"),i=r("ZYCi"),l=function(){function t(){}return t.prototype.ngOnInit=function(){},t}(),a=e.rb({encapsulation:0,styles:[[""]],data:{}});function c(t){return e.Pb(0,[(t()(),e.tb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.sb(1,212992,null,0,i.t,[i.b,e.P,e.j,[8,null],e.h],null,null)],(function(t,n){t(n,1,0)}),null)}function s(t){return e.Pb(0,[(t()(),e.tb(0,0,null,null,1,"app-forum",[],null,null,null,c,a)),e.sb(1,114688,null,0,l,[],null,null)],(function(t,n){t(n,1,0)}),null)}var f=e.pb("app-forum",l,s,{},{},[]),d=r("Ip0R"),h=r("z3zx"),p=r("FTgb"),b=r("iiAa"),m=(r("+7By"),function(){return Promise.all([r.e(1),r.e(2),r.e(3),r.e(4),r.e(5),r.e(14),r.e(73)]).then(r.bind(null,"rDf9")).then((function(t){return t.ForumListingModuleNgFactory}))}),y=function(){return Promise.all([r.e(3),r.e(0),r.e(20)]).then(r.bind(null,"IfBj")).then((function(t){return t.AddForumModuleNgFactory}))},v=function(){return Promise.all([r.e(3),r.e(0),r.e(20)]).then(r.bind(null,"IfBj")).then((function(t){return t.AddForumModuleNgFactory}))},_=function(){return Promise.all([r.e(0),r.e(38)]).then(r.bind(null,"/DIQ")).then((function(t){return t.ForumDetailsModuleNgFactory}))},g=function(){return function(){}}();r.d(n,"ForumModuleNgFactory",(function(){return D}));var D=e.qb(u,[],(function(t){return e.Cb([e.Db(512,e.j,e.bb,[[8,[o.a,f]],[3,e.j],e.x]),e.Db(4608,d.n,d.m,[e.u,[2,d.E]]),e.Db(4608,h.a,h.a,[p.a,b.a]),e.Db(4608,h.b,h.b,[h.a,i.o]),e.Db(1073742336,d.c,d.c,[]),e.Db(1073742336,i.s,i.s,[[2,i.x],[2,i.o]]),e.Db(1073742336,g,g,[]),e.Db(1073742336,u,u,[]),e.Db(1024,i.m,(function(){return[[{path:"",component:l,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",loadChildren:m},{path:"add",loadChildren:y},{path:"edit/:id",resolve:{forumData:h.b},loadChildren:v},{path:":id/details",resolve:{forumData:h.b},loadChildren:_}]}]]}),[])])}))},z3zx:function(t,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return c}));var e=r("mrSG"),u=r("FTgb"),o=r("iiAa"),i=r("jRgp"),l=r("CcnG"),a=function(){function t(t,n){this.$http=t,this.$utilityService=n}return t.prototype.queryData=function(t){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(n){return[2,this.$http.get(i.I,t).toPromise()]}))}))},t.prototype.updateStatus=function(t,n){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(r){switch(r.label){case 0:return[4,this.$http.patch(Object(i.e)(t,n),{}).toPromise()];case 1:return[2,r.sent()]}}))}))},t.prototype.add=function(t){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(n){return[2,this.$http.post(i.i,t).toPromise()]}))}))},t.prototype.edit=function(t,n){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(r){return[2,this.$http.patch(Object(i.x)(t),n).toPromise()]}))}))},t.prototype.updateDetails=function(t,n){return e.__awaiter(this,void 0,void 0,(function(){var r;return e.__generator(this,(function(e){return r={userType:n},[2,this.$http.get(Object(i.J)(t),r).toPromise()]}))}))},t.ngInjectableDef=l.Tb({factory:function(){return new t(l.Ub(u.a),l.Ub(o.a))},token:t,providedIn:"root"}),t}(),c=function(){function t(t,n){this.$daily=t,this.$route=n}return t.prototype.resolve=function(t){return this.$daily.updateDetails(t.params.id,t.queryParams.type).catch((function(t){if(t)return null}))},t}()}}]);