"use strict";(self.webpackChunkskyfour_ch=self.webpackChunkskyfour_ch||[]).push([[628],{8250:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(7294),r=n(2788),i=n(2553),o=n(6068),l=n(5448),s=n(3324),c=n(4578),d=n(6697),u=n.n(d),m=n(3852);let p=function(e){function t(t){var n;return(n=e.call(this,t)||this).sendApplication=async e=>{n.setState({isSending:!0});return await fetch("https://europe-west1-iovi-205808.cloudfunctions.net/skyfouremail",{method:"POST",body:e})},n.handleSubmit=e=>{e.preventDefault();let t=!1;const{name:a,message:r,email:i,empty:o}=n.state;a||(o.name=!0,n.setState({status:"required"}),t=!0),i||(o.email=!0,n.setState({status:"required"}),t=!0),r||(o.message=!0,n.setState({status:"required"}),t=!0);const l=/^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/.test(i);if(n.setState({isValidEmail:l}),l&&!t){const e=new FormData;e.append("name",a),e.append("email",i),e.append("message",r),n.sendApplication(e).then((e=>{200===e.status&&(n.setState({status:"success",isSending:!1}),"undefined"!=typeof window&&window.gtag("event","generate_lead",{currency:"CHF",value:80}))})).catch((e=>{console.error(e),n.setState({status:"error",isSending:!1})}))}},n.handleInputChange=e=>{const{target:t}=e;console.log(t.id),n.setState((e=>({empty:{...e.empty,[t.id]:!1},[t.id]:t.value})))},n.state={empty:{},email:"",name:"",isValidEmail:!0,isSending:!1},n}return(0,c.Z)(t,e),t.prototype.render=function(){const{className:e,buttonClassName:t}=this.props,{status:n,empty:r,email:i,isValidEmail:o,isSending:l}=this.state;return a.createElement(f,{onSubmit:this.handleSubmit,className:e,enctype:"multipart/form-data"},a.createElement(h,{required:!0},a.createElement("label",{htmlFor:"name"},"Name"),a.createElement(g,{id:"name",key:"name",onChange:this.handleInputChange,defaultValue:"","aria-label":"name input",type:"text",empty:r.name})),a.createElement(h,{required:!0},a.createElement("label",{htmlFor:"email"},"Email",o?null:a.createElement(b,null,"Enter valid email")),a.createElement(g,{id:"email",key:"email",onChange:this.handleInputChange,defaultValue:i,"aria-label":"email input",type:"text",empty:r.email||!o})),a.createElement(h,{required:!0},a.createElement("label",{htmlFor:"message"},"Nachricht "),a.createElement(y,{rows:"6",id:"message",form:"usrform",onChange:this.handleInputChange,placeholder:"Datum, Ort, gewünschte Spieldauer und spezielle Musikwünsche helfen uns ihnen eine individuelle Offerte zu erstellen.",empty:r.message})),a.createElement(h,null,a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},a.createElement(x,{id:"submit",value:"Offerte Anfragen",type:"submit",title:"Offerte Anfragen",color:m.Z.colors.blue,className:t,"aria-label":"submit",disabled:l}),a.createElement(u(),{color:m.Z.colors.blue,loading:l,size:8}))),a.createElement(v,null,"sending"===n&&a.createElement("p",null,"Wird gesendet..."),"required"===n&&a.createElement("p",null,"Bitte fülle Sie alle benötigten Felder aus."),"success"===n&&a.createElement("p",null,"Vielen Dank für Ihre Anfrage, wir melden uns umgehend bei Ihnen.")))},t}(a.Component);const f=r.default.form.withConfig({displayName:"contactform__Form",componentId:"sc-q9vfn0-0"})(["position:relative;margin:0;border-radius:8px;padding:","px;@media only screen and (max-width:","px){padding:","px;}"],m.Z.space.lg,m.Z.dim.mobilebreakpoint,m.Z.space.md),h=r.default.div.withConfig({displayName:"contactform__Field",componentId:"sc-q9vfn0-1"})(["padding:8px 0;margin:0;overflow:visible;label{&::before{content:",";width:6px;height:6px;background:",";display:inline-block;margin:0 10px 3px 0;border-radius:50%;}}"],(e=>e.required?'""':null),m.Z.colors.blue),g=r.default.input.withConfig({displayName:"contactform__Input",componentId:"sc-q9vfn0-2"})(["border-radius:4px;background-color:",";border:",";margin-top:8px;padding:5px 20px 8px 13px;transition:background-color 0.2s ease-in,box-shadow 0.2s ease-in;box-sizing:border-box;width:100%;&:focus{background-color:",";box-shadow:0 0 0 2px ",";}"],m.Z.colors.bgSecondary,(e=>e.empty?"1px solid "+m.Z.colors.red:0),m.Z.colors.bgPrimary,m.Z.colors.bgSecondary),b=r.default.span.withConfig({displayName:"contactform__ErrorLabel",componentId:"sc-q9vfn0-3"})(["font-size:0.5em;color:",";padding:0 0 0 8px;"],m.Z.colors.red),y=r.default.textarea.withConfig({displayName:"contactform__TextArea",componentId:"sc-q9vfn0-4"})(["border-radius:4px;background-color:",";border:0;margin-top:8px;padding:5px 20px 8px 13px;transition:background-color 0.2s ease-in,box-shadow 0.2s ease-in;box-sizing:border-box;width:100%;&:focus{background-color:",";box-shadow:0 0 0 2px ",";}"],m.Z.colors.bgSecondary,m.Z.colors.bgPrimary,m.Z.colors.bgSecondary),v=r.default.div.withConfig({displayName:"contactform__AlertMessage",componentId:"sc-q9vfn0-5"})(["width:100%;p{background-color:transparent;color:black;font-size:14px;margin:0 auto;padding:2px 0 9 1em;}"]),x=r.default.input.withConfig({displayName:"contactform__StyledSubmit",componentId:"sc-q9vfn0-6"})(["font-size:1rem;font-weight:bold;cursor:pointer;display:inline-block;color:",";background-color:",";border-radius:8px;border:none;align-self:center;vertical-align:middle;margin:1em 1em 1em 0;white-space:nowrap;text-align:center;padding:4px 16px;text-decoration:none;transition:box-shadow 0.2s linear;&:hover{box-shadow:0 10px 32px rgba(0,0,0,0.1);}&:disabled{opacity:0.6;cursor:not-allowed;box-shadow:none;}"],(e=>"white"===e.color||"#FFFFFF"===e.color?m.Z.colors.primary:"white"),(e=>e.color)),w=(0,r.keyframes)(["from{opacity:0;transform:scale(1.1);}to{opacity:1;transform:scale(1);}"]),k=(0,r.keyframes)(["from{transform:translateY(50px);opacity:0;}to{transform:translateY(0px);opacity:1;}"]),E=r.default.div.withConfig({displayName:"kontakt__StageTitle",componentId:"sc-c7jhcg-0"})(["display:flex;flex-direction:column;justify-content:center;animation:"," 0.8s ease;animation-delay:0.2s;opacity:0;animation-fill-mode:forwards;h1{}p{line-height:2;}h3{font-weight:lighter;margin-bottom:8px;}"],k),_=r.default.div.withConfig({displayName:"kontakt__StyledBackgroundImage",componentId:"sc-c7jhcg-1"})(["padding:8em 0;overflow:hidden;animation:"," 0.8s ease;animation-delay:0;opacity:0;animation-fill-mode:forwards;"],w);var S=()=>a.createElement(l.Z,null,a.createElement(s.Z,{title:"Hochzeitsband und Partyband Skyfour - Konkakt und unverbindliche Offerte",description:"Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband. Kontaktieren Sie uns um die richtige Musik für Ihren Event zu finden!"}),a.createElement(_,null,a.createElement(E,null,a.createElement(i.W2,null,a.createElement(i.X2,null,a.createElement(i.JX,{md:6},a.createElement(i.W2,null,a.createElement("h2",null,"Kontakt"),a.createElement("p",null,"Kontaktieren Sie uns um die richtige Musik für Ihren Event zu finden!"),a.createElement("p",null,"Teilen Sie uns Anlass, Datum, Ort, gewünschte Spieldauer und spezielle Musikwünsche mit. Wir melden uns umgehend mit einer passenden Offerte bei Ihnen."),a.createElement("p",null,"Sie können sich auch per Email an"," ",a.createElement(o.Z,{href:"mailto:kontakt@skyfour.ch"},"kontakt@skyfour.ch")," ","wenden oder telefonisch unter"," ",a.createElement(o.Z,{href:"tel:+41795388936"},"079 538 89 36")," ","."))),a.createElement(i.JX,{md:6},a.createElement(p,null)))))))},6697:function(e,t,n){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},l=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(7294)),c=n(10),d=n(6657),u=(0,c.createAnimation)("SyncLoader","33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}","sync");t.default=function(e){var t=e.loading,n=void 0===t||t,r=e.color,i=void 0===r?"#000000":r,o=e.speedMultiplier,c=void 0===o?1:o,m=e.cssOverride,p=void 0===m?{}:m,f=e.size,h=void 0===f?15:f,g=e.margin,b=void 0===g?2:g,y=l(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),v=a({display:"inherit"},p),x=function(e){return{backgroundColor:i,width:(0,d.cssValue)(h),height:(0,d.cssValue)(h),margin:(0,d.cssValue)(b),borderRadius:"100%",display:"inline-block",animation:"".concat(u," ").concat(.6/c,"s ").concat(.07*e,"s infinite ease-in-out"),animationFillMode:"both"}};return n?s.createElement("span",a({style:v},y),s.createElement("span",{style:x(1)}),s.createElement("span",{style:x(2)}),s.createElement("span",{style:x(3)})):null}},10:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var i=r.sheet,o="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(o,0),a}},6657:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"==typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var r=(e.match(/[^0-9]*$/)||"").toString();return n[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=component---src-pages-kontakt-js-895b48aa662eca3b7ad0.js.map