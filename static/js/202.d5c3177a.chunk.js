"use strict";(self.webpackChunkmavengence_github_io=self.webpackChunkmavengence_github_io||[]).push([[202],{253:(e,t,i)=>{i.d(t,{A:()=>h});i(43);var r=i(867),n=i(843),o=i(549),a=i(579);const s=r.Ay.section`
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
  font-family: ${o.pQ.title};
  font-size: 5.5rem;
  font-weight: 900;
  color: ${o.lm.retroPrimary};
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
`,c=r.Ay.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
`,h=e=>{let{title:t,children:i,background:r,titleColor:o,gridColor:h,gridOpacity:g,id:b,className:x,...f}=e;return(0,a.jsxs)(s,{id:b,className:x||"",...f,children:[(0,a.jsx)(c,{}),(0,a.jsx)(l,{children:(0,a.jsx)(n.pL,{threshold:.05,triggerOnce:!0,rootMargin:"200px 0px",children:e=>{let{ref:r,inView:n}=e;return(0,a.jsxs)("div",{ref:r,children:[t&&(0,a.jsxs)(d,{color:o,"data-text":t,className:"section-title"+(n?" visible":""),children:[(0,a.jsx)("span",{"data-text":t,children:t}),t]}),(0,a.jsx)(p,{className:n?"visible":"",children:i})]})}})})]})}},821:(e,t,i)=>{i.r(t),i.d(t,{default:()=>V});i(43);var r=i(867),n=i(843),o=i(253),a=i(549),s=i(579);const l=[{title:"Data Engineering Fundamentals",subtitle:"Think like a data engineer by lunch.",description:"An interactive crash course on building production data pipelines. Every concept is a live simulator \u2014 drag the watermark, overflow a worker, break a capstone gate. By the end you know where a pipeline fails before it does.",gradient:"linear-gradient(135deg, #0891B2 0%, #06B6D4 50%, #22D3EE 100%)",stats:[{label:"Chapters",value:"10"},{label:"Simulators",value:"15"},{label:"Duration",value:"~90 min"},{label:"Level",value:"Intermediate"}],tags:["Kafka","Spark","Airflow","Presto","dbt","Iceberg","Parquet","ClickHouse"],badge:{text:"Interactive",color:"#0891B2"},actions:[{label:"\u25b6 Start the course",url:"https://www.timloehr.me/de-fundamentals/",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/de-fundamentals",primary:!1}]}],d=r.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,p=r.Ay.div`
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
`,c=r.Ay.div`
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
  font-family: ${a.pQ.accent};
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 44px;
  transform: rotate(45deg);
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
`,g=r.Ay.h3`
  font-family: ${a.pQ.title};
  font-size: 1.35rem;
  font-weight: 800;
  color: white;
  text-align: center;
  margin: 0;
  z-index: 2;
  position: relative;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
  line-height: 1.3;
`,b=r.Ay.p`
  font-family: ${a.pQ.body};
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin: 0.5rem 0 0;
  z-index: 2;
  position: relative;
  font-style: italic;
`,x=r.Ay.div`
  flex: 1;
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`,f=r.Ay.p`
  font-family: ${a.pQ.body};
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
  margin: 0;
`,m=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
`,u=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,y=r.Ay.span`
  font-family: ${a.pQ.accent};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${a.lm.retroPrimary};
  letter-spacing: -0.02em;
`,v=r.Ay.span`
  font-family: ${a.pQ.mono||a.pQ.body};
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
  font-family: ${a.pQ.accent};
  font-size: 0.68rem;
  font-weight: 600;
  padding: 3px 8px;
  letter-spacing: 0.04em;
`,j=r.Ay.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 0.25rem;
`,A=r.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: 8px;
  font-family: ${a.pQ.accent};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>e.primary?"\n    background: linear-gradient(135deg, #0891B2, #06B6D4);\n    color: white;\n    border: none;\n    box-shadow: 0 4px 14px rgba(8, 145, 178, 0.45);\n    &:hover {\n      box-shadow: 0 6px 20px rgba(8, 145, 178, 0.65);\n      transform: translateY(-2px);\n    }\n  ":"\n    background: transparent;\n    color: rgba(255,255,255,0.65);\n    border: 1px solid rgba(255,255,255,0.18);\n    &:hover {\n      background: rgba(255,255,255,0.06);\n      color: rgba(255,255,255,0.9);\n      border-color: rgba(255,255,255,0.3);\n    }\n  "}
`,V=()=>(0,s.jsx)(o.A,{title:"Courses",id:"courses",children:(0,s.jsx)(d,{children:l.map(((e,t)=>(0,s.jsx)(n.pL,{threshold:.1,triggerOnce:!0,children:t=>{let{ref:i,inView:r}=t;return(0,s.jsxs)(p,{ref:i,className:r?"visible":"",children:[(0,s.jsxs)(c,{gradient:e.gradient,children:[(0,s.jsx)(h,{color:e.badge.color,children:e.badge.text}),(0,s.jsx)(g,{children:e.title}),(0,s.jsx)(b,{children:e.subtitle})]}),(0,s.jsxs)(x,{children:[(0,s.jsx)(f,{children:e.description}),(0,s.jsx)(m,{children:e.stats.map((e=>(0,s.jsxs)(u,{children:[(0,s.jsx)(y,{children:e.value}),(0,s.jsx)(v,{children:e.label})]},e.label)))}),(0,s.jsx)(w,{children:e.tags.map((e=>(0,s.jsx)(k,{children:e},e)))}),(0,s.jsx)(j,{children:e.actions.map((e=>(0,s.jsx)(A,{href:e.url,target:"_blank",rel:"noopener noreferrer",primary:e.primary,children:e.label},e.label)))})]})]})}},t)))})})},843:(e,t,i)=>{i.d(t,{pL:()=>h});var r=i(43),n=Object.defineProperty,o=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),a=new Map,s=new WeakMap,l=0,d=void 0;function p(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(e){const t=p(e);let i=a.get(t);if(!i){const r=new Map;let n;const o=new IntersectionObserver((t=>{t.forEach((t=>{var i;const o=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(i=r.get(t.target))||i.forEach((e=>{e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:o,elements:r},a.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),a.delete(n))}}var h=class extends r.Component{constructor(e){super(e),o(this,"node",null),o(this,"_unobserveCb",null),o(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),o(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:n,fallbackInView:o}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:n,root:o,rootMargin:a,onChange:s,skip:l,trackVisibility:d,delay:p,initialInView:c,fallbackInView:h,...g}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...g},e)}}}}]);
//# sourceMappingURL=202.d5c3177a.chunk.js.map