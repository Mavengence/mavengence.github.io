"use strict";(self.webpackChunkmavengence_github_io=self.webpackChunkmavengence_github_io||[]).push([[441],{253:(s,e,t)=>{t.d(e,{A:()=>h});t(43);var r=t(867),n=t(843),i=t(549),o=t(579);const a=r.Ay.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  contain: layout style paint;
`,l=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`,c=r.Ay.h2`
  font-family: ${i.pQ.title};
  font-size: 5.5rem;
  font-weight: 900;
  color: ${i.lm.retroPrimary};
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  -webkit-text-stroke: 0;
  text-shadow: none;
  background: none;
  user-select: none;

  /* Transition for InView reveal */
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:before, &:after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:before {
    color: #3182CE;
    transform: translate(-8px, 8px);
    z-index: -2;
  }

  &:after {
    color: #E53E3E;
    transform: translate(-15px, 15px);
    z-index: -3;
  }

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
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
`,p=r.Ay.div`
  position: relative;
  z-index: 2;

  /* Transition for InView reveal */
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.3s ease-out 0.05s, transform 0.3s ease-out 0.05s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,d=r.Ay.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
`,h=s=>{let{title:e,children:t,background:r,titleColor:i,gridColor:h,gridOpacity:m,id:u,className:g,...x}=s;return(0,o.jsxs)(a,{id:u,className:g||"",...x,children:[(0,o.jsx)(d,{}),(0,o.jsx)(l,{children:(0,o.jsx)(n.pL,{threshold:.05,triggerOnce:!0,rootMargin:"200px 0px",children:s=>{let{ref:r,inView:n}=s;return(0,o.jsxs)("div",{ref:r,children:[e&&(0,o.jsxs)(c,{color:i,"data-text":e,className:"section-title"+(n?" visible":""),children:[(0,o.jsx)("span",{"data-text":e,children:e}),e]}),(0,o.jsx)(p,{className:n?"visible":"",children:t})]})}})})]})}},441:(s,e,t)=>{t.r(e),t.d(e,{default:()=>_});var r=t(43),n=t(867),i=t(549),o=t(579);const a=n.i7`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,l=n.Ay.div`
  background-color: ${i.lm.retroDarkBg};
  border: 1px solid ${i.lm.retroPurple};
  border-radius: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
  font-family: ${i.pQ.mono};
  animation: ${a} 0.6s ease-out both;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 15px;
    height: 15px;
    background: ${i.lm.retroDarkBg};
    border-left: 1px solid ${i.lm.retroPurple};
    border-bottom: 1px solid ${i.lm.retroPurple};
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    z-index: 10;
  }
`,c=n.Ay.div`
  background: linear-gradient(90deg,
    ${i.lm.retroPurple}80,
    ${i.lm.retroTeal}80
  );
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: relative;

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
`,p=n.Ay.div`
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

    &:nth-child(1) { background: ${i.lm.retroPrimary}; }
    &:nth-child(2) { background: ${i.lm.retroSecondary}; }
    &:nth-child(3) { background: ${i.lm.retroGreen}; }

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
`,d=n.Ay.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  color: ${i.lm.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${i.pQ.secondary};
  text-shadow: 0 0 5px ${i.lm.retroPurple};
`,h=n.Ay.div`
  padding: 20px;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
  max-height: 500px;
  overflow-y: auto;
  position: relative;

  .cursor {
    display: inline-block;
    width: 10px;
    height: 18px;
    background: ${i.lm.retroTeal};
    margin-left: 2px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .command { color: ${i.lm.retroTeal}; font-weight: bold; }
  .path { color: ${i.lm.retroPrimary}; }
  .prompt { color: ${i.lm.retroPurple}; }
  .result { color: ${i.lm.white}; margin: 0.5rem 0 1.5rem; opacity: 0.9; }
  .highlight { color: ${i.lm.retroSecondary}; font-weight: bold; }
`,m=s=>{let{commands:e,title:t="terminal"}=s;const[n,i]=(0,r.useState)([]),[a,m]=(0,r.useState)(0),[u,g]=(0,r.useState)(0);return(0,r.useEffect)((()=>{if(0!==e.length&&a<e.length){const s=e[a];if(u<s.command.length){const s=setTimeout((()=>{g(u+1)}),50);return()=>clearTimeout(s)}{const e=setTimeout((()=>{i((e=>[...e,{...s,isTyping:!1,isComplete:!0}])),m(a+1),g(0)}),500);return()=>clearTimeout(e)}}}),[e,a,u]),(0,o.jsxs)(l,{className:"terminal",children:[(0,o.jsxs)(c,{children:[(0,o.jsxs)(p,{children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]}),(0,o.jsx)(d,{children:t})]}),(0,o.jsxs)(h,{children:[n.map((s=>(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"prompt",children:"\u03bb"})," ",(0,o.jsx)("span",{className:"path",children:"~/tim-loehr"})," ",(0,o.jsx)("span",{className:"command",children:s.command})]}),s.isComplete&&(0,o.jsx)("div",{className:"result",children:s.result})]},s.command))),a<e.length&&(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"prompt",children:"\u03bb"})," ",(0,o.jsx)("span",{className:"path",children:"~/tim-loehr"})," ",(0,o.jsx)("span",{className:"command",children:e[a].command.substring(0,u)}),(0,o.jsx)("span",{className:"cursor"})]})]})]})};var u=t(253);const g=n.Ay.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  
  /* Subtle glow border */
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg,
      ${i.lm.primary}30,
      ${i.lm.accent}30,
      ${i.lm.secondary}30
    );
    z-index: -1;
    opacity: 0.5;
    border-radius: 20px;
  }

  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: translateY(-5px);
  }
`,x=[{command:"whoami",result:"Tim Loehr, Data Engineer @ Meta"},{command:"cat skills.json | jq",result:'{\n  "Programming": ["Python", "SQL", "R", "JavaScript"],\n  "ML & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],\n  "Data": ["Spark", "Hadoop", "MongoDB", "PostgreSQL", "Data Visualization"],\n  "Cloud": ["AWS", "GCP", "Azure", "Docker", "Kubernetes"]\n}'},{command:"ls -la education/",result:"drwxr-xr-x  5 timloehr  staff  160 Mar 1 10:24 .\ndrwxr-xr-x 18 timloehr  staff  576 Mar 1 10:24 ..\n-rw-r--r--  1 timloehr  staff  302 Mar 1 10:24 MS_Computer_Science.md\n-rw-r--r--  1 timloehr  staff  286 Mar 1 10:24 BS_Computer_Science.md\ndrwxr-xr-x  7 timloehr  staff  224 Mar 1 10:24 certificates/"},{command:"cat experience.json | jq | bat -l json",result:'\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n       \u2502 File: experience.json\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1   \u2502 {\n   2   \u2502   "Meta": {\n   3   \u2502     "role": "Data Engineer",\n   4   \u2502     "period": "2025-Present",\n   5   \u2502     "projects": ["Enterprise Infrastructure", "Security Analytics"]\n   6   \u2502   },\n   7   \u2502   "Red Bull": {\n   8   \u2502     "role": "Data Scientist",\n   9   \u2502     "period": "2024-2025",\n  10   \u2502     "projects": ["Supply Chain Analytics", "MLOps"]\n  11   \u2502   },\n  12   \u2502   "Apple": {\n  13   \u2502     "role": "Data Scientist",\n  14   \u2502     "period": "2022-2024",\n  15   \u2502     "projects": ["Supply Chain Optimization", "Anomaly Detection"]\n  16   \u2502   },\n  17   \u2502   "Amazon": {\n  18   \u2502     "role": "BI Engineer",\n  19   \u2502     "period": "2021",\n  20   \u2502     "projects": ["Data Pipelines", "Sales Forecasting"]\n  21   \u2502   }\n  22   \u2502 }'},{command:"contact --format=pretty",result:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 LinkedIn : linkedin.com/in/tim-loehr-821ba8188      \u2502\n\u2502 GitHub   : github.com/mavengence                    \u2502\n\u2502 Medium   : medium.com/@mavengence                   \u2502\n\u2502 Scholar  : scholar.google.com/citations?user=DLV... \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"},{command:'echo "Machine Loehrning is my passion \ud83e\udde0" | figlet',result:"  __  __            _     _              _                _             _             \n |  \\/  | __ _  ___| |__ (_)_ __   ___  | |    ___   ___| |__  _ __ _ __ (_)_ __   __ _ \n | |\\/| |/ _` |/ __| '_ \\| | '_ \\ / _ \\ | |   / _ \\ / __| '_ \\| '__| '_ \\| | '_ \\ / _` |\n | |  | | (_| | (__| | | | | | | |  __/ | |__| (_) | (__| | | | |  | | | | | | | | (_| |\n |_|  |_|\\__,_|\\___|_| |_|_|_| |_|\\___| |_____\\___/ \\___|_| |_|_|  |_| |_|_|_| |_|\\__, |\n                                                                                   |___/"},{command:"neofetch",result:"            .-/+oossssoo+/-.               tim@machine-loehrning\n        `:+ssssssssssssssssss+:`           -------------------\n      -+ssssssssssssssssssyyssss+-         OS: Data Science Pro\n    .ossssssssssssssssss/   /ossssso.      Host: Portfolio v2.0\n   /sssssssssssssssssso/     /sssssss/     Kernel: Brain 5.0\n  +sssssssssssssssssss/       /ssssssso    Uptime: 28 years\n :ssssssssssssssssssss\\       /sssssssss:  Packages: Python, R, SQL, JS\n +ssssssssssssssssssssso\\     /sssssssss+  Shell: ZSH 5.9\n +sssssssssssssssssssssssooosssssssssss+  Resolution: 2560x1600\n /ssssssssssssssssssssssssssssssssssssso  DE: Machine Learning\n .osssssssssssssssssssssssssssssssssssso  WM: Neural Networks\n  -+sssssssssssssssssssssssssssssssss+-   Terminal: Data Science\n   \\\\ossssssssssssssssssssssssssssso/     CPU: Cortex ML-9000\n    `.+ossssssssssssssssssssssssso+.'      Memory: 1TB ML Models\n      `-/+oossssssssssssssssoo+/-`         Skills: [\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592] 95%\n        "}],_=()=>(0,o.jsx)(u.A,{id:"console",title:"TERMINAL",titleColor:i.lm.hivePrimary,background:i.lm.hiveDarkBg,gridColor:i.lm.hivePrimary,gridOpacity:"0.05",children:(0,o.jsx)(g,{children:(0,o.jsx)(m,{commands:x,title:"timloehr@machine-loehrning ~ $"})})})},843:(s,e,t)=>{t.d(e,{pL:()=>h});var r=t(43),n=Object.defineProperty,i=(s,e,t)=>((s,e,t)=>e in s?n(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t)(s,"symbol"!==typeof e?e+"":e,t),o=new Map,a=new WeakMap,l=0,c=void 0;function p(s){return Object.keys(s).sort().filter((e=>void 0!==s[e])).map((e=>{return`${e}_${"root"===e?(t=s.root,t?(a.has(t)||(l+=1,a.set(t,l.toString())),a.get(t)):"0"):s[e]}`;var t})).toString()}function d(s,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const n=s.getBoundingClientRect();return e(r,{isIntersecting:r,target:s,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:i,elements:a}=function(s){const e=p(s);let t=o.get(e);if(!t){const r=new Map;let n;const i=new IntersectionObserver((e=>{e.forEach((e=>{var t;const i=e.isIntersecting&&n.some((s=>e.intersectionRatio>=s));s.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=i),null==(t=r.get(e.target))||t.forEach((s=>{s(i,e)}))}))}),s);n=i.thresholds||(Array.isArray(s.threshold)?s.threshold:[s.threshold||0]),t={id:e,observer:i,elements:r},o.set(e,t)}return t}(t),l=a.get(s)||[];return a.has(s)||a.set(s,l),l.push(e),i.observe(s),function(){l.splice(l.indexOf(e),1),0===l.length&&(a.delete(s),i.unobserve(s)),0===a.size&&(i.disconnect(),o.delete(n))}}var h=class extends r.Component{constructor(s){super(s),i(this,"node",null),i(this,"_unobserveCb",null),i(this,"handleNode",(s=>{this.node&&(this.unobserve(),s||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=s||null,this.observeNode()})),i(this,"handleChange",((s,e)=>{s&&this.props.triggerOnce&&this.unobserve(),function(s){return"function"!==typeof s.children}(this.props)||this.setState({inView:s,entry:e}),this.props.onChange&&this.props.onChange(s,e)})),this.state={inView:!!s.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(s){s.rootMargin===this.props.rootMargin&&s.root===this.props.root&&s.threshold===this.props.threshold&&s.skip===this.props.skip&&s.trackVisibility===this.props.trackVisibility&&s.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:s,root:e,rootMargin:t,trackVisibility:r,delay:n,fallbackInView:i}=this.props;this._unobserveCb=d(this.node,this.handleChange,{threshold:s,root:e,rootMargin:t,trackVisibility:r,delay:n},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:s}=this.props;if("function"===typeof s){const{inView:e,entry:t}=this.state;return s({inView:e,entry:t,ref:this.handleNode})}const{as:e,triggerOnce:t,threshold:n,root:i,rootMargin:o,onChange:a,skip:l,trackVisibility:c,delay:p,initialInView:d,fallbackInView:h,...m}=this.props;return r.createElement(e||"div",{ref:this.handleNode,...m},s)}}}}]);
//# sourceMappingURL=441.75748769.chunk.js.map