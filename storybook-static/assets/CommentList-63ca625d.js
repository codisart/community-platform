import{j as R,a as n}from"./jsx-runtime-913be41c.js";import{r as _}from"./index-2506bfc3.js";import{B as L}from"./Button-9ac859c2.js";import{B as v}from"./ButtonShowReplies-06ccecfb.js";import{C as S}from"./CommentItem-0a9192d5.js";import{C as w}from"./CreateReply-fc26531f.js";import{I as B}from"./Icon-5a6c8159.js";import{B as C,F as b}from"./theme-ui-components.esm-784287e5.js";const E=5,x=r=>{const[e,q]=_.useState(!1),{comment:l,handleDelete:s,handleEditRequest:i,handleEdit:a,supportReplies:d,isLoggedIn:m,isReplies:u,maxLength:p,onSubmitReply:c}=r,{_id:h,creatorName:g,replies:o}=l,I=()=>n(C,{sx:{paddingTop:4},children:n(B,{glyph:"arrow-curved-bottom-right"})}),f=()=>n(v,{creatorName:g,isShowReplies:e,replies:o||[],setIsShowReplies:()=>q(!e)}),t=()=>{if(c)return n(w,{commentId:h,isLoggedIn:m,maxLength:p,onSubmit:c})};return R(C,{sx:{backgroundColor:"white",borderRadius:1,padding:3},children:[n(S,{comment:l,handleEditRequest:i,handleDelete:s,handleEdit:a,isReply:!!u}),d&&!e&&f(),d&&e?R(b,{sx:{alignItems:"stretch",flexDirection:"row"},children:[o&&I(),R(b,{sx:{alignItems:"stretch",flexDirection:"column",flex:1},children:[n(V,{comments:o||[],handleDelete:s,handleEdit:a,handleEditRequest:i,isLoggedIn:m,isReplies:!0,maxLength:p,supportReplies:!1}),t(),f()]})]}):null]})},V=r=>{const{comments:e,handleDelete:q,handleEdit:l,handleEditRequest:s,highlightedCommentId:i,isLoggedIn:a,isReplies:d,maxLength:m,onMoreComments:u,onSubmitReply:p,supportReplies:c=!1}=r,[h,g]=_.useState(1),o=h*E,I=t=>{setTimeout(()=>{var y;(y=document.getElementById(`comment:${t}`))==null||y.scrollIntoView({behavior:"smooth",block:"start"})},0)},f=()=>{u&&u(),g(h+1)};return _.useEffect(()=>{if(!i)return;const t=e.findIndex(y=>i.includes(y._id));t>=0&&(g(Math.floor(t/E)+1),I(i))},[i,e]),R(C,{mb:4,sx:{width:"100%",display:"block"},children:[e&&e.slice(0,o).map(t=>n(C,{"data-testid":"CommentList: item",sx:{marginBottom:4,border:`${i===t._id?"2px dashed black":"none"}`,borderRadius:1},children:n(x,{comment:t,handleEditRequest:s,handleDelete:q,handleEdit:l,isLoggedIn:a,isReplies:d,maxLength:m,onSubmitReply:p,supportReplies:c})},t._id)),e&&e.length>o&&n(b,{children:n(L,{sx:{margin:"0 auto"},variant:"outline",onClick:f,children:"show more comments"})})]})};try{x.displayName="CommentContainer",x.__docgenInfo={description:"",displayName:"CommentContainer",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"IComment"}},handleCommentReply:{defaultValue:null,description:"",name:"handleCommentReply",required:!1,type:{name:"((commentId: string | null) => void)"}},supportReplies:{defaultValue:null,description:"",name:"supportReplies",required:!0,type:{name:"boolean"}},handleDelete:{defaultValue:null,description:"",name:"handleDelete",required:!0,type:{name:"(_id: string) => Promise<void>"}},handleEdit:{defaultValue:null,description:"",name:"handleEdit",required:!0,type:{name:"(_id: string, comment: string) => Promise<void>"}},handleEditRequest:{defaultValue:null,description:"",name:"handleEditRequest",required:!0,type:{name:"() => Promise<void>"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},isReplies:{defaultValue:null,description:"",name:"isReplies",required:!0,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},onSubmitReply:{defaultValue:null,description:"",name:"onSubmitReply",required:!1,type:{name:"((_id: string, reply: string) => Promise<void>)"}}}}}catch{}try{V.displayName="CommentList",V.__docgenInfo={description:"",displayName:"CommentList",props:{supportReplies:{defaultValue:null,description:"",name:"supportReplies",required:!1,type:{name:"boolean"}},comments:{defaultValue:null,description:"",name:"comments",required:!0,type:{name:"IComment[]"}},highlightedCommentId:{defaultValue:null,description:"",name:"highlightedCommentId",required:!1,type:{name:"string"}},onMoreComments:{defaultValue:null,description:"",name:"onMoreComments",required:!1,type:{name:"(() => void)"}},setCommentBeingRepliedTo:{defaultValue:null,description:"",name:"setCommentBeingRepliedTo",required:!1,type:{name:"((commentId: string | null) => void)"}},handleDelete:{defaultValue:null,description:"",name:"handleDelete",required:!0,type:{name:"(_id: string) => Promise<void>"}},handleEdit:{defaultValue:null,description:"",name:"handleEdit",required:!0,type:{name:"(_id: string, comment: string) => Promise<void>"}},handleEditRequest:{defaultValue:null,description:"",name:"handleEditRequest",required:!0,type:{name:"() => Promise<void>"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},isReplies:{defaultValue:null,description:"",name:"isReplies",required:!0,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},onSubmitReply:{defaultValue:null,description:"",name:"onSubmitReply",required:!1,type:{name:"((_id: string, reply: string) => Promise<void>)"}}}}}catch{}export{V as C};
//# sourceMappingURL=CommentList-63ca625d.js.map
