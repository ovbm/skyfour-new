(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7Vzu":function(e,t,r){"use strict";r("pS08"),r("LagC"),r("R48M");var n,a=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var s,c,l=o(r("q1tI")),u=r("qKvR"),f=r("PZj6"),h=r("LDyf"),d=u.keyframes(s||(s=a(["\n  33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}\n"],["\n  33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}\n"]))),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.style=function(e){var r=t.props,n=r.color,i=r.size,o=r.margin;return u.css(c||(c=a(["\n      background-color: ",";\n      width: ",";\n      height: ",";\n      margin: ",";\n      border-radius: 100%;\n      display: inline-block;\n      animation: "," 0.6s ","s infinite ease-in-out;\n      animation-fill-mode: both;\n    "],["\n      background-color: ",";\n      width: ",";\n      height: ",";\n      margin: ",";\n      border-radius: 100%;\n      display: inline-block;\n      animation: "," 0.6s ","s infinite ease-in-out;\n      animation-fill-mode: both;\n    "])),n,h.cssValue(i),h.cssValue(i),h.cssValue(o),d,.07*e)},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,r=e.css;return t?u.jsx("div",{css:[r]},u.jsx("div",{css:this.style(1)}),u.jsx("div",{css:this.style(2)}),u.jsx("div",{css:this.style(3)})):null},t.defaultProps=f.sizeMarginDefaults(15),t}(l.PureComponent);t.default=p},IDOG:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("vOnD"),o=(r("Wbzz"),r("wBNj")),s=r("Kfvu"),c=r("Bl7J"),l=r("vrFN"),u=r("Fy8v"),f=(r("E5k/"),r("pJf4"),r("o0o1")),h=r.n(f),d=(r("ls82"),r("7Vzu")),p=r.n(d);var m=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).sendApplication=function(e){var t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return r.setState({isSending:!0}),n.next=3,h.a.awrap(fetch("https://europe-west1-iovi-205808.cloudfunctions.net/skyfouremail",{method:"POST",body:e}));case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}))},r.handleSubmit=function(e){e.preventDefault();var t=!1,n=r.state,a=n.name,i=n.message,o=n.email,c=n.empty;a||(c.name=!0,r.setState({status:"required"}),t=!0),o||(c.email=!0,r.setState({status:"required"}),t=!0),i||(c.message=!0,r.setState({status:"required"}),t=!0);var l=/^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/.test(o);if(r.setState({isValidEmail:l}),l&&!t){var u=new FormData;u.append("name",a),u.append("email",o),u.append("message",i),r.sendApplication(u).then((function(e){200===e.status&&(r.setState({status:"success",isSending:!1}),Object(s.trackCustomEvent)({category:"email",action:"sent",label:"Form Email",value:50}))})).catch((function(e){console.error(e),r.setState({status:"error",isSending:!1})}))}},r.handleInputChange=function(e){var t=e.target;console.log(t.id),r.setState((function(e){var r,n;return(n={empty:Object.assign({},e.empty,(r={},r[t.id]=!1,r))})[t.id]=t.value,n}))},r.state={empty:{},email:"",name:"",isValidEmail:!0,isSending:!1},r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.className,r=e.buttonClassName,n=this.state,i=n.status,o=n.empty,s=n.email,c=n.isValidEmail,l=n.isSending;return a.a.createElement(g,{onSubmit:this.handleSubmit,className:t,enctype:"multipart/form-data"},a.a.createElement(v,{required:!0},a.a.createElement("label",{htmlFor:"name"},"Name"),a.a.createElement(b,{id:"name",key:"name",onChange:this.handleInputChange,defaultValue:"","aria-label":"name input",type:"text",empty:o.name})),a.a.createElement(v,{required:!0},a.a.createElement("label",{htmlFor:"email"},"Email",c?null:a.a.createElement(y,null,"Enter valid email")),a.a.createElement(b,{id:"email",key:"email",onChange:this.handleInputChange,defaultValue:s,"aria-label":"email input",type:"text",empty:o.email||!c})),a.a.createElement(v,{required:!0},a.a.createElement("label",{htmlFor:"message"},"Nachricht "),a.a.createElement(w,{rows:"6",id:"message",form:"usrform",onChange:this.handleInputChange,placeholder:"Datum, Ort, gewünschte Spieldauer und spezielle Musikwünsche helfen uns ihnen eine individuelle Offerte zu erstellen.",empty:o.message})),a.a.createElement(v,null,a.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},a.a.createElement(x,{id:"submit",value:"Offerte Anfragen",type:"submit",title:"Offerte Anfragen",color:u.a.colors.blue,className:r,"aria-label":"submit",disabled:l}),a.a.createElement(p.a,{color:u.a.colors.blue,loading:l,size:8}))),a.a.createElement(k,null,"sending"===i&&a.a.createElement("p",null,"Wird gesendet..."),"required"===i&&a.a.createElement("p",null,"Bitte fülle Sie alle benötigten Felder aus."),"success"===i&&a.a.createElement("p",null,"Vielen Dank für Ihre Anfrage, wir melden uns umgehend bei Ihnen.")))},n}(a.a.Component),g=i.a.form.withConfig({displayName:"contactform__Form",componentId:"q9vfn0-0"})(["position:relative;margin:0;border-radius:8px;padding:","px;@media only screen and (max-width:","px){padding:","px;}"],u.a.space.lg,u.a.dim.mobilebreakpoint,u.a.space.md),v=i.a.div.withConfig({displayName:"contactform__Field",componentId:"q9vfn0-1"})(["padding:8px 0;margin:0;overflow:visible;label{&::before{content:",";width:6px;height:6px;background:",";display:inline-block;margin:0 10px 3px 0;border-radius:50%;}}"],(function(e){return e.required?'""':null}),u.a.colors.blue),b=i.a.input.withConfig({displayName:"contactform__Input",componentId:"q9vfn0-2"})(["border-radius:4px;background-color:",";border:",";margin-top:8px;padding:5px 20px 8px 13px;transition:background-color 0.2s ease-in,box-shadow 0.2s ease-in;box-sizing:border-box;width:100%;&:focus{background-color:",";box-shadow:0 0 0 2px ",";}"],u.a.colors.bgSecondary,(function(e){return e.empty?"1px solid "+u.a.colors.red:0}),u.a.colors.bgPrimary,u.a.colors.bgSecondary),y=i.a.span.withConfig({displayName:"contactform__ErrorLabel",componentId:"q9vfn0-3"})(["font-size:0.5em;color:",";padding:0 0 0 8px;"],u.a.colors.red),w=i.a.textarea.withConfig({displayName:"contactform__TextArea",componentId:"q9vfn0-4"})(["border-radius:4px;background-color:",";border:0;margin-top:8px;padding:5px 20px 8px 13px;transition:background-color 0.2s ease-in,box-shadow 0.2s ease-in;box-sizing:border-box;width:100%;&:focus{background-color:",";box-shadow:0 0 0 2px ",";}"],u.a.colors.bgSecondary,u.a.colors.bgPrimary,u.a.colors.bgSecondary),k=i.a.div.withConfig({displayName:"contactform__AlertMessage",componentId:"q9vfn0-5"})(["width:100%;p{background-color:transparent;color:black;font-size:14px;margin:0 auto;padding:2px 0 9 1em;}"]),x=i.a.input.withConfig({displayName:"contactform__StyledSubmit",componentId:"q9vfn0-6"})(["font-size:1rem;font-weight:bold;cursor:pointer;display:inline-block;color:",";background-color:",";border-radius:8px;border:none;align-self:center;vertical-align:middle;margin:1em 1em 1em 0;white-space:nowrap;text-align:center;padding:4px 16px;text-decoration:none;transition:box-shadow 0.2s linear;&:hover{box-shadow:0 10px 32px rgba(0,0,0,0.1);}&:disabled{opacity:0.6;cursor:not-allowed;box-shadow:none;}"],(function(e){return"white"===e.color||"#FFFFFF"===e.color?u.a.colors.primary:"white"}),(function(e){return e.color})),C=(t.default=function(){return a.a.createElement(c.a,null,a.a.createElement(l.a,{title:"Hochzeitsband und Partyband Skyfour - Konkakt und unverbindliche Offerte",description:"Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband. Kontaktieren Sie uns um die richtige Musik für Ihren Event zu finden!"}),a.a.createElement(_,null,a.a.createElement(A,null,a.a.createElement(o.Container,null,a.a.createElement(o.Row,null,a.a.createElement(o.Col,{md:6},a.a.createElement(o.Container,null,a.a.createElement("h2",null,"Kontakt"),a.a.createElement("p",null,"Kontaktieren Sie uns um die richtige Musik für Ihren Event zu finden!"),a.a.createElement("p",null,"Teilen Sie uns Anlass, Datum, Ort, gewünschte Spieldauer und spezielle Musikwünsche mit. Wir melden uns umgehend mit einer passenden Offerte bei Ihnen."),a.a.createElement("p",null,"Sie können sich auch per Email an"," ",a.a.createElement(s.OutboundLink,{href:"mailto:ramon.oliveras@skyfour.ch"},"ramon.oliveras@skyfour.ch")," ","wenden oder telefonisch unter"," ",a.a.createElement(s.OutboundLink,{href:"tel:+41798256354"},"079 825 63 54")," ","."))),a.a.createElement(o.Col,{md:6},a.a.createElement(m,null)))))))},Object(i.b)(["from{opacity:0;transform:scale(1.1);}to{opacity:1;transform:scale(1);}"])),E=Object(i.b)(["from{transform:translateY(50px);opacity:0;}to{transform:translateY(0px);opacity:1;}"]),A=i.a.div.withConfig({displayName:"kontakt__StageTitle",componentId:"c7jhcg-0"})(["display:flex;flex-direction:column;justify-content:center;animation:"," 0.8s ease;animation-delay:0.2s;opacity:0;animation-fill-mode:forwards;h1{font-size:42px;}p{line-height:2;}h3{font-weight:lighter;font-size:18px;margin-bottom:8px;}"],E),_=i.a.div.withConfig({displayName:"kontakt__StyledBackgroundImage",componentId:"c7jhcg-1"})(["padding:8em 0;overflow:hidden;animation:"," 0.8s ease;animation-delay:0;opacity:0;animation-fill-mode:forwards;"],C)},LDyf:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),n(r("PZj6")),n(r("Rw4t")),n(r("z+Cf"))},PZj6:function(e,t,r){"use strict";r("E5k/"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var n={loading:!0,color:"#000000",css:""};function a(e){return Object.assign({},n,{size:e})}function i(e,t){return Object.assign({},n,{height:e,width:t})}t.sizeDefaults=a,t.sizeMarginDefaults=function(e){return Object.assign({},a(e),{margin:2})},t.heightWidthDefaults=i,t.heightWidthRadiusDefaults=function(e,t,r){return void 0===r&&(r=2),Object.assign({},i(e,t),{radius:r,margin:2})}},Rw4t:function(e,t,r){"use strict";var n;r("Ll4R"),r("AqHK"),r("HQhv"),r("JHok"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("gu/5"),r("eoYm"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"}(n||(n={})),t.calculateRgba=function(e,t){if(Object.keys(n).includes(e)&&(e=n[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var r="";e.split("").forEach((function(e){r+=e,r+=e})),e=r}return"rgba("+e.match(/.{2}/g).map((function(e){return parseInt(e,16)})).join(", ")+", "+t+")"}},ls82:function(e,t,r){r("rzGZ"),r("Dq+y"),r("q8oJ"),r("C9fy"),r("6kNP"),r("8npG"),r("LagC"),r("pJf4"),r("JHok"),r("pS08"),r("m210"),r("4DPX");var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),o=new O(n||[]);return i._invoke=function(e,t,r){var n=u;return function(a,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw i;return j()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(e,r,o),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var u="suspendedStart",f="suspendedYield",h="executing",d="completed",p={};function m(){}function g(){}function v(){}var b={};b[i]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(S([])));w&&w!==r&&n.call(w,i)&&(b=w);var k=v.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function C(e){var t;this._invoke=function(r,a){function i(){return new Promise((function(t,i){!function t(r,a,i,o){var s=l(e[r],e,a);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,i,o)}),(function(e){t("throw",e,i,o)})):Promise.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return t("throw",e,i,o)}))}o(s.arg)}(r,a,t,i)}))}return t=t?t.then(i,i):i()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=l(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function S(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:t,done:!0}}return g.prototype=k.constructor=v,v.constructor=g,v[s]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(C.prototype),C.prototype[o]=function(){return this},e.AsyncIterator=C,e.async=function(t,r,n,a){var i=new C(c(t,r,n,a));return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(k),k[s]="Generator",k[i]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},qKvR:function(e,t,r){"use strict";r.r(t);r("MIFh"),r("Ll4R"),r("pJf4"),r("sc67"),r("sC2a");var n=r("VbXa"),a=r.n(n),i=r("q1tI");r("klQ5"),r("AqHK"),r("HQhv"),r("JHok");var o=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);a.insertRule(e,i?0:a.cssRules.length)}catch(o){0}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();r("HXzo");var s=function(e){function t(e,t,n){var a=t.trim().split(p);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<i;++s)t[s]=r(e,t[s],n).trim();break;default:var c=s=0;for(t=[];s<i;++s)for(var l=0;l<o;++l)t[c++]=r(e[l]+" ",a[s],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,i){var o=e+";",s=2*t+3*r+4*i;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===j||2===j&&a(c,1)?"-webkit-"+c+c:c}if(0===j||2===j&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(A,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return h.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(y,"tb");break;case 232:c=o.replace(y,"tb-rl");break;case 220:c=o.replace(y,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(x,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(x,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===E.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,i).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+i&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(d,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),N(2!==t?n:n.replace(C,"$1"),r,t)}function i(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(k," or ($1)").substring(4):"("+t+")"}function o(e,t,r,n,a,i,o,s,l,u){for(var f,h=0,d=t;h<L;++h)switch(f=F[h].call(c,e,d,r,n,a,i,o,s,l,u)){case void 0:case!1:case!0:case null:break;default:d=f}if(d!==t)return d}function s(e){return void 0!==(e=e.prefix)&&(N=null,e?"function"!=typeof e?j=1:(j=2,N=e):j=0),s}function c(e,r){var s=e;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<L){var c=o(-1,r,s,s,O,_,0,0,0,0);void 0!==c&&"string"==typeof c&&(r=c)}var f=function e(r,s,c,f,h){for(var d,p,m,y,k,x=0,C=0,E=0,A=0,F=0,N=0,P=m=d=0,q=0,M=0,R=0,D=0,G=c.length,$=G-1,T="",Y="",J="",V="";q<G;){if(p=c.charCodeAt(q),q===$&&0!==C+A+E+x&&(0!==C&&(p=47===C?10:47),A=E=x=0,G++,$++),0===C+A+E+x){if(q===$&&(0<M&&(T=T.replace(u,"")),0<T.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:T+=c.charAt(q)}p=59}switch(p){case 123:for(d=(T=T.trim()).charCodeAt(0),m=1,D=++q;q<G;){switch(p=c.charCodeAt(q)){case 123:m++;break;case 125:m--;break;case 47:switch(p=c.charCodeAt(q+1)){case 42:case 47:e:{for(P=q+1;P<$;++P)switch(c.charCodeAt(P)){case 47:if(42===p&&42===c.charCodeAt(P-1)&&q+2!==P){q=P+1;break e}break;case 10:if(47===p){q=P+1;break e}}q=P}}break;case 91:p++;case 40:p++;case 34:case 39:for(;q++<$&&c.charCodeAt(q)!==p;);}if(0===m)break;q++}switch(m=c.substring(D,q),0===d&&(d=(T=T.replace(l,"").trim()).charCodeAt(0)),d){case 64:switch(0<M&&(T=T.replace(u,"")),p=T.charCodeAt(1)){case 100:case 109:case 115:case 45:M=s;break;default:M=z}if(D=(m=e(s,M,m,p,h+1)).length,0<L&&(k=o(3,m,M=t(z,T,R),s,O,_,D,p,h,f),T=M.join(""),void 0!==k&&0===(D=(m=k.trim()).length)&&(p=0,m="")),0<D)switch(p){case 115:T=T.replace(w,i);case 100:case 109:case 45:m=T+"{"+m+"}";break;case 107:m=(T=T.replace(g,"$1 $2"))+"{"+m+"}",m=1===j||2===j&&a("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=T+m,112===f&&(Y+=m,m="")}else m="";break;default:m=e(s,t(s,T,R),m,f,h+1)}J+=m,m=R=M=P=d=0,T="",p=c.charCodeAt(++q);break;case 125:case 59:if(1<(D=(T=(0<M?T.replace(u,""):T).trim()).length))switch(0===P&&(d=T.charCodeAt(0),45===d||96<d&&123>d)&&(D=(T=T.replace(" ",":")).length),0<L&&void 0!==(k=o(1,T,s,r,O,_,Y.length,f,h,f))&&0===(D=(T=k.trim()).length)&&(T="\0\0"),d=T.charCodeAt(0),p=T.charCodeAt(1),d){case 0:break;case 64:if(105===p||99===p){V+=T+c.charAt(q);break}default:58!==T.charCodeAt(D-1)&&(Y+=n(T,d,p,T.charCodeAt(2)))}R=M=P=d=0,T="",p=c.charCodeAt(++q)}}switch(p){case 13:case 10:47===C?C=0:0===1+d&&107!==f&&0<T.length&&(M=1,T+="\0"),0<L*I&&o(0,T,s,r,O,_,Y.length,f,h,f),_=1,O++;break;case 59:case 125:if(0===C+A+E+x){_++;break}default:switch(_++,y=c.charAt(q),p){case 9:case 32:if(0===A+x+C)switch(F){case 44:case 58:case 9:case 32:y="";break;default:32!==p&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===A+C+x&&(M=R=1,y="\f"+y);break;case 108:if(0===A+C+x+S&&0<P)switch(q-P){case 2:112===F&&58===c.charCodeAt(q-3)&&(S=F);case 8:111===N&&(S=N)}break;case 58:0===A+C+x&&(P=q);break;case 44:0===C+E+A+x&&(M=1,y+="\r");break;case 34:case 39:0===C&&(A=A===p?0:0===A?p:A);break;case 91:0===A+C+E&&x++;break;case 93:0===A+C+E&&x--;break;case 41:0===A+C+x&&E--;break;case 40:if(0===A+C+x){if(0===d)switch(2*F+3*N){case 533:break;default:d=1}E++}break;case 64:0===C+E+A+x+P+m&&(m=1);break;case 42:case 47:if(!(0<A+x+E))switch(C){case 0:switch(2*p+3*c.charCodeAt(q+1)){case 235:C=47;break;case 220:D=q,C=42}break;case 42:47===p&&42===F&&D+2!==q&&(33===c.charCodeAt(D+2)&&(Y+=c.substring(D,q+1)),y="",C=0)}}0===C&&(T+=y)}N=F,F=p,q++}if(0<(D=Y.length)){if(M=s,0<L&&(void 0!==(k=o(2,Y,M,r,O,_,D,f,h,f))&&0===(Y=k).length))return V+Y+J;if(Y=M.join(",")+"{"+Y+"}",0!=j*S){switch(2!==j||a(Y,2)||(S=0),S){case 111:Y=Y.replace(b,":-moz-$1")+Y;break;case 112:Y=Y.replace(v,"::-webkit-input-$1")+Y.replace(v,"::-moz-$1")+Y.replace(v,":-ms-input-$1")+Y}S=0}}return V+Y+J}(z,s,r,0,0);return 0<L&&(void 0!==(c=o(-2,f,s,s,O,_,f.length,0,0,0))&&(f=c)),"",S=0,_=O=1,f}var l=/^\0+/g,u=/[\0\r\f]/g,f=/: */g,h=/zoo|gra/,d=/([,: ])(transform)/g,p=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,x=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,_=1,O=1,S=0,j=1,z=[],F=[],L=0,N=null,I=0;return c.use=function e(t){switch(t){case void 0:case null:L=F.length=0;break;default:if("function"==typeof t)F[L++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else I=0|!!t}return e},c.set=s,void 0!==e&&s(e),c};r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz");function c(e){e&&l.current.insert(e+"}")}var l={current:null},u=function(e,t,r,n,a,i,o,s,u,f){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return l.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===s)return t+"/*|*/";break;case 3:switch(s){case 102:case 112:return l.current.insert(r[0]+t),"";default:return t+(0===f?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(c)}},f=function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var n=new s(t);var a,i={};a=e.container||document.head;var c,f=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(f,(function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach((function(e){i[e]=!0})),e.parentNode!==a&&a.appendChild(e)})),n.use(e.stylisPlugins)(u),c=function(e,t,r,a){var i=t.name;l.current=r,n(e,t.styles),a&&(h.inserted[i]=!0)};var h={key:r,sheet:new o({key:r,container:a,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:i,registered:{},insert:c};return h};function h(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]):n+=r+" "})),n}var d=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert("."+n,a,e.sheet,!0);a=a.next}while(void 0!==a)}};r("q8oJ"),r("C9fy");var p=function(e){for(var t,r=e.length,n=r^r,a=0;r>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++a;switch(r){case 3:n^=(255&e.charCodeAt(a+2))<<16;case 2:n^=(255&e.charCodeAt(a+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(a)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),((n^=n>>>15)>>>0).toString(36)},m={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var g=/[A-Z]|^ms/g,v=/_EMO_([^_]+?)_([^]*?)_EMO_/g,b=function(e){return 45===e.charCodeAt(1)},y=function(e){return null!=e&&"boolean"!=typeof e},w=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return b(e)?e:e.replace(g,"-$&").toLowerCase()})),k=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(v,(function(e,t,r){return C={name:t,styles:r,next:C},t}))}return 1===m[e]||b(e)||"number"!=typeof t||0===t?t:t+"px"};function x(e,t,r,n){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return C={name:r.name,styles:r.styles,next:C},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)C={name:a.name,styles:a.styles,next:C},a=a.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=x(e,t,r[a],!1);else for(var i in r){var o=r[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":y(o)&&(n+=w(i)+":"+k(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=x(e,t,o,!1);switch(i){case"animation":case"animationName":n+=w(i)+":"+s+";";break;default:n+=i+"{"+s+"}"}}else for(var c=0;c<o.length;c++)y(o[c])&&(n+=w(i)+":"+k(i,o[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var i=C,o=r(e);return C=i,x(e,t,o,n)}break;case"string":}if(null==t)return r;var s=t[r];return void 0===s||n?r:s}var C,E=/label:\s*([^\s;\n{]+)\s*;/g;var A=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";C=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=x(r,t,i,!1)):a+=i[0];for(var o=1;o<e.length;o++)a+=x(r,t,e[o],46===a.charCodeAt(a.length-1)),n&&(a+=i[o]);E.lastIndex=0;for(var s,c="";null!==(s=E.exec(a));)c+="-"+s[1];return{name:p(a)+c,styles:a,next:C}};var _=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return A(t)};r.d(t,"CacheProvider",(function(){return j})),r.d(t,"ClassNames",(function(){return $})),r.d(t,"Global",(function(){return q})),r.d(t,"ThemeContext",(function(){return S})),r.d(t,"jsx",(function(){return P})),r.d(t,"keyframes",(function(){return R})),r.d(t,"withEmotionCache",(function(){return z})),r.d(t,"css",(function(){return _}));var O=Object(i.createContext)("undefined"!=typeof HTMLElement?f():null),S=Object(i.createContext)({}),j=O.Provider,z=function(e){return Object(i.forwardRef)((function(t,r){return Object(i.createElement)(O.Consumer,null,(function(n){return e(t,n,r)}))}))},F="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",L=Object.prototype.hasOwnProperty,N=function(e,t,r,n){var a=null===r?t.css:t.css(r);"string"==typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var o=t[F],s=[a],c="";"string"==typeof t.className?c=h(e.registered,s,t.className):null!=t.className&&(c=t.className+" ");var l=A(s);d(e,l,"string"==typeof o);c+=e.key+"-"+l.name;var u={};for(var f in t)L.call(t,f)&&"css"!==f&&f!==F&&(u[f]=t[f]);return u.ref=n,u.className=c,Object(i.createElement)(o,u)},I=z((function(e,t,r){return"function"==typeof e.css?Object(i.createElement)(S.Consumer,null,(function(n){return N(t,e,n,r)})):N(t,e,null,r)}));var P=function(e,t){var r=arguments;if(null==t||!L.call(t,"css"))return i.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=I;var o={};for(var s in t)L.call(t,s)&&(o[s]=t[s]);o[F]=e,a[1]=o;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)},q=z((function(e,t){var r=e.styles;if("function"==typeof r)return Object(i.createElement)(S.Consumer,null,(function(e){var n=A([r(e)]);return Object(i.createElement)(M,{serialized:n,cache:t})}));var n=A([r]);return Object(i.createElement)(M,{serialized:n,cache:t})})),M=function(e){function t(t,r,n){return e.call(this,t,r,n)||this}a()(t,e);var r=t.prototype;return r.componentDidMount=function(){this.sheet=new o({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var e=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');null!==e&&this.sheet.tags.push(e),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},r.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles()},r.insertStyles=function(){if(void 0!==this.props.serialized.next&&d(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var e=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling;this.sheet.before=e,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},r.componentWillUnmount=function(){this.sheet.flush()},r.render=function(){return null},t}(i.Component),R=function(){var e=_.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},D=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var i=t[n];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var s in o="",i)i[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};function G(e,t,r){var n=[],a=h(e,n,r);return n.length<2?r:a+t(n)}var $=z((function(e,t){return Object(i.createElement)(S.Consumer,null,(function(r){var n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=A(r,t.registered);return d(t,a,!1),t.key+"-"+a.name},a={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return G(t.registered,n,D(r))},theme:r},i=e.children(a);return!0,i}))}))},"z+Cf":function(e,t,r){"use strict";r("gu/5"),r("eoYm"),r("Ll4R"),r("q8oJ"),r("C9fy"),r("8npG"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=e.match(/^[0-9.]*/).toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var a=e.match(/[^0-9]*$/).toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: "+e+" is not a valid css value. Defaulting to "+t+"px."),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return""+t.value+t.unit}}}]);
//# sourceMappingURL=component---src-pages-kontakt-js-b979744a6d6a3893b991.js.map