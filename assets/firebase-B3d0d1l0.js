import{o as Ay,_ as ke,R as ku}from"./vendor-CYZMwHvt.js";const by=()=>{};var hd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Py=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,u=s+2<r.length,h=u?r[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,R=h&63;u||(R=64,o||(_=64)),n.push(t[f],t[m],t[_],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(om(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Py(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const m=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new Ry;const _=i<<2|c>>4;if(n.push(_),h!==64){const R=c<<4&240|h>>2;if(n.push(R),m!==64){const C=h<<6&192|m;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ry extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vy=function(r){const e=om(r);return am.encodeByteArray(e,!0)},cm=function(r){return Vy(r).replace(/\./g,"")},um=function(r){try{return am.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=()=>lm().__FIREBASE_DEFAULTS__,xy=()=>{if(typeof process>"u"||typeof hd>"u")return;const r=hd.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Cy=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&um(r[1]);return e&&JSON.parse(e)},Va=()=>{try{return by()||Sy()||xy()||Cy()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ny=r=>Va()?.emulatorHosts?.[r],hm=()=>Va()?.config,dm=r=>Va()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ky(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function fm(){const r=Va()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ly(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function My(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uy(){const r=Pe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function mm(){return!fm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pm(){return!fm()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function gm(){try{return typeof indexedDB=="object"}catch{return!1}}function Fy(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="FirebaseError";class Zt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=By,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qy(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Zt(s,c,n)}}function qy(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),c=e[o];n+=r.substring(t,s)+(c!=null?String(c):`<${o}?>`),t=i+1}return n}catch{return r}}function $y(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function mr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(dd(i)&&dd(o)){if(!mr(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function dd(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function jy(r,e){const t=new zy(r,e);return t.subscribe.bind(t)}class zy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Gy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Oc),s.error===void 0&&(s.error=Oc),s.complete===void 0&&(s.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gy(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Oc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _m(r){return(await fetch(r,{credentials:"include"})).ok}class pr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Dy;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hy(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Wy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wy(r){return r===Hn?void 0:r}function Hy(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ky(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(te||(te={}));const Yy={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Jy=te.INFO,Xy={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Zy=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Xy[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=Jy,this._logHandler=Zy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tI(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function tI(r){return r.getComponent()?.type==="VERSION"}const Yc="@firebase/app",fd="0.16.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Ou("@firebase/app"),nI="@firebase/app-compat",rI="@firebase/analytics-compat",sI="@firebase/analytics",iI="@firebase/app-check-compat",oI="@firebase/app-check",aI="@firebase/auth",cI="@firebase/auth-compat",uI="@firebase/crashlytics",lI="@firebase/database",hI="@firebase/data-connect",dI="@firebase/database-compat",fI="@firebase/functions",mI="@firebase/functions-compat",pI="@firebase/installations",gI="@firebase/installations-compat",_I="@firebase/messaging",yI="@firebase/messaging-compat",II="@firebase/performance",wI="@firebase/performance-compat",EI="@firebase/remote-config",TI="@firebase/remote-config-compat",vI="@firebase/storage",AI="@firebase/storage-compat",bI="@firebase/firestore",PI="@firebase/ai",RI="@firebase/firestore-compat",VI="firebase",SI="13.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="[DEFAULT]",xI={[Yc]:"fire-core",[nI]:"fire-core-compat",[sI]:"fire-analytics",[rI]:"fire-analytics-compat",[oI]:"fire-app-check",[iI]:"fire-app-check-compat",[aI]:"fire-auth",[cI]:"fire-auth-compat",[uI]:"fire-cls",[lI]:"fire-rtdb",[hI]:"fire-data-connect",[dI]:"fire-rtdb-compat",[fI]:"fire-fn",[mI]:"fire-fn-compat",[pI]:"fire-iid",[gI]:"fire-iid-compat",[_I]:"fire-fcm",[yI]:"fire-fcm-compat",[II]:"fire-perf",[wI]:"fire-perf-compat",[EI]:"fire-rc",[TI]:"fire-rc-compat",[vI]:"fire-gcs",[AI]:"fire-gcs-compat",[bI]:"fire-fst",[RI]:"fire-fst-compat",[PI]:"fire-vertex","fire-js":"fire-js",[VI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map,CI=new Map,Xc=new Map;function md(r,e){try{r.container.addComponent(e)}catch(t){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Wr(r){const e=r.name;if(Xc.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Xc.set(e,r);for(const t of Zo.values())md(t,r);for(const t of CI.values())md(t,r);return!0}function Lu(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function mt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new $i("app","Firebase",NI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=SI;function kI(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Jc,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Mt.create("bad-app-name",{appName:String(s)});if(t||(t=hm()),!t)throw Mt.create("no-options");const i=Zo.get(s);if(i)if(mr(t,i.options)){if(mr(n,i.config))return i;throw Mt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Mt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Qy(s);for(const u of Xc.values())o.addComponent(u);const c=new DI(t,n,o);return Zo.set(s,c),c}function OI(r=Jc){const e=Zo.get(r);if(!e&&r===Jc&&hm())return kI();if(!e)throw Mt.create("no-app",{appName:r});return e}function In(r,e,t){let n=xI[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(o.join(" "));return}Wr(new pr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="firebase-heartbeat-database",MI=1,yi="firebase-heartbeat-store";let Lc=null;function ym(){return Lc||(Lc=Ay(LI,MI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(yi)}catch(t){console.warn(t)}}}}).catch(r=>{throw Mt.create("idb-open",{originalErrorMessage:r.message})})),Lc}async function UI(r){try{const t=(await ym()).transaction(yi),n=await t.objectStore(yi).get(Im(r));return await t.done,n}catch(e){if(e instanceof Zt)Gt.warn(e.message);else{const t=Mt.create("idb-get",{originalErrorMessage:e?.message});Gt.warn(t.message)}}}async function pd(r,e){try{const n=(await ym()).transaction(yi,"readwrite");await n.objectStore(yi).put(e,Im(r)),await n.done}catch(t){if(t instanceof Zt)Gt.warn(t.message);else{const n=Mt.create("idb-set",{originalErrorMessage:t?.message});Gt.warn(n.message)}}}function Im(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=1024,BI=30;class qI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jI(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=gd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>BI){const s=zI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Gt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gd(),{heartbeatsToSend:t,unsentEntries:n}=$I(this._heartbeatsCache.heartbeats),s=cm(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Gt.warn(e),""}}}function gd(){return new Date().toISOString().substring(0,10)}function $I(r,e=FI){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_d(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),_d(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class jI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gm()?Fy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await UI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return pd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return pd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function _d(r){return cm(JSON.stringify({version:2,heartbeats:r})).length}function zI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(r){Wr(new pr("platform-logger",e=>new eI(e),"PRIVATE")),Wr(new pr("heartbeat",e=>new qI(e),"PRIVATE")),In(Yc,fd,r),In(Yc,fd,"esm2020"),In("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */GI("");var yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wn,wm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function I(){}I.prototype=g.prototype,w.F=g.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(v,T,P){for(var y=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)y[Ye-2]=arguments[Ye];return g.prototype[T].apply(v,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,I){I||(I=0);const v=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)v[T]=g.charCodeAt(I++)|g.charCodeAt(I++)<<8|g.charCodeAt(I++)<<16|g.charCodeAt(I++)<<24;else for(T=0;T<16;++T)v[T]=g[I++]|g[I++]<<8|g[I++]<<16|g[I++]<<24;g=w.g[0],I=w.g[1],T=w.g[2];let P=w.g[3],y;y=g+(P^I&(T^P))+v[0]+3614090360&4294967295,g=I+(y<<7&4294967295|y>>>25),y=P+(T^g&(I^T))+v[1]+3905402710&4294967295,P=g+(y<<12&4294967295|y>>>20),y=T+(I^P&(g^I))+v[2]+606105819&4294967295,T=P+(y<<17&4294967295|y>>>15),y=I+(g^T&(P^g))+v[3]+3250441966&4294967295,I=T+(y<<22&4294967295|y>>>10),y=g+(P^I&(T^P))+v[4]+4118548399&4294967295,g=I+(y<<7&4294967295|y>>>25),y=P+(T^g&(I^T))+v[5]+1200080426&4294967295,P=g+(y<<12&4294967295|y>>>20),y=T+(I^P&(g^I))+v[6]+2821735955&4294967295,T=P+(y<<17&4294967295|y>>>15),y=I+(g^T&(P^g))+v[7]+4249261313&4294967295,I=T+(y<<22&4294967295|y>>>10),y=g+(P^I&(T^P))+v[8]+1770035416&4294967295,g=I+(y<<7&4294967295|y>>>25),y=P+(T^g&(I^T))+v[9]+2336552879&4294967295,P=g+(y<<12&4294967295|y>>>20),y=T+(I^P&(g^I))+v[10]+4294925233&4294967295,T=P+(y<<17&4294967295|y>>>15),y=I+(g^T&(P^g))+v[11]+2304563134&4294967295,I=T+(y<<22&4294967295|y>>>10),y=g+(P^I&(T^P))+v[12]+1804603682&4294967295,g=I+(y<<7&4294967295|y>>>25),y=P+(T^g&(I^T))+v[13]+4254626195&4294967295,P=g+(y<<12&4294967295|y>>>20),y=T+(I^P&(g^I))+v[14]+2792965006&4294967295,T=P+(y<<17&4294967295|y>>>15),y=I+(g^T&(P^g))+v[15]+1236535329&4294967295,I=T+(y<<22&4294967295|y>>>10),y=g+(T^P&(I^T))+v[1]+4129170786&4294967295,g=I+(y<<5&4294967295|y>>>27),y=P+(I^T&(g^I))+v[6]+3225465664&4294967295,P=g+(y<<9&4294967295|y>>>23),y=T+(g^I&(P^g))+v[11]+643717713&4294967295,T=P+(y<<14&4294967295|y>>>18),y=I+(P^g&(T^P))+v[0]+3921069994&4294967295,I=T+(y<<20&4294967295|y>>>12),y=g+(T^P&(I^T))+v[5]+3593408605&4294967295,g=I+(y<<5&4294967295|y>>>27),y=P+(I^T&(g^I))+v[10]+38016083&4294967295,P=g+(y<<9&4294967295|y>>>23),y=T+(g^I&(P^g))+v[15]+3634488961&4294967295,T=P+(y<<14&4294967295|y>>>18),y=I+(P^g&(T^P))+v[4]+3889429448&4294967295,I=T+(y<<20&4294967295|y>>>12),y=g+(T^P&(I^T))+v[9]+568446438&4294967295,g=I+(y<<5&4294967295|y>>>27),y=P+(I^T&(g^I))+v[14]+3275163606&4294967295,P=g+(y<<9&4294967295|y>>>23),y=T+(g^I&(P^g))+v[3]+4107603335&4294967295,T=P+(y<<14&4294967295|y>>>18),y=I+(P^g&(T^P))+v[8]+1163531501&4294967295,I=T+(y<<20&4294967295|y>>>12),y=g+(T^P&(I^T))+v[13]+2850285829&4294967295,g=I+(y<<5&4294967295|y>>>27),y=P+(I^T&(g^I))+v[2]+4243563512&4294967295,P=g+(y<<9&4294967295|y>>>23),y=T+(g^I&(P^g))+v[7]+1735328473&4294967295,T=P+(y<<14&4294967295|y>>>18),y=I+(P^g&(T^P))+v[12]+2368359562&4294967295,I=T+(y<<20&4294967295|y>>>12),y=g+(I^T^P)+v[5]+4294588738&4294967295,g=I+(y<<4&4294967295|y>>>28),y=P+(g^I^T)+v[8]+2272392833&4294967295,P=g+(y<<11&4294967295|y>>>21),y=T+(P^g^I)+v[11]+1839030562&4294967295,T=P+(y<<16&4294967295|y>>>16),y=I+(T^P^g)+v[14]+4259657740&4294967295,I=T+(y<<23&4294967295|y>>>9),y=g+(I^T^P)+v[1]+2763975236&4294967295,g=I+(y<<4&4294967295|y>>>28),y=P+(g^I^T)+v[4]+1272893353&4294967295,P=g+(y<<11&4294967295|y>>>21),y=T+(P^g^I)+v[7]+4139469664&4294967295,T=P+(y<<16&4294967295|y>>>16),y=I+(T^P^g)+v[10]+3200236656&4294967295,I=T+(y<<23&4294967295|y>>>9),y=g+(I^T^P)+v[13]+681279174&4294967295,g=I+(y<<4&4294967295|y>>>28),y=P+(g^I^T)+v[0]+3936430074&4294967295,P=g+(y<<11&4294967295|y>>>21),y=T+(P^g^I)+v[3]+3572445317&4294967295,T=P+(y<<16&4294967295|y>>>16),y=I+(T^P^g)+v[6]+76029189&4294967295,I=T+(y<<23&4294967295|y>>>9),y=g+(I^T^P)+v[9]+3654602809&4294967295,g=I+(y<<4&4294967295|y>>>28),y=P+(g^I^T)+v[12]+3873151461&4294967295,P=g+(y<<11&4294967295|y>>>21),y=T+(P^g^I)+v[15]+530742520&4294967295,T=P+(y<<16&4294967295|y>>>16),y=I+(T^P^g)+v[2]+3299628645&4294967295,I=T+(y<<23&4294967295|y>>>9),y=g+(T^(I|~P))+v[0]+4096336452&4294967295,g=I+(y<<6&4294967295|y>>>26),y=P+(I^(g|~T))+v[7]+1126891415&4294967295,P=g+(y<<10&4294967295|y>>>22),y=T+(g^(P|~I))+v[14]+2878612391&4294967295,T=P+(y<<15&4294967295|y>>>17),y=I+(P^(T|~g))+v[5]+4237533241&4294967295,I=T+(y<<21&4294967295|y>>>11),y=g+(T^(I|~P))+v[12]+1700485571&4294967295,g=I+(y<<6&4294967295|y>>>26),y=P+(I^(g|~T))+v[3]+2399980690&4294967295,P=g+(y<<10&4294967295|y>>>22),y=T+(g^(P|~I))+v[10]+4293915773&4294967295,T=P+(y<<15&4294967295|y>>>17),y=I+(P^(T|~g))+v[1]+2240044497&4294967295,I=T+(y<<21&4294967295|y>>>11),y=g+(T^(I|~P))+v[8]+1873313359&4294967295,g=I+(y<<6&4294967295|y>>>26),y=P+(I^(g|~T))+v[15]+4264355552&4294967295,P=g+(y<<10&4294967295|y>>>22),y=T+(g^(P|~I))+v[6]+2734768916&4294967295,T=P+(y<<15&4294967295|y>>>17),y=I+(P^(T|~g))+v[13]+1309151649&4294967295,I=T+(y<<21&4294967295|y>>>11),y=g+(T^(I|~P))+v[4]+4149444226&4294967295,g=I+(y<<6&4294967295|y>>>26),y=P+(I^(g|~T))+v[11]+3174756917&4294967295,P=g+(y<<10&4294967295|y>>>22),y=T+(g^(P|~I))+v[2]+718787259&4294967295,T=P+(y<<15&4294967295|y>>>17),y=I+(P^(T|~g))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+P&4294967295}n.prototype.v=function(w,g){g===void 0&&(g=w.length);const I=g-this.blockSize,v=this.C;let T=this.h,P=0;for(;P<g;){if(T==0)for(;P<=I;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<g;)if(v[T++]=w.charCodeAt(P++),T==this.blockSize){s(this,v),T=0;break}}else for(;P<g;)if(v[T++]=w[P++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=g},n.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;g=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=g&255,g/=256;for(this.v(w),w=Array(16),g=0,I=0;I<4;++I)for(let v=0;v<32;v+=8)w[g++]=this.g[I]>>>v&255;return w};function i(w,g){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=g(w)}function o(w,g){this.h=g;const I=[];let v=!0;for(let T=w.length-1;T>=0;T--){const P=w[T]|0;v&&P==g||(I[T]=P,v=!1)}this.g=I}var c={};function u(w){return-128<=w&&w<128?i(w,function(g){return new o([g|0],g<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return M(h(-w));const g=[];let I=1;for(let v=0;w>=I;v++)g[v]=w/I|0,I*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return M(f(w.substring(1),g));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(g,8));let v=m;for(let P=0;P<w.length;P+=8){var T=Math.min(8,w.length-P);const y=parseInt(w.substring(P,P+T),g);T<8?(T=h(Math.pow(g,T)),v=v.j(T).add(h(y))):(v=v.j(I),v=v.add(h(y)))}return v}var m=u(0),_=u(1),R=u(16777216);r=o.prototype,r.m=function(){if(O(this))return-M(this).m();let w=0,g=1;for(let I=0;I<this.g.length;I++){const v=this.i(I);w+=(v>=0?v:4294967296+v)*g,g*=4294967296}return w},r.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(O(this))return"-"+M(this).toString(w);const g=h(Math.pow(w,6));var I=this;let v="";for(;;){const T=le(I,g).g;I=H(I,T.j(g));let P=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=T,C(I))return P+v;for(;P.length<6;)P="0"+P;v=P+v}},r.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function O(w){return w.h==-1}r.l=function(w){return w=H(this,w),O(w)?-1:C(w)?0:1};function M(w){const g=w.g.length,I=[];for(let v=0;v<g;v++)I[v]=~w.g[v];return new o(I,~w.h).add(_)}r.abs=function(){return O(this)?M(this):this},r.add=function(w){const g=Math.max(this.g.length,w.g.length),I=[];let v=0;for(let T=0;T<=g;T++){let P=v+(this.i(T)&65535)+(w.i(T)&65535),y=(P>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);v=y>>>16,P&=65535,y&=65535,I[T]=y<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function H(w,g){return w.add(M(g))}r.j=function(w){if(C(this)||C(w))return m;if(O(this))return O(w)?M(this).j(M(w)):M(M(this).j(w));if(O(w))return M(this.j(M(w)));if(this.l(R)<0&&w.l(R)<0)return h(this.m()*w.m());const g=this.g.length+w.g.length,I=[];for(var v=0;v<2*g;v++)I[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<w.g.length;T++){const P=this.i(v)>>>16,y=this.i(v)&65535,Ye=w.i(T)>>>16,$n=w.i(T)&65535;I[2*v+2*T]+=y*$n,J(I,2*v+2*T),I[2*v+2*T+1]+=P*$n,J(I,2*v+2*T+1),I[2*v+2*T+1]+=y*Ye,J(I,2*v+2*T+1),I[2*v+2*T+2]+=P*Ye,J(I,2*v+2*T+2)}for(w=0;w<g;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=g;w<2*g;w++)I[w]=0;return new o(I,0)};function J(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function Y(w,g){this.g=w,this.h=g}function le(w,g){if(C(g))throw Error("division by zero");if(C(w))return new Y(m,m);if(O(w))return g=le(M(w),g),new Y(M(g.g),M(g.h));if(O(g))return g=le(w,M(g)),new Y(M(g.g),g.h);if(w.g.length>30){if(O(w)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var I=_,v=g;v.l(w)<=0;)I=ce(I),v=ce(v);var T=se(I,1),P=se(v,1);for(v=se(v,2),I=se(I,2);!C(v);){var y=P.add(v);y.l(w)<=0&&(T=T.add(I),P=y),v=se(v,1),I=se(I,1)}return g=H(w,T.j(g)),new Y(T,g)}for(T=m;w.l(g)>=0;){for(I=Math.max(1,Math.floor(w.m()/g.m())),v=Math.ceil(Math.log(I)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),P=h(I),y=P.j(g);O(y)||y.l(w)>0;)I-=v,P=h(I),y=P.j(g);C(P)&&(P=_),T=T.add(P),w=H(w,y)}return new Y(T,w)}r.B=function(w){return le(this,w).h},r.and=function(w){const g=Math.max(this.g.length,w.g.length),I=[];for(let v=0;v<g;v++)I[v]=this.i(v)&w.i(v);return new o(I,this.h&w.h)},r.or=function(w){const g=Math.max(this.g.length,w.g.length),I=[];for(let v=0;v<g;v++)I[v]=this.i(v)|w.i(v);return new o(I,this.h|w.h)},r.xor=function(w){const g=Math.max(this.g.length,w.g.length),I=[];for(let v=0;v<g;v++)I[v]=this.i(v)^w.i(v);return new o(I,this.h^w.h)};function ce(w){const g=w.g.length+1,I=[];for(let v=0;v<g;v++)I[v]=w.i(v)<<1|w.i(v-1)>>>31;return new o(I,w.h)}function se(w,g){const I=g>>5;g%=32;const v=w.g.length-I,T=[];for(let P=0;P<v;P++)T[P]=g>0?w.i(P+I)>>>g|w.i(P+I+1)<<32-g:w.i(P+I);return new o(T,w.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,wm=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,wn=o}).apply(typeof yd<"u"?yd:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Em,Xs,Tm,Oo,Zc,vm,Am,bm;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var d=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var b=a[p];if(!(b in d))break e;d=d[b]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var d=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&d.push([p,l[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,d){return a.call.apply(a.bind,arguments)}function h(a,l,d){return h=u,h.apply(null,arguments)}function f(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function m(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(p,b,V){for(var F=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)F[Z-2]=arguments[Z];return l.prototype[b].apply(p,F)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const l=a.length;if(l>0){const d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function C(a,l){for(let p=1;p<arguments.length;p++){const b=arguments[p];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const V=b.length||0;a.length=d+V;for(let F=0;F<V;F++)a[d+F]=b[F]}else a.push(b)}}class O{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(a){o.setTimeout(()=>{throw a},0)}function H(){var a=w;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class J{constructor(){this.h=this.g=null}add(l,d){const p=Y.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Y=new O(()=>new le,a=>a.reset());class le{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,se=!1,w=new J,g=()=>{const a=Promise.resolve(void 0);ce=()=>{a.then(I)}};function I(){for(var a;a=H();){try{a.h.call(a.g)}catch(d){M(d)}var l=Y;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}se=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Ye(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}m(Ye,T),Ye.prototype.init=function(a,l){const d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ye.Z.h.call(this)},Ye.prototype.h=function(){Ye.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $n="closure_listenable_"+(Math.random()*1e6|0),K_=0;function W_(a,l,d,p,b){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=b,this.key=++K_,this.da=this.fa=!1}function co(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function uo(a,l,d){for(const p in a)l.call(d,a[p],p,a)}function H_(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function lh(a){const l={};for(const d in a)l[d]=a[d];return l}const hh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dh(a,l){let d,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(d in p)a[d]=p[d];for(let V=0;V<hh.length;V++)d=hh[V],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function lo(a){this.src=a,this.g={},this.h=0}lo.prototype.add=function(a,l,d,p,b){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const F=dc(a,l,p,b);return F>-1?(l=a[F],d||(l.fa=!1)):(l=new W_(l,this.src,V,!!p,b),l.fa=d,a.push(l)),l};function hc(a,l){const d=l.type;if(d in a.g){var p=a.g[d],b=Array.prototype.indexOf.call(p,l,void 0),V;(V=b>=0)&&Array.prototype.splice.call(p,b,1),V&&(co(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function dc(a,l,d,p){for(let b=0;b<a.length;++b){const V=a[b];if(!V.da&&V.listener==l&&V.capture==!!d&&V.ha==p)return b}return-1}var fc="closure_lm_"+(Math.random()*1e6|0),mc={};function fh(a,l,d,p,b){if(Array.isArray(l)){for(let V=0;V<l.length;V++)fh(a,l[V],d,p,b);return null}return d=gh(d),a&&a[$n]?a.J(l,d,c(p)?!!p.capture:!1,b):Q_(a,l,d,!1,p,b)}function Q_(a,l,d,p,b,V){if(!l)throw Error("Invalid event type");const F=c(b)?!!b.capture:!!b;let Z=gc(a);if(Z||(a[fc]=Z=new lo(a)),d=Z.add(l,d,p,F,V),d.proxy)return d;if(p=Y_(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)P||(b=F),b===void 0&&(b=!1),a.addEventListener(l.toString(),p,b);else if(a.attachEvent)a.attachEvent(ph(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Y_(){function a(d){return l.call(a.src,a.listener,d)}const l=J_;return a}function mh(a,l,d,p,b){if(Array.isArray(l))for(var V=0;V<l.length;V++)mh(a,l[V],d,p,b);else p=c(p)?!!p.capture:!!p,d=gh(d),a&&a[$n]?(a=a.i,V=String(l).toString(),V in a.g&&(l=a.g[V],d=dc(l,d,p,b),d>-1&&(co(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[V],a.h--)))):a&&(a=gc(a))&&(l=a.g[l.toString()],a=-1,l&&(a=dc(l,d,p,b)),(d=a>-1?l[a]:null)&&pc(d))}function pc(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[$n])hc(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(ph(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=gc(l))?(hc(d,a),d.h==0&&(d.src=null,l[fc]=null)):co(a)}}}function ph(a){return a in mc?mc[a]:mc[a]="on"+a}function J_(a,l){if(a.da)a=!0;else{l=new Ye(l,this);const d=a.listener,p=a.ha||a.src;a.fa&&pc(a),a=d.call(p,l)}return a}function gc(a){return a=a[fc],a instanceof lo?a:null}var _c="__closure_events_fn_"+(Math.random()*1e9>>>0);function gh(a){return typeof a=="function"?a:(a[_c]||(a[_c]=function(l){return a.handleEvent(l)}),a[_c])}function Fe(){v.call(this),this.i=new lo(this),this.M=this,this.G=null}m(Fe,v),Fe.prototype[$n]=!0,Fe.prototype.removeEventListener=function(a,l,d,p){mh(this,a,l,d,p)};function We(a,l){var d,p=a.G;if(p)for(d=[];p;p=p.G)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var b=l;l=new T(p,a),dh(l,b)}b=!0;let V,F;if(d)for(F=d.length-1;F>=0;F--)V=l.g=d[F],b=ho(V,p,!0,l)&&b;if(V=l.g=a,b=ho(V,p,!0,l)&&b,b=ho(V,p,!1,l)&&b,d)for(F=0;F<d.length;F++)V=l.g=d[F],b=ho(V,p,!1,l)&&b}Fe.prototype.N=function(){if(Fe.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let p=0;p<d.length;p++)co(d[p]);delete a.g[l],a.h--}}this.G=null},Fe.prototype.J=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},Fe.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function ho(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let V=0;V<l.length;++V){const F=l[V];if(F&&!F.da&&F.capture==d){const Z=F.listener,ve=F.ha||F.src;F.fa&&hc(a.i,F),b=Z.call(ve,p)!==!1&&b}}return b&&!p.defaultPrevented}function X_(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function _h(a){a.g=X_(()=>{a.g=null,a.i&&(a.i=!1,_h(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Z_ extends v{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:_h(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(a){v.call(this),this.h=a,this.g={}}m(xs,v);var yh=[];function Ih(a){uo(a.g,function(l,d){this.g.hasOwnProperty(d)&&pc(l)},a),a.g={}}xs.prototype.N=function(){xs.Z.N.call(this),Ih(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yc=o.JSON.stringify,ey=o.JSON.parse,ty=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function wh(){}function Eh(){}var Cs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ic(){T.call(this,"d")}m(Ic,T);function wc(){T.call(this,"c")}m(wc,T);var jn={},Th=null;function fo(){return Th=Th||new Fe}jn.Ia="serverreachability";function vh(a){T.call(this,jn.Ia,a)}m(vh,T);function Ns(a){const l=fo();We(l,new vh(l))}jn.STAT_EVENT="statevent";function Ah(a,l){T.call(this,jn.STAT_EVENT,a),this.stat=l}m(Ah,T);function He(a){const l=fo();We(l,new Ah(l,a))}jn.Ja="timingevent";function bh(a,l){T.call(this,jn.Ja,a),this.size=l}m(bh,T);function Ds(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function ks(){this.g=!0}ks.prototype.ua=function(){this.g=!1};function ny(a,l,d,p,b,V){a.info(function(){if(a.g)if(V){var F="",Z=V.split("&");for(let he=0;he<Z.length;he++){var ve=Z[he].split("=");if(ve.length>1){const Ve=ve[0];ve=ve[1];const wt=Ve.split("_");F=wt.length>=2&&wt[1]=="type"?F+(Ve+"="+ve+"&"):F+(Ve+"=redacted&")}}}else F=null;else F=V;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+d+`
`+F})}function ry(a,l,d,p,b,V,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+d+`
`+V+" "+F})}function Pr(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+iy(a,d)+(p?" "+p:"")})}function sy(a,l){a.info(function(){return"TIMEOUT: "+l})}ks.prototype.info=function(){};function iy(a,l){if(!a.g)return l;if(!l)return null;try{const V=JSON.parse(l);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var b=p[0];if(b!="noop"&&b!="stop"&&b!="close")for(let F=1;F<p.length;F++)p[F]=""}}}}return yc(V)}catch{return l}}var mo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ph={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Rh;function Ec(){}m(Ec,wh),Ec.prototype.g=function(){return new XMLHttpRequest},Rh=new Ec;function Os(a){return encodeURIComponent(String(a))}function oy(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function nn(a,l,d,p){this.j=a,this.i=l,this.l=d,this.S=p||1,this.V=new xs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var Sh={},Tc={};function vc(a,l,d){a.M=1,a.A=go(It(l)),a.u=d,a.R=!0,xh(a,null)}function xh(a,l){a.F=Date.now(),po(a),a.B=It(a.A);var d=a.B,p=a.S;Array.isArray(p)||(p=[String(p)]),jh(d.i,"t",p),a.C=0,d=a.j.L,a.h=new Vh,a.g=ad(a.j,d?l:null,!a.u),a.P>0&&(a.O=new Z_(h(a.Y,a,a.g),a.P)),l=a.V,d=a.g,p=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(yh[0]=b.toString()),b=yh);for(let V=0;V<b.length;V++){const F=fh(d,b[V],p||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=a.J?lh(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Ns(),ny(a.i,a.v,a.B,a.l,a.S,a.u)}nn.prototype.ba=function(a){a=a.target;const l=this.O;l&&on(a)==3?l.j():this.Y(a)},nn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=on(this.g),ve=this.g.ya(),he=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Yh(this.g)))){this.K||Z!=4||ve==7||(ve==8||he<=0?Ns(3):Ns(2)),Ac(this);var l=this.g.ca();this.X=l;var d=ay(this);if(this.o=l==200,ry(this.i,this.v,this.B,this.l,this.S,Z,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,b=this.g;if((p=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var V=p;break t}}V=null}if(a=V)Pr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bc(this,a);else{this.o=!1,this.m=3,He(12),zn(this),Ls(this);break e}}if(this.R){a=!0;let Ve;for(;!this.K&&this.C<d.length;)if(Ve=cy(this,d),Ve==Tc){Z==4&&(this.m=4,He(14),a=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ve==Sh){this.m=4,He(15),Pr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Pr(this.i,this.l,Ve,null),bc(this,Ve);if(Ch(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,He(16),a=!1),this.o=this.o&&a,!a)Pr(this.i,this.l,d,"[Invalid Chunked Response]"),zn(this),Ls(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Dc(F),F.P=!0,He(11))}}else Pr(this.i,this.l,d,null),bc(this,d);Z==4&&zn(this),this.o&&!this.K&&(Z==4?rd(this.j,this):(this.o=!1,po(this)))}else Ty(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,He(12)):(this.m=0,He(13)),zn(this),Ls(this)}}}catch{}finally{}};function ay(a){if(!Ch(a))return a.g.la();const l=Yh(a.g);if(l==="")return"";let d="";const p=l.length,b=on(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return zn(a),Ls(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<p;V++)a.h.h=!0,d+=a.h.i.decode(l[V],{stream:!(b&&V==p-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function Ch(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function cy(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?Tc:(d=Number(l.substring(d,p)),isNaN(d)?Sh:(p+=1,p+d>l.length?Tc:(l=l.slice(p,p+d),a.C=p+d,l)))}nn.prototype.cancel=function(){this.K=!0,zn(this)};function po(a){a.T=Date.now()+a.H,Nh(a,a.H)}function Nh(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ds(h(a.aa,a),l)}function Ac(a){a.D&&(o.clearTimeout(a.D),a.D=null)}nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(sy(this.i,this.B),this.M!=2&&(Ns(),He(17)),zn(this),this.m=2,Ls(this)):Nh(this,this.T-a)};function Ls(a){a.j.I==0||a.K||rd(a.j,a)}function zn(a){Ac(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Ih(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function bc(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||Pc(d.h,a))){if(!a.L&&Pc(d.h,a)&&d.I==3){try{var p=d.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Eo(d),Io(d);else break e;Nc(d),He(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ds(h(d.Va,d),6e3));Oh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Kn(d,11)}else if((a.L||d.g==a)&&Eo(d),!y(l))for(b=d.Ba.g.parse(l),l=0;l<b.length;l++){let he=b[l];const Ve=he[0];if(!(Ve<=d.K))if(d.K=Ve,he=he[1],d.I==2)if(he[0]=="c"){d.M=he[1],d.ba=he[2];const wt=he[3];wt!=null&&(d.ka=wt,d.j.info("VER="+d.ka));const Wn=he[4];Wn!=null&&(d.za=Wn,d.j.info("SVER="+d.za));const an=he[5];an!=null&&typeof an=="number"&&an>0&&(p=1.5*an,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const cn=a.g;if(cn){const vo=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var V=p.h;V.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Rc(V,V.h),V.h=null))}if(p.G){const kc=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;kc&&(p.wa=kc,me(p.J,p.G,kc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var F=a;if(p.na=od(p,p.L?p.ba:null,p.W),F.L){Lh(p.h,F);var Z=F,ve=p.O;ve&&(Z.H=ve),Z.D&&(Ac(Z),po(Z)),p.g=F}else td(p);d.i.length>0&&wo(d)}else he[0]!="stop"&&he[0]!="close"||Kn(d,7);else d.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Kn(d,7):Cc(d):he[0]!="noop"&&d.l&&d.l.qa(he),d.A=0)}}Ns(4)}catch{}}var uy=class{constructor(a,l){this.g=a,this.map=l}};function Dh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Oh(a){return a.h?1:a.g?a.g.size:0}function Pc(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Rc(a,l){a.g?a.g.add(l):a.h=l}function Lh(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Dh.prototype.cancel=function(){if(this.i=Mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Mh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return R(a.i)}var Uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ly(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const p=a[d].indexOf("=");let b,V=null;p>=0?(b=a[d].substring(0,p),V=a[d].substring(p+1)):b=a[d],l(b,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function rn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof rn?(this.l=a.l,Ms(this,a.j),this.o=a.o,this.g=a.g,Us(this,a.u),this.h=a.h,Vc(this,zh(a.i)),this.m=a.m):a&&(l=String(a).match(Uh))?(this.l=!1,Ms(this,l[1]||"",!0),this.o=Fs(l[2]||""),this.g=Fs(l[3]||"",!0),Us(this,l[4]),this.h=Fs(l[5]||"",!0),Vc(this,l[6]||"",!0),this.m=Fs(l[7]||"")):(this.l=!1,this.i=new qs(null,this.l))}rn.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Bs(l,Fh,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Bs(l,Fh,!0),"@"),a.push(Os(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Bs(d,d.charAt(0)=="/"?fy:dy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Bs(d,py)),a.join("")},rn.prototype.resolve=function(a){const l=It(this);let d=!!a.j;d?Ms(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var p=a.h;if(d)Us(l,a.u);else if(d=!!a.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var b=l.h.lastIndexOf("/");b!=-1&&(p=l.h.slice(0,b+1)+p)}if(b=p,b==".."||b==".")p="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){p=b.lastIndexOf("/",0)==0,b=b.split("/");const V=[];for(let F=0;F<b.length;){const Z=b[F++];Z=="."?p&&F==b.length&&V.push(""):Z==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),p&&F==b.length&&V.push("")):(V.push(Z),p=!0)}p=V.join("/")}else p=b}return d?l.h=p:d=a.i.toString()!=="",d?Vc(l,zh(a.i)):d=!!a.m,d&&(l.m=a.m),l};function It(a){return new rn(a)}function Ms(a,l,d){a.j=d?Fs(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Us(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Vc(a,l,d){l instanceof qs?(a.i=l,gy(a.i,a.l)):(d||(l=Bs(l,my)),a.i=new qs(l,a.l))}function me(a,l,d){a.i.set(l,d)}function go(a){return me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fs(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bs(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,hy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fh=/[#\/\?@]/g,dy=/[#\?:]/g,fy=/[#\?]/g,my=/[#\?@]/g,py=/#/g;function qs(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&ly(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=qs.prototype,r.add=function(a,l){Gn(this),this.i=null,a=Rr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Bh(a,l){Gn(a),l=Rr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function qh(a,l){return Gn(a),l=Rr(a,l),a.g.has(l)}r.forEach=function(a,l){Gn(this),this.g.forEach(function(d,p){d.forEach(function(b){a.call(l,b,p,this)},this)},this)};function $h(a,l){Gn(a);let d=[];if(typeof l=="string")qh(a,l)&&(d=d.concat(a.g.get(Rr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}r.set=function(a,l){return Gn(this),this.i=null,a=Rr(this,a),qh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=$h(this,a),a.length>0?String(a[0]):l):l};function jh(a,l,d){Bh(a,l),d.length>0&&(a.i=null,a.g.set(Rr(a,l),R(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var d=l[p];const b=Os(d);d=$h(this,d);for(let V=0;V<d.length;V++){let F=b;d[V]!==""&&(F+="="+Os(d[V])),a.push(F)}}return this.i=a.join("&")};function zh(a){const l=new qs;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Rr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function gy(a,l){l&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,p){const b=p.toLowerCase();p!=b&&(Bh(this,p),jh(this,b,d))},a)),a.j=l}function _y(a,l){const d=new ks;if(o.Image){const p=new Image;p.onload=f(sn,d,"TestLoadImage: loaded",!0,l,p),p.onerror=f(sn,d,"TestLoadImage: error",!1,l,p),p.onabort=f(sn,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=f(sn,d,"TestLoadImage: timeout",!1,l,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function yy(a,l){const d=new ks,p=new AbortController,b=setTimeout(()=>{p.abort(),sn(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(V=>{clearTimeout(b),V.ok?sn(d,"TestPingServer: ok",!0,l):sn(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),sn(d,"TestPingServer: error",!1,l)})}function sn(a,l,d,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(d)}catch{}}function Iy(){this.g=new ty}function Sc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Sc,wh),Sc.prototype.g=function(){return new _o(this.i,this.h)};function _o(a,l){Fe.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(_o,Fe),r=_o.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,js(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Gh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Gh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?$s(this):js(this),this.readyState==3&&Gh(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,$s(this))},r.Na=function(a){this.g&&(this.response=a,$s(this))},r.ga=function(){this.g&&$s(this)};function $s(a){a.readyState=4,a.l=null,a.j=null,a.B=null,js(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kh(a){let l="";return uo(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function xc(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Kh(d),typeof a=="string"?d!=null&&Os(d):me(a,l,d))}function pe(a){Fe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(pe,Fe);var wy=/^https?$/i,Ey=["POST","PUT"];r=pe.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Rh.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(V){Wh(this,V);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)d.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const V of p.keys())d.set(V,p.get(V));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Ey,l,void 0)>=0)||p||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,F]of d)this.g.setRequestHeader(V,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Wh(this,V)}};function Wh(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Hh(a),yo(a)}function Hh(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,We(this,"complete"),We(this,"abort"),yo(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yo(this,!0)),pe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Qh(this):this.Xa())},r.Xa=function(){Qh(this)};function Qh(a){if(a.h&&typeof i<"u"){if(a.v&&on(a)==4)setTimeout(a.Ca.bind(a),0);else if(We(a,"readystatechange"),on(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=V===0){let F=String(a.D).match(Uh)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),p=!wy.test(F?F.toLowerCase():"")}d=p}if(d)We(a,"complete"),We(a,"success");else{a.o=6;try{var b=on(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",Hh(a)}}finally{yo(a)}}}}function yo(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||We(a,"ready");try{d.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function on(a){return a.g?a.g.readyState:0}r.ca=function(){try{return on(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),ey(l)}};function Yh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ty(a){const l={};a=(a.g&&on(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(y(a[p]))continue;var d=oy(a[p]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=l[b]||[];l[b]=V,V.push(d)}H_(l,function(p){return p.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Jh(a){this.za=0,this.i=[],this.j=new ks,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zs("baseRetryDelayMs",5e3,a),this.Za=zs("retryDelaySeedMs",1e4,a),this.Ta=zs("forwardChannelMaxRetries",2,a),this.va=zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Dh(a&&a.concurrentRequestLimit),this.Ba=new Iy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Jh.prototype,r.ka=8,r.I=1,r.connect=function(a,l,d,p){He(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=od(this,null,this.W),wo(this)};function Cc(a){if(Xh(a),a.I==3){var l=a.V++,d=It(a.J);if(me(d,"SID",a.M),me(d,"RID",l),me(d,"TYPE","terminate"),Gs(a,d),l=new nn(a,a.j,l),l.M=2,l.A=go(It(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=ad(l.j,null),l.g.ea(l.A)),l.F=Date.now(),po(l)}id(a)}function Io(a){a.g&&(Dc(a),a.g.cancel(),a.g=null)}function Xh(a){Io(a),a.v&&(o.clearTimeout(a.v),a.v=null),Eo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wo(a){if(!kh(a.h)&&!a.m){a.m=!0;var l=a.Ea;ce||g(),se||(ce(),se=!0),w.add(l,a),a.D=0}}function vy(a,l){return Oh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ds(h(a.Ea,a,l),sd(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new nn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=lh(V),dh(V,this.U)):V=this.U),this.u!==null||this.R||(b.J=V,V=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=ed(this,b,l),d=It(this.J),me(d,"RID",a),me(d,"CVER",22),this.G&&me(d,"X-HTTP-Session-Id",this.G),Gs(this,d),V&&(this.R?l="headers="+Os(Kh(V))+"&"+l:this.u&&xc(d,this.u,V)),Rc(this.h,b),this.Ra&&me(d,"TYPE","init"),this.S?(me(d,"$req",l),me(d,"SID","null"),b.U=!0,vc(b,d,null)):vc(b,d,l),this.I=2}}else this.I==3&&(a?Zh(this,a):this.i.length==0||kh(this.h)||Zh(this))};function Zh(a,l){var d;l?d=l.l:d=a.V++;const p=It(a.J);me(p,"SID",a.M),me(p,"RID",d),me(p,"AID",a.K),Gs(a,p),a.u&&a.o&&xc(p,a.u,a.o),d=new nn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=ed(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Rc(a.h,d),vc(d,p,l)}function Gs(a,l){a.H&&uo(a.H,function(d,p){me(l,p,d)}),a.l&&uo({},function(d,p){me(l,p,d)})}function ed(a,l,d){d=Math.min(a.i.length,d);const p=a.l?h(a.l.Ka,a.l,a):null;e:{var b=a.i;let Z=-1;for(;;){const ve=["count="+d];Z==-1?d>0?(Z=b[0].g,ve.push("ofs="+Z)):Z=0:ve.push("ofs="+Z);let he=!0;for(let Ve=0;Ve<d;Ve++){var V=b[Ve].g;const wt=b[Ve].map;if(V-=Z,V<0)Z=Math.max(0,b[Ve].g-100),he=!1;else try{V="req"+V+"_"||"";try{var F=wt instanceof Map?wt:Object.entries(wt);for(const[Wn,an]of F){let cn=an;c(an)&&(cn=yc(an)),ve.push(V+Wn+"="+encodeURIComponent(cn))}}catch(Wn){throw ve.push(V+"type="+encodeURIComponent("_badmap")),Wn}}catch{p&&p(wt)}}if(he){F=ve.join("&");break e}}F=void 0}return a=a.i.splice(0,d),l.G=a,F}function td(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;ce||g(),se||(ce(),se=!0),w.add(l,a),a.A=0}}function Nc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ds(h(a.Da,a),sd(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,nd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ds(h(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,He(10),Io(this),nd(this))};function Dc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function nd(a){a.g=new nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=It(a.na);me(l,"RID","rpc"),me(l,"SID",a.M),me(l,"AID",a.K),me(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&me(l,"TO",a.ia),me(l,"TYPE","xmlhttp"),Gs(a,l),a.u&&a.o&&xc(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=go(It(l)),d.u=null,d.R=!0,xh(d,a)}r.Va=function(){this.C!=null&&(this.C=null,Io(this),Nc(this),He(19))};function Eo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function rd(a,l){var d=null;if(a.g==l){Eo(a),Dc(a),a.g=null;var p=2}else if(Pc(a.h,l))d=l.G,Lh(a.h,l),p=1;else return;if(a.I!=0){if(l.o)if(p==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;p=fo(),We(p,new bh(p,d)),wo(a)}else td(a);else if(b=l.m,b==3||b==0&&l.X>0||!(p==1&&vy(a,l)||p==2&&Nc(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),b){case 1:Kn(a,5);break;case 4:Kn(a,10);break;case 3:Kn(a,6);break;default:Kn(a,2)}}}function sd(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function Kn(a,l){if(a.j.info("Error code "+l),l==2){var d=h(a.bb,a),p=a.Ua;const b=!p;p=new rn(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ms(p,"https"),go(p),b?_y(p.toString(),d):yy(p.toString(),d)}else He(2);a.I=0,a.l&&a.l.pa(l),id(a),Xh(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function id(a){if(a.I=0,a.ja=[],a.l){const l=Mh(a.h);(l.length!=0||a.i.length!=0)&&(C(a.ja,l),C(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function od(a,l,d){var p=d instanceof rn?It(d):new rn(d);if(p.g!="")l&&(p.g=l+"."+p.g),Us(p,p.u);else{var b=o.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const V=new rn(null);p&&Ms(V,p),l&&(V.g=l),b&&Us(V,b),d&&(V.h=d),p=V}return d=a.G,l=a.wa,d&&l&&me(p,d,l),me(p,"VER",a.ka),Gs(a,p),p}function ad(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new pe(new Sc({ab:d})):new pe(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function cd(){}r=cd.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function To(){}To.prototype.g=function(a,l){return new tt(a,l)};function tt(a,l){Fe.call(this),this.g=new Jh(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!y(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Vr(this)}m(tt,Fe),tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){Cc(this.g)},tt.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=yc(a),a=d);l.i.push(new uy(l.Ya++,a)),l.I==3&&wo(l)},tt.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,tt.Z.N.call(this)};function ud(a){Ic.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}m(ud,Ic);function ld(){wc.call(this),this.status=1}m(ld,wc);function Vr(a){this.g=a}m(Vr,cd),Vr.prototype.ra=function(){We(this.g,"a")},Vr.prototype.qa=function(a){We(this.g,new ud(a))},Vr.prototype.pa=function(a){We(this.g,new ld)},Vr.prototype.oa=function(){We(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,bm=function(){return new To},Am=function(){return fo()},vm=jn,Zc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,Oo=mo,Ph.COMPLETE="complete",Tm=Ph,Eh.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",Fe.prototype.listen=Fe.prototype.J,Xs=Eh,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,Em=pe}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="13.3.0";function KI(r){Is=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Ou("@firebase/firestore");function Lr(){return gr.logLevel}function N(r,...e){if(gr.logLevel<=te.DEBUG){const t=e.map(Mu);gr.debug(`Firestore (${Is}): ${r}`,...t)}}function ye(r,...e){if(gr.logLevel<=te.ERROR){const t=e.map(Mu);gr.error(`Firestore (${Is}): ${r}`,...t)}}function yt(r,...e){if(gr.logLevel<=te.WARN){const t=e.map(Mu);gr.warn(`Firestore (${Is}): ${r}`,...t)}}function Mu(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Pm(r,n,t)}function Pm(r,e,t){let n=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ye(n),new Error(n)}function k(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Pm(e,s,n)}function q(r,e){return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=WI(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function W(r,e){return r<e?-1:r>e?1:0}function Ii(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Mc(s)===Mc(i)?W(s,i):Mc(s)?1:-1}return W(r.length,e.length)}const HI=55296,QI=57343;function Mc(r){const e=r.charCodeAt(0);return e>=HI&&e<=QI}function Hr(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function Rm(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Oe(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Id(this.data.getIterator())}getIteratorFrom(e){return new Id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new oe(this.comparator);return t.data=e,t}}class Id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Sr(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="__name__";class Et{constructor(e,t,n){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&B(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Et?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Et.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return W(e.length,t.length)}static compareSegments(e,t){const n=Et.isNumericId(e),s=Et.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Et.extractNumericId(e).compare(Et.extractNumericId(t)):Ii(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wn.fromString(e.substring(4,e.length-2))}}class ee extends Et{construct(e,t,n){return new ee(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const YI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let be=class Mr extends Et{construct(e,t,n){return new Mr(e,t,n)}static isValidIdentifier(e){return YI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vt}static keyField(){return new Mr([vt])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mr(t)}static emptyPath(){return new Mr([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Je([])}unionWith(e){let t=new oe(be.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function On(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function JI(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function Vm(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ee.fromString(e))}static fromName(e){return new U(ee.fromString(e).popFirst(5))}static empty(){return new U(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(r,e,t){if(!t)throw new D(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function XI(r,e,t,n){if(e===!0&&n===!0)throw new D(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function wd(r){if(!U.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ed(r){if(U.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Gi(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Sa(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":B(12329,{type:typeof r})}function An(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sa(r);throw new D(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(r,e){const t={typeString:r};return e&&(t.value=e),t}function Ki(r,e){if(!Gi(r))throw new D(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0,o=e[n].optional;if(!(n in r)){if(o)continue;t=`JSON missing required field: '${n}'`;break}const c=r[n];if(s&&typeof c!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&c!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new D(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=-62135596800,vd=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*vd);return new ie(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new D(S.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return ie._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(s+1000000000n))}return new ie(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Td)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vd}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new D(S.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ki(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Td;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:Ie("string",ie._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xm("Invalid base64 string: "+i):i}})(e);return new ue(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const ZI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(r){if(k(!!r,39018),typeof r=="string"){let e=0;const t=ZI.exec(r);if(k(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function pt(r){return typeof r=="string"?ue.fromBase64String(r):ue.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="server_timestamp",Nm="__type__",Dm="__previous_value__",km="__local_write_time__";function Fu(r){return(r?.mapValue?.fields||{})[Nm]?.stringValue===Cm}function Wi(r){const e=r.mapValue.fields[Dm];return Fu(e)?Wi(e):e}function Qr(r){const e=Kt(r.mapValue.fields[km].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t,n,s,i,o,c,u,h,f,m,_,R){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m,this._customHeaders=_,this.grpcFlowControlWindow=R}}const ea="(default)";class bn{constructor(e,t){this.projectId=e,this.database=t||ea}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database===ea}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}function tw(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(r.options.projectId,e)}/**
 * Copyright 2021 M.Vokhmentsev
 *
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.exponent=0,this.i=0n,this.o=0n,this.u=new Array(4).fill(0n),this.l=new Array(6).fill(0n),this.h=new Array(6).fill(0n),this.T=new Array(6).fill(0n),this.P=new Array(12).fill(0n)}static I(e,t){let n=new G;return n.parse(e,t),n}parse(e,t){t+=e.length-1,this.exponent=0,this.i=0n,this.o=0n;let n=this.T,s=this.R(e,n);if(s==0&&this.isEmpty(n)||(t+=s)<G.A)return;if(t>G.V)return void(this.exponent=Number(G.m));let i=this.p(t,n);this.S(t,i,n)}R(e,t){for(let i=0;i<6;i++)t[i]=0n;let n=0;for(;n<e.length&&e[n]==0;)n+=1;if(n==e.length)return 0;let s=-n;if(e.length-n>G.v){let i=e[G.v]>=5,o=new Array(G.v).fill(0);for(let c=0;c<G.v;c++)o[c]=e[c+n];i&&(s+=this.D(o)),e=o,n=0}for(let i=e.length-1;i>=n;i--)t[0]|=BigInt(e[i])<<32n,this.C(t);return s}C(e){let t=e.length;for(let n=0;n<t;n++){let s=e[n]%10n;e[n]=e[n]/10n,n+1<t&&(e[n+1]+=s<<32n)}}isEmpty(e){for(let t=0;t<e.length;t++)if(e[t]!=0n)return!1;return!0}D(e){for(let t=e.length-1;t>=0;t--){if(e[t]!=9)return e[t]=e[t]+1,0;e[t]=0}return e[0]=1,1}p(e,t){let n=t[0]<<31n|t[1]>>1n,s=Number(n)/G.F;return Math.floor(Number(e)*G.O+this.log2(s))}log2(e){return G.M*Math.log(e)}S(e,t,n){let s=this.u;this.N(-t,s);let i=this.P;this.B(n,s,i),this.L(i),BigInt(s[0])!=BigInt(-e)&&this.L(i),t+=this.$(i),(t+=G.U)<=0||(t+=this.k(i),BigInt(t)>=G.m?this.exponent=Number(G.m):(this.exponent=Number(t),this.i=(i[0]<<32n)+i[1]&0xffffffffffffffffn,this.o=(i[2]<<32n)+i[3]&0xffffffffffffffffn))}N(e,t){if(e==0)return void this.q(G.K[0],t);let n=G.K;e<0&&(e=-e,n=G.W);let s=G.G,i=32,o=!0;for(;e>0;)e>=s&&(o?(this.q(n[i],t),o=!1):this.j(t,n[i],t),e-=s),i-=1,s*=.5}q(e,t){for(let n=0;n<t.length;n++)t[n]=e[n]}j(e,t,n){this.H(e,t,this.P);let s=this.J(this.P);this.Y(this.P,n),n[0]=e[0]+t[0]+BigInt(s)}H(e,t,n){for(let s=0;s<n.length;s++)n[s]=0n;this.Z(e,this.l),this.Z(t,this.h);for(let s=5;s>=0;s--)for(let i=5;i>=0;i--){let o=this.l[s]*this.h[i];n[i+s+1]=n[i+s+1]+(o&G.X)&0xffffffffffffffffn,n[i+s]=n[i+s]+(o>>32n)&0xffffffffffffffffn}for(let s=11;s>=1;s--)n[s-1]=n[s-1]+(n[s]>>32n)&0xffffffffffffffffn,n[s]&=G.X}J(e){let t=0;for(;this.ee(e);)this.L(e),t-=1;return t}ee(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let t=1;t<e.length;t++){if(e[t]<0x99999999n)return!0;if(e[t]>0x99999999n)return!1}return!1}B(e,t,n){for(let o=0;o<n.length;o++)n[o]=0n;let s=this.h;this.Z(t,s);let i=e.length;for(let o=i-1;o>=0;o--)for(let c=i-1;c>=0;c--){let u=e[o]*s[c];n[c+o+1]=n[c+o+1]+(u&G.X)&0xffffffffffffffffn,n[c+o]=n[c+o]+(u>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)n[o-1]=n[o-1]+(n[o]>>32n)&0xffffffffffffffffn,n[o]&=G.X}L(e){let t=e.length-1;e[0]&=G.X,e[t]*=10n;for(let n=t-1;n>=0;n--)e[n]=10n*e[n]+(e[n+1]>>32n)&0xffffffffffffffffn,e[n+1]&=G.X}$(e){let t=31-G.te(e[0]);return t!=0&&this.ne(e,t),t}k(e){return this.re(e,5,100n),this.re(e,4,0x80000000n),(e[0]&G.ie<<1n)!=0n?(this.ne(e,1),1):0}Y(e,t){t[1]=(e[0]<<32n)+e[1],t[2]=(e[2]<<32n)+e[3],t[3]=(e[4]<<32n)+e[5]}Z(e,t){t[0]=e[1]>>32n,t[1]=e[1]&G.X,t[2]=e[2]>>32n,t[3]=e[2]&G.X,t[4]=e[3]>>32n,t[5]=e[3]&G.X}ne(e,t){let n=e.length-1,s=BigInt(32-Math.abs(t));if(t>0){let i=BigInt(t);for(let o=n+1-1;o>=1;o--)e[o]=e[o]>>i|e[o-1]<<s&G.X;e[0]=e[0]>>i}else if(t<0){let i=BigInt(-t);e[0]=0xffffffffffffffffn&(e[0]<<i|e[1]>>s);for(let o=1;o<n;o++)e[o]=0xffffffffffffffffn&(e[o]<<i&G.X|e[o+1]>>s);e[n]=e[n]<<i&G.X}}re(e,t,n){let s=t;e[s]=e[s]+n&0xffffffffffffffffn;for(let i=s+1-1;i>=1&&(e[i]&G.ie)!=0n;i--)e[i]&=G.X,e[i-1]+=1n}static te(e){let t=Number(e>>32n);return t==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,qr,eu,Lo,Mo,Zs;G.v=59,G.V=646456993,G.A=-646457032,G.F=0xccccccccccccd00,G.se=0x8000000000000000n,G.G=2147483648,G.X=0x00000000ffffffffn,G.ie=0xffffffff00000000n,G.O=Math.log(10)/Math.log(2),G.M=1/Math.log(2),G.U=2147483647,G.m=0xffffffffn,G.K=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],G.W=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class ${constructor(e,t,n,s){this.negative=e,this._e=t,this.i=n,this.o=s}exponent(){return this._e-G.U}oe(){return this._e===0&&this.i===0n&&this.o===0n}ae(){return this._e===ke($,Se,"f",qr)&&this.i===0n&&this.o===0n}isNaN(){return this._e===ke($,Se,"f",qr)&&!(this.i===0n&&this.o===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let t,n;if(this.negative){if(!e.negative)return-1;t=1,n=-1}else{if(e.negative)return 1;t=-1,n=1}return this._e<e._e?t:this._e>e._e?n:this.i<e.i?t:this.i>e.i?n:this.o<e.o?t:this.o>e.o?n:0}debug(){return(this.negative?"+":"-")+ke($,Se,"m",eu).call($,this.i)+ke($,Se,"m",eu).call($,this.o)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return $.NaN;if(!isFinite(e))return e<0?$.ue:$.ce;if(e===0)return Math.sign(1/e)>0?$.le:$.Ee;const t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);const n=t.getBigUint64(0);let s=BigInt.asUintN(64,n<<12n),i=2047&Number(n>>52n);if(i===0){const o=G.te(s);s=o<63?s<<BigInt(o+1):0n,i=-o}return new $(e<0,ke($,Se,"m",Zs).call($,i-1023),s,0n)}static fromString(e){if(e==="NaN")return $.NaN;if(e==="-Infinity")return $.ue;if(e==="Infinity"||e==="+Infinity")return $.ce;const t=new Array(e.length).fill(0);let n=0,s=0,i=0,o=!1;for(e[n]==="-"?(o=!0,n++):e[n]==="+"&&n++;ke($,Se,"m",Lo).call($,e,n);)t[s++]=ke($,Se,"m",Mo).call($,e,n++);if(e[n]==="."){const u=++n;for(;ke($,Se,"m",Lo).call($,e,n);)t[s++]=ke($,Se,"m",Mo).call($,e,n++);i=u-n}if(e[n]==="e"||e[n]==="E"){let u=0;n++;let h=1;e[n]==="-"?(h=-1,n++):e[n]==="+"&&n++;const f=n;for(;ke($,Se,"m",Lo).call($,e,n);)if(u=10*u+ke($,Se,"m",Mo).call($,e,n++),n-f>9)throw new Error("Exponent too large "+e);if(n===f)throw new Error("Invalid number "+e);i+=u*h}if(s===0||n!==e.length)throw new Error("Invalid number "+e);const c=G.I(t.slice(0,s),i);return new $(o,c.exponent,c.i,c.o)}}Se=$,eu=function(e){return e.toString(16).padStart(16,"0")},Lo=function(e,t){const n=e.codePointAt(t);return n!==void 0&&n>=48&&n<=57},Mo=function(e,t){return e.codePointAt(t)-48},Zs=function(e){return e+G.U},qr={value:Number(G.m)},$.le=new $(!1,0,0n,0n),$.Ee=new $(!0,0,0n,0n),$.NaN=new $(!1,ke($,Se,"f",qr),1n<<63n,0n),$.ue=new $(!0,ke($,Se,"f",qr),0n,0n),$.ce=new $(!1,ke($,Se,"f",qr),0n,0n),new $(!0,ke($,Se,"m",Zs).call($,63),0n,0n),new $(!1,ke($,Se,"m",Zs).call($,0),0n,0n),new $(!0,ke($,Se,"m",Zs).call($,0),0n,0n);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=-1;function xa(r){return r==null}function Yr(r){return r===0&&1/r==-1/0}function Om(r){return typeof r=="number"&&Number.isInteger(r)&&!Yr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function tu(r){return typeof r=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="__type__",Na="__vector__",yr="value",nw="server_timestamp",Bu="__min__",Hi="__max__",At="__regex__",Jr="pattern",Xr="options",Ir="__oid__",Ln="__int__",Wt="__decimal128__",Ut="__request_timestamp__",wi="seconds",Ei="increment",Zr="__binary__",Ht={nullValue:"NULL_VALUE"},nr={mapValue:{fields:{__type__:{stringValue:Hi}}}},Lm={mapValue:{fields:{[Ca]:{stringValue:Na},[yr]:{arrayValue:{}}}}},qu={mapValue:{fields:{[Bu]:{nullValue:"NULL_VALUE"}}}},$u={mapValue:{fields:{[Hi]:{nullValue:"NULL_VALUE"}}}},Mm={mapValue:{fields:{[Ir]:{stringValue:""}}}},Um={mapValue:{fields:{[Ut]:{mapValue:{fields:{[wi]:{integerValue:0},[Ei]:{integerValue:0}}}}}}},Fm={mapValue:{fields:{[At]:{mapValue:{fields:{[Jr]:{stringValue:""},[Xr]:{stringValue:""}}}}}}};var z,ut;(ut=z||(z={})).he="regexValue",ut.Te="bsonObjectIdValue",ut.Pe="int32Value",ut.Ie="decimal128Value",ut.Re="bsonTimestampValue",ut.Ae="bsonBinaryValue",ut.Ve="minKeyValue",ut.de="maxKeyValue",ut.fe="maxValue",ut.me="vectorValue",ut.pe="serverTimestampValue",ut.ge="regularMapValue";const Ad={[Na]:z.me,[Hi]:z.fe,[nw]:z.pe},Bm={[At]:z.he,[Ir]:z.Te,[Ln]:z.Pe,[Wt]:z.Ie,[Ut]:z.Re,[Zr]:z.Ae,[Bu]:z.Ve,[Hi]:z.de},rw=new Set(Object.values(Bm)),et={booleanValue:!0},Ce={booleanValue:!1};function Te(r){if("nullValue"in r)return 0;if("booleanValue"in r)return 2;if("integerValue"in r||"doubleValue"in r)return 3;if("timestampValue"in r)return 4;if("stringValue"in r)return 7;if("bytesValue"in r)return 8;if("referenceValue"in r)return 9;if("geoPointValue"in r)return 11;if("arrayValue"in r)return 13;if(!("mapValue"in r))return B(28295,{value:r});switch(Qi(r)){case z.pe:return 6;case z.fe:return 9007199254740991;case z.me:return 14;case z.he:return 12;case z.Te:return 10;case z.Pe:case z.Ie:return 3;case z.Re:return 5;case z.Ae:return 8;case z.Ve:return 1;case z.de:return 16;default:return 15}}function ht(r,e,t){if(r===e)return!0;const n=Te(r);if(n!==Te(e))return!1;switch(n){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return r.booleanValue===e.booleanValue;case 6:return Qr(r).isEqual(Qr(e));case 4:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=Kt(i.timestampValue),u=Kt(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos})(r,e);case 7:return r.stringValue===e.stringValue;case 8:return(function(i,o){return zm(i,o)===0})(r,e);case 9:return r.referenceValue===e.referenceValue;case 11:return(function(i,o){return fe(i.geoPointValue.latitude)===fe(o.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(o.geoPointValue.longitude)})(r,e);case 3:return(function(i,o,c){if(dt(i)&&dt(o))return $m(i,o)===0;if("integerValue"in i&&"integerValue"in o||Pn(i)&&Pn(o))return vi(i)===vi(o);let u,h;if("doubleValue"in i&&"doubleValue"in o)u=fe(i.doubleValue),h=fe(o.doubleValue);else{if(!c?.ye)return!1;u=fe(i.integerValue??i.doubleValue),h=fe(o.integerValue??o.doubleValue)}return u===h?!!c?.we||Yr(u)===Yr(h):!!(c===void 0||c.be)&&isNaN(u)&&isNaN(h)})(r,e,t);case 13:return Hr(r.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>ht(s,i,t)));case 14:case 15:return(function(i,o,c){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(_r(u)!==_r(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!ht(u[f],h[f],c)))return!1;return!0})(r,e,t);case 5:return jm(r,e)===0;case 12:return Gm(r,e)===0;case 10:return Km(r,e)===0;default:return B(52216,{left:r})}}function Ti(r,e){return(r.values||[]).find((t=>ht(t,e)))!==void 0}function Ge(r,e){if(r===e)return 0;const t=Te(r),n=Te(e);if(t!==n)return W(t,n);switch(t){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return W(r.booleanValue,e.booleanValue);case 3:return Ai(r,e);case 4:return Pd(r.timestampValue,e.timestampValue);case 6:return Pd(Qr(r),Qr(e));case 7:return Ii(r.stringValue,e.stringValue);case 8:return zm(r,e);case 9:return(function(i,o){const c=i.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=W(c[h],u[h]);if(f!==0)return f}return W(c.length,u.length)})(r.referenceValue,e.referenceValue);case 11:return(function(i,o){const c=W(fe(i.latitude),fe(o.latitude));return c!==0?c:W(fe(i.longitude),fe(o.longitude))})(r.geoPointValue,e.geoPointValue);case 13:return Rd(r.arrayValue,e.arrayValue);case 14:return(function(i,o){const c=i.fields||{},u=o.fields||{},h=c[yr]?.arrayValue,f=u[yr]?.arrayValue,m=W(h?.values?.length||0,f?.values?.length||0);return m!==0?m:Rd(h,f)})(r.mapValue,e.mapValue);case 15:return(function(i,o){if(i===nr.mapValue&&o===nr.mapValue)return 0;if(i===nr.mapValue)return 1;if(o===nr.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=Ii(u[m],f[m]);if(_!==0)return _;const R=Ge(c[u[m]],h[f[m]]);if(R!==0)return R}return W(u.length,f.length)})(r.mapValue,e.mapValue);case 5:return jm(r,e);case 12:return Gm(r,e);case 10:return Km(r,e);default:throw B(23264,{Se:t})}}function vi(r){let e;return e=Pn(r)?r.mapValue.fields[Ln].integerValue:r.integerValue||r.doubleValue,fe(e)}function qm(r){return r.mapValue.fields[Wt].stringValue}function Ai(r,e){if(dt(r)||dt(e))return $m(r,e);const t=vi(r),n=vi(e);return isNaN(t)?isNaN(n)?0:-1:isNaN(n)?1:W(t,n)}function $m(r,e){const t=bd(r),n=bd(e);return t.oe()&&n.oe()?0:t.isNaN()?n.isNaN()?0:-1:n.isNaN()?1:t.compareTo(n)}function bd(r){return dt(r)?$.fromString(qm(r)):$.fromNumber(vi(r))}function Pd(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return W(r,e);const t=Kt(r),n=Kt(e),s=W(t.seconds,n.seconds);return s!==0?s:W(t.nanos,n.nanos)}function Rd(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ge(t[s],n[s]);if(i!==void 0&&i!==0)return i}return W(t.length,n.length)}function jm(r,e){const t=r.mapValue.fields?.[Ut].mapValue?.fields?.[wi],n=e.mapValue.fields?.[Ut].mapValue?.fields?.[wi],s=r.mapValue.fields?.[Ut].mapValue?.fields?.[Ei],i=e.mapValue.fields?.[Ut].mapValue?.fields?.[Ei],o=Ai(t,n);return o!==0?o:Ai(s,i)}function Vd(r){if("bytesValue"in r)return{subtype:0,bytes:pt(r.bytesValue)};const e=r.mapValue?.fields,t=e?.[Zr],n=t?.bytesValue;if(!n)throw new Error("Received incorrect value for BsonBinaryData");const s=pt(n).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const i=s[0],o=s.slice(1);return{subtype:i,bytes:ue.fromUint8Array(o)}}function zm(r,e){const t=Vd(r),n=Vd(e);return t.subtype!==n.subtype?t.subtype<n.subtype?-1:1:t.bytes.compareTo(n.bytes)}function Gm(r,e){const t=r.mapValue.fields,n=t?.[At]?.mapValue?.fields?.[Jr]?.stringValue??"",s=t?.[At]?.mapValue?.fields?.[Xr]?.stringValue??"",i=e.mapValue.fields,o=i?.[At]?.mapValue?.fields?.[Jr]?.stringValue??"",c=i?.[At]?.mapValue?.fields?.[Xr]?.stringValue??"",u=Ii(n,o);return u!==0?u:W(s,c)}function Km(r,e){return Ii(r.mapValue.fields?.[Ir]?.stringValue??"",e.mapValue.fields?.[Ir]?.stringValue??"")}function es(r){return nu(r)}function nu(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Kt(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return pt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return U.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=nu(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${nu(t.fields[o])}`;return s+"}"})(r.mapValue):B(61005,{value:r})}function ta(r){switch(Te(r)){case 0:case 2:return 4;case 3:return dt(r)?16:8;case 4:case 11:return 16;case 6:const e=Wi(r);return e?16+ta(e):16;case 7:return 2*r.stringValue.length;case 8:return"bytesValue"in r?pt(r.bytesValue).approximateByteSize():Sd(r.mapValue);case 9:return r.referenceValue.length;case 13:return(function(n){return(n.values||[]).reduce(((s,i)=>s+ta(i)),0)})(r.arrayValue);case 14:case 15:case 12:case 10:case 5:case 1:case 16:return Sd(r.mapValue);default:throw B(13486,{value:r})}}function Sd(r){let e=0;return On(r.fields,((t,n)=>{e+=t.length+ta(n)})),e}function ts(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function bt(r){return!!r&&"integerValue"in r}function Pt(r){return!!r&&"doubleValue"in r}function dt(r){if(!r.mapValue?.fields)return!1;const e=r.mapValue.fields;return _r(e)===1&&e[Wt]&&!!e[Wt].stringValue}function Pn(r){if(!r.mapValue?.fields)return!1;const e=r.mapValue.fields;return _r(e)===1&&e[Ln]?.integerValue!==void 0}function Qt(r){return bt(r)||Pt(r)||!!r&&Pn(r)||!!r&&dt(r)}function Rn(r){return!!r&&"arrayValue"in r}function it(r){return!!r&&"nullValue"in r}function Ne(r){return!(!Pt(r)||!isNaN(Number(r.doubleValue)))||!(!dt(r)||qm(r)!=="NaN")}function or(r){return!!r&&"mapValue"in r}function Qi(r){if(!r.mapValue?.fields)return z.ge;const e=r.mapValue.fields,t=e[Ca]?.stringValue;if(t&&Ad[t])return Ad[t];if(_r(e)===1){const n=Object.keys(e);return Bm[n[0]]??z.ge}return z.ge}function ru(r){return(r?.mapValue?.fields||{})[Ca]?.stringValue===Na}function su(r){return(r?.mapValue?.fields||{})[yr]?.arrayValue}function si(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return On(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=si(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=si(r.arrayValue.values[t]);return e}return{...r}}function sw(r){if("nullValue"in r)return Ht;if("booleanValue"in r)return{booleanValue:!1};if("integerValue"in r||"doubleValue"in r)return{doubleValue:NaN};if("timestampValue"in r)return{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}};if("stringValue"in r)return{stringValue:""};if("bytesValue"in r)return{bytesValue:""};if("referenceValue"in r)return ts(bn.empty(),U.empty());if("geoPointValue"in r)return{geoPointValue:{latitude:-90,longitude:-180}};if("arrayValue"in r)return{arrayValue:{}};if(!("mapValue"in r))return B(35942,{value:r});switch(Qi(r)){case z.me:return Lm;case z.Te:return Mm;case z.Re:return Um;case z.Ae:return{bytesValue:""};case z.he:return Fm;case z.Pe:case z.Ie:return{doubleValue:NaN};case z.Ve:return qu;case z.de:return $u;default:return{mapValue:{}}}}function iw(r){if("nullValue"in r)return qu;if("booleanValue"in r)return{doubleValue:NaN};if("integerValue"in r||"doubleValue"in r)return{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}};if("timestampValue"in r)return Um;if("stringValue"in r)return{bytesValue:""};if("bytesValue"in r)return ts(bn.empty(),U.empty());if("referenceValue"in r)return Mm;if("geoPointValue"in r)return Fm;if("arrayValue"in r)return Lm;if(!("mapValue"in r))return B(61959,{value:r});switch(Qi(r)){case z.me:return{mapValue:{}};case z.Te:return{geoPointValue:{latitude:-90,longitude:-180}};case z.Re:return{stringValue:""};case z.Ae:return ts(bn.empty(),U.empty());case z.he:return{arrayValue:{}};case z.Pe:case z.Ie:return{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}};case z.Ve:return{booleanValue:!1};case z.de:return nr;default:return $u}}function xd(r,e){const t=Ge(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Cd(r,e){const t=Ge(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!or(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=si(t)}setAll(e){let t=be.emptyPath(),n={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=si(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());or(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ht(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];or(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){On(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new Le(si(this.value))}}function Wm(r){const e=[];return On(r.fields,((t,n)=>{const s=new be([t]);if(or(n)&&!(function(o){return rw.has(Qi(o))})(n)){const i=Wm(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yr(e)?"-0":e}}function $r(r){return{integerValue:""+r}}function Da(r,e,t){return Om(e)?$r(e):ju(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this._=void 0}}function ow(r,e,t){return r instanceof ns?(function(s,i){const o={fields:{[Nm]:{stringValue:Cm},[km]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fu(i)&&(i=Wi(i)),i&&(o.fields[Dm]=i),{mapValue:o}})(t,e):r instanceof rs?Qm(r,e):r instanceof ss?Ym(r,e):r instanceof is?(function(s,i){const o=Hm(s,i),c=Nd(o)+Nd(s.xe);return dt(o)||dt(s.xe)?{mapValue:{fields:{[Wt]:{stringValue:c.toString()}}}}:Pn(o)?Pt(s.xe)?{doubleValue:c}:bt(s.xe)?{integerValue:c.toString()}:{mapValue:{fields:{[Ln]:$r(c)}}}:bt(o)&&(bt(s.xe)||Pn(s.xe))?$r(c):ju(s.serializer,c)})(r,e):r instanceof bi?(function(s,i){return!Qt(i)||Ne(s.xe)?s.xe:Ne(i)?i:Ai(s.xe,i)<0?s.xe:i})(r,e):r instanceof Pi?(function(s,i){return!Qt(i)||Ne(s.xe)?s.xe:Ne(i)?i:Ai(s.xe,i)>0?s.xe:i})(r,e):void 0}function aw(r,e,t){return r instanceof rs?Qm(r,e):r instanceof ss?Ym(r,e):t}function Hm(r,e){return r instanceof is?Qt(e)?e:{integerValue:0}:null}class ns extends ka{}class rs extends ka{constructor(e){super(),this.elements=e}}function Qm(r,e){const t=Jm(e);for(const n of r.elements)t.some((s=>ht(s,n)))||t.push(n);return{arrayValue:{values:t}}}class ss extends ka{constructor(e){super(),this.elements=e}}function Ym(r,e){let t=Jm(e);for(const n of r.elements)t=t.filter((s=>!ht(s,n)));return{arrayValue:{values:t}}}class zu extends ka{constructor(e,t){super(),this.serializer=e,this.xe=t}}class is extends zu{}class bi extends zu{}class Pi extends zu{}function Nd(r){return bt(r)?fe(r.integerValue):Pt(r)?fe(r.doubleValue):Pn(r)?fe(r.mapValue.fields[Ln].integerValue):dt(r)?parseFloat(r.mapValue.fields[Wt].stringValue):0}function Jm(r){return Rn(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t){this.field=e,this.transform=t}}function cw(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof rs&&s instanceof rs||n instanceof ss&&s instanceof ss?Hr(n.elements,s.elements,ht):n instanceof is&&s instanceof is||n instanceof bi&&s instanceof bi||n instanceof Pi&&s instanceof Pi?ht(n.xe,s.xe):n instanceof ns&&s instanceof ns})(r.transform,e.transform)}class uw{constructor(e,t){this.version=e,this.transformResults=t}}class Me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Oa{}function Zm(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Yi(r.key,Me.none()):new ws(r.key,r.data,Me.none());{const t=r.data,n=Le.empty();let s=new oe(be.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new en(r.key,n,new Je(s.toArray()),Me.none())}}function lw(r,e,t){r instanceof ws?(function(s,i,o){const c=s.value.clone(),u=kd(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(r,e,t):r instanceof en?(function(s,i,o){if(!Uo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=kd(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ep(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ii(r,e,t,n){return r instanceof ws?(function(i,o,c,u){if(!Uo(i.precondition,o))return c;const h=i.value.clone(),f=Od(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(r,e,t,n):r instanceof en?(function(i,o,c,u){if(!Uo(i.precondition,o))return c;const h=Od(i.fieldTransforms,u,o),f=o.data;return f.setAll(ep(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(r,e,t,n):(function(i,o,c){return Uo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(r,e,t)}function hw(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Hm(n.transform,s||null);i!=null&&(t===null&&(t=Le.empty()),t.set(n.field,i))}return t||null}function Dd(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Hr(n,s,((i,o)=>cw(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ws extends Oa{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class en extends Oa{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ep(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function kd(r,e,t){const n=new Map;k(r.length===t.length,32656,{ve:t.length,De:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,aw(o,c,t[s]))}return n}function Od(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,ow(i,o,e))}return n}class Yi extends Oa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tp extends Oa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.position=e,this.inclusive=t}}function Ld(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=U.comparator(U.fromName(o.referenceValue),t.key):n=Ge(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Md(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ht(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{}class ne extends np{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new dw(e,t,n):t==="array-contains"?new pw(e,n):t==="in"?new cp(e,n):t==="not-in"?new gw(e,n):t==="array-contains-any"?new _w(e,n):new ne(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new fw(e,n):new mw(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ge(t,this.value)):t!==null&&Te(this.value)===Te(t)&&this.matchesComparison(Ge(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends np{constructor(e,t){super(),this.filters=e,this.op=t,this.Ce=null}static create(e,t){return new ae(e,t)}matches(e){return as(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Ce!==null||(this.Ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Ce}getFilters(){return Object.assign([],this.filters)}}function as(r){return r.op==="and"}function iu(r){return r.op==="or"}function Gu(r){return rp(r)&&as(r)}function rp(r){for(const e of r.filters)if(e instanceof ae)return!1;return!0}function ou(r){if(r instanceof ne)return r.field.canonicalString()+r.op.toString()+es(r.value);if(Gu(r))return r.filters.map((e=>ou(e))).join(",");{const e=r.filters.map((t=>ou(t))).join(",");return`${r.op}(${e})`}}function sp(r,e){return r instanceof ne?(function(n,s){return s instanceof ne&&n.op===s.op&&n.field.isEqual(s.field)&&ht(n.value,s.value)})(r,e):r instanceof ae?(function(n,s){return s instanceof ae&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,c)=>i&&sp(o,s.filters[c])),!0):!1})(r,e):void B(19439)}function ip(r,e){const t=r.filters.concat(e);return ae.create(t,r.op)}function op(r){return r instanceof ne?(function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`})(r):r instanceof ae?(function(t){return t.op.toString()+" {"+t.getFilters().map(op).join(" ,")+"}"})(r):"Filter"}class dw extends ne{constructor(e,t,n){super(e,t,n),this.key=U.fromName(n.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class fw extends ne{constructor(e,t){super(e,"in",t),this.keys=ap("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class mw extends ne{constructor(e,t){super(e,"not-in",t),this.keys=ap("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ap(r,e){return(e.arrayValue?.values||[]).map((t=>U.fromName(t.referenceValue)))}class pw extends ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rn(t)&&Ti(t.arrayValue,this.value)}}class cp extends ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ti(this.value.arrayValue,t)}}class gw extends ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ti(this.value.arrayValue,t)}}class _w extends ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rn(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Ti(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t="asc"){this.field=e,this.dir=t}}function yw(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ie(0,0))}static max(){return new j(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ge(e,0,j.min(),j.min(),j.min(),Le.empty(),0)}static newFoundDocument(e,t,n,s){return new ge(e,1,t,j.min(),n,s,0)}static newNoDocument(e,t){return new ge(e,2,t,j.min(),j.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,j.min(),j.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=-1;class na{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function au(r){return r.fields.find((e=>e.kind===2))}function Qn(r){return r.fields.filter((e=>e.kind!==2))}na.UNKNOWN_ID=-1;class Fo{constructor(e,t){this.fieldPath=e,this.kind=t}}class Vi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Vi(0,at.min())}}function up(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=j.fromTimestamp(n===1e9?new ie(t+1,0):new ie(t,n));return new at(s,U.empty(),e)}function lp(r){return new at(r.readTime,r.key,cs)}class at{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new at(j.min(),U.empty(),cs)}static max(){return new at(j.max(),U.empty(),cs)}}function Ku(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(r.documentKey,e.documentKey),t!==0?t:W(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Fe=null}}function cu(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Iw(r,e,t,n,s,i,o)}function ra(r){const e=q(r);if(e.Fe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ou(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),xa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>es(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>es(n))).join(",")),e.Fe=t}return e.Fe}function Wu(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!yw(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!sp(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Md(r.startAt,e.startAt)&&Md(r.endAt,e.endAt)}function Lt(r){return!!r.isCorePipeline}function Hu(r){return!!r.path&&U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function sa(r,e){return r.filters.filter((t=>t instanceof ne&&t.field.isEqual(e)))}function Ud(r,e,t){let n=Ht,s=!0;for(const i of sa(r,e)){let o=Ht,c=!0;switch(i.op){case"<":case"<=":o=sw(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=qu}xd({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];xd({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Fd(r,e,t){let n=nr,s=!0;for(const i of sa(r,e)){let o=nr,c=!0;switch(i.op){case">=":case">":o=iw(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=$u}Cd({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Cd({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.Oe=null,this.Me=null,this.Ne=null,this.startAt,this.endAt}}function hp(r,e,t,n,s,i,o,c){return new Es(r,e,t,n,s,i,o,c)}function La(r){return new Es(r)}function Bd(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ww(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function dp(r){return r.collectionGroup!==null}function oi(r){const e=q(r);if(e.Oe===null){e.Oe=[];const t=new Set;for(const i of e.explicitOrderBy)e.Oe.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new oe(be.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Oe.push(new Ri(i,n))})),t.has(be.keyField().canonicalString())||e.Oe.push(new Ri(be.keyField(),n))}return e.Oe}function ot(r){const e=q(r);return e.Me||(e.Me=Ew(e,oi(r))),e.Me}function Ew(r,e){if(r.limitType==="F")return cu(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ri(s.field,i)}));const t=r.endAt?new os(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new os(r.startAt.position,r.startAt.inclusive):null;return cu(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function uu(r,e){const t=r.filters.concat([e]);return new Es(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Tw(r,e){const t=r.explicitOrderBy.concat([e]);return new Es(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function ia(r,e,t){return new Es(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function vw(r,e){return Wu(ot(r),ot(e))&&r.limitType===e.limitType}function ai(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>op(s))).join(", ")}]`),xa(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>es(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>es(s))).join(",")),`Target(${n})`})(ot(r))}; limitType=${r.limitType})`}function Ma(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of oi(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,c,u){const h=Ld(o,c,u);return o.inclusive?h<=0:h<0})(n.startAt,oi(n),s)||n.endAt&&!(function(o,c,u){const h=Ld(o,c,u);return o.inclusive?h>=0:h>0})(n.endAt,oi(n),s))})(r,e)}function Qu(r){return(e,t)=>{let n=!1;for(const s of oi(r)){const i=Aw(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Aw(r,e,t){const n=r.field.isKeyField()?U.comparator(e.key,t.key):(function(i,o,c){const u=o.data.field(i),h=c.data.field(i);return u!==null&&h!==null?Ge(u,h):B(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return B(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,re;function Pw(r){switch(r){case S.OK:return B(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return B(15467,{code:r})}}function fp(r){if(r===void 0)return ye("GRPC error has no .code"),S.UNKNOWN;switch(r){case Ee.OK:return S.OK;case Ee.CANCELLED:return S.CANCELLED;case Ee.UNKNOWN:return S.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return S.INTERNAL;case Ee.UNAVAILABLE:return S.UNAVAILABLE;case Ee.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ee.NOT_FOUND:return S.NOT_FOUND;case Ee.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ee.ABORTED:return S.ABORTED;case Ee.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ee.DATA_LOSS:return S.DATA_LOSS;default:return B(39323,{code:r})}}(re=Ee||(Ee={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return Vm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new de(U.comparator);function Ae(){return Rw}const mp=new de(U.comparator);function Jn(...r){let e=mp;for(const t of r)e=e.insert(t.key,t);return e}function pp(r){let e=mp;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function lt(){return ci()}function gp(){return ci()}function ci(){return new tn((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Vw=new de(U.comparator),Sw=new oe(U.comparator);function X(...r){let e=Sw;for(const t of r)e=e.add(t);return e}const xw=new oe(W);function Yu(){return xw}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new wn([4294967295,4294967295],0);function qd(r){const e=Cw().encode(r),t=new wm;return t.update(e),new Uint8Array(t.digest())}function $d(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wn([t,n],0),new wn([s,i],0)]}class Ju{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ei(`Invalid padding: ${t}`);if(n<0)throw new ei(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ei(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ei(`Invalid padding when bitmap length is 0: ${t}`);this.Be=8*e.length-t,this.Le=wn.fromNumber(this.Be)}$e(e,t,n){let s=e.add(t.multiply(wn.fromNumber(n)));return s.compare(Nw)===1&&(s=new wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Le).toNumber()}Ue(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Be===0)return!1;const t=qd(e),[n,s]=$d(t);for(let i=0;i<this.hashCount;i++){const o=this.$e(n,s,i);if(!this.Ue(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ju(i,s,t);return n.forEach((c=>o.insert(c))),o}insert(e){if(this.Be===0)return;const t=qd(e),[n,s]=$d(t);for(let i=0;i<this.hashCount;i++){const o=this.$e(n,s,i);this.ke(o)}}ke(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ei extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ts(j.min(),s,new de(W),Ae(),Ae(),X())}}class Ji{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ji(n,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,n,s){this.Qe=e,this.removedTargetIds=t,this.key=n,this.qe=s}}class _p{constructor(e,t){this.targetId=e,this.Ke=t}}class yp{constructor(e,t,n=ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class jd{constructor(e){this.targetId=e,this.We=0,this.Ge=zd(),this.je=ue.EMPTY_BYTE_STRING,this.ze=!1,this.He=!0}get current(){return this.ze}get resumeToken(){return this.je}get Je(){return this.We!==0}get Ye(){return this.He}Ze(e){e.approximateByteSize()>0&&(this.He=!0,this.je=e)}Xe(){let e=X(),t=X(),n=X();return this.Ge.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:B(38017,{changeType:i})}})),new Ji(this.je,this.ze,e,t,n)}et(){this.He=!1,this.Ge=zd()}tt(e,t){this.He=!0,this.Ge=this.Ge.insert(e,t)}nt(e){this.He=!0,this.Ge=this.Ge.remove(e)}rt(){this.We+=1}it(){this.We-=1,k(this.We>=0,3241,{We:this.We,targetId:this.targetId})}st(){this.He=!0,this.ze=!0}}const Ks="WatchChangeAggregator";class Dw{constructor(e){this._t=e,this.ot=new Map,this.ut=Ae(),this.ct=Po(),this.lt=Ae(),this.Et=Po(),this.ht=new de(W)}Tt(e){for(const t of e.Qe)e.qe&&e.qe.isFoundDocument()?this.Pt(t,e.qe):this.It(t,e.key,e.qe);for(const t of e.removedTargetIds)this.It(t,e.key,e.qe)}Rt(e){this.forEachTarget(e,(t=>{const n=this.ot.get(t);if(n)switch(e.state){case 0:this.At(t)&&n.Ze(e.resumeToken);break;case 1:n.it(),n.Je||n.et(),n.Ze(e.resumeToken);break;case 2:n.it(),n.Je||this.removeTarget(t);break;case 3:this.At(t)&&(n.st(),n.Ze(e.resumeToken));break;case 4:this.At(t)&&(this.Vt(t),n.Ze(e.resumeToken));break;default:B(56790,{state:e.state})}else N(Ks,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ot.forEach(((n,s)=>{this.At(s)&&t(s)}))}dt(e){return Lt(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:Hu(e)}ft(e){const t=e.targetId,n=e.Ke.count,s=this.gt(t);if(s){const i=s.target;if(this.dt(i))if(n===0){const o=new U(Lt(i)?ee.fromString(i.getPipelineDocuments()[0]):i.path);this.It(t,o,ge.newNoDocument(o,j.min()))}else k(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.yt(t);if(o!==n){const c=this.wt(e),u=c?this.bt(c,e,o):1;if(u!==0){this.Vt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ht=this.ht.insert(t,h)}}}}}wt(e){const t=e.Ke.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=pt(n).toUint8Array()}catch(u){if(u instanceof xm)return yt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ju(o,s,i)}catch(u){return yt(u instanceof ei?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Be===0?null:c}bt(e,t,n){return t.Ke.count===n-this.vt(e,t.targetId)?0:2}vt(e,t){const n=this._t.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this._t.xt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.It(t,i,null),s++)})),s}Dt(e){const t=new Map;this.ot.forEach(((i,o)=>{const c=this.gt(o);if(c){if(i.current&&this.dt(c.target)){const u=Lt(c.target)?ee.fromString(c.target.getPipelineDocuments()[0]):c.target.path,h=new U(u);this.Ct(h).has(o)||this.Ft(o,h)||this.It(o,h,ge.newNoDocument(h,e))}i.Ye&&(t.set(o,i.Xe()),i.et())}}));let n=X();this.Et.forEach(((i,o)=>{let c=!0;o.forEachWhile((u=>{const h=this.gt(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(i))})),this.ut.forEach(((i,o)=>o.setReadTime(e))),this.lt.forEach(((i,o)=>o.setReadTime(e)));const s=new Ts(e,t,this.ht,this.ut,this.lt,n);return this.ut=Ae(),this.ct=Po(),this.lt=Ae(),this.Et=Po(),this.ht=new de(W),s}Pt(e,t){const n=this.ot.get(e);if(!n||!this.At(e))return void N(Ks,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.Ft(e,t.key)?2:0;n.tt(t.key,s),Lt(this.gt(e).target)&&this.gt(e).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(t.key,t):this.ut=this.ut.insert(t.key,t),this.ct=this.ct.insert(t.key,this.Ct(t.key).add(e)),this.Et=this.Et.insert(t.key,this.Ot(t.key).add(e))}It(e,t,n){const s=this.ot.get(e);s&&this.At(e)?(this.Ft(e,t)?s.tt(t,1):s.nt(t),this.Et=this.Et.insert(t,this.Ot(t).delete(e)),this.Et=this.Et.insert(t,this.Ot(t).add(e)),n&&(Lt(this.gt(e).target)&&this.gt(e).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(t,n):this.ut=this.ut.insert(t,n))):N(Ks,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ot.delete(e)}yt(e){const t=this.ot.get(e);if(!t)return 0;const n=t.Xe();return this._t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}rt(e){let t=this.ot.get(e);t||(N(Ks,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new jd(e),this.ot.set(e,t)),t.rt()}Ot(e){let t=this.Et.get(e);return t||(t=new oe(W),this.Et=this.Et.insert(e,t)),t}Ct(e){let t=this.ct.get(e);return t||(t=new oe(W),this.ct=this.ct.insert(e,t)),t}At(e){const t=this.gt(e)!==null;return t||N(Ks,"Detected inactive target",e),t}gt(e){const t=this.ot.get(e);return t===void 0||t.Je?null:this._t.Mt(e)}Vt(e){this.ot.set(e,new jd(e)),this._t.getRemoteKeysForTarget(e).forEach((t=>{this.It(e,t,null)}))}Ft(e,t){return this._t.getRemoteKeysForTarget(e).has(t)}}function Po(){return new de(U.comparator)}function zd(){return new de(U.comparator)}const kw={asc:"ASCENDING",desc:"DESCENDING"},Ow={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lw={and:"AND",or:"OR"};class Mw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lu(r,e){return r.useProto3Json||xa(e)?e:{value:e}}function ar(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xu(r){const e=Kt(r);return new ie(e.seconds,e.nanos)}function hu(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function qo(r,e){return ar(r,e.toTimestamp())}function Qe(r){return k(!!r,49232),j.fromTimestamp(Xu(r))}function Zu(r,e){return du(r,e).canonicalString()}function du(r,e){const t=(function(s){return new ee(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Ip(r){const e=ee.fromString(r);return k(Sp(e),10190,{key:e.toString()}),e}function Si(r,e){return Zu(r.databaseId,e.path)}function cr(r,e){const t=Ip(e);if(t.get(1)!==r.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new U(Tp(t))}function wp(r,e){return Zu(r.databaseId,e)}function Ep(r){const e=Ip(r);return e.length===4?ee.emptyPath():Tp(e)}function fu(r){return new ee(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Tp(r){return k(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Gd(r,e,t){return{name:Si(r,e),fields:t.value.mapValue.fields}}function Uw(r,e,t){const n=cr(r,e.name),s=Qe(e.updateTime),i=e.createTime?Qe(e.createTime):j.min(),o=new Le({mapValue:{fields:e.fields}}),c=ge.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Fw(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:B(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(k(f===void 0||typeof f=="string",58123),ue.fromBase64String(f||"")):(k(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ue.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?S.UNKNOWN:fp(h.code);return new D(f,h.message||"")})(o);t=new yp(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=cr(r,n.document.name),i=Qe(n.document.updateTime),o=n.document.createTime?Qe(n.document.createTime):j.min(),c=new Le({mapValue:{fields:n.document.fields}}),u=ge.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new Bo(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=cr(r,n.document),i=n.readTime?Qe(n.readTime):j.min(),o=ge.newNoDocument(s,i),c=n.removedTargetIds||[];t=new Bo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=cr(r,n.document),i=n.removedTargetIds||[];t=new Bo([],i,s,null)}else{if(!("filter"in e))return B(11601,{Nt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new bw(s,i),c=n.targetId;t=new _p(c,o)}}return t}function oa(r,e){let t;if(e instanceof ws)t={update:Gd(r,e.key,e.value)};else if(e instanceof Yi)t={delete:Si(r,e.key)};else if(e instanceof en)t={update:Gd(r,e.key,e.data),updateMask:Gw(e.fieldMask)};else{if(!(e instanceof tp))return B(16599,{Bt:e.type});t={verify:Si(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const c=o.transform;if(c instanceof ns)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof rs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ss)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof is)return{fieldPath:o.field.canonicalString(),increment:c.xe};if(c instanceof bi)return{fieldPath:o.field.canonicalString(),minimum:c.xe};if(c instanceof Pi)return{fieldPath:o.field.canonicalString(),maximum:c.xe};throw B(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:qo(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(r,e.precondition)),t}function mu(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?Me.updateTime(Qe(i.updateTime)):i.exists!==void 0?Me.exists(i.exists):Me.none()})(e.currentDocument):Me.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,c){let u=null;if("setToServerValue"in c)k(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new ns;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new rs(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new ss(f)}else"increment"in c?u=new is(o,c.increment):"minimum"in c?u=new bi(o,c.minimum):"maximum"in c?u=new Pi(o,c.maximum):B(16584,{proto:c});const h=be.fromServerFormat(c.fieldPath);return new Xm(h,u)})(r,s))):[];if(e.update){e.update.name;const s=cr(r,e.update.name),i=new Le({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const h=u.fieldPaths||[];return new Je(h.map((f=>be.fromServerFormat(f))))})(e.updateMask);return new en(s,i,o,t,n)}return new ws(s,i,t,n)}if(e.delete){const s=cr(r,e.delete);return new Yi(s,t)}if(e.verify){const s=cr(r,e.verify);return new tp(s,t)}return B(1463,{proto:e})}function Bw(r,e){return r&&r.length>0?(k(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?Qe(s.updateTime):Qe(i);return o.isEqual(j.min())&&(o=Qe(i)),new uw(o,s.transformResults||[])})(t,e)))):[]}function vp(r,e){return{documents:[wp(r,e.path)]}}function Ap(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=wp(r,s);const i=(function(h){if(h.length!==0)return Vp(ae.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(_){return{field:Ur(_.field),direction:$w(_.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=lu(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Lt:t,parent:s}}function bp(r){let e=Ep(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){k(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const _=Rp(m);return _ instanceof ae&&Gu(_)?_.getFilters():[_]})(t.where));let o=[];t.orderBy&&(o=(function(m){return m.map((_=>(function(C){return new Ri(Fr(C.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let _;return _=typeof m=="object"?m.value:m,xa(_)?null:_})(t.limit));let u=null;t.startAt&&(u=(function(m){const _=!!m.before,R=m.values||[];return new os(R,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const _=!m.before,R=m.values||[];return new os(R,_)})(t.endAt)),hp(e,s,o,i,c,"F",u,h)}function qw(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pp(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(r)))}}}}function Rp(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Fr(t.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(t.unaryFilter.field);return ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(t.unaryFilter.field);return ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(t.unaryFilter.field);return ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ne.create(Fr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ae.create(t.compositeFilter.filters.map((n=>Rp(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(r):B(30097,{filter:r})}function $w(r){return kw[r]}function jw(r){return Ow[r]}function zw(r){return Lw[r]}function Ur(r){return{fieldPath:r.canonicalString()}}function Fr(r){return be.fromServerFormat(r.fieldPath)}function Vp(r){return r instanceof ne?(function(t){if(t.op==="=="){if(Ne(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NAN"}};if(it(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ne(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NOT_NAN"}};if(it(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(t.field),op:jw(t.op),value:t.value}}})(r):r instanceof ae?(function(t){const n=t.getFilters().map((s=>Vp(s)));return n.length===1?n[0]:{compositeFilter:{op:zw(t.op),filters:n}}})(r):B(54877,{filter:r})}function Gw(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sp(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function xp(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function xi(r,e){const t={fields:{}};return e.forEach(((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)})),{mapValue:t}}function aa(r){return{stringValue:r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(r){return new Mw(r,!0)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){if(this.seconds=e,this.increment=t,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t=0){if(this.subtype=t,!Number.isInteger(t)||t<0||t>255)throw new D(S.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,t=0){try{return new st(ue.fromBase64String(e),t)}catch(n){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e,t=0){return new st(ue.fromUint8Array(e),t)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:st._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(Ki(e,st._jsonSchema)){const t=e.subtype??0;return st.fromBase64String(e.bytes,t)}}}st._jsonSchemaVersion="firestore/bytes/1.0",st._jsonSchema={type:Ie("string",st._jsonSchemaVersion),bytes:Ie("string"),subtype:{...Ie("number"),optional:!0}};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.stringValue=e,this.value=$.fromString(e)}isEqual(e){return!(!this.value.oe()||!e.value.oe())||this.value.compareTo(e.value)===0}toJSON(){return{Ut:{stringValue:this.stringValue}}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Kw(){return new Fa(vt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(Ki(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:Ie("string",xt._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.type="MaxKey"}static instance(){return Ft.MAX_KEY_VALUE_INSTANCE||(Ft.MAX_KEY_VALUE_INSTANCE=new Ft),Ft.MAX_KEY_VALUE_INSTANCE}}Ft.MAX_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.type="MinKey"}static instance(){return Bt.MIN_KEY_VALUE_INSTANCE||(Bt.MIN_KEY_VALUE_INSTANCE=new Bt),Bt.MIN_KEY_VALUE_INSTANCE}}Bt.MIN_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(qe.UNAUTHENTICATED)))}shutdown(){}}class Qw{constructor(e){this.kt=e,this.currentUser=qe.UNAUTHENTICATED,this.Qt=0,this.forceRefresh=!1,this.auth=null}start(e,t){k(this.qt===void 0,42304);let n=this.Qt;const s=u=>this.Qt!==n?(n=this.Qt,t(u)):Promise.resolve();let i=new Ct;this.qt=()=>{this.Qt++,this.currentUser=this.Kt(),i.resolve(),i=new Ct,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.qt&&(this.auth.addAuthTokenListener(this.qt),o())};this.kt.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.kt.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ct)}}),0),o()}getToken(){const e=this.Qt,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.Qt!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(k(typeof n.accessToken=="string",31837,{Wt:n}),new Ww(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.qt&&this.auth.removeAuthTokenListener(this.qt),this.qt=void 0}Kt(){const e=this.auth&&this.auth.getUid();return k(e===null||typeof e=="string",2055,{Gt:e}),new qe(e)}}class Yw{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.Jt=new Map}Yt(){return this.Ht?this.Ht():null}get headers(){this.Jt.set("X-Goog-AuthUser",this.jt);const e=this.Yt();return e&&this.Jt.set("Authorization",e),this.zt&&this.Jt.set("X-Goog-Iam-Authorization-Token",this.zt),this.Jt}}class Jw{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n}getToken(){return Promise.resolve(new Yw(this.jt,this.zt,this.Ht))}start(e,t){e.enqueueRetryable((()=>t(qe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xw{constructor(e,t){this.Zt=t,this.forceRefresh=!1,this.appCheck=null,this.Xt=null,this.en=null,mt(e)&&e.settings.appCheckToken&&(this.en=e.settings.appCheckToken)}start(e,t){k(this.qt===void 0,3512);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.Xt;return this.Xt=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.qt=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.qt&&this.appCheck.addTokenListener(this.qt)};this.Zt.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.Zt.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.en)return Promise.resolve(new Kd(this.en));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(k(typeof t.token=="string",44558,{tokenResult:t}),this.Xt=t.token,new Kd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.qt&&this.appCheck.removeTokenListener(this.qt),this.qt=void 0}}function Cp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{tn(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="ConnectivityMonitor";class Hd{constructor(){this.nn=()=>this.rn(),this.sn=()=>this._n(),this.an=[],this.un()}tn(e){this.an.push(e)}shutdown(){window.removeEventListener("online",this.nn),window.removeEventListener("offline",this.sn)}un(){window.addEventListener("online",this.nn),window.addEventListener("offline",this.sn)}rn(){N(Wd,"Network connectivity changed: AVAILABLE");for(const e of this.an)e(0)}_n(){N(Wd,"Network connectivity changed: UNAVAILABLE");for(const e of this.an)e(1)}static cn(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro=null;function pu(){return Ro===null?Ro=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ro++,"0x"+Ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="RestConnection",eE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class tE{get En(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.hn=t+"://"+e.host,this.Tn=`projects/${n}/databases/${s}`,this.Pn=this.databaseId.database===ea?`project_id=${n}`:`project_id=${n}&database_id=${s}`}In(e,t,n,s,i){const o=pu(),c=this.Rn(e,t.toUriEncodedString());N(Uc,`Sending RPC '${e}' ${o}:`,c,n);const u={"google-cloud-resource-prefix":this.Tn,"x-goog-request-params":this.Pn};this.An(u,s,i);const{host:h}=new URL(c),f=zi(h);return this.Vn(e,c,u,n,f).then((m=>(N(Uc,`Received RPC '${e}' ${o}: `,m),m)),(m=>{throw yt(Uc,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",n),m}))}dn(e,t,n,s,i,o){return this.In(e,t,n,s,i)}An(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Is})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}Rn(e,t){const n=eE[e];let s=`${this.hn}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.fn=e.fn,this.mn=e.mn}pn(e){this.gn=e}yn(e){this.wn=e}bn(e){this.Sn=e}onMessage(e){this.xn=e}close(){this.mn()}send(e){this.fn(e)}vn(){this.gn()}Dn(){this.wn()}Cn(e){this.Sn(e)}Fn(e){this.xn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection",Ws=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class jr extends tE{constructor(e){super(e),this.On=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static Mn(){if(!jr.Nn){const e=Am();Ws(e,vm.STAT_EVENT,(t=>{t.stat===Zc.PROXY?N(Be,"STAT_EVENT: detected buffering proxy"):t.stat===Zc.NOPROXY&&N(Be,"STAT_EVENT: detected no buffering proxy")})),jr.Nn=!0}}Vn(e,t,n,s,i){const o=pu();return new Promise(((c,u)=>{const h=new Em;h.setWithCredentials(!0),h.listenOnce(Tm.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Oo.NO_ERROR:const m=h.getResponseJson();N(Be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Oo.TIMEOUT:N(Be,`RPC '${e}' ${o} timed out`),u(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case Oo.HTTP_ERROR:const _=h.getStatus();if(N(Be,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R?.error;if(C&&C.status&&C.message){const O=(function(H){const J=H.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(J)>=0?J:S.UNKNOWN})(C.status);u(new D(O,C.message))}else u(new D(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new D(S.UNAVAILABLE,"Connection failed."));break;default:B(9055,{Bn:e,streamId:o,Ln:h.getLastErrorCode(),$n:h.getLastError()})}}finally{N(Be,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);N(Be,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,n,15)}))}Un(e,t,n){const s=pu(),i=[this.hn,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.An(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const h=i.join("");N(Be,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.kn(f);let m=!1,_=!1;const R=new nE({fn:C=>{_?N(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(N(Be,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),N(Be,`RPC '${e}' stream ${s} sending:`,C),f.send(C))},mn:()=>f.close()});return Ws(f,Xs.EventType.OPEN,(()=>{_||(N(Be,`RPC '${e}' stream ${s} transport opened.`),R.vn())})),Ws(f,Xs.EventType.CLOSE,(()=>{_||(_=!0,N(Be,`RPC '${e}' stream ${s} transport closed`),R.Cn(),this.Qn(f))})),Ws(f,Xs.EventType.ERROR,(C=>{_||(_=!0,yt(Be,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),R.Cn(new D(S.UNAVAILABLE,"The operation could not be completed")))})),Ws(f,Xs.EventType.MESSAGE,(C=>{if(!_){const O=C.data[0];k(!!O,16349);const M=O,H=M?.error||M[0]?.error;if(H){N(Be,`RPC '${e}' stream ${s} received error:`,H);const J=H.status;let Y=(function(se){const w=Ee[se];if(w!==void 0)return fp(w)})(J),le=H.message;J==="NOT_FOUND"&&le.includes("database")&&le.includes("does not exist")&&le.includes(this.databaseId.database)&&yt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Y===void 0&&(Y=S.INTERNAL,le="Unknown error status: "+J+" with message "+H.message),_=!0,R.Cn(new D(Y,le)),f.close()}else N(Be,`RPC '${e}' stream ${s} received:`,O),R.Fn(O)}})),jr.Mn(),setTimeout((()=>{R.Dn()}),0),R}terminate(){this.On.forEach((e=>e.close())),this.On=[]}kn(e){this.On.push(e)}Qn(e){this.On=this.On.filter((t=>t===e))}An(e,t,n){super.An(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return bm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(r){return new jr(r)}jr.Nn=!1;class Np{constructor(e,t,n=1e3,s=1.5,i=6e4){this.qn=e,this.timerId=t,this.Kn=n,this.Wn=s,this.Gn=i,this.jn=0,this.zn=null,this.Hn=Date.now(),this.reset()}reset(){this.jn=0}Jn(){this.jn=this.Gn}Yn(e){this.cancel();const t=Math.floor(this.jn+this.Zn()),n=Math.max(0,Date.now()-this.Hn),s=Math.max(0,t-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jn} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.zn=this.qn.enqueueAfterDelay(this.timerId,s,(()=>(this.Hn=Date.now(),e()))),this.jn*=this.Wn,this.jn<this.Kn&&(this.jn=this.Kn),this.jn>this.Gn&&(this.jn=this.Gn)}Xn(){this.zn!==null&&(this.zn.skipDelay(),this.zn=null)}cancel(){this.zn!==null&&(this.zn.cancel(),this.zn=null)}Zn(){return(Math.random()-.5)*this.jn}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="PersistentStream";class Dp{constructor(e,t,n,s,i,o,c,u){this.qn=e,this.er=n,this.tr=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.nr=0,this.rr=null,this.ir=null,this.stream=null,this.sr=0,this._r=new Np(e,t)}ar(){return this.state===1||this.state===5||this.ur()}ur(){return this.state===2||this.state===3}start(){this.sr=0,this.state!==4?this.auth():this.cr()}async stop(){this.ar()&&await this.close(0)}lr(){this.state=0,this._r.reset()}Er(){this.ur()&&this.rr===null&&(this.rr=this.qn.enqueueAfterDelay(this.er,6e4,(()=>this.hr())))}Tr(e){this.Pr(),this.stream.send(e)}async hr(){if(this.ur())return this.close(0)}Pr(){this.rr&&(this.rr.cancel(),this.rr=null)}Ir(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this.Pr(),this.Ir(),this._r.cancel(),this.nr++,e!==4?this._r.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(ye(t.toString()),ye("Using maximum backoff delay to prevent overloading the backend."),this._r.Jn()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Rr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.bn(t)}Rr(){}auth(){this.state=1;const e=this.Ar(this.nr),t=this.nr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.nr===t&&this.Vr(n,s)}),(n=>{e((()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.dr(s)}))}))}Vr(e,t){const n=this.Ar(this.nr);this.stream=this.mr(e,t),this.stream.pn((()=>{n((()=>this.listener.pn()))})),this.stream.yn((()=>{n((()=>(this.state=2,this.ir=this.qn.enqueueAfterDelay(this.tr,1e4,(()=>(this.ur()&&(this.state=3),Promise.resolve()))),this.listener.yn())))})),this.stream.bn((s=>{n((()=>this.dr(s)))})),this.stream.onMessage((s=>{n((()=>++this.sr==1?this.pr(s):this.onNext(s)))}))}cr(){this.state=5,this._r.Yn((async()=>{this.state=0,this.start()}))}dr(e){return N(Qd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Ar(e){return t=>{this.qn.enqueueAndForget((()=>this.nr===e?t():(N(Qd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sE extends Dp{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}mr(e,t){return this.connection.Un("Listen",e,t)}pr(e){return this.onNext(e)}onNext(e){this._r.reset();const t=Fw(this.serializer,e),n=(function(i){if(!("targetChange"in i))return j.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Qe(o.readTime):j.min()})(e);return this.listener.gr(t,n)}yr(e){const t={};t.database=fu(this.serializer),t.addTarget=(function(i,o){let c;const u=o.target;if(c=Lt(u)?{pipelineQuery:Pp(i,u)}:Hu(u)?{documents:vp(i,u)}:{query:Ap(i,u).Lt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=hu(i,o.resumeToken);const h=lu(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=ar(i,o.snapshotVersion.toTimestamp());const h=lu(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const n=qw(this.serializer,e);n&&(t.labels=n),this.Tr(t)}wr(e){const t={};t.database=fu(this.serializer),t.removeTarget=e,this.Tr(t)}}class iE extends Dp{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get br(){return this.sr>0}start(){this.lastStreamToken=void 0,super.start()}Rr(){this.br&&this.Sr([])}mr(e,t){return this.connection.Un("Write",e,t)}pr(e){return k(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,k(!e.writeResults||e.writeResults.length===0,55816),this.listener.vr()}onNext(e){k(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this._r.reset();const t=Bw(e.writeResults,e.commitTime),n=Qe(e.commitTime);return this.listener.Dr(n,t)}Cr(){const e={};e.database=fu(this.serializer),this.Tr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>oa(this.serializer,n)))};this.Tr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{}class aE extends oE{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.Fr=!1}Or(){if(this.Fr)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}In(e,t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.In(e,du(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(S.UNKNOWN,i.toString())}))}dn(e,t,n,s,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.dn(e,du(t,n),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())}))}terminate(){this.Fr=!0,this.connection.terminate()}}function cE(r,e,t,n){return new aE(r,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="ComponentProvider",Yd=new Map;function lE(r,e,t,n,s){return new ew(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Cp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kp=41943040;class $e{static withCacheSize(e){return new $e(e,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}$e.DEFAULT_COLLECTION_PERCENTILE=10,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$e.DEFAULT=new $e(kp,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$e.DISABLED=new $e(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.Mr(n),this.Nr=n=>t.writeSequenceNumber(n))}Mr(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.Nr&&this.Nr(e),e}}Xe.Br=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Op)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):A.reject(t)}static resolve(e){return new A(((t,n)=>{t(e)}))}static reject(e){return new A(((t,n)=>{n(e)}))}static waitFor(e){return new A(((t,n)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(u=>n(u)))})),o=!0,i===s&&t()}))}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next((s=>s?A.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new A(((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((f=>{o[h]=f,++c,c===i&&n(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new A(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="SimpleDb";class qa{static open(e,t,n,s){try{return new qa(t,e.transaction(s,n))}catch(i){throw new ui(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Lr=new Ct,this.transaction.oncomplete=()=>{this.Lr.resolve()},this.transaction.onabort=()=>{t.error?this.Lr.reject(new ui(e,t.error)):this.Lr.resolve()},this.transaction.onerror=n=>{const s=sl(n.target.error);this.Lr.reject(new ui(e,s))}}get $r(){return this.Lr.promise}abort(e){e&&this.Lr.reject(e),this.aborted||(N(rt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Ur(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new dE(t)}}class En{static delete(e){return N(rt,"Removing database:",e),Xn(lm().indexedDB.deleteDatabase(e)).toPromise()}static cn(){if(!gm())return!1;if(En.kr())return!0;const e=Pe(),t=En.Qr(e),n=0<t&&t<10,s=Mp(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static kr(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static qr(e,t){return e.store(t)}static Qr(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.Kr=n,this.Wr=null,En.Qr(Pe())===12.2&&ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async Gr(e){return this.db||(N(rt,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new ui(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new D(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new D(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new ui(e,o))},s.onupgradeneeded=i=>{N(rt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Kr.jr(o,s.transaction,i.oldVersion,this.version).next((()=>{N(rt,"Database upgrade to version "+this.version+" complete")}))}}))),this.zr&&(this.db.onversionchange=t=>this.zr(t)),this.db}Hr(e){this.zr=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Gr(e);const c=qa.open(this.db,e,i?"readonly":"readwrite",n),u=s(c).next((h=>(c.Ur(),h))).catch((h=>(c.abort(h),A.reject(h)))).toPromise();return u.catch((()=>{})),await c.$r,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(N(rt,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Mp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class hE{constructor(e){this.Jr=e,this.Yr=!1,this.Zr=null}get isDone(){return this.Yr}get Xr(){return this.Zr}set cursor(e){this.Jr=e}done(){this.Yr=!0}ei(e){this.Zr=e}delete(){return Xn(this.Jr.delete())}}class ui extends D{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Un(r){return r.name==="IndexedDbTransactionError"}class dE{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(N(rt,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(N(rt,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Xn(n)}add(e){return N(rt,"ADD",this.store.name,e,e),Xn(this.store.add(e))}get(e){return Xn(this.store.get(e)).next((t=>(t===void 0&&(t=null),N(rt,"GET",this.store.name,e,t),t)))}delete(e){return N(rt,"DELETE",this.store.name,e),Xn(this.store.delete(e))}count(){return N(rt,"COUNT",this.store.name),Xn(this.store.count())}ti(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A(((o,c)=>{i.onerror=u=>{c(u.target.error)},i.onsuccess=u=>{o(u.target.result)}}))}{const i=this.cursor(n),o=[];return this.ni(i,((c,u)=>{o.push(u)})).next((()=>o))}}ri(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}ii(e,t){N(rt,"DELETE ALL",this.store.name);const n=this.options(e,t);n.si=!1;const s=this.cursor(n);return this.ni(s,((i,o,c)=>c.delete()))}_i(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.ni(s,t)}oi(e){const t=this.cursor({});return new A(((n,s)=>{t.onerror=i=>{const o=sl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():n()})):n()}}))}ni(e,t){const n=[];return new A(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const u=new hE(c),h=t(c.primaryKey,c.value,u);if(h instanceof A){const f=h.catch((m=>(u.done(),A.reject(m))));n.push(f)}u.isDone?s():u.Xr===null?c.continue():c.continue(u.Xr)}})).next((()=>A.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.si?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xn(r){return new A(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=sl(n.target.error);t(s)}}))}let Xd=!1;function sl(r){const e=En.Qr(Pe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xd||(Xd=!0,setTimeout((()=>{throw n}),0)),n}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="LruGarbageCollector",Up=1048576;function ef([r,e],[t,n]){const s=W(r,t);return s===0?W(e,n):s}class fE{constructor(e){this.ai=e,this.buffer=new oe(ef),this.ui=0}ci(){return++this.ui}li(e){const t=[e,this.ci()];if(this.buffer.size<this.ai)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ef(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Fp{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ei=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.hi(6e4)}stop(){this.Ei&&(this.Ei.cancel(),this.Ei=null)}get started(){return this.Ei!==null}hi(e){N(Zd,`Garbage collection scheduled in ${e}ms`),this.Ei=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ei=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Un(t)?N(Zd,"Ignoring IndexedDB error during garbage collection: ",t):await Mn(t)}await this.hi(3e5)}))}}class mE{constructor(e,t){this.Ti=e,this.params=t}calculateTargetCount(e,t){return this.Ti.Pi(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Xe.Br);const n=new fE(t);return this.Ti.forEachTarget(e,(s=>n.li(s.sequenceNumber))).next((()=>this.Ti.Ii(e,(s=>n.li(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Ti.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ti.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Jd)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jd):this.Ri(e,t)))}getCacheSize(e){return this.Ti.getCacheSize(e)}Ri(e,t){let n,s,i,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(n=m,c=Date.now(),this.removeTargets(e,n,t)))).next((m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(h=Date.now(),Lr()<=te.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function Bp(r,e){return new mE(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="firestore.googleapis.com",tf=!0;class nf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pE,this.ssl=tf}else this.host=e.host,this.ssl=e.ssl??tf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=kp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Up)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(XI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cp(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new D(S.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const c of i)if(n[c]!==s[c])return!1;return!0})(this._customHeaders,e._customHeaders)}}let il=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Hw;switch(n.type){case"firstParty":return new Jw(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Yd.get(t);n&&(N(uE,"Removing Datastore"),Yd.delete(t),n.terminate())})(this),Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class we{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ki(t,we._jsonSchema))return new we(e,n||null,new U(ee.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:Ie("string",we._jsonSchemaVersion),referencePath:Ie("string")};class Tn extends Fn{constructor(e,t,n){super(e,t,La(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new U(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function uP(r,e,...t){if(r=De(r),Sm("collection","path",e),r instanceof il){const n=ee.fromString(e,...t);return Ed(n),new Tn(r,null,n)}{if(!(r instanceof we||r instanceof Tn))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ee.fromString(e,...t));return Ed(n),new Tn(r.firestore,null,n)}}function lP(r,e,...t){if(r=De(r),arguments.length===1&&(e=Uu.newId()),Sm("doc","path",e),r instanceof il){const n=ee.fromString(e,...t);return wd(n),new we(r,null,new U(n))}{if(!(r instanceof we||r instanceof Tn))throw new D(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ee.fromString(e,...t));return wd(n),new we(r.firestore,r instanceof Tn?r.converter:null,new U(n))}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.pattern=e,this.options=t}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ki(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ze(e.vectorValues);throw new D(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:Ie("string",Ze._jsonSchemaVersion),vectorValues:Ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=/^__.*__$/;class _E{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new en(e,this.data,this.fieldMask,t,this.fieldTransforms):new ws(e,this.data,t,this.fieldTransforms)}}class qp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new en(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $p(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:r})}}class al{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new al({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ca(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if($p(this.dataSource)&&gE.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class yE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ua(e)}createContext(e,t,n,s=!1){return new al({dataSource:e,methodName:t,targetDoc:n,path:be.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cl(r){const e=r._freezeSettings(),t=Ua(r._databaseId);return new yE(r._databaseId,!!e.ignoreUndefinedProperties,t)}function jp(r,e,t,n,s,i={}){const o=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);ll("Data must be an object, but it was:",o,n);const c=zp(n,o);let u,h;if(i.merge)u=new Je(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Sn(e,m,t);if(!o.contains(_))throw new D(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Hp(f,_)||f.push(_)}u=new Je(f),h=o.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,h=o.fieldTransforms;return new _E(new Le(c),u,h)}class $a extends Ba{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $a}}class ul extends Ba{_toFieldTransform(e){return new Xm(e.path,new ns)}isEqual(e){return e instanceof ul}}function IE(r,e,t,n){const s=r.createContext(1,e,t);ll("Data must be an object, but it was:",s,n);const i=[],o=Le.empty();On(n,((u,h)=>{const f=Wp(e,u,t);h=De(h);const m=s.childContextForFieldPath(f);if(h instanceof $a)i.push(f);else{const _=Vn(h,m);_!=null&&(i.push(f),o.set(f,_))}}));const c=new Je(i);return new qp(o,c,s.fieldTransforms)}function wE(r,e,t,n,s,i){const o=r.createContext(1,e,t),c=[Sn(e,n,t)],u=[s];if(i.length%2!=0)throw new D(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(Sn(e,i[_])),u.push(i[_+1]);const h=[],f=Le.empty();for(let _=c.length-1;_>=0;--_)if(!Hp(h,c[_])){const R=c[_];let C=u[_];C=De(C);const O=o.childContextForFieldPath(R);if(C instanceof $a)h.push(R);else{const M=Vn(C,O);M!=null&&(h.push(R),f.set(R,M))}}const m=new Je(h);return new qp(f,m,o.fieldTransforms)}function EE(r,e,t,n=!1){return Vn(t,r.createContext(n?4:3,e))}function Vn(r,e,t){if(Kp(r=De(r)))return ll("Unsupported field value:",e,r),zp(r,e);if(r instanceof Ba)return(function(s,i){if(!$p(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const o=[];let c=0;for(const u of s){let h=Vn(u,i.childContextForArray(c));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),c++}return{arrayValue:{values:o}}})(r,e)}return(function(s,i,o){if((s=De(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Da(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=ie.fromDate(s);return{timestampValue:ar(i.serializer,c)}}if(s instanceof ie){const c=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ar(i.serializer,c)}}if(Gp(s)){const c=ie.fromInstant(s),u=new ie(c.seconds,1e3*Math.floor(c.nanoseconds/1e3));return{timestampValue:ar(i.serializer,u)}}if(s instanceof xt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof st)return s.subtype===0?{bytesValue:hu(i.serializer,s._byteString)}:(function(u,h){const f=h.toUint8Array(),m=new Uint8Array(f.length+1);return m[0]=h.subtype,m.set(f,1),{mapValue:{fields:{[Zr]:{bytesValue:hu(u,ue.fromUint8Array(m))}}}}})(i.serializer,s);if(s instanceof we){const c=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(c))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Zu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Ze)return(function(u,h){const f=u instanceof Ze?u.toArray():u;return{mapValue:{fields:{[Ca]:{stringValue:Na},[yr]:{arrayValue:{values:f.map((_=>{if(typeof _!="number")throw h.createError("VectorValues must only contain numeric values.");return ju(h.serializer,_)}))}}}}}})(s,i);if(s instanceof ol)return(function(u){return{mapValue:{fields:{[At]:{mapValue:{fields:{[Jr]:{stringValue:u.pattern},[Xr]:{stringValue:u.options}}}}}}}})(s);if(s instanceof el)return(function(u){return{mapValue:{fields:{[Ir]:{stringValue:u.value}}}}})(s);if(s instanceof rl)return(function(u){return{mapValue:{fields:{[Ln]:$r(u.value)}}}})(s);if(s instanceof nl)return(function(u){return{mapValue:{fields:{[Wt]:{stringValue:u.stringValue}}}}})(s);if(s instanceof tl)return(function(u){return{mapValue:{fields:{[Ut]:{mapValue:{fields:{[wi]:$r(u.seconds),[Ei]:$r(u.increment)}}}}}}})(s);if(s instanceof Bt)return(function(){return{mapValue:{fields:{[Bu]:{nullValue:"NULL_VALUE"}}}}})();if(s instanceof Ft)return(function(){return{mapValue:{fields:{[Hi]:{nullValue:"NULL_VALUE"}}}}})();if(xp(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Sa(s)}`)})(r,e)}function zp(r,e){const t={};return Vm(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):On(r,((n,s)=>{const i=Vn(s,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function Gp(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;const e=r;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function Kp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ie||r instanceof xt||r instanceof st||r instanceof we||r instanceof Ba||r instanceof Ze||r instanceof Bt||r instanceof Ft||r instanceof rl||r instanceof nl||r instanceof ol||r instanceof el||r instanceof tl||Gp(r)||xp(r))}function ll(r,e,t){if(!Kp(t)||!Gi(t)){const n=Sa(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function Sn(r,e,t){if((e=De(e))instanceof Fa)return e._internalPath;if(typeof e=="string")return Wp(r,e);throw ca("Field path arguments must be of type string or ",r,!1,void 0,t)}const TE=new RegExp("[~\\*/\\[\\]]");function Wp(r,e,t){if(e.search(TE)>=0)throw ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Fa(...e.split("."))._internalPath}catch{throw ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ca(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new D(S.INVALID_ARGUMENT,c+r+u)}function Hp(r,e){return r.some((t=>t.isEqual(e)))}function Qp(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=Le.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let c;i.nestedOptions&&Gi(o)?c={mapValue:{fields:new Ke(i.nestedOptions).getOptionsProto(t,o)}}:o&&(c=Vn(o,t)??void 0),c&&n.set(be.fromServerFormat(i.serverName),c)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(JI(n,((o,c)=>[be.fromServerFormat(c),o!==void 0?Vn(o,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Gi(t.fields))})(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(r.pipelineValue)))}function hP(){return new ul("serverTimestamp")}function AE(r){return new Ze(r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r){let e;return r instanceof Bn?r:(e=Gi(r)?SE(r):r instanceof Array?xE(r):Yp(r,void 0),e)}function Fc(r){if(r instanceof Bn)return r;if(r instanceof Ze)return Ci(r);if(Array.isArray(r))return Ci(AE(r));throw new Error("Unsupported value: "+typeof r)}function ja(r){return tu(r)?$o(r):L(r)}class Bn{constructor(){this._protoValueType="ProtoValue"}add(e){return new x("add",[this,L(e)],"add")}asBoolean(){if(this instanceof xn)return this;if(this instanceof Ar)return new Xp(this);if(this instanceof vr)return new VE(this);if(this instanceof x)return new Jp(this);throw new D("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new x("subtract",[this,L(e)],"subtract")}multiply(e){return new x("multiply",[this,L(e)],"multiply")}divide(e){return new x("divide",[this,L(e)],"divide")}mod(e){return new x("mod",[this,L(e)],"mod")}equal(e){return new x("equal",[this,L(e)],"equal").asBoolean()}notEqual(e){return new x("not_equal",[this,L(e)],"notEqual").asBoolean()}lessThan(e){return new x("less_than",[this,L(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new x("less_than_or_equal",[this,L(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new x("greater_than",[this,L(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new x("greater_than_or_equal",[this,L(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((s=>L(s)));return new x("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new x("array_contains",[this,L(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new ti(e.map(L),"arrayContainsAll"):e;return new x("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new ti(e.map(L),"arrayContainsAny"):e;return new x("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new x("array_reverse",[this])}arrayLength(){return new x("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new ti(e.map(L),"equalAny"):e;return new x("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new ti(e.map(L),"notEqualAny"):e;return new x("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new x("exists",[this],"exists").asBoolean()}charLength(){return new x("char_length",[this],"charLength")}like(e){return new x("like",[this,L(e)],"like").asBoolean()}regexContains(e){return new x("regex_contains",[this,L(e)],"regexContains").asBoolean()}regexFind(e){return new x("regex_find",[this,L(e)],"regexFind")}regexFindAll(e){return new x("regex_find_all",[this,L(e)],"regexFindAll")}regexMatch(e){return new x("regex_match",[this,L(e)],"regexMatch").asBoolean()}stringContains(e){return new x("string_contains",[this,L(e)],"stringContains").asBoolean()}startsWith(e){return new x("starts_with",[this,L(e)],"startsWith").asBoolean()}endsWith(e){return new x("ends_with",[this,L(e)],"endsWith").asBoolean()}toLower(){return new x("to_lower",[this],"toLower")}toUpper(){return new x("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(L(e)),new x("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(L(e)),new x("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(L(e)),new x("rtrim",t,"rtrim")}type(){return new x("type",[this])}isType(e){return new x("is_type",[this,Ci(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(L);return new x("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new x("string_index_of",[this,L(e)],"stringIndexOf")}stringRepeat(e){return new x("string_repeat",[this,L(e)],"stringRepeat")}stringReplaceAll(e,t){return new x("string_replace_all",[this,L(e),L(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new x("string_replace_one",[this,L(e),L(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(L);return new x("concat",[this,...n],"concat")}reverse(){return new x("reverse",[this],"reverse")}arrayFilter(e,t){return new x("array_filter",[this,L(e),t],"arrayFilter")}arrayTransform(e,t){return new x("array_transform",[this,L(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new x("array_transform",[this,L(e),L(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,L(e)];return t!==void 0&&n.push(L(t)),new x("array_slice",n,"arraySlice")}arrayFirst(){return new x("array_first",[this],"arrayFirst")}arrayFirstN(e){return new x("array_first_n",[this,L(e)],"arrayFirstN")}arrayLast(){return new x("array_last",[this],"arrayLast")}arrayLastN(e){return new x("array_last_n",[this,L(e)],"arrayLastN")}arrayMaximum(){return new x("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new x("maximum_n",[this,L(e)],"arrayMaximumN")}arrayMinimum(){return new x("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new x("minimum_n",[this,L(e)],"arrayMinimumN")}arrayIndexOf(e){return new x("array_index_of",[this,L(e),L("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new x("array_index_of",[this,L(e),L("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new x("array_index_of_all",[this,L(e)],"arrayIndexOfAll")}byteLength(){return new x("byte_length",[this],"byteLength")}ceil(){return new x("ceil",[this])}floor(){return new x("floor",[this])}abs(){return new x("abs",[this])}exp(){return new x("exp",[this])}mapGet(e){return new x("map_get",[this,Ci(e)],"mapGet")}mapSet(e,t,...n){const s=[this,L(e),L(t),...n.map(L)];return new x("map_set",s,"mapSet")}mapKeys(){return new x("map_keys",[this],"mapKeys")}mapValues(){return new x("map_values",[this],"mapValues")}mapEntries(){return new x("map_entries",[this],"mapEntries")}getField(e){return new x("get_field",[this,L(e)],"get_field")}count(){return nt._create("count",[this],"count")}sum(){return nt._create("sum",[this],"sum")}average(){return nt._create("average",[this],"average")}minimum(){return nt._create("minimum",[this],"minimum")}maximum(){return nt._create("maximum",[this],"maximum")}first(){return nt._create("first",[this],"first")}last(){return nt._create("last",[this],"last")}arrayAgg(){return nt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return nt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return nt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new x("maximum",[this,...n.map(L)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new x("minimum",[this,...n.map(L)],"minimum")}vectorLength(){return new x("vector_length",[this],"vectorLength")}cosineDistance(e){return new x("cosine_distance",[this,Fc(e)],"cosineDistance")}dotProduct(e){return new x("dot_product",[this,Fc(e)],"dotProduct")}euclideanDistance(e){return new x("euclidean_distance",[this,Fc(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new x("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new x("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new x("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new x("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new x("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new x("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new x("timestamp_add",[this,L(e),L(t)],"timestampAdd")}timestampSubtract(e,t){return new x("timestamp_subtract",[this,L(e),L(t)],"timestampSubtract")}timestampDiff(e,t){return new x("timestamp_diff",[this,ja(e),L(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,L(e)];return t&&n.push(L(t)),new x("timestamp_extract",n,"timestampExtract")}documentId(){return new x("document_id",[this],"documentId")}parent(){return new x("parent",[this],"parent")}substring(e,t){const n=L(e);return new x("substring",t===void 0?[this,n]:[this,n,L(t)],"substring")}arrayGet(e){return new x("array_get",[this,L(e)],"arrayGet")}isError(){return new x("is_error",[this],"isError").asBoolean()}ifError(e){const t=new x("if_error",[this,L(e)],"ifError");return e instanceof xn?t.asBoolean():t}isAbsent(){return new x("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new x("map_remove",[this,L(e)],"mapRemove")}mapMerge(e,...t){const n=L(e),s=t.map(L);return new x("map_merge",[this,n,...s],"mapMerge")}pow(e){return new x("pow",[this,L(e)])}trunc(e){return e===void 0?new x("trunc",[this]):new x("trunc",[this,L(e)],"trunc")}round(e){return e===void 0?new x("round",[this]):new x("round",[this,L(e)],"round")}collectionId(){return new x("collection_id",[this])}length(){return new x("length",[this])}ln(){return new x("ln",[this])}sqrt(){return new x("sqrt",[this])}stringReverse(){return new x("string_reverse",[this])}ifAbsent(e){return new x("if_absent",[this,L(e)],"ifAbsent")}ifNull(e){return new x("if_null",[this,L(e)],"ifNull")}coalesce(e,...t){return new x("coalesce",[this,L(e),...t.map(L)],"coalesce")}join(e){return new x("join",[this,L(e)],"join")}log10(){return new x("log10",[this])}arraySum(){return new x("sum",[this])}split(e){return new x("split",[this,L(e)])}timestampTruncate(e,t){const n=[this,L(e)];return t&&n.push(L(t)),new x("timestamp_trunc",n)}ascending(){return CE(this)}descending(){return NE(this)}as(e){return new PE(this,e,"as")}}class nt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new nt(e,t);return s._methodName=n,s}as(e){return new bE(this,e,"as")}over(e){return new dl(this.name,this.params,new Zp(e),"over")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class bE{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class PE{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class ti extends Bn{constructor(e,t){super(),this.di=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.di.map((t=>t._toProto(e)))}}}_readUserData(e){this.di.forEach((t=>t._readUserData(e)))}}class vr extends Bn{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new x("geo_distance",[this,L(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function $o(r){return RE(r,"field")}function RE(r,e){return new vr(typeof r=="string"?vt===r?Kw()._internalPath:Sn("field",r):r._internalPath,e)}class Ar extends Bn{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Ar(e,void 0);return t._protoValue=e,t}_toProto(e){return k(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,vE(this._protoValue)||(this._protoValue=Vn(this.value,e))}}function Ci(r,e){return Yp(r,"constant")}function Yp(r,e){const t=new Ar(r,e);return typeof r=="boolean"?new Xp(t):t}class x extends Bn{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ke({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class xn extends Bn{get _methodName(){return this._expr._methodName}countIf(){return nt._create("count_if",[this],"countIf")}not(){return new x("not",[this],"not").asBoolean()}conditional(e,t){return new x("conditional",[this,e,t],"conditional")}ifError(e){const t=L(e),n=new x("if_error",[this,t],"ifError");return t instanceof xn?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Jp extends xn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Xp extends xn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class VE extends xn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function SE(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(Ci(n)),t.push(L(s))}return new x("map",t,"map")}function xE(r){return(function(t,n){return new x("array",t.map((s=>L(s))),n)})(r,"array")}function CE(r){return new hl(ja(r),"ascending","ascending")}function NE(r){return new hl(ja(r),"descending","descending")}class hl{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:aa(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}function Vo(r){return r instanceof Bn}class Zp{constructor(e){this._protoValueType="ProtoValue";const t=e.sort;this.partition=(e.partition??[]).map(ja),this.sort=t===void 0?[]:Array.isArray(t)?t:[t],this.documents=e.documents,this.range=e.range}_toProto(e){const t={};return this.partition.length>0&&(t.partition={arrayValue:{values:this.partition.map((n=>n._toProto(e)))}}),this.sort.length>0&&(t.sort={arrayValue:{values:this.sort.map((n=>n._toProto(e)))}}),this.documents!==void 0&&(t.documents=this.frameToProto(e,this.documents)),this.range!==void 0&&(t.range=this.frameToProto(e,this.range)),{mapValue:{fields:t}}}_readUserData(e){this.partition.forEach((t=>t._readUserData(e))),this.sort.forEach((t=>t._readUserData(e)));for(const t of[this.documents,this.range]){if(t===void 0)continue;Vo(t.preceding)&&t.preceding._readUserData(e),Vo(t.following)&&t.following._readUserData(e);const n=t.unit;n!==void 0&&Vo(n)&&n._readUserData(e)}}frameToProto(e,t){const n={};t.preceding!==void 0&&(n.preceding=this.frameBoundToProto(e,t.preceding,"preceding")),t.following!==void 0&&(n.following=this.frameBoundToProto(e,t.following,"following"));const s=t.unit;return s!==void 0&&(n.unit=tu(s)?aa(s):s._toProto(e)),{mapValue:{fields:n}}}frameBoundToProto(e,t,n){if(typeof t=="number")return Da(e,t);if(tu(t))return aa(t);if(Vo(t))return t._toProto(e);throw new D("invalid-argument",`Invalid window frame bound: '${n}'. Expected a number, 'current', 'unbounded', or an Expression.`)}}class dl{constructor(e,t=[],n,s){this.name=e,this.params=t,this.window=n,this._methodName=s,this.exprType="WindowFunction",this._protoValueType="ProtoValue"}over(e){return new dl(this.name,this.params,new Zp(e),this._methodName??"over")}as(e){return new DE(this,e,"as")}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this.window===void 0?t:{functionValue:{name:"over",args:[t,this.window._toProto(e)]}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this.window?._readUserData(e)}}class DE{constructor(e,t,n){this.windowFunction=e,this.alias=t,this._methodName=n}_readUserData(e){this.windowFunction._readUserData(e)}}class ct{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class eg extends ct{get _name(){return"add_fields"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.fields)]}}_readUserData(e){super._readUserData(e),Nn(this.fields,e)}}class tg extends ct{get _name(){return"aggregate"}get _optionsUtil(){return new Ke({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[xi(e,this.accumulators),xi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Nn(this.groups,e),Nn(this.accumulators,e)}}class ng extends ct{get _name(){return"distinct"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Nn(this.groups,e)}}class Xi extends ct{get _name(){return"collection"}get _optionsUtil(){return new Ke({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.pi=OE(e)}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.pi}]}}_readUserData(e){super._readUserData(e)}}class Zi extends ct{get _name(){return"collection_group"}get _optionsUtil(){return new Ke({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class za extends ct{get _name(){return"database"}get _optionsUtil(){return new Ke({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Ga extends ct{get _name(){return"documents"}get _optionsUtil(){return new Ke({})}constructor(e,t){if(super(t),!e||e.length===0)throw new D(S.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(n);if(s.size!==n.length)throw new D(S.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.gi=n,this.yi=s}_toProto(e){return{...super._toProto(e),args:this.gi.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class eo extends ct{get _name(){return"where"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Nn(this.condition,e)}}class Cn extends ct{get _name(){return"limit"}get _optionsUtil(){return new Ke({})}constructor(e,t){k(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Da(e,this.limit)]}}}class rf extends ct{get _name(){return"offset"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Da(e,this.offset)]}}}class kE extends ct{get _name(){return"select"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.selections)]}}_readUserData(e){super._readUserData(e),Nn(this.selections,e)}}class Rt extends ct{get _name(){return"sort"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Nn(this.orderings,e)}}class fl extends ct{get _name(){return"replace_with"}get _optionsUtil(){return new Ke({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),aa(fl.bi)]}}_readUserData(e){super._readUserData(e),Nn(this.map,e)}}fl.bi="full_replace";function OE(r){const e=typeof r=="string"?r:r.path;return e.startsWith("/")?e:"/"+e}function Nn(r,e){return Qp(r)?r._readUserData(e):Array.isArray(r)?r.forEach((t=>t._readUserData(e))):r instanceof Map?r.forEach((t=>t._readUserData(e))):Object.values(r).forEach((t=>t._readUserData(e))),r}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,n,s){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=s}Ci(e,t){const n=this.userDataReader.createContext(3,e);return Qp(t)?t._readUserData(n):Array.isArray(t)?t.forEach((s=>s._readUserData(n))):t.forEach((s=>s._readUserData(n))),t}where(e){const t=this.stages.map((n=>n));return this.Ci("where",e),t.push(new eo(e,{})),new li(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((n=>n));return t.push(new Cn(e,{})),new li(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map((s=>s));return"orderings"in e?n.push(new Rt(this.Ci("sort",e.orderings),{})):n.push(new Rt(this.Ci("sort",[e,...t]),{})),new li(this._db,this.userDataReader,this._userDataWriter,n)}Fi(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class je{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return to(this)}getPipelineCollectionGroup(){return ml(this)}getPipelineCollectionId(){return rg(this)}getPipelineDocuments(){return ua(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((s,i)=>{s._name!==ng.name&&s._name!==tg.name||(n="keyless"),s._name===kE.name&&n==="exact"&&(n="augmented"),s._name===eg.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return jt(this)}}function jt(r){const e=r.stages[0];return e instanceof Xi||e instanceof Zi||e instanceof za||e instanceof Ga?e._name:"unknown"}function to(r){if(jt(r)==="collection")return r.stages[0].pi}function ml(r){if(jt(r)==="collection_group")return r.stages[0].collectionId}function rg(r){switch(jt(r)){case"collection":return ee.fromString(to(r)).lastSegment();case"collection_group":return ml(r);default:return}}function ua(r){if(jt(r)==="documents")return r.stages[0].gi}class E{constructor(e,t){this.type=e,this.value=t}static Oi(){return new E("ERROR",void 0)}static Mi(){return new E("UNSET",void 0)}static Ni(){return new E("NULL",Ht)}static newValue(e){return it(e)?new E("NULL",Ht):(function(n){return!!n&&"booleanValue"in n})(e)?new E("BOOLEAN",e):bt(e)?new E("INT",e):Pt(e)?new E("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new E("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new E("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new E("BYTES",e):e.referenceValue?new E("REFERENCE",e):e.geoPointValue?new E("GEO_POINT",e):Rn(e)?new E("ARRAY",e):ru(e)?new E("VECTOR",e):or(e)?new E("MAP",e):new E("ERROR",void 0)}Bi(){return this.type==="ERROR"||this.type==="UNSET"}Li(){return this.type==="NULL"}}function hi(r){if(!r.Bi())return r.value}function sg(r){return r instanceof xn?r._expr:r}function K(r){if((r=sg(r))instanceof vr)return new LE(r);if(r instanceof Ar)return new ME(r);if(r instanceof ti)return new UE(r);if(r instanceof x){if(r.name==="add")return new qE(r);if(r.name==="subtract")return new $E(r);if(r.name==="multiply")return new jE(r);if(r.name==="divide")return new zE(r);if(r.name==="mod")return new GE(r);if(r.name==="and")return new KE(r);if(r.name==="equal")return new sT(r);if(r.name==="not_equal")return new iT(r);if(r.name==="less_than")return new oT(r);if(r.name==="less_than_or_equal")return new aT(r);if(r.name==="greater_than")return new cT(r);if(r.name==="greater_than_or_equal")return new uT(r);if(r.name==="array_concat")return new lT(r);if(r.name==="array_reverse")return new hT(r);if(r.name==="array_contains")return new dT(r);if(r.name==="array_contains_all")return new fT(r);if(r.name==="array_contains_any")return new mT(r);if(r.name==="array_length")return new pT(r);if(r.name==="array_element")return new gT(r);if(r.name==="equal_any")return new ig(r);if(r.name==="not_equal_any")return new HE(r);if(r.name==="is_nan")return new QE(r);if(r.name==="is_not_nan")return new YE(r);if(r.name==="is_null")return new JE(r);if(r.name==="is_not_null")return new XE(r);if(r.name==="is_error")return new ZE(r);if(r.name==="exists")return new eT(r);if(r.name==="not")return new Ka(r);if(r.name==="or")return new WE(r);if(r.name==="xor")return new pl(r);if(r.name==="conditional")return new tT(r);if(r.name==="maximum")return new nT(r);if(r.name==="minimum")return new rT(r);if(r.name==="reverse")return new _T(r);if(r.name==="replace_first")return new yT(r);if(r.name==="replace_all")return new IT(r);if(r.name==="char_length")return new wT(r);if(r.name==="byte_length")return new ET(r);if(r.name==="like")return new TT(r);if(r.name==="regex_contains")return new vT(r);if(r.name==="regex_match")return new AT(r);if(r.name==="string_contains")return new bT(r);if(r.name==="starts_with")return new PT(r);if(r.name==="ends_with")return new RT(r);if(r.name==="to_lower")return new VT(r);if(r.name==="to_upper")return new ST(r);if(r.name==="trim")return new xT(r);if(r.name==="string_concat")return new CT(r);if(r.name==="map_get")return new NT(r);if(r.name==="cosine_distance")return new DT(r);if(r.name==="dot_product")return new kT(r);if(r.name==="euclidean_distance")return new OT(r);if(r.name==="vector_length")return new LT(r);if(r.name==="unix_micros_to_timestamp")return new qT(r);if(r.name==="timestamp_to_unix_micros")return new zT(r);if(r.name==="unix_millis_to_timestamp")return new $T(r);if(r.name==="timestamp_to_unix_millis")return new GT(r);if(r.name==="unix_seconds_to_timestamp")return new jT(r);if(r.name==="timestamp_to_unix_seconds")return new KT(r);if(r.name==="timestamp_add")return new WT(r);if(r.name==="timestamp_subtract")return new HT(r)}throw new Error(`Unknown Expr : ${r}`)}class LE{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===vt)return E.newValue({referenceValue:Si(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return E.newValue({timestampValue:qo(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return E.newValue({timestampValue:qo(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Fu(n)?E.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:qo(i.serializer,j.fromTimestamp(Qr(o)))};if(i.serverTimestampBehavior==="previous"){const c=Wi(o);if(c)return c}return{nullValue:"NULL_VALUE"}})(e,n)):E.newValue(n):E.Mi()}}class ME{constructor(e){this.expr=e}evaluate(e,t){return E.newValue(this.expr._getValue())}}class UE{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.di.map((s=>K(s).evaluate(e,t)));return n.some((s=>s.Bi()))?E.Oi():E.newValue({arrayValue:{values:n.map((s=>s.value))}})}}function Ue(r){return Pt(r)?Number(r.doubleValue):Number(r.integerValue)}function Dt(r){return BigInt(r.integerValue)}const FE=BigInt("0x7fffffffffffffff"),BE=-BigInt("0x8000000000000000");class no{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length>=2,24778);const n=K(this.expr.params[0]).evaluate(e,t),s=K(this.expr.params[1]).evaluate(e,t);let i=this.$i(n,s);for(const o of this.expr.params.slice(2)){const c=K(o).evaluate(e,t);i=this.$i(i,c)}return i}$i(e,t){if(e.Bi()||t.Bi())return E.Oi();if(e.Li()||t.Li())return E.Ni();const n=e.value,s=t.value;if(!Pt(n)&&!bt(n)||!Pt(s)&&!bt(s))return E.Oi();if(Pt(n)||Pt(s)){const i=this.Ui(n,s);return i?E.newValue(i):E.Oi()}if(bt(n)&&bt(s)){const i=this.ki(n,s);return i===void 0?E.Oi():typeof i=="number"?E.newValue({doubleValue:i}):i<BE||i>FE?E.Oi():E.newValue({integerValue:`${i}`})}return E.Oi()}}function Yt(r,e){return Te(r)!==Te(e)?"TYPE_MISMATCH":Ne(r)||Ne(e)?"NOT_EQ":it(r)&&it(e)?"EQ":it(r)||it(e)?"NULL":Rn(r)&&Rn(e)?(function(n,s){if(n.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let o=0;o<(n.values?.length??0);o++){const c=n.values[o],u=s.values[o];switch(Yt(c,u)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:B(44609,{Qi:c,qi:u})}}return i?"NULL":"EQ"})(r.arrayValue,e.arrayValue):ru(r)&&ru(e)||or(r)&&or(e)?(function(n,s){const i=n.fields||{},o=s.fields||{};if(_r(i)!==_r(o))return"NOT_EQ";let c=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(Yt(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"})(r.mapValue,e.mapValue):(function(n,s){return ht(n,s,{be:!1,ye:!0,we:!0})})(r,e)?"EQ":"NOT_EQ"}class qE extends no{ki(e,t){return Dt(e)+Dt(t)}Ui(e,t){return{doubleValue:Ue(e)+Ue(t)}}}class $E extends no{constructor(e){super(e),this.expr=e}ki(e,t){return Dt(e)-Dt(t)}Ui(e,t){return{doubleValue:Ue(e)-Ue(t)}}}class jE extends no{constructor(e){super(e),this.expr=e}ki(e,t){return Dt(e)*Dt(t)}Ui(e,t){return{doubleValue:Ue(e)*Ue(t)}}}class zE extends no{constructor(e){super(e),this.expr=e}ki(e,t){const n=Dt(t);if(n!==BigInt(0))return Dt(e)/n}Ui(e,t){const n=Ue(t);return n===0?{doubleValue:Yr(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ue(e)/n}}}class GE extends no{constructor(e){super(e),this.expr=e}ki(e,t){const n=Dt(t);if(n!==BigInt(0))return Dt(e)%n}Ui(e,t){const n=Ue(t);if(n!==0)return{doubleValue:Ue(e)%n}}}class KE{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(const i of this.expr.params){const o=K(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!o.value?.booleanValue)return E.newValue(Ce);break;case"NULL":s=!0;break;default:n=!0}}return n?E.Oi():s?E.Ni():E.newValue(et)}}class Ka{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,9634);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return E.newValue({booleanValue:!n.value?.booleanValue});case"NULL":return E.Ni();default:return E.Oi()}}}class WE{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(const i of this.expr.params){const o=K(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(o.value?.booleanValue)return E.newValue(et);break;case"NULL":s=!0;break;default:n=!0}}return n?E.Oi():s?E.Ni():E.newValue(Ce)}}class pl{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(const i of this.expr.params){const o=K(i).evaluate(e,t);switch(o.type){case"BOOLEAN":n=pl.xor(n,!!o.value?.booleanValue);break;case"NULL":s=!0;break;default:return E.Oi()}}return s?E.Ni():E.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class ig{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===2,55094);let n=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return E.Oi()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return E.Oi()}if(n)return E.Ni();for(const o of i.value?.arrayValue?.values??[])switch(it(s.value)&&it(o)?"EQ":Yt(s.value,o)){case"EQ":return E.newValue(et);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:B(44608,{value:s.value,candidate:o})}return n?E.Ni():E.newValue(Ce)}}class HE{constructor(e){this.expr=e}evaluate(e,t){return new Ka(new x("not",[new x("equal_any",this.expr.params)])).evaluate(e,t)}}class QE{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,23322);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return E.newValue(Ce);case"DOUBLE":return E.newValue({booleanValue:isNaN(Ue(n.value))});case"NULL":return E.Ni();default:return E.Oi()}}}class YE{constructor(e){this.expr=e}evaluate(e,t){return k(this.expr.params.length===1,50406),new Ka(new x("not",[new x("is_nan",this.expr.params)])).evaluate(e,t)}}class JE{constructor(e){this.expr=e}evaluate(e,t){switch(k(this.expr.params.length===1,23123),K(this.expr.params[0]).evaluate(e,t).type){case"NULL":return E.newValue(et);case"UNSET":case"ERROR":return E.Oi();default:return E.newValue(Ce)}}}class XE{constructor(e){this.expr=e}evaluate(e,t){return k(this.expr.params.length===1,23167),new Ka(new x("not",[new x("is_null",this.expr.params)])).evaluate(e,t)}}class ZE{constructor(e){this.expr=e}evaluate(e,t){return k(this.expr.params.length===1,5228),K(this.expr.params[0]).evaluate(e,t).type==="ERROR"?E.newValue(et):E.newValue(Ce)}}class eT{constructor(e){this.expr=e}evaluate(e,t){switch(k(this.expr.params.length===1,6877),K(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return E.Oi();case"UNSET":return E.newValue(Ce);default:return E.newValue(et)}}}class tT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===3,11706);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return n.value?.booleanValue?K(this.expr.params[1]).evaluate(e,t):K(this.expr.params[2]).evaluate(e,t);case"NULL":return K(this.expr.params[2]).evaluate(e,t);default:return E.Oi()}}}class nT{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>K(i).evaluate(e,t)));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Ge(i.value,s.value)>0?i:s}return s===void 0?E.Ni():s}}class rT{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>K(i).evaluate(e,t)));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Ge(i.value,s.value)<0?i:s}return s===void 0?E.Ni():s}}class vs{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return E.Oi()}const s=K(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return E.Oi()}return this.Ki(n,s)}}class sT extends vs{constructor(e){super(e),this.expr=e}Ki(e,t){if(e.Li()&&t.Li())return E.newValue(et);if(e.Li()||t.Li()||Ne(e.value)||Ne(t.value)||Te(e.value)!==Te(t.value))return E.newValue(Ce);switch(Yt(e.value,t.value)){case"EQ":return E.newValue(et);case"NOT_EQ":return E.newValue(Ce);case"NULL":return E.Ni();default:B(44615,{left:e,right:t})}}}class iT extends vs{constructor(e){super(e),this.expr=e}Ki(e,t){switch(Yt(e.value,t.value)){case"EQ":return E.newValue(Ce);case"NOT_EQ":case"TYPE_MISMATCH":return E.newValue(et);case"NULL":return E.Ni();default:B(44614,{left:e,right:t})}}}class oT extends vs{constructor(e){super(e),this.expr=e}Ki(e,t){return Te(e.value)!==Te(t.value)||Ne(e.value)||Ne(t.value)?E.newValue(Ce):E.newValue({booleanValue:Ge(e.value,t.value)<0})}}class aT extends vs{constructor(e){super(e),this.expr=e}Ki(e,t){return Te(e.value)!==Te(t.value)||Ne(e.value)||Ne(t.value)?E.newValue(Ce):Yt(e.value,t.value)==="EQ"?E.newValue(et):E.newValue({booleanValue:Ge(e.value,t.value)<0})}}class cT extends vs{constructor(e){super(e),this.expr=e}Ki(e,t){return Te(e.value)!==Te(t.value)||Ne(e.value)||Ne(t.value)?E.newValue(Ce):E.newValue({booleanValue:Ge(e.value,t.value)>0})}}class uT extends vs{constructor(e){super(e),this.expr=e}Ki(e,t){return Te(e.value)!==Te(t.value)||Ne(e.value)||Ne(t.value)?E.newValue(Ce):Yt(e.value,t.value)==="EQ"?E.newValue(et):E.newValue({booleanValue:Ge(e.value,t.value)>0})}}class lT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class hT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,216);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return E.Ni();case"ARRAY":{const s=n.value.arrayValue?.values??[];return E.newValue({arrayValue:{values:[...s].reverse()}})}default:return E.Oi()}}}class dT{constructor(e){this.expr=e}evaluate(e,t){return k(this.expr.params.length===2,52884),new ig(new x("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class fT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===2,1392);let n=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return E.Oi()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return E.Oi()}if(n)return E.Ni();const o=i.value?.arrayValue?.values??[],c=s.value?.arrayValue?.values??[];for(const u of o){let h=!1;n=!1;for(const f of c){switch(it(u)&&it(f)?"EQ":Yt(u,f)){case"EQ":h=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:B(44613,{value:f,search:u})}if(h)break}if(!h)return E.newValue(Ce)}return E.newValue(et)}}class mT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===2,2680);let n=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return E.Oi()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return E.Oi()}if(n)return E.Ni();const o=i.value?.arrayValue?.values??[],c=s.value?.arrayValue?.values??[];for(const u of c)for(const h of o)switch(it(u)&&it(h)?"EQ":Yt(u,h)){case"EQ":return E.newValue(et);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:B(60403,{value:u,search:h})}return n?E.Ni():E.newValue(Ce)}}class pT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,38605);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return E.Ni();case"ARRAY":return E.newValue({integerValue:`${n.value?.arrayValue?.values?.length??0}`});default:return E.Oi()}}}class gT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _T{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,1508);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return E.Ni();case"BYTES":{const s=n.value?.bytesValue;if(typeof s=="string"){const i=ue.fromBase64String(s).toUint8Array();return i.reverse(),E.newValue({bytesValue:ue.fromUint8Array(i).toBase64()})}return E.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{const s=n.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),o=Array.from(i,(c=>c.segment)).reverse();return E.newValue({stringValue:o.join("")})}default:return E.Oi()}}}class yT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class IT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class wT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,19400);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return E.Ni();case"STRING":{const s=(function(o){let c=0;for(let u=0;u<o.length;u++){const h=o.codePointAt(u);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const f=o.codePointAt(u+1);f!==void 0&&f>=56320&&f<=57343?(c+=1,u++):c+=1}else c+=1;else c+=1;else{if(!(h<=1114111))return;c+=1,u++}}return c})(n.value.stringValue);return s===void 0?E.Oi():E.newValue({integerValue:s})}default:return E.Oi()}}}class ET{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,8486);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const s=n.value?.bytesValue;return typeof s=="string"?E.newValue({integerValue:ue.fromBase64String(s).toUint8Array().length}):E.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{const s=(function(o){let c=0;for(let u=0;u<o.length;u++){const h=o.codePointAt(u);if(h===void 0)return;if(h>=55296&&h<=57343){if(!(h<=56319))return;{const f=o.codePointAt(u+1);if(f===void 0||!(f>=56320&&f<=57343))return;c+=4,u++}}else if(h<=127)c+=1;else if(h<=2047)c+=2;else if(h<=65535)c+=3;else{if(!(h<=1114111))return;c+=4,u++}}return c})(n.value?.stringValue);return s===void 0?E.Oi():E.newValue({integerValue:s})}case"NULL":return E.Ni();default:return E.Oi()}}}class As{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return E.Oi()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return E.Oi()}return n?E.Ni():this.Wi(s.value?.stringValue,i.value?.stringValue)}}class TT extends As{Wi(e,t){try{const n=(function(o){let c="";for(let u=0;u<o.length;u++){const h=o.charAt(u);switch(h){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+h;break;default:c+=h}}return"^"+c+"$"})(t),s=ku.compile(n);return E.newValue({booleanValue:s.matches(e)})}catch(n){return yt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),E.Oi()}}}class vT extends As{Wi(e,t){try{const n=ku.compile(t);return E.newValue({booleanValue:n.test(e)})}catch{return yt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),E.Oi()}}}class AT extends As{Wi(e,t){try{return E.newValue({booleanValue:ku.compile(t).matches(e)})}catch{return yt(`Invalid regex pattern found in regex_match: ${t}, returning error`),E.Oi()}}}class bT extends As{Wi(e,t){return E.newValue({booleanValue:e.includes(t)})}}class PT extends As{Wi(e,t){return E.newValue({booleanValue:e.startsWith(t)})}}class RT extends As{Wi(e,t){return E.newValue({booleanValue:e.endsWith(t)})}}class VT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,29079);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return E.newValue({stringValue:n.value?.stringValue?.toLowerCase()});case"NULL":return E.Ni();default:return E.Oi()}}}class ST{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,60487);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return E.newValue({stringValue:n.value?.stringValue?.toUpperCase()});case"NULL":return E.Ni();default:return E.Oi()}}}class xT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,28544);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return E.newValue({stringValue:n.value?.stringValue?.trim()});case"NULL":return E.Ni();default:return E.Oi()}}}class CT{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>K(o).evaluate(e,t)));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return E.Oi()}return i?E.Ni():E.newValue({stringValue:s})}}class NT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===2,4483);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return E.Mi();case"MAP":break;default:return E.Oi()}const s=K(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return E.Oi();const i=n.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?E.Mi():E.newValue(i)}}class gl{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return E.Oi()}const i=K(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return E.Oi()}if(n)return E.Ni();const o=su(s.value),c=su(i.value);if(o===void 0||c===void 0||o.values?.length!==c.values?.length)return E.Oi();const u=this.Gi(o,c);return u===void 0||isNaN(u)?E.Oi():E.newValue({doubleValue:u})}}class DT extends gl{Gi(e,t){const n=e?.values??[],s=t?.values??[];if(n.length===0)return;let i=0,o=0,c=0;for(let h=0;h<n.length;h++){if(!Qt(n[h])||!Qt(s[h]))return;const f=Ue(n[h]),m=Ue(s[h]);i+=f*m,o+=f*f,c+=m*m}const u=Math.sqrt(o)*Math.sqrt(c);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class kT extends gl{Gi(e,t){const n=e?.values??[],s=t?.values??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Qt(n[o])||!Qt(s[o]))return;i+=Ue(n[o])*Ue(s[o])}return i}}class OT extends gl{Gi(e,t){const n=e?.values??[],s=t?.values??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Qt(n[o])||!Qt(s[o]))return;const c=Ue(n[o]),u=Ue(s[o]);i+=Math.pow(c-u,2)}return Math.sqrt(i)}}class LT{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,39044);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const s=su(n.value);return E.newValue({integerValue:s?.values?.length??0})}case"NULL":return E.Ni();default:return E.Oi()}}}const Ni=BigInt(-62135596800),Di=BigInt(253402300799),la=BigInt(1e3),vn=BigInt(1e6),MT=Ni*la,UT=Di*la+BigInt(999),FT=Ni*vn,BT=Di*vn+BigInt(999999);function _l(r){return r>=FT&&r<=BT}function og(r){return r>=Ni&&r<=Di}function ki(r,e){const t=BigInt(r);return!(t<Ni||t>Di)&&!(e<0||e>=1e9)&&(t!==Ni||e===0)&&!(t===Di&&e>999999999)}function ag(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function yl(r){return BigInt(r.seconds)*vn+BigInt(Math.trunc(r.nanoseconds/1e3))}class Il{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return E.Ni();default:return E.Oi()}}}class qT extends Il{toTimestamp(e){if(!_l(e))return E.Oi();let t=Number(e/vn),n=Number(e%vn*BigInt(1e3));const s=ag(t,n);return t=s.seconds,n=s.nanos,ki(t,n)?E.newValue({timestampValue:{seconds:t,nanos:n}}):E.Oi()}}class $T extends Il{toTimestamp(e){if(!(function(o){return o>=MT&&o<=UT})(e))return E.Oi();let t=Number(e/la),n=Number(e%la*BigInt(1e6));const s=ag(t,n);return t=s.seconds,n=s.nanos,ki(t,n)?E.newValue({timestampValue:{seconds:t,nanos:n}}):E.Oi()}}class jT extends Il{toTimestamp(e){if(!og(e))return E.Oi();const t=Number(e);return E.newValue({timestampValue:{seconds:t,nanos:0}})}}class wl{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=K(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return E.Ni();default:return E.Oi()}const s=Xu(n.value.timestampValue);return ki(s.seconds,s.nanoseconds)?this.ji(s):E.Oi()}}class zT extends wl{ji(e){const t=yl(e);return _l(t)?E.newValue({integerValue:`${t.toString()}`}):E.Oi()}}class GT extends wl{ji(e){const t=yl(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?E.newValue({integerValue:n.toString()}):E.newValue({integerValue:(n-BigInt(1)).toString()})}}class KT extends wl{ji(e){const t=BigInt(e.seconds);return og(t)?E.newValue({integerValue:t.toString()}):E.Oi()}}class cg{constructor(e){this.expr=e}evaluate(e,t){k(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=K(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return E.Oi()}const i=K(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(J){switch(J){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return E.Oi();break;case"NULL":n=!0;break;default:return E.Oi()}const c=K(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":n=!0;break;default:return E.Oi()}if(n)return E.Ni();const u=BigInt(c.value.integerValue);let h;try{switch(o){case"microsecond":h=u;break;case"millisecond":h=u*BigInt(1e3);break;case"second":h=u*BigInt(1e6);break;case"minute":h=u*BigInt(6e7);break;case"hour":h=u*BigInt(36e8);break;case"day":h=u*BigInt(864e8);break;default:return E.Oi()}if(o!=="microsecond"&&u!==BigInt(0)&&h/u!==BigInt(this.zi(o)))return E.Oi()}catch(H){return yt(`Error during timestamp arithmetic: ${H}`),E.Oi()}const f=Xu(s.value.timestampValue);if(!ki(f.seconds,f.nanoseconds))return E.Oi();const m=yl(f),_=this.Hi(m,h);if(!_l(_))return E.Oi();const R=Number(_/vn),C=_%vn,O=Number((C<0?C+vn:C)*BigInt(1e3)),M=C<0?R-1:R;return ki(M,O)?E.newValue({timestampValue:{seconds:M,nanos:O}}):E.Oi()}zi(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class WT extends cg{Hi(e,t){return e+t}}class HT extends cg{Hi(e,t){return e-t}}function Oi(r){if((r=sg(r))instanceof vr)return`fld(${r.fieldName})`;if(r instanceof Ar)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof we?`ref(${t.path})`:t instanceof Ze?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(r.value)})`;if(r instanceof x)return`fn(${r.name},[${r.params.map(Oi).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.di.map(Oi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function QT(r){if(r instanceof eg)return`${r._name}(${So(r.fields)})`;if(r instanceof tg){let e=`${r._name}(${So(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${So(r.groups)})`),e}if(r instanceof ng)return`${r._name}(${So(r.groups)})`;if(r instanceof Xi)return`${r._name}(${r.pi})`;if(r instanceof Zi)return`${r._name}(${r.collectionId})`;if(r instanceof za)return`${r._name}()`;if(r instanceof Ga)return`${r._name}(${r.gi.sort()})`;if(r instanceof eo)return`${r._name}(${Oi(r.condition)})`;if(r instanceof Cn)return`${r._name}(${r.limit})`;if(r instanceof Rt)return`${r._name}(${(function(t){return t.map((n=>`${Oi(n.expr)}${n.direction}`)).join(",")})(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function So(r){return`${Array.from(r.entries()).sort().map((([e,t])=>`${e}=${Oi(t)}`)).join(",")}`}function zt(r){return r.stages.map((e=>QT(e))).join("|")}function ug(r,e){return zt(r)===zt(e)}function _e(r){return r instanceof je}function sf(r){return _e(r)?zt(r):ai(r)}function lg(r){return _e(r)?zt(r):(function(t){return`${ra(ot(t))}|lt:${t.limitType}`})(r)}function Wa(r,e){return r instanceof je&&e instanceof je?ug(r,e):!(r instanceof je&&!(e instanceof je)||!(r instanceof je)&&e instanceof je)&&vw(r,e)}function Ha(r){return Lt(r)?zt(r):ra(r)}function El(r,e){return r instanceof je&&e instanceof je?ug(r,e):!(r instanceof je&&!(e instanceof je)||!(r instanceof je)&&e instanceof je)&&Wu(r,e)}function YT(r,e){const t=(function(s){let i=!1;const o=[];for(const c of s)if(c instanceof Rt)if(i=!0,c.orderings.some((u=>u.expr instanceof vr&&u.expr.fieldName===vt)))o.push(c);else{const u=c.orderings.map((h=>h));u.push($o(vt).ascending()),o.push(new Rt(u,{}))}else c instanceof Cn&&(i||(o.push(new Rt([$o(vt).ascending()],{})),i=!0)),o.push(c);return i||o.push(new Rt([$o(vt).ascending()],{})),o})(r.stages);if(r.userDataReader){const n=r.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(n)))}return new je(r.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lw(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ii(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ii(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=gp();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const u=Zm(o,c);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),X())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,((t,n)=>Dd(t,n)))&&Hr(this.baseMutations,e.baseMutations,((t,n)=>Dd(t,n)))}}class vl{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){k(e.mutations.length===n.length,58842,{Ji:e.mutations.length,Yi:n.length});let s=(function(){return Vw})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new vl(e,t,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="";function ze(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=of(e)),e=JT(r.get(t),e);return of(e)}function JT(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case ha:t+="";break;default:t+=i}}return t}function of(r){return r+ha+""}function Vt(r){const e=r.length;if(k(e>=2,64408,{path:r}),e===2)return k(r.charAt(0)===ha&&r.charAt(1)==="",56145,{path:r}),ee.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(ha,i);switch((o<0||o>t)&&B(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(i,o);let u;s.length===0?u=c:(s+=c,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:B(61167,{path:r})}i=o+2}return new ee(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="remoteDocuments",ro="owner",xr="owner",Li="mutationQueues",XT="userId",ft="mutations",af="batchId",rr="userMutationsIndex",cf=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(r,e){return[r,ze(e)]}function hg(r,e,t){return[r,ze(e),t]}const ZT={},us="documentMutations",da="remoteDocumentsV14",e0=["prefixPath","collectionGroup","readTime","documentId"],zo="documentKeyIndex",t0=["prefixPath","collectionGroup","documentId"],dg="collectionGroupIndex",n0=["collectionGroup","readTime","prefixPath","documentId"],Mi="remoteDocumentGlobal",gu="remoteDocumentGlobalKey",ls="targets",fg="queryTargetsIndex",r0=["canonicalId","targetId"],hs="targetDocuments",s0=["targetId","path"],Al="documentTargetsIndex",i0=["path","targetId"],fa="targetGlobalKey",ur="targetGlobal",Ui="collectionParents",o0=["collectionId","parent"],ds="clientMetadata",a0="clientId",Qa="bundles",c0="bundleId",Ya="namedQueries",u0="name",bl="indexConfiguration",l0="indexId",_u="collectionGroupIndex",h0="collectionGroup",di="indexState",d0=["indexId","uid"],mg="sequenceNumberIndex",f0=["uid","sequenceNumber"],fi="indexEntries",m0=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],pg="documentKeyIndex",p0=["indexId","uid","orderedDocumentKey"],Ja="documentOverlays",g0=["userId","collectionPath","documentId"],yu="collectionPathOverlayIndex",_0=["userId","collectionPath","largestBatchId"],gg="collectionGroupOverlayIndex",y0=["userId","collectionGroup","largestBatchId"],Pl="globals",I0="name",_g=[Li,ft,us,Yn,ls,ro,ur,hs,ds,Mi,Ui,Qa,Ya],w0=[..._g,Ja],yg=[Li,ft,us,da,ls,ro,ur,hs,ds,Mi,Ui,Qa,Ya,Ja],Ig=yg,Rl=[...Ig,bl,di,fi],E0=Rl,wg=[...Rl,Pl],T0=wg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(r,e,t){const n=r.store(ft),s=r.store(us),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=n._i({range:o},((f,m,_)=>(c++,_.delete())));i.push(u.next((()=>{k(c===1,47070,{batchId:t.batchId})})));const h=[];for(const f of t.mutations){const m=hg(e,f.key.path,t.batchId);i.push(s.delete(m)),h.push(f.key)}return A.waitFor(i).next((()=>h))}function ma(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw B(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends Lp{constructor(e,t){super(),this.Zi=e,this.currentSequenceNumber=t}}function Re(r,e){const t=q(r);return En.qr(t.Zi,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,n,s,i=j.min(),o=j.min(),c=ue.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.Xi=e}}function v0(r,e){let t;if(e.document)t=Uw(r.Xi,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=U.fromSegments(e.noDocument.path),s=Er(e.noDocument.readTime);t=ge.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return B(56709);{const n=U.fromSegments(e.unknownDocument.path),s=Er(e.unknownDocument.version);t=ge.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new ie(s[0],s[1]);return j.fromTimestamp(i)})(e.readTime)),t}function uf(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:pa(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:Si(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ar(i,o.version.toTimestamp()),createTime:ar(i,o.createTime.toTimestamp())}})(r.Xi,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:wr(e.version)};else{if(!e.isUnknownDocument())return B(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:wr(e.version)}}return n}function pa(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function wr(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Er(r){const e=new ie(r.seconds,r.nanoseconds);return j.fromTimestamp(e)}function Zn(r,e){const t=(e.baseMutations||[]).map((i=>mu(r.Xi,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>mu(r.Xi,i))),s=ie.fromMillis(e.localWriteTimeMs);return new Tl(e.batchId,s,t,n)}function ni(r,e){const t=Er(e.readTime),n=e.lastLimboFreeSnapshotVersion!==void 0?Er(e.lastLimboFreeSnapshotVersion):j.min();let s;return s=(function(o){return o.structuredPipeline!==void 0})(e.query)?(function(o,c){const u=o.structuredPipeline;k((u?.pipeline?.stages??[]).length>0,1845);const h=u?.pipeline?.stages.map(A0);return new je(c,h)})(e.query,r.Xi):(function(o){return o.documents!==void 0})(e.query)?(function(o){const c=o.documents.length;return k(c===1,1966,{count:c}),ot(La(Ep(o.documents[0])))})(e.query):(function(o){return ot(bp(o))})(e.query),new St(s,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,ue.fromBase64String(e.resumeToken))}function vg(r,e){const t=wr(e.snapshotVersion),n=wr(e.lastLimboFreeSnapshotVersion);let s;s=Lt(e.target)?Pp(r.Xi,e.target):Hu(e.target)?vp(r.Xi,e.target):Ap(r.Xi,e.target).Lt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ha(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Ag(r){const e=bp({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ia(e,e.limit,"L"):e}function xo(r,e){return new Vl(e.largestBatchId,mu(r.Xi,e.overlayMutation))}function lf(r,e){const t=e.path.lastSegment();return[r,ze(e.path.popLast()),t]}function hf(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:wr(n.readTime),documentKey:ze(n.documentKey.path),largestBatchId:n.largestBatchId}}function A0(r){switch(r.name){case"collection":return new Xi(r.args[0].referenceValue,{});case"collection_group":return new Zi(r.args[1].stringValue,{});case"database":return new za({});case"documents":return new Ga(r.args.map((e=>e.referenceValue)),{});case"where":return new eo(wu(r.args[0]),{});case"limit":{const e=r.args[0].integerValue??r.args[0].doubleValue;return new Cn(typeof e=="number"?e:Number(e),{})}case"sort":return new Rt(r.args.map((e=>(function(n){const s=n.mapValue?.fields;return new hl(wu(s.expression),s.direction?.stringValue,"orderingFromProto")})(e))),{});default:throw new Error(`Stage type: ${r.name} not supported.`)}}function wu(r){return r.fieldReferenceValue?new vr(Sn("_exprFromProto",r.fieldReferenceValue),"_exprFromProto"):r.functionValue?(function(t){return new x(t.functionValue.name,t.functionValue.args?.map(wu)||[])})(r):Ar._fromProto(r)}class Xa{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.es={}}static ts(e,t,n,s){k(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Xa(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return un(e)._i({index:rr,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=Br(e),o=un(e);return o.add({}).next((c=>{k(typeof c=="number",49019);const u=new Tl(c,t,n,s),h=(function(R,C,O){const M=O.baseMutations.map((J=>oa(R.Xi,J))),H=O.mutations.map((J=>oa(R.Xi,J)));return{userId:C,batchId:O.batchId,localWriteTimeMs:O.localWriteTime.toMillis(),baseMutations:M,mutations:H}})(this.serializer,this.userId,u),f=[];let m=new oe(((_,R)=>W(_.canonicalString(),R.canonicalString())));for(const _ of s){const R=hg(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(i.put(R,ZT))}return m.forEach((_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))})),e.addOnCommittedListener((()=>{this.es[c]=u.keys()})),A.waitFor(f).next((()=>u))}))}lookupMutationBatch(e,t){return un(e).get(t).next((n=>n?(k(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Zn(this.serializer,n)):null))}ns(e,t){return this.es[t]?A.resolve(this.es[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.es[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return un(e)._i({index:rr,range:s},((o,c,u)=>{c.userId===this.userId&&(k(c.batchId>=n,47524,{rs:n}),i=Zn(this.serializer,c)),u.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=ir;return un(e)._i({index:rr,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,ir],[this.userId,Number.POSITIVE_INFINITY]);return un(e).ti(rr,t).next((n=>n.map((s=>Zn(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=jo(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Br(e)._i({range:s},((o,c,u)=>{const[h,f,m]=o,_=Vt(f);if(h===this.userId&&t.path.isEqual(_))return un(e).get(m).next((R=>{if(!R)throw B(61480,{ss:o,batchId:m});k(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:m}),i.push(Zn(this.serializer,R))}));u.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new oe(W);const s=[];return t.forEach((i=>{const o=jo(this.userId,i.path),c=IDBKeyRange.lowerBound(o),u=Br(e)._i({range:c},((h,f,m)=>{const[_,R,C]=h,O=Vt(R);_===this.userId&&i.path.isEqual(O)?n=n.add(C):m.done()}));s.push(u)})),A.waitFor(s).next((()=>this._s(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=jo(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new oe(W);return Br(e)._i({range:o},((u,h,f)=>{const[m,_,R]=u,C=Vt(_);m===this.userId&&n.isPrefixOf(C)?C.length===s&&(c=c.add(R)):f.done()})).next((()=>this._s(e,c)))}_s(e,t){const n=[],s=[];return t.forEach((i=>{s.push(un(e).get(i).next((o=>{if(o===null)throw B(35274,{batchId:i});k(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(Zn(this.serializer,o))})))})),A.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return Eg(e.Zi,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.us(t.batchId)})),A.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}us(e){delete this.es[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return Br(e)._i({range:n},((i,o,c)=>{if(i[0]===this.userId){const u=Vt(i[1]);s.push(u)}else c.done()})).next((()=>{k(s.length===0,56720,{cs:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return bg(e,this.userId,t)}ls(e){return Pg(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:ir,lastStreamToken:""}))}}function bg(r,e,t){const n=jo(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Br(r)._i({range:i,si:!0},((c,u,h)=>{const[f,m,_]=c;f===e&&m===s&&(o=!0),h.done()})).next((()=>o))}function un(r){return Re(r,ft)}function Br(r){return Re(r,us)}function Pg(r){return Re(r,Li)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{getBundleMetadata(e,t){return df(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Er(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return df(e).put((function(s){return{bundleId:s.id,createTime:wr(Qe(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return ff(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:Ag(i.bundledQuery),readTime:Er(i.readTime)}})(n)}))}saveNamedQuery(e,t){return ff(e).put((function(s){return{name:s.name,readTime:wr(Qe(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function df(r){return Re(r,Qa)}function ff(r){return Re(r,Ya)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.serializer=e,this.userId=t}static ts(e,t){const n=t.uid||"";return new Za(e,n)}getOverlay(e,t){return Cr(e).get(lf(this.userId,t)).next((n=>n?xo(this.serializer,n):null))}getOverlays(e,t){const n=lt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}getAllOverlays(e,t){const n=lt();return Cr(e)._i(((s,i)=>{const o=xo(this.serializer,i);o.largestBatchId>t&&n.set(o.getKey(),o)})).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const c=new Vl(t,o);s.push(this.Es(e,c))})),A.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(ze(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Cr(e).ii(yu,c))})),A.waitFor(i)}getOverlaysForCollection(e,t,n){const s=lt(),i=ze(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Cr(e).ti(yu,o).next((c=>{for(const u of c){const h=xo(this.serializer,u);s.set(h.getKey(),h)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=lt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Cr(e)._i({index:gg,range:c},((u,h,f)=>{const m=xo(this.serializer,h);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()})).next((()=>i))}Es(e,t){return Cr(e).put((function(s,i,o){const[c,u,h]=lf(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:oa(s.Xi,o.mutation)}})(this.serializer,this.userId,t))}}function Cr(r){return Re(r,Ja)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{hs(e){return Re(e,Pl)}getSessionToken(e){return this.hs(e).get("sessionToken").next((t=>{const n=t?.value;return n?ue.fromUint8Array(n):ue.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.hs(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){}Ts(e,t){this.Ps(e,t),t.Is()}Ps(e,t){if("nullValue"in e)this.Rs(t,5);else if("booleanValue"in e)this.Rs(t,10),t.As(e.booleanValue?1:0);else if("integerValue"in e)this.Rs(t,15),t.As(fe(e.integerValue));else if("doubleValue"in e){const n=fe(e.doubleValue);this.Vs(n,t)}else if("timestampValue"in e)this.ds(e.timestampValue,t);else if("stringValue"in e)this.fs(e.stringValue,t),this.ps(t);else if("bytesValue"in e)this.Rs(t,30),t.gs(pt(e.bytesValue)),this.ps(t);else if("referenceValue"in e)this.ys(e.referenceValue,t);else if("geoPointValue"in e)this.ws(e.geoPointValue,t);else if("mapValue"in e){const n=Qi(e);if(n===z.fe)this.Rs(t,Number.MAX_SAFE_INTEGER);else if(n===z.me)this.bs(e.mapValue,t);else if(n===z.de)this.Rs(t,999);else if(n===z.Ve)this.Rs(t,7);else if(n===z.Ae){const s=e.mapValue?.fields,i=s?.[Zr],o=i?.bytesValue,c=pt(o).toUint8Array();if(c[0]===0){const u=c.slice(1);this.Rs(t,30),t.gs(ue.fromUint8Array(u)),this.ps(t)}else this.Ss(e.mapValue,t)}else if(n===z.he)this.xs(e.mapValue,t);else if(n===z.Re)this.vs(e.mapValue,t);else if(n===z.Te)this.Ds(e.mapValue,t);else if(n===z.Pe)this.Cs(e.mapValue,t);else if(n===z.Ie){const s=parseFloat(e.mapValue.fields[Wt].stringValue);this.Vs(s,t)}else this.Fs(e.mapValue,t),this.ps(t)}else"arrayValue"in e?(this.Os(e.arrayValue,t),this.ps(t)):B(19022,{Ms:e})}fs(e,t){this.Rs(t,25),this.Ns(e,t)}Ns(e,t){t.Bs(e)}Vs(e,t){isNaN(e)?this.Rs(t,13):(this.Rs(t,15),Yr(e)?t.As(0):t.As(e))}Cs(e,t){this.Rs(t,15),t.As(fe(e.fields[Ln].integerValue))}ds(e,t){this.Rs(t,20),typeof e=="string"&&(e=Kt(e)),t.Bs(`${e.seconds||""}`),t.As(e.nanos||0)}ws(e,t){this.Rs(t,45),t.As(e.latitude||0),t.As(e.longitude||0)}Fs(e,t){const n=e.fields||{};this.Rs(t,55);for(const s of Object.keys(n))this.fs(s,t),this.Ps(n[s],t)}bs(e,t){const n=e.fields||{};this.Rs(t,53);const s=yr,i=n[s].arrayValue?.values?.length||0;this.Rs(t,15),t.As(fe(i)),this.fs(s,t),this.Ps(n[s],t)}Os(e,t){const n=e.values||[];this.Rs(t,50);for(const s of n)this.Ps(s,t)}ys(e,t){this.Rs(t,37);const n=e.split("/").filter((s=>s.length>0));U.fromSegments(n.slice(5)).path.forEach((s=>{this.Rs(t,60),this.Ns(s,t)}))}Rs(e,t){e.As(t)}ps(e){e.As(2)}vs(e,t){this.Rs(t,22);const n=e.fields||{};n&&this.Fs(n[Ut].mapValue,t)}Ds(e,t){this.Rs(t,43);const n=e.fields||{},s=n[Ir]?.stringValue||"";t.gs(pt(s))}Ss(e,t){this.Rs(t,31);const n=e.fields||{},s=n[Zr]?.bytesValue||"";t.gs(pt(s)),this.ps(t)}xs(e,t){this.Rs(t,47);const n=e.fields||{},s=n[At]?.mapValue?.fields||{};s&&(t.Bs(s[Jr]?.stringValue||""),t.Bs(s[Xr]?.stringValue||"")),this.ps(t)}}er.Ls=new er;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=255;function R0(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function mf(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=R0(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class V0{constructor(){this.buffer=new Uint8Array(1024),this.position=0}$s(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Us(n.value),n=t.next();this.ks()}Qs(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.qs(n.value),n=t.next();this.Ks()}Ws(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Us(n);else if(n<2048)this.Us(960|n>>>6),this.Us(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Us(480|n>>>12),this.Us(128|63&n>>>6),this.Us(128|63&n);else{const s=t.codePointAt(0);this.Us(240|s>>>18),this.Us(128|63&s>>>12),this.Us(128|63&s>>>6),this.Us(128|63&s)}}this.ks()}Gs(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.qs(n);else if(n<2048)this.qs(960|n>>>6),this.qs(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.qs(480|n>>>12),this.qs(128|63&n>>>6),this.qs(128|63&n);else{const s=t.codePointAt(0);this.qs(240|s>>>18),this.qs(128|63&s>>>12),this.qs(128|63&s>>>6),this.qs(128|63&s)}}this.Ks()}js(e){const t=this.zs(e),n=mf(t);this.Hs(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Js(e){const t=this.zs(e),n=mf(t);this.Hs(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Ys(){this.Zs(Nr),this.Zs(255)}Xs(){this.e_(Nr),this.e_(255)}reset(){this.position=0}seed(e){this.Hs(e.length),this.buffer.set(e,this.position),this.position+=e.length}t_(){return this.buffer.slice(0,this.position)}zs(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Us(e){const t=255&e;t===0?(this.Zs(0),this.Zs(255)):t===Nr?(this.Zs(Nr),this.Zs(0)):this.Zs(t)}qs(e){const t=255&e;t===0?(this.e_(0),this.e_(255)):t===Nr?(this.e_(Nr),this.e_(0)):this.e_(e)}ks(){this.Zs(0),this.Zs(1)}Ks(){this.e_(0),this.e_(1)}Zs(e){this.Hs(1),this.buffer[this.position++]=e}e_(e){this.Hs(1),this.buffer[this.position++]=~e}Hs(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class S0{constructor(e){this.n_=e}gs(e){this.n_.$s(e)}Bs(e){this.n_.Ws(e)}As(e){this.n_.js(e)}Is(){this.n_.Ys()}}class x0{constructor(e){this.n_=e}gs(e){this.n_.Qs(e)}Bs(e){this.n_.Gs(e)}As(e){this.n_.Js(e)}Is(){this.n_.Xs()}}class Hs{constructor(){this.n_=new V0,this.ascending=new S0(this.n_),this.descending=new x0(this.n_)}seed(e){this.n_.seed(e)}r_(e){return e===0?this.ascending:this.descending}t_(){return this.n_.t_()}reset(){this.n_.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n,s){this.i_=e,this.s_=t,this.__=n,this.o_=s}a_(){const e=this.o_.length,t=e===0||this.o_[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.o_,0),t!==e?n.set([0],this.o_.length):++n[n.length-1],new tr(this.i_,this.s_,this.__,n)}u_(e,t,n){return{indexId:this.i_,uid:e,arrayValue:Go(this.__),directionalValue:Go(this.o_),orderedDocumentKey:Go(t),documentKey:n.path.toArray()}}c_(e,t,n){const s=this.u_(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ln(r,e){let t=r.i_-e.i_;return t!==0?t:(t=pf(r.__,e.__),t!==0?t:(t=pf(r.o_,e.o_),t!==0?t:U.comparator(r.s_,e.s_)))}function pf(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Go(r){return pm()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function gf(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class _f{constructor(e){this.l_=new oe(((t,n)=>be.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.E_=e.orderBy,this.h_=[];for(const t of e.filters){const n=t;n.isInequality()?this.l_=this.l_.add(n):this.h_.push(n)}}get T_(){return this.l_.size>1}P_(e){if(k(e.collectionGroup===this.collectionId,49279),this.T_)return!1;const t=au(e);if(t!==void 0&&!this.I_(t))return!1;const n=Qn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.I_(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.l_.size>0){const c=this.l_.getIterator().getNext();if(!s.has(c.field.canonicalString())){const u=n[i];if(!this.R_(c,u)||!this.A_(this.E_[o++],u))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.E_.length||!this.A_(this.E_[o++],c))return!1}return!0}V_(){if(this.T_)return null;let e=new oe(be.comparator);const t=[];for(const n of this.h_)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Fo(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Fo(n.field,0))}for(const n of this.E_)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Fo(n.field,n.dir==="asc"?0:1)));return new na(na.UNKNOWN_ID,this.collectionId,t,Vi.empty())}I_(e){for(const t of this.h_)if(this.R_(t,e))return!0;return!1}R_(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}A_(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(r){if(k(r instanceof ne||r instanceof ae,20012),r instanceof ne){if(r instanceof cp){const t=r.value.arrayValue?.values?.map((n=>ne.create(r.field,"==",n)))||[];return ae.create(t,"or")}return r}const e=r.filters.map((t=>Rg(t)));return ae.create(e,r.op)}function C0(r){if(r.getFilters().length===0)return[];const e=vu(Rg(r));return k(Vg(e),7391),Eu(e)||Tu(e)?[e]:e.getFilters()}function Eu(r){return r instanceof ne}function Tu(r){return r instanceof ae&&Gu(r)}function Vg(r){return Eu(r)||Tu(r)||(function(t){if(t instanceof ae&&iu(t)){for(const n of t.getFilters())if(!Eu(n)&&!Tu(n))return!1;return!0}return!1})(r)}function vu(r){if(k(r instanceof ne||r instanceof ae,34018),r instanceof ne)return r;if(r.filters.length===1)return vu(r.filters[0]);const e=r.filters.map((n=>vu(n)));let t=ae.create(e,r.op);return t=ga(t),Vg(t)?t:(k(t instanceof ae,64498),k(as(t),40251),k(t.filters.length>1,57927),t.filters.reduce(((n,s)=>Sl(n,s))))}function Sl(r,e){let t;return k(r instanceof ne||r instanceof ae,38388),k(e instanceof ne||e instanceof ae,25473),t=r instanceof ne?e instanceof ne?(function(s,i){return ae.create([s,i],"and")})(r,e):yf(r,e):e instanceof ne?yf(e,r):(function(s,i){if(k(s.filters.length>0&&i.filters.length>0,48005),as(s)&&as(i))return ip(s,i.getFilters());const o=iu(s)?s:i,c=iu(s)?i:s,u=o.filters.map((h=>Sl(h,c)));return ae.create(u,"or")})(r,e),ga(t)}function yf(r,e){if(as(e))return ip(e,r.getFilters());{const t=e.filters.map((n=>Sl(r,n)));return ae.create(t,"or")}}function ga(r){if(k(r instanceof ne||r instanceof ae,11850),r instanceof ne)return r;const e=r.getFilters();if(e.length===1)return ga(e[0]);if(rp(r))return r;const t=e.map((s=>ga(s))),n=[];return t.forEach((s=>{s instanceof ne?n.push(s):s instanceof ae&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:ae.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.d_=new xl}addToCollectionParentIndex(e,t){return this.d_.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.d_.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(at.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(at.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class xl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new oe(ee.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new oe(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="IndexedDbIndexManager",Co=new Uint8Array(0);class D0{constructor(e,t){this.databaseId=t,this.f_=new xl,this.m_=new tn((n=>ra(n)),((n,s)=>Wu(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.f_.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.f_.add(t)}));const i={collectionId:n,parent:ze(s)};return wf(e).put(i)}return A.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Rm(t),""],!1,!0);return wf(e).ti(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(Vt(o.parent))}return n}))}addFieldIndex(e,t){const n=Qs(e),s=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=kr(e);return i.next((c=>{o.put(hf(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Qs(e),s=kr(e),i=Dr(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Qs(e),n=Dr(e),s=kr(e);return t.ii().next((()=>n.ii())).next((()=>s.ii()))}createTargetIndexes(e,t){return A.forEach(this.p_(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new _f(n).V_();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=Dr(e);let s=!0;const i=new Map;return A.forEach(this.p_(t),(o=>this.g_(e,o).next((c=>{s&&(s=!!c),i.set(o,c)})))).next((()=>{if(s){let o=X();const c=[];return A.forEach(i,((u,h)=>{N(If,`Using index ${(function(Y){return`id=${Y.indexId}|cg=${Y.collectionGroup}|f=${Y.fields.map((le=>`${le.fieldPath}:${le.kind}`)).join(",")}`})(u)} to execute ${ra(t)}`);const f=(function(Y,le){const ce=au(le);if(ce===void 0)return null;for(const se of sa(Y,ce.fieldPath))switch(se.op){case"array-contains-any":return se.value.arrayValue.values||[];case"array-contains":return[se.value]}return null})(h,u),m=(function(Y,le){const ce=new Map;for(const se of Qn(le))for(const w of sa(Y,se.fieldPath))switch(w.op){case"==":case"in":ce.set(se.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return ce.set(se.fieldPath.canonicalString(),w.value),Array.from(ce.values())}return null})(h,u),_=(function(Y,le){const ce=[];let se=!0;for(const w of Qn(le)){const g=w.kind===0?Ud(Y,w.fieldPath,Y.startAt):Fd(Y,w.fieldPath,Y.startAt);ce.push(g.value),se&&(se=g.inclusive)}return new os(ce,se)})(h,u),R=(function(Y,le){const ce=[];let se=!0;for(const w of Qn(le)){const g=w.kind===0?Fd(Y,w.fieldPath,Y.endAt):Ud(Y,w.fieldPath,Y.endAt);ce.push(g.value),se&&(se=g.inclusive)}return new os(ce,se)})(h,u),C=this.y_(u,h,_),O=this.y_(u,h,R),M=this.w_(u,h,m),H=this.b_(u.indexId,f,C,_.inclusive,O,R.inclusive,M);return A.forEach(H,(J=>n.ri(J,t.limit).next((Y=>{Y.forEach((le=>{const ce=U.fromSegments(le.documentKey);o.has(ce)||(o=o.add(ce),c.push(ce))}))}))))})).next((()=>c))}return A.resolve(null)}))}p_(e){let t=this.m_.get(e);return t||(e.filters.length===0?t=[e]:t=C0(ae.create(e.filters,"and")).map((n=>cu(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.m_.set(e,t),t)}b_(e,t,n,s,i,o,c){const u=(t!=null?t.length:1)*Math.max(n.length,i.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const _=t?this.S_(t[m/h]):Co,R=this.x_(e,_,n[m%h],s),C=this.v_(e,_,i[m%h],o),O=c.map((M=>this.x_(e,_,M,!0)));f.push(...this.createRange(R,C,O))}return f}x_(e,t,n,s){const i=new tr(e,U.empty(),t,n);return s?i:i.a_()}v_(e,t,n,s){const i=new tr(e,U.empty(),t,n);return s?i.a_():i}g_(e,t){const n=new _f(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const c of i)n.P_(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let n=2;const s=this.p_(t);return A.forEach(s,(i=>this.g_(e,i).next((o=>{o?n!==0&&o.fields.length<(function(u){let h=new oe(be.comparator),f=!1;for(const m of u.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}D_(e,t){const n=new Hs;for(const s of Qn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.r_(s.kind);er.Ls.Ts(i,o)}return n.t_()}S_(e){const t=new Hs;return er.Ls.Ts(e,t.r_(0)),t.t_()}C_(e,t){const n=new Hs;return er.Ls.Ts(ts(this.databaseId,t),n.r_((function(i){const o=Qn(i);return o.length===0?0:o[o.length-1].kind})(e))),n.t_()}w_(e,t,n){if(n===null)return[];let s=[];s.push(new Hs);let i=0;for(const o of Qn(e)){const c=n[i++];for(const u of s)if(this.F_(t,o.fieldPath)&&Rn(c))s=this.O_(s,o,c);else{const h=u.r_(o.kind);er.Ls.Ts(c,h)}}return this.M_(s)}y_(e,t,n){return this.w_(e,t,n.position)}M_(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].t_();return t}O_(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const u=new Hs;u.seed(c.t_()),er.Ls.Ts(o,u.r_(t.kind)),i.push(u)}return i}F_(e,t){return!!e.filters.find((n=>n instanceof ne&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Qs(e),s=kr(e);return(t?n.ti(_u,IDBKeyRange.bound(t,t)):n.ti()).next((i=>{const o=[];return A.forEach(i,(c=>s.get([c.indexId,this.uid]).next((u=>{o.push((function(f,m){const _=m?new Vi(m.sequenceNumber,new at(Er(m.readTime),new U(Vt(m.documentKey)),m.largestBatchId)):Vi.empty(),R=f.fields.map((([C,O])=>new Fo(be.fromServerFormat(C),O)));return new na(f.indexId,f.collectionGroup,R,_)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:W(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=Qs(e),i=kr(e);return this.N_(e).next((o=>s.ti(_u,IDBKeyRange.bound(t,t)).next((c=>A.forEach(c,(u=>i.put(hf(u.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((c=>(n.set(s.collectionGroup,c),A.forEach(c,(u=>this.B_(e,s,u).next((h=>{const f=this.L_(i,u);return h.isEqual(f)?A.resolve():this.U_(e,i,u,h,f)})))))))}))}k_(e,t,n,s){return Dr(e).put(s.u_(this.uid,this.C_(n,t.key),t.key))}Q_(e,t,n,s){return Dr(e).delete(s.c_(this.uid,this.C_(n,t.key),t.key))}B_(e,t,n){const s=Dr(e);let i=new oe(ln);return s._i({index:pg,range:IDBKeyRange.only([n.indexId,this.uid,Go(this.C_(n,t))])},((o,c)=>{i=i.add(new tr(n.indexId,t,gf(c.arrayValue),gf(c.directionalValue)))})).next((()=>i))}L_(e,t){let n=new oe(ln);const s=this.D_(t,e);if(s==null)return n;const i=au(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Rn(o))for(const c of o.arrayValue.values||[])n=n.add(new tr(t.indexId,e.key,this.S_(c),s))}else n=n.add(new tr(t.indexId,e.key,Co,s));return n}U_(e,t,n,s,i){N(If,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,h,f,m,_){const R=u.getIterator(),C=h.getIterator();let O=Sr(R),M=Sr(C);for(;O||M;){let H=!1,J=!1;if(O&&M){const Y=f(O,M);Y<0?J=!0:Y>0&&(H=!0)}else O!=null?J=!0:H=!0;H?(m(M),M=Sr(C)):J?(_(O),O=Sr(R)):(O=Sr(R),M=Sr(C))}})(s,i,ln,(c=>{o.push(this.k_(e,t,n,c))}),(c=>{o.push(this.Q_(e,t,n,c))})),A.waitFor(o)}N_(e){let t=1;return kr(e)._i({index:mg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,c)=>ln(o,c))).filter(((o,c,u)=>!c||ln(o,u[c-1])!==0));const s=[];s.push(e);for(const o of n){const c=ln(o,e),u=ln(o,t);if(c===0)s[0]=e.a_();else if(c>0&&u<0)s.push(o),s.push(o.a_());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.q_(s[o],s[o+1]))return[];const c=s[o].c_(this.uid,Co,U.empty()),u=s[o+1].c_(this.uid,Co,U.empty());i.push(IDBKeyRange.bound(c,u))}return i}q_(e,t){return ln(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ef)}getMinOffset(e,t){return A.mapArray(this.p_(t),(n=>this.g_(e,n).next((s=>s||B(44426))))).next(Ef)}}function wf(r){return Re(r,Ui)}function Dr(r){return Re(r,fi)}function Qs(r){return Re(r,bl)}function kr(r){return Re(r,di)}function Ef(r){k(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Ku(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new at(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.K_=e}next(){return this.K_+=2,this.K_}static W_(){return new Jt(0)}static G_(){return new Jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.j_(e).next((t=>{const n=new Jt(t.highestTargetId);return t.highestTargetId=n.next(),this.z_(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.j_(e).next((t=>j.fromTimestamp(new ie(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.j_(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.j_(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.z_(e,s))))}addTargetData(e,t){return this.H_(e,t).next((()=>this.j_(e).next((n=>(n.targetCount+=1,this.J_(t,n),this.z_(e,n))))))}updateTargetData(e,t){return this.H_(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Or(e).delete(t.targetId))).next((()=>this.j_(e))).next((n=>(k(n.targetCount>0,8065),n.targetCount-=1,this.z_(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Or(e)._i(((o,c)=>{const u=ni(this.serializer,c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))})).next((()=>A.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Or(e)._i(((n,s)=>{const i=ni(this.serializer,s);t(i)}))}j_(e){return Tf(e).get(fa).next((t=>(k(t!==null,2888),t)))}z_(e,t){return Tf(e).put(fa,t)}H_(e,t){return Or(e).put(vg(this.serializer,t))}J_(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.j_(e).next((t=>t.targetCount))}getTargetData(e,t){const n=Ha(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Or(e)._i({range:s,index:fg},((o,c,u)=>{const h=ni(this.serializer,c);El(t,h.target)&&(i=h,u.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=mn(e);return t.forEach((o=>{const c=ze(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))})),A.waitFor(s)}removeMatchingKeys(e,t,n){const s=mn(e);return A.forEach(t,(i=>{const o=ze(i.path);return A.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=mn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=mn(e);let i=X();return s._i({range:n,si:!0},((o,c,u)=>{const h=Vt(o[1]),f=new U(h);i=i.add(f)})).next((()=>i))}containsKey(e,t){const n=ze(t.path),s=IDBKeyRange.bound([n],[Rm(n)],!1,!0);let i=0;return mn(e)._i({index:Al,si:!0,range:s},(([o,c],u,h)=>{o!==0&&(i++,h.done())})).next((()=>i>0))}Mt(e,t){return Or(e).get(t).next((n=>n?ni(this.serializer,n):null))}}function Or(r){return Re(r,ls)}function Tf(r){return Re(r,ur)}function mn(r){return Re(r,hs)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,t){this.db=e,this.garbageCollector=Bp(this,t)}Pi(e){const t=this.Y_(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}Y_(e){let t=0;return this.Ii(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ii(e,t){return this.Z_(e,((n,s)=>t(s)))}addReference(e,t,n){return No(e,n)}removeReference(e,t,n){return No(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return No(e,t)}X_(e,t){return(function(s,i){let o=!1;return Pg(s).oi((c=>bg(s,c,i).next((u=>(u&&(o=!0),A.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Z_(e,((o,c)=>{if(c<=t){const u=this.X_(e,o).next((h=>{if(!h)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,j.min()),mn(e).delete((function(m){return[0,ze(m.path)]})(o)))))}));s.push(u)}})).next((()=>A.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return No(e,t)}Z_(e,t){const n=mn(e);let s,i=Xe.Br;return n._i({index:Al},(([o,c],{path:u,sequenceNumber:h})=>{o===0?(i!==Xe.Br&&t(new U(Vt(s)),i),i=h,s=u):i=Xe.Br})).next((()=>{i!==Xe.Br&&t(new U(Vt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function No(r,e){return mn(r).put((function(n,s){return{targetId:0,path:ze(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}// Copyright 2024 Google LLC* @license
function Sg(r,e){let t=e;for(const n of r.stages)t=L0({serializer:r.serializer,serverTimestampBehavior:r.listenOptions?.serverTimestampBehavior},n,t);return t}function ec(r,e){return Sg(r,[e]).length>0}function xg(r,e){return _e(r)?ec(r,e):Ma(r,e)}function L0(r,e,t){if(e instanceof Xi)return(function(s,i,o){return o.filter((c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===i.pi))})(0,e,t);if(e instanceof eo)return(function(s,i,o){return o.filter((c=>{const u=hi(K(i.condition).evaluate(s,c));return u!==void 0&&ht(u,et)}))})(r,e,t);if(e instanceof Zi)return(function(s,i,o){return o.filter((c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof za)return(function(s,i,o){return o.filter((c=>c.isFoundDocument()))})(0,0,t);if(e instanceof Ga)return(function(s,i,o){return o.filter((c=>c.isFoundDocument()&&i.yi.has(c.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Cn)return(function(s,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof Rt)return(function(s,i,o){const c=i.orderings.map((u=>({eo:K(u.expr),direction:u.direction})));return[...o].sort(((u,h)=>{for(const{eo:f,direction:m}of c){const _=hi(f.evaluate(s,u)),R=hi(f.evaluate(s,h)),C=Ge(_??Ht,R??Ht);if(C!==0)return m==="ascending"?C:-C}return 0}))})(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Au(r){const e=(function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof Rt)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(r);return(t,n)=>{for(const s of e){const i=hi(K(s.expr).evaluate({serializer:r.serializer},t)),o=hi(K(s.expr).evaluate({serializer:r.serializer},n)),c=Ge(i||Ht,o||Ht);if(c!==0)return s.direction==="ascending"?c:-c}return 0}}function Bc(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof Cn)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.changes=new tn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return hn(e).put(n)}removeEntry(e,t,n){return hn(e).delete((function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],pa(o),c[c.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.no(e,n))))}getEntry(e,t){let n=ge.newInvalidDocument(t);return hn(e)._i({index:zo,range:IDBKeyRange.only(Ys(t))},((s,i)=>{n=this.ro(t,i)})).next((()=>n))}io(e,t){let n={size:0,document:ge.newInvalidDocument(t)};return hn(e)._i({index:zo,range:IDBKeyRange.only(Ys(t))},((s,i)=>{n={document:this.ro(t,i),size:ma(i)}})).next((()=>n))}getEntries(e,t){let n=Ae();return this.so(e,t,((s,i)=>{const o=this.ro(s,i);n=n.insert(s,o)})).next((()=>n))}getAllEntries(e){let t=Ae();return hn(e)._i(((n,s)=>{const i=this.ro(U.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);t=t.insert(i.key,i)})).next((()=>t))}_o(e,t){let n=Ae(),s=new de(U.comparator);return this.so(e,t,((i,o)=>{const c=this.ro(i,o);n=n.insert(i,c),s=s.insert(i,ma(o))})).next((()=>({documents:n,oo:s})))}so(e,t,n){if(t.isEmpty())return A.resolve();let s=new oe(bf);t.forEach((u=>s=s.add(u)));const i=IDBKeyRange.bound(Ys(s.first()),Ys(s.last())),o=s.getIterator();let c=o.getNext();return hn(e)._i({index:zo,range:i},((u,h,f)=>{const m=U.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&bf(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.ei(Ys(c)):f.done()})).next((()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=_e(t)?ee.fromString(to(t)):t.path,c=[o.popLast().toArray(),o.lastSegment(),pa(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hn(e).ti(IDBKeyRange.bound(c,u,!0)).next((h=>{i?.incrementDocumentReadCount(h.length);let f=Ae();for(const m of h){const _=this.ro(U.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(xg(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f}))}getAllFromCollectionGroup(e,t,n,s){let i=Ae();const o=Af(t,n),c=Af(t,at.max());return hn(e)._i({index:dg,range:IDBKeyRange.bound(o,c,!0)},((u,h,f)=>{const m=this.ro(U.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()})).next((()=>i))}newChangeBuffer(e){return new U0(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return vf(e).get(gu).next((t=>(k(!!t,20021),t)))}no(e,t){return vf(e).put(gu,t)}ro(e,t){if(t){const n=v0(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(j.min())))return n}return ge.newInvalidDocument(e)}}function Ng(r){return new M0(r)}class U0 extends Cg{constructor(e,t){super(),this.ao=e,this.trackRemovals=t,this.uo=new tn((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new oe(((i,o)=>W(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const c=this.uo.get(i);if(t.push(this.ao.removeEntry(e,i,c.readTime)),o.isValidDocument()){const u=uf(this.ao.serializer,o);s=s.add(i.path.popLast());const h=ma(u);n+=h-c.size,t.push(this.ao.addEntry(e,i,u))}else if(n-=c.size,this.trackRemovals){const u=uf(this.ao.serializer,o.convertToNoDocument(j.min()));t.push(this.ao.addEntry(e,i,u))}})),s.forEach((i=>{t.push(this.ao.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.ao.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.ao.io(e,t).next((n=>(this.uo.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.ao._o(e,t).next((({documents:n,oo:s})=>(s.forEach(((i,o)=>{this.uo.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function vf(r){return Re(r,Mi)}function hn(r){return Re(r,da)}function Ys(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Af(r,e){const t=e.documentKey.path.toArray();return[r,pa(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function bf(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=W(t[i],n[i]),s)return s;return s=W(t.length,n.length),s||(s=W(t[t.length-2],n[n.length-2]),s||W(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&ii(n.mutation,s,Je.empty(),ie.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,X()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=X()){const s=lt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=Jn();return i.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=lt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,X())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,n,s){let i=Ae();const o=ci(),c=(function(){return ci()})();return t.forEach(((u,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof en)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ii(f.mutation,h,f.mutation.getFieldMask(),ie.now())):o.set(h.key,Je.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>c.set(h,new F0(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const n=ci();let s=new de(((o,c)=>o-c)),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=n.get(u)||Je.empty();f=c.applyToLocalView(h,f),n.set(u,f);const m=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,m)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=gp();f.forEach((_=>{if(!i.has(_)){const R=Zm(t.get(_),n.get(_));R!==null&&m.set(_,R),i=i.add(_)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return A.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return _e(t)?this.getDocumentsMatchingPipeline(e,t,n,s):ww(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):A.resolve(lt());let c=cs,u=i;return o.next((h=>A.forEach(h,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{u=u.insert(f,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,X()))).next((f=>({batchId:c,changes:pp(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((n=>{let s=Jn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Jn();return this.indexManager.getCollectionParents(e,i).next((c=>A.forEach(c,(u=>{const h=(function(m,_){return new Es(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next((f=>{f.forEach(((m,_)=>{o=o.insert(m,_)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(c=>Ma(t,c)))))}getDocumentsMatchingPipeline(e,t,n,s){if(jt(t)==="collection_group"){const i=ml(t);let o=Jn();return this.indexManager.getCollectionParents(e,i).next((c=>A.forEach(c,(u=>{const h=(function(m,_){const R=m.stages.map((C=>C instanceof Zi?new Xi(_.canonicalString(),{}):C));return new je(m.serializer,R)})(t,u.child(i));return this.getDocumentsMatchingPipeline(e,h,n,s).next((f=>{f.forEach(((m,_)=>{o=o.insert(m,_)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,jt(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let c=X();for(const u of ua(t))c=c.add(U.fromPath(u));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new D("invalid-argument",`Invalid pipeline source to execute offline: ${zt(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(c=>ec(t,c)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const c=o.getKey();t.get(c)===null&&(t=t.insert(c,ge.newInvalidDocument(c)))}));let s=Jn();return t.forEach(((i,o)=>{const c=e.get(i);c!==void 0&&ii(c.mutation,o,Je.empty(),ie.now()),n(o)&&(s=s.insert(i,o))})),s}getOverlaysForPipeline(e,t,n){switch(jt(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ee.fromString(to(t)),n);case"collection_group":throw new D("invalid-argument",`Unexpected collection group pipeline: ${zt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,ua(t).map((s=>U.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new D("invalid-argument",`Failed to get overlays for pipeline: ${zt(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.serializer=e,this.co=new Map,this.lo=new Map}getBundleMetadata(e,t){return A.resolve(this.co.get(t))}saveBundleMetadata(e,t){return this.co.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}})(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.lo.get(t))}saveNamedQuery(e,t){return this.lo.set(t.name,(function(s){return{name:s.name,query:Ag(s.bundledQuery),readTime:Qe(s.readTime)}})(t)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.overlays=new de(U.comparator),this.Eo=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=lt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}getAllOverlays(e,t){const n=lt();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&n.set(s,i)})),A.resolve(n)}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.Es(e,t,i)})),A.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Eo.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Eo.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const s=lt(),i=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return A.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new de(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=lt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=lt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return A.resolve(c)}Es(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Eo.get(s.largestBatchId).delete(n.key);this.Eo.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Vl(t,n));let i=this.Eo.get(t);i===void 0&&(i=X(),this.Eo.set(t,i)),this.Eo.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.sessionToken=ue.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.ho=new oe(xe.To),this.Po=new oe(xe.Io)}isEmpty(){return this.ho.isEmpty()}addReference(e,t){const n=new xe(e,t);this.ho=this.ho.add(n),this.Po=this.Po.add(n)}Ro(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Ao(new xe(e,t))}Vo(e,t){e.forEach((n=>this.removeReference(n,t)))}fo(e){const t=new U(new ee([])),n=new xe(t,e),s=new xe(t,e+1),i=[];return this.Po.forEachInRange([n,s],(o=>{this.Ao(o),i.push(o.key)})),i}mo(){this.ho.forEach((e=>this.Ao(e)))}Ao(e){this.ho=this.ho.delete(e),this.Po=this.Po.delete(e)}po(e){const t=new U(new ee([])),n=new xe(t,e),s=new xe(t,e+1);let i=X();return this.Po.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new xe(e,0),n=this.ho.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class xe{constructor(e,t){this.key=e,this.yo=t}static To(e,t){return U.comparator(e.key,t.key)||W(e.yo,t.yo)}static Io(e,t){return W(e.yo,t.yo)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.rs=1,this.wo=new oe(xe.To)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.rs;this.rs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tl(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.wo=this.wo.add(new xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.bo(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.So(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?ir:this.rs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new xe(t,0),s=new xe(t,Number.POSITIVE_INFINITY),i=[];return this.wo.forEachInRange([n,s],(o=>{const c=this.bo(o.yo);i.push(c)})),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new oe(W);return t.forEach((s=>{const i=new xe(s,0),o=new xe(s,Number.POSITIVE_INFINITY);this.wo.forEachInRange([i,o],(c=>{n=n.add(c.yo)}))})),A.resolve(this.xo(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;U.isDocumentKey(i)||(i=i.child(""));const o=new xe(new U(i),0);let c=new oe(W);return this.wo.forEachWhile((u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.yo)),!0)}),o),A.resolve(this.xo(c))}xo(e){const t=[];return e.forEach((n=>{const s=this.bo(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){k(this.vo(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.wo;return A.forEach(t.mutations,(s=>{const i=new xe(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.wo=n}))}us(e){}containsKey(e,t){const n=new xe(t,0),s=this.wo.firstAfterOrEqual(n);return A.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}vo(e,t){return this.So(e)}So(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}bo(e){const t=this.So(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.Do=e,this.docs=(function(){return new de(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Do(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():ge.newInvalidDocument(t))}getEntries(e,t){let n=Ae();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ge.newInvalidDocument(s))})),A.resolve(n)}getAllEntries(e){let t=Ae();return this.docs.forEach(((n,s)=>{t=t.insert(n,s.document)})),A.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;_e(t)?(i=ee.fromString(to(t)),o=f=>ec(t,f)):(i=t.path,o=f=>Ma(t,f));let c=Ae();const u=new U(i.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!i.isPrefixOf(f.path))break;f.path.length>i.length+1||Ku(lp(m),n)<=0||(s.has(m.key)||o(m))&&(c=c.insert(m.key,m.mutableCopy()))}return A.resolve(c)}getAllFromCollectionGroup(e,t,n,s){B(9500)}Co(e,t){return A.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new G0(this)}getSize(e){return A.resolve(this.size)}}class G0 extends Cg{constructor(e){super(),this.ao=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.ao.addEntry(e,s)):this.ao.removeEntry(n)})),A.waitFor(t)}getFromCache(e,t){return this.ao.getEntry(e,t)}getAllFromCache(e,t){return this.ao.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.persistence=e,this.Fo=new tn((t=>Ha(t)),El),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Oo=0,this.Mo=new Cl,this.targetCount=0,this.No=Jt.W_()}forEachTarget(e,t){return this.Fo.forEach(((n,s)=>t(s))),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Oo)}allocateTargetId(e){return this.highestTargetId=this.No.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Oo&&(this.Oo=t),A.resolve()}H_(e){this.Fo.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.No=new Jt(t),this.highestTargetId=t),e.sequenceNumber>this.Oo&&(this.Oo=e.sequenceNumber)}addTargetData(e,t){return this.H_(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.H_(t),A.resolve()}removeTargetData(e,t){return this.Fo.delete(t.target),this.Mo.fo(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Fo.forEach(((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Fo.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),A.waitFor(i).next((()=>s))}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fo.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.Mo.Ro(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.Mo.Vo(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),A.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mo.fo(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Mo.po(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.Mo.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t){this.Bo={},this.overlays={},this.Lo=new Xe(0),this.$o=!1,this.$o=!0,this.Uo=new $0,this.referenceDelegate=e(this),this.ko=new K0(this),this.indexManager=new N0,this.remoteDocumentCache=(function(s){return new z0(s)})((n=>this.referenceDelegate.Qo(n))),this.serializer=new Tg(t),this.qo=new B0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$o=!1,Promise.resolve()}get started(){return this.$o}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new q0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Bo[e.toKey()];return n||(n=new j0(t,this.referenceDelegate),this.Bo[e.toKey()]=n),n}getGlobalsCache(){return this.Uo}getTargetCache(){return this.ko}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qo}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const s=new W0(this.Lo.next());return this.referenceDelegate.Ko(),n(s).next((i=>this.referenceDelegate.Wo(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Go(e,t){return A.or(Object.values(this.Bo).map((n=>()=>n.containsKey(e,t))))}}class W0 extends Lp{constructor(e){super(),this.currentSequenceNumber=e}}class tc{constructor(e){this.persistence=e,this.jo=new Cl,this.zo=null}static Ho(e){return new tc(e)}get Jo(){if(this.zo)return this.zo;throw B(60996)}addReference(e,t,n){return this.jo.addReference(n,t),this.Jo.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.jo.removeReference(n,t),this.Jo.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.Jo.add(t.toString()),A.resolve()}removeTarget(e,t){this.jo.fo(t.targetId).forEach((s=>this.Jo.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.Jo.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ko(){this.zo=new Set}Wo(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Jo,(n=>{const s=U.fromPath(n);return this.Yo(e,s).next((i=>{i||t.removeEntry(s,j.min())}))})).next((()=>(this.zo=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yo(e,t).next((n=>{n?this.Jo.delete(t.toString()):this.Jo.add(t.toString())}))}Qo(e){return 0}Yo(e,t){return A.or([()=>A.resolve(this.jo.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Go(e,t)])}}class _a{constructor(e,t){this.persistence=e,this.Zo=new tn((n=>ze(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Bp(this,t)}static Ho(e,t){return new _a(e,t)}Ko(){}Wo(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Pi(e){const t=this.Y_(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}Y_(e){let t=0;return this.Ii(e,(n=>{t++})).next((()=>t))}Ii(e,t){return A.forEach(this.Zo,((n,s)=>this.X_(e,n,s).next((i=>i?A.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Co(e,(o=>this.X_(e,o,t).next((c=>{c||(n++,i.removeEntry(o,j.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.Zo.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Zo.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.Zo.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.Zo.set(t,e.currentSequenceNumber),A.resolve()}Qo(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ta(e.data.value)),t}X_(e,t,n){return A.or([()=>this.persistence.Go(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Zo.get(t);return A.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.serializer=e}jr(e,t,n,s){const i=new qa("createOrUpgrade",t);n<1&&s>=1&&((function(u){u.createObjectStore(ro)})(e),(function(u){u.createObjectStore(Li,{keyPath:XT}),u.createObjectStore(ft,{keyPath:af,autoIncrement:!0}).createIndex(rr,cf,{unique:!0}),u.createObjectStore(us)})(e),Pf(e),(function(u){u.createObjectStore(Yn)})(e));let o=A.resolve();return n<3&&s>=3&&(n!==0&&((function(u){u.deleteObjectStore(hs),u.deleteObjectStore(ls),u.deleteObjectStore(ur)})(e),Pf(e)),o=o.next((()=>(function(u){const h=u.store(ur),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put(fa,f)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(u,h){return h.store(ft).ti().next((m=>{u.deleteObjectStore(ft),u.createObjectStore(ft,{keyPath:af,autoIncrement:!0}).createIndex(rr,cf,{unique:!0});const _=h.store(ft),R=m.map((C=>_.put(C)));return A.waitFor(R)}))})(e,i)))),o=o.next((()=>{(function(u){u.createObjectStore(ds,{keyPath:a0})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.Xo(i)))),n<6&&s>=6&&(o=o.next((()=>((function(u){u.createObjectStore(Mi)})(e),this.ea(i))))),n<7&&s>=7&&(o=o.next((()=>this.ta(i)))),n<8&&s>=8&&(o=o.next((()=>this.na(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.ra(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(Qa,{keyPath:c0})})(e),(function(u){u.createObjectStore(Ya,{keyPath:u0})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(u){const h=u.createObjectStore(Ja,{keyPath:g0});h.createIndex(yu,_0,{unique:!1}),h.createIndex(gg,y0,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(u){const h=u.createObjectStore(da,{keyPath:e0});h.createIndex(zo,t0),h.createIndex(dg,n0)})(e))).next((()=>this.ia(e,i))).next((()=>e.deleteObjectStore(Yn)))),n<14&&s>=14&&(o=o.next((()=>this.sa(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(u){u.createObjectStore(bl,{keyPath:l0,autoIncrement:!0}).createIndex(_u,h0,{unique:!1}),u.createObjectStore(di,{keyPath:d0}).createIndex(mg,f0,{unique:!1}),u.createObjectStore(fi,{keyPath:m0}).createIndex(pg,p0,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(di).clear()})).next((()=>{t.objectStore(fi).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Pl,{keyPath:I0})})(e)}))),n<18&&s>=18&&pm()&&(o=o.next((()=>{t.objectStore(di).clear()})).next((()=>{t.objectStore(fi).clear()}))),o}ea(e){let t=0;return e.store(Yn)._i(((n,s)=>{t+=ma(s)})).next((()=>{const n={byteSize:t};return e.store(Mi).put(gu,n)}))}Xo(e){const t=e.store(Li),n=e.store(ft);return t.ti().next((s=>A.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,ir],[i.userId,i.lastAcknowledgedBatchId]);return n.ti(rr,o).next((c=>A.forEach(c,(u=>{k(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=Zn(this.serializer,u);return Eg(e,i.userId,h).next((()=>{}))}))))}))))}ta(e){const t=e.store(hs),n=e.store(Yn);return e.store(ur).get(fa).next((s=>{const i=[];return n._i(((o,c)=>{const u=new ee(o),h=(function(m){return[0,ze(m)]})(u);i.push(t.get(h).next((f=>f?A.resolve():(m=>t.put({targetId:0,path:ze(m),sequenceNumber:s.highestListenSequenceNumber}))(u))))})).next((()=>A.waitFor(i)))}))}na(e,t){e.createObjectStore(Ui,{keyPath:o0});const n=t.store(Ui),s=new xl,i=o=>{if(s.add(o)){const c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:ze(u)})}};return t.store(Yn)._i({si:!0},((o,c)=>{const u=new ee(o);return i(u.popLast())})).next((()=>t.store(us)._i({si:!0},(([o,c,u],h)=>{const f=Vt(c);return i(f.popLast())}))))}ra(e){const t=e.store(ls);return t._i(((n,s)=>{const i=ni(this.serializer,s),o=vg(this.serializer,i);return t.put(o)}))}ia(e,t){const n=t.store(Yn),s=[];return n._i(((i,o)=>{const c=t.store(da),u=(function(m){return m.document?new U(ee.fromString(m.document.name).popFirst(5)):m.noDocument?U.fromSegments(m.noDocument.path):m.unknownDocument?U.fromSegments(m.unknownDocument.path):B(36783)})(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))})).next((()=>A.waitFor(s)))}sa(e,t){const n=t.store(ft),s=Ng(this.serializer),i=new Nl(tc.Ho,this.serializer.Xi);return n.ti().next((o=>{const c=new Map;return o.forEach((u=>{let h=c.get(u.userId)??X();Zn(this.serializer,u).keys().forEach((f=>h=h.add(f))),c.set(u.userId,h)})),A.forEach(c,((u,h)=>{const f=new qe(h),m=Za.ts(this.serializer,f),_=i.getIndexManager(f),R=Xa.ts(f,this.serializer,_,i.referenceDelegate);return new Dg(s,R,m,_).recalculateAndSaveOverlaysForDocumentKeys(new Iu(t,Xe.Br),u).next()}))}))}}function Pf(r){r.createObjectStore(hs,{keyPath:s0}).createIndex(Al,i0,{unique:!0}),r.createObjectStore(ls,{keyPath:"targetId"}).createIndex(fg,r0,{unique:!0}),r.createObjectStore(ur)}const dn="IndexedDbPersistence",qc=18e5,$c=5e3,jc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Q0="main";class Dl{constructor(e,t,n,s,i,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.qn=i,this.window=o,this.document=c,this._a=h,this.oa=f,this.aa=m,this.Lo=null,this.$o=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ua=null,this.inForeground=!1,this.ca=null,this.la=null,this.Ea=Number.NEGATIVE_INFINITY,this.ha=_=>Promise.resolve(),!Dl.cn())throw new D(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new O0(this,s),this.Ta=t+Q0,this.serializer=new Tg(u),this.Pa=new En(this.Ta,this.aa,new H0(this.serializer)),this.Uo=new P0,this.ko=new k0(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ng(this.serializer),this.qo=new b0,this.window&&this.window.localStorage?this.Ia=this.window.localStorage:(this.Ia=null,f===!1&&ye(dn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ra().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(S.FAILED_PRECONDITION,jc);return this.Aa(),this.Va(),this.da(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ko.getHighestSequenceNumber(e)))})).then((e=>{this.Lo=new Xe(e,this._a)})).then((()=>{this.$o=!0})).catch((e=>(this.Pa&&this.Pa.close(),Promise.reject(e))))}fa(e){return this.ha=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Pa.Hr((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.qn.enqueueAndForget((async()=>{this.started&&await this.Ra()})))}Ra(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Do(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ma(e).next((t=>{t||(this.isPrimary=!1,this.qn.enqueueRetryable((()=>this.ha(!1))))}))})).next((()=>this.pa(e))).next((t=>this.isPrimary&&!t?this.ga(e).next((()=>!1)):!!t&&this.ya(e).next((()=>!0)))))).catch((e=>{if(Un(e))return N(dn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N(dn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.qn.enqueueRetryable((()=>this.ha(e))),this.isPrimary=e}))}ma(e){return Js(e).get(xr).next((t=>A.resolve(this.wa(t))))}ba(e){return Do(e).delete(this.clientId)}async Sa(){if(this.isPrimary&&!this.xa(this.Ea,qc)){this.Ea=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=Re(t,ds);return n.ti().next((s=>{const i=this.va(s,qc),o=s.filter((c=>i.indexOf(c)===-1));return A.forEach(o,(c=>n.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ia)for(const t of e)this.Ia.removeItem(this.Da(t.clientId))}}da(){this.la=this.qn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ra().then((()=>this.Sa())).then((()=>this.da()))))}wa(e){return!!e&&e.ownerId===this.clientId}pa(e){return this.oa?A.resolve(!0):Js(e).get(xr).next((t=>{if(t!==null&&this.xa(t.leaseTimestampMs,$c)&&!this.Ca(t.ownerId)){if(this.wa(t)&&this.networkEnabled)return!0;if(!this.wa(t)){if(!t.allowTabSynchronization)throw new D(S.FAILED_PRECONDITION,jc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Do(e).ti().next((n=>this.va(n,$c).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&N(dn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.$o=!1,this.Fa(),this.la&&(this.la.cancel(),this.la=null),this.Oa(),this.Ma(),await this.Pa.runTransaction("shutdown","readwrite",[ro,ds],(e=>{const t=new Iu(e,Xe.Br);return this.ga(t).next((()=>this.ba(t)))})),this.Pa.close(),this.Na()}va(e,t){return e.filter((n=>this.xa(n.updateTimeMs,t)&&!this.Ca(n.clientId)))}Ba(){return this.runTransaction("getActiveClients","readonly",(e=>Do(e).ti().next((t=>this.va(t,qc).map((n=>n.clientId))))))}get started(){return this.$o}getGlobalsCache(){return this.Uo}getMutationQueue(e,t){return Xa.ts(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ko}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new D0(e,this.serializer.Xi.databaseId)}getDocumentOverlayCache(e){return Za.ts(this.serializer,e)}getBundleCache(){return this.qo}runTransaction(e,t,n){N(dn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(u){return u===18?T0:u===17?wg:u===16?E0:u===15?Rl:u===14?Ig:u===13?yg:u===12?w0:u===11?_g:void B(60245)})(this.aa);let o;return this.Pa.runTransaction(e,s,i,(c=>(o=new Iu(c,this.Lo?this.Lo.next():Xe.Br),t==="readwrite-primary"?this.ma(o).next((u=>!!u||this.pa(o))).next((u=>{if(!u)throw ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.qn.enqueueRetryable((()=>this.ha(!1))),new D(S.FAILED_PRECONDITION,Op);return n(o)})).next((u=>this.ya(o).next((()=>u)))):this.La(o).next((()=>n(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}La(e){return Js(e).get(xr).next((t=>{if(t!==null&&this.xa(t.leaseTimestampMs,$c)&&!this.Ca(t.ownerId)&&!this.wa(t)&&!(this.oa||this.allowTabSynchronization&&t.allowTabSynchronization))throw new D(S.FAILED_PRECONDITION,jc)}))}ya(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Js(e).put(xr,t)}static cn(){return En.cn()}ga(e){const t=Js(e);return t.get(xr).next((n=>this.wa(n)?(N(dn,"Releasing primary lease."),t.delete(xr)):A.resolve()))}xa(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ye(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Aa(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ca=()=>{this.qn.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ra())))},this.document.addEventListener("visibilitychange",this.ca),this.inForeground=this.document.visibilityState==="visible")}Oa(){this.ca&&(this.document.removeEventListener("visibilitychange",this.ca),this.ca=null)}Va(){typeof this.window?.addEventListener=="function"&&(this.ua=()=>{this.Fa();const e=/(?:Version|Mobile)\/1[456]/;mm()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.qn.enterRestrictedMode(!0),this.qn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ua))}Ma(){this.ua&&(this.window.removeEventListener("pagehide",this.ua),this.ua=null)}Ca(e){try{const t=this.Ia?.getItem(this.Da(e))!==null;return N(dn,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return ye(dn,"Failed to get zombied client id.",t),!1}}Fa(){if(this.Ia)try{this.Ia.setItem(this.Da(this.clientId),String(Date.now()))}catch(e){ye("Failed to set zombie client id.",e)}}Na(){if(this.Ia)try{this.Ia.removeItem(this.Da(this.clientId))}catch{}}Da(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Js(r){return Re(r,ro)}function Do(r){return Re(r,ds)}function kg(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$a=n,this.Ua=s}static ka(e,t){let n=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kl(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(r,e){return U.comparator(r.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.Qa=!1,this.qa=!1,this.Ka=100,this.Wa=(function(){return mm()?8:Mp(Pe())>0?6:4})()}initialize(e,t){this.Ga=e,this.indexManager=t,this.Qa=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ja(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.za(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new J0;return this.Ha(e,t,o).next((c=>{if(i.result=c,this.qa)return this.Ja(e,t,o,c.size)}))})).next((()=>i.result))}Ja(e,t,n,s){return _e(t)?A.resolve():n.documentReadCount<this.Ka?(Lr()<=te.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",ai(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ka,"documents"),A.resolve()):(Lr()<=te.DEBUG&&N("QueryEngine","Query:",ai(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Wa*s?(Lr()<=te.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",ai(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):A.resolve())}ja(e,t){if(_e(t))return A.resolve(null);let n=t;if(Bd(n))return A.resolve(null);let s=ot(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=ia(n,null,"F"),s=ot(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const c=X(...o);return this.Ga.getDocuments(e,c).next((u=>this.indexManager.getMinOffset(e,s).next((h=>{const f=this.Ya(n,u);return this.Za(n,f,c,h.readTime)?this.ja(e,ia(n,null,"F")):this.Xa(e,f,n,h)}))))})))))}za(e,t,n,s){return(_e(t)?(function(o){for(const c of o.stages){if(c instanceof Cn||c instanceof rf)return!1;if(c instanceof eo){if(c.condition instanceof Jp&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof vr&&c.condition._expr.params[0].fieldName===vt)continue;return!1}}return!0})(t):Bd(t))||s.isEqual(j.min())?A.resolve(null):this.Ga.getDocuments(e,n).next((i=>{const o=this.Ya(t,i);return this.Za(t,o,n,s)?A.resolve(null):(Lr()<=te.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sf(t)),this.Xa(e,o,t,up(s,cs)).next((c=>c)))}))}Ya(e,t){let n,s;return _e(e)?(n=new oe(Y0),s=i=>ec(e,i)):(n=new oe(Qu(e)),s=i=>Ma(e,i)),t.forEach(((i,o)=>{s(o)&&(n=n.add(o))})),n}Za(e,t,n,s){if(_e(e))return(function(c){return c.stages.some((u=>u instanceof Cn||u instanceof rf))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ha(e,t,n){return Lr()<=te.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",sf(t)),this.Ga.getDocumentsMatchingQuery(e,t,at.min(),n)}Xa(e,t,n,s){return this.Ga.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="LocalStore",X0=3e8;class Z0{constructor(e,t,n,s){this.persistence=e,this.eu=t,this.serializer=s,this.tu=new de(W),this.nu=new tn((i=>Ha(i)),El),this.ru=new Map,this.iu=e.getRemoteDocumentCache(),this.ko=e.getTargetCache(),this.qo=e.getBundleCache(),this.su(n)}su(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dg(this.iu,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.iu.setIndexManager(this.indexManager),this.eu.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.tu)))}}function Lg(r,e,t,n){return new Z0(r,e,t,n)}async function Mg(r,e){const t=q(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.su(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],c=[];let u=X();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next((h=>({_u:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function ev(r,e){const t=q(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.iu.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,f){const m=h.batch,_=m.keys();let R=A.resolve();return _.forEach((C=>{R=R.next((()=>f.getEntry(u,C))).next((O=>{const M=h.docVersions.get(C);k(M!==null,48541),O.version.compareTo(M)<0&&(m.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))}))})),R.next((()=>c.mutationQueue.removeMutationBatch(u,m)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let u=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function Ug(r){const e=q(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ko.getLastRemoteSnapshotVersion(t)))}function tv(r,e){const t=q(r),n=e.snapshotVersion;let s=t.tu;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.iu.newChangeBuffer({trackRemovals:!0});s=t.tu;const c=[];e.targetChanges.forEach(((f,m)=>{const _=s.get(m);if(!_)return;c.push(t.ko.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.ko.addMatchingKeys(i,f.addedDocuments,m))));let R=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(ue.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),s=s.insert(m,R),(function(O,M,H){return O.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=X0?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(_,R,f)&&c.push(t.ko.updateTargetData(i,R))}));let u=Ae(),h=X();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(nv(i,o,e.documentUpdates).next((f=>{u=f.ou,h=f.au}))),!n.isEqual(j.min())){const f=t.ko.getLastRemoteSnapshotVersion(i).next((m=>t.ko.setTargetsMetadata(i,i.currentSequenceNumber,n)));c.push(f)}return A.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.tu=s,i)))}function nv(r,e,t){let n=X(),s=X();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=Ae();return t.forEach(((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):N(Ol,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{ou:o,au:s}}))}function rv(r,e){const t=q(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=ir),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function ya(r,e){const t=q(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.ko.getTargetData(n,e).next((i=>i?(s=i,A.resolve(s)):t.ko.allocateTargetId(n).next((o=>(s=new St(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.ko.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.tu.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.tu=t.tu.insert(n.targetId,n),t.nu.set(e,n.targetId)),n}))}async function fs(r,e,t){const n=q(r),s=n.tu.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Un(o))throw o;N(Ol,`Failed to update sequence numbers for target ${e}: ${o}`)}n.tu=n.tu.remove(e),n.nu.delete(s.target)}function bu(r,e,t){const n=q(r);let s=j.min(),i=X();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,h,f){const m=q(u),_=m.nu.get(f);return _!==void 0?A.resolve(m.tu.get(_)):m.ko.getTargetData(h,f)})(n,o,_e(e)?e:ot(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.ko.getMatchingKeysForTargetId(o,c.targetId).next((u=>{i=u}))})).next((()=>n.eu.getDocumentsMatchingQuery(o,e,t?s:j.min(),t?i:X()))).next((c=>(Bg(n,c),{documents:c,uu:i})))))}function Fg(r,e){const t=q(r),n=q(t.ko),s=t.tu.get(e);return s?Promise.resolve(s.target??null):t.persistence.runTransaction("Get target data","readonly",(i=>n.Mt(i,e).next((o=>o?.target??null))))}function Pu(r,e){const t=q(r),n=t.ru.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.iu.getAllFromCollectionGroup(s,e,up(n,cs),Number.MAX_SAFE_INTEGER))).then((s=>(Bg(t,s),s)))}function Bg(r,e){e.forEach(((t,n)=>{const s=n.key.getCollectionGroup(),i=r.ru.get(s)||j.min();n.readTime.compareTo(i)>0&&r.ru.set(s,n.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Pu=0,this.Iu=null,this.Ru=!0}Au(){this.Pu===0&&(this.Vu("Unknown"),this.Iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Iu=null,this.du("Backend didn't respond within 10 seconds."),this.Vu("Offline"),Promise.resolve()))))}fu(e){this.state==="Online"?this.Vu("Unknown"):(this.Pu++,this.Pu>=1&&(this.mu(),this.du(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Vu("Offline")))}set(e){this.mu(),this.Pu=0,e==="Online"&&(this.Ru=!1),this.Vu(e)}Vu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}du(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ru?(ye(t),this.Ru=!1):N("OnlineStateTracker",t)}mu(){this.Iu!==null&&(this.Iu.cancel(),this.Iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="RemoteStore";class iv{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.pu=[],this.gu=new Map,this.yu=new Map,this.wu=new Map,this.bu=new Jt(1e3),this.Su=new Jt(1001),this.xu=new Set,this.vu=[],this.Du=i,this.Du.tn((o=>{n.enqueueAndForget((async()=>{br(this)&&(N(kt,"Restarting streams for network reachability change."),await(async function(u){const h=q(u);h.xu.add(4),await so(h),h.Cu.set("Unknown"),h.xu.delete(4),await nc(h)})(this))}))})),this.Cu=new sv(n,s)}}async function nc(r){if(br(r))for(const e of r.vu)await e(!0)}async function so(r){for(const e of r.vu)await e(!1)}function Ru(r,e){return r.yu.get(e)||void 0}function rc(r,e){const t=q(r),n=Ru(t,e.targetId);if(n!==void 0&&t.gu.has(n))return;const s=(function(c,u){const h=Ru(c,u);h!==void 0&&c.wu.delete(h);const f=(function(_,R){return R%2!=0?_.Su.next():_.bu.next()})(c,u);return c.yu.set(u,f),c.wu.set(f,u),f})(t,e.targetId);N(kt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new St(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.gu.set(s,i),Ul(t)?Ml(t):Ps(t).ur()&&Ll(t,i)}function ms(r,e){const t=q(r),n=Ps(t),s=Ru(t,e);N(kt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.gu.delete(s),t.yu.delete(e),t.wu.delete(s),n.ur()&&qg(t,s),t.gu.size===0&&(n.ur()?n.Er():br(t)&&t.Cu.set("Unknown"))}function Ll(r,e){if(r.Fu.rt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=r.wu.get(e.targetId);if(t===void 0)return void N(kt,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Ps(r).yr(e)}function qg(r,e){r.Fu.rt(e),Ps(r).wr(e)}function Ml(r){r.Fu=new Dw({getRemoteKeysForTarget:e=>{const t=r.wu.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):X()},Mt:e=>r.gu.get(e)||null,xt:()=>r.datastore.serializer.databaseId}),Ps(r).start(),r.Cu.Au()}function Ul(r){return br(r)&&!Ps(r).ar()&&r.gu.size>0}function br(r){return q(r).xu.size===0}function $g(r){r.Fu=void 0}async function ov(r){r.Cu.set("Online")}async function av(r){r.gu.forEach(((e,t)=>{Ll(r,e)}))}async function cv(r,e){$g(r),Ul(r)?(r.Cu.fu(e),Ml(r)):r.Cu.set("Unknown")}async function uv(r,e,t){if(r.Cu.set("Online"),e instanceof yp&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds){if(s.gu.has(c)){const u=s.wu.get(c);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.yu.delete(u),s.wu.delete(c)),s.gu.delete(c)}s.Fu.removeTarget(c)}})(r,e)}catch(n){N(kt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ia(r,n)}else if(e instanceof Bo?r.Fu.Tt(e):e instanceof _p?r.Fu.ft(e):r.Fu.Rt(e),!t.isEqual(j.min()))try{const n=await Ug(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const c=i.Fu.Dt(o);c.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.gu.get(f);m&&i.gu.set(f,m.withResumeToken(h.resumeToken,o))}})),c.targetMismatches.forEach(((h,f)=>{const m=i.gu.get(h);if(!m)return;i.gu.set(h,m.withResumeToken(ue.EMPTY_BYTE_STRING,m.snapshotVersion)),qg(i,h);const _=new St(m.target,h,f,m.sequenceNumber);Ll(i,_)}));const u=(function(f,m){const _=new Map;m.targetChanges.forEach(((C,O)=>{const M=f.wu.get(O);M!==void 0&&_.set(M,C)}));let R=new de(W);return m.targetMismatches.forEach(((C,O)=>{const M=f.wu.get(C);M!==void 0&&(R=R.insert(M,O))})),new Ts(m.snapshotVersion,_,R,m.documentUpdates,m.augmentedDocumentUpdates,m.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(u)})(r,t)}catch(n){N(kt,"Failed to raise snapshot:",n),await Ia(r,n)}}async function Ia(r,e,t){if(!Un(e))throw e;r.xu.add(1),await so(r),r.Cu.set("Offline"),t||(t=()=>Ug(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{N(kt,"Retrying IndexedDB access"),await t(),r.xu.delete(1),await nc(r)}))}function jg(r,e){return e().catch((t=>Ia(r,t,e)))}async function bs(r){const e=q(r),t=Dn(e);let n=e.pu.length>0?e.pu[e.pu.length-1].batchId:ir;for(;lv(e);)try{const s=await rv(e.localStore,n);if(s===null){e.pu.length===0&&t.Er();break}n=s.batchId,hv(e,s)}catch(s){await Ia(e,s)}zg(e)&&Gg(e)}function lv(r){return br(r)&&r.pu.length<10}function hv(r,e){r.pu.push(e);const t=Dn(r);t.ur()&&t.br&&t.Sr(e.mutations)}function zg(r){return br(r)&&!Dn(r).ar()&&r.pu.length>0}function Gg(r){Dn(r).start()}async function dv(r){Dn(r).Cr()}async function fv(r){const e=Dn(r);for(const t of r.pu)e.Sr(t.mutations)}async function mv(r,e,t){const n=r.pu.shift(),s=vl.from(n,e,t);await jg(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await bs(r)}async function pv(r,e){e&&Dn(r).br&&await(async function(n,s){if((function(o){return Pw(o)&&o!==S.ABORTED})(s.code)){const i=n.pu.shift();Dn(n).lr(),await jg(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await bs(n)}})(r,e),zg(r)&&Gg(r)}async function Rf(r,e){const t=q(r);t.asyncQueue.verifyOperationInProgress(),N(kt,"RemoteStore received new credentials");const n=br(t);t.xu.add(3),await so(t),n&&t.Cu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.xu.delete(3),await nc(t)}async function Vu(r,e){const t=q(r);e?(t.xu.delete(2),await nc(t)):e||(t.xu.add(2),await so(t),t.Cu.set("Unknown"))}function Ps(r){return r.Ou||(r.Ou=(function(t,n,s){const i=q(t);return i.Or(),new sE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{pn:ov.bind(null,r),yn:av.bind(null,r),bn:cv.bind(null,r),gr:uv.bind(null,r)}),r.vu.push((async e=>{e?(r.Ou.lr(),Ul(r)?Ml(r):r.Cu.set("Unknown")):(await r.Ou.stop(),$g(r))}))),r.Ou}function Dn(r){return r.Mu||(r.Mu=(function(t,n,s){const i=q(t);return i.Or(),new iE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{pn:()=>Promise.resolve(),yn:dv.bind(null,r),bn:pv.bind(null,r),vr:fv.bind(null,r),Dr:mv.bind(null,r)}),r.vu.push((async e=>{e?(r.Mu.lr(),await bs(r)):(await r.Mu.stop(),r.pu.length>0&&(N(kt,`Stopping write stream with ${r.pu.length} pending writes`),r.pu=[]))}))),r.Mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Nu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Nu(this.observer.error,e):ye("Uncaught Error in snapshot listener:",e.toString()))}Bu(){this.muted=!0}Nu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new Fl(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(r,e){if(ye("AsyncQueue",`${e}: ${r}`),Un(r))return new D(S.UNAVAILABLE,`${e}: ${r}`);throw r}const mi="IndexBackfiller";class gv{constructor(e,t){this.asyncQueue=e,this.zu=t,this.task=null}start(){this.Hu(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}Hu(e){N(mi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.zu.Ju();N(mi,`Documents written: ${t}`)}catch(t){Un(t)?N(mi,"Ignoring IndexedDB error during index backfill: ",t):await Mn(t)}await this.Hu(6e4)}))}}class _v{constructor(e,t){this.localStore=e,this.persistence=t}async Ju(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.Yu(t,e)))}Yu(e,t){const n=new Set;let s=t,i=!0;return A.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return N(mi,`Processing collection: ${o}`),this.Zu(e,o,s).next((c=>{s-=c,n.add(o)}));i=!1})))).next((()=>t-s))}Zu(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.Xu(s,i))).next((c=>(N(mi,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}Xu(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=lp(i);Ku(o,n)>0&&(n=o)})),new at(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="firestore_clients";function Vf(r,e){return`${Wg}_${r}_${e}`}const Hg="firestore_mutations";function Sf(r,e,t){let n=`${Hg}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Qg="firestore_targets";function zc(r,e){return`${Qg}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="SharedClientState";class wa{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static ec(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new D(s.error.code,s.error.message))),o?new wa(e,t,s.state,i):(ye(Tt,`Failed to parse mutation state for ID '${t}': ${n}`),null)}tc(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pi{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ec(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new D(n.error.code,n.error.message))),i?new pi(e,n.state,s):(ye(Tt,`Failed to parse target state for ID '${e}': ${t}`),null)}tc(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ea{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ec(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Yu();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Om(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Ea(e,i):(ye(Tt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class ql{constructor(e,t){this.clientId=e,this.onlineState=t}static ec(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ql(t.clientId,t.onlineState):(ye(Tt,`Failed to parse online state: ${e}`),null)}}class Su{constructor(){this.activeTargetIds=Yu()}nc(e){this.activeTargetIds=this.activeTargetIds.add(e)}rc(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tc(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gc{constructor(e,t,n,s,i){this.window=e,this.qn=t,this.persistenceKey=n,this.sc=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._c=this.oc.bind(this),this.ac=new de(W),this.started=!1,this.uc=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.cc=Vf(this.persistenceKey,this.sc),this.lc=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.ac=this.ac.insert(this.sc,new Su),this.Ec=new RegExp(`^${Wg}_${o}_([^_]*)$`),this.hc=new RegExp(`^${Hg}_${o}_(\\d+)(?:_(.*))?$`),this.Tc=new RegExp(`^${Qg}_${o}_(\\d+)$`),this.Pc=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.Ic=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this._c)}static cn(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ba();for(const n of e){if(n===this.sc)continue;const s=this.getItem(Vf(this.persistenceKey,n));if(s){const i=Ea.ec(n,s);i&&(this.ac=this.ac.insert(i.clientId,i))}}this.Rc();const t=this.storage.getItem(this.Pc);if(t){const n=this.Ac(t);n&&this.Vc(n)}for(const n of this.uc)this.oc(n);this.uc=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.lc,JSON.stringify(e))}getAllActiveQueryTargets(){return this.dc(this.ac)}isActiveQueryTarget(e){let t=!1;return this.ac.forEach(((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.fc(e,"pending")}updateMutationState(e,t,n){this.fc(e,t,n),this.mc(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(zc(this.persistenceKey,e));if(s){const i=pi.ec(e,s);i&&(n=i.state)}}return t&&this.gc.nc(e),this.Rc(),n}removeLocalQueryTarget(e){this.gc.rc(e),this.Rc()}isLocalQueryTarget(e){return this.gc.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zc(this.persistenceKey,e))}updateQueryState(e,t,n){this.yc(e,t,n)}handleUserChange(e,t,n){t.forEach((s=>{this.mc(s)})),this.currentUser=e,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.wc(e)}notifyBundleLoaded(e){this.bc(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._c),this.removeItem(this.cc),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N(Tt,"READ",e,t),t}setItem(e,t){N(Tt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){N(Tt,"REMOVE",e),this.storage.removeItem(e)}oc(e){const t=e;if(t.storageArea===this.storage){if(N(Tt,"EVENT",t.key,t.newValue),t.key===this.cc)return void ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.qn.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.Ec.test(t.key)){if(t.newValue==null){const n=this.Sc(t.key);return this.xc(n,null)}{const n=this.vc(t.key,t.newValue);if(n)return this.xc(n.clientId,n)}}else if(this.hc.test(t.key)){if(t.newValue!==null){const n=this.Dc(t.key,t.newValue);if(n)return this.Cc(n)}}else if(this.Tc.test(t.key)){if(t.newValue!==null){const n=this.Fc(t.key,t.newValue);if(n)return this.Oc(n)}}else if(t.key===this.Pc){if(t.newValue!==null){const n=this.Ac(t.newValue);if(n)return this.Vc(n)}}else if(t.key===this.lc){const n=(function(i){let o=Xe.Br;if(i!=null)try{const c=JSON.parse(i);k(typeof c=="number",30636,{Mc:i}),o=c}catch(c){ye(Tt,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);n!==Xe.Br&&this.sequenceNumberHandler(n)}else if(t.key===this.Ic){const n=this.Nc(t.newValue);await Promise.all(n.map((s=>this.syncEngine.Bc(s))))}}}else this.uc.push(t)}))}}get gc(){return this.ac.get(this.sc)}Rc(){this.setItem(this.cc,this.gc.tc())}fc(e,t,n){const s=new wa(this.currentUser,e,t,n),i=Sf(this.persistenceKey,this.currentUser,e);this.setItem(i,s.tc())}mc(e){const t=Sf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}wc(e){const t={clientId:this.sc,onlineState:e};this.storage.setItem(this.Pc,JSON.stringify(t))}yc(e,t,n){const s=zc(this.persistenceKey,e),i=new pi(e,t,n);this.setItem(s,i.tc())}bc(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ic,t)}Sc(e){const t=this.Ec.exec(e);return t?t[1]:null}vc(e,t){const n=this.Sc(e);return Ea.ec(n,t)}Dc(e,t){const n=this.hc.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return wa.ec(new qe(i),s,t)}Fc(e,t){const n=this.Tc.exec(e),s=Number(n[1]);return pi.ec(s,t)}Ac(e){return ql.ec(e)}Nc(e){return JSON.parse(e)}async Cc(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Lc(e.batchId,e.state,e.error);N(Tt,`Ignoring mutation for non-active user ${e.user.uid}`)}Oc(e){return this.syncEngine.$c(e.targetId,e.state,e.error)}xc(e,t){const n=t?this.ac.insert(e,t):this.ac.remove(e),s=this.dc(this.ac),i=this.dc(n),o=[],c=[];return i.forEach((u=>{s.has(u)||o.push(u)})),s.forEach((u=>{i.has(u)||c.push(u)})),this.syncEngine.Uc(o,c).then((()=>{this.ac=n}))}Vc(e){this.ac.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}dc(e){let t=Yu();return e.forEach(((n,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class Yg{constructor(){this.kc=new Su,this.Qc={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.kc.nc(e),this.Qc[e]||"not-current"}updateQueryState(e,t,n){this.Qc[e]=t}removeLocalQueryTarget(e){this.kc.rc(e)}isLocalQueryTarget(e){return this.kc.activeTargetIds.has(e)}clearQueryState(e){delete this.Qc[e]}getAllActiveQueryTargets(){return this.kc.activeTargetIds}isActiveQueryTarget(e){return this.kc.activeTargetIds.has(e)}start(){return this.kc=new Su,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(){return typeof window<"u"?window:null}function Ko(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{static emptySet(e){return new lr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||U.comparator(t.key,n.key):(t,n)=>U.comparator(t.key,n.key),this.keyedMap=Jn(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new lr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.qc=new de(U.comparator)}track(e){const t=e.doc.key,n=this.qc.get(t);n?e.type!==0&&n.type===3?this.qc=this.qc.insert(t,e):e.type===3&&n.type!==1?this.qc=this.qc.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.qc=this.qc.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.qc=this.qc.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.qc=this.qc.remove(t):e.type===1&&n.type===2?this.qc=this.qc.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.qc=this.qc.insert(t,{type:2,doc:e.doc}):B(63341,{Nt:e,Kc:n}):this.qc=this.qc.insert(t,e)}Wc(){const e=[];return this.qc.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ps{constructor(e,t,n,s,i,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new ps(e,t,lr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.Gc=void 0,this.jc=[]}zc(){return this.jc.some((e=>e.Hc()))}}class Iv{constructor(){this.queries=Cf(),this.onlineState="Unknown",this.Jc=new Set}terminate(){(function(t,n){const s=q(t),i=s.queries;s.queries=Cf(),i.forEach(((o,c)=>{for(const u of c.jc)u.onError(n)}))})(this,new D(S.ABORTED,"Firestore shutting down"))}}function Cf(){return new tn((r=>lg(r)),Wa)}async function Xg(r,e){const t=q(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.zc()&&e.Hc()&&(n=2):(i=new yv,n=e.Hc()?0:1);try{switch(n){case 0:i.Gc=await t.onListen(s,!0);break;case 1:i.Gc=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Bl(o,`Initialization of query '${_e(e.query)?zt(e.query):ai(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.jc.push(e),e.Yc(t.onlineState),i.Gc&&e.Zc(i.Gc)&&$l(t)}async function Zg(r,e){const t=q(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.jc.indexOf(e);o>=0&&(i.jc.splice(o,1),i.jc.length===0?s=e.Hc()?0:1:!i.zc()&&e.Hc()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function wv(r,e){const t=q(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.jc)c.Zc(s)&&(n=!0);o.Gc=s}}n&&$l(t)}function Ev(r,e,t){const n=q(r),s=n.queries.get(e);if(s)for(const i of s.jc)i.onError(t);n.queries.delete(e)}function $l(r){r.Jc.forEach((e=>{e.next()}))}var xu;(function(r){r.Default="default",r.Cache="cache"})(xu||(xu={}));class e_{constructor(e,t,n){this.query=e,this.Xc=t,this.el=!1,this.tl=null,this.onlineState="Unknown",this.options=n||{}}Zc(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new ps(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.el?this.nl(e)&&(this.Xc.next(e),t=!0):this.rl(e,this.onlineState)&&(this.il(e),t=!0),this.tl=e,t}onError(e){this.Xc.error(e)}Yc(e){this.onlineState=e;let t=!1;return this.tl&&!this.el&&this.rl(this.tl,e)&&(this.il(this.tl),t=!0),t}rl(e,t){if(!e.fromCache||!this.Hc())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}nl(e){if(e.docChanges.length>0)return!0;const t=this.tl&&this.tl.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}il(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.el=!0,this.Xc.next(e)}Hc(){return this.options.source!==xu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.key=e}}class n_{constructor(e){this.key=e}}class Tv{constructor(e,t){this.query=e,this.hl=t,this.Tl=null,this.hasCachedResults=!1,this.current=!1,this.Pl=X(),this.mutatedKeys=X(),this.Il=_e(e)?Au(e):Qu(e),this.Rl=new lr(this.Il)}get Al(){return this.hl}Vl(e,t){const n=t?t.dl:new xf,s=t?t.Rl:this.Rl;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const[u,h]=this.fl(this.query,s);e.inorderTraversal(((m,_)=>{const R=s.get(m),C=xg(this.query,_)?_:null,O=!!R&&this.mutatedKeys.has(R.key),M=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let H=!1;R&&C?R.data.isEqual(C.data)?O!==M&&(n.track({type:3,doc:C}),H=!0):this.ml(R,C)||(n.track({type:2,doc:C}),H=!0,(u&&this.Il(C,u)>0||h&&this.Il(C,h)<0)&&(c=!0)):!R&&C?(n.track({type:0,doc:C}),H=!0):R&&!C&&(n.track({type:1,doc:R}),H=!0,(u||h)&&(c=!0)),H&&(C?(o=o.add(C),i=M?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}));const f=this.pl(this.query);if(f)if(_e(this.query)){const m=[];o.forEach((C=>m.push(C)));const _=Sg(this.query,m);let R=new lr(Au(this.query));for(const C of _)R=R.add(C);o.forEach((C=>{R.has(C.key)||(i=i.delete(C.key),n.track({type:1,doc:C}))})),o=R}else{const m=this.gl(this.query);for(;o.size>f;){const _=m==="F"?o.last():o.first();o=o.delete(_.key),i=i.delete(_.key),n.track({type:1,doc:_})}}return{Rl:o,dl:n,Za:c,mutatedKeys:i}}pl(e){return _e(e)?Bc(e)?.limit:e.limit||void 0}gl(e){if(_e(e)){const t=Bc(e);return t&&t.limit<0?"L":"F"}return e.limitType}fl(e,t){if(_e(e)){const n=Bc(e)?.limit;return[t.size===n?t.last():null,null]}return[e.limitType==="F"&&t.size===this.pl(this.query)?t.last():null,e.limitType==="L"&&t.size===this.pl(this.query)?t.first():null]}ml(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Rl;this.Rl=e.Rl,this.mutatedKeys=e.mutatedKeys;const o=e.dl.Wc();o.sort(((f,m)=>(function(R,C){const O=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Nt:M})}};return O(R)-O(C)})(f.type,m.type)||this.Il(f.doc,m.doc))),this.yl(n),s=s??!1;const c=t&&!s?this.wl():[],u=this.Pl.size===0&&this.current&&!s?1:0,h=u!==this.Tl;return this.Tl=u,o.length!==0||h?{snapshot:new ps(this.query,e.Rl,i,o,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),bl:c}:{bl:c}}Yc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Rl:this.Rl,dl:new xf,mutatedKeys:this.mutatedKeys,Za:!1},!1)):{bl:[]}}Sl(e){return!this.hl.has(e)&&!!this.Rl.has(e)&&!this.Rl.get(e).hasLocalMutations}yl(e){e&&(e.addedDocuments.forEach((t=>this.hl=this.hl.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.hl=this.hl.delete(t))),this.current=e.current)}wl(){if(!this.current)return[];const e=this.Pl;this.Pl=X(),this.Rl.forEach((n=>{this.Sl(n.key)&&(this.Pl=this.Pl.add(n.key))}));const t=[];return e.forEach((n=>{this.Pl.has(n)||t.push(new n_(n))})),this.Pl.forEach((n=>{e.has(n)||t.push(new t_(n))})),t}xl(e){this.hl=e.uu,this.Pl=X();const t=this.Vl(e.documents);return this.applyChanges(t,!0)}vl(){return ps.fromInitialDocuments(this.query,this.Rl,this.mutatedKeys,this.Tl===0,this.hasCachedResults)}}const Rs="SyncEngine";class vv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Av{constructor(e){this.key=e,this.Dl=!1}}class bv{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Cl={},this.Fl=new tn((c=>lg(c)),Wa),this.Ol=new Map,this.Ml=new Set,this.Nl=new de(U.comparator),this.Bl=new Map,this.Ll=new Cl,this.$l={},this.Ul=new Map,this.kl=Jt.G_(),this.onlineState="Unknown",this.Ql=void 0}get isPrimaryClient(){return this.Ql===!0}}async function Pv(r,e,t=!0){const n=sc(r);let s;const i=n.Fl.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.vl()):s=await r_(n,e,t,!0),s}async function Rv(r,e){const t=sc(r);await r_(t,e,!0,!1)}async function r_(r,e,t,n){const s=await ya(r.localStore,_e(e)?e:ot(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await jl(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&rc(r.remoteStore,s),c}async function jl(r,e,t,n,s){r.ql=(m,_,R)=>(async function(O,M,H,J){let Y=M.view.Vl(H);Y.Za&&(Y=await bu(O.localStore,M.query,!1).then((({documents:w})=>M.view.Vl(w,Y))));const le=J&&J.targetChanges.get(M.targetId),ce=J&&J.targetMismatches.get(M.targetId)!=null,se=M.view.applyChanges(Y,O.isPrimaryClient,le,ce);return Cu(O,M.targetId,se.bl),se.snapshot})(r,m,_,R);const i=await bu(r.localStore,e,!0),o=new Tv(e,i.uu),c=o.Vl(i.documents),u=Ji.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,u);Cu(r,t,h.bl);const f=new vv(e,t,o);return r.Fl.set(e,f),r.Ol.has(t)?r.Ol.get(t).push(e):r.Ol.set(t,[e]),h.snapshot}async function Vv(r,e,t){const n=q(r),s=n.Fl.get(e),i=n.Ol.get(s.targetId);if(i.length>1)return n.Ol.set(s.targetId,i.filter((o=>!Wa(o,e)))),void n.Fl.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await fs(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ms(n.remoteStore,s.targetId),gs(n,s.targetId)})).catch(Mn)):(gs(n,s.targetId),await fs(n.localStore,s.targetId,!0))}async function Sv(r,e){const t=q(r),n=t.Fl.get(e),s=t.Ol.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ms(t.remoteStore,n.targetId))}async function xv(r,e,t){const n=Wl(r);try{const s=await(function(o,c){const u=q(o),h=ie.now(),f=c.reduce(((R,C)=>R.add(C.key)),X());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let C=Ae(),O=X();return u.iu.getEntries(R,f).next((M=>{C=M,C.forEach(((H,J)=>{J.isValidDocument()||(O=O.add(H))}))})).next((()=>u.localDocuments.getOverlayedDocuments(R,C))).next((M=>{m=M;const H=[];for(const J of c){const Y=hw(J,m.get(J.key).overlayedDocument);Y!=null&&H.push(new en(J.key,Y,Wm(Y.value.mapValue),Me.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,H,c)})).next((M=>{_=M;const H=M.applyToLocalDocumentSet(m,O);return u.documentOverlayCache.saveOverlays(R,M.batchId,H)}))})).then((()=>({batchId:_.batchId,changes:pp(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,c,u){let h=o.$l[o.currentUser.toKey()];h||(h=new de(W)),h=h.insert(c,u),o.$l[o.currentUser.toKey()]=h})(n,s.batchId,t),await qn(n,s.changes),await bs(n.remoteStore)}catch(s){const i=Bl(s,"Failed to persist write");t.reject(i)}}async function s_(r,e){const t=q(r);try{const n=await tv(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Bl.get(i);o&&(k(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Dl=!0:s.modifiedDocuments.size>0?k(o.Dl,14607):s.removedDocuments.size>0&&(k(o.Dl,42227),o.Dl=!1))})),await qn(t,n,e)}catch(n){await Mn(n)}}function Nf(r,e,t){const n=q(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fl.forEach(((i,o)=>{const c=o.view.Yc(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const u=q(o);u.onlineState=c;let h=!1;u.queries.forEach(((f,m)=>{for(const _ of m.jc)_.Yc(c)&&(h=!0)})),h&&$l(u)})(n.eventManager,e),s.length&&n.Cl.gr(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Cv(r,e,t){const n=q(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Bl.get(e),i=s&&s.key;if(i){let o=new de(U.comparator);o=o.insert(i,ge.newNoDocument(i,j.min()));const c=X().add(i),u=new Ts(j.min(),new Map,new de(W),o,Ae(),c);await s_(n,u),n.Nl=n.Nl.remove(i),n.Bl.delete(e),Kl(n)}else await fs(n.localStore,e,!1).then((()=>gs(n,e,t))).catch(Mn)}async function Nv(r,e){const t=q(r),n=e.batch.batchId;try{const s=await ev(t.localStore,e);Gl(t,n,null),zl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await qn(t,s)}catch(s){await Mn(s)}}async function Dv(r,e,t){const n=q(r);try{const s=await(function(o,c){const u=q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next((m=>(k(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(n.localStore,e);Gl(n,e,t),zl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await qn(n,s)}catch(s){await Mn(s)}}function zl(r,e){(r.Ul.get(e)||[]).forEach((t=>{t.resolve()})),r.Ul.delete(e)}function Gl(r,e,t){const n=q(r);let s=n.$l[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.$l[n.currentUser.toKey()]=s}}function gs(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ol.get(e))r.Fl.delete(n),t&&r.Cl.Kl(n,t);r.Ol.delete(e),r.isPrimaryClient&&r.Ll.fo(e).forEach((n=>{r.Ll.containsKey(n)||i_(r,n)}))}function i_(r,e){r.Ml.delete(e.path.canonicalString());const t=r.Nl.get(e);t!==null&&(ms(r.remoteStore,t),r.Nl=r.Nl.remove(e),r.Bl.delete(t),Kl(r))}function Cu(r,e,t){for(const n of t)n instanceof t_?(r.Ll.addReference(n.key,e),kv(r,n)):n instanceof n_?(N(Rs,"Document no longer in limbo: "+n.key),r.Ll.removeReference(n.key,e),r.Ll.containsKey(n.key)||i_(r,n.key)):B(19791,{Wl:n})}function kv(r,e){const t=e.key,n=t.path.canonicalString();r.Nl.get(t)||r.Ml.has(n)||(N(Rs,"New document in limbo: "+t),r.Ml.add(n),Kl(r))}function Kl(r){for(;r.Ml.size>0&&r.Nl.size<r.maxConcurrentLimboResolutions;){const e=r.Ml.values().next().value;r.Ml.delete(e);const t=new U(ee.fromString(e)),n=r.kl.next();r.Bl.set(n,new Av(t)),r.Nl=r.Nl.insert(t,n),rc(r.remoteStore,new St(ot(La(t.path)),n,"TargetPurposeLimboResolution",Xe.Br))}}async function qn(r,e,t){const n=q(r),s=[],i=[],o=[];n.Fl.isEmpty()||(n.Fl.forEach(((c,u)=>{o.push(n.ql(u,e,t).then((h=>{if((h||t)&&n.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;n.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=kl.ka(u.targetId,h);i.push(f)}})))})),await Promise.all(o),n.Cl.gr(s),await(async function(u,h){const f=q(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>A.forEach(h,(_=>A.forEach(_.$a,(R=>f.persistence.referenceDelegate.addReference(m,_.targetId,R))).next((()=>A.forEach(_.Ua,(R=>f.persistence.referenceDelegate.removeReference(m,_.targetId,R)))))))))}catch(m){if(!Un(m))throw m;N(Ol,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const R=f.tu.get(_),C=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(C);f.tu=f.tu.insert(_,O)}}})(n.localStore,i))}async function Ov(r,e){const t=q(r);if(!t.currentUser.isEqual(e)){N(Rs,"User change. New user:",e.toKey());const n=await Mg(t.localStore,e);t.currentUser=e,(function(i,o){i.Ul.forEach((c=>{c.forEach((u=>{u.reject(new D(S.CANCELLED,o))}))})),i.Ul.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await qn(t,n._u)}}function Lv(r,e){const t=q(r),n=t.Bl.get(e);if(n&&n.Dl)return X().add(n.key);{let s=X();const i=t.Ol.get(e);if(!i)return s;for(const o of i??[]){const c=t.Fl.get(o);s=s.unionWith(c.view.Al)}return s}}async function Mv(r,e){const t=q(r),n=await bu(t.localStore,e.query,!0),s=e.view.xl(n);return t.isPrimaryClient&&Cu(t,e.targetId,s.bl),s}async function Uv(r,e){const t=q(r);return Pu(t.localStore,e).then((n=>qn(t,n)))}async function Fv(r,e,t,n){const s=q(r),i=await(function(c,u){const h=q(c),f=q(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",(m=>f.ns(m,u).next((_=>_?h.localDocuments.getDocuments(m,_):A.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await bs(s.remoteStore):t==="acknowledged"||t==="rejected"?(Gl(s,e,n||null),zl(s,e),(function(c,u){q(q(c).mutationQueue).us(u)})(s.localStore,e)):B(6720,"Unknown batchState",{Gl:t}),await qn(s,i)):N(Rs,"Cannot apply mutation batch with id: "+e)}async function Bv(r,e){const t=q(r);if(sc(t),Wl(t),e===!0&&t.Ql!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Df(t,n.toArray());t.Ql=!0,await Vu(t.remoteStore,!0);for(const i of s)rc(t.remoteStore,i)}else if(e===!1&&t.Ql!==!1){const n=[];let s=Promise.resolve();t.Ol.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then((()=>(gs(t,o),fs(t.localStore,o,!0)))),ms(t.remoteStore,o)})),await s,await Df(t,n),(function(o){const c=q(o);c.Bl.forEach(((u,h)=>{ms(c.remoteStore,h)})),c.Ll.mo(),c.Bl=new Map,c.Nl=new de(U.comparator)})(t),t.Ql=!1,await Vu(t.remoteStore,!1)}}async function Df(r,e,t){const n=q(r),s=[],i=[];for(const o of e){let c;const u=n.Ol.get(o);if(u&&u.length!==0){c=await ya(n.localStore,_e(u[0])?u[0]:ot(u[0]));for(const h of u){const f=n.Fl.get(h),m=await Mv(n,f);m.snapshot&&i.push(m.snapshot)}}else{const h=await Fg(n.localStore,o);c=await ya(n.localStore,h),await jl(n,o_(h),o,!1,c.resumeToken)}s.push(c)}return n.Cl.gr(i),s}function o_(r){return Lt(r)?r:hp(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function qv(r){return(function(t){return q(q(t).persistence).Ba()})(q(r).localStore)}async function $v(r,e,t,n){const s=q(r);if(s.Ql)return void N(Rs,"Ignoring unexpected query state notification.");const i=s.Ol.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{let o;if(_e(i[0]))switch(jt(i[0])){case"collection_group":case"collection":o=await Pu(s.localStore,rg(i[0]));break;case"documents":o=await(function(h,f){const m=q(h),_=X(...ua(f).map((R=>U.fromPath(R))));return m.persistence.runTransaction("Get documents for pipeline","readonly",(R=>m.iu.getEntries(R,_))).then((R=>R))})(s.localStore,i[0]);break;default:yt(""),o=Jn()}else o=await Pu(s.localStore,(function(h){return h.collectionGroup||(h.path.length%2==1?h.path.lastSegment():h.path.get(h.path.length-2))})(i[0]));const c=Ts.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ue.EMPTY_BYTE_STRING);await qn(s,o,c);break}case"rejected":await fs(s.localStore,e,!0),gs(s,e,n);break;default:B(64155,t)}}async function jv(r,e,t){const n=sc(r);if(n.Ql){for(const s of e){if(n.Ol.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){N(Rs,"Adding an already active target "+s);continue}const i=await Fg(n.localStore,s),o=await ya(n.localStore,i);await jl(n,o_(i),o.targetId,!1,o.resumeToken),rc(n.remoteStore,o)}for(const s of t)n.Ol.has(s)&&await fs(n.localStore,s,!1).then((()=>{ms(n.remoteStore,s),gs(n,s)})).catch(Mn)}}function sc(r){const e=q(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=s_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cv.bind(null,e),e.Cl.gr=wv.bind(null,e.eventManager),e.Cl.Kl=Ev.bind(null,e.eventManager),e}function Wl(r){const e=q(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dv.bind(null,e),e}class Fi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ua(e.databaseInfo.databaseId),this.sharedClientState=this.jl(e),this.persistence=this.zl(e),await this.persistence.start(),this.localStore=this.Hl(e),this.gcScheduler=this.Jl(e,this.localStore),this.indexBackfillerScheduler=this.Yl(e,this.localStore)}Jl(e,t){return null}Yl(e,t){return null}Hl(e){return Lg(this.persistence,new Og,e.initialUser,this.serializer)}zl(e){return new Nl(tc.Ho,this.serializer)}jl(e){return new Yg}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fi.provider={build:()=>new Fi};class zv extends Fi{constructor(e){super(),this.cacheSizeBytes=e}Jl(e,t){k(this.persistence.referenceDelegate instanceof _a,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Fp(n,e.asyncQueue,t)}zl(e){const t=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new Nl((n=>_a.Ho(n,t)),this.serializer)}}class a_ extends Fi{constructor(e,t,n){super(),this.Zl=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Zl.initialize(this,e),await Wl(this.Zl.syncEngine),await bs(this.Zl.remoteStore),await this.persistence.fa((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Hl(e){return Lg(this.persistence,new Og,e.initialUser,this.serializer)}Jl(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Fp(n,e.asyncQueue,t)}Yl(e,t){const n=new _v(t,this.persistence);return new gv(e.asyncQueue,n)}zl(e){const t=kg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new Dl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Jg(),Ko(),this.serializer,this.sharedClientState,!!this.forceOwnership)}jl(e){return new Yg}}class Gv extends a_{constructor(e,t){super(e,t,!1),this.Zl=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Zl.syncEngine;this.sharedClientState instanceof Gc&&(this.sharedClientState.syncEngine={Lc:Fv.bind(null,t),$c:$v.bind(null,t),Uc:jv.bind(null,t),Ba:qv.bind(null,t),Bc:Uv.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fa((async n=>{await Bv(this.Zl.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}jl(e){const t=Jg();if(!Gc.cn(t))throw new D(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=kg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Gc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Bi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Nf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ov.bind(null,this.syncEngine),await Vu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Iv})()}createDatastore(e){const t=Ua(e.databaseInfo.databaseId),n=rE(e.databaseInfo);return cE(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,c){return new iv(n,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Nf(this.syncEngine,t,0)),(function(){return Hd.cn()?new Hd:new Zw})())}createSyncEngine(e,t){return(function(s,i,o,c,u,h,f){const m=new bv(s,i,o,c,u,h);return f&&(m.Ql=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=q(t);N(kt,"RemoteStore shutting down."),n.xu.add(5),await so(n),n.Du.shutdown(),n.Cu.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Bi.provider={build:()=>new Bi};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="FirestoreClient";class Kv{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=qe.UNAUTHENTICATED,this.clientId=Uu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{N(kn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(N(kn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Bl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Kc(r,e){r.asyncQueue.verifyOperationInProgress(),N(kn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Mg(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function kf(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Wv(r);N(kn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Rf(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Rf(e.remoteStore,s))),r._onlineComponents=e}async function Wv(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(kn,"Using user provided OfflineComponentProvider");try{await Kc(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;yt("Error using user provided cache. Falling back to memory cache: "+t),await Kc(r,new Fi)}}else N(kn,"Using default OfflineComponentProvider"),await Kc(r,new zv(void 0));return r._offlineComponents}async function c_(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(kn,"Using user provided OnlineComponentProvider"),await kf(r,r._uninitializedComponentsProvider._online)):(N(kn,"Using default OnlineComponentProvider"),await kf(r,new Bi))),r._onlineComponents}function Hv(r){return c_(r).then((e=>e.syncEngine))}async function u_(r){const e=await c_(r),t=e.eventManager;return t.onListen=Pv.bind(null,e.syncEngine),t.onUnlisten=Vv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Rv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Sv.bind(null,e.syncEngine),t}function Qv(r,e,t={}){const n=new Ct;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,u,h){const f=new Kg({next:_=>{f.Bu(),o.enqueueAndForget((()=>Zg(i,m)));const R=_.docs.has(c);!R&&_.fromCache?h.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&_.fromCache&&u&&u.source==="server"?h.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new e_(La(c.path),f,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Xg(i,m)})(await u_(r),r.asyncQueue,e,t,n))),n.promise}function Yv(r,e,t={}){const n=new Ct;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,u,h){const f=new Kg({next:_=>{f.Bu(),o.enqueueAndForget((()=>Zg(i,m))),_.fromCache&&u.source==="server"?h.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new e_(c instanceof li?YT(c):c,f,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Xg(i,m)})(await u_(r),r.asyncQueue,e,t,n))),n.promise}function Jv(r,e){const t=new Ct;return r.asyncQueue.enqueueAndForget((async()=>xv(await Hv(r),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l_=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Sn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Xv=class extends l_{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{convertValue(e,t="none"){switch(Te(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(Pn(e))return this.convertToInt32Value(e.mapValue);if(dt(e))return this.convertToDecimal128Value(e.mapValue)}return fe(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,t);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(pt(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,t);case 15:return this.convertObject(e.mapValue,t);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return Ft.instance();case 1:return Bt.instance();default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return On(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){const t=e.fields?.[yr].arrayValue?.values?.map((n=>fe(n.doubleValue)));return new Ze(t)}convertToBsonObjectId(e){const t=e.fields?.[Ir]?.stringValue??"";return new el(t)}convertToBytesWithSubtype(e){const t=e.fields?.[Zr],n=t?.bytesValue;if(!n)throw new Error("Received incorrect bytesValue for Bytes with subtype");const s=pt(n).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const i=s[0],o=s.slice(1);return new st(ue.fromUint8Array(o),i)}convertToBsonTimestamp(e){const t=e.fields?.[Ut],n=Number(t?.mapValue?.fields?.[wi]?.integerValue),s=Number(t?.mapValue?.fields?.[Ei]?.integerValue);return new tl(n,s)}convertToRegexValue(e){const t=e.fields?.[At]?.mapValue?.fields?.[Jr]?.stringValue??"",n=e.fields?.[At]?.mapValue?.fields?.[Xr]?.stringValue??"";return new ol(t,n)}convertToInt32Value(e){const t=Number(e.fields?.[Ln]?.integerValue);return new rl(t)}convertToDecimal128Value(e){const t=e.fields?.[Wt]?.stringValue??"";return new nl(t)}convertGeoPoint(e){return new xt(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Wi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qr(e));default:return null}}convertTimestamp(e){const t=Kt(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ee.fromString(e);k(Sp(n),9688,{name:e});const s=new bn(n.get(1),n.get(3)),i=new U(n.popFirst(5));return s.isEqual(t)||ye(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="AsyncQueue";class Lf{constructor(e=Promise.resolve()){this._E=[],this.oE=!1,this.aE=[],this.uE=null,this.cE=!1,this.lE=!1,this.EE=[],this._r=new Np(this,"async_queue_retry"),this.hE=()=>{const n=Ko();n&&N(Of,"Visibility state changed to "+n.visibilityState),this._r.Xn()},this.TE=e;const t=Ko();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hE)}get isShuttingDown(){return this.oE}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.PE(),this.IE(e)}enterRestrictedMode(e){if(!this.oE){this.oE=!0,this.lE=e||!1;const t=Ko();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hE)}}enqueue(e){if(this.PE(),this.oE)return new Promise((()=>{}));const t=new Ct;return this.IE((()=>this.oE&&this.lE?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this._E.push(e),this.RE())))}async RE(){if(this._E.length!==0){try{await this._E[0](),this._E.shift(),this._r.reset()}catch(e){if(!Un(e))throw e;N(Of,"Operation failed with retryable error: "+e)}this._E.length>0&&this._r.Yn((()=>this.RE()))}}IE(e){const t=this.TE.then((()=>(this.cE=!0,e().catch((n=>{throw this.uE=n,this.cE=!1,ye("INTERNAL UNHANDLED ERROR: ",Mf(n)),n})).then((n=>(this.cE=!1,n))))));return this.TE=t,t}enqueueAfterDelay(e,t,n){this.PE(),this.EE.indexOf(e)>-1&&(t=0);const s=Fl.createAndSchedule(this,e,t,n,(i=>this.AE(i)));return this.aE.push(s),s}PE(){this.uE&&B(47125,{VE:Mf(this.uE)})}verifyOperationInProgress(){}async dE(){let e;do e=this.TE,await e;while(e!==this.TE)}fE(e){for(const t of this.aE)if(t.timerId===e)return!0;return!1}mE(e){return this.dE().then((()=>{this.aE.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.aE)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.dE()}))}pE(e){this.EE.push(e)}AE(e){const t=this.aE.indexOf(e);this.aE.splice(t,1)}}function Mf(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Vs extends il{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Lf,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lf(e),this._firestoreClient=void 0,await e}}}function mP(r,e,t){t||(t=ea);const n=Lu(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(mr(i,e))return s;throw new D(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new D(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Up)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&zi(e.host)&&_m(e.host),n.initialize({options:e,instanceIdentifier:t})}function ic(r){if(r._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||eA(r),r._firestoreClient}function eA(r){const e=r._freezeSettings(),t=lE(r._databaseId,r._app?.options.appId||"",r._persistenceKey,r._app?.options.apiKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Kv(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(r._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends Zv{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}class ri{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hr extends l_{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Sn("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hr._jsonSchemaVersion="firestore/documentSnapshot/1.0",hr._jsonSchema={type:Ie("string",hr._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Wo extends hr{data(e={}){return super.data(e)}}class zr{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Wo(this._firestore,this._userDataWriter,n.key,n,new ri(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{_e(s._snapshot.query)?Au(s._snapshot.query):Qu(s.query._query);const u=new Wo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ri(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Wo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ri(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:tA(c.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:r})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zr._jsonSchemaVersion="firestore/querySnapshot/1.0",zr._jsonSchema={type:Ie("string",zr._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hl{}class Ql extends Hl{}function pP(r,e,...t){let n=[];e instanceof Hl&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((u=>u instanceof Jl)).length,c=i.filter((u=>u instanceof Yl)).length;if(o>1||o>0&&c>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class Yl extends Ql{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Yl(e,t,n)}_apply(e){const t=this._parse(e);return f_(e._query,t),new Fn(e.firestore,e.converter,uu(e._query,t))}_parse(e){const t=cl(e.firestore);return(function(i,o,c,u,h,f,m){let _;if((function(O,M){if(typeof O=="number"&&isNaN(O)&&M!=="=="&&M!=="!="&&M!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");if(O===null&&M!=="=="&&M!=="!="&&M!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.")})(m,f),h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ff(m,f);const C=[];for(const O of m)C.push(Uf(u,i,O));_={arrayValue:{values:C}}}else _=Uf(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ff(m,f),_=EE(c,o,m,f==="in"||f==="not-in");return ne.create(h,f,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Jl extends Hl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jl(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)f_(o,u),o=uu(o,u)})(e._query,t),new Fn(e.firestore,e.converter,uu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xl extends Ql{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xl(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ri(i,o)})(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,Tw(e._query,t))}}function gP(r,e="asc"){const t=e,n=Sn("orderBy",r);return Xl._create(n,t)}class Zl extends Ql{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Zl(e,t,n)}_apply(e){return new Fn(e.firestore,e.converter,ia(e._query,this._limit,this._limitType))}}function _P(r){return Zl._create("limit",r,"F")}function Uf(r,e,t){if(typeof(t=De(t))=="string"){if(t==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dp(e)&&t.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ee.fromString(t));if(!U.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ts(r,new U(n))}if(t instanceof we)return ts(r,t._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sa(t)}.`)}function Ff(r,e){if(!Array.isArray(r)||r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function f_(r,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rA{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=oA(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function yP(r){return new rA(r)}class sA{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Bi.provider,this._offlineComponentProvider={build:t=>new a_(t,e?.cacheSizeBytes,this.forceOwnership)}}}class iA{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Bi.provider,this._offlineComponentProvider={build:t=>new Gv(t,e?.cacheSizeBytes)}}}function oA(r){return new sA(r?.forceOwnership)}function IP(){return new iA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=cl(e)}set(e,t,n){this._verifyNotCommitted();const s=Wc(e,this._firestore),i=h_(s.converter,t,n),o=jp(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,Me.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=Wc(e,this._firestore);let o;return o=typeof(t=De(t))=="string"||t instanceof Fa?wE(this._dataReader,"WriteBatch.update",i._key,t,n,s):IE(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Me.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Wc(e,this._firestore);return this._mutations=this._mutations.concat(new Yi(t._key,Me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wc(r,e){if((r=De(r)).firestore!==e)throw new D(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(r){r=An(r,we);const e=An(r.firestore,Vs),t=ic(e);return Qv(t,r._key).then((n=>cA(e,r,n)))}function EP(r){r=An(r,Fn);const e=An(r.firestore,Vs),t=ic(e),n=new d_(e);return nA(r._query),Yv(t,r._query).then((s=>new zr(e,n,r,s)))}function TP(r,e,t){r=An(r,we);const n=An(r.firestore,Vs),s=h_(r.converter,e,t),i=cl(n);return eh(n,[jp(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Me.none())])}function vP(r){return eh(An(r.firestore,Vs),[new Yi(r._key,Me.none())])}function eh(r,e){const t=ic(r);return Jv(t,e)}function cA(r,e,t){const n=t.docs.get(e._key),s=new d_(r);return new hr(r,s,e._key,n,new ri(t.hasPendingWrites,t.fromCache),e.converter)}function AP(r){return r=An(r,Vs),ic(r),new aA(r,(e=>eh(r,e)))}const Bf="@firebase/firestore",qf="4.20.0";(function(e,t=!0){KI(ys),Wr(new pr("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new Vs(new Qw(n.getProvider("auth-internal")),new Xw(o,n.getProvider("app-check-internal")),tw(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),In(Bf,qf,e),In(Bf,qf,"esm2020")})();var uA="firebase",lA="13.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(uA,lA,"app");function m_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hA=m_,p_=new $i("auth","Firebase",m_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Ou("@firebase/auth");function Ho(r,...e){Ta.logLevel<=te.WARN&&Ta.warn(`Auth (${ys}): ${r}`,...e)}function Qo(r,...e){Ta.logLevel<=te.ERROR&&Ta.error(`Auth (${ys}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(r,...e){throw th(r,...e)}function _t(r,...e){return th(r,...e)}function oc(r,e,t){const n={...hA(),[e]:t};return new $i("auth","Firebase",n).create(e,{appName:r.name})}function dr(r){return oc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dA(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Ot(r,"argument-error"),oc(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function th(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return p_.create(r,...e)}function Q(r,e,...t){if(!r)throw th(e,...t)}function qt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Qo(e),new Error(e)}function Xt(r,e){r||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){return typeof self<"u"&&self.location?.href||""}function fA(){return $f()==="http:"||$f()==="https:"}function $f(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fA()||Ly()||"connection"in navigator)?navigator.onLine:!0}function pA(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xt(t>e,"Short delay should be less than long delay!"),this.isMobile=ky()||My()}get(){return mA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(r,e){Xt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yA=new io(3e4,6e4);function rh(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ss(r,e,t,n,s={}){return __(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=ji({...o,key:r.config.apiKey}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h={method:e,headers:u,...i};return Oy()||(h.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&zi(r.emulatorConfig.host)&&(h.credentials="include"),g_.fetch()(await y_(r,r.config.apiHost,t,c),h)})}async function __(r,e,t){r._canInitEmulator=!1;const n={...gA,...e};try{const s=new wA(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ko(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ko(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw ko(r,"user-disabled",o);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw oc(r,f,h);Ot(r,f)}}catch(s){if(s instanceof Zt)throw s;Ot(r,"network-request-failed",{message:String(s)})}}async function IA(r,e,t,n,s={}){const i=await Ss(r,e,t,n,s);return"mfaPendingCredential"in i&&Ot(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function y_(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?nh(r.config,s):`${r.config.apiScheme}://${s}`;return _A.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class wA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(_t(this.auth,"network-request-failed")),yA.get())})}}function ko(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=_t(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(r,e){return Ss(r,"POST","/v1/accounts:delete",e)}async function va(r,e){return Ss(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TA(r,e=!1){const t=De(r),n=await t.getIdToken(e),s=sh(n);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:gi(Hc(s.auth_time)),issuedAtTime:gi(Hc(s.iat)),expirationTime:gi(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Hc(r){return Number(r)*1e3}function sh(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=um(t);return s?JSON.parse(s):(Qo("Failed to decode base64 JWT payload"),null)}catch(s){return Qo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function jf(r){const e=sh(r);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw I_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function I_(r){return r instanceof Zt?r.code==="auth/user-disabled"||r.code==="auth/user-token-expired":!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(r){const e=r.auth,t=await r.getIdToken(),n=await qi(r,va(e,{idToken:t}));Q(n?.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=s.providerUserInfo?.length?w_(s.providerUserInfo):[],o=bA(r.providerData,i),c=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!o?.length,h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Du(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(r,f)}async function AA(r){const e=De(r);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bA(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function w_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(r,e){const t=await __(r,{},async()=>{const n=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await y_(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:n};return r.emulatorConfig&&zi(r.emulatorConfig.host)&&(u.credentials="include"),g_.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function RA(r,e){return Ss(r,"POST","/v2/accounts:revokeToken",rh(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=jf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await PA(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Gr;return n&&(Q(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(r,e){Q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class gt{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new vA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Du(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await qi(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return TA(this,e)}reload(){return AA(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Aa(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await qi(this,EA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:R,providerData:C,stsTokenManager:O}=t;Q(m&&O,e,"internal-error");const M=Gr.fromJSON(this.name,O);Q(typeof m=="string",e,"internal-error"),fn(n,e.name),fn(s,e.name),Q(typeof _=="boolean",e,"internal-error"),Q(typeof R=="boolean",e,"internal-error"),fn(i,e.name),fn(o,e.name),fn(c,e.name),fn(u,e.name),fn(h,e.name),fn(f,e.name);const H=new gt({uid:m,auth:e,email:s,emailVerified:_,displayName:n,isAnonymous:R,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:M,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&(H.providerData=C.map(J=>({...J}))),u&&(H._redirectEventId=u),H}static async _fromIdTokenResponse(e,t,n=!1){const s=new Gr;s.updateFromServerResponse(t);const i=new gt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?w_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Gr;c.updateFromIdToken(n);const u=new gt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Du(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new Map;function $t(r){Xt(r instanceof Function,"Expected a class definition");let e=zf.get(r);return e?(Xt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,zf.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}E_.type="NONE";const Gf=E_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(r,e,t){return`firebase:${r}:${e}:${t}`}class fr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await va(this.auth,{idToken:e}).catch(()=>{});return t?gt._fromGetAccountInfoResponse(this.auth,t,e):null}return gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new fr($t(Gf),e,n);const s=Yo(n,e.config.apiKey,e.name);let i=null,o=null;const c=new Set;for(const _ of t){let R=null;try{R=await _._get(s)}catch{c.add(_);continue}try{if(R){let C;if(typeof R=="string"){const O=await va(e,{idToken:R}).catch(()=>{});if(!O)break;C=await gt._fromGetAccountInfoResponse(e,O,R)}else C=gt._fromJSON(e,R);i=C,o=_;break}}catch{}}const u=(await Promise.all(t.map(async _=>{try{if(await _._isAvailable())return _;_._lastProbeTimedOut&&c.add(_)}catch{return}}))).filter(_=>_);let h=u[0]||$t(Gf),f=null;o&&i&&(o!==h&&(f=i),h=o);const m=u.filter(_=>_._shouldAllowMigration);return!h._shouldAllowMigration||!m.length?new fr(h,e,n):(h=m[0],f&&await h._set(s,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==h&&!c.has(_))try{await _._remove(s)}catch{}})),new fr(h,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R_(e))return"Blackberry";if(V_(e))return"Webos";if(v_(e))return"Safari";if((e.includes("chrome/")||A_(e))&&!e.includes("edge/"))return"Chrome";if(P_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function T_(r=Pe()){return/firefox\//i.test(r)}function v_(r=Pe()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A_(r=Pe()){return/crios\//i.test(r)}function b_(r=Pe()){return/iemobile/i.test(r)}function P_(r=Pe()){return/android/i.test(r)}function R_(r=Pe()){return/blackberry/i.test(r)}function V_(r=Pe()){return/webos/i.test(r)}function ih(r=Pe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function VA(r=Pe()){return ih(r)&&!!window.navigator?.standalone}function SA(){return Uy()&&document.documentMode===10}function S_(r=Pe()){return ih(r)||P_(r)||V_(r)||R_(r)||/windows phone/i.test(r)||b_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(r,e=[]){let t;switch(r){case"Browser":t=Kf(Pe());break;case"Worker":t=`${Kf(Pe())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ys}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(r,e={}){return Ss(r,"GET","/v2/passwordPolicy",rh(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=6;class DA{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??NA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wf(this),this.idTokenSubscription=new Wf(this),this.beforeStateQueue=new xA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await fr.create(this,e)}catch(n){Ho(`Failed to initialize persistence: ${n}`),this.persistenceManager=await fr.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(n){Ho(`Failed to initialize current user: ${n}`)}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await va(this,{idToken:e}),n=await gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(mt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(n=c.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(t){if(I_(t))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(dr(this));const t=e?De(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CA(this),t=new DA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await RA(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await fr.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}).catch(u=>{if(!o)if(typeof t!="function"&&t.error)t.error(u);else if(n)n(u);else throw u}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=t?.message||String(t),s=oc(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ho(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ac(r){return De(r)}class Wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=jy(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OA(r){oh=r}function LA(r){return oh.loadJS(r)}function MA(){return oh.gapiScript}function UA(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(r,e){const t=Lu(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(mr(i,e??{}))return s;Ot(s,"already-initialized")}return t.initialize({options:e})}function BA(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map($t);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function qA(r,e,t){const n=ac(r);Q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=C_(e),{host:o,port:c}=$A(e),u=c===null?"":`:${c}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){Q(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),Q(mr(h,n.config.emulator)&&mr(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,zi(o)?_m(`${i}//${o}${u}`):jA()}function C_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function $A(r){const e=C_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Hf(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Hf(o)}}}function Hf(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function jA(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(r,e){return IA(r,"POST","/v1/accounts:signInWithIdp",rh(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="http://localhost";class Tr extends N_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new Tr(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Kr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kr(e,t)}buildRequest(){const e={requestUri:zA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ji(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends ah{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends oo{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gn.credential(t,n)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends oo{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends oo{constructor(){super("twitter.com")}static credential(e,t){return Tr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return yn.credential(t,n)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await gt._fromIdTokenResponse(e,n,s),o=Qf(n);return new _s({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Qf(n);return new _s({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Qf(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Zt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ba(e,t,n,s)}}function D_(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(r,i,e,n):i})}async function GA(r,e,t=!1){const n=await qi(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return _s._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(r,e,t=!1){const{auth:n}=r;if(mt(n.app))return Promise.reject(dr(n));const s="reauthenticate";try{const i=await qi(r,D_(n,s,e,r),t);Q(i.idToken,n,"internal-error");const o=sh(i.idToken);Q(o,n,"internal-error");const{sub:c}=o;return Q(r.uid===c,n,"user-mismatch"),_s._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Ot(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(r,e,t=!1){if(mt(r.app))return Promise.reject(dr(r));const n="signIn",s=await D_(r,n,e),i=await _s._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function HA(r,e,t,n){return De(r).onIdTokenChanged(e,t,n)}function QA(r,e,t){return De(r).beforeAuthStateChanged(e,t)}function bP(r,e,t,n){return De(r).onAuthStateChanged(e,t,n)}function PP(r){return De(r).signOut()}const Pa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pa,"1"),this.storage.removeItem(Pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=1e3,JA=10;class O_ extends k_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);SA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JA):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},YA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}O_.type="LOCAL";const XA=O_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_ extends k_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}L_.type="SESSION";const M_=L_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new cc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),u=await ZA(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const h=ch("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function tb(r){Nt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function nb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rb(){return navigator?.serviceWorker?.controller||null}function sb(){return U_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="firebaseLocalStorageDb",ib=1,Ra="firebaseLocalStorage",B_="fbase_key",ob=800,ab=3,Yf=800,uc=2500,_i="DB_TIMEOUT";class ao{constructor(e){this.request=e}toPromise(e=uc){return new Promise((t,n)=>{let s=!1;const i=setTimeout(()=>{if(!s){s=!0;try{this.request.transaction?.abort()}catch{}n(new Error(_i))}},e);this.request.addEventListener("success",()=>{s||(s=!0,clearTimeout(i),t(this.request.result))}),this.request.addEventListener("error",()=>{s||(s=!0,clearTimeout(i),n(this.request.error))})})}}function lc(r,e){return r.transaction([Ra],e?"readwrite":"readonly").objectStore(Ra)}function cb(){const r=indexedDB.deleteDatabase(F_);return new ao(r).toPromise()}function q_(){const r=indexedDB.open(F_,ib);return new Promise((e,t)=>{let n=!1;const s=setTimeout(()=>{n||(n=!0,t(new Error(_i)))},uc);r.addEventListener("error",()=>{n||(n=!0,clearTimeout(s),t(r.error))}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Ra,{keyPath:B_})}catch(o){n||(n=!0,clearTimeout(s),t(o))}}),r.addEventListener("success",async()=>{const i=r.result;if(n){i.close();return}if(clearTimeout(s),i.objectStoreNames.contains(Ra))n=!0,e(i);else{i.close();try{await cb();const o=await q_();n=!0,e(o)}catch(o){n||(n=!0,t(o))}}})})}async function Jf(r,e,t,n=uc){const s=lc(r,!0).put({[B_]:e,value:t});return new ao(s).toPromise(n)}async function ub(r,e){const t=lc(r,!1).get(e),n=await new ao(t).toPromise();return n===void 0?null:n.value}function Xf(r,e,t=uc){const n=lc(r,!0).delete(e);return new ao(n).toPromise(t)}class $_{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this._lastProbeTimedOut=!1,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.dbPromise)return this.dbPromise;const e=q_();return this.dbPromise=e,e.catch(()=>{this.dbPromise===e&&(this.dbPromise=null)}),e}async _withRetries(e){let t=0;for(;;){let n,s=null;try{const i=this._openDb();return s=this.dbPromise,n=await i,await e(n)}catch(i){if(n)n.close(),s&&this.dbPromise===s&&(this.dbPromise=null);else if(this.dbPromise&&this.dbPromise===s){const c=this.dbPromise;this.dbPromise=null;try{(await c).close()}catch{}}if(i instanceof Error&&i.message===_i||t++>ab)throw i}}}async initializeServiceWorkerMessaging(){return U_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(sb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await nb(),!this.activeServiceWorker)return;this.sender=new eb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){this._lastProbeTimedOut=!1;try{return indexedDB?(await this._withRetries(async e=>{await Jf(e,Pa,"1",Yf),await Xf(e,Pa,Yf)}),!0):!1}catch(e){this._lastProbeTimedOut=e instanceof Error&&e.message===_i}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jf(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){try{const t=await this._withRetries(n=>ub(n,e));return this.localCache[e]=t,t}catch(t){if(t instanceof Error&&t.message===_i&&this.localCache[e]!=null)return this.localCache[e];throw t}}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=lc(s,!1).getAll();return new ao(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||Ho(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ob)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,e in this.localCache||this._get(e).catch(()=>{})),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}$_.type="LOCAL";const lb=$_;new io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(r,e){return e?$t(e):(Q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends N_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hb(r){return WA(r.auth,new uh(r),r.bypassAuthState)}function db(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),KA(t,new uh(r),r.bypassAuthState)}async function fb(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),GA(t,new uh(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise||(await this.onExecution(),!this.pendingPromise))return;this.eventManager.registerConsumer(this)}catch(n){this.pendingPromise&&this.reject(n)}})}async onAuthEvent(e){if(!this.pendingPromise)return;const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hb;case"linkViaPopup":case"linkViaRedirect":return fb;case"reauthViaPopup":case"reauthViaRedirect":return db;default:Ot(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=new io(2e3,1e4);async function RP(r,e,t){if(mt(r.app))return Promise.reject(_t(r,"operation-not-supported-in-this-environment"));const n=ac(r);dA(r,e,ah);const s=j_(n,t);return new sr(n,"signInViaPopup",e,s).executeNotNull()}class sr extends z_{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mb.get())};e()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="pendingRedirect",Jo=new Map;class gb extends z_{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const n=await _b(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _b(r,e){const t=wb(e),n=Ib(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function yb(r,e){Jo.set(r._key(),e)}function Ib(r){return $t(r._redirectPersistence)}function wb(r){return Yo(pb,r.config.apiKey,r.name)}async function Eb(r,e,t=!1){if(mt(r.app))return Promise.reject(dr(r));const n=ac(r),s=j_(n,e),o=await new gb(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=600*1e3;class vb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ab(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!G_(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(_t(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zf(e))}saveEventToCache(e){this.cachedEventUids.add(Zf(e)),this.lastProcessedEventTime=Date.now()}}function Zf(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function G_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function Ab(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(r,e={}){return Ss(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rb=/^https?/;async function Vb(r){if(r.config.emulator)return;const{authorizedDomains:e}=await bb(r);for(const t of e)try{if(Sb(t))return}catch{}Ot(r,"unauthorized-domain")}function Sb(r){const e=Nu(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Rb.test(t))return!1;if(Pb.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new io(3e4,6e4);function em(){const r=Nt().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Cb(r){return new Promise((e,t)=>{function n(){em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{em(),t(_t(r,"network-request-failed"))},timeout:xb.get()})}if(Nt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Nt().gapi?.load)n();else{const s=UA("iframefcb");return Nt()[s]=()=>{gapi.load?n():t(_t(r,"network-request-failed"))},LA(`${MA()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function Nb(r){return Xo=Xo||Cb(r),Xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new io(5e3,15e3),kb="__/auth/iframe",Ob="emulator/auth/iframe",Lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ub(r){const e=r.config;Q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?nh(e,Ob):`https://${r.config.authDomain}/${kb}`,n={apiKey:e.apiKey,appName:r.name,v:ys},s=Mb.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ji(n).slice(1)}`}async function Fb(r){const e=await Nb(r),t=Nt().gapi;return Q(t,r,"internal-error"),e.open({where:document.body,url:Ub(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lb,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=_t(r,"network-request-failed"),c=Nt().setTimeout(()=>{i(o)},Db.get());function u(){Nt().clearTimeout(c),s(n)}n.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qb=500,$b=600,jb="_blank",zb="http://localhost";class tm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gb(r,e,t,n=qb,s=$b){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u={...Bb,width:n.toString(),height:s.toString(),top:i,left:o},h=Pe().toLowerCase();t&&(c=A_(h)?jb:t),T_(h)&&(e=e||zb,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[R,C])=>`${_}${R}=${C},`,"");if(VA(h)&&c!=="_self")return Kb(e||"",c),new tm(null);const m=window.open(e||"",c,f);Q(m,r,"popup-blocked");try{m.focus()}catch{}return new tm(m)}function Kb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="__/auth/handler",Hb="emulator/auth/handler",Qb=encodeURIComponent("fac");async function nm(r,e,t,n,s,i){Q(r.config.authDomain,r,"auth-domain-config-required"),Q(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ys,eventId:s};if(e instanceof ah){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",$y(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof oo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),h=u?`#${Qb}=${encodeURIComponent(u)}`:"";return`${Yb(r)}?${ji(c).slice(1)}${h}`}function Yb({config:r}){return r.emulator?nh(r,Hb):`https://${r.authDomain}/${Wb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="webStorageSupport";class Jb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M_,this._completeRedirectFn=Eb,this._overrideRedirectResult=yb}async _openPopup(e,t,n,s){Xt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await nm(e,t,n,Nu(),s);return Gb(e,i,ch())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await nm(e,t,n,Nu(),s);return tb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Xt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Fb(e),n=new vb(e);return t.register("authEvent",s=>(Q(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qc,{type:Qc},s=>{const i=s?.[0]?.[Qc];i!==void 0&&t(!!i),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return S_()||v_()||ih()}}const Xb=Jb;var rm="@firebase/auth",sm="1.13.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tP(r){Wr(new pr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x_(r)},h=new kA(n,s,i,u);return BA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Wr(new pr("auth-internal",e=>{const t=ac(e.getProvider("auth").getImmediate());return(n=>new Zb(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(rm,sm,eP(r)),In(rm,sm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=300,rP=dm("authIdTokenMaxAge")||nP;let im=null;const sP=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>rP)return;const s=t?.token;im!==s&&(im=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function VP(r=OI()){const e=Lu(r,"auth");if(e.isInitialized())return e.getImmediate();const t=FA(r,{popupRedirectResolver:Xb,persistence:[lb,XA,M_]}),n=dm("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=sP(i.toString());QA(t,o,()=>o(t.currentUser)),HA(t,c=>o(c))}}const s=Ny("auth");return s&&qA(t,`http://${s}`),t}function iP(){return document.getElementsByTagName("head")?.[0]??document}OA({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=_t("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",iP().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tP("Browser");export{gn as G,mP as a,IP as b,uP as c,lP as d,EP as e,vP as f,VP as g,wP as h,kI as i,hP as j,bP as k,_P as l,PP as m,RP as n,gP as o,yP as p,pP as q,TP as s,AP as w};
