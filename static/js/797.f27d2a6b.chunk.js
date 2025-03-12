"use strict";(self.webpackChunkmavengence_github_io=self.webpackChunkmavengence_github_io||[]).push([[797],{6797:(t,e,i)=>{i.r(e),i.d(e,{default:()=>b});i(5043);var n=i(6867),a=i(7200),o=i(7805),r=i(3549),s=i(579);const l=(0,n.Ay)(a.P.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 12px 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  margin: 2rem 0;
  
  /* Gradient fade edges for smooth scroll */
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
  
  /* Data line accent */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      #3182CE,
      #4299E1,
      #EC4899
    );
    opacity: 0.8;
  }
`,c=n.Ay.div`
  display: inline-block;
  animation: marquee 30s linear infinite;
  padding-left: 100%;
  font-family: ${r.pQ.mono};
  color: #0F0F0F;
  font-weight: 500;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @keyframes marquee {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
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
      
      svg {
        color: #EC4899;
      }
    }
  }
  
  /* Data flow indicator - subtle animation */
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
      animation: dataPulse 2s infinite alternate;
    }
    
    @keyframes dataPulse {
      0% { transform: translateY(-50%) scale(1); opacity: 0.7; }
      100% { transform: translateY(-50%) scale(1.5); opacity: 0.3; }
    }
  }
`,p=[{text:"Machine Learning",blink:!0,icon:(0,s.jsx)(o.Wwx,{})},{text:"Data Engineering",blink:!1,icon:(0,s.jsx)(o.I1_,{})},{text:"Python \xb7 TensorFlow \xb7 PyTorch",blink:!1,icon:(0,s.jsx)(o.I1_,{})},{text:"Natural Language Processing",blink:!0,icon:(0,s.jsx)(o.Wwx,{})},{text:"Computer Vision",blink:!1,icon:(0,s.jsx)(o.Wwx,{})},{text:"SQL \xb7 NoSQL \xb7 Graph Databases",blink:!1,icon:(0,s.jsx)(o.I1_,{})},{text:"AWS \xb7 Azure \xb7 GCP",blink:!0,icon:(0,s.jsx)(o.I1_,{})},{text:"ETL Pipeline Design",blink:!1,icon:(0,s.jsx)(o.Wwx,{})},{text:"Distributed Computing",blink:!1,icon:(0,s.jsx)(o.I1_,{})},{text:"A/B Testing",blink:!0,icon:(0,s.jsx)(o.Wwx,{})}],b=t=>{let{items:e=p,className:i}=t;return(0,s.jsx)(l,{className:i,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:(0,s.jsxs)(c,{children:[e.map(((t,e)=>(0,s.jsxs)("span",{className:t.blink?"blink":"",children:[t.icon," ",t.text]},e))),e.map(((t,e)=>(0,s.jsxs)("span",{className:t.blink?"blink":"",children:[t.icon," ",t.text]},`repeat-${e}`)))]})})}}}]);
//# sourceMappingURL=797.f27d2a6b.chunk.js.map