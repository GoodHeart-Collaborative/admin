(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+xuN":function(n,t,l){"use strict";l.d(t,"a",(function(){return e}));var e=function(){function n(n){this.datePipe=n}return n.prototype.transform=function(n,t){return n?this.datePipe.transform(n,"mediumDate"):"-"},n}()},gdGC:function(n,t,l){"use strict";l.d(t,"a",(function(){return e}));var e=function(){return function(){}}()},u0D8:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),i=l("Zx0a"),c=l("EB96"),o=l("EgcD"),a=function(){function n(n,t,l,e){this.$common=l,this.$matDailog=e,this.adviceDetails=n.snapshot.data.dailyData.data,t.replace(this.adviceDetails.id,this.adviceDetails.title)}return n.prototype.ngOnInit=function(){this.getLikeCommentHandler()},n.prototype.getLikeCommentHandler=function(){var n=this;this.$common.onCommentHandler({pageNo:1,limit:100,postId:"5f0ff1e7fd8bfe1c64e69f4e"}).then((function(t){n.comments=t.data.list,console.log(n.comments)}))},n.prototype.onlikeHandler=function(n){this.$matDailog.open(o.a,{width:"500px",data:n}).afterClosed().subscribe()},n}(),u=function(){return function(){}}(),g=l("pMnS"),s=l("t68o"),d=l("/Y/u"),r=l("o2yI"),p=l("Ip0R"),C=l("d8nK"),P=l("+xuN"),O=l("ZYCi"),M=l("o3x0"),_=e.rb({encapsulation:0,styles:[[".page-daily-advice-details[_ngcontent-%COMP%]{padding:15px 20px;box-shadow:0 0 3px 2px rgba(0,0,0,.2)}.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{display:flex;align-items:stretch;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:576px){.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{flex-direction:column}}.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 330px);word-break:break-word;display:flex;flex-direction:column;justify-content:space-between}@media screen and (max-width:992px){.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 280px)}}.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px;font-size:14px}@media screen and (max-width:576px){.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:100%;order:1}.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}}.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:310px;height:100%!important;display:flex;align-items:flex-start;justify-content:flex-end}.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:auto;height:auto;box-shadow:0 0 3px 1px rgba(0,0,0,.6)}@media screen and (max-width:992px){.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:260px}}@media screen and (max-width:576px){.page-daily-advice-details[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:100%;justify-content:center;order:0;margin-bottom:20px}}.page-daily-advice-details[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:10px 15px;margin:20px -16px;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc}.page-daily-advice-details[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer}.page-daily-advice-details[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]{padding:0;margin:0}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;padding:5px 0}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:35px;height:35px;overflow:hidden;border-radius:35px;box-shadow:0 0 2px 1px rgba(0,0,0,.1)}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{padding-left:10px;width:calc(100% - 35px);display:block}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;position:relative;padding-right:100px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .more-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;cursor:pointer}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;font-size:10px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12px;color:#868686;word-break:break-all}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{font-size:10px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]{width:100%;padding:3px 0 3px 45px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{padding:3px 0;width:100%}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:25px;height:25px}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{padding-left:10px;width:calc(100% - 25px)}.page-daily-advice-details[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-all}"]],data:{}});function m(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,18,"li",[["class","single-user"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,17,"div",[["class","li-content"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,3,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),e.tb(3,0,null,null,2,"img",[["alt","Profile"]],[[8,"src",4]],null,null,null,null)),e.Jb(4,2),e.Hb(131072,p.b,[e.h]),(n()(),e.tb(6,0,null,null,12,"div",[["class","textual-cover"]],null,null,null,null,null)),(n()(),e.tb(7,0,null,null,4,"h4",[],null,null,null,null,null)),(n()(),e.Nb(8,null,[""," "," "])),(n()(),e.tb(9,0,null,null,2,"p",[["class","comment-time"]],null,null,null,null,null)),(n()(),e.Nb(10,null,["",""])),e.Jb(11,1),(n()(),e.tb(12,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(13,null,["",""])),(n()(),e.tb(14,0,null,null,4,"div",[["class","like-cover"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.onlikeHandler(null==n.context.$implicit?null:n.context.$implicit._id)&&e),e}),null,null)),(n()(),e.tb(15,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,["thumb_up"])),(n()(),e.tb(17,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(18,null,["",""]))],null,(function(n,t){var l=e.Ob(t,3,0,e.Fb(t,5).transform(e.Ob(t,3,0,n(t,4,0,e.Fb(t.parent,1),null==t.context.$implicit?null:null==t.context.$implicit.users?null:t.context.$implicit.users.profilePicUrl[0],"USER"))));n(t,3,0,l),n(t,8,0,(null==t.context.$implicit?null:null==t.context.$implicit.users?null:t.context.$implicit.users.firstName)||"String",(null==t.context.$implicit?null:null==t.context.$implicit.users?null:t.context.$implicit.users.lastName)||"");var i=e.Ob(t,10,0,n(t,11,0,e.Fb(t.parent,2),null==t.context.$implicit?null:t.context.$implicit.created));n(t,10,0,i),n(t,13,0,null==t.context.$implicit?null:t.context.$implicit.comment),n(t,18,0,null==t.context.$implicit?null:t.context.$implicit.likeCount)}))}function b(n){return e.Pb(0,[e.Hb(0,p.e,[e.u]),e.Hb(0,C.a,[]),e.Hb(0,P.a,[p.e]),(n()(),e.tb(3,0,null,null,30,"div",[["class","page-daily-advice-details"]],null,null,null,null,null)),(n()(),e.tb(4,0,null,null,29,"div",[["class","daily-advice-details-content"]],null,null,null,null,null)),(n()(),e.tb(5,0,null,null,13,"div",[["class","row-1"]],null,null,null,null,null)),(n()(),e.tb(6,0,null,null,8,"div",[["class","textual-detail"]],null,null,null,null,null)),(n()(),e.tb(7,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(8,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Nb(9,null,["",""])),(n()(),e.tb(10,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(11,null,["",""])),(n()(),e.tb(12,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),e.Nb(13,null,["Posted on: ",""])),e.Jb(14,2),(n()(),e.tb(15,0,null,null,3,"div",[["class","image-detail"]],null,null,null,null,null)),(n()(),e.tb(16,0,null,null,2,"img",[],[[8,"src",4]],null,null,null,null)),e.Jb(17,2),e.Hb(131072,p.b,[e.h]),(n()(),e.tb(19,0,null,null,10,"div",[["class","row-2"]],null,null,null,null,null)),(n()(),e.tb(20,0,null,null,4,"div",[["class","like-cover"]],null,[[null,"click"]],(function(n,t,l){var e=!0,i=n.component;return"click"===t&&(e=!1!==i.onlikeHandler(i.adviceDetails.id)&&e),e}),null,null)),(n()(),e.tb(21,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,["thumb_up"])),(n()(),e.tb(23,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(24,null,["",""])),(n()(),e.tb(25,0,null,null,4,"div",[["class","like-cover"]],null,null,null,null,null)),(n()(),e.tb(26,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,["comment"])),(n()(),e.tb(28,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(29,null,["",""])),(n()(),e.tb(30,0,null,null,3,"div",[["class","row-3"]],null,null,null,null,null)),(n()(),e.tb(31,0,null,null,2,"ul",[["class","users-listing"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,m)),e.sb(33,278528,null,0,p.k,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,33,0,t.component.comments)}),(function(n,t){var l=t.component;n(t,9,0,null==l.adviceDetails?null:l.adviceDetails.title),n(t,11,0,null==l.adviceDetails?null:l.adviceDetails.description);var i=e.Ob(t,13,0,n(t,14,0,e.Fb(t,0),null==l.adviceDetails?null:l.adviceDetails.createdAt,"medium"));n(t,13,0,i);var c=e.Ob(t,16,0,e.Fb(t,18).transform(e.Ob(t,16,0,n(t,17,0,e.Fb(t,1),null==l.adviceDetails?null:l.adviceDetails.mediaUrl,"USER"))));n(t,16,0,c),n(t,24,0,null==l.adviceDetails?null:l.adviceDetails.likeCount),n(t,29,0,null==l.adviceDetails?null:l.adviceDetails.commentCount)}))}function x(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"app-daily-advice-details",[],null,null,null,b,_)),e.sb(1,114688,null,0,a,[O.a,i.a,c.a,M.e],null,null)],(function(n,t){n(t,1,0)}),null)}var v=e.pb("app-daily-advice-details",a,x,{},{},[]),f=l("eDkP"),w=l("Fzqc"),h=l("mVsa"),y=l("FTgb"),D=l("Wy86"),k=l("4c35"),$=l("dWZg"),N=l("qAlS"),z=l("Wf4p"),H=l("ZYjt"),j=l("UodH"),F=l("SMsm"),J=l("gdGC"),S=l("zeKH"),E=l("wLVv");l.d(t,"DailyAdviceDetailsModuleNgFactory",(function(){return U}));var U=e.qb(u,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[g.a,s.a,d.a,r.a,v]],[3,e.j],e.x]),e.Db(4608,p.n,p.m,[e.u,[2,p.E]]),e.Db(4608,f.c,f.c,[f.i,f.e,e.j,f.h,f.f,e.r,e.z,p.d,w.b,[2,p.h]]),e.Db(5120,f.j,f.k,[f.c]),e.Db(5120,M.c,M.d,[f.c]),e.Db(135680,M.e,M.e,[f.c,e.r,[2,p.h],[2,M.b],M.c,[3,M.e],f.e]),e.Db(5120,h.c,h.j,[f.c]),e.Db(4608,p.e,p.e,[e.u]),e.Db(4608,c.a,c.a,[y.a]),e.Db(1073742336,p.c,p.c,[]),e.Db(1073742336,O.s,O.s,[[2,O.x],[2,O.o]]),e.Db(1073742336,D.a,D.a,[]),e.Db(1073742336,w.a,w.a,[]),e.Db(1073742336,k.g,k.g,[]),e.Db(1073742336,$.b,$.b,[]),e.Db(1073742336,N.c,N.c,[]),e.Db(1073742336,f.g,f.g,[]),e.Db(1073742336,z.n,z.n,[[2,z.f],[2,H.f]]),e.Db(1073742336,M.i,M.i,[]),e.Db(1073742336,z.w,z.w,[]),e.Db(1073742336,j.c,j.c,[]),e.Db(1073742336,F.c,F.c,[]),e.Db(1073742336,h.i,h.i,[]),e.Db(1073742336,h.f,h.f,[]),e.Db(1073742336,J.a,J.a,[]),e.Db(1073742336,S.a,S.a,[]),e.Db(1073742336,E.a,E.a,[]),e.Db(1073742336,u,u,[]),e.Db(1024,O.m,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);