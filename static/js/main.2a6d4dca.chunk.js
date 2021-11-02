(this.webpackJsonpcity=this.webpackJsonpcity||[]).push([[0],{102:function(e,t,c){},206:function(e,t,c){},208:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),r=c(17),s=c.n(r),a=(c(102),c(9)),l=c(2),d=c(10),j=c(213),o=c(210),b=c(89),u=c(35),O=c(94),h=c(1),x=function(e){var t=e.name,c=e.type,i=void 0===c?"text":c,n=e.inputType,r=e.placeholder,s=e.label,a=e.values,l=e.errors,d=e.handleChange,o=e.touched,b=e.handleBlur,u=(e.classes,e.style);return console.log(a),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a.Label,{children:s}),Object(h.jsx)(j.a.Control,{type:i,placeholder:r,onChange:d,onBlur:b,value:a[t],as:n,style:u}),l&&o[t]&&l[t]&&Object(h.jsx)(j.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})},m=c(59),f=c(96),p=u.a().shape({title:u.b().required("Title is required"),description:u.b().required("Description is required"),color:u.b().required("Color is required")}),v=function(e){var t=e.cities,c=e.cityData,i=e.handleFormSubmit,n=e.handleFormClose,r=c||{title:"",description:"",color:""};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(O.a,{initialValues:r,validationSchema:p,onSubmit:function(e,c){(0,c.setSubmitting)(!0),function(e){i([].concat(Object(d.a)(t),[{title:e.title,description:e.description,color:e.color,id:Object(f.a)(5)}]))}(e),n()},children:function(e){var t=e.handleSubmit,c=e.isSubmitting;e.values;return Object(h.jsx)(j.a,{onSubmit:t,children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(b.a,{md:6,children:Object(h.jsx)(j.a.Group,{controlId:"title",children:Object(h.jsx)(x,Object(l.a)(Object(l.a)({shrink:"true"},e),{},{name:"title",label:"Title",placeholder:"Paris, London, New York.."}))})}),Object(h.jsx)(b.a,{md:6,children:Object(h.jsx)(j.a.Group,{controlId:"color",children:Object(h.jsx)(x,Object(l.a)(Object(l.a)({shrink:"true"},e),{},{name:"color",label:"Color",placeholder:"#c0ff00, #0eafc1, #b7b1e9 .."}))})}),Object(h.jsx)(b.a,{md:12,className:"pt-3",children:Object(h.jsx)(j.a.Group,{controlId:"description",children:Object(h.jsx)(x,Object(l.a)(Object(l.a)({shrink:"true"},e),{},{name:"description",label:"Description",placeholder:"type descrption here..",inputType:"textarea"}))})}),Object(h.jsxs)(b.a,{md:12,className:"pt-4",children:[Object(h.jsx)(m.a,{variant:"primary",type:"submit",disabled:c,className:"mr-2",children:"Save"}),Object(h.jsx)(m.a,{variant:"secondary",onClick:n,disabled:c,children:"Close"})]})]})})}})})},y=c(15),C=c(95),S=function(e){var t=e.city,c=e.cities,n=e.setCities,r=Object(i.useState)(Object(l.a)({},t)),s=Object(a.a)(r,2),o=s[0],b=s[1];Object(i.useEffect)((function(){var e=Object(d.a)(c),t=e.findIndex((function(e){return e.id===o.id}));e[t]=o,n(e)}),[o]);var u=function(e,t){b(Object(l.a)(Object(l.a)({},o),{},Object(y.a)({},t,e)))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.id}),Object(h.jsx)("td",{children:Object(h.jsx)(j.a.Control,{type:"text",onChange:function(e){return u(e.target.value,"title")},value:o.title})}),Object(h.jsxs)("td",{children:[" ",Object(h.jsx)(j.a.Control,{type:"text",onChange:function(e){return u(e.target.value,"color")},value:o.color})]}),Object(h.jsx)("td",{children:Object(h.jsx)(C.a,{onClick:function(){var e=Object(d.a)(c),t=e.findIndex((function(e){return e.id===o.id}));e.splice(t,1),n(e)}})})]})})},g=function(e){var t=e.cities,c=e.setCities;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"city-container",children:Object(h.jsxs)("table",{className:"city-list table tabel-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Id"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Color"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:t&&t.map((function(e){return Object(h.jsx)(S,{cities:t,setCities:c,city:e},e.id)}))})]})})})},N=c(212),I=function(e){var t=e.show,c=e.handleClose,i=(e.handleSubmit,e.title),n=e.children;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(N.a,{show:t,onHide:c,children:[Object(h.jsx)(N.a.Header,{closeButton:!0,children:Object(h.jsx)(N.a.Title,{children:i})}),Object(h.jsx)(N.a.Body,{children:n})]})})},k=(c(206),c(211)),F=function(e){var t=e.cities,c=e.setSelectedCity,i=e.selectedCity;return Object(h.jsxs)("div",{className:"profile-sidebar",children:[Object(h.jsx)("h5",{className:"p-2",children:"Sidebar"}),Object(h.jsx)("div",{className:"profile-usermenu",children:Object(h.jsx)("ul",{className:"nav",children:t&&t.map((function(e){return Object(h.jsx)("li",{style:{borderLeft:"4px solid ".concat(e.color),background:(null===i||void 0===i?void 0:i.id)===e.id?e.color:"#DED8D7"},onClick:function(){return c(e)},children:Object(h.jsx)("a",{href:"#",style:{color:(null===i||void 0===i?void 0:i.id)===e.id?"#ffff":"#000000"},children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(b.a,{md:3,children:e.id}),Object(h.jsxs)(b.a,{md:9,children:[e.title,Object(h.jsx)("p",{children:"".concat(e.description.slice(0,30),"...")})]})]})})},e.id)}))})})]})},w=function(e){var t=e.selectedCity,c=e.setSelectedCity,n=e.cities,r=e.setCities;Object(i.useEffect)((function(){var e=Object(d.a)(n),i=e.findIndex((function(e){return e.id===t.id}));e[i]=t,r(e),c(t)}),[t]);return Object(h.jsx)(j.a.Control,{type:"text",onChange:function(e){return i=e.target.value,void c(Object(l.a)(Object(l.a)({},t),{},{description:i}));var i},value:t.description,as:"textarea"})};var T=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(!1),s=Object(a.a)(r,2),l=s[0],d=s[1],j=Object(i.useState)(!1),u=Object(a.a)(j,2),O=u[0],x=u[1],f=Object(i.useState)(!1),p=Object(a.a)(f,2),y=p[0],C=p[1];Object(i.useEffect)((function(){N()}),[]),Object(i.useEffect)((function(){S()}),[c]);var S=function(){localStorage.setItem("cities",JSON.stringify(c))},N=function(){if(null===localStorage.getItem("cities"))localStorage.setItem("cities",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("cities"));n(e)}},T=function(){x("undefined"),d(!1)};return Object(h.jsxs)("div",{className:"App",children:[l&&Object(h.jsx)(I,{show:l,handleClose:T,title:"Add City",children:function(){switch(O){case"Add":return Object(h.jsx)(v,{handleFormSubmit:n,handleFormClose:T,cities:c});default:return void d(!1)}}()}),Object(h.jsx)(k.a,{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(b.a,{md:4,children:Object(h.jsx)(F,{cities:c,setSelectedCity:C,selectedCity:y})}),Object(h.jsx)(b.a,{md:8,children:Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsx)(o.a,{children:Object(h.jsx)(b.a,{md:12,className:"text-right",children:Object(h.jsx)(m.a,{className:"m-3",variant:"primary",onClick:function(){return x("Add"),void d(!0)},children:"Add City"})})}),Object(h.jsx)(g,{cities:c,setCities:n}),y&&Object(h.jsx)(o.a,{children:Object(h.jsx)(b.a,{md:12,children:Object(h.jsx)(w,{selectedCity:y,cities:c,setCities:n,setSelectedCity:C})})})]})})]})})]})};c(207);s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.2a6d4dca.chunk.js.map