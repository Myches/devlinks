(()=>{var e={};e.id=572,e.ids=[572],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5158:e=>{"use strict";e.exports=require("http2")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7282:e=>{"use strict";e.exports=require("process")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7004:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),s(7267),s(6080),s(5866);var r=s(3191),a=s(8716),i=s(7922),o=s.n(i),n=s(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=["",{children:["create",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7267)),"C:\\Users\\Flacko\\Desktop\\devlinks\\src\\app\\create\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,6080)),"C:\\Users\\Flacko\\Desktop\\devlinks\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Flacko\\Desktop\\devlinks\\src\\app\\create\\page.tsx"],u="/create/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/create/page",pathname:"/create",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6239:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},9898:(e,t,s)=>{Promise.resolve().then(s.bind(s,8542))},6629:(e,t,s)=>{Promise.resolve().then(s.bind(s,6945))},434:(e,t,s)=>{"use strict";s.d(t,{default:()=>a.a});var r=s(9404),a=s.n(r)},5047:(e,t,s)=>{"use strict";var r=s(7389);s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},8542:(e,t,s)=>{"use strict";s.d(t,{AuthContextProvider:()=>p,a:()=>u});var r=s(326),a=s(7577),i=s(8967),o=s(2585),n=s(76);let l=(0,o.C6)().length?(0,o.Mq)():(0,o.ZF)({apiKey:"AIzaSyCBclM-TBstH6-9bOGsUXneUid5Z1dG750",authDomain:"devlinks-f4861.firebaseapp.com",projectId:"devlinks-f4861",storageBucket:"devlinks-f4861.appspot.com",messagingSenderId:"552880349038",appId:"1:552880349038:web:27b333d0e5f0578690eb7f",measurementId:"G-HC377W9D6L"}),c=(0,i.v0)(l);(0,n.ad)(l);let d=(0,a.createContext)(void 0),u=()=>{let e=(0,a.useContext)(d);if(void 0===e)throw Error("useAuth must be used within an AuthContextProvider");return e},p=({children:e})=>{let[t,s]=(0,a.useState)(null),[o,n]=(0,a.useState)(!0),l=(0,a.useRef)(null),[u,p]=(0,a.useState)([]),[x,m]=(0,a.useState)([]),[h,f]=(0,a.useState)({firstName:"",lastName:"",email:"",profileImage:null}),[g,v]=(0,a.useState)(1),w=(e,t)=>!!/^(https?:\/\/)?(www\.)?[\da-z\.-]+\.[a-z\.]{2,6}([\/\w \.-]*)*\/?$/.test(e)&&e.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/,"").startsWith(({Github:"github.com",Youtube:"youtube.com",Twitter:"twitter.com",Linkedin:"linkedin.com",Twitch:"twitch.tv",Facebook:"facebook.com",Stackoverflow:"stackoverflow.com",Codewars:"codewars.com",Hashnode:"hashnode.com",Freecodecamp:"freecodecamp.org"})[t].toLowerCase());return(0,a.useEffect)(()=>{let e=(0,i.Aj)(c,e=>{s(e),n(!1)});return()=>e()},[]),r.jsx(d.Provider,{value:{currentUser:t,signUp:function(e,t){return(0,i.Xb)(c,e,t)},signIn:function(e,t){return(0,i.e5)(c,e,t)},logOut:function(){return(0,i.w7)(c)},userInfo:l,linkForms:u,setLinkForms:p,profileInfo:h,setProfileInfo:f,savedLinks:x,setSavedLinks:m,saveLink:e=>{let t=u.find(t=>t.id===e);if(t&&w(t.url,t.platform)){let s={...t,saved:!0};p(t=>t.map(t=>t.id===e?s:t)),m(t=>[...t.filter(t=>t.id!==e),s])}},updateLinkForm:(e,t,s)=>{p(r=>r.map(r=>r.id===e?{...r,[t]:s,saved:!1}:r))},removeLinkForm:e=>{p(t=>t.filter(t=>t.id!==e)),m(t=>t.filter(t=>t.id!==e))},addNewLinkForm:()=>{p(e=>[...e,{id:g,platform:"Github",url:"",saved:!1}]),v(e=>e+1)},saveAllLinks:()=>{m([...u])}},children:o?r.jsx("div",{children:"Loading..."}):e})}},6945:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(326),a=s(5047),i=s(6226),o=s(434),n=s(7577),l=s(8542);function c(){let[e,t]=(0,n.useState)(""),[s,c]=(0,n.useState)(""),[d,u]=(0,n.useState)(""),[p,x]=(0,n.useState)(""),{signUp:m}=(0,l.a)(),h=(0,a.useRouter)(),f=async r=>{if(r.preventDefault(),x(""),s!==d){x("Passwords do not match");return}try{await m(e,s),console.log("User signed up successfully"),t(""),c(""),u(""),h.push("/")}catch(e){console.error("Error signing up:",e),x("Failed to sign up. Please try again.")}};return r.jsx("main",{className:"w-full h-screen flex justify-center items-center bg-gray-200",children:(0,r.jsxs)("div",{className:"w-full h-full md:w-[476px] md:h-[573px] bg-white flex flex-col justify-center items-center md:rounded-lg shadow-lg",children:[r.jsx("h1",{className:"flex justify-center items-center m-8",children:r.jsx(i.default,{src:"/images/Group 252.svg",width:146,height:32,alt:"logo"})}),(0,r.jsxs)("form",{className:"w-full max-w-md p-4 md:p-8",onSubmit:f,children:[r.jsx("h1",{className:"text-2xl md:text-[32px] text-gray-600 pb-2",children:"Create Account"}),r.jsx("p",{className:"text-sm md:text-[16px] text-gray-400",children:"Let us get you started sharing your links"}),(0,r.jsxs)("div",{className:"pt-4 text-xs md:text-[12px] text-gray-600 space-y-2",children:[r.jsx("label",{htmlFor:"email",children:"Email address"}),(0,r.jsxs)("div",{className:"p-2 w-full h-[48px] flex space-x-4 border rounded-lg",children:[r.jsx("span",{className:"flex justify-center items-center",children:r.jsx(i.default,{src:"/images/ph_envelope-simple-fill.svg",width:16,height:16,alt:"address logo"})}),r.jsx("input",{type:"email",id:"email",placeholder:"eg. michael@gmail.com",value:e,onChange:e=>t(e.target.value),className:"focus:outline-none text-gray-400 w-full text-[16px]"})]})]}),(0,r.jsxs)("div",{className:"pt-4 text-xs md:text-[12px] text-gray-600 space-y-2",children:[r.jsx("label",{htmlFor:"password",children:"Create Password"}),(0,r.jsxs)("div",{className:"p-2 w-full h-[48px] flex space-x-4 border rounded-lg",children:[r.jsx("span",{className:"flex justify-center items-center",children:r.jsx(i.default,{src:"/images/ph_lock-key-fill.svg",width:16,height:16,alt:"address logo"})}),r.jsx("input",{type:"password",id:"password",placeholder:"Enter your Password",value:s,onChange:e=>c(e.target.value),className:"focus:outline-none text-gray-400 w-full text-[16px]"})]})]}),(0,r.jsxs)("div",{className:"pt-4 text-xs md:text-[12px] text-gray-600 space-y-2",children:[r.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),(0,r.jsxs)("div",{className:"p-2 w-full h-[48px] flex space-x-4 border rounded-lg",children:[r.jsx("span",{className:"flex justify-center items-center",children:r.jsx(i.default,{src:"/images/ph_lock-key-fill.svg",width:16,height:16,alt:"address logo"})}),r.jsx("input",{type:"password",id:"confirmPassword",placeholder:"Confirm your Password",value:d,onChange:e=>u(e.target.value),className:"focus:outline-none text-gray-400 w-full text-[16px]"})]})]}),p&&r.jsx("p",{className:"text-red-500 text-sm mt-2",children:p}),r.jsx("button",{type:"submit",className:"w-full h-[46px] bg-violet-600 text-white text-[16px] my-4 border rounded-lg",children:"Create your account"}),(0,r.jsxs)("h2",{className:"text-sm md:text-[16px] pt-2 flex justify-center items-center",children:["Already have an account?"," ",r.jsx(o.default,{href:"/",className:"px-2 text-violet-600",children:"Login"})]})]})]})})}},7267:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var r=s(8570);let a=(0,r.createProxy)(String.raw`C:\Users\Flacko\Desktop\devlinks\src\app\create\page.tsx`),{__esModule:i,$$typeof:o}=a;a.default;let n=(0,r.createProxy)(String.raw`C:\Users\Flacko\Desktop\devlinks\src\app\create\page.tsx#default`)},6080:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p,metadata:()=>u});var r=s(9510),a=s(5384),i=s.n(a);s(5023);var o=s(8570);let n=(0,o.createProxy)(String.raw`C:\Users\Flacko\Desktop\devlinks\src\app\context\authContext.tsx`),{__esModule:l,$$typeof:c}=n;n.default,(0,o.createProxy)(String.raw`C:\Users\Flacko\Desktop\devlinks\src\app\context\authContext.tsx#useAuth`);let d=(0,o.createProxy)(String.raw`C:\Users\Flacko\Desktop\devlinks\src\app\context\authContext.tsx#AuthContextProvider`),u={title:"Create Next App",description:"Generated by create next app"};function p({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:i().className,children:r.jsx(d,{children:e})})})}},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,841,370],()=>s(7004));module.exports=r})();