(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Azqq:function(l,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return p}));var e=t("CcnG"),a=(t("uGex"),t("Ip0R")),o=t("eDkP"),i=t("Fzqc"),r=(t("M2Lx"),t("4c35"),t("dWZg"),t("qAlS"),t("Wf4p"),t("ZYjt"),t("seP3"),t("gIcY"),t("lLAP"),e.rb({encapsulation:2,styles:[".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],data:{animation:[{type:7,name:"transformPanelWrap",definitions:[{type:1,expr:"* => void",animation:{type:11,selector:"@transformPanel",animation:[{type:9,options:null}],options:{optional:!0}},options:null}],options:{}},{type:7,name:"transformPanel",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"scaleY(0.8)",minWidth:"100%",opacity:0},offset:null},options:void 0},{type:0,name:"showing",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:0,name:"showing-multiple",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:4,styles:null,timings:"120ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => void",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"100ms 25ms linear"},options:null}],options:{}}]}}));function u(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"span",[["class","mat-select-placeholder"]],null,null,null,null,null)),(l()(),e.Nb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.placeholder||" ")}))}function d(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Nb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.triggerValue||" ")}))}function c(l){return e.Pb(0,[e.Eb(null,0),(l()(),e.ib(0,null,null,0))],null,null)}function s(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,5,"span",[["class","mat-select-value-text"]],null,null,null,null,null)),e.sb(1,16384,null,0,a.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),e.ib(16777216,null,null,1,null,d)),e.sb(3,16384,null,0,a.r,[e.P,e.M,a.p],null,null),(l()(),e.ib(16777216,null,null,1,null,c)),e.sb(5,278528,null,0,a.q,[e.P,e.M,a.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(l,n){l(n,1,0,!!n.component.customTrigger),l(n,5,0,!0)}),null)}function b(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,4,"div",[["class","mat-select-panel-wrap"]],[[24,"@transformPanelWrap",0]],null,null,null,null)),(l()(),e.tb(1,0,[[2,0],["panel",1]],null,3,"div",[],[[24,"@transformPanel",0],[4,"transformOrigin",null],[4,"font-size","px"]],[[null,"@transformPanel.done"],[null,"keydown"]],(function(l,n,t){var e=!0,a=l.component;return"@transformPanel.done"===n&&(e=!1!==a._panelDoneAnimatingStream.next(t.toState)&&e),"keydown"===n&&(e=!1!==a._handleKeydown(t)&&e),e}),null,null)),e.Kb(512,null,a.z,a.A,[e.s,e.t,e.k,e.E]),e.sb(3,278528,null,0,a.j,[a.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(null,1)],(function(l,n){var t=n.component;l(n,3,0,e.xb(1,"mat-select-panel ",t._getPanelTheme(),""),t.panelClass)}),(function(l,n){var t=n.component;l(n,0,0,void 0),l(n,1,0,t.multiple?"showing-multiple":"showing",t._transformOrigin,t._triggerFontSize)}))}function p(l){return e.Pb(2,[e.Lb(671088640,1,{trigger:0}),e.Lb(671088640,2,{panel:0}),e.Lb(671088640,3,{overlayDir:0}),(l()(),e.tb(3,0,[[1,0],["trigger",1]],null,9,"div",[["aria-hidden","true"],["cdk-overlay-origin",""],["class","mat-select-trigger"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggle()&&e),e}),null,null)),e.sb(4,16384,[["origin",4]],0,o.b,[e.k],null,null),(l()(),e.tb(5,0,null,null,5,"div",[["class","mat-select-value"]],null,null,null,null,null)),e.sb(6,16384,null,0,a.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),e.ib(16777216,null,null,1,null,u)),e.sb(8,278528,null,0,a.q,[e.P,e.M,a.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.ib(16777216,null,null,1,null,s)),e.sb(10,278528,null,0,a.q,[e.P,e.M,a.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.tb(11,0,null,null,1,"div",[["class","mat-select-arrow-wrapper"]],null,null,null,null,null)),(l()(),e.tb(12,0,null,null,0,"div",[["class","mat-select-arrow"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,(function(l,n,t){var e=!0,a=l.component;return"backdropClick"===n&&(e=!1!==a.close()&&e),"attach"===n&&(e=!1!==a._onAttached()&&e),"detach"===n&&(e=!1!==a.close()&&e),e}),b)),e.sb(14,671744,[[3,4]],0,o.a,[o.c,e.M,e.P,o.j,[2,i.b]],{origin:[0,"origin"],positions:[1,"positions"],offsetY:[2,"offsetY"],minWidth:[3,"minWidth"],backdropClass:[4,"backdropClass"],scrollStrategy:[5,"scrollStrategy"],open:[6,"open"],hasBackdrop:[7,"hasBackdrop"],lockPosition:[8,"lockPosition"]},{backdropClick:"backdropClick",attach:"attach",detach:"detach"})],(function(l,n){var t=n.component;l(n,6,0,t.empty),l(n,8,0,!0),l(n,10,0,!1),l(n,14,0,e.Fb(n,4),t._positions,t._offsetY,null==t._triggerRect?null:t._triggerRect.width,"cdk-overlay-transparent-backdrop",t._scrollStrategy,t.panelOpen,"","")}),null)}},IfBj:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),a=t("mrSG"),o=t("gIcY"),i=t("X11Z"),r=t("iiAa"),u=t("Zx0a"),d=t("C/ge"),c=t("+7By"),s=t("s/3Y"),b=t("z3zx"),p=function(){function l(l,n,t,e,a,o,i,r){this.$fb=l,this.$fileUploadService=n,this.$service=t,this.$utility=e,this.$route=a,this.$category=o,this.descriptionMaxLength=d.a.descriptionMaxLength,this.titleMaxLength=d.a.titleMaxLength,this.createForm(),i.snapshot.data&&i.snapshot.data.forumData.data&&(this.forumsData=i.snapshot.data.forumData.data,r.replace(this.forumsData._id,this.forumsData.topic),this.forumPatchData())}return l.prototype.ngOnInit=function(){this.categoryList()},l.prototype.forumPatchData=function(){this.forumForm.patchValue(this.forumsData),this.forumsData&&this.forumsData.mediaUrl&&(this.profilePicURL=this.forumsData.mediaUrl)},l.prototype.categoryList=function(){var l=this;this.$category.queryData({page:1,limit:100}).then((function(n){l.categoryData=n.data.data,console.log(n.data.data)}))},l.prototype.createForm=function(){this.forumForm=this.$fb.group({topic:["",[o.u.required,o.u.maxLength(this.titleMaxLength)]],description:["",[o.u.required,o.u.maxLength(this.descriptionMaxLength)]],categoryId:["",o.u.required],categoryName:[""],userType:["admin"],postAnonymous:[!1]})},l.prototype.form=function(l){return this.forumForm.controls[l]},l.prototype.setimageFile=function(l){if(!l)return this.imageFile=null,void(this.profilePicURL="");this.imageFile=l},l.prototype.onSubmit=function(){return a.__awaiter(this,void 0,void 0,(function(){var l,n,t=this;return a.__generator(this,(function(e){switch(e.label){case 0:return this.forumForm.invalid?(this.forumForm.markAllAsTouched(),[2]):this.imageFile?[4,this.$fileUploadService.uploadFile(this.imageFile)]:[3,2];case 1:l=e.sent(),this.profilePicURL=l.Location,e.label=2;case 2:return(n=a.__assign({mediaUrl:this.profilePicURL},this.forumForm.value)).categoryName=this.categoryData.find((function(l){return l._id===n.categoryId})).name,console.log(n),this.$service.add(n).then((function(l){t.forumForm.enable(),t.$utility.success(l.message),t.$route.navigate([c.FORUM.fullUrl])}),(function(l){t.forumForm.enable()})),[2]}}))}))},l.prototype.onCancel=function(){this.$route.navigate([c.FORUM.fullUrl])},l}(),m=function(){return function(){}}(),g=t("pMnS"),f=t("NcP4"),h=t("MlvX"),F=t("Wf4p"),_=t("XVN3"),w=t("Qyip"),C=t("dJrM"),y=t("seP3"),v=t("Fzqc"),x=t("dWZg"),P=t("wFw1"),M=t("b716"),D=t("/VYK"),k=t("QQSE"),O=t("IEde"),L=t("Azqq"),S=t("uGex"),q=t("qAlS"),N=t("lLAP"),I=t("Ip0R"),z=t("ZYCi"),U=e.rb({encapsulation:0,styles:[[".row[_ngcontent-%COMP%]{display:flex;width:calc(100% + 20px);flex-wrap:wrap;margin:0 -10px}.row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{width:calc(100% / 6);padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{width:33%}}@media screen and (max-width:576px){.row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{width:50%}}@media screen and (max-width:450px){.row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]{width:25%;padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]{width:50%}}@media screen and (max-width:576px){.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{width:33.33%;padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{width:50%}}@media screen and (max-width:576px){.row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5);padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%]{width:50%}}@media screen and (max-width:576px){.row[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]{width:50%;padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8);padding:0 10px}@media screen and (max-width:768px){.row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%]{width:100%;padding:0 10px}.page-add-forum[_ngcontent-%COMP%]{padding:15px 20px;box-shadow:0 0 3px 2px rgba(0,0,0,.2)}.page-add-forum[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between}.page-add-forum[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .left-portion[_ngcontent-%COMP%]{width:300px}.page-add-forum[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .right-portion[_ngcontent-%COMP%]{width:calc(100% - 300px);padding-left:40px}.page-add-forum[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .right-portion[_ngcontent-%COMP%]   .post-later[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.page-add-forum[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .right-portion[_ngcontent-%COMP%]   .post-later[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:25px 0}.page-add-forum[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]   .right-portion[_ngcontent-%COMP%]   .post-later[_ngcontent-%COMP%]   .later-date-picker[_ngcontent-%COMP%]{margin-left:20px;width:auto}"]],data:{}});function A(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==e.Fb(l,1)._selectViaInteraction()&&a),"keydown"===n&&(a=!1!==e.Fb(l,1)._handleKeydown(t)&&a),a}),h.c,h.a)),e.sb(1,8568832,[[19,4]],0,F.r,[e.k,e.h,[2,F.l],[2,F.q]],{value:[0,"value"]},null),(l()(),e.Nb(2,0,["",""]))],(function(l,n){l(n,1,0,null==n.context.$implicit?null:n.context.$implicit._id)}),(function(l,n){l(n,0,0,e.Fb(n,1)._getTabIndex(),e.Fb(n,1).selected,e.Fb(n,1).multiple,e.Fb(n,1).active,e.Fb(n,1).id,e.Fb(n,1)._getAriaSelected(),e.Fb(n,1).disabled.toString(),e.Fb(n,1).disabled),l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.name)}))}function K(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,115,"div",[["class","page-add-forum"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,114,"div",[["class","add-form-content8"]],null,null,null,null,null)),(l()(),e.tb(2,0,null,null,108,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,t){var a=!0;return"submit"===n&&(a=!1!==e.Fb(l,4).onSubmit(t)&&a),"reset"===n&&(a=!1!==e.Fb(l,4).onReset()&&a),a}),null,null)),e.sb(3,16384,null,0,o.y,[],null,null),e.sb(4,540672,null,0,o.i,[[8,null],[8,null]],{form:[0,"form"]},null),e.Kb(2048,null,o.c,null,[o.i]),e.sb(6,16384,null,0,o.p,[[4,o.c]],null,null),(l()(),e.tb(7,0,null,null,103,"div",[["class","row-1"]],null,null,null,null,null)),(l()(),e.tb(8,0,null,null,2,"div",[["class","left-portion"]],null,null,null,null,null)),(l()(),e.tb(9,0,null,null,1,"app-image-upload",[],null,[[null,"uploadMedia"]],(function(l,n,t){var e=!0;return"uploadMedia"===n&&(e=!1!==l.component.setimageFile(t)&&e),e}),_.b,_.a)),e.sb(10,114688,null,0,w.a,[i.a],{profilePicURL:[0,"profilePicURL"]},{uploadMedia:"uploadMedia"}),(l()(),e.tb(11,0,null,null,99,"div",[["class","right-portion"]],null,null,null,null,null)),(l()(),e.tb(12,0,null,null,64,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.tb(13,0,null,null,32,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.tb(14,0,null,null,31,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),e.sb(15,7520256,null,9,y.c,[e.k,e.h,[2,F.j],[2,v.b],[2,y.a],x.a,e.z,[2,P.a]],{appearance:[0,"appearance"]},null),e.Lb(603979776,1,{_controlNonStatic:0}),e.Lb(335544320,2,{_controlStatic:0}),e.Lb(603979776,3,{_labelChildNonStatic:0}),e.Lb(335544320,4,{_labelChildStatic:0}),e.Lb(603979776,5,{_placeholderChild:0}),e.Lb(603979776,6,{_errorChildren:1}),e.Lb(603979776,7,{_hintChildren:1}),e.Lb(603979776,8,{_prefixChildren:1}),e.Lb(603979776,9,{_suffixChildren:1}),(l()(),e.tb(25,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.sb(26,16384,[[3,4],[4,4]],0,y.g,[],null,null),(l()(),e.Nb(-1,null,["Topic"])),(l()(),e.tb(28,0,[["topic",1]],1,10,"input",[["appWhiteSpace",""],["class","mat-input-element mat-form-field-autofill-control"],["formControlName","topic"],["matInput",""],["placeholder","Enter Topic here"]],[[1,"maxlength",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"],[null,"keydown"]],(function(l,n,t){var a=!0;return"input"===n&&(a=!1!==e.Fb(l,31)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Fb(l,31).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Fb(l,31)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Fb(l,31)._compositionEnd(t.target.value)&&a),"blur"===n&&(a=!1!==e.Fb(l,35)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Fb(l,35)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Fb(l,35)._onInput()&&a),"keydown"===n&&(a=!1!==e.Fb(l,36).keydown(t)&&a),a}),null,null)),e.sb(29,540672,null,0,o.k,[],{maxlength:[0,"maxlength"]},null),e.Kb(1024,null,o.l,(function(l){return[l]}),[o.k]),e.sb(31,16384,null,0,o.d,[e.E,e.k,[2,o.a]],null,null),e.Kb(1024,null,o.m,(function(l){return[l]}),[o.d]),e.sb(33,671744,null,0,o.h,[[3,o.c],[6,o.l],[8,null],[6,o.m],[2,o.x]],{name:[0,"name"]},null),e.Kb(2048,null,o.n,null,[o.h]),e.sb(35,999424,null,0,M.b,[e.k,x.a,[6,o.n],[2,o.q],[2,o.i],F.d,[8,null],D.a,e.z],{placeholder:[0,"placeholder"]},null),e.sb(36,16384,null,0,k.a,[e.k],null,null),e.sb(37,16384,null,0,o.o,[[4,o.n]],null,null),e.Kb(2048,[[1,4],[2,4]],y.d,null,[M.b]),(l()(),e.tb(39,0,null,6,2,"mat-hint",[["class","mat-hint"]],[[2,"mat-right",null],[1,"id",0],[1,"align",0]],null,null,null,null)),e.sb(40,16384,[[7,4]],0,y.f,[],null,null),(l()(),e.Nb(41,null,["","/",""])),(l()(),e.tb(42,0,null,5,3,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.sb(43,16384,[[6,4]],0,y.b,[],null,null),(l()(),e.Nb(44,null,["",""])),e.Hb(0,O.a,[]),(l()(),e.tb(46,0,null,null,30,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.tb(47,0,null,null,29,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),e.sb(48,7520256,null,9,y.c,[e.k,e.h,[2,F.j],[2,v.b],[2,y.a],x.a,e.z,[2,P.a]],{appearance:[0,"appearance"]},null),e.Lb(603979776,10,{_controlNonStatic:0}),e.Lb(335544320,11,{_controlStatic:0}),e.Lb(603979776,12,{_labelChildNonStatic:0}),e.Lb(335544320,13,{_labelChildStatic:0}),e.Lb(603979776,14,{_placeholderChild:0}),e.Lb(603979776,15,{_errorChildren:1}),e.Lb(603979776,16,{_hintChildren:1}),e.Lb(603979776,17,{_prefixChildren:1}),e.Lb(603979776,18,{_suffixChildren:1}),(l()(),e.tb(58,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.sb(59,16384,[[12,4],[13,4]],0,y.g,[],null,null),(l()(),e.Nb(-1,null,["Category"])),(l()(),e.tb(61,0,null,1,11,"mat-select",[["class","mat-select"],["formControlName","categoryId"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,t){var a=!0;return"keydown"===n&&(a=!1!==e.Fb(l,65)._handleKeydown(t)&&a),"focus"===n&&(a=!1!==e.Fb(l,65)._onFocus()&&a),"blur"===n&&(a=!1!==e.Fb(l,65)._onBlur()&&a),a}),L.b,L.a)),e.Kb(6144,null,F.l,null,[S.c]),e.sb(63,671744,null,0,o.h,[[3,o.c],[8,null],[8,null],[8,null],[2,o.x]],{name:[0,"name"]},null),e.Kb(2048,null,o.n,null,[o.h]),e.sb(65,2080768,null,3,S.c,[q.e,e.h,e.z,F.d,e.k,[2,v.b],[2,o.q],[2,o.i],[2,y.c],[6,o.n],[8,null],S.a,N.j],null,null),e.Lb(603979776,19,{options:1}),e.Lb(603979776,20,{optionGroups:1}),e.Lb(603979776,21,{customTrigger:0}),e.sb(69,16384,null,0,o.o,[[4,o.n]],null,null),e.Kb(2048,[[10,4],[11,4]],y.d,null,[S.c]),(l()(),e.ib(16777216,null,1,1,null,A)),e.sb(72,278528,null,0,I.k,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(73,0,null,5,3,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.sb(74,16384,[[15,4]],0,y.b,[],null,null),(l()(),e.Nb(75,null,["",""])),e.Hb(0,O.a,[]),(l()(),e.tb(77,0,null,null,33,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.tb(78,0,null,null,32,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e.tb(79,0,null,null,31,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),e.sb(80,7520256,null,9,y.c,[e.k,e.h,[2,F.j],[2,v.b],[2,y.a],x.a,e.z,[2,P.a]],{appearance:[0,"appearance"]},null),e.Lb(603979776,22,{_controlNonStatic:0}),e.Lb(335544320,23,{_controlStatic:0}),e.Lb(603979776,24,{_labelChildNonStatic:0}),e.Lb(335544320,25,{_labelChildStatic:0}),e.Lb(603979776,26,{_placeholderChild:0}),e.Lb(603979776,27,{_errorChildren:1}),e.Lb(603979776,28,{_hintChildren:1}),e.Lb(603979776,29,{_prefixChildren:1}),e.Lb(603979776,30,{_suffixChildren:1}),(l()(),e.tb(90,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.sb(91,16384,[[24,4],[25,4]],0,y.g,[],null,null),(l()(),e.Nb(-1,null,["Description"])),(l()(),e.tb(93,0,[["description",1]],1,10,"textarea",[["appWhiteSpace",""],["class","mat-input-element mat-form-field-autofill-control"],["formControlName","description"],["matInput",""],["placeholder","Write something here"],["rows","6"]],[[1,"maxlength",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"],[null,"keydown"]],(function(l,n,t){var a=!0;return"input"===n&&(a=!1!==e.Fb(l,96)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Fb(l,96).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Fb(l,96)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Fb(l,96)._compositionEnd(t.target.value)&&a),"blur"===n&&(a=!1!==e.Fb(l,100)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Fb(l,100)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Fb(l,100)._onInput()&&a),"keydown"===n&&(a=!1!==e.Fb(l,101).keydown(t)&&a),a}),null,null)),e.sb(94,540672,null,0,o.k,[],{maxlength:[0,"maxlength"]},null),e.Kb(1024,null,o.l,(function(l){return[l]}),[o.k]),e.sb(96,16384,null,0,o.d,[e.E,e.k,[2,o.a]],null,null),e.Kb(1024,null,o.m,(function(l){return[l]}),[o.d]),e.sb(98,671744,null,0,o.h,[[3,o.c],[6,o.l],[8,null],[6,o.m],[2,o.x]],{name:[0,"name"]},null),e.Kb(2048,null,o.n,null,[o.h]),e.sb(100,999424,null,0,M.b,[e.k,x.a,[6,o.n],[2,o.q],[2,o.i],F.d,[8,null],D.a,e.z],{placeholder:[0,"placeholder"]},null),e.sb(101,16384,null,0,k.a,[e.k],null,null),e.sb(102,16384,null,0,o.o,[[4,o.n]],null,null),e.Kb(2048,[[22,4],[23,4]],y.d,null,[M.b]),(l()(),e.tb(104,0,null,6,2,"mat-hint",[["class","mat-hint"]],[[2,"mat-right",null],[1,"id",0],[1,"align",0]],null,null,null,null)),e.sb(105,16384,[[28,4]],0,y.f,[],null,null),(l()(),e.Nb(106,null,["","/",""])),(l()(),e.tb(107,0,null,5,3,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.sb(108,16384,[[27,4]],0,y.b,[],null,null),(l()(),e.Nb(109,null,["",""])),e.Hb(0,O.a,[]),(l()(),e.tb(111,0,null,null,4,"div",[["class","btn-row"]],null,null,null,null,null)),(l()(),e.tb(112,0,null,null,1,"button",[["class","btn btn-simple"],["mat-stroked-button",""],["type","button"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onCancel()&&e),e}),null,null)),(l()(),e.Nb(-1,null,[" Cancel "])),(l()(),e.tb(114,0,null,null,1,"button",[["class","btn btn-primary"],["mat-stroked-button",""],["type","button"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e}),null,null)),(l()(),e.Nb(-1,null,["Upload "]))],(function(l,n){var t=n.component;l(n,4,0,t.forumForm),l(n,10,0,t.profilePicURL),l(n,15,0,"outline"),l(n,29,0,t.titleMaxLength),l(n,33,0,"topic"),l(n,35,0,"Enter Topic here"),l(n,48,0,"outline"),l(n,63,0,"categoryId"),l(n,65,0),l(n,72,0,t.categoryData),l(n,80,0,"outline"),l(n,94,0,t.descriptionMaxLength),l(n,98,0,"description"),l(n,100,0,"Write something here")}),(function(l,n){var t=n.component;l(n,2,0,e.Fb(n,6).ngClassUntouched,e.Fb(n,6).ngClassTouched,e.Fb(n,6).ngClassPristine,e.Fb(n,6).ngClassDirty,e.Fb(n,6).ngClassValid,e.Fb(n,6).ngClassInvalid,e.Fb(n,6).ngClassPending),l(n,14,1,["standard"==e.Fb(n,15).appearance,"fill"==e.Fb(n,15).appearance,"outline"==e.Fb(n,15).appearance,"legacy"==e.Fb(n,15).appearance,e.Fb(n,15)._control.errorState,e.Fb(n,15)._canLabelFloat,e.Fb(n,15)._shouldLabelFloat(),e.Fb(n,15)._hasFloatingLabel(),e.Fb(n,15)._hideControlPlaceholder(),e.Fb(n,15)._control.disabled,e.Fb(n,15)._control.autofilled,e.Fb(n,15)._control.focused,"accent"==e.Fb(n,15).color,"warn"==e.Fb(n,15).color,e.Fb(n,15)._shouldForward("untouched"),e.Fb(n,15)._shouldForward("touched"),e.Fb(n,15)._shouldForward("pristine"),e.Fb(n,15)._shouldForward("dirty"),e.Fb(n,15)._shouldForward("valid"),e.Fb(n,15)._shouldForward("invalid"),e.Fb(n,15)._shouldForward("pending"),!e.Fb(n,15)._animationsEnabled]),l(n,28,1,[e.Fb(n,29).maxlength?e.Fb(n,29).maxlength:null,e.Fb(n,35)._isServer,e.Fb(n,35).id,e.Fb(n,35).placeholder,e.Fb(n,35).disabled,e.Fb(n,35).required,e.Fb(n,35).readonly&&!e.Fb(n,35)._isNativeSelect||null,e.Fb(n,35)._ariaDescribedby||null,e.Fb(n,35).errorState,e.Fb(n,35).required.toString(),e.Fb(n,37).ngClassUntouched,e.Fb(n,37).ngClassTouched,e.Fb(n,37).ngClassPristine,e.Fb(n,37).ngClassDirty,e.Fb(n,37).ngClassValid,e.Fb(n,37).ngClassInvalid,e.Fb(n,37).ngClassPending]),l(n,39,0,"end"==e.Fb(n,40).align,e.Fb(n,40).id,null),l(n,41,0,e.Fb(n,28).value.trim().length,t.titleMaxLength),l(n,42,0,e.Fb(n,43).id),l(n,44,0,e.Ob(n,44,0,e.Fb(n,45).transform(t.form("topic"),"Topic"))),l(n,47,1,["standard"==e.Fb(n,48).appearance,"fill"==e.Fb(n,48).appearance,"outline"==e.Fb(n,48).appearance,"legacy"==e.Fb(n,48).appearance,e.Fb(n,48)._control.errorState,e.Fb(n,48)._canLabelFloat,e.Fb(n,48)._shouldLabelFloat(),e.Fb(n,48)._hasFloatingLabel(),e.Fb(n,48)._hideControlPlaceholder(),e.Fb(n,48)._control.disabled,e.Fb(n,48)._control.autofilled,e.Fb(n,48)._control.focused,"accent"==e.Fb(n,48).color,"warn"==e.Fb(n,48).color,e.Fb(n,48)._shouldForward("untouched"),e.Fb(n,48)._shouldForward("touched"),e.Fb(n,48)._shouldForward("pristine"),e.Fb(n,48)._shouldForward("dirty"),e.Fb(n,48)._shouldForward("valid"),e.Fb(n,48)._shouldForward("invalid"),e.Fb(n,48)._shouldForward("pending"),!e.Fb(n,48)._animationsEnabled]),l(n,61,1,[e.Fb(n,65).id,e.Fb(n,65).tabIndex,e.Fb(n,65)._getAriaLabel(),e.Fb(n,65)._getAriaLabelledby(),e.Fb(n,65).required.toString(),e.Fb(n,65).disabled.toString(),e.Fb(n,65).errorState,e.Fb(n,65).panelOpen?e.Fb(n,65)._optionIds:null,e.Fb(n,65).multiple,e.Fb(n,65)._ariaDescribedby||null,e.Fb(n,65)._getAriaActiveDescendant(),e.Fb(n,65).disabled,e.Fb(n,65).errorState,e.Fb(n,65).required,e.Fb(n,65).empty,e.Fb(n,69).ngClassUntouched,e.Fb(n,69).ngClassTouched,e.Fb(n,69).ngClassPristine,e.Fb(n,69).ngClassDirty,e.Fb(n,69).ngClassValid,e.Fb(n,69).ngClassInvalid,e.Fb(n,69).ngClassPending]),l(n,73,0,e.Fb(n,74).id),l(n,75,0,e.Ob(n,75,0,e.Fb(n,76).transform(t.form("categoryId"),"Category"))),l(n,79,1,["standard"==e.Fb(n,80).appearance,"fill"==e.Fb(n,80).appearance,"outline"==e.Fb(n,80).appearance,"legacy"==e.Fb(n,80).appearance,e.Fb(n,80)._control.errorState,e.Fb(n,80)._canLabelFloat,e.Fb(n,80)._shouldLabelFloat(),e.Fb(n,80)._hasFloatingLabel(),e.Fb(n,80)._hideControlPlaceholder(),e.Fb(n,80)._control.disabled,e.Fb(n,80)._control.autofilled,e.Fb(n,80)._control.focused,"accent"==e.Fb(n,80).color,"warn"==e.Fb(n,80).color,e.Fb(n,80)._shouldForward("untouched"),e.Fb(n,80)._shouldForward("touched"),e.Fb(n,80)._shouldForward("pristine"),e.Fb(n,80)._shouldForward("dirty"),e.Fb(n,80)._shouldForward("valid"),e.Fb(n,80)._shouldForward("invalid"),e.Fb(n,80)._shouldForward("pending"),!e.Fb(n,80)._animationsEnabled]),l(n,93,1,[e.Fb(n,94).maxlength?e.Fb(n,94).maxlength:null,e.Fb(n,100)._isServer,e.Fb(n,100).id,e.Fb(n,100).placeholder,e.Fb(n,100).disabled,e.Fb(n,100).required,e.Fb(n,100).readonly&&!e.Fb(n,100)._isNativeSelect||null,e.Fb(n,100)._ariaDescribedby||null,e.Fb(n,100).errorState,e.Fb(n,100).required.toString(),e.Fb(n,102).ngClassUntouched,e.Fb(n,102).ngClassTouched,e.Fb(n,102).ngClassPristine,e.Fb(n,102).ngClassDirty,e.Fb(n,102).ngClassValid,e.Fb(n,102).ngClassInvalid,e.Fb(n,102).ngClassPending]),l(n,104,0,"end"==e.Fb(n,105).align,e.Fb(n,105).id,null),l(n,106,0,e.Fb(n,93).value.trim().length,t.descriptionMaxLength),l(n,107,0,e.Fb(n,108).id),l(n,109,0,e.Ob(n,109,0,e.Fb(n,110).transform(t.form("description"),"Description")))}))}function $(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"app-add-forum",[],null,null,null,K,U)),e.sb(1,114688,null,0,p,[o.e,i.a,b.a,r.a,z.o,s.a,z.a,u.a],null,null)],(function(l,n){l(n,1,0)}),null)}var j=e.pb("app-add-forum",p,$,{},{},[]),T=t("M2Lx"),W=t("eDkP"),Y=t("v9Dh"),E=t("ZYjt"),R=t("4c35"),V=t("SMsm"),B=t("UodH"),Z=t("Wy86"),G=t("efFR"),H=t("k5D4"),J=t("Blfk"),Q=t("eVvS"),X=t("jmHB"),ll=t("3V+5");t.d(n,"AddForumModuleNgFactory",(function(){return nl}));var nl=e.qb(m,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[g.a,f.a,j]],[3,e.j],e.x]),e.Db(4608,I.n,I.m,[e.u,[2,I.E]]),e.Db(4608,T.c,T.c,[]),e.Db(4608,F.d,F.d,[]),e.Db(4608,W.c,W.c,[W.i,W.e,e.j,W.h,W.f,e.r,e.z,I.d,v.b,[2,I.h]]),e.Db(5120,W.j,W.k,[W.c]),e.Db(5120,S.a,S.b,[W.c]),e.Db(5120,Y.b,Y.c,[W.c]),e.Db(4608,E.e,F.e,[[2,F.i],[2,F.n]]),e.Db(4608,o.e,o.e,[]),e.Db(4608,o.w,o.w,[]),e.Db(1073742336,I.c,I.c,[]),e.Db(1073742336,z.s,z.s,[[2,z.x],[2,z.o]]),e.Db(1073742336,T.d,T.d,[]),e.Db(1073742336,y.e,y.e,[]),e.Db(1073742336,x.b,x.b,[]),e.Db(1073742336,D.c,D.c,[]),e.Db(1073742336,M.c,M.c,[]),e.Db(1073742336,v.a,v.a,[]),e.Db(1073742336,R.g,R.g,[]),e.Db(1073742336,q.c,q.c,[]),e.Db(1073742336,W.g,W.g,[]),e.Db(1073742336,F.n,F.n,[[2,F.f],[2,E.f]]),e.Db(1073742336,F.w,F.w,[]),e.Db(1073742336,F.u,F.u,[]),e.Db(1073742336,F.s,F.s,[]),e.Db(1073742336,S.d,S.d,[]),e.Db(1073742336,V.c,V.c,[]),e.Db(1073742336,B.c,B.c,[]),e.Db(1073742336,N.a,N.a,[]),e.Db(1073742336,Y.e,Y.e,[]),e.Db(1073742336,Z.a,Z.a,[]),e.Db(1073742336,G.b,G.b,[]),e.Db(1073742336,o.v,o.v,[]),e.Db(1073742336,o.s,o.s,[]),e.Db(1073742336,H.a,H.a,[]),e.Db(1073742336,J.a,J.a,[]),e.Db(1073742336,Q.a,Q.a,[]),e.Db(1073742336,X.a,X.a,[]),e.Db(1073742336,ll.a,ll.a,[]),e.Db(1073742336,m,m,[]),e.Db(1024,z.m,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);