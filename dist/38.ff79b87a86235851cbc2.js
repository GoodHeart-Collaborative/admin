(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/DIQ":function(n,t,e){"use strict";e.r(t);var o=e("CcnG"),l=e("Zx0a"),i=e("EB96"),a=e("EgcD"),c=function(){function n(n,t,e,o){this.$common=e,this.$matDailog=o,this.forumsData=n.snapshot.data.forumData.data,t.replace(this.forumsData._id,this.forumsData.topic)}return n.prototype.ngOnInit=function(){},n.prototype.likeHandler=function(n,t){var e=this;t&&this.$common.onLikeHandler({pageNo:1,limit:100,postId:n}).then((function(n){e.onlikeHandler(n.data.list)}))},n.prototype.onlikeHandler=function(n){this.$matDailog.open(a.a,{width:"500px",data:n}).afterClosed().subscribe()},n}(),g=function(){return function(){}}(),u=e("pMnS"),r=e("t68o"),s=e("/Y/u"),_=e("o2yI"),O=e("Ip0R"),M=e("d8nK"),P=e("BVEi"),C=e("reri"),m=e("o3x0"),d=e("ZYCi"),p=o.rb({encapsulation:0,styles:[['[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]{padding:15px;box-shadow:0 0 5px 0 rgba(0,0,0,.4);border-radius:2px;background-color:#fff}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{display:flex;align-items:stretch;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 330px);word-break:break-word;display:flex;flex-direction:column;justify-content:space-between}@media screen and (max-width:992px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 280px)}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]{display:flex;margin-bottom:10px;align-items:center}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]{margin:0 10px 0 0;height:45px;width:45px;border-radius:50%;flex-shrink:0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:50%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .heading-cover[_ngcontent-%COMP%]{margin-top:3px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .heading-cover[_ngcontent-%COMP%]   .user_name[_ngcontent-%COMP%]{font-size:15px;font-weight:600}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:15px;font-size:18px;font-weight:600}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:22px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px;font-size:14px}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:100%;order:1}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .date-stamp[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:310px;height:100%!important;display:flex;align-items:flex-start;justify-content:flex-end}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:auto;height:auto;box-shadow:0 0 3px 1px rgba(0,0,0,.6)}@media screen and (max-width:992px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:260px}}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:100%;justify-content:center;order:0;margin-bottom:20px}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:10px 15px;margin:20px -16px -16px;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]{padding:0;margin:0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:first-child){padding-top:6px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:last-child){padding-bottom:6px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:40px;height:40px;overflow:hidden;border-radius:50%;box-shadow:0 0 2px 1px rgba(0,0,0,.1)}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{margin-left:20px;display:block;padding:10px;background-color:#f2f2f2;border-radius:5px;position:relative;flex:1}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]::before{content:"";display:block;width:0;height:0;position:absolute;top:12px;right:100%;border-top:10px solid transparent;border-right:10px solid #f2f2f2;border-bottom:10px solid transparent}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 10px;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;max-width:100%;position:relative;padding-right:100px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .more-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;font-size:10px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:18px;color:#868686;word-break:break-word}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment[_ngcontent-%COMP%]{margin:0 0 8px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;margin-top:8px;align-items:center}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .see-hide-replies[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#000;margin-left:50px;font-size:11px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]{width:100%;padding:10px 0 0 60px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]:not(:first-child){padding-top:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]:not(:last-child){padding-bottom:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:32px;height:32px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{padding-left:10px;width:calc(100% - 32px)}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-word}']],data:{}});function h(n){return o.Pb(0,[(n()(),o.tb(0,0,null,null,7,"div",[["class","card_header"]],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,3,"figure",[["class","image-cover"],["mat-card-avatar",""]],null,null,null,null,null)),(n()(),o.tb(2,0,null,null,2,"img",[["alt",""],["class","img-cover-fit"]],[[8,"src",4]],null,null,null,null)),o.Jb(3,2),o.Hb(131072,O.b,[o.h]),(n()(),o.tb(5,0,null,null,2,"div",[["class","heading-cover"]],null,null,null,null,null)),(n()(),o.tb(6,0,null,null,1,"a",[["class","user_name"],["href","javascript:void()"]],null,null,null,null,null)),(n()(),o.Nb(7,null,[""," ",""]))],null,(function(n,t){var e=t.component,l=o.Ob(t,2,0,o.Fb(t,4).transform(o.Ob(t,2,0,n(t,3,0,o.Fb(t.parent,0),null==e.forumsData?null:null==e.forumsData.userData?null:e.forumsData.userData.profilePicUrl[0],"USERS"))));n(t,2,0,l),n(t,7,0,null==e.forumsData?null:null==e.forumsData.userData?null:e.forumsData.userData.firstName,(null==e.forumsData?null:null==e.forumsData.userData?null:e.forumsData.userData.lastName)||"string")}))}function f(n){return o.Pb(0,[(n()(),o.tb(0,0,null,null,8,"div",[["class","card_header"]],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,3,"figure",[["class","image-cover"],["mat-card-avatar",""]],null,null,null,null,null)),(n()(),o.tb(2,0,null,null,2,"img",[["alt",""],["class","img-cover-fit"]],[[8,"src",4]],null,null,null,null)),o.Jb(3,2),o.Hb(131072,O.b,[o.h]),(n()(),o.tb(5,0,null,null,3,"div",[["class","heading-cover"]],null,null,null,null,null)),(n()(),o.tb(6,0,null,null,2,"a",[["class","user_name"],["href","javascript:void()"]],null,null,null,null,null)),(n()(),o.Nb(7,null,[""," "])),o.Jb(8,1)],null,(function(n,t){var e=t.component,l=o.Ob(t,2,0,o.Fb(t,4).transform(o.Ob(t,2,0,n(t,3,0,o.Fb(t.parent,0),null==e.forumsData?null:null==e.forumsData.adminData?null:e.forumsData.adminData.profilePicture,"USERS"))));n(t,2,0,l);var i=o.Ob(t,7,0,n(t,8,0,o.Fb(t.parent,1),null==e.forumsData?null:null==e.forumsData.adminData?null:e.forumsData.adminData.name))||"string";n(t,7,0,i)}))}function b(n){return o.Pb(0,[o.Hb(0,M.a,[]),o.Hb(0,O.v,[]),(n()(),o.tb(2,0,null,null,25,"div",[["class","page-daily-inspiration-detail common-detail-page-ui"]],null,null,null,null,null)),(n()(),o.tb(3,0,null,null,24,"div",[["class","daily-inspiration-content"]],null,null,null,null,null)),(n()(),o.tb(4,0,null,null,15,"div",[["class","row-1"]],null,null,null,null,null)),(n()(),o.tb(5,0,null,null,10,"div",[["class","textual-detail"]],null,null,null,null,null)),(n()(),o.tb(6,0,null,null,9,"div",[["class","card_header_container profile_header"]],null,null,null,null,null)),(n()(),o.ib(16777216,null,null,1,null,h)),o.sb(8,16384,null,0,O.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.ib(16777216,null,null,1,null,f)),o.sb(10,16384,null,0,O.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.tb(11,0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),o.Nb(12,null,["",""])),o.Jb(13,1),(n()(),o.tb(14,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Nb(15,null,["",""])),(n()(),o.tb(16,0,null,null,3,"div",[["class","image-detail"]],null,null,null,null,null)),(n()(),o.tb(17,0,null,null,2,"img",[],[[8,"src",4]],null,null,null,null)),o.Jb(18,2),o.Hb(131072,O.b,[o.h]),(n()(),o.tb(20,0,null,null,5,"div",[["class","row-2"]],null,null,null,null,null)),(n()(),o.tb(21,0,null,null,4,"div",[["class","like-cover"]],null,[[null,"click"]],(function(n,t,e){var o=!0,l=n.component;return"click"===t&&(o=!1!==l.likeHandler(l.forumsData._id,null==l.forumsData?null:l.forumsData.likeCount)&&o),o}),null,null)),(n()(),o.tb(22,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),o.Nb(-1,null,["thumb_up"])),(n()(),o.tb(24,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Nb(25,null,["",""])),(n()(),o.tb(26,0,null,null,1,"app-comments-show",[],null,null,null,P.b,P.a)),o.sb(27,638976,null,0,C.a,[i.a,m.e],{commentId:[0,"commentId"]},null)],(function(n,t){var e=t.component;n(t,8,0,null==e.forumsData?null:e.forumsData.userData),n(t,10,0,null==e.forumsData?null:e.forumsData.adminData),n(t,27,0,null==e.forumsData?null:e.forumsData._id)}),(function(n,t){var e=t.component,l=o.Ob(t,12,0,n(t,13,0,o.Fb(t,1),null==e.forumsData?null:e.forumsData.topic))||"string";n(t,12,0,l),n(t,15,0,(null==e.forumsData?null:e.forumsData.description)||"string");var i=o.Ob(t,17,0,o.Fb(t,19).transform(o.Ob(t,17,0,n(t,18,0,o.Fb(t,0),null==e.forumsData?null:e.forumsData.mediaUrl,"IMAGE_PLACEHOLDER"))));n(t,17,0,i),n(t,25,0,null==e.forumsData?null:e.forumsData.likeCount)}))}function x(n){return o.Pb(0,[(n()(),o.tb(0,0,null,null,1,"app-forum-details",[],null,null,null,b,p)),o.sb(1,114688,null,0,c,[d.a,l.a,i.a,m.e],null,null)],(function(n,t){n(t,1,0)}),null)}var w=o.pb("app-forum-details",c,x,{},{},[]),D=e("eDkP"),v=e("Fzqc"),k=e("mVsa"),y=e("Wy86"),z=e("Y4Jk"),H=e("4c35"),I=e("dWZg"),$=e("qAlS"),j=e("Wf4p"),N=e("ZYjt"),E=e("UodH"),F=e("SMsm"),S=e("zeKH"),J=e("wLVv"),R=e("Nu6l");e.d(t,"ForumDetailsModuleNgFactory",(function(){return A}));var A=o.qb(g,[],(function(n){return o.Cb([o.Db(512,o.j,o.bb,[[8,[u.a,r.a,s.a,_.a,w]],[3,o.j],o.x]),o.Db(4608,O.n,O.m,[o.u,[2,O.E]]),o.Db(4608,D.c,D.c,[D.i,D.e,o.j,D.h,D.f,o.r,o.z,O.d,v.b,[2,O.h]]),o.Db(5120,D.j,D.k,[D.c]),o.Db(5120,m.c,m.d,[D.c]),o.Db(135680,m.e,m.e,[D.c,o.r,[2,O.h],[2,m.b],m.c,[3,m.e],D.e]),o.Db(5120,k.c,k.j,[D.c]),o.Db(1073742336,O.c,O.c,[]),o.Db(1073742336,d.s,d.s,[[2,d.x],[2,d.o]]),o.Db(1073742336,y.a,y.a,[]),o.Db(1073742336,z.a,z.a,[]),o.Db(1073742336,v.a,v.a,[]),o.Db(1073742336,H.g,H.g,[]),o.Db(1073742336,I.b,I.b,[]),o.Db(1073742336,$.c,$.c,[]),o.Db(1073742336,D.g,D.g,[]),o.Db(1073742336,j.n,j.n,[[2,j.f],[2,N.f]]),o.Db(1073742336,m.i,m.i,[]),o.Db(1073742336,j.w,j.w,[]),o.Db(1073742336,E.c,E.c,[]),o.Db(1073742336,F.c,F.c,[]),o.Db(1073742336,k.i,k.i,[]),o.Db(1073742336,k.f,k.f,[]),o.Db(1073742336,S.a,S.a,[]),o.Db(1073742336,J.a,J.a,[]),o.Db(1073742336,R.a,R.a,[]),o.Db(1073742336,g,g,[]),o.Db(1024,d.m,(function(){return[[{path:"",component:c}]]}),[])])}))},"6lGI":function(n,t,e){"use strict";e("NnC3"),e("Ay4O")},EgcD:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var o=e("bFx8"),l=(e("EB96"),e("iiAa"),e("+7By")),i=(e("6lGI"),function(){function n(n,t,e,o,l,i,a){this.$dialogRef=n,this.data=t,this.matDailog=e,this.$common=o,this.$utility=l,this.$router=i,this.$confirmBox=a}return n.prototype.ngOnInit=function(){},n.prototype.onViewPic=function(n){this.matDailog.open(o.a,{panelClass:"view-full-image-modal",data:n}).afterClosed().subscribe()},n.prototype.onActionHandler=function(n,t){var e=this;this.$confirmBox.listAction("user","active"==t?"block":"active").subscribe((function(o){o&&e.$common.updateStatus(n,{status:"active"==t?"blocked":"active"}).then((function(n){e.$utility.success(n.message),e.$dialogRef.close()}))}))},n.prototype.onSeeProfile=function(n){this.$router.navigate([""+l.USER.fullUrl,n,"details"]),this.$dialogRef.close()},n}())},Y4Jk:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var o=function(){return function(){}}()},rDct:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var o=function(){function n(){}return n.prototype.transform=function(n,t){if(void 0===t&&(t=!1),t)return(o=Math.floor((n-Date.now())%864e5/36e5))+"H "+(l=Math.floor((n-Date.now())%36e5/6e4))+"M";if(n){var e=Math.round(Math.abs(((new Date).getTime()-new Date(n).getTime())/864e5)),o=Math.round(((new Date).valueOf()-new Date(n).valueOf())/1e3/60/60),l=Math.floor(Math.abs((new Date).valueOf()-new Date(n).valueOf())/1e3/60),i=Math.floor(Math.abs((new Date).valueOf()-new Date(n).valueOf())/1e3);if(e>30)return new Date(n).toDateString();if(e>0&&e<=30)return e+(e>1?" days ":" day ")+"ago";if(e<1&&o>0)return o+" hrs ago";if(e<1&&o<1&&l>0)return l+" min ago";if(e<1&&o<1&&l<1&&i>-1)return" Just Now"}},n}()}}]);