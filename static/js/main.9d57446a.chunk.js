(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{34:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),u=n(30),o=n(16),i=n(26),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"Keeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},p=n(28),v=n.n(p);var s=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(v.a,null)))},d=n(19),b=n(24),h=n(29),j=n.n(h),O=n(58),k=n(59);var g=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(!1),i=Object(o.a)(u,2),m=i[0],E=i[1];function f(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},m?l.a.createElement("input",{name:"title",onChange:f,value:r.title,placeholder:"Title"}):null,l.a.createElement("textarea",{name:"content",onChange:f,value:r.content,placeholder:"Take a note...",rows:m?3:1,onClick:function(){E(!0)}}),l.a.createElement(k.a,{in:m},l.a.createElement(O.a,{onClick:function(t){e.onAdd(r),c({title:"",content:""}),t.preventDefault()}}," ",l.a.createElement(j.a,null)))))};var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(g,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(s,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(f,null))};c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9d57446a.chunk.js.map