(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{APPL:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),i=t("FTgb"),c=t("jRgp"),a=function(){function n(n){this.$http=n}return n.prototype.onDrashboardHandler=function(){return this.$http.get(c.j).toPromise()},n.ngInjectableDef=e.Tb({factory:function(){return new n(e.Ub(i.a))},token:n,providedIn:"root"}),n}(),s=t("nmDK"),r=function(){function n(n,l){this.$dashboardService=n,this.$member=l,this.displayValueList=["Daily","Weekly","Monthly","Yearly"],this.onDrashboardHandler()}return n.prototype.ngOnInit=function(){this.memberOfTheDayList()},n.prototype.onDrashboardHandler=function(){var n=this;this.$dashboardService.onDrashboardHandler().then((function(l){n.data=l.data}))},n.prototype.memberOfTheDayList=function(){},n}(),g=e.rb({encapsulation:0,styles:[[".row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -10px}.row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{width:calc(100% / 6);padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{width:33%}}@media screen and (max-width:576px){.row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{width:50%}}@media screen and (max-width:450px){.row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]{width:25%;padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]{width:50%}}@media screen and (max-width:576px){.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{width:33.33%;padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{width:50%}}@media screen and (max-width:576px){.row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]{width:50%;padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]{width:100%;padding:0 10px}.dashboard-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap}.counters-listing-cover[_ngcontent-%COMP%]{width:calc(100% - 320px);padding:10px 15px;box-shadow:0 0 3px 2px rgba(0,0,0,.2)}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]{display:flex;justify-content:space-between;text-align:center;flex-wrap:wrap}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]{width:200px;margin:10px 0;display:flex;align-items:center;justify-content:space-between;padding:17px 15px;box-shadow:0 4px 6px 0 rgba(85,85,85,.08),0 1px 20px 0 rgba(0,0,0,.07),0 1px 11px 0 rgba(0,0,0,.07);color:#fff;border-radius:5px}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]   .textual-area[_ngcontent-%COMP%]{width:calc(100% - 55px);text-align:left}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]   .textual-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin-bottom:0}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:50px;height:auto;display:flex;align-items:center;justify-content:flex-end}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:45px}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   i.fa-user[_ngcontent-%COMP%]{font-size:40px}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]:nth-child(3n+1){background-image:linear-gradient(to right,#f94b4a,#940054)}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]:nth-child(3n+2){background-image:linear-gradient(to right,#1887af,#062467)}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]:nth-child(3n+3){background:linear-gradient(to right,#ffa225,#e66d59)}.counters-listing-cover[_ngcontent-%COMP%]   .counter-listing[_ngcontent-%COMP%]   .single-counter[_ngcontent-%COMP%]:hover{-webkit-animation:2s infinite gradient;animation:2s infinite gradient;background-size:200% 200%}.mod-cover[_ngcontent-%COMP%]{width:300px}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]{width:100%;box-shadow:0 0 3px 2px rgba(0,0,0,.2);margin:0 0 20px}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-heading[_ngcontent-%COMP%]{position:relative;padding:15px 20px;box-shadow:0 3px 7px 1px rgba(0,0,0,.1)}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:13px;font-weight:600;margin:0;text-align:center}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-heading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{top:10px;font-size:25px;position:absolute;cursor:pointer}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-heading[_ngcontent-%COMP%]   .material-icons.icon-left[_ngcontent-%COMP%]{left:0}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-heading[_ngcontent-%COMP%]   .material-icons.icon-right[_ngcontent-%COMP%]{right:0}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]{width:100%;padding:10px 20px}@media screen and (max-width:1250px){.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]{padding:10px}}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]{padding:0;margin:0}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:5px 0}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:45px;height:45px;overflow:hidden;border-radius:45px;box-shadow:0 0 2px 1px rgba(0,0,0,.1)}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{margin-left:15px;width:calc(100% - 60px);display:block}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mod-cover[_ngcontent-%COMP%]   .listings[_ngcontent-%COMP%]   .list-section-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12px;color:#868686;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@-webkit-keyframes gradient{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@keyframes gradient{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}"]],data:{}});function d(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,70,"div",[["class","page-dashboard"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,69,"div",[["class","dashboard-content"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,49,"div",[["class","counters-listing-cover"]],null,null,null,null,null)),(n()(),e.tb(3,0,null,null,48,"ul",[["class","counter-listing"]],null,null,null,null,null)),(n()(),e.tb(4,0,null,null,7,"li",[["class","single-counter"]],null,null,null,null,null)),(n()(),e.tb(5,0,null,null,4,"div",[["class","textual-area"]],null,null,null,null,null)),(n()(),e.tb(6,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Nb(7,null,["",""])),(n()(),e.tb(8,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Total Users"])),(n()(),e.tb(10,0,null,null,1,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),e.tb(11,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-user"]],null,null,null,null,null)),(n()(),e.tb(12,0,null,null,7,"li",[["class","single-counter"]],null,null,null,null,null)),(n()(),e.tb(13,0,null,null,4,"div",[["class","textual-area"]],null,null,null,null,null)),(n()(),e.tb(14,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Nb(15,null,["",""])),(n()(),e.tb(16,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["New Users"])),(n()(),e.tb(18,0,null,null,1,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),e.tb(19,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-user"]],null,null,null,null,null)),(n()(),e.tb(20,0,null,null,7,"li",[["class","single-counter"]],null,null,null,null,null)),(n()(),e.tb(21,0,null,null,4,"div",[["class","textual-area"]],null,null,null,null,null)),(n()(),e.tb(22,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["0"])),(n()(),e.tb(24,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Total Journals"])),(n()(),e.tb(26,0,null,null,1,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),e.tb(27,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-user"]],null,null,null,null,null)),(n()(),e.tb(28,0,null,null,7,"li",[["class","single-counter"]],null,null,null,null,null)),(n()(),e.tb(29,0,null,null,4,"div",[["class","textual-area"]],null,null,null,null,null)),(n()(),e.tb(30,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["0"])),(n()(),e.tb(32,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Total Posts"])),(n()(),e.tb(34,0,null,null,1,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),e.tb(35,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-user"]],null,null,null,null,null)),(n()(),e.tb(36,0,null,null,7,"li",[["class","single-counter"]],null,null,null,null,null)),(n()(),e.tb(37,0,null,null,4,"div",[["class","textual-area"]],null,null,null,null,null)),(n()(),e.tb(38,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["0"])),(n()(),e.tb(40,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Total Feeds"])),(n()(),e.tb(42,0,null,null,1,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),e.tb(43,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-user"]],null,null,null,null,null)),(n()(),e.tb(44,0,null,null,7,"li",[["class","single-counter"]],null,null,null,null,null)),(n()(),e.tb(45,0,null,null,4,"div",[["class","textual-area"]],null,null,null,null,null)),(n()(),e.tb(46,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["0"])),(n()(),e.tb(48,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Total Events"])),(n()(),e.tb(50,0,null,null,1,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),e.tb(51,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-user"]],null,null,null,null,null)),(n()(),e.tb(52,0,null,null,18,"div",[["class","mod-cover"]],null,null,null,null,null)),(n()(),e.tb(53,0,null,null,17,"div",[["class","listings"]],null,null,null,null,null)),(n()(),e.tb(54,0,null,null,6,"div",[["class","list-section-heading"]],null,null,null,null,null)),(n()(),e.tb(55,0,null,null,1,"span",[["class","material-icons icon-left"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,["chevron_left"])),(n()(),e.tb(57,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Member of the day"])),(n()(),e.tb(59,0,null,null,1,"span",[["class","material-icons icon-right"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,["chevron_right"])),(n()(),e.tb(61,0,null,null,9,"div",[["class","list-section-body"]],null,null,null,null,null)),(n()(),e.tb(62,0,null,null,8,"ul",[["class","users-listing"]],null,null,null,null,null)),(n()(),e.tb(63,0,null,null,7,"li",[["class","single-user"]],null,null,null,null,null)),(n()(),e.tb(64,0,null,null,1,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),e.tb(65,0,null,null,0,"img",[["alt","Profile"],["src","../../../../../assets/images/img_avatar3.png"]],null,null,null,null,null)),(n()(),e.tb(66,0,null,null,4,"div",[["class","textual-cover"]],null,null,null,null,null)),(n()(),e.tb(67,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Angel Markel"])),(n()(),e.tb(69,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["July 21, 2020"]))],null,(function(n,l){var t=l.component;n(l,7,0,null==t.data?null:t.data.totalUsers),n(l,15,0,null==t.data?null:t.data.newUser)}))}function b(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"app-dashboard",[],null,null,null,d,g)),e.sb(1,114688,null,0,r,[a,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var p=e.pb("app-dashboard",r,b,{},{},[]),P=t("t68o"),C=t("zbXB"),M=t("xYTU"),O=t("atCQ"),_=t("Qez1"),h=t("NcP4"),x=t("Ip0R"),m=t("M2Lx"),f=t("eDkP"),D=t("Fzqc"),v=t("o3x0"),w=t("jQLj"),y=t("Wf4p"),k=t("dWZg"),j=t("gIcY"),N=t("t/Na"),z=t("iiAa"),T=t("vARd"),S=t("ESfg"),F=t("ZYCi"),q=t("jy+X"),X=t("AfXx"),Y=t("zcJq"),A=t("FKl+"),K=t("v9Dh"),L=t("ZYjt"),R=t("uGex"),U=t("4epT"),E=t("OkvK"),H=function(){return function(){}}(),I=t("FVSy"),J=t("seP3"),$=t("UodH"),G=t("4c35"),Z=t("qAlS"),B=t("lLAP"),Q=t("y4qS"),V=t("BHnd"),W=t("u7R8"),nn=t("/VYK"),ln=t("b716"),tn=t("faKS"),en=t("SMsm"),un=t("DE/f"),on=t("FpXt"),cn=t("YhbO"),an=t("jlZm"),sn=function(){return function(){}}(),rn=t("gdGC"),gn=t("de3e"),dn=t("RrX5"),bn=t("CaoY");t.d(l,"DashboardModuleNgFactory",(function(){return pn}));var pn=e.qb(u,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[o.a,p,P.a,C.b,C.a,M.a,M.b,O.a,_.a,h.a]],[3,e.j],e.x]),e.Db(4608,x.n,x.m,[e.u,[2,x.E]]),e.Db(4608,m.c,m.c,[]),e.Db(4608,f.c,f.c,[f.i,f.e,e.j,f.h,f.f,e.r,e.z,x.d,D.b,[2,x.h]]),e.Db(5120,f.j,f.k,[f.c]),e.Db(5120,v.c,v.d,[f.c]),e.Db(135680,v.e,v.e,[f.c,e.r,[2,x.h],[2,v.b],v.c,[3,v.e],f.e]),e.Db(4608,w.i,w.i,[]),e.Db(5120,w.a,w.b,[f.c]),e.Db(4608,y.c,y.x,[[2,y.h],k.a]),e.Db(4608,j.w,j.w,[]),e.Db(4608,j.e,j.e,[]),e.Db(4608,y.d,y.d,[]),e.Db(4608,N.j,N.p,[x.d,e.B,N.n]),e.Db(4608,N.q,N.q,[N.j,N.o]),e.Db(4608,z.a,z.a,[v.e,T.b]),e.Db(5120,N.a,(function(n,l,t,e){return[n,new S.a(l,t,e)]}),[N.q,F.o,z.a,q.a]),e.Db(4608,N.m,N.m,[]),e.Db(6144,N.k,null,[N.m]),e.Db(4608,N.i,N.i,[N.k]),e.Db(6144,N.b,null,[N.i]),e.Db(4608,N.g,N.l,[N.b,e.r]),e.Db(4608,N.c,N.c,[N.g]),e.Db(4608,X.a,X.a,[T.b]),e.Db(4608,i.a,i.a,[N.c,q.a]),e.Db(4608,Y.a,Y.a,[F.o,z.a]),e.Db(4608,A.a,A.a,[F.o,z.a,i.a]),e.Db(5120,K.b,K.c,[f.c]),e.Db(4608,L.e,y.e,[[2,y.i],[2,y.n]]),e.Db(5120,R.a,R.b,[f.c]),e.Db(5120,U.c,U.a,[[3,U.c]]),e.Db(4608,x.e,x.e,[e.u]),e.Db(5120,E.d,E.a,[[3,E.d]]),e.Db(4608,a,a,[i.a]),e.Db(1073742336,x.c,x.c,[]),e.Db(1073742336,F.s,F.s,[[2,F.x],[2,F.o]]),e.Db(1073742336,H,H,[]),e.Db(1073742336,D.a,D.a,[]),e.Db(1073742336,y.n,y.n,[[2,y.f],[2,L.f]]),e.Db(1073742336,I.c,I.c,[]),e.Db(1073742336,m.d,m.d,[]),e.Db(1073742336,J.e,J.e,[]),e.Db(1073742336,k.b,k.b,[]),e.Db(1073742336,y.w,y.w,[]),e.Db(1073742336,$.c,$.c,[]),e.Db(1073742336,G.g,G.g,[]),e.Db(1073742336,Z.c,Z.c,[]),e.Db(1073742336,f.g,f.g,[]),e.Db(1073742336,v.i,v.i,[]),e.Db(1073742336,B.a,B.a,[]),e.Db(1073742336,w.j,w.j,[]),e.Db(1073742336,y.y,y.y,[]),e.Db(1073742336,y.p,y.p,[]),e.Db(1073742336,j.v,j.v,[]),e.Db(1073742336,j.j,j.j,[]),e.Db(1073742336,j.s,j.s,[]),e.Db(1073742336,Q.p,Q.p,[]),e.Db(1073742336,V.m,V.m,[]),e.Db(1073742336,W.a,W.a,[]),e.Db(1073742336,nn.c,nn.c,[]),e.Db(1073742336,ln.c,ln.c,[]),e.Db(1073742336,T.e,T.e,[]),e.Db(1073742336,N.e,N.e,[]),e.Db(1073742336,N.d,N.d,[]),e.Db(1073742336,tn.a,tn.a,[]),e.Db(1073742336,en.c,en.c,[]),e.Db(1073742336,un.a,un.a,[]),e.Db(1073742336,on.a,on.a,[]),e.Db(1073742336,K.e,K.e,[]),e.Db(1073742336,y.u,y.u,[]),e.Db(1073742336,y.s,y.s,[]),e.Db(1073742336,R.d,R.d,[]),e.Db(1073742336,U.d,U.d,[]),e.Db(1073742336,cn.c,cn.c,[]),e.Db(1073742336,an.a,an.a,[]),e.Db(1073742336,sn,sn,[]),e.Db(1073742336,rn.a,rn.a,[]),e.Db(1073742336,gn.d,gn.d,[]),e.Db(1073742336,gn.c,gn.c,[]),e.Db(1073742336,E.e,E.e,[]),e.Db(1073742336,dn.a,dn.a,[]),e.Db(1073742336,bn.a,bn.a,[]),e.Db(1073742336,u,u,[]),e.Db(1024,F.m,(function(){return[[{path:"",component:r}]]}),[]),e.Db(256,y.g,y.k,[]),e.Db(256,N.n,"XSRF-TOKEN",[]),e.Db(256,N.o,"X-XSRF-TOKEN",[])])}))},gdGC:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){return function(){}}()}}]);