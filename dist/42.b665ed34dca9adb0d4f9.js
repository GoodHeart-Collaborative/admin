(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"H+gl":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){return function(){}}()},"L/kC":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){function n(n){this.datePipe=n}return n.prototype.transform=function(n){return n?this.datePipe.transform(n,"d MMMM, y, h:mm a"):"-"},n}()},u0D8:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=e("Zx0a"),i=e("EB96"),c=e("EgcD"),a=e("dIk+"),g=function(){function n(n,t,e,l){this.$common=e,this.$matDailog=l,this.hideShowReplies=!1,this.adviceDetails=n.snapshot.data.dailyData.data,t.replace(this.adviceDetails._id,this.adviceDetails.title)}return n.prototype.ngOnInit=function(){},n.prototype.likeHandler=function(n,t){var e=this;t&&this.$common.onLikeHandler(n).then((function(n){e.onlikeHandler(n.data.list,t)}))},n.prototype.onlikeHandler=function(n,t){this.$matDailog.open(c.a,{width:"500px",data:n}).afterClosed().subscribe()},n.prototype.onCommentsHandler=function(n,t){t&&this.$matDailog.open(a.a,{width:"500px",data:n}).afterClosed().subscribe()},n}(),u=function(){return function(){}}(),s=e("pMnS"),r=e("t68o"),d=e("/Y/u"),P=e("o2yI"),_=e("5hce"),C=e("/ygI"),M=e("Ip0R"),O=e("d8nK"),m=e("L/kC"),p=e("ZYCi"),h=e("o3x0"),b=l.Db({encapsulation:0,styles:[['[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]{padding:15px;box-shadow:0 0 5px 0 rgba(0,0,0,.4);border-radius:2px;background-color:#fff}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{display:flex;align-items:stretch;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 330px);word-break:break-word;display:flex;flex-direction:column;justify-content:space-between}@media screen and (max-width:992px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 280px)}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail.d-block[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]{display:flex;margin-bottom:10px;align-items:center}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]{margin:0 10px 0 0;height:45px;width:45px;border-radius:50%;flex-shrink:0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:50%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .heading-cover[_ngcontent-%COMP%]{margin-top:3px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .heading-cover[_ngcontent-%COMP%]   .user_name[_ngcontent-%COMP%]{font-size:15px;font-weight:600}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:15px;font-size:18px;font-weight:600;line-height:normal}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:22px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px;font-size:14px}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:100%;order:1}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .date-stamp[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:310px;height:100%!important;display:flex;align-items:flex-start;justify-content:flex-end}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:auto;height:auto;box-shadow:0 0 3px 1px rgba(0,0,0,.6)}@media screen and (max-width:992px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:260px}}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:100%;justify-content:center;order:0;margin-bottom:20px}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:7px 15px;margin:20px -16px -16px;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer;padding:5px 0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover.comment[_ngcontent-%COMP%]{background-color:#f2f2f2;border-radius:3px;padding:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]{padding:0;margin:0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:first-child){padding-top:6px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:last-child){padding-bottom:6px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:40px;height:40px;overflow:hidden;border-radius:50%;box-shadow:0 0 2px 1px rgba(0,0,0,.1)}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{margin-left:20px;display:block;padding:10px;background-color:#f2f2f2;border-radius:5px;position:relative;flex:1}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]::before{content:"";display:block;width:0;height:0;position:absolute;top:12px;right:100%;border-top:10px solid transparent;border-right:10px solid #f2f2f2;border-bottom:10px solid transparent}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 10px;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;max-width:100%;position:relative;padding-right:100px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .more-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;font-size:10px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:18px;color:#868686;word-break:break-word}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment[_ngcontent-%COMP%]{margin:0 0 8px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;margin-top:8px;align-items:center}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .see-hide-replies[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#000;margin-left:50px;font-size:11px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]{width:100%;padding:10px 0 0 60px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]:not(:first-child){padding-top:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]:not(:last-child){padding-bottom:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:32px;height:32px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{padding-left:10px;width:calc(100% - 32px)}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-word}']],data:{}});function x(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,2,"p",[["class","posted-on-date"]],null,null,null,null,null)),(n()(),l.Zb(1,null,["Scheduled On: ",""])),l.Vb(2,1)],null,(function(n,t){var e=t.component,o=l.ac(t,1,0,n(t,2,0,l.Rb(t.parent,2),null==e.adviceDetails?null:e.adviceDetails.postedAt));n(t,1,0,o)}))}function v(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,2,"img",[],[[8,"src",4]],null,null,null,null)),l.Vb(1,2),l.Tb(131072,M.b,[l.i])],null,(function(n,t){var e=t.component,o=l.ac(t,0,0,l.Rb(t,2).transform(l.ac(t,0,0,n(t,1,0,l.Rb(t.parent.parent,0),null==e.adviceDetails?null:e.adviceDetails.mediaUrl,"IMAGE_PLACEHOLDER"))));n(t,0,0,o)}))}function f(n){return l.bc(0,[(n()(),l.Fb(0,0,[["myVideo",1]],null,1,"video",[["controls",""],["id","video"],["loop",""],["muted",""]],[[8,"src",4]],null,null,null,null)),(n()(),l.Zb(-1,null,["Your browser does not support the video tag."]))],null,(function(n,t){var e=t.component;n(t,0,0,null==e.adviceDetails?null:e.adviceDetails.mediaUrl)}))}function w(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,4,"div",[["class","image-detail"]],null,null,null,null,null)),(n()(),l.ub(16777216,null,null,1,null,v)),l.Eb(2,16384,null,0,M.l,[l.ab,l.W],{ngIf:[0,"ngIf"]},null),(n()(),l.ub(16777216,null,null,1,null,f)),l.Eb(4,16384,null,0,M.l,[l.ab,l.W],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,2,0,1==(null==e.adviceDetails?null:e.adviceDetails.mediaType)),n(t,4,0,2==(null==e.adviceDetails?null:e.adviceDetails.mediaType))}),null)}function D(n){return l.bc(0,[l.Tb(0,O.a,[]),l.Tb(0,M.v,[]),l.Tb(0,m.a,[M.e]),(n()(),l.Fb(3,0,null,null,34,"div",[["class","page-daily-advice-details common-detail-page-ui"]],null,null,null,null,null)),(n()(),l.Fb(4,0,null,null,33,"div",[["class","daily-advice-details-content"]],null,null,null,null,null)),(n()(),l.Fb(5,0,null,null,21,"div",[["class","row-1"]],null,null,null,null,null)),(n()(),l.Fb(6,0,null,null,18,"div",[["class","textual-detail"]],null,null,null,null,null)),(n()(),l.Fb(7,0,null,null,17,"div",[["class","card_header_container profile_header"]],null,null,null,null,null)),(n()(),l.Fb(8,0,null,null,10,"div",[["class","card_header"]],null,null,null,null,null)),(n()(),l.Fb(9,0,null,null,3,"figure",[["class","image-cover"],["mat-card-avatar",""]],null,null,null,null,null)),(n()(),l.Fb(10,0,null,null,2,"img",[["alt",""],["class","img-cover-fit"]],[[8,"src",4]],null,null,null,null)),l.Vb(11,2),l.Tb(131072,M.b,[l.i]),(n()(),l.Fb(13,0,null,null,5,"div",[["class","heading-cover"]],null,null,null,null,null)),(n()(),l.Fb(14,0,null,null,2,"a",[["class","user_name"],["href","javascript:void()"]],null,null,null,null,null)),(n()(),l.Zb(15,null,["",""])),l.Vb(16,1),(n()(),l.ub(16777216,null,null,1,null,x)),l.Eb(18,16384,null,0,M.l,[l.ab,l.W],{ngIf:[0,"ngIf"]},null),(n()(),l.Fb(19,0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),l.Zb(20,null,["",""])),l.Vb(21,1),(n()(),l.Fb(22,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),l.Zb(23,null,["",""])),l.Vb(24,1),(n()(),l.ub(16777216,null,null,1,null,w)),l.Eb(26,16384,null,0,M.l,[l.ab,l.W],{ngIf:[0,"ngIf"]},null),(n()(),l.Fb(27,0,null,null,10,"div",[["class","row-2"]],null,null,null,null,null)),(n()(),l.Fb(28,0,null,null,4,"div",[["class","like-cover"]],null,[[null,"click"]],(function(n,t,e){var l=!0,o=n.component;return"click"===t&&(l=!1!==o.likeHandler(o.adviceDetails._id,null==o.adviceDetails?null:o.adviceDetails.likeCount)&&l),l}),null,null)),(n()(),l.Fb(29,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),l.Zb(-1,null,["thumb_up"])),(n()(),l.Fb(31,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Zb(32,null,["",""])),(n()(),l.Fb(33,0,null,null,4,"div",[["class","like-cover"]],[[2,"comment",null]],[[null,"click"]],(function(n,t,e){var l=!0,o=n.component;return"click"===t&&(l=!1!==o.onCommentsHandler(null==o.adviceDetails?null:o.adviceDetails._id,null==o.adviceDetails?null:o.adviceDetails.commentCount)&&l),l}),null,null)),(n()(),l.Fb(34,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),l.Zb(-1,null,["comment"])),(n()(),l.Fb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Zb(37,null,["",""]))],(function(n,t){var e=t.component;n(t,18,0,null==e.adviceDetails?null:e.adviceDetails.postedAt),n(t,26,0,null==e.adviceDetails?null:e.adviceDetails.mediaUrl)}),(function(n,t){var e=t.component,o=l.ac(t,10,0,l.Rb(t,12).transform(l.ac(t,10,0,n(t,11,0,l.Rb(t,0),null!=e.adviceDetails&&null!=e.adviceDetails.adminData[0]&&e.adviceDetails.adminData[0].profilePicture?null==e.adviceDetails?null:null==e.adviceDetails.adminData[0]?null:e.adviceDetails.adminData[0].profilePicture:null==e.adviceDetails?null:null==e.adviceDetails.addedBy?null:e.adviceDetails.addedBy.profilePicture,"USERS"))));n(t,10,0,o);var i=l.ac(t,15,0,n(t,16,0,l.Rb(t,1),null!=e.adviceDetails&&null!=e.adviceDetails.adminData[0]&&e.adviceDetails.adminData[0].name?null==e.adviceDetails?null:null==e.adviceDetails.adminData[0]?null:e.adviceDetails.adminData[0].name:null==e.adviceDetails?null:null==e.adviceDetails.addedBy?null:e.adviceDetails.addedBy.name));n(t,15,0,i);var c=l.ac(t,20,0,n(t,21,0,l.Rb(t,1),null==e.adviceDetails?null:e.adviceDetails.title));n(t,20,0,c);var a=l.ac(t,23,0,n(t,24,0,l.Rb(t,1),null==e.adviceDetails?null:e.adviceDetails.description));n(t,23,0,a),n(t,32,0,null==e.adviceDetails?null:e.adviceDetails.likeCount),n(t,33,0,(null==e.adviceDetails?null:e.adviceDetails.commentCount)>0),n(t,37,0,null==e.adviceDetails?null:e.adviceDetails.commentCount)}))}function k(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,1,"app-daily-advice-details",[],null,null,null,D,b)),l.Eb(1,114688,null,0,g,[p.a,o.a,i.a,h.e],null,null)],(function(n,t){n(t,1,0)}),null)}var y=l.Bb("app-daily-advice-details",g,k,{},{},[]),F=e("eDkP"),z=e("Fzqc"),H=e("mVsa"),I=e("FTgb"),Z=e("4c35"),E=e("dWZg"),R=e("qAlS"),j=e("Wf4p"),V=e("ZYjt"),B=e("UodH"),T=e("SMsm"),S=e("Wy86"),W=e("Y4Jk"),A=e("zeKH"),L=e("wLVv"),U=e("/dHM"),Y=e("H+gl"),$=e("/k2x");e.d(t,"DailyAdviceDetailsModuleNgFactory",(function(){return J}));var J=l.Cb(u,[],(function(n){return l.Ob([l.Pb(512,l.l,l.nb,[[8,[s.a,r.a,d.a,P.a,_.a,C.a,y]],[3,l.l],l.F]),l.Pb(4608,M.n,M.m,[l.B,[2,M.E]]),l.Pb(4608,F.d,F.d,[F.j,F.f,l.l,F.i,F.g,l.x,l.H,M.d,z.b,[2,M.h]]),l.Pb(5120,F.k,F.l,[F.d]),l.Pb(5120,h.c,h.d,[F.d]),l.Pb(135680,h.e,h.e,[F.d,l.x,[2,M.h],[2,h.b],h.c,[3,h.e],F.f]),l.Pb(5120,H.c,H.j,[F.d]),l.Pb(4608,M.e,M.e,[l.B]),l.Pb(4608,i.a,i.a,[I.a]),l.Pb(1073742336,M.c,M.c,[]),l.Pb(1073742336,p.s,p.s,[[2,p.x],[2,p.o]]),l.Pb(1073742336,z.a,z.a,[]),l.Pb(1073742336,Z.g,Z.g,[]),l.Pb(1073742336,E.b,E.b,[]),l.Pb(1073742336,R.c,R.c,[]),l.Pb(1073742336,F.h,F.h,[]),l.Pb(1073742336,j.n,j.n,[[2,j.f],[2,V.f]]),l.Pb(1073742336,h.i,h.i,[]),l.Pb(1073742336,j.w,j.w,[]),l.Pb(1073742336,B.c,B.c,[]),l.Pb(1073742336,T.c,T.c,[]),l.Pb(1073742336,H.i,H.i,[]),l.Pb(1073742336,H.f,H.f,[]),l.Pb(1073742336,S.a,S.a,[]),l.Pb(1073742336,W.a,W.a,[]),l.Pb(1073742336,A.a,A.a,[]),l.Pb(1073742336,L.a,L.a,[]),l.Pb(1073742336,U.a,U.a,[]),l.Pb(1073742336,Y.a,Y.a,[]),l.Pb(1073742336,$.a,$.a,[]),l.Pb(1073742336,u,u,[]),l.Pb(1024,p.m,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);