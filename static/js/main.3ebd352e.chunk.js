(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(64)},64:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),c=n.n(r),u=n(14),o=n(8),i=n(41),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null)," Keeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e," "))},d=n(57),v=n.n(d);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(v.a,null)))},s=n(5),b=n(52),h=n(58),j=n.n(h),O=n(83),w=n(84);var k=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function f(e){var t=e.target,n=t.name,a=t.value;E(function(e){return Object(b.a)({},e,Object(s.a)({},n,a))})}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r?l.a.createElement("input",{name:"title",value:m.title,onChange:f,placeholder:"Title"}):null,l.a.createElement("textarea",{onClick:function(){c(!0)},name:"content",value:m.content,onChange:f,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(w.a,{in:r},l.a.createElement(O.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(j.a,null)))))};var g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r(function(t){return t.filter(function(t,n){return n!==e})})}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(k,{onAdd:function(e){r(function(t){return[].concat(Object(u.a)(t),[e])})}}),n.map(function(e,t){return l.a.createElement(p,{id:t,key:t,title:e.title,content:e.content,onDelete:c})}),l.a.createElement(f,null))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[43,2,1]]]);
//# sourceMappingURL=main.3ebd352e.chunk.js.map