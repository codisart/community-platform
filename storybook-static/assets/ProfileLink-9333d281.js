import{j as i,a as t}from"./jsx-runtime-913be41c.js";import{E as n}from"./ExternalLink-299075d0.js";import{I as c}from"./Icon-5a6c8159.js";import{F as v,B as s}from"./theme-ui-components.esm-784287e5.js";const r=e=>e.charAt(0).toUpperCase()+e.slice(1),d=(e,a)=>{switch(a){case"email":return`mailto:${e}`;default:return e.indexOf("http")===0?e:`http://${e}`}},p=[{pattern:new RegExp(/twitter\.com/),label:"Twitter"},{pattern:new RegExp(/facebook\.com/),label:"Facebook"},{pattern:new RegExp(/youtube\.com/),label:"Youtube"},{pattern:new RegExp(/instagram\.com/),label:"Instagram"}],m=(e,a)=>{const l=p.find(o=>o.pattern.test(a));return l?l.label:e&&r(e)},u=e=>{const{url:a,label:l}=e;return i(v,{sx:{justifyContent:"flex-start",alignItems:"center",flexDirection:"row",mt:0,...e.sx},children:[t(s,{children:t(c,{glyph:e.icon,size:22})}),t(n,{ml:2,color:"black",href:d(a,l),children:m(l,a)})]})};try{r.displayName="capitalizeFirstLetter",r.__docgenInfo={description:"",displayName:"capitalizeFirstLetter",props:{}}}catch{}try{u.displayName="ProfileLink",u.__docgenInfo={description:"",displayName:"ProfileLink",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"menu"'},{value:'"time"'},{value:'"filter"'},{value:'"image"'},{value:'"view"'},{value:'"download"'},{value:'"loading"'},{value:'"step"'},{value:'"account-circle"'},{value:'"add"'},{value:'"arrow-curved-bottom-right"'},{value:'"arrow-back"'},{value:'"arrow-down"'},{value:'"arrow-forward"'},{value:'"arrow-full-down"'},{value:'"arrow-full-up"'},{value:'"bazar"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"comment"'},{value:'"discord"'},{value:'"delete"'},{value:'"difficulty"'},{value:'"download-cloud"'},{value:'"edit"'},{value:'"email"'},{value:'"email-outline"'},{value:'"employee"'},{value:'"external-link"'},{value:'"external-url"'},{value:'"facebook"'},{value:'"flag-unknown"'},{value:'"hide"'},{value:'"instagram"'},{value:'"location-on"'},{value:'"lock"'},{value:'"machine"'},{value:'"mail-outline"'},{value:'"more-vert"'},{value:'"notifications"'},{value:'"pdf"'},{value:'"plastic"'},{value:'"revenue"'},{value:'"show"'},{value:'"slack"'},{value:'"social-media"'},{value:'"star"'},{value:'"star-active"'},{value:'"supporter"'},{value:'"thunderbolt"'},{value:'"turned-in"'},{value:'"update"'},{value:'"upload"'},{value:'"useful"'},{value:'"verified"'},{value:'"volunteer"'},{value:'"website"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}}}catch{}export{u as P};
//# sourceMappingURL=ProfileLink-9333d281.js.map
