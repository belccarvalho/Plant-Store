(this.webpackJsonpplant_store=this.webpackJsonpplant_store||[]).push([[0],{48:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(2),s=c(16),i=c.n(s),r=(c(48),c(18)),o=c(15),d=c(9),j=c(73),l=c(74),b=c(75),p=c(76),h=c(77),u=c(78),O=c(26),m=c(42),x=c(14),k=c(39);function f(){return Object(n.jsx)("div",{children:Object(n.jsxs)("p",{className:"disclaimer",children:[Object(n.jsx)("span",{children:"Disclaimer:"})," This is a mock-up of an online-shop developed during a one-year Web Development course."," ",Object(n.jsxs)("span",{children:[" ","Aim: use of ",Object(n.jsx)(x.e,{})," React and ",Object(n.jsx)(k.a,{})," Redux"," "]})]})})}function v(e){return Object(n.jsxs)("div",{className:"container cardEmpty ",children:[Object(n.jsx)("h2",{children:e.text}),Object(n.jsx)(o.b,{className:"goShop",to:"/shop",children:"Go Shopping \u2192"})]})}var g=c(40);function y(){return Object(n.jsxs)("article",{className:"contact col-sm-10 col-12 container",children:[Object(n.jsx)("h1",{children:"Isabel Costa"}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"Address"}),Object(n.jsxs)("p",{children:[Object(n.jsx)(x.d,{})," ","  "," +49 174 5652 867"]})," ",Object(n.jsxs)("p",{children:[Object(n.jsx)(g.a,{})," ","  "," belccarvalho@gmail.com"]})," ",Object(n.jsxs)("p",{children:[Object(n.jsx)(x.b,{})," ","  "," Spohrstra\xdfe, 04103. Leipzig"]})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"Social"}),Object(n.jsxs)("a",{href:"https://github.com/belcosta",target:"_blank",rel:"noreferrer",children:[Object(n.jsx)(x.a,{})," GitHub"]})," ",Object(n.jsxs)("a",{href:"https://www.linkedin.com/in/belcosta-webdeveloper/",target:"_blank",rel:"noreferrer",children:[Object(n.jsx)(x.c,{})," Linkedin"]})]})]})}var w=c(11),_=c(71),N=c(62),S=c(63),q=c(64),C=c(65),D=c(66),E=c(67),P=c(68),R=c(79),I=c(69),M=c(70);var T=c.p+"static/media/soldout.f0096546.png";function L(e){var t=Object(w.c)((function(e){return e.basket.order})),c=Object(a.useState)(0),s=Object(r.a)(c,2),i=s[0],o=s[1],d=Object(a.useState)(e.product.stock),j=Object(r.a)(d,2),l=j[0],b=(j[1],Object(a.useState)(!1)),p=Object(r.a)(b,2),h=p[0],u=p[1],m=Object(a.useState)(!1),x=Object(r.a)(m,2),k=x[0],f=x[1],v=function(){return f(!k)},g=Object(w.b)();return Object(a.useEffect)((function(){t.map((function(c,n){return c.id===e.product.id&&o(t[n].quantity),i}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)(N.a,{body:!0,width:"100%",height:"200px",children:[Object(n.jsx)(S.a,{top:!0,width:"100%",src:e.product.image,alt:"Card image cap",onClick:v}),Object(n.jsxs)(q.a,{className:"text-center",children:[Object(n.jsx)(C.a,{style:{color:"var(--pink)"},tag:"h4",children:e.product.name}),Object(n.jsxs)(D.a,{className:"m-2",tag:"h5",children:["Price: ",e.product.price,"\u20ac"]}),Object(n.jsxs)("div",{className:"d-flex inline-flex justify-content-center",children:[Object(n.jsx)(E.a,{className:"col-2 button",onClick:function(){o((function(e){return e-1})),i<=l&&u(!1)},disabled:i<1,children:"-"}),Object(n.jsx)(P.a,{className:"col-2 mx-2 input",disabled:!0,type:"number",value:i}),0===l||h?Object(n.jsx)("img",{src:T,alt:"sold-out",id:"sold-out"}):Object(n.jsx)(E.a,{className:"col-2 button",onClick:function(){o((function(e){return e+1})),i===l-1&&u(!0)},children:"+"})]}),Object(n.jsxs)(E.a,{className:"col-2 addCart",onClick:function(){g(function(e,t,c,n){return{type:"ADD_PRODUCT",payload:{id:e,name:t,price:c,qty:n}}}(e.product.id,e.product.name,e.product.price,i)),g({type:"SUM_ORDERS"})},children:["Add to Cart ",Object(n.jsx)(O.a,{})]})]})]}),Object(n.jsxs)(R.a,{isOpen:k,toggle:v,children:[Object(n.jsx)(I.a,{toggle:v,children:e.product.name}),Object(n.jsx)(M.a,{children:Object(n.jsx)("img",{src:e.product.image,alt:"plant"})})]})]},e.product.id)}function U(){var e=Object(w.c)((function(e){return e.products}));return Object(n.jsx)("div",{className:"display-products",children:Object(n.jsx)(_.a,{className:"cardWrapper container",children:e.map((function(e){return Object(n.jsx)(L,{product:e},e.id)}))})})}var A=c(72),W=c.p+"static/media/noStock.4c92d5ce.png";function B(){var e=Object(w.c)((function(e){return e.basket.order})),t=Object(w.c)((function(e){return e.basket.total})),c=Object(w.b)();return 0!==t?Object(n.jsxs)("div",{className:"container  col-sm-10 col-md-8 col-lg-6 cart",children:[Object(n.jsxs)(A.a,{className:"justify-content-center mt-5 ",children:[Object(n.jsx)("thead",{style:{color:"rgb(214,131,141)"},children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"# id"}),Object(n.jsx)("th",{children:"Product"}),Object(n.jsx)("th",{children:"Qty"}),Object(n.jsx)("th",{children:"Price"}),Object(n.jsx)("th",{})]})}),Object(n.jsx)("tbody",{children:e.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.id}),Object(n.jsx)("td",{children:e.title}),Object(n.jsx)("td",{children:e.quantity}),Object(n.jsxs)("td",{children:[e.price*e.quantity,"\u20ac"]}),Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:W,alt:"delete button",id:"delete",onClick:function(n){n.preventDefault(),c(function(e,t,c){return{type:"DEL_ITEM",payload:{index:e,id:t,qty:c}}}(t,e.id,e.quantity)),c({type:"SUM_ORDERS"})}})})]},t)}))}),Object(n.jsx)("tfoot",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{colSpan:"3"}),Object(n.jsxs)("td",{className:"sum",children:[t,"\u20ac"]})]})})]}),Object(n.jsx)(o.b,{className:"goShop",to:"/buy",children:"Buy \u2192"})]}):Object(n.jsx)(v,{text:"Your Cart is empty..."})}function J(){return Object(n.jsx)("div",{className:"buy",children:Object(n.jsx)("h2",{children:"Working on it.."})})}function X(){var e=Object(w.c)((function(e){return e.basket.qtyItem})),t=Object(a.useState)(!1),c=Object(r.a)(t,2),s=c[0],i=c[1];return Object(n.jsxs)(o.a,{children:[Object(n.jsxs)(j.a,{className:"navbar",light:!0,expand:"md",children:[Object(n.jsxs)(l.a,{className:"col-3",href:"/home",children:[Object(n.jsx)(m.a,{style:{color:"var(--pink)",width:"4rem",height:"4rem"}}),"  ",Object(n.jsx)("p",{children:"Online-Shop"})]}),Object(n.jsx)(b.a,{onClick:function(){return i(!s)}}),Object(n.jsxs)(p.a,{isOpen:s,navbar:!0,children:[Object(n.jsxs)(h.a,{className:" col-10",navbar:!0,children:[Object(n.jsx)(u.a,{tag:"h4",children:Object(n.jsx)(o.b,{className:"nav-link",to:"/home",children:"Home"})}),Object(n.jsx)(u.a,{tag:"h4",children:Object(n.jsx)(o.b,{className:"nav-link",to:"/shop",children:"Shop"})}),Object(n.jsx)(u.a,{tag:"h4",children:Object(n.jsx)(o.b,{className:"nav-link",to:"/contact",children:"Contact"})})]}),Object(n.jsxs)(o.b,{className:"col-2 nav-link basket",to:"/cart",children:[Object(n.jsx)("span",{children:Object(n.jsx)(O.a,{})}),Object(n.jsx)("p",{children:e})]})]})]}),Object(n.jsx)(f,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/home",children:Object(n.jsx)(v,{text:"Welcome, We are happy you are here =)"})}),Object(n.jsx)(d.a,{path:"/shop",children:Object(n.jsx)(U,{})}),Object(n.jsx)(d.a,{path:"/cart",children:Object(n.jsx)(B,{})}),Object(n.jsx)(d.a,{path:"/contact",children:Object(n.jsx)(y,{})}),Object(n.jsx)(d.a,{path:"/buy",children:Object(n.jsx)(J,{})})]})]})}function H(){return Object(n.jsx)("div",{children:Object(n.jsx)("footer",{children:Object(n.jsxs)("p",{children:["Made by Isabel Costa"," ",Object(n.jsx)("a",{href:"https://github.com/belcosta",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(x.a,{})})," ",Object(n.jsx)("a",{href:"https://www.linkedin.com/in/belcosta-webdeveloper/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(x.c,{})})]})})})}function V(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(X,{}),Object(n.jsx)(H,{})]})}var G=c(22),z=c(33),K=c(23),Q={basket:{qtyItem:0,order:[],total:0},products:[{id:"a5t1",name:"Chinese Money",price:11,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/10/Pilea_2-600x840.jpg",stock:1},{id:"g5t2",name:"Jesmonite Planter",price:9,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/10/20201022-_DSC0635-1.jpg",stock:12},{id:"js48",name:"Monstera Deliciosa",price:15,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2018/09/20200729-DSC_2666.jpg",stock:10},{id:"t48s",name:"Ludisia Discolor",price:16,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/10/Ludisia_1-600x840.jpg",stock:0},{id:"d7h3",name:"Hoya Lanceolata",price:25,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2019/04/20200409-DSC_4987.jpg",stock:13},{id:"dd0v",name:"Calathea Vittata",price:16,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/05/20200528-DSC_7917.jpg",stock:12},{id:"d7v0",name:"Ph. Birkin",price:17,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2019/10/20200423-DSC_5998.jpg",stock:10},{id:"d8v9",name:"Korbmarante",price:18,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2018/09/Plant-Circle_28-02-20_Photo-by-Savannah-van-der-Niet-5.jpg",stock:4},{id:"9fn3",name:"Begonia Maculata",price:15,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2018/09/20200320-DSC_3360.jpg",stock:8},{id:"d52s",name:"Aglaonema Unnamed",price:16,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2019/07/Plant-Circle_24-Jan-2020_Photo-by-Savannah-van-der-Niet-54.jpg",stock:1},{id:"5df0",name:"Neon Robusta",price:16,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2019/09/Plant-Circle_24-October-2019-46.jpg",stock:5},{id:"d7vf",name:"Zirkus Topf",price:63.5,image:"https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2019/07/Plant-Circle_30-May-2019_Photo-by-Savannah-van-der-Niet-35-2.jpg",stock:12}]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":var c={id:t.payload.id,title:t.payload.name,price:t.payload.price,quantity:t.payload.qty},n=e.products.map((function(e){return e.id===t.payload.id&&(e.stock=e.stock-t.payload.qty),e}));return e.basket.order.push(c),Object(K.a)(Object(K.a)({},e),{},{basket:{order:e.basket.order,qtyItem:e.basket.order.length},products:Object(z.a)(n)});case"REM_PRODUCT":return e.basket.order.map((function(c,n){if(c.id===t.payload.id&&(c.quantity--,0===c.quantity)){var a=n;-1!==a&&(e.basket.order.splice(a,1),e.basket.qtyItem=e.basket.order.length)}return c})),e.products.map((function(e){return e.id===t.payload.id&&(e.stock=e.stock+1),e})),e;case"SUM_ORDERS":var a,s=[];e.basket.total=0;var i=function(e,t){return e+t};return e.basket.order.map((function(e){return a=e.price*e.quantity,s=[].concat(Object(z.a)(s),[a])})),e.basket.order.length>0&&(e.basket.total=s.reduce(i)),e;case"DEL_ITEM":return e.basket.order.splice(t.payload,1),e.products.map((function(e){return e.id===t.payload.id&&(e.stock=e.stock+t.payload.qty),e})),Object(K.a)(Object(K.a)({},e),{},{basket:{order:e.basket.order,qtyItem:e.basket.order.length,total:e.basket.total}});default:return e}},Z=Object(G.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),F=Object(G.c)(Y,Z);i.a.render(Object(n.jsx)(w.a,{store:F,children:Object(n.jsx)(V,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.d1541602.chunk.js.map