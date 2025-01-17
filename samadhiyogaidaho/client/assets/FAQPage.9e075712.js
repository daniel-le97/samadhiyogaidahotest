import{_ as b,o as a,c,p as x,d as F,a as t,s as p,v as u,A as _,x as $,y as S,b as q,e as n,F as C,C as k,g as r,t as w,G as I,r as P,f as A}from"./index.c90a785d.js";import{_ as B}from"./ParticleComponent.3c6cef36.js";const M={setup(){return{}}},V=s=>(x("data-v-c282f1cd"),s=s(),F(),s),j={class:"custom-shape-divider-bottom-1672343325"},D=V(()=>t("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},[t("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",class:"shape-fill"})],-1)),H=[D];function G(s,e,o,i,h,g){return a(),c("div",j,H)}const N=b(M,[["render",G],["__scopeId","data-v-c282f1cd"]]);class f{constructor(e){this.id=e.id,this.q=e.q,this.a=e.a}}class L{async createFAQ(e){const o=await p.post("api/faqs",e);u.log(o.data);let i=new f(o.data);_.FAQS.push(i)}async getFAQs(){const e=await p.get("api/faqs");u.log(e.data),_.FAQS=e.data.map(o=>new f(o))}async updateFAQ(e){let o=e.id;const i=await p.put(`api/faqs/${o}`,e);u.log(i.data);let h=new f(i.data),g=_.faqs.findIndex(m=>m.id==h.id);_.FAQS[g]=h}async deleteFAQ(e){await p.delete(`api/faqs/${e}`),_.FAQS=_.faqs.filter(o=>o.id!=e)}}const O=new L,z="/assets/FAQ.8366069f.svg";const E={setup(){$(()=>{s()});async function s(){try{await O.getFAQs()}catch(e){u.error(e,"GetFAQS")}}return{QA:S(()=>_.FAQS)}},components:{ParticleComponent:B,HeroImageDivider:N}},Q=s=>(x("data-v-263b3947"),s=s(),F(),s),R={id:"hero-section"},T={class:"container-fluid"},W={class:"row"},Y={class:"col-md-12 p-0"},Z={class:"hero-image d-flex flex-column align-items-center justify-content-center"},J={class:"tsparticles"},K={class:"text-center container"},U={delay:200,id:"shadow1",class:"font-1 text-shadow page-title text-light"},X=r(" Frequently Asked Questions "),tt=[X],et={delay:400,class:"font-2 text-light text-shadow display-6"},st=r(" How can we help you? "),ot=[st],at={id:"accordion-faq",class:"container my-5"},ct={class:"row my-5 justify-content-center"},nt={class:"col-md-8 d-flex justify-content-center flex-column align-content-center align-items-center"},it={delay:300,class:"font-1 quote text-center"},dt=r(" On an inhale, think of the things that are no longer serving you, whatever that may be. Maybe it\u2019s a thought Maybe it\u2019s a feeling Maybe it\u2019s a person Or an experience But taking it, And on an exhale, choosing consciously to let it go. "),_t=[dt],rt={delay:300},lt=r("- SamadhiYogaIdaho"),ht=[lt],pt={class:"row my-5"},ut={class:"col-md-6"},gt={delay:300,class:"fs-2 text-center"},mt=r(" Frequently Asked Questions "),ft=[mt],vt={class:"col-md-6"},yt={delay:300,class:"fs-5 text-center"},wt=r(" Got a question? We're here to answer! if you don't see your question here, drop us a line on our "),At=Q(()=>t("a",{href:"/contact",class:"text-pink darken-20"},"Connect Page.",-1)),bt=[wt,At],xt={class:"col-md-12 text-center"},Ft={delay:300,src:z,alt:"",class:"w-50"},Qt={class:"row justify-content-center"},$t={class:"col-md-12"},St={class:"accordion",id:"faqAccordion"},qt={delay:300,class:"accordion-item border-0"},Ct=["id"],kt=["data-bs-target","aria-expanded","aria-controls"],It=Q(()=>t("i",{class:"mdi mdi-help-circle me-3"},null,-1)),Pt=["id","aria-labelledby"],Bt={class:"accordion-body"},Mt={class:"fs-5"};function Vt(s,e,o,i,h,g){const m=P("ParticleComponent"),v=A("motion-slide-top"),l=A("motion-slide-visible-once-bottom");return a(),c("div",null,[t("section",R,[t("div",T,[t("div",W,[t("div",Y,[t("div",Z,[t("div",J,[q(m)]),t("div",K,[n((a(),c("h1",U,tt)),[[v]]),n((a(),c("p",et,ot)),[[v]])])])])])])]),t("section",at,[t("div",ct,[t("div",nt,[n((a(),c("blockquote",it,_t)),[[l]]),n((a(),c("cite",rt,ht)),[[l]])])]),t("div",pt,[t("div",ut,[n((a(),c("p",gt,ft)),[[l]])]),t("div",vt,[n((a(),c("p",yt,bt)),[[l]])]),t("div",xt,[n(t("img",Ft,null,512),[[l]])])]),t("div",Qt,[t("div",$t,[t("div",St,[(a(!0),c(C,null,k(i.QA,(y,d)=>n((a(),c("div",qt,[t("h2",{class:"accordion-header border-0",id:`heading${d.toString()}`},[t("button",{class:"accordion-button text-dark font-2 fs-3 bg-transparent",type:"button","data-bs-toggle":"collapse","data-bs-target":`#Collapse${d.toString()}`,"aria-expanded":d==0,"aria-controls":`Collapse${d.toString()}`},[It,r(" "+w(y.q),1)],8,kt)],8,Ct),t("div",{class:I([(d==0,""),"accordion-collapse collapse"]),id:`Collapse${d.toString()}`,"aria-labelledby":`heading${d.toString()}`,"data-bs-parent":"#faqAccordion"},[t("div",Bt,[t("p",Mt,w(y.a),1)])],10,Pt)])),[[l]])),256))])])])])])}const Ht=b(E,[["render",Vt],["__scopeId","data-v-263b3947"]]);export{Ht as default};
