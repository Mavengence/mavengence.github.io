"use strict";(self.webpackChunkmavengence_github_io=self.webpackChunkmavengence_github_io||[]).push([[202],{253:(e,t,i)=>{i.d(t,{A:()=>h});i(43);var r=i(867),n=i(843),a=i(549),o=i(579);const s=r.Ay.section`
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
`,d=r.Ay.h2`
  font-family: ${a.pQ.title};
  font-size: 5.5rem;
  font-weight: 900;
  color: ${a.lm.retroPrimary};
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
`,c=r.Ay.div`
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
`,p=r.Ay.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
`,h=e=>{let{title:t,children:i,background:r,titleColor:a,gridColor:h,gridOpacity:g,id:u,className:b,...m}=e;return(0,o.jsxs)(s,{id:u,className:b||"",...m,children:[(0,o.jsx)(p,{}),(0,o.jsx)(l,{children:(0,o.jsx)(n.pL,{threshold:.05,triggerOnce:!0,rootMargin:"200px 0px",children:e=>{let{ref:r,inView:n}=e;return(0,o.jsxs)("div",{ref:r,children:[t&&(0,o.jsxs)(d,{color:a,"data-text":t,className:"section-title"+(n?" visible":""),children:[(0,o.jsx)("span",{"data-text":t,children:t}),t]}),(0,o.jsx)(c,{className:n?"visible":"",children:i})]})}})})]})}},821:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});i(43);var r=i(867),n=i(843),a=i(253),o=i(549),s=i(579);const l=[{title:"Data Engineering Fundamentals",subtitle:"Think like a data engineer by lunch.",description:"An interactive crash course on building production data pipelines. Every concept is a live simulator \u2014 drag the watermark, overflow a worker, break a capstone gate. By the end you know where a pipeline fails before it does.",gradient:"linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #22D3EE 100%)",stats:[{label:"Chapters",value:"10"},{label:"Simulators",value:"15"},{label:"Duration",value:"~90 min"},{label:"Level",value:"Intermediate"}],tags:["Kafka","Spark","Airflow","Presto","dbt","Iceberg","Parquet","ClickHouse"],badge:{text:"Interactive",color:"#0891B2"},actions:[{label:"\u25b6 Start the course",url:"https://www.timloehr.me/interactive-courses/data-engineering-fundamentals/",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/interactive-courses",primary:!1}]},{title:"Data Science Fundamentals",subtitle:"From distributions to deployment, live.",description:"An animated, interactive deep-dive into the full data science loop. CLT, SHAP, A/B testing, causal inference, and drift detection \u2014 every concept is a live simulator you can break.",gradient:"linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #C084FC 100%)",stats:[{label:"Chapters",value:"13"},{label:"Simulators",value:"18"},{label:"Duration",value:"~2h"},{label:"Level",value:"Intermediate"}],tags:["Statistics","SHAP","A/B Testing","Causal Inference","scikit-learn","XGBoost","Drift","CUPED"],badge:{text:"Interactive",color:"#7C3AED"},actions:[{label:"\u25b6 Start the course",url:"https://www.timloehr.me/interactive-courses/data-science/",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/interactive-courses",primary:!1}]},{title:"Data Infrastructure",subtitle:"Staff-level system design, animated.",description:"A 12-lesson field guide to data engineering system design at the IC5 level. CAP theorem, lakehouses, CDC, idempotency \u2014 with live interactive diagrams and an interview replay simulator.",gradient:"linear-gradient(135deg, #0F766E 0%, #0D9488 50%, #14B8A6 100%)",stats:[{label:"Lessons",value:"12"},{label:"Simulators",value:"8"},{label:"Duration",value:"~2h 30min"},{label:"Level",value:"Advanced"}],tags:["CAP Theorem","Lakehouse","CDC","Debezium","Kafka","dbt","Iceberg","System Design"],badge:{text:"Advanced",color:"#0F766E"},actions:[{label:"\u25b6 Start the course",url:"https://www.timloehr.me/interactive-courses/data-infrastructure/",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/interactive-courses",primary:!1}]},{title:"AI Coding with Claude",subtitle:"Ship faster with AI as your co-pilot.",description:"A practical 12-lesson guide to AI-assisted development. Mental models, task specs, scope management, code review, parallelism, and end-to-end workflows for shipping production code with AI.",gradient:"linear-gradient(135deg, #B45309 0%, #D97706 50%, #F59E0B 100%)",stats:[{label:"Lessons",value:"12"},{label:"Exercises",value:"24"},{label:"Duration",value:"~90 min"},{label:"Level",value:"All levels"}],tags:["Claude","GitHub Copilot","Cursor","Prompting","TDD","Code Review","Agentic Dev"],badge:{text:"Practical",color:"#B45309"},actions:[{label:"\u25b6 Start the course",url:"https://www.timloehr.me/interactive-courses/codex/",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/interactive-courses",primary:!1}]}],d=r.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,c=r.Ay.div`
  position: relative;
  background: rgba(22, 22, 26, 0.85);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.35s ease-out, transform 0.35s ease-out, box-shadow 0.4s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
    transform: translateY(-4px);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 340px;
  }
`,p=r.Ay.div`
  flex-shrink: 0;
  width: 100%;
  min-height: 180px;
  background: ${e=>e.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.32);
  }

  @media (min-width: 768px) {
    width: 280px;
    min-height: unset;
  }
`,h=r.Ay.div`
  position: absolute;
  top: 20px;
  right: -32px;
  background: ${e=>e.color||"#0891B2"};
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  font-family: ${o.pQ.accent};
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 44px;
  transform: rotate(45deg);
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
`,g=r.Ay.h3`
  font-family: ${o.pQ.title};
  font-size: 1.35rem;
  font-weight: 800;
  color: white;
  text-align: center;
  margin: 0;
  z-index: 2;
  position: relative;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
  line-height: 1.3;
`,u=r.Ay.p`
  font-family: ${o.pQ.body};
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin: 0.5rem 0 0;
  z-index: 2;
  position: relative;
  font-style: italic;
`,b=r.Ay.div`
  flex: 1;
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`,m=r.Ay.p`
  font-family: ${o.pQ.body};
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
  margin: 0;
`,f=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
`,x=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,v=r.Ay.span`
  font-family: ${o.pQ.accent};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${o.lm.retroPrimary};
  letter-spacing: -0.02em;
`,y=r.Ay.span`
  font-family: ${o.pQ.mono||o.pQ.body};
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,w=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,k=r.Ay.span`
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-family: ${o.pQ.accent};
  font-size: 0.68rem;
  font-weight: 600;
  padding: 3px 8px;
  letter-spacing: 0.04em;
`,A=r.Ay.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 0.25rem;
`,C=r.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: 8px;
  font-family: ${o.pQ.accent};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>e.primary?"\n    background: linear-gradient(135deg, #0891B2, #06B6D4);\n    color: white;\n    border: none;\n    box-shadow: 0 4px 14px rgba(8, 145, 178, 0.45);\n    &:hover {\n      box-shadow: 0 6px 20px rgba(8, 145, 178, 0.65);\n      transform: translateY(-2px);\n    }\n  ":"\n    background: transparent;\n    color: rgba(255,255,255,0.65);\n    border: 1px solid rgba(255,255,255,0.18);\n    &:hover {\n      background: rgba(255,255,255,0.06);\n      color: rgba(255,255,255,0.9);\n      border-color: rgba(255,255,255,0.3);\n    }\n  "}
`,j=()=>(0,s.jsx)(a.A,{title:"Courses",id:"courses",children:(0,s.jsx)(d,{children:l.map(((e,t)=>(0,s.jsx)(n.pL,{threshold:.1,triggerOnce:!0,children:t=>{let{ref:i,inView:r}=t;return(0,s.jsxs)(c,{ref:i,className:r?"visible":"",children:[(0,s.jsxs)(p,{gradient:e.gradient,children:[(0,s.jsx)(h,{color:e.badge.color,children:e.badge.text}),(0,s.jsx)(g,{children:e.title}),(0,s.jsx)(u,{children:e.subtitle})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(m,{children:e.description}),(0,s.jsx)(f,{children:e.stats.map((e=>(0,s.jsxs)(x,{children:[(0,s.jsx)(v,{children:e.value}),(0,s.jsx)(y,{children:e.label})]},e.label)))}),(0,s.jsx)(w,{children:e.tags.map((e=>(0,s.jsx)(k,{children:e},e)))}),(0,s.jsx)(A,{children:e.actions.map((e=>(0,s.jsx)(C,{href:e.url,target:"_blank",rel:"noopener noreferrer",primary:e.primary,children:e.label},e.label)))})]})]})}},t)))})})},843:(e,t,i)=>{i.d(t,{pL:()=>h});var r=i(43),n=Object.defineProperty,a=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),o=new Map,s=new WeakMap,l=0,d=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function p(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:a,elements:s}=function(e){const t=c(e);let i=o.get(t);if(!i){const r=new Map;let n;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=r.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:r},o.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(n))}}var h=class extends r.Component{constructor(e){super(e),a(this,"node",null),a(this,"_unobserveCb",null),a(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),a(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:n,fallbackInView:a}=this.props;this._unobserveCb=p(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:n},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:n,root:a,rootMargin:o,onChange:s,skip:l,trackVisibility:d,delay:c,initialInView:p,fallbackInView:h,...g}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...g},e)}}}}]);
//# sourceMappingURL=202.09a0c2c5.chunk.js.map