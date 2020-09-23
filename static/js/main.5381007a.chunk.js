(this["webpackJsonplibrary-react"]=this["webpackJsonplibrary-react"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r);var c=function(){return l.a.createElement("div",{className:"site-header"},l.a.createElement("h1",{className:"header-title"},"Liger's Library"),l.a.createElement("button",{className:"menu-button",onClick:function(e){var t=document.querySelector(".option-bar");t.classList.toggle("inactive"),t.classList.toggle("animate");var a=e.target;a.classList.add("clicked"),setTimeout((function(){a.classList.remove("clicked")}),150)}}))},u=a(1),i=a(5),m=a(6),s=a(3);var d=function(e){var t=function(t){var a=t.target;e.setBook((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},a.name,"completed"===a.name?!e.completed:a.value))}))};return l.a.createElement("div",{className:"form-wrapper inactive"},l.a.createElement("h1",{className:"form-title"},"Add Book"),l.a.createElement("form",{className:"add-book-form",onSubmit:function(t){t.preventDefault(),e.addBook(),e.clearBook()}},l.a.createElement("label",null,"Title",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"title",value:e.book.title,onChange:t,required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Author",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"author",value:e.book.author,onChange:t,required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Pages",l.a.createElement("br",null),l.a.createElement("input",{type:"number",name:"pages",min:"1",value:e.book.pages,onChange:t,required:!0})),l.a.createElement("br",null),l.a.createElement("label",{className:"form-checkbox"},"Completed",l.a.createElement("input",{type:"checkbox",name:"completed",value:e.book.completed,onChange:t})),l.a.createElement("button",{className:"submit-button"},"Add")))};var b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({title:"",author:"",pages:1,completed:!1}),c=Object(m.a)(o,2),s=c[0],b=c[1];function p(e){var t=e.target,n=t.parentNode.parentNode.attributes[1].nodeValue,l=t.parentNode.parentNode.attributes[2].nodeValue,r=t.parentNode.parentNode.attributes[3].nodeValue;return a.findIndex((function(e){return e.title===n&&e.author===l&&e.pages===r}))}function E(e){var t=p(e),n=Object(i.a)(a);n.splice(t,1),r(n)}function g(e){var t=p(e),n=a[t],l=Object(u.a)(Object(u.a)({},n),{},{completed:!n.completed}),o=Object(i.a)(a);o[t]=l,r(o)}var v=a.map((function(e){return l.a.createElement("div",{className:e.completed?"book-list-wrapper completed":"book-list-wrapper","attribute-title":e.title,"attribute-author":e.author,"attribute-pages":e.pages,key:"".concat(e.title," ").concat(Math.floor(99999999*Math.random))},l.a.createElement("ul",null,l.a.createElement("li",null,"Title: ",e.title),l.a.createElement("li",null,"Author: ",e.author),l.a.createElement("li",null,"Pages: ",e.pages)),l.a.createElement("div",{className:"book-button-wrapper"},l.a.createElement("button",{className:e.completed?"completed-button completed":"completed-button",onClick:g},e.completed?"Read":"Unread"),l.a.createElement("button",{className:"remove-button",alt:"remove button",onClick:E})))}));return l.a.createElement("div",{className:"books-wrapper"},l.a.createElement(d,{book:s,setBook:b,addBook:function(){var e=Object(i.a)(a);e.push(s),console.log(e),r(e)},clearBook:function(){b((function(e){return{title:"",author:"",pages:1,completed:!1}}))}}),v)};var p=function(e){var t=function(){document.querySelector(".form-wrapper").classList.toggle("inactive")};return l.a.createElement("button",{onClick:function(a){e.toggleClassClicked(a),t()},className:"option-button"},"Add")};var E=function(e){return l.a.createElement("button",{onClick:function(t){e.toggleClassClicked(t)},className:"option-button"},"Filter")};var g=function(e){return l.a.createElement("button",{onClick:function(t){e.toggleClassClicked(t)},className:"option-button"},"Sort")};var v=function(){var e=function(e){e.target.classList.toggle("clicked")};return l.a.createElement("div",{className:"option-bar inactive"},l.a.createElement(p,{toggleClassClicked:e}),l.a.createElement(E,{toggleClassClicked:e}),l.a.createElement(g,{toggleClassClicked:e}))};var f=function(){return l.a.createElement("div",{id:"content"},l.a.createElement(c,null),l.a.createElement(v,null),l.a.createElement(b,null))};a(14),a(15);o.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5381007a.chunk.js.map