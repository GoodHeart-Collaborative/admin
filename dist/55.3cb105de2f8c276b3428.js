(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{r3TH:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("mrSG"),i=function(){function n(n,l,t){this.$fb=n,this.dialogRef=l,this.dateFilterObject={label:"User Date Filter",maxFromDate:new Date},this.isProcessing=!0,this.getFilterForm(),this.dateFilterObject=o.__assign({},this.dateFilterObject,this.userFilterForm.controls),t&&this.userFilterForm.patchValue(t)}return n.prototype.ngOnInit=function(){},n.prototype.getFilterForm=function(){this.userFilterForm=this.$fb.group({fromDate:[],toDate:[]})},n.prototype.onApplyHandler=function(){if(this.userFilterForm.valid&&this.userFilterForm.touched){this.isProcessing=!1;var n=o.__assign({},this.userFilterForm.value);this.dialogRef.close(n)}},n.prototype.resetFilter=function(){this.userFilterForm.reset();var n=o.__assign({},this.userFilterForm.value);this.dialogRef.close(n)},n}(),u={pageIndex:0,pageSize:10,total:0,rows:null},r=function(){return function(n){void 0===n&&(n=u),this.data=n,this.label="Users Management",this.columns=[{title:"Profile Image",id:"profilePicUrl",sorting:!0,templateBy:"profilePicUrl"},{title:"Name",id:"name",sorting:!0,templateBy:"name"},{title:"Email ID",id:"email",sorting:!1,resolve:function(n){return n.email||"-"}},{title:"Mobile Number",id:"phoneNo",sorting:!1,templateBy:"mobileNo"},{title:"Added On",id:"createdAt",sorting:!0,templateBy:"createdAt"},{title:"Status",id:"status",sorting:!1,templateBy:"status"},{title:"Actions",id:"actions",sorting:!1,templateBy:"actions"}],this.options={selection:!1,search:"Search by Name, Email",index:!0,sorting:!0,filterComponent:i}}}(),a=t("VqtJ"),c=t("+7By"),s=(t("6lGI"),t("iiAa")),b=t("bFx8"),d=function(){function n(n,l,t,e,o){this.$router=n,this.$userService=l,this.$confirmBox=t,this.$utility=e,this.matDailog=o,this.tableSource=new r,this.eventData={pageIndex:0,pageSize:10,searchText:null,filterData:null,sortData:null}}return n.prototype.ngOnInit=function(){this.updateUsers()},n.prototype.updateUsers=function(){var n=this,l=this.eventData,t=l.searchText,e=l.filterData,o=l.sortData,i={page:""+(l.pageIndex+1),limit:""+l.pageSize};e&&Object.keys(e).filter((function(n){return e[n]})).forEach((function(n){if("fromDate"===n||"toDate"===n){var l=e[n];"toDate"===n&&l&&l.setHours(23,59,59,999),i[n]=""+new Date(l).getTime()}else i[n]=e[n]})),t&&(i.searchTerm=t),o&&(i.sortOrder=o.sortOrder,i.sortBy=o.sortBy),this.$userService.queryData(i).then((function(l){n.userData=l.data,n.setUpTableResource(n.userData)}))},n.prototype.onDetailsHandler=function(n){this.$router.navigate([c.USER.fullUrl,n,"details"])},n.prototype.onOptionChange=function(n){this.eventData=n.data,this.updateUsers()},n.prototype.onActionHandler=function(n,l){var t=this,e=this.userData.data.findIndex((function(l){return l._id===n}));this.$confirmBox.listAction("User",l).subscribe((function(o){o&&t.$userService.onVerifiedHnadler(n,{status:l}).then((function(n){t.$utility.success(n.message),t.handleActions(l,e)}))}))},n.prototype.handleActions=function(n,l){switch(n){case"deleted":this.userData.data.splice(l,1),this.userData.total=this.userData.total-1;break;case"active":case"blocked":this.handleStatus(n,l)}this.setUpTableResource(this.userData)},n.prototype.handleStatus=function(n,l){this.userData.data=this.userData.data.map((function(t,e){return e===l&&(t.status=n),t}))},n.prototype.setUpTableResource=function(n){var l=this.eventData;this.tableSource=new r({pageIndex:l.pageIndex,pageSize:l.pageSize,rows:n.data,total:n.total})},n.prototype.onverifyHandler=function(n,l){var t=this;this.$confirmBox.listAction("User",""+l).subscribe((function(e){e&&t.$userService.onVerifiedHnadler(n,{adminStatus:l}).then((function(n){n&&t.updateUsers()}))}))},n.prototype.onImageClick=function(n){this.matDailog.open(b.a,{panelClass:"view-full-image-modal",data:n}).afterClosed().subscribe()},n}(),p=function(){return function(){}}(),f=t("pMnS"),m=t("NcP4"),g=t("t68o"),h=t("jELV"),D=t("zbXB"),x=t("CdlJ"),v=t("/Y/u"),w=t("Ip0R"),y=t("+xuN"),P=t("d8nK"),F=t("dwss"),O=t("WFug"),k=t("o3x0"),C=t("16g+"),M=t("ZYCi"),_=t("Ay4O"),N=e.rb({encapsulation:0,styles:[["[_nghost-%COMP%]   .mobile-content[_ngcontent-%COMP%]{position:relative;display:inline-block}[_nghost-%COMP%]   .mobile-content[_ngcontent-%COMP%]   .verified-icon[_ngcontent-%COMP%]{display:none;position:absolute;left:-24px;top:-2px;font-size:20px;color:green}[_nghost-%COMP%]   .mobile-content.verified-user[_ngcontent-%COMP%]{margin-left:10px}[_nghost-%COMP%]   .mobile-content.verified-user[_ngcontent-%COMP%]   .verified-icon[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .icon-check[_ngcontent-%COMP%]{color:#0b805f;font-size:21px}[_nghost-%COMP%]   .icon-deny[_ngcontent-%COMP%]{color:#cc9211}.category-image-cover[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:3px;margin:auto;display:flex;cursor:pointer;align-items:center;justify-content:center}.category-image-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:auto;border-radius:3px;max-width:100%;max-height:100%}"]],data:{}});function S(n){return e.Pb(0,[(n()(),e.Nb(0,null,[" "," "])),e.Jb(1,1)],null,(function(n,l){var t=e.Ob(l,0,0,n(l,1,0,e.Fb(l.parent,0),null==l.context.row?null:l.context.row.createdAt));n(l,0,0,t)}))}function j(n){return e.Pb(0,[(n()(),e.Nb(0,null,[" "," "])),e.Jb(1,1)],null,(function(n,l){var t=e.Ob(l,0,0,n(l,1,0,e.Fb(l.parent,1),null==l.context.row?null:l.context.row.status));n(l,0,0,t)}))}function U(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,3,"div",[["class","category-image-cover"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,2,"img",[["alt","category-image"]],[[8,"src",4]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onImageClick(null==n.context.row?null:n.context.row.profilePicUrl[0])&&e),e}),null,null)),e.Jb(2,2),e.Hb(131072,w.b,[e.h])],null,(function(n,l){var t=e.Ob(l,1,0,e.Fb(l,3).transform(e.Ob(l,1,0,n(l,2,0,e.Fb(l.parent,2),null==l.context.row?null:l.context.row.profilePicUrl[0],"USER"))));n(l,1,0,t)}))}function H(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"span",[["class","material-icons verified-icon"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,["verified_user"]))],null,null)}function I(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,4,"div",[["class","mobile-content"]],[[2,"verified-user",null]],null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,H)),e.sb(2,16384,null,0,w.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(4,null,["",""]))],(function(n,l){n(l,2,0,(null==l.context.row?null:l.context.row.isMobileVerified)&&((null==l.context.row?null:l.context.row.mobileNo)||(null==l.context.row?null:l.context.row.fullMobileNo)))}),(function(n,l){n(l,0,0,null==l.context.row?null:l.context.row.isMobileVerified),n(l,4,0,null!=l.context.row&&l.context.row.mobileNo?null==l.context.row?null:l.context.row.mobileNo:(null==l.context.row?null:l.context.row.fullMobileNo)||"-")}))}function A(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,3,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onDetailsHandler(null==n.context.row?null:n.context.row._id)&&e),e}),null,null)),(n()(),e.Nb(1,null,[" "," "," "])),e.Jb(2,1),e.Jb(3,1)],null,(function(n,l){var t=e.Ob(l,1,0,n(l,2,0,e.Fb(l.parent,1),null==l.context.row?null:l.context.row.firstName)),o=e.Ob(l,1,1,n(l,3,0,e.Fb(l.parent,1),null==l.context.row?null:l.context.row.lastName));n(l,1,0,t,o)}))}function B(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"i",[["class","material-icons icon-block"],["title","Block user"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onActionHandler(n.parent.context.row._id,"blocked")&&e),e}),null,null)),(n()(),e.Nb(-1,null,[" blocked"]))],null,null)}function $(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"i",[["class","material-icons icon-unblock"],["title","Unblock user"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onActionHandler(n.parent.context.row._id,"active")&&e),e}),null,null)),(n()(),e.Nb(-1,null,[" lock_open "]))],null,null)}function R(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,9,"div",[["class","action-icon-cover"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"i",[["class","material-icons icon-check icon-edit"],["title","Verify User"]],[[2,"disabled-icon",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onverifyHandler(null==n.context.row?null:n.context.row._id,"verified")&&e),e}),null,null)),(n()(),e.Nb(-1,null,[" check_circle "])),(n()(),e.tb(3,0,null,null,1,"i",[["class","material-icons icon-deny"],["title","Reject User"]],[[2,"disabled-icon",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onverifyHandler(null==n.context.row?null:n.context.row._id,"rejected")&&e),e}),null,null)),(n()(),e.Nb(-1,null,[" thumb_down_alt "])),(n()(),e.tb(5,0,null,null,1,"i",[["class","material-icons icon-delete"],["title","Delete user"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onActionHandler(n.context.row._id,"deleted")&&e),e}),null,null)),(n()(),e.Nb(-1,null,[" delete "])),(n()(),e.ib(16777216,null,null,1,null,B)),e.sb(8,16384,null,0,w.l,[e.P,e.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.ib(0,[["templateAction",2]],null,0,null,$))],(function(n,l){n(l,8,0,"active"===(null==l.context.row?null:l.context.row.status),e.Fb(l,9))}),(function(n,l){n(l,1,0,"verified"==(null==l.context.row?null:l.context.row.adminStatus)),n(l,3,0,"rejected"==(null==l.context.row?null:l.context.row.adminStatus))}))}function V(n){return e.Pb(0,[e.Hb(0,y.a,[w.e]),e.Hb(0,w.v,[]),e.Hb(0,P.a,[]),(n()(),e.tb(3,0,null,null,15,"app-table",[],null,[[null,"optionChange"]],(function(n,l,t){var e=!0;return"optionChange"===l&&(e=!1!==n.component.onOptionChange(t)&&e),e}),F.b,F.a)),e.sb(4,638976,null,1,O.a,[k.e],{tableSource:[0,"tableSource"]},{optionChange:"optionChange"}),e.Lb(603979776,1,{templates:1}),(n()(),e.ib(0,null,null,1,null,S)),e.sb(7,16384,[[1,4]],0,C.a,[e.M],{name:[0,"name"]},null),(n()(),e.ib(0,null,null,1,null,j)),e.sb(9,16384,[[1,4]],0,C.a,[e.M],{name:[0,"name"]},null),(n()(),e.ib(0,null,null,1,null,U)),e.sb(11,16384,[[1,4]],0,C.a,[e.M],{name:[0,"name"]},null),(n()(),e.ib(0,null,null,1,null,I)),e.sb(13,16384,[[1,4]],0,C.a,[e.M],{name:[0,"name"]},null),(n()(),e.ib(0,null,null,1,null,A)),e.sb(15,16384,[[1,4]],0,C.a,[e.M],{name:[0,"name"]},null),(n()(),e.tb(16,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.ib(0,null,null,1,null,R)),e.sb(18,16384,[[1,4]],0,C.a,[e.M],{name:[0,"name"]},null)],(function(n,l){n(l,4,0,l.component.tableSource),n(l,7,0,"createdAt"),n(l,9,0,"status"),n(l,11,0,"profilePicUrl"),n(l,13,0,"mobileNo"),n(l,15,0,"name"),n(l,18,0,"actions")}),null)}function z(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"app-user-listing",[],null,null,null,V,N)),e.sb(1,114688,null,0,d,[M.o,a.a,_.a,s.a,k.e],null,null)],(function(n,l){n(l,1,0)}),null)}var E=e.pb("app-user-listing",d,z,{},{},[]),T=t("rX5D"),J=t("xEON"),q=t("gTdI"),L=t("gIcY"),G=e.rb({encapsulation:0,styles:[[""]],data:{}});function K(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,3,"app-filter",[],null,[[null,"apply"],[null,"reset"]],(function(n,l,t){var e=!0,o=n.component;return"apply"===l&&(e=!1!==o.onApplyHandler()&&e),"reset"===l&&(e=!1!==o.resetFilter()&&e),e}),h.c,h.b)),e.sb(1,114688,null,0,T.a,[k.j],{disableValue:[0,"disableValue"]},{apply:"apply",reset:"reset"}),(n()(),e.tb(2,0,null,0,1,"app-date-filter",[],null,null,null,J.b,J.a)),e.sb(3,114688,null,0,q.a,[],{dateObject:[0,"dateObject"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.userFilterForm.touched),n(l,3,0,t.dateFilterObject)}),null)}function Y(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"app-users-listing-filter",[],null,null,null,K,G)),e.sb(1,114688,null,0,i,[L.e,k.j,k.a],null,null)],(function(n,l){n(l,1,0)}),null)}var W=e.pb("app-users-listing-filter",i,Y,{},{},[]),Z=t("OkvK"),X=t("M2Lx"),Q=t("Wf4p"),nn=t("eDkP"),ln=t("Fzqc"),tn=t("uGex"),en=t("v9Dh"),on=t("ZYjt"),un=t("4epT"),rn=t("mVsa"),an=t("dWZg"),cn=t("jQLj"),sn=t("y4qS"),bn=t("BHnd"),dn=t("SMsm"),pn=t("UodH"),fn=t("/VYK"),mn=t("seP3"),gn=t("b716"),hn=t("de3e"),Dn=t("4c35"),xn=t("qAlS"),vn=t("lLAP"),wn=t("8CHP"),yn=t("me96"),Pn=t("u7R8"),Fn=t("ZKma"),On=t("RrX5"),kn=t("gdGC"),Cn=t("NnC3"),Mn=t("Wy86"),_n=t("zeKH");t.d(l,"UserListingModuleNgFactory",(function(){return Nn}));var Nn=e.qb(p,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[f.a,m.a,g.a,h.a,D.b,D.a,x.a,v.a,E,W]],[3,e.j],e.x]),e.Db(4608,w.n,w.m,[e.u,[2,w.E]]),e.Db(5120,Z.d,Z.a,[[3,Z.d]]),e.Db(4608,X.c,X.c,[]),e.Db(4608,Q.d,Q.d,[]),e.Db(4608,nn.c,nn.c,[nn.i,nn.e,e.j,nn.h,nn.f,e.r,e.z,w.d,ln.b,[2,w.h]]),e.Db(5120,nn.j,nn.k,[nn.c]),e.Db(5120,tn.a,tn.b,[nn.c]),e.Db(5120,en.b,en.c,[nn.c]),e.Db(4608,on.e,Q.e,[[2,Q.i],[2,Q.n]]),e.Db(5120,un.c,un.a,[[3,un.c]]),e.Db(5120,k.c,k.d,[nn.c]),e.Db(135680,k.e,k.e,[nn.c,e.r,[2,w.h],[2,k.b],k.c,[3,k.e],nn.e]),e.Db(5120,rn.c,rn.j,[nn.c]),e.Db(4608,L.w,L.w,[]),e.Db(4608,L.e,L.e,[]),e.Db(4608,Q.c,Q.x,[[2,Q.h],an.a]),e.Db(4608,cn.i,cn.i,[]),e.Db(5120,cn.a,cn.b,[nn.c]),e.Db(4608,w.e,w.e,[e.u]),e.Db(4608,_.a,_.a,[k.e]),e.Db(1073742336,w.c,w.c,[]),e.Db(1073742336,M.s,M.s,[[2,M.x],[2,M.o]]),e.Db(1073742336,Z.e,Z.e,[]),e.Db(1073742336,sn.p,sn.p,[]),e.Db(1073742336,ln.a,ln.a,[]),e.Db(1073742336,Q.n,Q.n,[[2,Q.f],[2,on.f]]),e.Db(1073742336,bn.m,bn.m,[]),e.Db(1073742336,dn.c,dn.c,[]),e.Db(1073742336,an.b,an.b,[]),e.Db(1073742336,Q.w,Q.w,[]),e.Db(1073742336,pn.c,pn.c,[]),e.Db(1073742336,fn.c,fn.c,[]),e.Db(1073742336,X.d,X.d,[]),e.Db(1073742336,mn.e,mn.e,[]),e.Db(1073742336,gn.c,gn.c,[]),e.Db(1073742336,hn.d,hn.d,[]),e.Db(1073742336,hn.c,hn.c,[]),e.Db(1073742336,Dn.g,Dn.g,[]),e.Db(1073742336,xn.c,xn.c,[]),e.Db(1073742336,nn.g,nn.g,[]),e.Db(1073742336,Q.u,Q.u,[]),e.Db(1073742336,Q.s,Q.s,[]),e.Db(1073742336,tn.d,tn.d,[]),e.Db(1073742336,vn.a,vn.a,[]),e.Db(1073742336,en.e,en.e,[]),e.Db(1073742336,un.d,un.d,[]),e.Db(1073742336,k.i,k.i,[]),e.Db(1073742336,wn.a,wn.a,[]),e.Db(1073742336,rn.i,rn.i,[]),e.Db(1073742336,rn.f,rn.f,[]),e.Db(1073742336,L.v,L.v,[]),e.Db(1073742336,L.j,L.j,[]),e.Db(1073742336,L.s,L.s,[]),e.Db(1073742336,yn.a,yn.a,[]),e.Db(1073742336,Pn.a,Pn.a,[]),e.Db(1073742336,Fn.a,Fn.a,[]),e.Db(1073742336,Q.y,Q.y,[]),e.Db(1073742336,Q.p,Q.p,[]),e.Db(1073742336,cn.j,cn.j,[]),e.Db(1073742336,On.a,On.a,[]),e.Db(1073742336,kn.a,kn.a,[]),e.Db(1073742336,Cn.a,Cn.a,[]),e.Db(1073742336,Mn.a,Mn.a,[]),e.Db(1073742336,_n.a,_n.a,[]),e.Db(1073742336,p,p,[]),e.Db(256,Q.g,Q.k,[]),e.Db(1024,M.m,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);