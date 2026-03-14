"use strict";(self.webpackChunkmavengence_github_io=self.webpackChunkmavengence_github_io||[]).push([[720],{253:(e,t,i)=>{i.d(t,{A:()=>g});i(43);var r=i(867),n=i(843),a=i(549),o=i(579);const s=r.Ay.section`
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
`,g=e=>{let{title:t,children:i,background:r,titleColor:a,gridColor:g,gridOpacity:h,id:m,className:b,...u}=e;return(0,o.jsxs)(s,{id:m,className:b||"",...u,children:[(0,o.jsx)(c,{}),(0,o.jsx)(l,{children:(0,o.jsx)(n.pL,{threshold:.05,triggerOnce:!0,rootMargin:"200px 0px",children:e=>{let{ref:r,inView:n}=e;return(0,o.jsxs)("div",{ref:r,children:[t&&(0,o.jsxs)(d,{color:a,"data-text":t,className:"section-title"+(n?" visible":""),children:[(0,o.jsx)("span",{"data-text":t,children:t}),t]}),(0,o.jsx)(p,{className:n?"visible":"",children:i})]})}})})]})}},720:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});i(43);var r=i(867),n=i(843),a=i(253),o=i(549),s=i(579);const l=r.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`,d=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,p=r.AH`
  &:after { background: rgba(0, 0, 0, 0.35); }
  transform: scale(1.02);
`,c=r.AH`
  transform: scale(1.02);
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7), 0px 4px 10px rgba(0, 0, 0, 0.5);
`,g=r.AH`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
`,h=r.AH`
  background: rgba(255, 255, 255, 0.15);
`,m=r.Ay.div`
  position: relative;
  background: rgba(22, 22, 26, 0.8);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 480px;
  max-height: 550px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  /* CSS transition for InView reveal + hover */
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.4s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

    &:after {
      opacity: 0.5;
    }

    .project-image { ${p} }
    .project-title { ${c} }
    .project-banner { ${g} }
    .project-tag { ${h} }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    min-height: 430px;
  }
`,b=r.Ay.div`
  position: absolute;
  top: ${e=>e.isLong?"25px":"20px"};
  right: ${e=>e.isLong?"-45px":"-35px"};
  background: ${e=>e.color||"#FF4081"};
  color: white;
  font-size: ${e=>e.isLong?"0.65rem":"0.7rem"};
  font-weight: 600;
  padding: 5px ${e=>e.isLong?"50px":"40px"};
  transform: rotate(45deg);
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  font-family: ${o.pQ.accent};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  width: ${e=>e.isLong?"180px":"auto"};
  text-align: center;
  transition: box-shadow 0.4s ease;

  ${m}:hover & {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  }
`,u=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  min-height: 200px;
  background: ${e=>e.gradient||"linear-gradient(135deg, #3182CE, #63B3ED)"};
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: center;
  transition: transform 0.5s ease;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
    transition: background 0.5s ease;
  }
`,x=r.Ay.h3`
  color: white;
  font-family: ${o.pQ.title};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  z-index: 2;
  width: 100%;
  text-align: center;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.35);
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  line-height: 1.4;
  transition: transform 0.4s ease, text-shadow 0.4s ease;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,f=r.Ay.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,w=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 1rem;
  min-height: 30px;
  overflow-y: auto;
  max-height: 75px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;

  &::-webkit-scrollbar { width: 4px; height: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.1); border-radius: 10px; }
`,y=r.Ay.span`
  font-size: 0.6rem;
  padding: 0.2rem 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: ${o.pQ.accent};
  font-weight: 500;
  letter-spacing: 0.3px;
  border-radius: 10px;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-bottom: 4px;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,v=r.Ay.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: ${o.pQ.primary};
  font-size: 0.9rem;
  flex: 1;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  min-height: 80px;
  max-height: 120px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
  padding-right: 5px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.1); border-radius: 10px; }

  br { line-height: 1.6; }

  @media (max-width: 768px) {
    min-height: 60px;
    max-height: 100px;
    font-size: 0.85rem;
  }
`,k=r.Ay.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,A=r.Ay.a`
  background: ${e=>e.primary?"rgba(59, 130, 246, 0.9)":"rgba(255, 255, 255, 0.1)"};
  color: white;
  font-family: ${o.pQ.accent};
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
  font-weight: 500;
  text-decoration: none;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    background: ${e=>e.primary?"rgba(59, 130, 246, 1)":"rgba(255, 255, 255, 0.15)"};
  }

  &:active { transform: translateY(0); }
`,C="linear-gradient(135deg, #7C3AED, #8B5CF6)",j={row1:[{title:"AI trend analysis in German<br>business and politics:<br>a web mining approach",description:"This study analyzes AI trends in German business and politics (1998\u20132020) using web mining and ML.<br><br>It detects AI evolution, faster adoption in business, and increasing political discourse, leveraging 1.07M documents.",gradient:"linear-gradient(135deg, #3182CE, #4299E1)",technologies:["Artificial intelligence","Web mining","Trend detection","Topic clustering","Business","Politics"],actions:[{label:"Paper",url:"https://link.springer.com/article/10.1007/s41060-023-00483-9",primary:!0}],banner:{text:"Paper",color:"#3182CE"}},{title:"AI trend analysis on healthcare podcasts using topic modeling and sentiment <br> analysis: a data-driven approach",description:"This study analyzes AI trends in healthcare podcasts (2015\u20132021) using web mining and ML. It detects AI evolution, identifies 14 topic clusters, and examines sentiment and trend dynamics.",gradient:"linear-gradient(135deg, #4F46E5, #6366F1)",technologies:["Artificial intelligence","Web mining","Trend detection","Topic clustering","PyTorch","Python","Sentiment Analysis"],actions:[{label:"Paper",url:"https://link.springer.com/article/10.1007/s12065-023-00878-4",primary:!0}],banner:{text:"Paper",color:"#4F46E5"}}],row2:[{title:"Identifying a Trial <br> Population for Clinical Studies <br> on Diabetes Drug Testing with Neural Networks",description:"This project models an end-to-end AI workflow for clinical use, predicting hospitalization time for diabetes patients using neural networks and Explainable AI, aiding doctors in patient selection.",gradient:"linear-gradient(135deg, #EC4899, #F472B6)",technologies:["Machine Learning","EDA","Data Analysis"],actions:[{label:"Paper",url:"https://dl.gi.de/server/api/core/bitstreams/833fe83a-27fa-48fa-8f79-f9cf4895f1ca/content",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/Machine_Learning_in_the_Industry_4.0_Seminar_SS2020.FAU",primary:!1}],banner:{text:"Best Paper Award",color:"#EC4899",isLong:!0}},{title:"Style Classification in Posters",description:"Classifying artistic styles in museum posters using LDA topic modeling, BERT embeddings, and neural network architectures for visual feature extraction and clustering.",gradient:"linear-gradient(135deg, #10B981, #34D399)",technologies:["LDA","Neural Networks","PyTorch","BERT","Museum","Clustering"],actions:[{label:"Report",url:"https://drive.google.com/file/d/1llobxdJ98EvebOEH6b372VrMSvc4p0mg/view?usp=sharing",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/Style-Classification-in-Posters",primary:!1}]},{title:"Representation Learning for Gait Analysis in Parkinson Patients",description:"This project evaluates deep learning architectures for Parkinson's classification using raw sensor data. A ResNet autoencoder achieved 87% accuracy, as a decision support tool for doctors.",gradient:"linear-gradient(135deg, #F59E0B, #FBBF24)",technologies:["Computer Vision","PyTorch","Timeseries"],actions:[{label:"Report",url:"https://drive.google.com/file/d/1CwGOKzVPtgz1A5zVJXehEHIk7snWR_cI/view?usp=sharing",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/Representation-Learning-for-Gait-Analysis-in-Parkinson-s-Patients",primary:!1}]}],row3:[{title:"Masterthesis: <br> AI Trend Detection in Healthcare by applying Topic Clustering and Sentiment Analysis using Podcast Data",description:"This thesis explores AI trend detection in healthcare podcasts (2015\u20132021) using speech-to-text, topic clustering, and sentiment analysis. It identifies 14 trending topics and develops a tool for filtering relevant discussions.",gradient:"linear-gradient(135deg, #F97316, #FB923C)",technologies:["Artificial intelligence","NLP","BERT","Web mining","Trend detection","Topic clustering","PyTorch","Python","Sentiment Analysis"],actions:[{label:"Thesis",url:"https://drive.google.com/file/d/13fBq7cbFENh3P6NSFUtC5ROXlaYpaHok/view?usp=sharing",primary:!0},{label:"Presentation",url:"https://drive.google.com/file/d/1CEw7Icy97BMWJfAVU_q-VCswe2eEaCrP/view?usp=sharing",primary:!1}]},{title:"Python Package: <br> Gap Statistics",description:"My GapStatistics package provides a Python implementation of the Gap Statistics method for determining the optimal number of clusters in a dataset using K-means clustering derived from Tibshirani et al.",gradient:C,technologies:["Elbow Method","k-Means","Clustering"],actions:[{label:"Github",url:"https://github.com/Mavengence/GapStatistics",primary:!0},{label:"PyPi",url:"https://pypi.org/project/gapstatistics/",primary:!1}],banner:{text:"Package",color:C,isLong:!0}}]},I=(()=>{let e=[],t=1;return Object.entries(j).forEach((i=>{let[r,n]=i;const a=parseInt(r.replace("row",""));n.forEach(((i,r)=>{e.push({id:t++,row:a,positionInRow:r,projectsInRow:n.length,...i})}))})),e})(),P=()=>{const e=e=>{if("undefined"===typeof window)return{gridColumn:"1 / span 4",gridRow:"auto"};if(window.innerWidth<=768)return{gridColumn:"1 / span 1",gridRow:"auto",marginBottom:"2rem"};if(window.innerWidth<=992)return{gridColumn:e.positionInRow%2===0?"1 / span 3":"4 / span 3",gridRow:`${Math.floor(e.positionInRow/2)+e.row} / span 1`};const{row:t,positionInRow:i,projectsInRow:r}=e;return 1===r?{gridColumn:"3 / span 8",gridRow:`${t} / span 1`}:2===r?{gridColumn:0===i?"2 / span 5":"7 / span 5",gridRow:`${t} / span 1`}:{gridColumn:4*i+1+" / span 4",gridRow:`${t} / span 1`}};return(0,s.jsx)(a.A,{id:"projects",title:"PROJECTS",titleColor:"#3182CE",gridColor:"#3182CE",gridOpacity:"0.05",className:"projects-section",children:(0,s.jsx)(l,{children:(0,s.jsx)(d,{children:I.sort(((e,t)=>e.row-t.row||e.positionInRow-t.positionInRow)).map(((t,i)=>(0,s.jsx)(n.pL,{threshold:.1,triggerOnce:!0,rootMargin:"150px 0px",children:r=>{let{ref:n,inView:a}=r;return(0,s.jsxs)(m,{ref:n,className:a?"visible":"",style:{...e(t),transitionDelay:.04*i+"s"},children:[t.banner&&(0,s.jsx)(b,{color:t.banner.color,isLong:t.banner.isLong,className:"project-banner",children:t.banner.text}),(0,s.jsx)(u,{gradient:t.gradient,className:"project-image",children:(0,s.jsx)(x,{dangerouslySetInnerHTML:{__html:t.title},className:"project-title"})}),(0,s.jsxs)(f,{children:[(0,s.jsx)(w,{children:t.technologies.map((e=>(0,s.jsx)(y,{className:"project-tag",children:e},e)))}),(0,s.jsx)(v,{dangerouslySetInnerHTML:{__html:t.description}}),(0,s.jsx)(k,{children:t.actions.map((e=>(0,s.jsx)(A,{primary:e.primary,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":`${e.label} \u2014 ${t.title.replace(/<br\s*\/?>/g," ")}`,children:e.label},e.label)))})]})]})}},t.id)))})})})}},843:(e,t,i)=>{i.d(t,{pL:()=>g});var r=i(43),n=Object.defineProperty,a=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),o=new Map,s=new WeakMap,l=0,d=void 0;function p(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:a,elements:s}=function(e){const t=p(e);let i=o.get(t);if(!i){const r=new Map;let n;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=r.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:r},o.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(n))}}var g=class extends r.Component{constructor(e){super(e),a(this,"node",null),a(this,"_unobserveCb",null),a(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),a(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:n,fallbackInView:a}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:n},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:n,root:a,rootMargin:o,onChange:s,skip:l,trackVisibility:d,delay:p,initialInView:c,fallbackInView:g,...h}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...h},e)}}}}]);
//# sourceMappingURL=720.db70e6a1.chunk.js.map