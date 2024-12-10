import{k as _,r as s,c as n,l as E,o as F,h as a,$ as O,w as x,g as z}from"./index.16b29dc5.js";import{Q as A}from"./QSpinner.6eedd249.js";import{u as W,a as G}from"./use-ratio.e147d9b4.js";import{h as b}from"./render.0e463276.js";import{a as q}from"./vm.1d49fb8a.js";import{u as T}from"./use-timeout.2c5b8f7c.js";import{u as J,a as K}from"./use-dark.49c84e4d.js";const U=1.7778;var ae=_({name:"QImg",props:{...W,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:U},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:l,emit:u}){const c=s(e.initialRatio),d=G(e,c),v=z(),{registerTimeout:Q,removeTimeout:S}=T(),{registerTimeout:B,removeTimeout:w}=T(),h=n(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),L=n(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),i=[s(null),s(h.value)],r=s(0),g=s(!1),m=s(!1),R=n(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),D=n(()=>({width:e.width,height:e.height})),I=n(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),$=n(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function j(){if(w(),e.loadingShowDelay===0){g.value=!0;return}B(()=>{g.value=!0},e.loadingShowDelay)}function y(){w(),g.value=!1}function N({target:t}){q(v)===!1&&(S(),c.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,C(t,1))}function C(t,o){o===1e3||q(v)===!0||(t.complete===!0?H(t):Q(()=>{C(t,o+1)},50))}function H(t){q(v)!==!0&&(r.value=r.value^1,i[r.value].value=null,y(),t.getAttribute("__qerror")!=="true"&&(m.value=!1),u("load",t.currentSrc||t.src))}function M(t){S(),y(),m.value=!0,i[r.value].value=L.value,i[r.value^1].value=h.value,u("error",t)}function k(t){const o=i[t].value,f={key:"img_"+t,class:I.value,style:$.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...o};return r.value===t?Object.assign(f,{class:f.class+"current",onLoad:N,onError:M}):f.class+="loaded",a("div",{class:"q-img__container absolute-full",key:"img"+t},a("img",f))}function P(){return g.value===!1?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},b(l[m.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():e.noSpinner===!0?void 0:[a(A,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){x(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,o=>{S(),m.value=!1,o===null?(y(),i[r.value^1].value=h.value):j(),i[r.value].value=o},{immediate:!0})};E.value===!0?F(t):t()}return()=>{const t=[];return d.value!==null&&t.push(a("div",{key:"filler",style:d.value})),i[0].value!==null&&t.push(k(0)),i[1].value!==null&&t.push(k(1)),t.push(a(O,{name:"q-transition--fade"},P)),a("div",{key:"main",class:R.value,style:D.value,role:"img","aria-label":e.alt},t)}}}),ie=_({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:l}){const u=n(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>a(e.tag,{class:u.value},b(l.default))}}),re=_({name:"QCard",props:{...J,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:l}){const{proxy:{$q:u}}=z(),c=K(e,u),d=n(()=>"q-card"+(c.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>a(e.tag,{class:d.value},b(l.default))}});export{ae as Q,re as a,ie as b};
