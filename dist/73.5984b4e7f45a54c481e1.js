(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"/izx":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),o=u("Ip0R"),c=u("mrSG"),r=u("HdJX"),a=function(){function l(l,n,u){this.$http=l,this.$route=n,this.$router=u,this.types=["1","2","4","5"]}return l.prototype.ngOnInit=function(){this.type=this.$route.snapshot.queryParams.type,this.type&&this.types.includes(this.type)?this.getContentDetails():this.$router.navigate(["not-found"])},l.prototype.getContentDetails=function(){return c.__awaiter(this,void 0,void 0,(function(){var l;return c.__generator(this,(function(n){switch(n.label){case 0:return[4,this.$http.onGetContentDetails(this.type)];case 1:return(l=n.sent())&&l.data.description&&(this.content=l.data.description),[2]}}))}))},l}(),b=u("ZYCi"),s=t.rb({encapsulation:0,styles:[["[_nghost-%COMP%]   .page-content[_ngcontent-%COMP%]{max-width:95%;margin:20px auto;width:800px;box-shadow:0 0 4px 1px rgba(0,0,0,.4);border-radius:5px;padding:10px 20px}[_nghost-%COMP%]   .page-content[_ngcontent-%COMP%]   .content-heading[_ngcontent-%COMP%]{text-align:center;font-weight:700;letter-spacing:1px}"]],data:{}});function p(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function h(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,p)),t.sb(2,540672,null,0,o.s,[t.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),t.ib(0,null,null,0))],(function(l,n){l(n,2,0,t.Fb(n.parent,13))}),null)}function g(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function f(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,g)),t.sb(2,540672,null,0,o.s,[t.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),t.ib(0,null,null,0))],(function(l,n){l(n,2,0,t.Fb(n.parent,11))}),null)}function d(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function P(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,d)),t.sb(2,540672,null,0,o.s,[t.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),t.ib(0,null,null,0))],(function(l,n){l(n,2,0,t.Fb(n.parent,14))}),null)}function m(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function w(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,m)),t.sb(2,540672,null,0,o.s,[t.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),t.ib(0,null,null,0))],(function(l,n){l(n,2,0,t.Fb(n.parent,12))}),null)}function C(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"h1",[["class","content-heading"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Terms and conditions"])),(l()(),t.tb(2,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.component.content)}))}function y(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"h1",[["class","content-heading"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["About Us"])),(l()(),t.tb(2,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.component.content)}))}function T(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"h1",[["class","content-heading"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Privacy Policy"])),(l()(),t.tb(2,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.component.content)}))}function v(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"h1",[["class","content-heading"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Contact Us"])),(l()(),t.tb(2,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.component.content)}))}function M(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,14,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,9,null,null,null,null,null,null,null)),t.sb(2,16384,null,0,o.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t.ib(16777216,null,null,1,null,h)),t.sb(4,278528,null,0,o.q,[t.P,t.M,o.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.ib(16777216,null,null,1,null,f)),t.sb(6,278528,null,0,o.q,[t.P,t.M,o.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.ib(16777216,null,null,1,null,P)),t.sb(8,278528,null,0,o.q,[t.P,t.M,o.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.ib(16777216,null,null,1,null,w)),t.sb(10,278528,null,0,o.q,[t.P,t.M,o.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.ib(0,[["termsTemplate",2]],null,0,null,C)),(l()(),t.ib(0,[["aboutusTemplate",2]],null,0,null,y)),(l()(),t.ib(0,[["privacyTemplate",2]],null,0,null,T)),(l()(),t.ib(0,[["contactUsTemplate",2]],null,0,null,v))],(function(l,n){var u=n.component;l(n,2,0,!0),l(n,4,0,1==u.type),l(n,6,0,2==u.type),l(n,8,0,4==u.type),l(n,10,0,5==u.type)}),null)}function x(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-content",[],null,null,null,M,s)),t.sb(1,114688,null,0,a,[r.a,b.a,b.o],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.pb("app-content",a,x,{},{},[]),S=function(){return function(){}}();u.d(n,"ContentModuleNgFactory",(function(){return D}));var D=t.qb(e,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[i.a,O]],[3,t.j],t.x]),t.Db(4608,o.n,o.m,[t.u,[2,o.E]]),t.Db(1073742336,o.c,o.c,[]),t.Db(1073742336,b.s,b.s,[[2,b.x],[2,b.o]]),t.Db(1073742336,S,S,[]),t.Db(1073742336,e,e,[]),t.Db(1024,b.m,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);