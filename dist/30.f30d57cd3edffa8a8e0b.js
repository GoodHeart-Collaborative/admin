(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"6lGI":function(n,t,e){"use strict";e("NnC3"),e("Ay4O")},EgcD:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var l=e("bFx8"),o=(e("EB96"),e("iiAa"),e("+7By")),i=(e("6lGI"),function(){function n(n,t,e,l,o,i,c){this.$dialogRef=n,this.data=t,this.matDailog=e,this.$common=l,this.$utility=o,this.$router=i,this.$confirmBox=c}return n.prototype.ngOnInit=function(){},n.prototype.onViewPic=function(n){this.matDailog.open(l.a,{panelClass:"view-full-image-modal",data:n}).afterClosed().subscribe()},n.prototype.onActionHandler=function(n,t){var e=this;this.$confirmBox.listAction("user","active"==t?"block":"active").subscribe((function(l){l&&e.$common.updateStatus(n,{status:"active"==t?"blocked":"active"}).then((function(n){e.$utility.success(n.message),e.$dialogRef.close()}))}))},n.prototype.onSeeProfile=function(n){this.$router.navigate([""+o.USER.fullUrl,n,"details"]),this.$dialogRef.close()},n}())},"H+gl":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){return function(){}}()},"L/kC":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){function n(n){this.datePipe=n}return n.prototype.transform=function(n){return n?this.datePipe.transform(n,"d MMMM, y, h:mm a"):"-"},n}()},Y4Jk:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){return function(){}}()},o2yI:function(n,t,e){"use strict";var l=e("CcnG"),o=e("Ip0R"),i=e("bujt"),c=e("UodH"),a=e("lLAP"),u=e("wFw1"),g=e("mVsa"),r=e("eDkP"),s=e("Fzqc"),d=e("Mr+X"),p=e("SMsm"),P=e("2Q+G"),_=e("d8nK"),M=e("rDct"),C=e("o3x0"),O=e("EgcD"),m=e("EB96"),b=e("iiAa"),h=e("ZYCi"),f=e("Ay4O");e.d(t,"a",(function(){return y}));var x=l.Db({encapsulation:0,styles:[["[_nghost-%COMP%]   .popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]{padding:10px 20px;background-color:#419ebb;border-radius:3px 3px 0 0;color:#fff;display:flex;position:relative;align-items:center;justify-content:center}[_nghost-%COMP%]   .popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;right:15px;top:50%;transform:translateY(-50%);z-index:9;cursor:pointer;color:#fff}[_nghost-%COMP%]   .popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:capitalize;font-weight:100}[_nghost-%COMP%]   .popup-ui[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]{max-height:calc(100vh - 70px);overflow:auto;background-color:#fff}[_nghost-%COMP%]   .popup-ui[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]{text-align:center;padding:30px 20px}[_nghost-%COMP%]   .popup-ui[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .popup-ui[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:0 20px 30px}[_nghost-%COMP%]   .popup-ui[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:first-child){margin-left:20px}.popup-body[_ngcontent-%COMP%]{overflow:auto;max-height:calc(100vh - 100px);padding:10px 20px!important}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]{padding:0;margin:0}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:first-child){padding-top:5px}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:last-child){padding-bottom:5px}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:35px;height:35px;overflow:hidden;border-radius:35px;box-shadow:0 0 2px 1px rgba(0,0,0,.1)}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{padding-left:10px;width:calc(100% - 85px);display:block}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;position:relative;text-align:left;padding-right:100px}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .comment-time[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;font-size:10px}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .see-profile-cover[_ngcontent-%COMP%]{margin-right:-15px}.popup-body[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .see-profile-cover[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{width:50px;height:50px}"]],data:{}});function v(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,28,"li",[["class","single-user"]],null,null,null,null,null)),(n()(),l.Fb(1,0,null,null,3,"div",[["class","img-cover"]],null,null,null,null,null)),(n()(),l.Fb(2,0,null,null,2,"img",[["alt","Profile"]],[[8,"src",4]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.onViewPic(null==n.context.$implicit?null:null==n.context.$implicit.user?null:n.context.$implicit.user.profilePicture)&&l),l}),null,null)),l.Vb(3,2),l.Tb(131072,o.b,[l.i]),(n()(),l.Fb(5,0,null,null,6,"div",[["class","textual-cover"]],null,null,null,null,null)),(n()(),l.Fb(6,0,null,null,5,"h4",[],null,null,null,null,null)),(n()(),l.Fb(7,0,null,null,1,"span",[],[[8,"title",0]],null,null,null,null)),(n()(),l.Zb(8,null,[""," ",""])),(n()(),l.Fb(9,0,null,null,2,"p",[["class","comment-time"]],null,null,null,null,null)),(n()(),l.Zb(10,null,["",""])),l.Vb(11,1),(n()(),l.Fb(12,0,null,null,16,"div",[["class","see-profile-cover"]],null,null,null,null,null)),(n()(),l.Fb(13,16777216,null,null,5,"button",[["aria-haspopup","true"],["aria-label","Example icon-button with a menu"],["class","mat-menu-trigger"],["mat-icon-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-expanded",0]],[[null,"mousedown"],[null,"keydown"],[null,"click"]],(function(n,t,e){var o=!0;return"mousedown"===t&&(o=!1!==l.Rb(n,15)._handleMousedown(e)&&o),"keydown"===t&&(o=!1!==l.Rb(n,15)._handleKeydown(e)&&o),"click"===t&&(o=!1!==l.Rb(n,15)._handleClick(e)&&o),o}),i.b,i.a)),l.Eb(14,180224,null,0,c.b,[l.n,a.h,[2,u.a]],null,null),l.Eb(15,1196032,null,0,g.g,[r.d,l.n,l.ab,g.c,[2,g.d],[8,null],[2,s.b],a.h],{menu:[0,"menu"]},null),(n()(),l.Fb(16,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,d.b,d.a)),l.Eb(17,9158656,null,0,p.b,[l.n,p.d,[8,null],[2,p.a],[2,l.p]],null,null),(n()(),l.Zb(-1,0,["more_vert"])),(n()(),l.Fb(19,0,null,null,9,"mat-menu",[],null,null,null,P.d,P.b)),l.Eb(20,1294336,[["menu",4]],3,g.h,[l.n,l.H,g.a],null,null),l.Xb(603979776,1,{_allItems:1}),l.Xb(603979776,2,{items:1}),l.Xb(603979776,3,{lazyContent:0}),l.Wb(2048,null,g.d,null,[g.h]),l.Wb(2048,null,g.b,null,[g.d]),(n()(),l.Fb(26,0,null,0,2,"button",[["class","mat-menu-item"],["mat-menu-item",""]],[[1,"role",0],[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],(function(n,t,e){var o=!0,i=n.component;return"click"===t&&(o=!1!==l.Rb(n,27)._checkDisabled(e)&&o),"mouseenter"===t&&(o=!1!==l.Rb(n,27)._handleMouseEnter()&&o),"click"===t&&(o=!1!==i.onSeeProfile(null==n.context.$implicit?null:null==n.context.$implicit.user?null:n.context.$implicit.user._id)&&o),o}),P.c,P.a)),l.Eb(27,180224,[[1,4],[2,4]],0,g.e,[l.n,o.d,a.h,[2,g.b]],null,null),(n()(),l.Zb(-1,0,[" See Profile "]))],(function(n,t){n(t,15,0,l.Rb(t,20)),n(t,17,0),n(t,20,0)}),(function(n,t){var e=l.ac(t,2,0,l.Rb(t,4).transform(l.ac(t,2,0,n(t,3,0,l.Rb(t.parent,0),null==t.context.$implicit?null:null==t.context.$implicit.user?null:t.context.$implicit.user.profilePicUrl[0],"USER"))));n(t,2,0,e),n(t,7,0,l.Jb(1,"",null==t.context.$implicit?null:null==t.context.$implicit.user?null:t.context.$implicit.user.name,"")),n(t,8,0,null==t.context.$implicit?null:null==t.context.$implicit.user?null:t.context.$implicit.user.firstName,null==t.context.$implicit?null:null==t.context.$implicit.user?null:t.context.$implicit.user.lastName);var o=l.ac(t,10,0,n(t,11,0,l.Rb(t.parent,1),null==t.context.$implicit?null:t.context.$implicit.createdAt));n(t,10,0,o),n(t,13,0,l.Rb(t,14).disabled||null,"NoopAnimations"===l.Rb(t,14)._animationMode,l.Rb(t,15).menuOpen||null),n(t,16,0,l.Rb(t,17).inline,"primary"!==l.Rb(t,17).color&&"accent"!==l.Rb(t,17).color&&"warn"!==l.Rb(t,17).color),n(t,26,0,l.Rb(t,27).role,l.Rb(t,27)._highlighted,l.Rb(t,27)._triggersSubmenu,l.Rb(t,27)._getTabIndex(),l.Rb(t,27).disabled.toString(),l.Rb(t,27).disabled||null)}))}function w(n){return l.bc(0,[l.Tb(0,_.a,[]),l.Tb(0,M.a,[]),(n()(),l.Fb(2,0,null,null,12,"div",[["class","page-like-action popup-ui"]],null,null,null,null,null)),(n()(),l.Fb(3,0,null,null,6,"div",[["class","popup-header"]],null,null,null,null,null)),(n()(),l.Fb(4,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Zb(-1,null,["Likes"])),(n()(),l.Fb(6,0,null,null,3,"mat-icon",[["class","close-icon mat-icon notranslate"],["role","img"]],[[1,"aria-label",0],[1,"type",0],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l.Rb(n,7).dialogRef.close(l.Rb(n,7).dialogResult)&&o),o}),d.b,d.a)),l.Eb(7,606208,null,0,C.f,[[2,C.j],l.n,C.e],{dialogResult:[0,"dialogResult"]},null),l.Eb(8,9158656,null,0,p.b,[l.n,p.d,[8,null],[2,p.a],[2,l.p]],null,null),(n()(),l.Zb(-1,0,["close"])),(n()(),l.Fb(10,0,null,null,4,"div",[["class","popup-content"]],null,null,null,null,null)),(n()(),l.Fb(11,0,null,null,3,"div",[["class","popup-body"]],null,null,null,null,null)),(n()(),l.Fb(12,0,null,null,2,"ul",[["class","users-listing"]],null,null,null,null,null)),(n()(),l.ub(16777216,null,null,1,null,v)),l.Eb(14,278528,null,0,o.k,[l.ab,l.W,l.z],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var e=t.component;n(t,7,0,!1),n(t,8,0),n(t,14,0,e.data)}),(function(n,t){n(t,6,0,l.Rb(t,7).ariaLabel||null,l.Rb(t,7).type,l.Rb(t,8).inline,"primary"!==l.Rb(t,8).color&&"accent"!==l.Rb(t,8).color&&"warn"!==l.Rb(t,8).color)}))}function D(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,1,"app-like-action",[],null,null,null,w,x)),l.Eb(1,114688,null,0,O.a,[C.j,C.a,C.e,m.a,b.a,h.o,f.a],null,null)],(function(n,t){n(t,1,0)}),null)}var y=l.Bb("app-like-action",O.a,D,{},{},[])},rDct:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){function n(){}return n.prototype.transform=function(n,t){if(void 0===t&&(t=!1),t)return(l=Math.floor((n-Date.now())%864e5/36e5))+"H "+(o=Math.floor((n-Date.now())%36e5/6e4))+"M";if(n){var e=Math.round(Math.abs(((new Date).getTime()-new Date(n).getTime())/864e5)),l=Math.round(((new Date).valueOf()-new Date(n).valueOf())/1e3/60/60),o=Math.floor(Math.abs((new Date).valueOf()-new Date(n).valueOf())/1e3/60),i=Math.floor(Math.abs((new Date).valueOf()-new Date(n).valueOf())/1e3);if(e>30)return new Date(n).toDateString();if(e>0&&e<=30)return e+(e>1?" days ":" day ")+"ago";if(e<1&&l>0)return l+" hrs ago";if(e<1&&l<1&&o>0)return o+" min ago";if(e<1&&l<1&&o<1&&i>-1)return" Just Now"}},n}()},u0D8:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=e("Zx0a"),i=e("EB96"),c=e("EgcD"),a=function(){function n(n,t,e,l){this.$common=e,this.$matDailog=l,this.hideShowReplies=!1,this.adviceDetails=n.snapshot.data.dailyData.data,t.replace(this.adviceDetails._id,this.adviceDetails.title)}return n.prototype.ngOnInit=function(){},n.prototype.likeHandler=function(n,t){var e=this;t&&this.$common.onLikeHandler(n).then((function(n){e.onlikeHandler(n.data.list,t)}))},n.prototype.onlikeHandler=function(n,t){this.$matDailog.open(c.a,{width:"500px",data:n}).afterClosed().subscribe()},n}(),u=function(){return function(){}}(),g=e("pMnS"),r=e("t68o"),s=e("/Y/u"),d=e("o2yI"),p=e("/ygI"),P=e("Ip0R"),_=e("d8nK"),M=e("L/kC"),C=e("BVEi"),O=e("reri"),m=e("o3x0"),b=e("ZYCi"),h=l.Db({encapsulation:0,styles:[['[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]{padding:15px;box-shadow:0 0 5px 0 rgba(0,0,0,.4);border-radius:2px;background-color:#fff}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{display:flex;align-items:stretch;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 330px);word-break:break-word;display:flex;flex-direction:column;justify-content:space-between}@media screen and (max-width:992px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:calc(100% - 280px)}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail.d-block[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]{display:flex;margin-bottom:10px;align-items:center}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]{margin:0 10px 0 0;height:45px;width:45px;border-radius:50%;flex-shrink:0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:50%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .heading-cover[_ngcontent-%COMP%]{margin-top:3px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .card_header_container.profile_header[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .heading-cover[_ngcontent-%COMP%]   .user_name[_ngcontent-%COMP%]{font-size:15px;font-weight:600}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:15px;font-size:18px;font-weight:600}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:22px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px;font-size:14px}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]{width:100%;order:1}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .date-stamp[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .textual-detail[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:310px;height:100%!important;display:flex;align-items:flex-start;justify-content:flex-end}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:auto;height:auto;box-shadow:0 0 3px 1px rgba(0,0,0,.6)}@media screen and (max-width:992px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:260px}}@media screen and (max-width:576px){[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .image-detail[_ngcontent-%COMP%]{width:100%;justify-content:center;order:0;margin-bottom:20px}}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:10px 15px;margin:20px -16px -16px;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:40px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]{padding:0;margin:0}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:first-child){padding-top:6px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]:not(:last-child){padding-bottom:6px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:40px;height:40px;overflow:hidden;border-radius:50%;box-shadow:0 0 2px 1px rgba(0,0,0,.1)}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{margin-left:20px;display:block;padding:10px;background-color:#f2f2f2;border-radius:5px;position:relative;flex:1}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]::before{content:"";display:block;width:0;height:0;position:absolute;top:12px;right:100%;border-top:10px solid transparent;border-right:10px solid #f2f2f2;border-bottom:10px solid transparent}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 10px;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;max-width:100%;position:relative;padding-right:100px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .more-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;cursor:pointer}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{position:absolute;right:0;top:2px;font-size:10px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:18px;color:#868686;word-break:break-word}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment-time[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p.comment[_ngcontent-%COMP%]{margin:0 0 8px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]{display:flex;margin-top:8px;align-items:center}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#556080;margin-right:10px;font-size:16px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   .like-cover[_ngcontent-%COMP%]   .see-hide-replies[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#000;margin-left:50px;font-size:11px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]{width:100%;padding:10px 0 0 60px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]:not(:first-child){padding-top:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]:not(:last-child){padding-bottom:5px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .img-cover[_ngcontent-%COMP%]{width:32px;height:32px}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]{padding-left:10px;width:calc(100% - 32px)}[_nghost-%COMP%]   .common-detail-page-ui[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .users-listing[_ngcontent-%COMP%]   .single-user[_ngcontent-%COMP%]   .comment-listing[_ngcontent-%COMP%]   .single-comment[_ngcontent-%COMP%]   .li-content[_ngcontent-%COMP%]   .textual-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-word}']],data:{}});function f(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,2,"p",[["class","posted-on-date"]],null,null,null,null,null)),(n()(),l.Zb(1,null,["Scheduled On: ",""])),l.Vb(2,1)],null,(function(n,t){var e=t.component,o=l.ac(t,1,0,n(t,2,0,l.Rb(t.parent,2),null==e.adviceDetails?null:e.adviceDetails.postedAt));n(t,1,0,o)}))}function x(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,2,"img",[],[[8,"src",4]],null,null,null,null)),l.Vb(1,2),l.Tb(131072,P.b,[l.i])],null,(function(n,t){var e=t.component,o=l.ac(t,0,0,l.Rb(t,2).transform(l.ac(t,0,0,n(t,1,0,l.Rb(t.parent.parent,0),null==e.adviceDetails?null:e.adviceDetails.mediaUrl,"IMAGE_PLACEHOLDER"))));n(t,0,0,o)}))}function v(n){return l.bc(0,[(n()(),l.Fb(0,0,[["myVideo",1]],null,1,"video",[["controls",""],["id","video"],["loop",""],["muted",""]],[[8,"src",4]],null,null,null,null)),(n()(),l.Zb(-1,null,["Your browser does not support the video tag."]))],null,(function(n,t){var e=t.component;n(t,0,0,null==e.adviceDetails?null:e.adviceDetails.mediaUrl)}))}function w(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,4,"div",[["class","image-detail"]],null,null,null,null,null)),(n()(),l.ub(16777216,null,null,1,null,x)),l.Eb(2,16384,null,0,P.l,[l.ab,l.W],{ngIf:[0,"ngIf"]},null),(n()(),l.ub(16777216,null,null,1,null,v)),l.Eb(4,16384,null,0,P.l,[l.ab,l.W],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,2,0,1==(null==e.adviceDetails?null:e.adviceDetails.mediaType)),n(t,4,0,2==(null==e.adviceDetails?null:e.adviceDetails.mediaType))}),null)}function D(n){return l.bc(0,[l.Tb(0,_.a,[]),l.Tb(0,P.v,[]),l.Tb(0,M.a,[P.e]),(n()(),l.Fb(3,0,null,null,36,"div",[["class","page-daily-advice-details common-detail-page-ui"]],null,null,null,null,null)),(n()(),l.Fb(4,0,null,null,35,"div",[["class","daily-advice-details-content"]],null,null,null,null,null)),(n()(),l.Fb(5,0,null,null,21,"div",[["class","row-1"]],null,null,null,null,null)),(n()(),l.Fb(6,0,null,null,18,"div",[["class","textual-detail"]],null,null,null,null,null)),(n()(),l.Fb(7,0,null,null,17,"div",[["class","card_header_container profile_header"]],null,null,null,null,null)),(n()(),l.Fb(8,0,null,null,10,"div",[["class","card_header"]],null,null,null,null,null)),(n()(),l.Fb(9,0,null,null,3,"figure",[["class","image-cover"],["mat-card-avatar",""]],null,null,null,null,null)),(n()(),l.Fb(10,0,null,null,2,"img",[["alt",""],["class","img-cover-fit"]],[[8,"src",4]],null,null,null,null)),l.Vb(11,2),l.Tb(131072,P.b,[l.i]),(n()(),l.Fb(13,0,null,null,5,"div",[["class","heading-cover"]],null,null,null,null,null)),(n()(),l.Fb(14,0,null,null,2,"a",[["class","user_name"],["href","javascript:void()"]],null,null,null,null,null)),(n()(),l.Zb(15,null,["",""])),l.Vb(16,1),(n()(),l.ub(16777216,null,null,1,null,f)),l.Eb(18,16384,null,0,P.l,[l.ab,l.W],{ngIf:[0,"ngIf"]},null),(n()(),l.Fb(19,0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),l.Zb(20,null,["",""])),l.Vb(21,1),(n()(),l.Fb(22,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),l.Zb(23,null,["",""])),l.Vb(24,1),(n()(),l.ub(16777216,null,null,1,null,w)),l.Eb(26,16384,null,0,P.l,[l.ab,l.W],{ngIf:[0,"ngIf"]},null),(n()(),l.Fb(27,0,null,null,10,"div",[["class","row-2"]],null,null,null,null,null)),(n()(),l.Fb(28,0,null,null,4,"div",[["class","like-cover"]],null,[[null,"click"]],(function(n,t,e){var l=!0,o=n.component;return"click"===t&&(l=!1!==o.likeHandler(o.adviceDetails._id,null==o.adviceDetails?null:o.adviceDetails.likeCount)&&l),l}),null,null)),(n()(),l.Fb(29,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),l.Zb(-1,null,["thumb_up"])),(n()(),l.Fb(31,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Zb(32,null,["",""])),(n()(),l.Fb(33,0,null,null,4,"div",[["class","like-cover"]],null,null,null,null,null)),(n()(),l.Fb(34,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),l.Zb(-1,null,["comment"])),(n()(),l.Fb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Zb(37,null,["",""])),(n()(),l.Fb(38,0,null,null,1,"app-comments-show",[],null,null,null,C.b,C.a)),l.Eb(39,638976,null,0,O.a,[i.a,m.e],{commentId:[0,"commentId"]},null)],(function(n,t){var e=t.component;n(t,18,0,null==e.adviceDetails?null:e.adviceDetails.postedAt),n(t,26,0,null==e.adviceDetails?null:e.adviceDetails.mediaUrl),n(t,39,0,null==e.adviceDetails?null:e.adviceDetails._id)}),(function(n,t){var e=t.component,o=l.ac(t,10,0,l.Rb(t,12).transform(l.ac(t,10,0,n(t,11,0,l.Rb(t,0),null!=e.adviceDetails&&null!=e.adviceDetails.adminData[0]&&e.adviceDetails.adminData[0].profilePicture?null==e.adviceDetails?null:null==e.adviceDetails.adminData[0]?null:e.adviceDetails.adminData[0].profilePicture:null==e.adviceDetails?null:null==e.adviceDetails.addedBy?null:e.adviceDetails.addedBy.profilePicture,"USERS"))));n(t,10,0,o);var i=l.ac(t,15,0,n(t,16,0,l.Rb(t,1),null!=e.adviceDetails&&null!=e.adviceDetails.adminData[0]&&e.adviceDetails.adminData[0].name?null==e.adviceDetails?null:null==e.adviceDetails.adminData[0]?null:e.adviceDetails.adminData[0].name:null==e.adviceDetails?null:null==e.adviceDetails.addedBy?null:e.adviceDetails.addedBy.name));n(t,15,0,i);var c=l.ac(t,20,0,n(t,21,0,l.Rb(t,1),null==e.adviceDetails?null:e.adviceDetails.title));n(t,20,0,c);var a=l.ac(t,23,0,n(t,24,0,l.Rb(t,1),null==e.adviceDetails?null:e.adviceDetails.description));n(t,23,0,a),n(t,32,0,null==e.adviceDetails?null:e.adviceDetails.likeCount),n(t,37,0,null==e.adviceDetails?null:e.adviceDetails.commentCount)}))}function y(n){return l.bc(0,[(n()(),l.Fb(0,0,null,null,1,"app-daily-advice-details",[],null,null,null,D,h)),l.Eb(1,114688,null,0,a,[b.a,o.a,i.a,m.e],null,null)],(function(n,t){n(t,1,0)}),null)}var k=l.Bb("app-daily-advice-details",a,y,{},{},[]),F=e("eDkP"),R=e("Fzqc"),$=e("mVsa"),E=e("FTgb"),z=e("4c35"),I=e("dWZg"),Z=e("qAlS"),S=e("Wf4p"),j=e("ZYjt"),V=e("UodH"),A=e("SMsm"),B=e("Wy86"),H=e("Y4Jk"),T=e("zeKH"),L=e("wLVv"),U=e("Nu6l"),W=e("H+gl"),Y=e("/k2x");e.d(t,"DailyAdviceDetailsModuleNgFactory",(function(){return N}));var N=l.Cb(u,[],(function(n){return l.Ob([l.Pb(512,l.l,l.nb,[[8,[g.a,r.a,s.a,d.a,p.a,k]],[3,l.l],l.F]),l.Pb(4608,P.n,P.m,[l.B,[2,P.E]]),l.Pb(4608,F.d,F.d,[F.j,F.f,l.l,F.i,F.g,l.x,l.H,P.d,R.b,[2,P.h]]),l.Pb(5120,F.k,F.l,[F.d]),l.Pb(5120,m.c,m.d,[F.d]),l.Pb(135680,m.e,m.e,[F.d,l.x,[2,P.h],[2,m.b],m.c,[3,m.e],F.f]),l.Pb(5120,$.c,$.j,[F.d]),l.Pb(4608,P.e,P.e,[l.B]),l.Pb(4608,i.a,i.a,[E.a]),l.Pb(1073742336,P.c,P.c,[]),l.Pb(1073742336,b.s,b.s,[[2,b.x],[2,b.o]]),l.Pb(1073742336,R.a,R.a,[]),l.Pb(1073742336,z.g,z.g,[]),l.Pb(1073742336,I.b,I.b,[]),l.Pb(1073742336,Z.c,Z.c,[]),l.Pb(1073742336,F.h,F.h,[]),l.Pb(1073742336,S.n,S.n,[[2,S.f],[2,j.f]]),l.Pb(1073742336,m.i,m.i,[]),l.Pb(1073742336,S.w,S.w,[]),l.Pb(1073742336,V.c,V.c,[]),l.Pb(1073742336,A.c,A.c,[]),l.Pb(1073742336,$.i,$.i,[]),l.Pb(1073742336,$.f,$.f,[]),l.Pb(1073742336,B.a,B.a,[]),l.Pb(1073742336,H.a,H.a,[]),l.Pb(1073742336,T.a,T.a,[]),l.Pb(1073742336,L.a,L.a,[]),l.Pb(1073742336,U.a,U.a,[]),l.Pb(1073742336,W.a,W.a,[]),l.Pb(1073742336,Y.a,Y.a,[]),l.Pb(1073742336,u,u,[]),l.Pb(1024,b.m,(function(){return[[{path:"",component:a}]]}),[])])}))},wLVv:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){return function(){}}()}}]);