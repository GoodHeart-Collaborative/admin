(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"H+gl":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var o=function(){return function(){}}()},WQyW:function(n,t,e){"use strict";e.r(t);var o=e("CcnG"),l=e("Zx0a"),c=e("EgcD"),i=e("EB96"),g=e("y4Nj"),a=e("9e+O"),u=e("dIk+"),r=function(){function n(n,t,e,o){this.$matDailog=e,this.$common=o,this.post=n.parent.snapshot.data.expertData.data[0],t.replace(this.post._id,this.post.topic)}return n.prototype.ngOnInit=function(){},n.prototype.likeHandler=function(n,t){var e=this;t&&this.$common.onLikeHandler(n).then((function(n){e.onlikeHandler(n.data.list)}))},n.prototype.onlikeHandler=function(n){this.$matDailog.open(c.a,{width:"500px",data:n}).afterClosed().subscribe()},n.prototype.onReportProblem=function(n,t,e){var o=this;void 0===e&&(e=a.m.EXPERT_POST),t&&this.$common.onReportProblemHandler(n,e).then((function(n){n&&n.data&&o.$matDailog.open(g.a,{width:"500px",data:n.data.data}).afterClosed().subscribe()}))},n.prototype.onCommentsHandler=function(n,t){t&&this.$matDailog.open(u.a,{width:"500px",data:n}).afterClosed().subscribe()},n}(),s=function(){return function(){}}(),P=e("pMnS"),_=e("t68o"),C=e("5hce"),M=e("/Y/u"),O=e("o2yI"),p=e("/ygI"),d=e("Ip0R"),m=e("d8nK"),h=e("ZYCi"),b=e("o3x0"),x=o.Db({encapsulation:0,styles:[['[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]{padding:15px;box-shadow:0 0 5px 0 rgba(0,0,0,.4);border-radius:2px;background-color:#fff}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{display:flex;align-items:stretch;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 330px);word-break:break-word;display:flex;flex-direction:column;justify-content:space-between}@media screen and (max-width:992px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 280px)}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail.d-block[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]{display:flex;margin-bottom:10px;align-items:center}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]{margin:0 10px 0 0;height:45px;width:45px;border-radius:50%;flex-shrink:0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:50%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .heading-cover[_ngcontent-%COMP%]{margin-top:3px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .heading-cover[_ngcontent-%COMP%]   .user_name[_ngcontent-%COMP%]{font-size:15px;font-weight:600}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:15px;font-size:18px;font-weight:600;line-height:normal}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:22px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px;font-size:14px}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:100%;order:1}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .date-stamp[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:310px;height:100%!important;display:flex;align-items:flex-start;justify-content:flex-end}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:auto;height:auto;box-shadow:0 0 3px 1px rgba(0,0,0,.6)}@media screen and (max-width:992px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:260px}}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:100%;justify-content:center;order:0;margin-bottom:20px}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:7px 15px;margin:20px -16px -16px;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer;padding:5px 0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover.comment[_ngcontent-%COMP%]{background-color:#f2f2f2;border-radius:3px;padding:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]{padding:0;margin:0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:first-child){padding-top:6px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:last-child){padding-bottom:6px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:40px;height:40px;overflow:hidden;border-radius:50%;box-shadow:0 0 2px 1px rgba(0,0,0,.1)}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{margin-left:20px;display:block;padding:10px;background-color:#f2f2f2;border-radius:5px;position:relative;flex:1}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]::before{content:"";display:block;width:0;height:0;position:absolute;top:12px;right:100%;border-top:10px solid transparent;border-right:10px solid #f2f2f2;border-bottom:10px solid transparent}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 10px;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;max-width:100%;position:relative;padding-right:100px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .more-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;font-size:10px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:18px;color:#868686;word-break:break-word}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment[_ngcontent-%COMP%]{margin:0 0 8px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;margin-top:8px;align-items:center}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .see-hide-replies[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#000;margin-left:50px;font-size:11px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]{width:100%;padding:10px 0 0 60px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]:not(:first-child){padding-top:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]:not(:last-child){padding-bottom:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:32px;height:32px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{padding-left:10px;width:calc(100% - 32px)}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-word}']],data:{}});function f(n){return o.bc(0,[(n()(),o.Fb(0,0,null,null,2,"img",[],[[8,"src",4]],null,null,null,null)),o.Vb(1,2),o.Tb(131072,d.b,[o.i])],null,(function(n,t){var e=t.component,l=o.ac(t,0,0,o.Rb(t,2).transform(o.ac(t,0,0,n(t,1,0,o.Rb(t.parent,0),null==e.post?null:e.post.mediaUrl,"IMAGE_PLACEHOLDER"))));n(t,0,0,l)}))}function w(n){return o.bc(0,[(n()(),o.Fb(0,0,[["myVideo",1]],null,1,"video",[["controls",""],["id","video"],["loop",""],["muted",""]],[[8,"src",4]],null,null,null,null)),(n()(),o.Zb(-1,null,["Your browser does not support the video tag."]))],null,(function(n,t){var e=t.component;n(t,0,0,null==e.post?null:e.post.mediaUrl)}))}function v(n){return o.bc(0,[(n()(),o.Fb(0,0,null,null,4,"div",[["class","like-cover"]],null,[[null,"click"]],(function(n,t,e){var o=!0,l=n.component;return"click"===t&&(o=!1!==l.onReportProblem(null==l.post?null:l.post._id,null==l.post?null:l.post.reportCount)&&o),o}),null,null)),(n()(),o.Fb(1,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),o.Zb(-1,null,["report"])),(n()(),o.Fb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Zb(4,null,["",""]))],null,(function(n,t){var e=t.component;n(t,4,0,null==e.post?null:e.post.reportCount)}))}function k(n){return o.bc(0,[o.Tb(0,m.a,[]),o.Tb(0,d.v,[]),(n()(),o.Fb(2,0,null,null,38,"div",[["class","page-expert-post-detail common-detail-page-ui"]],null,null,null,null,null)),(n()(),o.Fb(3,0,null,null,37,"div",[["class","expert-post-content"]],null,null,null,null,null)),(n()(),o.Fb(4,0,null,null,22,"div",[["class","row-1"]],null,null,null,null,null)),(n()(),o.Fb(5,0,null,null,16,"div",[["class","textual-detail d-block"]],null,null,null,null,null)),(n()(),o.Fb(6,0,null,null,9,"div",[["class","card_header_container profile_header"]],null,null,null,null,null)),(n()(),o.Fb(7,0,null,null,8,"div",[["class","card_header"]],null,null,null,null,null)),(n()(),o.Fb(8,0,null,null,3,"figure",[["class","image-cover"],["mat-card-avatar",""]],null,null,null,null,null)),(n()(),o.Fb(9,0,null,null,2,"img",[["alt",""],["class","img-cover-fit"]],[[8,"src",4]],null,null,null,null)),o.Vb(10,2),o.Tb(131072,d.b,[o.i]),(n()(),o.Fb(12,0,null,null,3,"div",[["class","heading-cover"]],null,null,null,null,null)),(n()(),o.Fb(13,0,null,null,2,"a",[["class","user_name"],["href","javascript:void()"]],null,null,null,null,null)),(n()(),o.Zb(14,null,["",""])),o.Vb(15,1),(n()(),o.Fb(16,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),o.Fb(17,0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),o.Zb(18,null,["",""])),o.Vb(19,1),(n()(),o.Fb(20,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Zb(21,null,[" "," "])),(n()(),o.Fb(22,0,null,null,4,"div",[["class","image-detail"]],null,null,null,null,null)),(n()(),o.ub(16777216,null,null,1,null,f)),o.Eb(24,16384,null,0,d.l,[o.ab,o.W],{ngIf:[0,"ngIf"]},null),(n()(),o.ub(16777216,null,null,1,null,w)),o.Eb(26,16384,null,0,d.l,[o.ab,o.W],{ngIf:[0,"ngIf"]},null),(n()(),o.Fb(27,0,null,null,12,"div",[["class","row-2"]],null,null,null,null,null)),(n()(),o.Fb(28,0,null,null,4,"div",[["class","like-cover"]],null,[[null,"click"]],(function(n,t,e){var o=!0,l=n.component;return"click"===t&&(o=!1!==l.likeHandler(l.post._id,null==l.post?null:l.post.likeCount)&&o),o}),null,null)),(n()(),o.Fb(29,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),o.Zb(-1,null,["thumb_up"])),(n()(),o.Fb(31,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Zb(32,null,["",""])),(n()(),o.Fb(33,0,null,null,4,"div",[["class","like-cover"]],[[2,"comment",null]],[[null,"click"]],(function(n,t,e){var o=!0,l=n.component;return"click"===t&&(o=!1!==l.onCommentsHandler(null==l.post?null:l.post._id,null==l.post?null:l.post.commentCount)&&o),o}),null,null)),(n()(),o.Fb(34,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),o.Zb(-1,null,["comment"])),(n()(),o.Fb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Zb(37,null,["",""])),(n()(),o.ub(16777216,null,null,1,null,v)),o.Eb(39,16384,null,0,d.l,[o.ab,o.W],{ngIf:[0,"ngIf"]},null),(n()(),o.Fb(40,0,null,null,0,"div",[["class","row-3"]],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,24,0,1==(null==e.post?null:e.post.mediaType)),n(t,26,0,2==(null==e.post?null:e.post.mediaType)),n(t,39,0,null==e.post?null:e.post.reportCount)}),(function(n,t){var e=t.component,l=o.ac(t,9,0,o.Rb(t,11).transform(o.ac(t,9,0,n(t,10,0,o.Rb(t,0),null==e.post?null:null==e.post.expertData?null:e.post.expertData.profilePicUrl[0],"USERS"))));n(t,9,0,l);var c=o.ac(t,14,0,n(t,15,0,o.Rb(t,1),null==e.post?null:null==e.post.expertData?null:e.post.expertData.name));n(t,14,0,c);var i=o.ac(t,18,0,n(t,19,0,o.Rb(t,1),null==e.post?null:e.post.topic));n(t,18,0,i),n(t,21,0,null==e.post?null:e.post.description),n(t,32,0,null==e.post?null:e.post.likeCount),n(t,33,0,(null==e.post?null:e.post.commentCount)>0),n(t,37,0,null==e.post?null:e.post.commentCount)}))}function y(n){return o.bc(0,[(n()(),o.Fb(0,0,null,null,1,"app-expert-post-details",[],null,null,null,k,x)),o.Eb(1,114688,null,0,r,[h.a,l.a,b.e,i.a],null,null)],(function(n,t){n(t,1,0)}),null)}var F=o.Bb("app-expert-post-details",r,y,{},{},[]),z=e("M2Lx"),H=e("Wf4p"),D=e("eDkP"),E=e("Fzqc"),Z=e("mVsa"),R=e("seP3"),I=e("dWZg"),j=e("/VYK"),T=e("b716"),V=e("ZYjt"),W=e("4c35"),$=e("qAlS"),S=e("SMsm"),Y=e("UodH"),L=e("Wy86"),U=e("Y4Jk"),B=e("/dHM"),A=e("zeKH"),J=e("wLVv"),K=e("/k2x"),q=e("H+gl");e.d(t,"ExpertPostDetailsModuleNgFactory",(function(){return G}));var G=o.Cb(s,[],(function(n){return o.Ob([o.Pb(512,o.l,o.nb,[[8,[P.a,_.a,C.a,M.a,O.a,p.a,F]],[3,o.l],o.F]),o.Pb(4608,d.n,d.m,[o.B,[2,d.E]]),o.Pb(4608,z.c,z.c,[]),o.Pb(4608,H.d,H.d,[]),o.Pb(4608,D.d,D.d,[D.j,D.f,o.l,D.i,D.g,o.x,o.H,d.d,E.b,[2,d.h]]),o.Pb(5120,D.k,D.l,[D.d]),o.Pb(5120,Z.c,Z.j,[D.d]),o.Pb(5120,b.c,b.d,[D.d]),o.Pb(135680,b.e,b.e,[D.d,o.x,[2,d.h],[2,b.b],b.c,[3,b.e],D.f]),o.Pb(4608,d.e,d.e,[o.B]),o.Pb(1073742336,d.c,d.c,[]),o.Pb(1073742336,h.s,h.s,[[2,h.x],[2,h.o]]),o.Pb(1073742336,z.d,z.d,[]),o.Pb(1073742336,R.e,R.e,[]),o.Pb(1073742336,I.b,I.b,[]),o.Pb(1073742336,j.c,j.c,[]),o.Pb(1073742336,T.c,T.c,[]),o.Pb(1073742336,E.a,E.a,[]),o.Pb(1073742336,H.n,H.n,[[2,H.f],[2,V.f]]),o.Pb(1073742336,H.w,H.w,[]),o.Pb(1073742336,W.g,W.g,[]),o.Pb(1073742336,$.c,$.c,[]),o.Pb(1073742336,D.h,D.h,[]),o.Pb(1073742336,Z.i,Z.i,[]),o.Pb(1073742336,Z.f,Z.f,[]),o.Pb(1073742336,S.c,S.c,[]),o.Pb(1073742336,Y.c,Y.c,[]),o.Pb(1073742336,L.a,L.a,[]),o.Pb(1073742336,b.i,b.i,[]),o.Pb(1073742336,U.a,U.a,[]),o.Pb(1073742336,B.a,B.a,[]),o.Pb(1073742336,A.a,A.a,[]),o.Pb(1073742336,J.a,J.a,[]),o.Pb(1073742336,K.a,K.a,[]),o.Pb(1073742336,q.a,q.a,[]),o.Pb(1073742336,s,s,[]),o.Pb(1024,h.m,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);