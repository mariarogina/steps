(this.webpackJsonpsteps=this.webpackJsonpsteps||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(13),l=c.n(a),i=(c(21),c(22),c(16)),r=c(8),d=c(6),o=c(11),j=c(0),b={date:new Date,km:""},x=function(e){var t=e.onAddRow,c=Object(n.useState)(b),s=Object(r.a)(c,2),a=s[0],l=s[1],i=function(e){var t=e.target,c=t.name,n=t.value;l((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(d.a)({},c,n))}))};return Object(j.jsx)("div",{style:{margin:"20px auto"},children:Object(j.jsx)("div",{children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a),l(b)},className:"container",children:Object(j.jsxs)("div",{className:"form row",style:{display:"flex",flexDirection:"row"},children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("label",{children:"\u0414\u0430\u0442\u0430 "}),Object(j.jsx)("input",{type:"date","data-date":"","data-date-format":"DD MMMM YYYY",value:a.date,id:"date",name:"date",onChange:i,required:!0,style:{borderRadius:"6px"}})]}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("label",{children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c "}),Object(j.jsx)("input",{value:a.km,id:"km",name:"km",onChange:i,required:!0,style:{borderRadius:"6px"}})]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("button",{className:"btn btn-secondary",style:{marginTop:"20px"},children:"OK"})})]})})})})},h=c(14),u=c.n(h),O=c(12),m=c(7),p=c(15),f=c.n(p),y=Object(j.jsx)(O.a,{icon:m.a}),v=Object(j.jsx)(O.a,{icon:m.b}),w=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=function(e){console.log(e)};return Object(j.jsxs)("div",{style:{width:"500px",margin:"10px 60px"},children:[Object(j.jsx)(x,{onAddRow:function(e){var t=[],n=!1;c.forEach((function(t){t.date===e.date&&(n=!0)})),(t=n?c.map((function(t){return t.date===e.date&&(t.km=parseInt(e.km)+parseInt(t.km)),t})):[].concat(Object(i.a)(c),[{id:u()(),date:e.date,km:e.km}])).sort((function(e,t){return e.date>t.date?1:t.date>e.date?-1:0})),s(t)}}),Object(j.jsx)("div",{className:"table",style:{textAlign:"center",margin:"20px auto",borderRadius:"15px",height:"80vh"},children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"row",style:{border:"none"},children:[Object(j.jsx)("th",{scope:"col",align:"center",className:"col",style:{width:"120px"},children:"\u0414\u0430\u0442\u0430"}),Object(j.jsx)("th",{scope:"col",align:"center",className:"col",style:{width:"120px"},children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}),Object(j.jsx)("th",{scope:"col",align:"center",className:"col",style:{width:"120px"},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(j.jsx)("th",{scope:"col",align:"center",className:"col",style:{width:"120px"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsxs)("tr",{className:"row",style:{display:"flex",border:"none"},children:[Object(j.jsx)("td",{className:"col",style:{width:"120px"},children:f()(e.date).format("DD/MM/YYYY")}),Object(j.jsxs)("td",{className:"col",style:{width:"120px"},children:[e.km," \u043a\u043c"]}),Object(j.jsx)("td",{className:"col",style:{width:"120px"},children:Object(j.jsx)("button",{onClick:a,children:y})}),Object(j.jsx)("td",{className:"col",style:{width:"120px"},children:Object(j.jsx)("button",{onClick:function(){return function(e){var t=c.filter((function(t){return t.id!==e}));s(t)}(e.id)},children:v})})]},e.id)}))})]})})]})};var N=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(w,{})})};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7e928e6c.chunk.js.map