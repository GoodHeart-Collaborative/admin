(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{rDf9:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),o=t("mrSG"),u=function(){function l(l,n,t){this.$fb=l,this.dialogRef=n,this.dateFilterObject={label:"Forum Filter",maxFromDate:new Date},this.statusList=[{view:"Active",value:"active"},{view:"Blocked",value:"blocked"}],this.isProcessing=!0,this.getFilterForm(),this.dateFilterObject=o.__assign({},this.dateFilterObject,this.filterForm.controls),t&&this.filterForm.patchValue(t)}return l.prototype.ngOnInit=function(){},l.prototype.getFilterForm=function(){this.filterForm=this.$fb.group({fromDate:[],toDate:[],status:[]})},l.prototype.onApplyHandler=function(){if(this.filterForm.valid){this.isProcessing=!1;var l=o.__assign({},this.filterForm.value);this.dialogRef.close(l)}},l.prototype.resetFilter=function(){if(Object.values(this.filterForm.value).every((function(l){return null==l})))this.dialogRef.close();else{this.filterForm.reset();var l=o.__assign({},this.filterForm.value);this.dialogRef.close(l)}},l}(),a={pageIndex:0,pageSize:10,total:0,rows:null},i=function(){return function(l){void 0===l&&(l=a),this.data=l,this.label="Forum Management",this.columns=[{title:"Description",id:"description",sorting:!1,templateBy:"description"},{title:"Post Anonymous",id:"postAnonymous",sorting:!1,templateBy:"postAnonymous"},{title:"Posted By",id:"userType",sorting:!1,templateBy:"userType"},{title:"Category Name",id:"categoryName",sorting:!1,templateBy:"categoryName"},{title:"Total Likes",id:"likeCount",sorting:!1,templateBy:"likeCount"},{title:"Total Comments",id:"commentCount",sorting:!1,templateBy:"commentCount"},{title:"Total Report",id:"reportCount",sorting:!1,templateBy:"reportCount"},{title:"Added On",id:"createdAt",sorting:!0,templateBy:"createdAt"},{title:"Status",id:"status",sorting:!1,templateBy:"status"},{title:"Actions",id:"actions",sorting:!1,templateBy:"actions"}],this.options={selection:!1,search:"Search by Description",index:!0,addComponent:!0,sorting:!0,filterComponent:u}}}(),r=t("z3zx"),c=(t("6lGI"),t("iiAa")),b=t("+7By"),s=t("EgcD"),d=t("dIk+"),p=t("EB96"),m=t("y4Nj"),f=t("9e+O"),g=function(){function l(l,n,t,e,o,u){this.$forum=l,this.$router=n,this.$confirmBox=t,this.$utility=e,this.$matDailog=o,this.$common=u,this.tableSource=new i,this.eventData={pageIndex:0,pageSize:10,searchText:null,filterData:null,sortData:null}}return l.prototype.ngOnInit=function(){this.updateUsers()},l.prototype.updateUsers=function(){var l=this,n=this.eventData,t=n.searchText,e=n.filterData,o=n.sortData,u={page:""+(n.pageIndex+1),limit:""+n.pageSize};e&&Object.keys(e).filter((function(l){return e[l]})).forEach((function(l){if("fromDate"===l||"toDate"===l){var n=e[l];"toDate"===l&&n&&n.setHours(23,59,59,999),u[l]=""+new Date(n).toISOString()}else u[l]=e[l]})),t&&(u.searchTerm=t),o&&(u.sortOrder=o.sortOrder,u.sortBy=o.sortBy),this.$forum.queryData(u).then((function(n){l.forumData=n.data.list,l.total=n.data.total,l.setUpTableResource(l.forumData)}))},l.prototype.onOptionChange=function(l){this.eventData=l.data,this.updateUsers()},l.prototype.onActionHandler=function(l,n){var t=this;console.log(this.forumData);var e=this.forumData.findIndex((function(n){return n._id===l}));this.$confirmBox.listAction("forum","active"==n?"Active":"deleted"==n?"Delete":"Block").subscribe((function(o){o&&t.$forum.updateStatus(l,n).then((function(l){t.$utility.success(l.message),t.handleActions(n,e)}))}))},l.prototype.handleActions=function(l,n){switch(l){case"deleted":this.forumData.splice(n,1),this.forumData.total=this.forumData.total-1;break;case"active":case"blocked":this.handleStatus(l,n)}this.setUpTableResource(this.forumData)},l.prototype.handleStatus=function(l,n){this.forumData=this.forumData.map((function(t,e){return e===n&&(t.status=l),t}))},l.prototype.setUpTableResource=function(l){var n=this.eventData;this.tableSource=new i({pageIndex:n.pageIndex,pageSize:n.pageSize,rows:l,total:this.total})},l.prototype.onAdd=function(){this.$router.navigate([""+b.ADD_FORUM.fullUrl])},l.prototype.onDetails=function(l,n){this.$router.navigate([""+b.FORUM.fullUrl,l,"details"],{queryParams:{type:n}})},l.prototype.oneditHandler=function(l,n){"user"!=n&&this.$router.navigate([""+b.FORUM.fullUrl,"edit",l],{queryParams:{type:n}})},l.prototype.likeHandler=function(l,n){var t=this;n&&this.$common.onLikeHandler(l).then((function(l){t.onlikeHandler(l.data.list,n)}))},l.prototype.onlikeHandler=function(l,n){this.$matDailog.open(s.a,{width:"500px",data:l}).afterClosed().subscribe()},l.prototype.onCommentsHandler=function(l,n){n&&this.$matDailog.open(d.a,{width:"500px",data:l}).afterClosed().subscribe()},l.prototype.onReportProblem=function(l,n,t){var e=this;void 0===t&&(t=f.l.FORUM),n&&this.$common.onReportProblemHandler(l,t).then((function(l){l&&l.data&&e.$matDailog.open(m.a,{width:"500px",data:l.data.data}).afterClosed().subscribe()}))},l}(),h=function(){return function(){}}(),w=t("pMnS"),y=t("NcP4"),v=t("t68o"),R=t("jELV"),x=t("zbXB"),P=t("/Y/u"),C=t("o2yI"),F=t("5hce"),k=t("/ygI"),_=t("Ip0R"),D=t("+xuN"),A=t("dwss"),S=t("WFug"),E=t("o3x0"),O=t("16g+"),B=t("ZYCi"),j=t("Ay4O"),H=e.Db({encapsulation:0,styles:[[""]],data:{}});function I(l){return e.bc(0,[(l()(),e.Zb(0,null,[" "," "])),e.Vb(1,1)],null,(function(l,n){var t=e.ac(n,0,0,l(n,1,0,e.Rb(n.parent,0),null==n.context.row?null:n.context.row.createdAt));l(n,0,0,t)}))}function T(l){return e.bc(0,[(l()(),e.Zb(0,null,[" "," "])),e.Vb(1,1)],null,(function(l,n){var t=e.ac(n,0,0,l(n,1,0,e.Rb(n.parent,1),null==n.context.row?null:n.context.row.status));l(n,0,0,t)}))}function $(l){return e.bc(0,[(l()(),e.Zb(0,null,[" "," "])),e.Vb(1,1)],null,(function(l,n){var t=e.ac(n,0,0,l(n,1,0,e.Rb(n.parent,1),null==n.context.row?null:n.context.row.userType));l(n,0,0,t)}))}function W(l){return e.bc(0,[(l()(),e.Zb(0,null,[" "," "]))],null,(function(l,n){l(n,0,0,null!=n.context.row&&n.context.row.postAnonymous?"True":"False")}))}function U(l){return e.bc(0,[(l()(),e.Zb(0,null,[" "," "])),e.Vb(1,1)],null,(function(l,n){var t=e.ac(n,0,0,l(n,1,0,e.Rb(n.parent,1),null==n.context.row?null:null==n.context.row.categoryData?null:n.context.row.categoryData.title));l(n,0,0,t)}))}function Z(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,1,"a",[],[[2,"color-black",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onCommentsHandler(null==l.context.row?null:l.context.row._id,null==l.context.row?null:l.context.row.commentCount)&&e),e}),null,null)),(l()(),e.Zb(1,null,[" "," "]))],null,(function(l,n){l(n,0,0,(null==n.context.row?null:n.context.row.commentCount)<1),l(n,1,0,(null==n.context.row?null:n.context.row.commentCount)||0)}))}function X(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,1,"a",[],[[2,"color-black",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.likeHandler(null==l.context.row?null:l.context.row._id,null==l.context.row?null:l.context.row.likeCount)&&e),e}),null,null)),(l()(),e.Zb(1,null,[" "," "]))],null,(function(l,n){l(n,0,0,(null==n.context.row?null:n.context.row.likeCount)<1),l(n,1,0,(null==n.context.row?null:n.context.row.likeCount)||0)}))}function V(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,4,"a",[],[[2,"erroneous",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onReportProblem(null==l.context.row?null:l.context.row._id,null==l.context.row?null:l.context.row.reportCount)&&e),e}),null,null)),e.Wb(512,null,_.z,_.A,[e.z,e.A,e.n,e.O]),e.Eb(2,278528,null,0,_.j,[_.z],{ngClass:[0,"ngClass"]},null),e.Ub(3,{"color-black":0,erroneous:1}),(l()(),e.Zb(4,null,[" "," "]))],(function(l,n){var t=l(n,3,0,!n.context.row.reportCount,n.context.row.reportCount<=10);l(n,2,0,t)}),(function(l,n){l(n,0,0,(null==n.context.row?null:n.context.row.reportCount)<10),l(n,4,0,(null==n.context.row?null:n.context.row.reportCount)||0)}))}function z(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,3,"a",[["href","javascript:void(0)"]],[[8,"title",0]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onDetails(null==l.context.row?null:l.context.row._id,null==l.context.row?null:l.context.row.userType)&&e),e}),null,null)),e.Vb(1,1),(l()(),e.Zb(2,null,[" "," "])),e.Vb(3,1)],null,(function(l,n){var t=e.Jb(1,"",e.ac(n,0,0,l(n,1,0,e.Rb(n.parent,1),null==n.context.row?null:n.context.row.description))||"String","");l(n,0,0,t);var o=e.ac(n,2,0,l(n,3,0,e.Rb(n.parent,1),null==n.context.row?null:n.context.row.description))||"String";l(n,2,0,o)}))}function L(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,1,"i",[["class","material-icons icon-block"],["title","Block"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onActionHandler(l.parent.context.row._id,"blocked")&&e),e}),null,null)),(l()(),e.Zb(-1,null,[" blocked"]))],null,null)}function q(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,1,"i",[["class","material-icons icon-unblock"],["title","Unblock"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onActionHandler(l.parent.context.row._id,"active")&&e),e}),null,null)),(l()(),e.Zb(-1,null,[" lock_open "]))],null,null)}function M(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,7,"div",[["class","action-icon-cover"]],null,null,null,null,null)),(l()(),e.Fb(1,0,null,null,1,"i",[["class","material-icons icon-edit"],["title","Edit"]],[[2,"disabled-icon",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.oneditHandler(null==l.context.row?null:l.context.row._id,null==l.context.row?null:l.context.row.userType)&&e),e}),null,null)),(l()(),e.Zb(-1,null,[" edit "])),(l()(),e.ub(16777216,null,null,1,null,L)),e.Eb(4,16384,null,0,_.l,[e.ab,e.W],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.ub(0,[["templateAction",2]],null,0,null,q)),(l()(),e.Fb(6,0,null,null,1,"i",[["class","material-icons icon-delete"],["title","Delete"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onActionHandler(l.context.row._id,"deleted")&&e),e}),null,null)),(l()(),e.Zb(-1,null,[" delete "]))],(function(l,n){l(n,4,0,"active"===(null==n.context.row?null:n.context.row.status),e.Rb(n,5))}),(function(l,n){l(n,1,0,"user"==(null==n.context.row?null:n.context.row.userType))}))}function N(l){return e.bc(0,[e.Tb(0,D.a,[_.e]),e.Tb(0,_.v,[]),(l()(),e.Fb(2,0,null,null,23,"app-table",[],null,[[null,"optionChange"],[null,"onAddCahnges"]],(function(l,n,t){var e=!0,o=l.component;return"optionChange"===n&&(e=!1!==o.onOptionChange(t)&&e),"onAddCahnges"===n&&(e=!1!==o.onAdd()&&e),e}),A.b,A.a)),e.Eb(3,638976,null,1,S.a,[E.e,c.a],{tableSource:[0,"tableSource"]},{optionChange:"optionChange",onAddCahnges:"onAddCahnges"}),e.Xb(603979776,1,{templates:1}),(l()(),e.ub(0,null,null,1,null,I)),e.Eb(6,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.ub(0,null,null,1,null,T)),e.Eb(8,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.ub(0,null,null,1,null,$)),e.Eb(10,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.ub(0,null,null,1,null,W)),e.Eb(12,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.ub(0,null,null,1,null,U)),e.Eb(14,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.ub(0,null,null,1,null,Z)),e.Eb(16,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.ub(0,null,null,1,null,X)),e.Eb(18,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.ub(0,null,null,1,null,V)),e.Eb(20,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.ub(0,null,null,1,null,z)),e.Eb(22,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null),(l()(),e.Fb(23,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ub(0,null,null,1,null,M)),e.Eb(25,16384,[[1,4]],0,O.a,[e.W],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,n.component.tableSource),l(n,6,0,"createdAt"),l(n,8,0,"status"),l(n,10,0,"userType"),l(n,12,0,"postAnonymous"),l(n,14,0,"categoryName"),l(n,16,0,"commentCount"),l(n,18,0,"likeCount"),l(n,20,0,"reportCount"),l(n,22,0,"description"),l(n,25,0,"actions")}),null)}function G(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,1,"app-forum-listing",[],null,null,null,N,H)),e.Eb(1,114688,null,0,g,[r.a,B.o,j.a,c.a,E.e,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var K=e.Bb("app-forum-listing",g,G,{},{},[]),Y=t("MlvX"),J=t("Wf4p"),Q=t("rX5D"),ll=t("xEON"),nl=t("gTdI"),tl=t("gIcY"),el=t("dJrM"),ol=t("seP3"),ul=t("Fzqc"),al=t("dWZg"),il=t("wFw1"),rl=t("Azqq"),cl=t("uGex"),bl=t("qAlS"),sl=t("lLAP"),dl=e.Db({encapsulation:0,styles:[[""]],data:{}});function pl(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==e.Rb(l,1)._selectViaInteraction()&&o),"keydown"===n&&(o=!1!==e.Rb(l,1)._handleKeydown(t)&&o),o}),Y.c,Y.a)),e.Eb(1,8568832,[[10,4]],0,J.r,[e.n,e.i,[2,J.l],[2,J.q]],{value:[0,"value"]},null),(l()(),e.Zb(2,0,["",""]))],(function(l,n){l(n,1,0,null==n.context.$implicit?null:n.context.$implicit.value)}),(function(l,n){l(n,0,0,e.Rb(n,1)._getTabIndex(),e.Rb(n,1).selected,e.Rb(n,1).multiple,e.Rb(n,1).active,e.Rb(n,1).id,e.Rb(n,1)._getAriaSelected(),e.Rb(n,1).disabled.toString(),e.Rb(n,1).disabled),l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.view)}))}function ml(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,35,"app-filter",[],null,[[null,"apply"],[null,"reset"]],(function(l,n,t){var e=!0,o=l.component;return"apply"===n&&(e=!1!==o.onApplyHandler()&&e),"reset"===n&&(e=!1!==o.resetFilter()&&e),e}),R.c,R.b)),e.Eb(1,114688,null,0,Q.a,[E.j],{disableValue:[0,"disableValue"]},{apply:"apply",reset:"reset"}),(l()(),e.Fb(2,0,null,0,1,"app-date-filter",[],null,null,null,ll.b,ll.a)),e.Eb(3,114688,null,0,nl.a,[],{dateObject:[0,"dateObject"]},null),(l()(),e.Fb(4,0,null,0,31,"div",[],null,null,null,null,null)),(l()(),e.Fb(5,0,null,null,30,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,t){var o=!0;return"submit"===n&&(o=!1!==e.Rb(l,7).onSubmit(t)&&o),"reset"===n&&(o=!1!==e.Rb(l,7).onReset()&&o),o}),null,null)),e.Eb(6,16384,null,0,tl.y,[],null,null),e.Eb(7,540672,null,0,tl.i,[[8,null],[8,null]],{form:[0,"form"]},null),e.Wb(2048,null,tl.c,null,[tl.i]),e.Eb(9,16384,null,0,tl.p,[[4,tl.c]],null,null),(l()(),e.Fb(10,0,null,null,25,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,el.b,el.a)),e.Eb(11,7520256,null,9,ol.c,[e.n,e.i,[2,J.j],[2,ul.b],[2,ol.a],al.a,e.H,[2,il.a]],{appearance:[0,"appearance"]},null),e.Xb(603979776,1,{_controlNonStatic:0}),e.Xb(335544320,2,{_controlStatic:0}),e.Xb(603979776,3,{_labelChildNonStatic:0}),e.Xb(335544320,4,{_labelChildStatic:0}),e.Xb(603979776,5,{_placeholderChild:0}),e.Xb(603979776,6,{_errorChildren:1}),e.Xb(603979776,7,{_hintChildren:1}),e.Xb(603979776,8,{_prefixChildren:1}),e.Xb(603979776,9,{_suffixChildren:1}),(l()(),e.Fb(21,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.Eb(22,16384,[[3,4],[4,4]],0,ol.g,[],null,null),(l()(),e.Zb(-1,null,["Status"])),(l()(),e.Fb(24,0,null,1,11,"mat-select",[["class","mat-select"],["formControlName","status"],["placeholder","Status"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,t){var o=!0;return"keydown"===n&&(o=!1!==e.Rb(l,28)._handleKeydown(t)&&o),"focus"===n&&(o=!1!==e.Rb(l,28)._onFocus()&&o),"blur"===n&&(o=!1!==e.Rb(l,28)._onBlur()&&o),o}),rl.b,rl.a)),e.Wb(6144,null,J.l,null,[cl.c]),e.Eb(26,671744,null,0,tl.h,[[3,tl.c],[8,null],[8,null],[8,null],[2,tl.x]],{name:[0,"name"]},null),e.Wb(2048,null,tl.n,null,[tl.h]),e.Eb(28,2080768,null,3,cl.c,[bl.e,e.i,e.H,J.d,e.n,[2,ul.b],[2,tl.q],[2,tl.i],[2,ol.c],[6,tl.n],[8,null],cl.a,sl.j],{placeholder:[0,"placeholder"]},null),e.Xb(603979776,10,{options:1}),e.Xb(603979776,11,{optionGroups:1}),e.Xb(603979776,12,{customTrigger:0}),e.Eb(32,16384,null,0,tl.o,[[4,tl.n]],null,null),e.Wb(2048,[[1,4],[2,4]],ol.d,null,[cl.c]),(l()(),e.ub(16777216,null,1,1,null,pl)),e.Eb(35,278528,null,0,_.k,[e.ab,e.W,e.z],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.filterForm.touched),l(n,3,0,t.dateFilterObject),l(n,7,0,t.filterForm),l(n,11,0,"outline"),l(n,26,0,"status"),l(n,28,0,"Status"),l(n,35,0,t.statusList)}),(function(l,n){l(n,5,0,e.Rb(n,9).ngClassUntouched,e.Rb(n,9).ngClassTouched,e.Rb(n,9).ngClassPristine,e.Rb(n,9).ngClassDirty,e.Rb(n,9).ngClassValid,e.Rb(n,9).ngClassInvalid,e.Rb(n,9).ngClassPending),l(n,10,1,["standard"==e.Rb(n,11).appearance,"fill"==e.Rb(n,11).appearance,"outline"==e.Rb(n,11).appearance,"legacy"==e.Rb(n,11).appearance,e.Rb(n,11)._control.errorState,e.Rb(n,11)._canLabelFloat,e.Rb(n,11)._shouldLabelFloat(),e.Rb(n,11)._hasFloatingLabel(),e.Rb(n,11)._hideControlPlaceholder(),e.Rb(n,11)._control.disabled,e.Rb(n,11)._control.autofilled,e.Rb(n,11)._control.focused,"accent"==e.Rb(n,11).color,"warn"==e.Rb(n,11).color,e.Rb(n,11)._shouldForward("untouched"),e.Rb(n,11)._shouldForward("touched"),e.Rb(n,11)._shouldForward("pristine"),e.Rb(n,11)._shouldForward("dirty"),e.Rb(n,11)._shouldForward("valid"),e.Rb(n,11)._shouldForward("invalid"),e.Rb(n,11)._shouldForward("pending"),!e.Rb(n,11)._animationsEnabled]),l(n,24,1,[e.Rb(n,28).id,e.Rb(n,28).tabIndex,e.Rb(n,28)._getAriaLabel(),e.Rb(n,28)._getAriaLabelledby(),e.Rb(n,28).required.toString(),e.Rb(n,28).disabled.toString(),e.Rb(n,28).errorState,e.Rb(n,28).panelOpen?e.Rb(n,28)._optionIds:null,e.Rb(n,28).multiple,e.Rb(n,28)._ariaDescribedby||null,e.Rb(n,28)._getAriaActiveDescendant(),e.Rb(n,28).disabled,e.Rb(n,28).errorState,e.Rb(n,28).required,e.Rb(n,28).empty,e.Rb(n,32).ngClassUntouched,e.Rb(n,32).ngClassTouched,e.Rb(n,32).ngClassPristine,e.Rb(n,32).ngClassDirty,e.Rb(n,32).ngClassValid,e.Rb(n,32).ngClassInvalid,e.Rb(n,32).ngClassPending])}))}function fl(l){return e.bc(0,[(l()(),e.Fb(0,0,null,null,1,"app-listing-filter",[],null,null,null,ml,dl)),e.Eb(1,114688,null,0,u,[tl.e,E.j,E.a],null,null)],(function(l,n){l(n,1,0)}),null)}var gl=e.Bb("app-listing-filter",u,fl,{},{},[]),hl=t("OkvK"),wl=t("M2Lx"),yl=t("eDkP"),vl=t("v9Dh"),Rl=t("ZYjt"),xl=t("4epT"),Pl=t("mVsa"),Cl=t("ARUE"),Fl=t("jQLj"),kl=t("y4qS"),_l=t("BHnd"),Dl=t("SMsm"),Al=t("UodH"),Sl=t("/VYK"),El=t("b716"),Ol=t("de3e"),Bl=t("4c35"),jl=t("8CHP"),Hl=t("jmHB"),Il=t("me96"),Tl=t("u7R8"),$l=t("6Wmm"),Wl=t("ZKma"),Ul=t("gdGC"),Zl=t("RrX5"),Xl=t("Wy86"),Vl=t("Y4Jk"),zl=t("zeKH"),Ll=t("wLVv"),ql=t("/dHM"),Ml=t("/k2x");t.d(n,"ForumListingModuleNgFactory",(function(){return Nl}));var Nl=e.Cb(h,[],(function(l){return e.Ob([e.Pb(512,e.l,e.nb,[[8,[w.a,y.a,v.a,R.a,x.b,x.a,P.a,C.a,F.a,k.a,K,gl]],[3,e.l],e.F]),e.Pb(4608,_.n,_.m,[e.B,[2,_.E]]),e.Pb(5120,hl.d,hl.a,[[3,hl.d]]),e.Pb(4608,wl.c,wl.c,[]),e.Pb(4608,J.d,J.d,[]),e.Pb(4608,yl.d,yl.d,[yl.j,yl.f,e.l,yl.i,yl.g,e.x,e.H,_.d,ul.b,[2,_.h]]),e.Pb(5120,yl.k,yl.l,[yl.d]),e.Pb(5120,cl.a,cl.b,[yl.d]),e.Pb(5120,vl.b,vl.c,[yl.d]),e.Pb(4608,Rl.e,J.e,[[2,J.i],[2,J.n]]),e.Pb(5120,xl.c,xl.a,[[3,xl.c]]),e.Pb(5120,E.c,E.d,[yl.d]),e.Pb(135680,E.e,E.e,[yl.d,e.x,[2,_.h],[2,E.b],E.c,[3,E.e],yl.f]),e.Pb(5120,Pl.c,Pl.j,[yl.d]),e.Pb(4608,tl.w,tl.w,[]),e.Pb(4608,tl.e,tl.e,[]),e.Pb(4608,_.e,_.e,[e.B]),e.Pb(4608,J.c,Cl.b,[[2,J.h],al.a]),e.Pb(4608,Fl.i,Fl.i,[]),e.Pb(5120,Fl.a,Fl.b,[yl.d]),e.Pb(1073742336,_.c,_.c,[]),e.Pb(1073742336,B.s,B.s,[[2,B.x],[2,B.o]]),e.Pb(1073742336,hl.e,hl.e,[]),e.Pb(1073742336,kl.p,kl.p,[]),e.Pb(1073742336,ul.a,ul.a,[]),e.Pb(1073742336,J.n,J.n,[[2,J.f],[2,Rl.f]]),e.Pb(1073742336,_l.m,_l.m,[]),e.Pb(1073742336,Dl.c,Dl.c,[]),e.Pb(1073742336,al.b,al.b,[]),e.Pb(1073742336,J.w,J.w,[]),e.Pb(1073742336,Al.c,Al.c,[]),e.Pb(1073742336,Sl.c,Sl.c,[]),e.Pb(1073742336,wl.d,wl.d,[]),e.Pb(1073742336,ol.e,ol.e,[]),e.Pb(1073742336,El.c,El.c,[]),e.Pb(1073742336,Ol.d,Ol.d,[]),e.Pb(1073742336,Ol.c,Ol.c,[]),e.Pb(1073742336,Bl.g,Bl.g,[]),e.Pb(1073742336,bl.c,bl.c,[]),e.Pb(1073742336,yl.h,yl.h,[]),e.Pb(1073742336,J.u,J.u,[]),e.Pb(1073742336,J.s,J.s,[]),e.Pb(1073742336,cl.d,cl.d,[]),e.Pb(1073742336,sl.a,sl.a,[]),e.Pb(1073742336,vl.e,vl.e,[]),e.Pb(1073742336,xl.d,xl.d,[]),e.Pb(1073742336,E.i,E.i,[]),e.Pb(1073742336,jl.a,jl.a,[]),e.Pb(1073742336,Pl.i,Pl.i,[]),e.Pb(1073742336,Pl.f,Pl.f,[]),e.Pb(1073742336,tl.v,tl.v,[]),e.Pb(1073742336,tl.j,tl.j,[]),e.Pb(1073742336,tl.s,tl.s,[]),e.Pb(1073742336,Hl.a,Hl.a,[]),e.Pb(1073742336,Il.a,Il.a,[]),e.Pb(1073742336,Tl.a,Tl.a,[]),e.Pb(1073742336,$l.a,$l.a,[]),e.Pb(1073742336,Wl.a,Wl.a,[]),e.Pb(1073742336,Ul.a,Ul.a,[]),e.Pb(1073742336,J.y,J.y,[]),e.Pb(1073742336,J.p,J.p,[]),e.Pb(1073742336,Fl.j,Fl.j,[]),e.Pb(1073742336,Zl.a,Zl.a,[]),e.Pb(1073742336,Xl.a,Xl.a,[]),e.Pb(1073742336,Vl.a,Vl.a,[]),e.Pb(1073742336,zl.a,zl.a,[]),e.Pb(1073742336,Ll.a,Ll.a,[]),e.Pb(1073742336,ql.a,ql.a,[]),e.Pb(1073742336,Ml.a,Ml.a,[]),e.Pb(1073742336,h,h,[]),e.Pb(256,J.g,Zl.b,[]),e.Pb(1024,B.m,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);