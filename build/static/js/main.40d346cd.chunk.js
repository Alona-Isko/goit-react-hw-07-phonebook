(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={ContactList__container:"ContactList_ContactList__container__5cpT4",ContactList__item:"ContactList_ContactList__item__32iwS",ContactList__text:"ContactList_ContactList__text__1K6RK",ContactList__button:"ContactList_ContactList__button__2Fng3"}},15:function(t,e,n){t.exports={container:"App_container__xk93q",container__title:"App_container__title__DHkil",Contacts__title:"App_Contacts__title__3oI7S"}},18:function(t,e,n){t.exports={Filter__text:"Filter_Filter__text__14tZV",Filter__input:"Filter_Filter__input__3RwEI"}},24:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},35:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=n(3),s=n(21),_=(n(35),n(19)),l=n(9),u=n.n(l),b=n(4),d=Object(b.b)("contacts/add",(function(t,e){return{payload:{id:u.a.generate(),name:t,number:e,completed:!1}}})),m=Object(b.b)("contacts/filter"),j=Object(b.b)("contacts/delete"),f=function(t){return t.contacts.items},p=function(t){return t.contacts.filter},O=function(t){var e=f(t),n=p(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},h=n(7),x=n.n(h),C=n(1);var v=function(){var t=Object(o.c)(f),e=Object(o.b)(),n=Object(a.useState)(""),c=Object(_.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),l=Object(_.a)(s,2),b=l[0],m=l[1],j=u.a.generate(),p=u.a.generate(),O=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":m(a);break;default:return}},h=function(){i(""),m("")};return Object(C.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),function(e){return t.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(r))return alert("".concat(r," is already in contacts."));e(d(r,b)),h()},children:[Object(C.jsx)("label",{className:x.a.form__title,htmlFor:j,children:"Name"}),Object(C.jsx)("input",{type:"text",className:x.a.form__input,name:"name",id:j,value:r,onChange:O,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter name",required:!0}),Object(C.jsx)("label",{className:x.a.form__title,htmlFor:p,children:"Number"}),Object(C.jsx)("input",{type:"tel",className:x.a.form__input,name:"number",id:p,value:b,onChange:O,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter phone number",required:!0}),Object(C.jsx)("button",{className:x.a.form__button,type:"submit",children:"Add contact"})]})},L=n(18),g=n.n(L),N=function(){var t=Object(o.c)(p),e=Object(o.b)();return Object(C.jsxs)("label",{className:g.a.Filter__text,children:["Find contacts by name",Object(C.jsx)("input",{type:"text",className:g.a.Filter__input,value:t,onChange:function(t){return e(m(t.currentTarget.value))}})]})},F=n(10),k=n.n(F);var w=function(){var t=Object(o.c)(O),e=Object(o.b)();return Object(C.jsx)("ul",{className:k.a.ContactList__container,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(C.jsxs)("li",{className:k.a.ContactList__item,children:[Object(C.jsxs)("p",{className:k.a.ContactList__text,children:[a,": ",c]}),Object(C.jsx)("button",{className:k.a.ContactList__button,onClick:function(){return function(t){return e(j(t))}(n)},children:"X"})]},n)}))})},y=n(15),A=n.n(y);function S(){return Object(C.jsxs)("div",{className:A.a.container,children:[Object(C.jsx)("h1",{className:A.a.container__title,children:"Phonebook"}),Object(C.jsx)(v,{}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{className:A.a.Contacts__title,children:"Contacts"}),Object(C.jsx)(N,{}),Object(C.jsx)(w,{})]})]})}var z,E=n(14),J=n(22),R=n.n(J),T=n(5),Z=n(23),q=n.n(Z),B=n(6),I=n(2),K=n(24),D=Object(b.c)(K,(z={},Object(B.a)(z,d,(function(t,e){var n=e.payload;return[].concat(Object(E.a)(t),[n])})),Object(B.a)(z,j,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),z)),H=Object(b.c)("",Object(B.a)({},m,(function(t,e){return e.payload}))),M=Object(I.b)({items:D,filter:H}),Q=[].concat(Object(E.a)(Object(b.d)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),[R.a]),P={key:"contacts",storage:q.a,blacklist:["filter"]},V=Object(b.a)({reducer:{contacts:Object(T.g)(P,M)},middleware:Q,devTools:!1}),X=Object(T.h)(V);i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(o.a,{store:V,children:Object(C.jsx)(s.a,{loading:null,persistor:X,children:Object(C.jsx)(S,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form__title:"ContactForm_form__title__Rw4BQ",form__input:"ContactForm_form__input__16kpQ",form__button:"ContactForm_form__button__2CYzl"}}},[[48,1,2]]]);
//# sourceMappingURL=main.40d346cd.chunk.js.map