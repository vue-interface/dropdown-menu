(function(o,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(o=typeof globalThis<"u"?globalThis:o||self,r(o.DropdownMenu={},o.Vue))})(this,function(o,r){"use strict";function l(e,s){e.props.class=`${e.props.class||""} ${s}`.trim()}function c(e,s){return n=>{typeof s=="function"&&s(n),n.cancelBubble||e(n)}}function d(e,s){return e.attrs.on[s]||e.type&&e.type.listeners&&e.componentOptions.listeners[s]}const u=(e,s)=>{const n=s.slots.default()[0].children;return n.forEach(t=>{t.props=Object.assign({class:void 0},t.props),t.attrs=Object.assign({},t.attrs),t.attrs.on||(t.attrs.on={});const p=t.props.class&&t.props.class.match(/dropdown-item/),a=t.props.class&&t.props.class.match(/dropdown-divider/);t.attrs.on.click=c(i=>{s.parent.$emit("click-item",i,t)},d(t,"click")),t.attrs.on.blur=c(i=>{s.parent.$emit("blur-item",i,t)},d(t,"blur")),typeof t.type=="string"&&t.type.match(/^h\d$/)?l(t,"dropdown-header"):t.type==="hr"&&!a?(t.type="div",l(t,"dropdown-divider")):!p&&!a&&l(t,"dropdown-item")}),r.h("div",{},n)},f=(e,s)=>{const n=e.__vccOpts||e;for(const[t,p]of s)n[t]=p;return n},m={name:"DropdownMenu",components:{DropdownMenuItems:u},props:{align:{type:String,default:"left",validate(e){return["left","right"].indexOf(e.toLowerCase())!==-1}},show:Boolean}},w=["aria-labelledby"];function h(e,s,n,t,p,a){const i=r.resolveComponent("dropdown-menu-items");return r.openBlock(),r.createElementBlock("div",{class:r.normalizeClass(["dropdown-menu",{"dropdown-menu-left":n.align==="left","dropdown-menu-right":n.align==="right",show:n.show}]),"aria-labelledby":e.$attrs.id},[r.createVNode(i,null,{default:r.withCtx(()=>[r.renderSlot(e.$slots,"default",{onClick:s[0]||(s[0]=(...y)=>e.onItemClick&&e.onItemClick(...y))})]),_:3})],10,w)}const _=f(m,[["render",h]]);o.DropdownMenu=_,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
