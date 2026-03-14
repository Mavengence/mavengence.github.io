"use strict";(self.webpackChunkmavengence_github_io=self.webpackChunkmavengence_github_io||[]).push([[670,797],{253:(e,t,i)=>{i.d(t,{A:()=>g});i(43);var o=i(867),n=i(843),a=i(549),r=i(579);const s=o.Ay.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  contain: layout style paint;
`,l=o.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`,p=o.Ay.h2`
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
`,d=o.Ay.div`
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
`,c=o.Ay.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
`,g=e=>{let{title:t,children:i,background:o,titleColor:a,gridColor:g,gridOpacity:h,id:b,className:x,...m}=e;return(0,r.jsxs)(s,{id:b,className:x||"",...m,children:[(0,r.jsx)(c,{}),(0,r.jsx)(l,{children:(0,r.jsx)(n.pL,{threshold:.05,triggerOnce:!0,rootMargin:"200px 0px",children:e=>{let{ref:o,inView:n}=e;return(0,r.jsxs)("div",{ref:o,children:[t&&(0,r.jsxs)(p,{color:a,"data-text":t,className:"section-title"+(n?" visible":""),children:[(0,r.jsx)("span",{"data-text":t,children:t}),t]}),(0,r.jsx)(d,{className:n?"visible":"",children:i})]})}})})]})}},670:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});i(43);var o=i(867),n=i(843),a=i(253),r=i(797),s=i(549),l=i(579);const p=e=>{e=e.replace("#","");return`${parseInt(e.substring(0,2),16)}, ${parseInt(e.substring(2,4),16)}, ${parseInt(e.substring(4,6),16)}`},d=o.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 60px 0;
  overflow: visible;
  z-index: 10;
`,c=o.Ay.div`
  position: absolute;
  left: -27px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: -6px;
    left: -4px;
    width: 10px;
    height: 10px;
    background: #3182CE;
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3px;
    width: 8px;
    height: 8px;
    background: #3182CE;
    border-radius: 50%;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    left: -47px;
  }

  @media (max-width: 430px) {
    display: none;
  }
`,g=o.Ay.div`
  position: absolute;
  left: -15px;
  background: rgba(49, 130, 206, 0.9);
  color: white;
  padding: 6px 14px;
  border-radius: 16px;
  font-family: ${s.pQ.mono};
  font-weight: 500;
  font-size: 14px;
  top: ${e=>e.top||"0"};
  z-index: 2;
  transform: translateY(-50%);
  letter-spacing: 0.5px;

  /* CSS transition for InView reveal */
  opacity: 0;
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  transform: translateY(-50%) translateX(-20px);

  &.visible {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }

  &:after {
    content: '';
    position: absolute;
    right: auto;
    left: -12px;
    top: 50%;
    width: 12px;
    height: 1px;
    background-color: rgba(49, 130, 206, 0.7);
    transform: translateY(-50%);
  }

  &:hover {
    background: rgba(49, 130, 206, 1);
  }

  .mobile-year { display: none; }

  @media (max-width: 768px) {
    left: -35px;
    font-size: 12px;
    padding: 4px 10px;
    z-index: 10;
    background: rgba(49, 130, 206, 1);
    box-shadow: 0 0 10px rgba(49, 130, 206, 0.5);

    .desktop-year { display: none; }
    .mobile-year { display: inline; }

    &:after {
      width: 10px;
      right: auto;
      left: -15px;
    }
  }

  @media (max-width: 430px) {
    display: none;
  }
`,h=o.Ay.div`
  position: relative;
  background: ${e=>`linear-gradient(120deg, rgba(22, 22, 26, 0.9) 0%, rgba(${e.bgColorRGB||"22, 22, 26"}, 0.06) 100%)`};
  border-radius: 16px;
  padding: 28px;
  margin: 0 0 70px 70px;
  width: calc(100% - 100px);
  min-height: 160px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid ${e=>`rgba(${e.bgColorRGB||"255, 255, 255"}, 0.1)`};
  border-left: 3px solid ${e=>e.accentColor||"#3182CE"};
  z-index: 2;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 28px;
  overflow: hidden;

  /* CSS transition for InView reveal + hover */
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.4s ease, border-color 0.3s ease;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .company-pattern {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e=>e.bgPattern||"none"};
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%);
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.15);

    .company-pattern { opacity: 0.9; }
    .timeline-dot {
      transform: translateY(-50%) scale(1.3);
      box-shadow: 0 0 12px ${e=>e.accentColor||"#3182CE"};
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: -65px;
    top: 50%;
    width: 65px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%);
  }

  &:first-of-type { margin-top: 50px; }

  .timeline-dot {
    position: absolute;
    left: -70px;
    top: 50%;
    width: 10px;
    height: 10px;
    background: ${e=>e.accentColor||"#3182CE"};
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  @media (max-width: 768px) {
    margin-left: 65px;
    width: calc(100% - 80px);

    &:before { left: -55px; width: 55px; }
    .timeline-dot { left: -60px; }
  }

  @media (max-width: 430px) {
    margin-left: 15px;
    width: calc(100% - 30px);
    &:before, .timeline-dot { display: none; }
  }
`,b=o.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  .company-logo {
    width: 70px;
    height: 70px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);

    img { width: 85%; height: 85%; object-fit: contain; }
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
    }
  }

  .company-name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: white;
    font-family: ${s.pQ.title};
    letter-spacing: -0.5px;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: ${e=>e.logoBackground||"#3182CE"};
    }
  }

  .job-title {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 18px;
    font-weight: 500;
    font-family: ${s.pQ.accent};
    position: relative;
    display: inline-block;
    padding: 5px 14px;
    background: ${e=>`rgba(${p(e.logoBackground)}, 0.12)`||"rgba(49, 130, 206, 0.1)"};
    border-radius: 6px;
    letter-spacing: 0.3px;
    border: 1px solid ${e=>`rgba(${p(e.logoBackground)}, 0.2)`||"rgba(49, 130, 206, 0.2)"};
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: ${e=>`rgba(${p(e.logoBackground)}, 0.18)`||"rgba(49, 130, 206, 0.15)"};
      transform: translateY(-2px);
    }
  }

  .date-range {
    font-family: ${s.pQ.mono};
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 12px;
  }
`,x=o.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  .job-description {
    font-family: ${s.pQ.primary};
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 24px 0;

    ul { list-style-type: none; padding: 0; margin: 0 0 10px 0; }
    ul li { padding-left: 15px; position: relative; margin-bottom: 6px; }
    ul li:before { content: "\u2022"; position: absolute; left: 0; top: 0; }
  }
`,m=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`,u=o.Ay.span`
  font-size: 0.7rem;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  font-family: ${s.pQ.accent};
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 14px;
  transition: background 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.06);
  user-select: none;
`,f=[{id:1,year:2025,company:"Meta",logo:"/images/logos/meta.png",logoBackground:"#1877F2",bgColorRGB:p("#1877F2"),bgPattern:"radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)",title:"Data Engineer",dateRange:"February 2025 - Present",descriptionPoints:["Enterprise Infrastructure and Security Analytics"],technologies:["Python","Presto","Hive","SQL"]},{id:2,year:2024,company:"Red Bull",logo:"/images/logos/redbull.svg",logoBackground:"#D52B1E",bgColorRGB:p("#D52B1E"),bgPattern:"linear-gradient(135deg, rgba(213, 43, 30, 0.07) 0%, transparent 70%)",title:"Data Scientist",dateRange:"July 2024 - January 2025",descriptionPoints:["Applied data science to build full stack MLOps data products to support all parts of Red Bull's supply chain processes.","Led the Databricks integration by designing robust workflows, managing asset bundles, and setting up CI/CD pipelines.","Developed an R-based tool to automate data sourcing, using YAML configurations and dependency injection for scalable analytics."],technologies:["Python","R","Databricks","Snowflake","R Studio","SQL","SAP S4/HANA"]},{id:3,year:2022,company:"Apple",logo:"/images/logos/apple.svg",logoBackground:"#000000",bgColorRGB:p("#555555"),bgPattern:"repeating-linear-gradient(to right, rgba(85, 85, 85, 0.02), rgba(85, 85, 85, 0.02) 1px, transparent 1px, transparent 30px)",title:"Data Scientist",dateRange:"October 2022 - May 2024",descriptionPoints:["Collaborated with engineers and business stakeholders to build full stack, MLOps data products for Apple's supply chain business.","Developed and deployed anomaly detection, time series forecasting, and NLP tools that automated repetitive tasks, saving over 100 hours per week across departments and reducing manual workload by 60%.","Contributed to a Python package project that integrated core AI tools, reducing project onboarding time by 80%, from 3-4 weeks to just 2-3 days, accelerating anomaly detection deployment across teams."],technologies:["Python","SQL","Snowflake","DataRobot","K8S","Docker","Git"]},{id:4,year:2021,company:"Amazon",logo:"/images/logos/amazon.svg",logoBackground:"#FF9900",bgColorRGB:p("#FF9900"),bgPattern:"radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)",title:"BI Engineer",dateRange:"February 2021 - July 2021",descriptionPoints:["Optimized SQL scripts by reducing length over 50% and built a multiple regression model to predict upcoming number of sales.","Optimized the data retrieval SQL scripts from the Redshift cluster.","Translated long SQL prediction scripts into data pipelines with Python."],technologies:["Python","SQL","Pandas","Redshift","AWS"]}],y=[{top:"17%",year:"2025",short:"25",delay:0},{top:"36%",year:"2024",short:"24",delay:.06},{top:"60%",year:"2022",short:"22",delay:.12},{top:"85%",year:"2021",short:"21",delay:.18}],v=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.A,{id:"experience",title:"WORK",titleColor:"#3182CE",gridColor:"#3182CE",gridOpacity:"0.05",className:"experience-section",children:(0,l.jsx)(n.pL,{threshold:.1,triggerOnce:!0,rootMargin:"150px 0px",children:e=>{let{ref:t,inView:i}=e;return(0,l.jsxs)(d,{ref:t,children:[(0,l.jsx)(c,{}),y.map((e=>(0,l.jsxs)(g,{top:e.top,className:i?"visible":"",style:{transitionDelay:`${e.delay}s`},children:[(0,l.jsx)("span",{className:"desktop-year",children:e.year}),(0,l.jsx)("span",{className:"mobile-year",children:e.short})]},e.year))),f.map(((e,t)=>(0,l.jsxs)(h,{accentColor:e.logoBackground,bgColorRGB:e.bgColorRGB,bgPattern:e.bgPattern,className:i?"visible":"",style:{transitionDelay:.08*t+"s"},children:[(0,l.jsx)("div",{className:"company-pattern"}),(0,l.jsx)("div",{className:"timeline-dot"}),(0,l.jsxs)(b,{logoBackground:e.logoBackground,children:[(0,l.jsx)("div",{className:"company-logo",children:(0,l.jsx)("img",{src:e.logo,alt:`${e.company} logo`,loading:"lazy",decoding:"async",style:"Apple"===e.company?{width:"50%",height:"50%"}:{}})}),(0,l.jsx)("h3",{className:"company-name",children:e.company}),(0,l.jsx)("p",{className:"job-title",children:e.title}),(0,l.jsx)("div",{className:"date-range",children:e.dateRange})]}),(0,l.jsxs)(x,{children:[(0,l.jsx)("div",{className:"job-description",children:e.descriptionPoints&&e.descriptionPoints.length>0?(0,l.jsx)("ul",{children:e.descriptionPoints.map((e=>(0,l.jsx)("li",{children:e},e.slice(0,40))))}):(0,l.jsx)("p",{children:e.description||"No description available"})}),(0,l.jsx)(m,{children:e.technologies.map((e=>(0,l.jsx)(u,{children:e},e)))})]})]},e.id)))]})}})}),(0,l.jsx)(r.default,{})]})},797:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});i(43);var o=i(867),n=i(805),a=i(549),r=i(579);const s=o.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,l=o.Ay.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.92);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 12px 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  margin: 2rem 0;
  animation: ${s} 0.5s ease-out both;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 10px 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 5%,
        rgba(255, 255, 255, 0) 95%,
        rgba(255, 255, 255, 1) 100%);
    z-index: 2;
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #3182CE, #4299E1, #EC4899);
    opacity: 0.8;
  }
`,p=o.Ay.div`
  animation: marquee 45s linear infinite;
  padding-left: 100%;
  font-family: ${a.pQ.mono};
  color: #0F0F0F;
  font-weight: 500;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  will-change: transform;

  @keyframes marquee {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-100%, 0, 0); }
  }

  span {
    margin: 0 20px;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;

    svg {
      margin-right: 8px;
      color: #3182CE;
    }

    &:hover {
      color: #EC4899;
      svg { color: #EC4899; }
    }
  }

  .blink {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: #EC4899;
      border-radius: 50%;
      opacity: 0.7;
    }
  }
`,d=[{text:"Machine Learning",blink:!0,icon:(0,r.jsx)(n.cfR,{})},{text:"Data Engineering",blink:!1,icon:(0,r.jsx)(n.EYW,{})},{text:"Data Science",blink:!1,icon:(0,r.jsx)(n.I1_,{})},{text:"Python \xb7 TensorFlow \xb7 PyTorch",blink:!1,icon:(0,r.jsx)(n.m4U,{})},{text:"Natural Language Processing",blink:!0,icon:(0,r.jsx)(n.Wwx,{})},{text:"Computer Vision",blink:!1,icon:(0,r.jsx)(n.Wwx,{})},{text:"SQL \xb7 NoSQL \xb7 Graph Databases",blink:!1,icon:(0,r.jsx)(n.Wwx,{})},{text:"AWS \xb7 Azure \xb7 GCP",blink:!0,icon:(0,r.jsx)(n.BMQ,{})},{text:"ETL Pipeline Design",blink:!1,icon:(0,r.jsx)(n.Wwx,{})},{text:"Distributed Computing",blink:!1,icon:(0,r.jsx)(n.V0M,{})},{text:"A/B Testing",blink:!0,icon:(0,r.jsx)(n.Wwx,{})}],c=e=>{let{items:t=d,className:i}=e;return(0,r.jsx)(l,{className:i,children:(0,r.jsxs)(p,{children:[t.map((e=>(0,r.jsxs)("span",{className:e.blink?"blink":"",children:[e.icon," ",e.text]},e.text))),t.map((e=>(0,r.jsxs)("span",{className:e.blink?"blink":"",children:[e.icon," ",e.text]},`dup-${e.text}`)))]})})}},843:(e,t,i)=>{i.d(t,{pL:()=>g});var o=i(43),n=Object.defineProperty,a=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),r=new Map,s=new WeakMap,l=0,p=void 0;function d(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p;if("undefined"===typeof window.IntersectionObserver&&void 0!==o){const n=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:a,elements:s}=function(e){const t=d(e);let i=r.get(t);if(!i){const o=new Map;let n;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=o.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:o},r.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),r.delete(n))}}var g=class extends o.Component{constructor(e){super(e),a(this,"node",null),a(this,"_unobserveCb",null),a(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),a(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:o,delay:n,fallbackInView:a}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:o,delay:n},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:n,root:a,rootMargin:r,onChange:s,skip:l,trackVisibility:p,delay:d,initialInView:c,fallbackInView:g,...h}=this.props;return o.createElement(t||"div",{ref:this.handleNode,...h},e)}}}}]);
//# sourceMappingURL=670.3867f8fb.chunk.js.map