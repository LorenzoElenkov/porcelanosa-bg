(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9502:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,7970,23)),Promise.resolve().then(n.t.bind(n,3483,23)),Promise.resolve().then(n.t.bind(n,347,23)),Promise.resolve().then(n.bind(n,5121)),Promise.resolve().then(n.bind(n,8357)),Promise.resolve().then(n.t.bind(n,1306,23))},5121:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5155),s=n(8173),o=n.n(s);n(2115);let l=e=>{let{text:t,style:n="",primary:s,secondary:l,link:a=!1,href:c}=e;return a&&c?(0,r.jsx)(o(),{href:c,className:"px-2 py-2 ".concat(n),children:t}):(0,r.jsx)("button",{className:"px-2 py-2 ".concat(s?"bg-blue-400 text-white":l?"bg-transparent":""," ").concat(n),children:t})}},8357:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5155),s=n(2115),o=n(7650);function l(e){let{text:t,block:n,rightAligned:l=!1,rightOffset:a=0}=e,[c,i]=(0,s.useState)(!1),[u,d]=(0,s.useState)({top:0,left:0}),m=(0,s.useRef)(null),f=(0,s.useRef)(null),p=()=>i(!1);return(0,s.useEffect)(()=>{let e=e=>{f.current&&!f.current.contains(e.target)&&m.current&&!m.current.contains(e.target)&&p()};return c&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{ref:m,onClick:()=>{if(m.current){let e=m.current.getBoundingClientRect();d({top:e.bottom+window.scrollY,left:l?e.left-a+window.scrollX:e.left+window.scrollX})}i(e=>!e)},className:"px-4 py-2 flex-nowrap flex gap-2 items-center",children:t}),c&&(0,o.createPortal)((0,r.jsx)("div",{ref:f,style:{position:"absolute",top:"".concat(u.top,"px"),left:"".concat(u.left,"px"),zIndex:9999},className:"w-max p-4 bg-gray-100 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-100 translate-y-2 scale-100",onClick:p,children:n}),document.body)]})}},347:()=>{},1306:()=>{},3483:e=>{e.exports={style:{fontFamily:"'Ubuntu', 'Ubuntu Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_5d6914"}}},e=>{var t=t=>e(e.s=t);e.O(0,[521,970,173,441,517,358],()=>t(9502)),_N_E=e.O()}]);