import{g as q,r as A}from"./index-2506bfc3.js";import{p as K,u as N}from"./VideoPlayer-8d5ed388.js";function $(p,l){for(var y=0;y<l.length;y++){const c=l[y];if(typeof c!="string"&&!Array.isArray(c)){for(const s in c)if(s!=="default"&&!(s in p)){const d=Object.getOwnPropertyDescriptor(c,s);d&&Object.defineProperty(p,s,d.get?d:{enumerable:!0,get:()=>c[s]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var _={};(function(p){function l(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(o){return typeof o}:l=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},l(e)}Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var y=k(A),c=N,s=K;function d(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return d=function(){return e},e}function k(e){if(e&&e.__esModule)return e;if(e===null||l(e)!=="object"&&typeof e!="function")return{default:e};var n=d();if(n&&n.has(e))return n.get(e);var o={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=t?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(o,a,r):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}function b(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,t)}return o}function S(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?b(Object(o),!0).forEach(function(t){i(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function R(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function w(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function E(e,n,o){return n&&w(e.prototype,n),o&&w(e,o),e}function M(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&O(e,n)}function O(e,n){return O=Object.setPrototypeOf||function(t,a){return t.__proto__=a,t},O(e,n)}function j(e){var n=T();return function(){var t=v(e),a;if(n){var r=v(this).constructor;a=Reflect.construct(t,arguments,r)}else a=t.apply(this,arguments);return L(this,a)}}function L(e,n){return n&&(l(n)==="object"||typeof n=="function")?n:f(e)}function f(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},v(e)}function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var V="https://player.vimeo.com/api/player.js",C="Vimeo",m=function(e){M(o,e);var n=j(o);function o(){var t;R(this,o);for(var a=arguments.length,r=new Array(a),h=0;h<a;h++)r[h]=arguments[h];return t=n.call.apply(n,[this].concat(r)),i(f(t),"callPlayer",c.callPlayer),i(f(t),"duration",null),i(f(t),"currentTime",null),i(f(t),"secondsLoaded",null),i(f(t),"mute",function(){t.setMuted(!0)}),i(f(t),"unmute",function(){t.setMuted(!1)}),i(f(t),"ref",function(g){t.container=g}),t}return E(o,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(a){var r=this;this.duration=null,(0,c.getSDK)(V,C).then(function(h){if(r.container){var g=r.props.config,W=g.playerOptions,D=g.title;r.player=new h.Player(r.container,S({url:a,autoplay:r.props.playing,muted:r.props.muted,loop:r.props.loop,playsinline:r.props.playsinline,controls:r.props.controls},W)),r.player.ready().then(function(){var u=r.container.querySelector("iframe");u.style.width="100%",u.style.height="100%",D&&(u.title=D)}).catch(r.props.onError),r.player.on("loaded",function(){r.props.onReady(),r.refreshDuration()}),r.player.on("play",function(){r.props.onPlay(),r.refreshDuration()}),r.player.on("pause",r.props.onPause),r.player.on("seeked",function(u){return r.props.onSeek(u.seconds)}),r.player.on("ended",r.props.onEnded),r.player.on("error",r.props.onError),r.player.on("timeupdate",function(u){var P=u.seconds;r.currentTime=P}),r.player.on("progress",function(u){var P=u.seconds;r.secondsLoaded=P}),r.player.on("bufferstart",r.props.onBuffer),r.player.on("bufferend",r.props.onBufferEnd),r.player.on("playbackratechange",function(u){return r.props.onPlaybackRateChange(u.playbackRate)})}},this.props.onError)}},{key:"refreshDuration",value:function(){var a=this;this.player.getDuration().then(function(r){a.duration=r})}},{key:"play",value:function(){var a=this.callPlayer("play");a&&a.catch(this.props.onError)}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(a){this.callPlayer("setCurrentTime",a)}},{key:"setVolume",value:function(a){this.callPlayer("setVolume",a)}},{key:"setMuted",value:function(a){this.callPlayer("setMuted",a)}},{key:"setLoop",value:function(a){this.callPlayer("setLoop",a)}},{key:"setPlaybackRate",value:function(a){this.callPlayer("setPlaybackRate",a)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var a=this.props.display,r={width:"100%",height:"100%",overflow:"hidden",display:a};return y.default.createElement("div",{key:this.props.url,ref:this.ref,style:r})}}]),o}(y.Component);p.default=m,i(m,"displayName","Vimeo"),i(m,"canPlay",s.canPlay.vimeo),i(m,"forceLoad",!0)})(_);const x=q(_),I=$({__proto__:null,default:x},[_]);export{I as V};
//# sourceMappingURL=Vimeo-a6dae080.js.map
