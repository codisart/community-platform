import{j as i,a as o}from"./jsx-runtime-913be41c.js";import{I as c}from"./Icon-5a6c8159.js";import{a as v,F as d,b as s}from"./theme-ui-components.esm-784287e5.js";const t={small:{px:2,py:1,pl:7,fontSize:1,height:"2rem"},default:{px:3,pl:9},large:{px:4,py:3,pl:10,fontSize:4,height:"3.5rem"}};function r(e,l){if(!t[`${e}`]&&!l)return{};if(!t[`${e}`]&&l)return{px:3,pl:9};const a={...t[`${e}`]};return l||delete a.pl,a}function f(e){return e==="large"?1.25:1}function p(e,l){const a={...e};return l.forEach(n=>{a[n]&&delete a[n]}),a}const u=e=>{var a;const[l]=Object.keys(e).filter(n=>Object.prototype.hasOwnProperty.call(t,n));return i(v,{...p(e,["small","large","showIconOnly","iconColor"]),sx:{...e.sx,...r(l,!!e.icon),...e.showIconOnly?{pr:0}:{}},children:[e.icon&&o(d,{"aria-hidden":!0,sx:{position:"absolute",top:0,left:0,height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",px:((a=r(l,!!e.icon))==null?void 0:a.px)||0,boxSizing:"border-box",fontSize:0,maxWidth:"100%",lineHeight:0,transform:`translateY(-1px) scale(${f(l)})`,pointerEvents:"none"},children:o(c,{glyph:e.icon,color:e.iconColor})}),o(s,{sx:{...e.showIconOnly?{clipPath:"inset(100%)",clip:"rect(1px, 1px, 1px, 1px)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"}:{}},children:e.children})]})};u.defaultProps={type:"button"};try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"time"'},{value:'"filter"'},{value:'"image"'},{value:'"view"'},{value:'"download"'},{value:'"loading"'},{value:'"step"'},{value:'"account-circle"'},{value:'"add"'},{value:'"arrow-curved-bottom-right"'},{value:'"arrow-back"'},{value:'"arrow-down"'},{value:'"arrow-forward"'},{value:'"arrow-full-down"'},{value:'"arrow-full-up"'},{value:'"bazar"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"comment"'},{value:'"discord"'},{value:'"delete"'},{value:'"difficulty"'},{value:'"download-cloud"'},{value:'"edit"'},{value:'"email"'},{value:'"email-outline"'},{value:'"employee"'},{value:'"external-link"'},{value:'"external-url"'},{value:'"facebook"'},{value:'"flag-unknown"'},{value:'"hide"'},{value:'"instagram"'},{value:'"location-on"'},{value:'"lock"'},{value:'"machine"'},{value:'"mail-outline"'},{value:'"more-vert"'},{value:'"notifications"'},{value:'"pdf"'},{value:'"plastic"'},{value:'"revenue"'},{value:'"show"'},{value:'"slack"'},{value:'"social-media"'},{value:'"star"'},{value:'"star-active"'},{value:'"supporter"'},{value:'"thunderbolt"'},{value:'"turned-in"'},{value:'"update"'},{value:'"upload"'},{value:'"useful"'},{value:'"verified"'},{value:'"volunteer"'},{value:'"website"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}},showIconOnly:{defaultValue:null,description:"",name:"showIconOnly",required:!1,type:{name:"boolean"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}}}catch{}export{u as B};
//# sourceMappingURL=Button-9ac859c2.js.map
