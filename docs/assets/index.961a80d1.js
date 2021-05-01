import{m as t,o as e,P as n,l as a,r as l,p as o,c as i,a as s,b as r,s as c,z as d,i as h,d as u,t as p,e as m,h as g,f,g as v,u as x,w as y,v as b,j as w,k as _,F as $,n as M,q as k,x as L,y as B,A as C,B as E,C as S,D,E as N,G as z,H as A,I as V,J as j}from"./vendor.a7bd6769.js";var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",get svg(){return Ct},get g(){return Et},get asstSvg(){return St},get foreign(){return Dt}});!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(n){const a=new URL(t,location),l=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((n,o)=>{const i=new URL(t,a);if(self[e].moduleMap[i])return n(self[e].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${e}.moduleMap['${i}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){o(new Error(`Failed to import: ${t}`)),l(r)},onload(){n(self[e].moduleMap[i]),l(r)}});document.head.appendChild(r)})),self[e].moduleMap={}}}("/vue3-mindmap/assets/");var G=[{name:"如何学习D3",children:[{name:"预备知识",children:[{name:"HTML & CSS"},{name:"JavaScript"},{name:"DOM"},{name:"SVG"},{name:"test\ntest"}]},{name:"安装",collapse:!0,children:[{name:"折叠节点"}]},{name:"入门",children:[{name:"选择集"},{name:"test"},{name:"绑定数据"},{name:"添加删除元素"},{name:"简单图形",children:[{name:"柱形图"},{name:"折线图"},{name:"散点图"}]},{name:"比例尺"},{name:"生成器"},{name:"过渡"}],left:!0},{name:"进阶",left:!0},{name:"一级节点",children:[{name:"子节点1"},{name:"子节点2"},{name:"子节点3"}]}]}];const R=t();var U={container:"Mindmap_container_7uix5","svg-wrapper":"Mindmap_svg-wrapper_7uix5",svg:"Mindmap_svg_7uix5",trigger:"Mindmap_trigger_7uix5",dragging:"Mindmap_dragging_7uix5","add-btn":"Mindmap_add-btn_7uix5",hidden:"Mindmap_hidden_7uix5","expand-btn":"Mindmap_expand-btn_7uix5",text:"Mindmap_text_7uix5",selected:"Mindmap_selected_7uix5",content:"Mindmap_content_7uix5",root:"Mindmap_root_7uix5",edited:"Mindmap_edited_7uix5",outline:"Mindmap_outline_7uix5",collapse:"Mindmap_collapse_7uix5","button-list":"Mindmap_button-list_7uix5","right-bottom":"Mindmap_right-bottom_7uix5","right-top":"Mindmap_right-top_7uix5",disabled:"Mindmap_disabled_7uix5",gps:"Mindmap_gps_7uix5",fit:"Mindmap_fit_7uix5",download:"Mindmap_download_7uix5",prev:"Mindmap_prev_7uix5",next:"Mindmap_next_7uix5",close:"Mindmap_close_7uix5"};class O{constructor(t,e,n,a){this.w=t,this.h=e,this.y=n,this.c=a,this.cs=a.length,this.x=0,this.prelim=0,this.mod=0,this.shift=0,this.change=0,this.tl=null,this.tr=null,this.el=null,this.er=null,this.msel=0,this.mser=0}}function Y(t){0===t.cs?(t.el=t,t.er=t,t.msel=t.mser=0):(t.el=t.c[0].el,t.msel=t.c[0].msel,t.er=t.c[t.cs-1].er,t.mser=t.c[t.cs-1].mser)}function H(t){return t.y+t.h}class K{constructor(t,e,n){this.lowY=t,this.index=e,this.next=n}}function W(t,e,n){for(;null!==n&&t>=n.lowY;)n=n.next;return new K(t,e,n)}function I(t,e,n,a){t.c[e].mod+=a,t.c[e].msel+=a,t.c[e].mser+=a,function(t,e,n,a){if(n!==e-1){const l=e-n;t.c[n+1].shift+=a/l,t.c[e].shift-=a/l,t.c[e].change-=a-a/l}}(t,e,n,a)}function T(t){return 0===t.cs?t.tl:t.c[0]}function q(t){return 0===t.cs?t.tr:t.c[t.cs-1]}function X(t,e,n){let a=t.c[e-1],l=a.mod,o=t.c[e],i=o.mod;for(;null!==a&&null!==o;){H(a)>n.lowY&&(n=n.next);const s=l+a.prelim+a.w-(i+o.prelim);s>0&&(i+=s,I(t,e,n.index,s));const r=H(a),c=H(o);r<=c&&(a=q(a),null!==a&&(l+=a.mod)),r>=c&&(o=T(o),null!==o&&(i+=o.mod))}null===a&&null!==o?function(t,e,n,a){const l=t.c[0].el;l.tl=n;const o=a-n.mod-t.c[0].msel;l.mod+=o,l.prelim-=o,t.c[0].el=t.c[e].el,t.c[0].msel=t.c[e].msel}(t,e,o,i):null!==a&&null===o&&function(t,e,n,a){const l=t.c[e].er;l.tr=n;const o=a-n.mod-t.c[e].mser;l.mod+=o,l.prelim-=o,t.c[e].er=t.c[e-1].er,t.c[e].mser=t.c[e-1].mser}(t,e,a,l)}function F(t){if(0===t.cs)return void Y(t);F(t.c[0]);let e=W(H(t.c[0].el),0,null);for(let n=1;n<t.cs;n++){F(t.c[n]);const a=H(t.c[n].er);X(t,n,e),e=W(a,n,e)}!function(t){t.prelim=(t.c[0].prelim+t.c[0].mod+t.c[t.cs-1].mod+t.c[t.cs-1].prelim+t.c[t.cs-1].w)/2-t.w/2}(t),Y(t)}function J(t,e){e+=t.mod,t.x=t.prelim+e,function(t){let e=0,n=0;for(let a=0;a<t.cs;a++)e+=t.c[a].shift,n+=e+t.c[a].change,t.c[a].mod+=n}(t);for(let n=0;n<t.cs;n++)J(t.c[n],e)}function Z(t){F(t),J(t,0)}class Q{constructor(t,e){this.gap=t,this.bottomPadding=e}addBoundingBox(t,e){return{width:t+this.gap,height:e+this.bottomPadding}}removeBoundingBox(t,e){return{x:t+this.gap/2,y:e}}}class tt{constructor(t){this.bb=t}layout(t){const e=this.convert(t);Z(e);const{boundingBox:n,result:a}=this.assignLayout(e,t);return{result:a,boundingBox:n}}convert(t,e=0){const{width:n,height:a}=this.bb.addBoundingBox(t.width,t.height),l=[];if(t.children&&t.children.length)for(let o=0;o<t.children.length;o++)l[o]=this.convert(t.children[o],e+a);return new O(n,a,e,l)}assignCoordinates(t,e){const{x:n,y:a}=this.bb.removeBoundingBox(t.x,t.y);e.x=n,e.y=a;for(let l=0;l<t.c.length;l++)this.assignCoordinates(t.c[l],e.children[l])}getSize(t,e){const{x:n,y:a,width:l,height:o}=t;if(e||(e={left:n,right:n+l,top:a,bottom:a+o}),e.left=Math.min(e.left,n),e.right=Math.max(e.right,n+l),e.top=Math.min(e.top,a),e.bottom=Math.max(e.bottom,a+o),t.children)for(const i of t.children)this.getSize(i,e);return e}assignLayout(t,e,n){const{x:a,y:l}=this.bb.removeBoundingBox(t.x,t.y);e.x=a,e.y=l;const{width:o,height:i}=e;n||(n={left:a,right:a+o,top:l,bottom:l+i}),n.left=Math.min(n.left,a),n.right=Math.max(n.right,a+o),n.top=Math.min(n.top,l),n.bottom=Math.max(n.bottom,l+i);for(let s=0;s<t.c.length;s++)this.assignLayout(t.c[s],e.children[s],n);return{result:e,boundingBox:n}}}function et(t,e,n=!!t.left){const a=e(t.name),l={rawData:t,width:a.height,height:a.width,x:0,y:0,children:[],_children:[],left:n,collapse:!!t.collapse},{children:o,collapse:i}=t;if(o){const t=[];i?l._children=t:l.children=t,o.forEach((a=>{t.push(et(a,e,n||a.left))}))}return l}const nt=t=>[t.width,t.height]=[t.height,t.width],at=t=>{t.parent?(t.dx=t.x-t.parent.x,t.dy=t.y-t.parent.y):(t.dx=0,t.dy=0)},lt=(t,e)=>t.id=e,ot=t=>{t.parent&&t.parent.color&&(t.color=t.parent.color)},it=t=>{t.depth>1&&t.parent&&(t.left=t.parent.left)},st=(t,e,n="0")=>{var a;e.forEach((e=>{e(t,n)}));const{children:l}=t;if(l)for(let o=0;o<l.length;){const i=l[o];"del"===i.id?(l.splice(o,1),null==(a=t.rawData.children)||a.splice(o,1)):(st(i,e,`${n}-${o}`),o+=1)}},rt=(t,e)=>{const n=new Q(e,t);return new tt(n)};class ct{constructor(t,a,l,o,i=e(n)){this.colorNumber=0,this.gKey=0,this.rootWidth=0,this.diffY=0,this.colorScale=i,this.getSize=o;const s=et(t,o);this.layout=rt(a,l);const r=this.l(s);this.data=this.init(r)}getRootWidth(){return this.rootWidth}renew(...t){st(this.data,[nt,it]),this.data=this.l(this.data);const e=[nt,this.renewXY.bind(this),at];st(this.data,e.concat(t))}l(t){const{left:e,right:n}=(t=>{const e=Object.assign({},t);if(t.collapse);else{const{children:n}=t;e.children=[],t.children=[],n.forEach((n=>{n.left?(e.children.push(n),n.parent&&(n.parent=e)):t.children.push(n)}))}return{left:e,right:t}})(t);return this.layout.layout(e),this.layout.layout(n),this.diffY=n.x-e.x,this.rootWidth=e.height,((t,e)=>{t.collapse||e.children.forEach((e=>{t.children.push(e),e.parent&&(e.parent=t)}))})(n,e),n}init(t,e="0",n=null,a){this.renewXY(t);const{left:l,collapse:o,width:i,height:s,x:r,y:c,rawData:d}=t;let h="",u=r,p=c;n&&(u=n.x,p=n.y,h=a||this.colorScale(`${this.colorNumber+=1}`));const m={x:r,y:c,width:s,height:i,id:e,gKey:this.gKey+=1,depth:Math.floor(e.length/2),name:d.name,px:0,py:0,rawData:d,parent:n,color:h,left:l,collapse:o,dx:r-u,dy:c-p,children:[],_children:[]};return t.children&&!m.collapse&&t.children.forEach(((t,n)=>{m.children.push(this.init(t,`${e}-${n}`,m,h))})),t._children&&m.collapse&&t._children.forEach(((t,n)=>{m._children.push(this.init(t,`${e}-${n}`,m,h))})),m}renewXY(t){[t.x,t.y]=[t.y,t.x],t.left&&(t.x=-t.x+this.rootWidth,t.y+=this.diffY)}setBoundingBox(t,e){this.layout=rt(t,e),this.renew()}find(t){const e=t.split("-").map((t=>~~t));let n=this.data;for(let a=1;a<e.length;a++){const t=e[a],{children:l}=n;if(!(t<l.length))return null;n=l[t]}return n.id===t?n:null}rename(t,e){if(t.length>0){const n=this.find(t);if(n&&n.name!==e){n.name=e,n.rawData.name=e;const t=this.getSize(n.name);n.width=t.width,n.height=t.height,this.renew()}return n}return null}moveChild(t,e){var n,a;if(t===e)return null;const l=this.find(t),o=this.find(e),i=e.split("-").pop();if(i&&l&&o){const t=o.parent;null==(n=null==t?void 0:t.children)||n.splice(~~i,1),null==(a=null==t?void 0:t.rawData.children)||a.splice(~~i,1),o.parent=l,o.gKey=this.gKey+=1,o.depth=o.parent.depth+1,1===o.depth?o.color=this.colorScale(`${this.colorNumber+=1}`):o.left=o.parent.left,l.collapse?l._children.push(o):l.children.push(o),l.rawData.children?l.rawData.children.push(o.rawData):l.rawData.children=[o.rawData],this.renew(lt,ot)}return o}moveSibling(t,e,n=0){const a=t.split("-"),l=e.split("-");let o=a.pop(),i=l.pop();if(t===e||a.length!==l.length||!o||!i)return null;const s=this.find(t),r=this.find(e);if(r&&s&&s.parent){o=parseInt(o,10),i=parseInt(i,10),o<i&&(i-=1);const{children:t}=s.parent,{children:e}=s.parent.rawData;if(t&&e)return t.splice(o,1),t.splice(i+n,0,s),e.splice(o,1),e.splice(i+n,0,s.rawData),1===s.depth&&(s.left=r.left),this.renew(lt),s}return null}add(t,e){const n=this.find(t);if(n&&!n.collapse){n.children||(n.children=[]),n.rawData.children||(n.rawData.children=[]);const t=this.getSize(e),a={name:e},l=n.color?n.color:this.colorScale(`${this.colorNumber+=1}`),o={id:`${n.id}-${n.children.length}`,name:e,rawData:a,parent:n,left:n.left,collapse:!1,color:l,gKey:this.gKey+=1,width:t.width,height:t.height,depth:n.depth+1,x:0,y:0,dx:0,dy:0,px:0,py:0,children:[],_children:[]};return n.children.push(o),n.rawData.children.push(a),this.renew(),o}return null}expand(t){return this.eoc(t,!1,[ot,lt])}collapse(t){return this.eoc(t,!0)}eoc(t,e,n=[]){const a=this.find(t);return a&&(a.collapse=e,a.rawData.collapse=e,[a._children,a.children]=[a.children,a._children],this.renew(...n)),a}delete(t){const e=t.split("-");if(!(e.length>=2))throw new Error("暂不支持删除根节点");{const t=e.pop(),n=this.find(e.join("-"));t&&n&&n.children&&(n.children[~~t].id="del"),this.renew(lt)}}}let dt;R.on("mmdata",(t=>dt=t||dt));const ht=new class{constructor(t=20){this.length=t,this.snapshots=[],this.cursor=-1}get hasPrev(){return this.cursor>0}get hasNext(){return this.snapshots.length>this.cursor+1}snap(t){const e=a.cloneDeep(t);for(;this.cursor<this.snapshots.length-1;)this.snapshots.pop();this.snapshots.push(e),this.snapshots.length>this.length&&this.snapshots.shift(),this.cursor=this.snapshots.length-1}prev(){return this.hasPrev?(this.cursor-=1,a.cloneDeep(this.snapshots[this.cursor])):null}next(){return this.hasNext?(this.cursor+=1,a.cloneDeep(this.snapshots[this.cursor])):null}},ut=l(!1),pt=l(!1),mt=l(),gt=l(),ft=l(),vt=l(),xt=l(),yt=l();function bt(){const t=this.querySelector(`g.${U["add-btn"]}`);t&&(t.style.opacity="1")}function wt(){const t=this.querySelector(`g.${U["add-btn"]}`);t&&(t.style.opacity="0")}const _t=(t,e)=>{t.stopPropagation(),Be(e)};function $t(t,e){var n;const a=null==(n=this.parentNode)?void 0:n.parentNode;gt.value&&gt.value.classList.add(U.dragging);const{g:l}=P;if(!l)return;Ee(a,e,[t.x-e.x,t.y-e.y]);const i=o(t,ft.value);i[1]+=dt.data.y;const s=l.selectAll("g.node").filter((t=>{if(t!==e&&t!==e.parent&&!t.id.startsWith(e.id)){let e=Zt,n=t.width+Zt;t.left&&0!==t.depth&&([e,n]=[n,e]);const a={x0:t.x-e,x1:t.x+n,y0:t.y-Zt,y1:t.y+t.height+Zt};return i[0]>a.x0&&i[1]>a.y0&&i[0]<a.x1&&i[1]<a.y1}return!1})),r=Array.from(document.getElementsByClassName(U.outline)),c=s.node();r.forEach((t=>{t!==c&&t.classList.remove(U.outline)})),null==c||c.classList.add(U.outline)}function Mt(t,e){var n,a;const l=null==(n=this.parentNode)?void 0:n.parentNode,{foreign:o}=P;if(Xt&&o&&yt.value){l.classList.add(U.edited),R.emit("edit-flag",!1),o.attr("x",e.x-2-(e.left?e.width:0)).attr("y",e.y-dt.data.y-2).attr("data-id",e.id).attr("data-name",e.name).style("display","");const t=yt.value;t.textContent=e.name,t.focus(),null==(a=getSelection())||a.selectAllChildren(t)}}const kt=t=>{if(t.preventDefault(),!mt.value)return;const e=ke(mt.value,t);zt.value=e;const n=t.composedPath().find((t=>{var e;return null==(e=t.classList)?void 0:e.contains("node")}));if(n){const{classList:t}=n,e=t.contains(U.collapse);t.contains(U.selected)||Be(n),Pt.value.disabled=e,jt.value.disabled=t.contains(U.root),Vt.value.disabled=!e,At.value.disabled=e||t.contains("leaf")}Nt.value=!n,R.emit("showContextmenu",!0)},Lt=t=>{const{svg:e}=P;e&&(t?(ie(e),e.on("dblclick.zoom",null)):e.on(".zoom",null))},Bt=t=>{mt.value&&(t?mt.value.addEventListener("contextmenu",kt):mt.value.removeEventListener("contextmenu",kt))};let Ct,Et,St,Dt;R.on("selection-svg",(t=>Ct=t)),R.on("selection-g",(t=>Et=t)),R.on("selection-asstSvg",(t=>St=t)),R.on("selection-foreign",(t=>Dt=t));const Nt=l(!0),zt=l({left:0,top:0}),At=l({title:"折叠节点",name:"collapse",disabled:!0}),Vt=l({title:"展开节点",name:"expand",disabled:!0}),jt=l({title:"删除节点",name:"delete",disabled:!1}),Pt=l({title:"新建子节点",name:"add",disabled:!1}),Gt=i((()=>[[Pt.value],[jt.value],[{title:"全选",name:"selectall",disabled:!0}],[At.value,Vt.value]])),Rt=i((()=>[[{title:"放大",name:"zoomin",disabled:oe.value.k>=qt[1]},{title:"缩小",name:"zoomout",disabled:oe.value.k<=qt[0]},{title:"缩放至合适大小",name:"zoomfit",disabled:!1}],[{title:"全选",name:"selectall",disabled:!0}]])),Ut=i((()=>Nt.value?Rt.value:Gt.value)),Ot=s().source((t=>t.source)).target((t=>t.target)),Yt=r().curve(c),Ht=({source:t,target:e})=>Yt([t,e]);let Kt=!1,Wt=Ot;const It=l(!1);R.on("sharp-corner",(t=>{Kt!==t&&(It.value=!0),Kt=!!t,Wt=t?Ht:Ot}));let Tt=4;R.on("branch",(t=>Tt=t||Tt));let qt=[.1,8];R.on("scale-extent",(t=>qt=t||qt));let Xt=!1;R.on("edit-flag",(t=>Xt=!!t));let Ft=18,Jt=84,Zt=Math.min(Ft/2-1,10);R.on("gap",(t=>{t&&(Jt=t.xGap,Ft=t.yGap,Zt=Math.min(Ft/2-1,10),Zt=Math.min(Jt/2-1,Zt))}));const Qt=new ResizeObserver((t=>{const{foreign:e}=P;if(!e)return;const n=t[0],a=n.target,l=2*(parseInt(getComputedStyle(a).paddingLeft||"0",10)+parseInt(getComputedStyle(a.parentNode).borderTopWidth||"0",10));e.attr("width",n.contentRect.width+l).attr("height",n.contentRect.height+l)})),te={side:12,padding:2},ee=te.side+2*te.padding,ne=16,ae=4,le=2,oe=l(h),ie=d().on("zoom",(t=>{const{g:e}=P;e&&(oe.value=t.transform,e.attr("transform",t.transform.toString()))})).scaleExtent(qt),se=t=>{const e=["node"];return t&&e.push(`depth-${t.depth}`),e},re=t=>`translate(${t.dx+t.px},${t.dy+t.py})`,ce=t=>t.id,de=t=>{const e=$e(t.name),n=t.height/e.length;return e.map((t=>({name:t,height:n})))},he=t=>{let e=0,n=0;const a=Math.max(Zt-3,0);let l=t.width+a;let o=3;const{parent:i}=t;i&&(e=i.width,n=i.height,0===i.depth&&(Kt||(e/=2),n/=2,o=0)),t.left&&(i&&(0!==i.depth?e=-e:Kt&&(e=0)),l=-l);const s=[-t.dx+e-t.px,-t.dy+n+o-t.py],r=[0,t.height+3];return`${Wt({source:s,target:r})}L${l},${r[1]}`},ue=(t,e,n,a,l)=>{t?(be(e,10),ve(n,10,6),xe(a,10),l&&ye(l,10)):(be(e,Zt),ve(n,Zt),xe(a,Zt),l&&ye(l,Zt))},pe=(t,e)=>{const n=t.attr("class",(t=>(t=>{const e=se(t);return t&&(0===t.depth&&e.push(U.root),t.collapse?e.push(U.collapse):t.children&&0!==t.children.length||e.push("leaf")),e})(t).join(" "))).attr("data-id",ce);(e?n.transition(e):n).attr("transform",re)},me=(t,e)=>{(e?t.transition(e):t).attr("transform",(t=>`translate(${t.left?-t.width:0},0)`))},ge=t=>{t.attr("alignment-baseline","text-before-edge").text((t=>t.name||" ")).attr("x",0).attr("dy",((t,e)=>e?t.height:0))},fe=(t,e)=>{t.attr("cx",e).attr("cy",0).attr("r",1)},ve=(t,e,n=4)=>{t.attr("x",(t=>-e-(t.left?t.width:0))).attr("y",-e).attr("rx",n).attr("ry",n).attr("width",(t=>t.width+2*e)).attr("height",(t=>t.height+2*e))},xe=(t,e)=>{t.attr("class",U["expand-btn"]).attr("transform",(t=>((t,e)=>{const n=0===t.depth?t.height/2:t.height+3;let a=t.width+e+ne/2+4;return t.left&&(a=-a),`translate(${a},${n})`})(t,e))).style("color",(t=>t.color))},ye=(t,e)=>{t.attr("class",(t=>(t=>{const e=[U["add-btn"]];return t.collapse&&e.push(U.hidden),e})(t).join(" "))).attr("transform",(t=>((t,e)=>{const n=0===t.depth?t.height/2:t.height+3;let a=t.width+e+ee/2+8;return t.left&&(a=-a),`translate(${a},${n})`})(t,e)))},be=(t,e)=>{t.attr("class",U.trigger).attr("x",-e).attr("y",-e).attr("width",(t=>t.width+2*e+8+ee)).attr("height",(t=>t.height+2*e))},we=(t,e)=>{const n=t.attr("stroke",(t=>t.color)).attr("stroke-width",Tt);if(e){const t=n.transition(e);It.value?t.attrTween("d",_e):t.attr("d",he)}else n.attr("d",he)};function _e(t,e,n){const a=he(t),l=n[e],o=l.cloneNode(),i=l.getTotalLength();o.setAttribute("d",a);const s=o.getTotalLength(),r=[0],c=10/Math.max(i,s);let d=0;for(;(d+=c)<1;)r.push(d);r.push(1);const h=r.map((t=>{const e=l.getPointAtLength(t*i),n=o.getPointAtLength(t*s);return u([e.x,e.y],[n.x,n.y])}));return t=>t<1?"M"+h.map((e=>e(t))).join("L"):a}const $e=t=>{const e=t.split("\n");return e.length>2&&""===e[e.length-1]&&e.pop(),e},Me=(t,e)=>p().duration(t).ease(e),ke=(t,e)=>{const{pageX:n,pageY:a}=e,l=t.getBoundingClientRect();return{left:n-(l.left+window.pageXOffset),top:a-(l.top+window.pageYOffset)}};function Le(){var t,e;return null==(e=null==(t=this.parentNode)?void 0:t.parentNode)?void 0:e.parentNode}function Be(t){const e=t instanceof SVGGElement?t:document.querySelector(`g[data-id='${ce(t)}']`),n=document.getElementsByClassName(U.selected)[0];if(!e)throw new Error(`g[data-id='${ce(t)}'] is null`);n?n!==e?(n.classList.remove(U.selected),e.classList.add(U.selected)):R.emit("edit-flag",!0):e.classList.add(U.selected)}const Ce=t=>{const{asstSvg:e}=P;if(!e)throw new Error("asstSvg undefined");const n=$e(t),a=e.append("text");a.selectAll("tspan").data(n).enter().append("tspan").text((t=>t)).attr("x",0);const l=a.node().getBBox();return a.remove(),{width:Math.max(l.width,22),height:Math.max(l.height,22)*n.length}},Ee=(t,e,n,a=0)=>{const l=Me(a,f);e.px=n[0],e.py=n[1],m(t).transition(l).attr("transform",re),m(`g[data-id='${ce(e)}'] > path`).transition(l).attr("d",(t=>he(t)))},Se=t=>{const e=t.append("tspan");return ge(e),e},De=t=>(ge(t),t),Ne=t=>{const e=t.append("g");return(t=>{const{side:e,padding:n}=te,a=-n-e/2,l=e+2*n;t.attr("x",a).attr("y",a).attr("rx",4).attr("ry",4).attr("width",l).attr("height",l)})(e.append("rect")),e.append("path").attr("d",((t,e)=>{const n=-e/2,a=-t/2,l=t/2,o=e/2;return`M${o},${l}H${l}V${o}H${a}V${l}H${n}V${a}H${a}V${n}H${l}V${a}H${o}V${l}Z`})(2,te.side)),e},ze=t=>{const e=t.append("g");return e.append("rect").attr("x",-ne/2).attr("y",-ae/2).attr("width",ne).attr("height",ae).attr("rx",le).attr("ry",le).attr("stroke",(t=>t.color||"grey")).attr("fill",(t=>t.color||"grey")),fe(e.append("circle"),-4),fe(e.append("circle"),0),fe(e.append("circle"),4),e};var Ae=v({name:"contextmenu",props:{position:{default:{top:0,left:0}},groups:Array},emits:["click-item"],setup(t,e){const n=l(!1),a=x();R.on("showContextmenu",(t=>n.value=!!t));const o=()=>n.value=!1;return{style:a,show:n,close:o,onClick:t=>{o(),e.emit("click-item",t)}}}});var Ve={container:"Contextmenu_container_154ic",menu:"Contextmenu_menu_154ic",disabled:"Contextmenu_disabled_154ic"};(Ae.__cssModules={}).$style=Ve,Ae.render=function(t,e,n,a,l,o){return y((k(),w("div",{class:t.style.container},[_("div",{onMousedown:e[1]||(e[1]=(...e)=>t.close&&t.close(...e))},null,32),_("div",{id:t.style.menu,style:{top:t.position.top+"px",left:t.position.left+"px"}},[(k(!0),w($,null,M(t.groups,((e,n)=>(k(),w("ul",{key:n},[(k(!0),w($,null,M(e,(e=>(k(),w("li",{class:e.disabled?t.style.disabled:"",key:e.name,onClick:n=>t.onClick(e.name)},L(e.title),11,["onClick"])))),128))])))),128))],12,["id"])],2)),[[b,t.show]])};var je=v({name:"Mindmap",components:{Contextmenu:Ae},props:{modelValue:{type:Array,required:!0},xGap:{type:Number,default:Jt},yGap:{type:Number,default:Ft},branch:{type:Number,default:Tt,validator:t=>t>=1&&t<=6},scaleExtent:{type:Object,default:qt},sharpCorner:Boolean,centerBtn:Boolean,fitBtn:Boolean,downloadBtn:Boolean,timetravel:Boolean,addNodeBtn:Boolean,edit:Boolean,drag:Boolean,keyboard:Boolean,contextmenu:Boolean,zoom:Boolean},setup(t,e){B((()=>R.emit("scale-extent",t.scaleExtent))),B((()=>R.emit("branch",t.branch))),B((()=>R.emit("sharp-corner",t.sharpCorner))),B((()=>R.emit("gap",{xGap:t.xGap,yGap:t.yGap})));const n=i((()=>t.edit&&t.addNodeBtn)),l=C().container(Le).on("drag",$t).on("end",(function(t,e){var n;const a=null==(n=this.parentNode)?void 0:n.parentNode;gt.value&&gt.value.classList.remove(U.dragging);const l=document.getElementsByClassName(U.outline)[0];if(l){l.classList.remove(U.outline);const t=l.getAttribute("data-id");if(!t)throw new Error("outline data-id null");return e.px=0,e.py=0,void w(t,e.id)}const o=e.x-dt.getRootWidth()/2,i=1===e.depth&&o*(o+e.px)<0,s=i?t=>t.left!==e.left:t=>t.left===e.left,r=a.parentNode;let c=i?{y:1/0,id:e.id}:e,d=i?{y:-1/0,id:e.id}:e;const h=m(r).selectAll(`g.${se(e).join(".")}`).filter((t=>t!==e&&s(t))),u=e.y+e.py;if(h.each((t=>{(i||t.y>e.y)&&t.y<u&&t.y>d.y&&(d=t),(i||t.y<e.y)&&t.y>u&&t.y<c.y&&(c=t)})),c.id!==e.id)return e.px=0,e.py=0,void _(e.id,c.id);if(d.id!==e.id)return e.px=0,e.py=0,void _(e.id,d.id,1);Ee(a,e,[0,0],500)}));E((()=>{if(!(gt.value&&ft.value&&vt.value&&xt.value&&yt.value))return;R.emit("selection-svg",m(gt.value)),R.emit("selection-g",m(ft.value)),R.emit("selection-asstSvg",m(vt.value).attr("width",0).attr("height",0)),R.emit("selection-foreign",m(xt.value)),Qt.observe(yt.value),R.emit("mmdata",new ct(a.cloneDeep(t.modelValue[0]),Jt,Ft,Ce)),It.value=!1,y();const{svg:e,foreign:n}=P;null==n||n.raise(),yt.value.addEventListener("blur",u),yt.value.addEventListener("mousedown",(t=>t.stopPropagation())),D(),N(),null==e||e.on("mousedown",(()=>{const t=document.getElementsByClassName(U.selected)[0];null==t||t.classList.remove(U.selected)})),Lt(t.zoom),Bt(t.contextmenu)})),S((()=>[t.branch,n.value,t.sharpCorner]),(()=>{c(),It.value=!1})),S((()=>[t.xGap,t.yGap]),(t=>{dt.setBoundingBox(t[0],t[1]),c()})),S((()=>[t.drag,t.edit]),(t=>{(t=>{const{g:e}=P;if(!e)return;const n=e.selectAll(`g.${U.text}`);t?n.on("mousedown",_t):n.on("mousedown",null)})(t[0]||t[1]),x(t[0]),(t=>{const{g:e}=P;if(!yt.value||!e)return;const n=e.selectAll(`g.${U.text}`);t?n.on("click",Mt):n.on("click",null)})(t[1])})),S((()=>t.zoom),(t=>Lt(t))),S((()=>t.contextmenu),(t=>Bt(t)));const o=t=>{const e=Ne(t);return e.on("click",p),e},s=t=>{var e;const a=!(null==(e=t.data()[0])?void 0:e.depth),l=t.append("g");pe(l),we(l.append("path"));const i=l.append("g").attr("class",U.content),s=i.append("rect"),r=i.append("g").attr("class",U.text),h=r.append("rect"),u=r.append("text");me(u);const p=u.selectAll("tspan").data(de).enter().append("tspan");let m;ge(p),n.value&&(m=o(i));const g=ze(i);return ue(a,s,h,g,m),d(l,a),l.each(((t,e)=>{t.children&&c(t.children,l.filter(((t,n)=>e===n)))})),i.raise(),l},r=t=>{var e;const a=!(null==(e=t.data()[0])?void 0:e.depth),l=Me(500,f);pe(t,l),we(t.select(":scope > path"),l);const i=t.select(`:scope > g.${U.content}`),s=i.select(":scope > rect"),r=i.select(`g.${U.text}`),d=r.select("rect"),h=r.select("text");me(h,l),h.selectAll("tspan").data(de).join(Se,De,(t=>t.remove()));let u=i.select(`g.${U["add-btn"]}`),p=i.select(`g.${U["expand-btn"]}`);return n.value?u.node()||(u=o(i)):u.remove(),ue(a,s,d,p,u),t.each(((e,n)=>{e.children&&c(e.children,t.filter(((t,e)=>n===e)))})),i.raise(),t},c=(t=[dt.data],e=Et)=>{e.selectAll(`g.${se(t[0]).join(".")}`).data(t,(t=>t.gKey)).join(s,r)},d=(e,a)=>{if(e.select(`:scope > g.${U.content} > g.${U["expand-btn"]}`).on("click",v),t.drag||t.edit){const n=e.select(`:scope > g.${U.content} > g.${U.text}`);n.on("mousedown",_t),t.drag&&!a&&l(n),t.edit&&n.on("click",Mt)}n.value&&e.select(`:scope > g.${U.content}`).on("mouseenter",bt).on("mouseleave",wt)};const u=()=>{var t;if(null==(t=document.getElementsByClassName(U.edited)[0])||t.classList.remove(U.edited,U.selected),xt.value&&yt.value){xt.value.style.display="none";const t=xt.value.getAttribute("data-id"),e=xt.value.getAttribute("data-name"),n=yt.value.textContent;t&&null!==n&&n!==e&&b(t,n)}},p=(t,e)=>{const n=$(e.id,""),{g:a}=P;if(!a||!n)return;const l=a.selectAll(`g[data-id='${ce(n)}'] g.${U.text}`).node();l&&(R.emit("edit-flag",!0),Mt.call(l,t,n))},v=(t,e)=>{k(e.id)},x=t=>{const{g:e}=P;if(!e)return;const n=e.selectAll(`g.node:not(.${U.root}) > g > g.${U.text}`);t?l(n):n.on(".drag",null)},y=(t=!0)=>{t&&ht.snap(dt.data),e.emit("update:modelValue",a.cloneDeep([dt.data.rawData])),ut.value=ht.hasPrev,pt.value=ht.hasNext,c()},b=(t,e)=>{dt.rename(t,e),y()},w=(t,e)=>{dt.moveChild(t,e),y()},_=(t,e,n=0)=>{dt.moveSibling(t,e,n),y()},$=(t,e)=>{const n=dt.add(t,e);return y(),n},M=t=>{dt.delete(t),y()},k=t=>{dt.expand(t),y()},L=t=>{dt.collapse(t),y()},D=()=>{const{svg:t}=P;if(!t)return;const e=dt.data;ie.translateTo(t,0+e.width/2,0+e.height/2)},N=()=>{const{svg:t}=P;if(!t||!ft.value||!gt.value)return;const e=ft.value.getBBox(),n=gt.value.getBoundingClientRect(),a=Math.min(n.width/e.width,n.height/e.height),l=n.width/2,o=n.height/2,i=e.width*a/2,s=e.height*a/2,r=h.translate(-e.x*a+l-i,-e.y*a+o-s).scale(a);ie.transform(t,r)},z=t=>{const{svg:e}=P;e&&ie.scaleBy(e,t?1.1:.9)};return{wrapperEle:mt,svgEle:gt,gEle:ft,style:U,asstSvgEle:vt,foreignEle:xt,foreignDivEle:yt,centerView:D,fitView:N,download:()=>{var t,e;mt.value&&(t=mt.value,e=dt.data.name,g(t).then((t=>{const n=t.toDataURL(),a=open();a&&(a.document.write(`<img src='${n}'>`),a.document.title=e,a.document.close())})))},menu:Ut,contextmenuPos:zt,onClickMenu:t=>{if("zoomfit"===t)N();else if("zoomin"===t)z(!0);else if("zoomout"===t)z(!1);else if("add"===t){const t=m(`.${U.selected}`).data()[0];p(new MouseEvent("click"),t)}else if("delete"===t){const t=m(`.${U.selected}`).data()[0];M(t.id)}else if("collapse"===t){const t=m(`.${U.selected}`).data()[0];L(t.id)}else if("expand"===t){const t=m(`.${U.selected}`).data()[0];k(t.id)}},next:()=>{const t=ht.next();t&&(dt.data=t,y(!1))},prev:()=>{const t=ht.prev();t&&(dt.data=t,y(!1))},hasPrev:ut,hasNext:pt}}});const Pe={ref:"gEle"},Ge={ref:"foreignEle",style:{display:"none"}},Re={ref:"foreignDivEle",contenteditable:""},Ue={ref:"asstSvgEle"};je.render=function(t,e,n,a,l,o){const i=D("contextmenu");return k(),w("div",{class:t.style.container},[_("div",{id:t.style["svg-wrapper"],ref:"wrapperEle"},[(k(),w("svg",{class:t.style.svg,ref:"svgEle"},[_("g",Pe,[(k(),w("foreignObject",Ge,[_("div",Re,null,512)],512))],512)],2))],8,["id"]),(k(),w("svg",Ue,null,512)),_("div",{class:[t.style["button-list"],t.style["right-bottom"]]},[t.centerBtn?(k(),w("button",{key:0,onClick:e[1]||(e[1]=e=>t.centerView())},[_("i",{class:t.style.gps},null,2)])):N("",!0),t.fitBtn?(k(),w("button",{key:1,onClick:e[2]||(e[2]=e=>t.fitView())},[_("i",{class:t.style.fit},null,2)])):N("",!0),t.downloadBtn?(k(),w("button",{key:2,onClick:e[3]||(e[3]=e=>t.download())},[_("i",{class:t.style.download},null,2)])):N("",!0)],2),t.timetravel?(k(),w("div",{key:0,class:[t.style["button-list"],t.style["right-top"]]},[_("button",{onClick:e[4]||(e[4]=(...e)=>t.prev&&t.prev(...e)),class:{[t.style.disabled]:!t.hasPrev}},[_("i",{class:t.style.prev},null,2)],2),_("button",{onClick:e[5]||(e[5]=(...e)=>t.next&&t.next(...e)),class:{[t.style.disabled]:!t.hasNext}},[_("i",{class:t.style.next},null,2)],2)],2)):N("",!0),t.contextmenu?(k(),w(i,{key:1,position:t.contextmenuPos,groups:t.menu,onClickItem:t.onClickMenu},null,8,["position","groups","onClickItem"])):N("",!0)],2)};var Oe=v({name:"App",components:{Mindmap:je},setup(){const t=z({"center-btn":{value:!0},"fit-btn":{value:!0},timetravel:{value:!0},"download-btn":{value:!0},"add-node-btn":{value:!0},keyboard:{value:!1,disabled:!0},zoom:{value:!0},drag:{value:!0},edit:{value:!0},contextmenu:{value:!0},"sharp-corner":{value:!1},vertical:{value:!1,disabled:!0}}),e=z({branch:{value:Tt,min:1,max:6},"x-gap":{value:Jt,min:0,max:100},"y-gap":{value:Ft,min:0,max:100}});return{data:l(G),checkboxList:t,rangeList:e}}});const Ye={class:"container"},He=_("div",{class:"left-top"},[_("a",{href:"https://github.com/hellowuxin/vue3-mindmap",target:"_blank"},"GitHub")],-1),Ke=_("div",{class:"right-top"},[_("span",null,"Props")],-1),We={class:"right-bottom"};Oe.render=function(t,e,n,a,l,o){const i=D("mindmap");return k(),w("div",Ye,[He,Ke,_(i,{class:"left-bottom",modelValue:t.data,"onUpdate:modelValue":e[1]||(e[1]=e=>t.data=e),branch:t.rangeList.branch.value,"x-gap":t.rangeList["x-gap"].value,"y-gap":t.rangeList["y-gap"].value,zoom:t.checkboxList.zoom.value,"fit-btn":t.checkboxList["fit-btn"].value,"center-btn":t.checkboxList["center-btn"].value,"download-btn":t.checkboxList["download-btn"].value,drag:t.checkboxList.drag.value,edit:t.checkboxList.edit.value,"add-node-btn":t.checkboxList["add-node-btn"].value,"sharp-corner":t.checkboxList["sharp-corner"].value,contextmenu:t.checkboxList.contextmenu.value,timetravel:t.checkboxList.timetravel.value},null,8,["modelValue","branch","x-gap","y-gap","zoom","fit-btn","center-btn","download-btn","drag","edit","add-node-btn","sharp-corner","contextmenu","timetravel"]),_("div",We,[(k(!0),w($,null,M(t.checkboxList,((t,e)=>(k(),w("div",{key:e},[y(_("input",{type:"checkbox",name:e.toString(),"onUpdate:modelValue":e=>t.value=e,disabled:t.disabled},null,8,["name","onUpdate:modelValue","disabled"]),[[A,t.value]]),_("label",{for:e.toString()},L(e),9,["for"])])))),128)),(k(!0),w($,null,M(t.rangeList,((t,e)=>(k(),w("div",{key:e},[y(_("input",{type:"range",name:e,"onUpdate:modelValue":e=>t.value=e,min:t.min,max:t.max},null,8,["name","onUpdate:modelValue","min","max"]),[[V,t.value,void 0,{number:!0}]]),_("label",{for:e},L(e)+"（"+L(t.value)+"）",9,["for"])])))),128))])])},j(Oe).mount("#app");