(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(14),c=t.n(r),o=t(4),l=t(2),i=t(3),m=t.n(i),s="/api/persons",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e){return m.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},b=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},v=(t(37),function(e){var n=e.person,t=e.removeMethod;return u.a.createElement("li",null,n.name," ",n.number," ",u.a.createElement("button",{onClick:function(){return t(n.id,n.name)}},"Delete")," ")}),p=function(e){var n=e.name,t=e.number,a=e.nameChange,r=e.numberChange;return u.a.createElement("div",null,u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:n,onChange:a})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:t,onChange:r})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.people,t=e.removeMethod;return u.a.createElement("ul",null,n.map((function(e){return u.a.createElement(v,{key:e.id,person:e,removeMethod:t})})))},g=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"message"},n)},j=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"error"},n)},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],s=i[1],v=Object(a.useState)(""),O=Object(l.a)(v,2),w=O[0],C=O[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],D=k[1],M=Object(a.useState)(null),P=Object(l.a)(M,2),N=P[0],J=P[1],T=Object(a.useState)(null),x=Object(l.a)(T,2),A=x[0],B=x[1];Object(a.useEffect)((function(){f().then((function(e){r(e)}))}),[]);var F=""===y?t:t.filter((function(e){return e.name.toLowerCase().includes(y)}));return u.a.createElement("div",null,u.a.createElement("h1",null,"Phonebook"),u.a.createElement(g,{message:N}),u.a.createElement(j,{message:A}),u.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:m,number:w};if(t.some((function(e){return e.name===m}))){if(window.confirm("Person "+m+" is already added to the phonebook. Do you want to replace the number?")){var a=t.find((function(e){return e.name===m})),u=Object(o.a)(Object(o.a)({},a),{},{number:w});b(a.id,u).then((function(e){r(t.map((function(n){return n.id!==a.id?n:e})))}))}}else""!==m&&""!==w&&(d(n).then((function(e){r(t.concat(e))})).catch((function(e){B(e.response.data)})),J("Person '".concat(m,"' was added")),setTimeout((function(){J(null)}),5e3));s(""),C("")}},u.a.createElement("div",null,"Filter shown with: ",u.a.createElement("input",{value:y,onChange:function(e){D(e.target.value)}})),u.a.createElement("h2",null,"Add a new"),u.a.createElement(p,{name:m,number:w,nameChange:function(e){s(e.target.value)},numberChange:function(e){C(e.target.value)}})),u.a.createElement("h2",null,"Numbers"),u.a.createElement(E,{people:F,removeMethod:function(e,n){window.confirm("Delete "+n)&&h(e).then((function(n){r(t.filter((function(n){return n.id!==e})))})).catch((function(e){B("Person '".concat(n,"' has already been removed")),setTimeout((function(){B(null)}),5e3)}))}}))};c.a.render(u.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3a2688a5.chunk.js.map