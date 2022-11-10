(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),c=n(667),l=n.n(c),d=new URL(n(532),n.b),s=i()(r()),p=l()(d);s.push([e.id,"@font-face {\n  font-family: 'Crimson Text', serif;\n    src: url("+p+") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml, body{\n  height: 100%;\n  width:100%;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\nnav {\n  background-color: rgba(28, 75, 141, 0.643);\n  color: white;\n  padding: 20px 10px;\n  border-bottom: 1px solid gray;\n  box-shadow: 2px 2px 0px -1px rgba(0,0,0,0.18);\n}\n\nul {\n  list-style: none;\n}\n\ninput[type='button'] {\n  font-family: 'Crimson Text', serif;\n}\n\n.sidebar {\n  padding: 10px 20px;\n  background-color: #10DADE;\n  border-right: 1px solid gray;\n}\n\n.new-project {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  margin: 10px 0 20px 0;\n  font-family: 'Crimson Text', serif;\n}\n\n.new-project:hover {\n  color: red;\n}\n\n#content {\n  display: flex;\n  flex: 1;\n  position: relative;\n}\n\n\n\n.project-form h3,\n.item-form > h3\n {\n  text-align: center;\n}\n\n.project-form p,\n.item-form  p {\n  font-size: 20px;\n}\n\nlabel {\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n  padding-top: 8px;\n}\n\n.project-form input[type='button'],\n#createTodo {\n  border: none;\n  box-shadow: 2px 2px 0px -1px rgba(0,0,0,0.18);\n  cursor: pointer;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 5px;\n  width: 30%;\n  align-self: flex-end;\n}\n\n.project-form input[type='button']:hover,\n#createTodo:hover {\n  background-color: green;\n}\n\n.close-button {\n  position: absolute;\n  right: 25px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.close-button:hover {\n  color: red;\n}\n\n\nli {\n  cursor: pointer;\n  margin-top: 10px;\n  text-align: end;\n}\n\nli:hover {\n  color: red;\n}\n\n.main {\n  flex: 1;\n  padding: 20px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.new-item {\n  background: none;\n  border: none;\n  cursor: pointer;\n  position: absolute;\n  font-size: 20px;\n  font-family: 'Crimson Text', serif;\n  right: 20px;\n}\n\n.new-item:hover {\n  color: red;\n}\n\n.item-form,\n.project-form,\n.error-modal {\n  position: absolute;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  top: 20%;\n  right: calc(50% - 225px);\n  padding: 20px;\n  border: 1px solid black;\n  border-radius: 5px;\n  width: 450px;\n}\n\n\n.item-form label {\n  display: flex;\n  flex-direction: column;\n}\n\n\n.item {\n  display: flex;\n  gap: 10px;\n}\n\ntable {\n  margin-top: 20px;\n  border-collapse: collapse;\n  border: 1px solid gray;\n}\n\nth {\n  border-bottom: 1px solid gray;\n}\n\ntr:not(:nth-of-type(1)) {  \n  border-bottom: 1px dashed gray;\n  height: 100%;\n}\n\n\ntd {\n  text-align: center;\n  word-break: break-word;\n  max-width: 150px;\n  height: 100%;\n}\n\n.blank {\n  background-color: white;\n  width: 33%;\n\n}\n\n.blank::after{\n  content: ' ';\n}\n\n.low {\n  background-color: green;\n}\n\n.low,\n.medium,\n.high {\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  height: 100%;\n  align-items: center;\n  letter-spacing: 1px;\n}\n\n.low::after,\n.medium::after,\n.high:after {\n    content: '\\00a0' ;\n}\n\n.low:hover::after {\n  content: 'BAIXA';\n}\n\n.medium {\n  background-color: yellow;\n  \n}\n\n.medium:hover::after {\n  content: 'MÉDIA'\n}\n\n.high {\n  background-color: red;\n}\n\n.high:hover::after {\n  content: 'ALTA'\n}\n\n\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n}\n\n\n\n.error-modal {\n  background-color: red;\n  color: white;\n}\n\n.error-modal .close-button:hover {\n  color: black;\n}\n\n.finished {\n  text-decoration: line-through;\n}",""]);const m=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=o.base?l[0]+o.base:l[0],s=a[d]||0,p="".concat(d," ").concat(s);a[d]=s+1;var m=n(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=r(u,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=o(e,r),d=0;d<a.length;d++){var s=n(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},532:(e,t,n)=>{e.exports=n.p+"b7af1dccae742a310539.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),l=n.n(c),d=n(216),s=n.n(d),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;class f{constructor(e,t){this.items=[],this.name=e,this.description=t}appendItem(e){this.items.push(e)}}class x{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.finished=!1}}let g=new class{constructor(){this.project_list=[]}searchProject(e){let t;return this.project_list.forEach((n=>{n.name==e&&(t=n)})),t}appendProject(e){this.project_list.push(e)}};function v(e){return e.target.parentNode.remove()}function b(e){document.getElementsByClassName("main").length>0&&document.getElementsByClassName("main")[0].remove();let t=document.createElement("div");t.className="main";let n=document.getElementById("content"),o=document.createElement("h3"),r=document.createElement("span");r.id="actual-project",r.textContent=e.name,o.textContent="Projeto: ",o.appendChild(r);let a=document.createElement("p");return a.textContent="Descrição: "+e.description,t.appendChild(function(){let e=document.createElement("input");return e.className="new-item",e.type="button",e.value="+ NOVO ITEM",e.addEventListener("click",(()=>{document.getElementById("content").appendChild(function(){if(document.getElementsByClassName("item-form").length>0)return;const e=document.createElement("div");e.classList.add("item-form");const t=document.createElement("h3");t.textContent="CRIAR ITEM";let n=document.createElement("p");n.textContent="X",n.className="close-button",n.addEventListener("click",(e=>{v(e)}));const o=document.createElement("label");o.innerText="Nome";const r=document.createElement("input");r.type="text",r.id="title",r.name="title",o.appendChild(r);const a=document.createElement("label");a.innerText="Descrição";const i=document.createElement("textarea");i.rows=2,i.columns=30,i.id="description",i.name="description",a.appendChild(i);const c=document.createElement("label");c.innerText="Data alvo";const l=document.createElement("input");l.type="date",l.id="dueDate",l.name="dueDate",c.appendChild(l);const d=document.createElement("label");d.innerText="Prioridade";const s=document.createElement("select");s.add(E().low),s.add(E().medium),s.add(E().high),d.appendChild(s);const p=document.createElement("input");return p.type="button",p.id="createTodo",p.value="SALVAR",p.addEventListener("click",(e=>{if(0==r.value.length||0==l.value.length)return document.getElementById("content").appendChild(w("A tarefa precisa ter no mínimo um nome e uma data!"));let t=document.getElementById("actual-project").textContent,n=g.searchProject(t);console.log(n),n.items.push(new x(r.value,i.value,l.value,s.value)),alert("Item criado no projeto "+t),j(),v(e),y(t)})),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(a),e.appendChild(c),e.appendChild(d),e.appendChild(p),e}())})),e}()),t.appendChild(o),t.appendChild(a),n.appendChild(t)}function C(){let e=document.createElement("div");e.className="projects";let t=document.createElement("ul");t.className="project-list";for(let e=0;e<g.project_list.length;e++){let n=document.createElement("li");n.textContent=g.project_list[e].name,n.addEventListener("click",(()=>{b(g.project_list[e]),y(n.textContent)})),t.appendChild(n)}return e.appendChild(t),e}function E(){let e=document.createElement("option");e.value="low",e.text="Baixa";let t=document.createElement("option");t.value="medium",t.text="Média";let n=document.createElement("option");return n.value="high",n.text="Alta",{low:e,medium:t,high:n}}function y(e){document.getElementsByClassName("items-table").length>0&&document.getElementsByClassName("items-table")[0].remove();let t=g.searchProject(e);document.getElementsByClassName("main")[0].appendChild(function(){let e=document.createElement("table");e.className="items-table";let t=document.createElement("tr"),n=document.createElement("th");n.textContent="Tarefa";let o=document.createElement("th");o.textContent="Descrição";let r=document.createElement("th");r.textContent="Data limite";let a=document.createElement("th");a.textContent="Prioridade";let i=document.createElement("th");i.textContent="Status";let c=document.createElement("th");return c.textContent=" ",t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i),t.appendChild(c),e.appendChild(t),e}());let n=document.getElementsByClassName("items-table")[0];t.items.forEach(((o,r)=>{let a=document.createElement("tr");a.dataset.index=r;let i=document.createElement("td");i.textContent=o.title;let c=document.createElement("td");c.textContent=o.description;let l=document.createElement("td");l.textContent=o.dueDate;let d=document.createElement("td");d.className="flex";let s=document.createElement("div");switch(o.priority){case"low":s.className="low";break;case"medium":s.className="medium";break;case"high":s.className="high"}d.appendChild(s),1==o.finished?(i.classList.add("finished"),c.classList.add("finished"),l.classList.add("finished"),d.classList.add("finished")):(i.classList.remove("finished"),c.classList.remove("finished"),l.classList.remove("finished"),d.classList.remove("finished"));let p=document.createElement("td"),m=document.createElement("input");m.type="checkbox",m.value=o.finished,1==o.finished?m.checked=!0:m.checked=!1,m.addEventListener("change",(()=>(0==o.finished?o.finished=!0:o.finished=!1,console.log(o.finished),y(e)))),p.appendChild(m);let u=document.createElement("td"),h=document.createElement("input");h.type="button",h.value="EXCLUIR",h.addEventListener("click",(()=>{t.items.splice(a.dataset.index,1),y(e)})),u.appendChild(h),a.appendChild(i),a.appendChild(c),a.appendChild(l),a.appendChild(d),a.appendChild(p),a.appendChild(u),n.append(a)}))}function w(e){if(document.getElementsByClassName("error-modal").length>0)return;let t=document.createElement("div"),n=document.createElement("p");n.textContent="X",n.className="close-button",n.addEventListener("click",(e=>{v(e)})),t.className="error-modal";let o=document.createElement("p");return o.className="error-text",o.textContent=e,t.appendChild(o),t.appendChild(n),t}function j(){let e=document.getElementsByClassName("error-modal")[0];if(e)return e.remove()}g.appendProject(new f("Default","Teste")),function(){let e=document.createElement("div");e.id="content",document.body.appendChild(function(){let e=document.createElement("nav"),t=document.createElement("h1");return t.textContent="ToDo List",e.appendChild(t),e}()),document.body.appendChild(e),e.appendChild(function(){let e=document.createElement("div");return e.className="sidebar",e.appendChild(function(){let e=document.createElement("input");return e.className="new-project",e.type="button",e.value="+ NOVO PROJETO",e.addEventListener("click",(()=>{document.getElementById("content").appendChild(function(){if(document.getElementsByClassName("project-form").length>0)return;let e=document.createElement("div");e.className="project-form";let t=document.createElement("h3");t.textContent="CRIAR PROJETO";let n=document.createElement("p");n.textContent="X",n.className="close-button",n.addEventListener("click",(e=>{v(e)}));const o=document.createElement("label");o.innerText="Nome do projeto";const r=document.createElement("input");r.type="text",r.id="projectName",r.name="projectName",o.appendChild(r);const a=document.createElement("label");a.innerText="Descrição";const i=document.createElement("textarea");i.rows=4,i.cols=50,i.id="projectDescription",i.name="projectDescription",a.appendChild(i);const c=document.createElement("input");return c.type="button",c.value="SALVAR",c.addEventListener("click",(e=>{let t=document.getElementById("projectName").value;if(0==t.length)return document.getElementById("content").appendChild(w("O projeto precisa ter um nome!"));let n=document.getElementById("projectDescription").value;g.appendProject(new f(t,n)),alert("Projeto "+t+" criado!"),j(),v(e);let o=document.getElementsByClassName("sidebar")[0];document.getElementsByClassName("projects")[0].remove(),o.appendChild(C())})),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(a),e.appendChild(c),e}())})),e}()),e.appendChild(C()),e}())}()})()})();