(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"I+z5":function(t,n,i){"use strict";i.d(n,"a",(function(){return l})),i.d(n,"b",(function(){return a}));var o=i("mrSG"),e=i("FTgb"),r=i("jRgp"),u=i("CcnG"),l=function(){function t(t){this.$http=t}return t.prototype.queryData=function(t){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(n){return[2,this.$http.get(r.W,t).toPromise()]}))}))},t.prototype.updateStatus=function(t){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(n){switch(n.label){case 0:return[4,this.$http.delete(Object(r.i)(t)).toPromise()];case 1:return[2,n.sent()]}}))}))},t.prototype.add=function(t){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(n){return[2,this.$http.post(r.W,t).toPromise()]}))}))},t.prototype.updateDetails=function(t){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(n){return[2,this.$http.get(r.X,{notificationId:t}).toPromise()]}))}))},t.ngInjectableDef=u.fc({factory:function(){return new t(u.gc(e.a))},token:t,providedIn:"root"}),t}(),a=function(){function t(t){this.$notification=t}return t.prototype.resolve=function(t){return this.$notification.updateDetails(t.params.id).catch((function(t){if(t)return null}))},t}()},tSPE:function(t,n,i){"use strict";i.r(n);var o=i("CcnG"),e=function(){return function(){}}(),r=i("pMnS"),u=i("ZYCi"),l=function(){function t(){}return t.prototype.ngOnInit=function(){},t}(),a=o.Db({encapsulation:0,styles:[[""]],data:{}});function c(t){return o.bc(0,[(t()(),o.Fb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o.Eb(1,212992,null,0,u.t,[u.b,o.ab,o.l,[8,null],o.i],null,null)],(function(t,n){t(n,1,0)}),null)}function f(t){return o.bc(0,[(t()(),o.Fb(0,0,null,null,1,"app-notification",[],null,null,null,c,a)),o.Eb(1,114688,null,0,l,[],null,null)],(function(t,n){t(n,1,0)}),null)}var s=o.Bb("app-notification",l,f,{},{},[]),d=i("Ip0R"),p=i("I+z5"),h=i("FTgb"),b=(i("+7By"),function(){return Promise.all([i.e(1),i.e(2),i.e(3),i.e(4),i.e(5),i.e(45)]).then(i.bind(null,"yJKw")).then((function(t){return t.NotificationListingModuleNgFactory}))}),g=function(){return Promise.all([i.e(19),i.e(0),i.e(79)]).then(i.bind(null,"5jm1")).then((function(t){return t.AddNotificationModuleNgFactory}))},P=function(){return Promise.all([i.e(19),i.e(48)]).then(i.bind(null,"jaAz")).then((function(t){return t.NotificationDetailsModuleNgFactory}))},_=function(){return function(){}}();i.d(n,"NotificationsModuleNgFactory",(function(){return v}));var v=o.Cb(e,[],(function(t){return o.Ob([o.Pb(512,o.l,o.nb,[[8,[r.a,s]],[3,o.l],o.F]),o.Pb(4608,d.n,d.m,[o.B,[2,d.E]]),o.Pb(4608,p.a,p.a,[h.a]),o.Pb(4608,p.b,p.b,[p.a]),o.Pb(1073742336,d.c,d.c,[]),o.Pb(1073742336,u.s,u.s,[[2,u.x],[2,u.o]]),o.Pb(1073742336,_,_,[]),o.Pb(1073742336,e,e,[]),o.Pb(1024,u.m,(function(){return[[{path:"",component:l,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",loadChildren:b},{path:"add",loadChildren:g},{path:":id/details",resolve:{notificationData:p.b},loadChildren:P}]}]]}),[])])}))}}]);