"use strict";(self.webpackChunkmavengence_github_io=self.webpackChunkmavengence_github_io||[]).push([[441],{2441:(s,e,t)=>{t.r(e),t.d(e,{default:()=>x});var i=t(5043),r=t(6867),n=t(7200),o=t(3549),a=t(579);const l=(0,r.Ay)(n.P.div)`
  background-color: ${o.lm.hiveDarkBg};
  border: 1px solid ${o.lm.retroPurple};
  border-radius: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
  font-family: ${o.pQ.mono};
  
  /* Pixelated corner effects */
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 15px;
    height: 15px;
    background: ${o.lm.hiveDarkBg};
    border-left: 1px solid ${o.lm.retroPurple};
    border-bottom: 1px solid ${o.lm.retroPurple};
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    z-index: 10;
  }
`,p=r.Ay.div`
  background: linear-gradient(90deg, 
    ${o.lm.retroPurple}80, 
    ${o.lm.retroTeal}80
  );
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: relative;
  
  /* Pixelated texture */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 3px 3px;
    opacity: 0.5;
  }
`,d=r.Ay.div`
  display: flex;
  gap: 8px;
  position: relative;
  z-index: 1;
  
  span {
    width: 12px;
    height: 12px;
    border-radius: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    
    &:nth-child(1) {
      background: ${o.lm.hivePrimary};
    }
    
    &:nth-child(2) {
      background: ${o.lm.hiveSecondary};
    }
    
    &:nth-child(3) {
      background: ${o.lm.retroGreen};
    }
    
    /* Add pixelated border */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    }
  }
`,c=r.Ay.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  color: ${o.lm.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${o.pQ.secondary};
  text-shadow: 0 0 5px ${o.lm.retroPurple};
`,h=r.Ay.div`
  padding: 20px;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
  max-height: 500px;
  overflow-y: auto;
  position: relative;
  
  /* Scanline effect removed */
  
  /* Styling for the blinking cursor */
  .cursor {
    display: inline-block;
    width: 10px;
    height: 18px;
    background: ${o.lm.retroTeal};
    margin-left: 2px;
    animation: blink 1s step-end infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .command {
    color: ${o.lm.retroTeal};
    font-weight: bold;
  }
  
  .path {
    color: ${o.lm.hivePrimary};
  }
  
  .prompt {
    color: ${o.lm.retroPurple};
  }
  
  .result {
    color: ${o.lm.white};
    margin: 0.5rem 0 1.5rem;
    opacity: 0.9;
  }
  
  .highlight {
    color: ${o.lm.hiveSecondary};
    font-weight: bold;
  }
`,m=s=>{let{commands:e,title:t="terminal"}=s;const[r,n]=(0,i.useState)([]),[o,m]=(0,i.useState)(0),[g,u]=(0,i.useState)(0),[x,b]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{if(0!==e.length&&o<e.length){const s=e[o];if(g<s.command.length){const s=setTimeout((()=>{u(g+1)}),50);return()=>clearTimeout(s)}{const e=setTimeout((()=>{n((e=>[...e,{...s,isTyping:!1,isComplete:!0}])),m(o+1),u(0)}),500);return()=>clearTimeout(e)}}}),[e,o,g]),(0,i.useEffect)((()=>{const s=setInterval((()=>{b((s=>!s))}),530);return()=>clearInterval(s)}),[]),(0,a.jsxs)(l,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"terminal",children:[(0,a.jsxs)(p,{children:[(0,a.jsxs)(d,{children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsx)(c,{children:t})]}),(0,a.jsxs)(h,{children:[r.map(((s,e)=>(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"prompt",children:"\u03bb"})," ",(0,a.jsx)("span",{className:"path",children:"~/tim-loehr"})," ",(0,a.jsx)("span",{className:"command",children:s.command})]}),s.isComplete&&(0,a.jsx)("div",{className:"result",children:s.result})]},e))),o<e.length&&(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"prompt",children:"\u03bb"})," ",(0,a.jsx)("span",{className:"path",children:"~/tim-loehr"})," ",(0,a.jsx)("span",{className:"command",children:e[o].command.substring(0,g)}),x&&(0,a.jsx)("span",{className:"cursor"})]})]})]})};var g=t(5253);const u=r.Ay.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  
  /* Subtle modern glow effect around the terminal */
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, 
      ${o.lm.primary}30, 
      ${o.lm.accent}30, 
      ${o.lm.secondary}30
    );
    background-size: 400% 400%;
    z-index: -1;
    filter: blur(15px);
    opacity: 0.6;
    animation: subtleGlow 8s ease infinite;
    border-radius: 20px;
  }
  
  /* Mac-inspired floating effect on hover */
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    &:before {
      filter: blur(20px);
      opacity: 0.7;
    }
  }
  
  @keyframes subtleGlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,x=()=>{const s=[{command:"whoami",result:"Tim Loehr, Data Engineer & ML Specialist"},{command:"cat skills.json | jq",result:'{\n  "Programming": ["Python", "SQL", "R", "JavaScript"],\n  "ML & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],\n  "Data": ["Spark", "Hadoop", "MongoDB", "PostgreSQL", "Data Visualization"],\n  "Cloud": ["AWS", "GCP", "Azure", "Docker", "Kubernetes"]\n}'},{command:"ls -la education/",result:"drwxr-xr-x  5 timloehr  staff  160 Mar 1 10:24 .\ndrwxr-xr-x 18 timloehr  staff  576 Mar 1 10:24 ..\n-rw-r--r--  1 timloehr  staff  302 Mar 1 10:24 MS_Data_Science.md\n-rw-r--r--  1 timloehr  staff  286 Mar 1 10:24 BS_Computer_Science.md\ndrwxr-xr-x  7 timloehr  staff  224 Mar 1 10:24 certificates/"},{command:"cat experience.json | jq | bat -l json",result:'\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n       \u2502 File: experience.json\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1   \u2502 {\n   2   \u2502   "Meta": {\n   3   \u2502     "role": "Data Engineer",\n   4   \u2502     "period": "2025-Present",\n   5   \u2502     "projects": ["Enterprise Engineering"]\n   6   \u2502   },\n  12   \u2502   "Red Bull": {\n  13   \u2502     "role": "Data Scientist",\n  14   \u2502     "period": "2024-2025",\n  15   \u2502     "projects": ["Supply Chain Analytics", "Sales Forecasting"]\n  16   \u2502   }\n   7   \u2502   "Apple": {\n   8   \u2502     "role": "Data Scientist",\n   9   \u2502     "period": "2022-2024",\n  10   \u2502     "projects": ["Supply Chain Optimization, "Sales Forecasting"]\n  11   \u2502   }\n  17   \u2502 }'},{command:"contact --format=pretty",result:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Email    : tim.loehr@example.com               \u2502\n\u2502 LinkedIn : linkedin.com/in/tim-loehr-821ba8188 \u2502\n\u2502 GitHub   : github.com/timloehr                 \u2502\n\u2502 Phone    : +1 (555) 123-4567                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"},{command:'echo "Machine Loehrning is my passion \ud83e\udde0" | figlet',result:"  __  __            _     _              _                _             _             \n |  \\/  | __ _  ___| |__ (_)_ __   ___  | |    ___   ___| |__  _ __ _ __ (_)_ __   __ _ \n | |\\/| |/ _` |/ __| '_ \\| | '_ \\ / _ \\ | |   / _ \\ / __| '_ \\| '__| '_ \\| | '_ \\ / _` |\n | |  | | (_| | (__| | | | | | | |  __/ | |__| (_) | (__| | | | |  | | | | | | | | (_| |\n |_|  |_|\\__,_|\\___|_| |_|_|_| |_|\\___| |_____\\___/ \\___|_| |_|_|  |_| |_|_|_| |_|\\__, |\n                                                                                   |___/"},{command:"neofetch",result:"            .-/+oossssoo+/-.               tim@machine-loehrning\n        `:+ssssssssssssssssss+:`           -------------------\n      -+ssssssssssssssssssyyssss+-         OS: Data Science Pro\n    .ossssssssssssssssss/   /ossssso.      Host: Portfolio v2.0\n   /sssssssssssssssssso/     /sssssss/     Kernel: Brain 5.0\n  +sssssssssssssssssss/       /ssssssso    Uptime: 28 years\n :ssssssssssssssssssss\\       /sssssssss:  Packages: Python, R, SQL, JS\n +ssssssssssssssssssssso\\     /sssssssss+  Shell: ZSH 5.9\n +sssssssssssssssssssssssooosssssssssss+  Resolution: 2560x1600\n /ssssssssssssssssssssssssssssssssssssso  DE: Machine Learning\n .osssssssssssssssssssssssssssssssssssso  WM: Neural Networks\n  -+sssssssssssssssssssssssssssssssss+-   Terminal: Data Science\n   \\\\ossssssssssssssssssssssssssssso/     CPU: Cortex ML-9000\n    `.+ossssssssssssssssssssssssso+.'      Memory: 1TB ML Models\n      `-/+oossssssssssssssssoo+/-`         Skills: [\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592] 95%\n        "}];return(0,a.jsx)(g.A,{id:"console",title:"TERMINAL",titleColor:o.lm.hivePrimary,background:o.lm.hiveDarkBg,gridColor:o.lm.hivePrimary,gridOpacity:"0.05",children:(0,a.jsx)(u,{children:(0,a.jsx)(m,{commands:s,title:"timloehr@machine-loehrning ~ $"})})})}},5253:(s,e,t)=>{t.d(e,{A:()=>u});t(5043);var i=t(6867),r=t(7200),n=t(5843),o=t(3549),a=t(579);i.i7`
  0%, 95% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(0.2deg);
  }
  5%, 100% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(0deg);
  }
  10% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(-0.2deg);
  }
`;const l=i.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,p=i.Ay.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  
  /* Section connectors removed */
`,d=i.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`,c=i.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,h=(0,i.Ay)(r.P.h2)`
  font-family: ${o.pQ.title};
  font-size: 5.5rem; /* Larger size */
  font-weight: 900;
  color: ${o.lm.hivePrimary}; /* Main color */
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  -webkit-text-stroke: 0; /* Remove stroke */
  
  /* Real graffiti 3D style with multiple layers */
  text-shadow: none; /* Remove glow */
  
  /* Three staggered shadows for real 3D depth */
  &:before, &:after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  /* First shadow layer - blue */
  &:before {
    color: #3182CE; /* Blue */
    transform: translate(-8px, 8px);
    z-index: -2;
    transition: transform 0.3s ease;
  }
  
  /* Second shadow layer - red */
  &:after {
    color: #E53E3E; /* Red */
    transform: translate(-15px, 15px);
    z-index: -3;
    transition: transform 0.3s ease;
  }
  
  /* Create one more shadow for depth with an element */
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #000;
    transform: translate(-4px, 4px);
    z-index: -1;
    transition: transform 0.3s ease;
  }
  
  /* Slow up and down hover animation */
  animation: ${c} 8s ease-in-out infinite;
  
  /* No background clip, more authentic */
  background: none;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
`,m=(0,i.Ay)(r.P.div)`
  position: relative;
  z-index: 2;
`,g=i.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      ${s=>s.color||o.lm.hivePrimary}03 0px,
      ${s=>s.color||o.lm.hivePrimary}03 2px,
      transparent 2px,
      transparent 10px
    );
  z-index: 1;
  pointer-events: none;
  opacity: ${s=>s.opacity||"0.15"};
  
  /* More subtle diamond pattern */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, ${s=>s.color||o.lm.hivePrimary}05 25%, transparent 25%),
      linear-gradient(-45deg, ${s=>s.color||o.lm.hivePrimary}05 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${s=>s.color||o.lm.hivePrimary}05 75%),
      linear-gradient(-45deg, transparent 75%, ${s=>s.color||o.lm.hivePrimary}05 75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
    opacity: 0.3;
  }
`,u=(i.Ay.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: ${o.lm.hivePrimary};
  border: 3px solid #000;
  z-index: 5;
  animation: ${l} 6s ease-in-out infinite;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  opacity: 0.6;
  
  &.square {
    right: 10%;
    top: 15%;
    transform: rotate(15deg);
  }
  
  &.circle {
    left: 8%;
    bottom: 20%;
    border-radius: 50%;
    animation-delay: 1s;
  }
  
  &.triangle {
    right: 15%;
    bottom: 15%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation-delay: 2s;
  }
`,s=>{let{title:e,children:t,background:i,titleColor:r,underlineColor:o,underlineSecondary:l,glowColor:c,gridColor:u,gridOpacity:x,id:b,className:f,..._}=s;return(0,a.jsxs)(p,{id:b,background:i,className:f||"",..._,children:[(0,a.jsx)(g,{color:u,opacity:x}),(0,a.jsx)(d,{children:(0,a.jsx)(n.pL,{threshold:.2,triggerOnce:!0,children:s=>{let{ref:i,inView:n}=s;return(0,a.jsxs)(a.Fragment,{children:[e&&(0,a.jsxs)(h,{ref:i,color:r,"data-text":e,initial:{opacity:0,y:-20},animate:n?{opacity:1,y:0}:{},transition:{duration:.8,type:"spring",stiffness:100},className:"section-title",children:[(0,a.jsx)("span",{"data-text":e,children:e}),e]}),(0,a.jsx)(m,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2,type:"spring",stiffness:80},children:t})]})}})})]})})},5843:(s,e,t)=>{t.d(e,{pL:()=>h});var i=t(5043),r=Object.defineProperty,n=(s,e,t)=>((s,e,t)=>e in s?r(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t)(s,"symbol"!==typeof e?e+"":e,t),o=new Map,a=new WeakMap,l=0,p=void 0;function d(s){return Object.keys(s).sort().filter((e=>void 0!==s[e])).map((e=>{return`${e}_${"root"===e?(t=s.root,t?(a.has(t)||(l+=1,a.set(t,l.toString())),a.get(t)):"0"):s[e]}`;var t})).toString()}function c(s,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const r=s.getBoundingClientRect();return e(i,{isIntersecting:i,target:s,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:n,elements:a}=function(s){const e=d(s);let t=o.get(e);if(!t){const i=new Map;let r;const n=new IntersectionObserver((e=>{e.forEach((e=>{var t;const n=e.isIntersecting&&r.some((s=>e.intersectionRatio>=s));s.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=n),null==(t=i.get(e.target))||t.forEach((s=>{s(n,e)}))}))}),s);r=n.thresholds||(Array.isArray(s.threshold)?s.threshold:[s.threshold||0]),t={id:e,observer:n,elements:i},o.set(e,t)}return t}(t),l=a.get(s)||[];return a.has(s)||a.set(s,l),l.push(e),n.observe(s),function(){l.splice(l.indexOf(e),1),0===l.length&&(a.delete(s),n.unobserve(s)),0===a.size&&(n.disconnect(),o.delete(r))}}var h=class extends i.Component{constructor(s){super(s),n(this,"node",null),n(this,"_unobserveCb",null),n(this,"handleNode",(s=>{this.node&&(this.unobserve(),s||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=s||null,this.observeNode()})),n(this,"handleChange",((s,e)=>{s&&this.props.triggerOnce&&this.unobserve(),function(s){return"function"!==typeof s.children}(this.props)||this.setState({inView:s,entry:e}),this.props.onChange&&this.props.onChange(s,e)})),this.state={inView:!!s.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(s){s.rootMargin===this.props.rootMargin&&s.root===this.props.root&&s.threshold===this.props.threshold&&s.skip===this.props.skip&&s.trackVisibility===this.props.trackVisibility&&s.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:s,root:e,rootMargin:t,trackVisibility:i,delay:r,fallbackInView:n}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:s,root:e,rootMargin:t,trackVisibility:i,delay:r},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:s}=this.props;if("function"===typeof s){const{inView:e,entry:t}=this.state;return s({inView:e,entry:t,ref:this.handleNode})}const{as:e,triggerOnce:t,threshold:r,root:n,rootMargin:o,onChange:a,skip:l,trackVisibility:p,delay:d,initialInView:c,fallbackInView:h,...m}=this.props;return i.createElement(e||"div",{ref:this.handleNode,...m},s)}}}}]);
//# sourceMappingURL=441.f10276ab.chunk.js.map