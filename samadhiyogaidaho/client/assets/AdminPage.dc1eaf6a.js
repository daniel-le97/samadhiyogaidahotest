import{_ as m,j as p,A as r,o as _,c as l,a as t,t as S,k as g,m as w,b as s,n as c,r as i,p as y,e as k,q as E,s as N}from"./index.121bd88c.js";import{E as P}from"./EventForm.ee6aaed2.js";import{R as v}from"./RetreatForm.20ff7537.js";const I={setup(){return{admin:p(()=>r.account)}}},R={class:"container-fluid bg-dark sticky-top border-light border-start p-1"},B={class:"row"},C={class:"col-12"},H={key:0};function T(e,d,u,a,h,b){return _(),l("div",R,[t("div",B,[t("div",C,[a.admin?(_(),l("span",H,"Hi, "+S(a.admin.name)+"!",1)):g("",!0)])])])}const V=m(I,[["render",T]]),D="/assets/Samadhi-Yoga.ebaf22aa.png";const F={setup(){return{admin:p(()=>{var e;return(e=r)==null?void 0:e.account}),async loadTab(e){r.activeTab=e},async logout(){w.logout({returnTo:window.location.origin})}}}},o=e=>(y("data-v-7a64ced4"),e=e(),k(),e),j={class:"container-fluid"},q={class:"row"},Y={class:"col-md-12 p-0"},z={class:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark elevation-6 side-panel sticky-top grow"},G=o(()=>t("a",{href:"/",class:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"},[t("img",{src:D,alt:"",height:"50",width:"50",class:"rounded"}),t("span",{class:"fs-4"},"Dashboard")],-1)),J=o(()=>t("hr",null,null,-1)),K={class:"d-flex flex-column"},L=o(()=>t("button",{class:"btn btn-primary"},"Home",-1)),M=o(()=>t("button",{class:"btn btn-primary"},"Events",-1)),O=o(()=>t("button",{class:"btn btn-primary"},"Retreats",-1)),Q=o(()=>t("button",{class:"btn btn-primary"},"Schedule",-1)),U=o(()=>t("button",{class:"btn btn-primary"},"Settings",-1));function W(e,d,u,a,h,b){const n=i("router-link");return _(),l("div",j,[t("div",q,[t("div",Y,[t("div",z,[G,J,t("div",K,[s(n,{class:"navbar-brand d-flex",to:{name:"AdminHome"}},{default:c(()=>[L]),_:1}),s(n,{class:"navbar-brand",to:{name:"AdminEvents"}},{default:c(()=>[M]),_:1}),s(n,{class:"navbar-brand",to:{name:"AdminRetreats"}},{default:c(()=>[O]),_:1}),s(n,{class:"navbar-brand",to:{name:"AdminSchedule"}},{default:c(()=>[Q]),_:1}),s(n,{class:"navbar-brand",to:{name:"AdminSettings"}},{default:c(()=>[U]),_:1})])])])])])}const $=m(F,[["render",W],["__scopeId","data-v-7a64ced4"]]),X={props:{},setup(e){const d=E({});return N(()=>{}),{editable:d,admin:p(()=>r.user)}},components:{RetreatForm:v,AdminSidePanel:$,RetreatForm:v,EventForm:P,AdminSidePanel:$,AdminNavbar:V}},Z={key:0,class:"container-fluid"},tt={class:"row"},et={class:"col-3 ms-0 p-0"},st={class:"col-9 p-0"};function nt(e,d,u,a,h,b){var f;const n=i("AdminSidePanel"),x=i("AdminNavbar"),A=i("router-view");return(f=a.admin)!=null&&f.isAuthenticated?(_(),l("div",Z,[t("div",tt,[t("div",et,[s(n)]),t("div",st,[t("div",null,[s(x)]),s(A)])])])):g("",!0)}const dt=m(X,[["render",nt]]);export{dt as default};
