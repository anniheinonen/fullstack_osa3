(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=t(4),l=t(2),i=t(3),m=t.n(i),s="/api/persons",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e){return m.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},b=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},v=(t(37),function(e){var n=e.person,t=e.removeMethod;return r.a.createElement("li",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n.id,n.name)}},"Delete")," ")}),p=function(e){var n=e.name,t=e.number,a=e.nameChange,u=e.numberChange;return r.a.createElement("div",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.people,t=e.removeMethod;return r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(v,{key:e.id,person:e,removeMethod:t})})))},g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"message"},n)},j=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],s=i[1],v=Object(a.useState)(""),O=Object(l.a)(v,2),w=O[0],C=O[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],D=k[1],M=Object(a.useState)(null),P=Object(l.a)(M,2),N=P[0],T=P[1],J=Object(a.useState)(null),x=Object(l.a)(J,2),A=x[0],B=x[1];Object(a.useEffect)((function(){f().then((function(e){u(e)}))}),[]);var F=""===y?t:t.filter((function(e){return e.name.toLowerCase().includes(y)}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(g,{message:N}),r.a.createElement(j,{message:A}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:m,number:w};if(t.some((function(e){return e.name===m}))){if(window.confirm("Person "+m+" is already added to the phonebook. Do you want to replace the number?")){var a=t.find((function(e){return e.name===m})),r=Object(o.a)(Object(o.a)({},a),{},{number:w});b(a.id,r).then((function(e){u(t.map((function(n){return n.id!==a.id?n:e})))}))}}else""!==m&&""!==w&&d(n).then((function(e){u(t.concat(e)),T("Person '".concat(m,"' was added")),setTimeout((function(){T(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),B(e.response.data.error),setTimeout((function(){B(null)}),5e3)}));s(""),C("")}},r.a.createElement("div",null,"Filter shown with: ",r.a.createElement("input",{value:y,onChange:function(e){D(e.target.value)}})),r.a.createElement("h2",null,"Add a new"),r.a.createElement(p,{name:m,number:w,nameChange:function(e){s(e.target.value)},numberChange:function(e){C(e.target.value)}})),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{people:F,removeMethod:function(e,n){window.confirm("Delete "+n)&&h(e).then((function(n){u(t.filter((function(n){return n.id!==e})))})).catch((function(e){B("Person '".concat(n,"' has already been removed")),setTimeout((function(){B(null)}),5e3)}))}}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d2b4cb96.chunk.js.map