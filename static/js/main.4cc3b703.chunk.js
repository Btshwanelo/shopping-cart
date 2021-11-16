(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},55:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),i=c(18),a=c.n(i),s=(c(39),c(40),"ADD_CART"),o="REMOVE_CART",l="INCREMENT",d="DECREMENT",j="CHECKOUT",u="LOGIN",b="CLEAN_ERROR_MESSAGE",m="LOGOUT",O="REGISTER",h=function(e){return function(t){t({type:s,payload:e})}},p=function(e){return function(t){t({type:o,payload:e})}},f=function(e){return function(t){t({type:l,payload:e})}},x=function(e){return function(t){t({type:d,payload:e})}},_=function(e){return function(t){t({type:u,payload:e})}},g=function(e){return function(t){t({type:O,payload:e})}},v=function(){return function(e){e({type:j})}},y=function(){return function(e){e({type:m})}},N=function(){return function(e){e({type:b})}},C=c(8),w=c.n(C),E=c(6),k=c(31),S=c(12),T=(c(55),c(1)),R=Object(E.b)((function(e){return{products:e.products,users:e.users,cart:e.cart}}),{logOut:y})((function(e){var t=e.cart,c=e.users,n=e.logOut;return Object(T.jsxs)("div",{className:"nav",children:[Object(T.jsx)("div",{className:"nav__logo",children:Object(T.jsx)(S.b,{to:"/",children:"Logo"})}),Object(T.jsx)("di",{className:"nav__avatar",children:Object(T.jsxs)(S.b,{to:"/cart",children:[Object(T.jsx)(k.a,{}),Object(T.jsxs)("span",{children:["(",t.items.length,")"]})]})}),Object(T.jsx)("div",{className:"nav__login",children:c.session.name?Object(T.jsx)("button",{onClick:function(){return n()},children:"Log Out"}):Object(T.jsx)(S.b,{to:"/login",children:c.session.name?"Log Out":"Log In"})})]})})),A=(c(59),function(e){var t=e.onClick,c=e.children;return Object(T.jsx)("button",{onClick:t,className:"lgButton",children:c})}),I=c(32),F=c(26),M=(c(60),Object(E.b)((function(e){return{}}),{removeFromCart:p,increment:f,decrement:x})((function(e){var t=e.item,c=e.removeFromCart,n=e.increment,r=e.decrement;return Object(T.jsxs)("div",{className:"cart__item",children:[Object(T.jsx)("div",{className:"cart__item__img",children:Object(T.jsx)("img",{src:"https://via.placeholder.com/150"})}),Object(T.jsx)("div",{className:"cart__item__title",children:t.title}),Object(T.jsx)("div",{className:"cart__item__delete",children:Object(T.jsx)("button",{onClick:function(){return c(t.id)},children:Object(T.jsx)(I.a,{})})}),Object(T.jsxs)("div",{className:"cart__item__quantity",children:[Object(T.jsx)("button",{onClick:function(){t.quantity>1&&r(t)},children:Object(T.jsx)(F.a,{})}),Object(T.jsx)("input",{value:t.quantity}),Object(T.jsx)("button",{onClick:function(){return n(t)},children:Object(T.jsx)(F.b,{})})]}),Object(T.jsxs)("div",{className:"cart__item__price",children:["R",t.price]}),Object(T.jsxs)("div",{className:"cart__item__total",children:["R",t.total]})]},t.id)}))),U=Object(E.b)((function(e){return{cart:e.cart}}))((function(e){var t=e.cart;return Object(T.jsx)(T.Fragment,{children:t.items.map((function(e){return Object(T.jsx)(M,{item:e})}))})})),L=Object(E.b)((function(e){return{cart:e.cart,users:e.users}}),{removeFromCart:p,increment:f,decrement:x,checkout:v})((function(e){for(var t=e.cart,c=e.users,n=e.checkout,r=0,i=0;i<t.items.length;i++)r+=t.items[i].total;return Object(T.jsxs)("div",{className:"cart",children:[Object(T.jsx)(R,{}),Object(T.jsx)("div",{className:"cart__header",children:Object(T.jsx)("h3",{children:Object(T.jsx)("b",{children:"Shopping Cart"})})}),Object(T.jsxs)("div",{className:"cart__item",children:[Object(T.jsx)("div",{className:"cart__item__img",children:"Image |"}),Object(T.jsx)("div",{className:"cart__item__title",children:"Title |"}),Object(T.jsx)("div",{className:"cart__item__delete",children:"Delete |"}),Object(T.jsx)("div",{className:"cart__item__delete",children:"Quantity |"}),Object(T.jsx)("div",{className:"cart__item__price",children:"Price |"}),Object(T.jsx)("div",{className:"cart__item__total",children:"Total"})]}),Object(T.jsx)(U,{}),Object(T.jsxs)("div",{className:"cart__checkout",children:[Object(T.jsxs)("p",{children:["No of Items: ",t.items.length]}),Object(T.jsxs)("p",{children:["Total Cost: R",r]})]}),Object(T.jsx)("button",{className:t.items.length>=1?"cart__checkout__button":"cart__checkout__button__disable",onClick:c.session.name?function(){w.a.fire({text:"Your order hasbeen processed",icon:"success"}),n()}:function(){w.a.fire({text:"You need to log in before you can checkout",icon:"error"})},children:"CheckOut"})]})})),q=(c(61),c(62),Object(E.b)((function(e){return{products:e.products,cart:e.cart}}),{addToCart:h})((function(e){var t=e.item,c=e.addToCart,n=e.cart;return Object(T.jsxs)("div",{className:"home__products__items__card",children:[Object(T.jsx)("img",{src:t.image,alt:t.title,style:{width:"100%",height:"100px"}}),Object(T.jsx)("p",{children:t.title}),Object(T.jsxs)("p",{class:"price",children:["R",t.price]}),Object(T.jsx)("button",{onClick:function(){return function(e){n.items.find((function(t){return t.id===e.id}))?w.a.fire({position:"top-end",icon:"error",width:"200px",title:"Already added to cart",showConfirmButton:!1,timer:1500}):(w.a.fire({position:"top-end",icon:"success",title:"Added to cart",width:"200px",showConfirmButton:!1,timer:1500}),c(e))}(t)},children:"Add to Cart"})]},t.id)}))),D=Object(E.b)((function(e){return{products:e.products}}))((function(e){var t=e.products;return Object(T.jsx)("div",{className:"home__products__items",children:t.map((function(e){return Object(T.jsx)(q,{item:e})}))})})),P=function(){return Object(T.jsxs)("div",{className:"home",children:[Object(T.jsx)(R,{}),Object(T.jsxs)("div",{className:"home__products",children:[Object(T.jsx)("div",{className:"home__products__heading",children:Object(T.jsx)("h1",{children:"Products"})}),Object(T.jsx)(D,{})]}),Object(T.jsx)("div",{className:"home__footer",children:Object(T.jsx)("p",{children:"Fake Store Footer"})})]})},B=c(3),G=c(20),J=c(5),H=(c(63),Object(E.b)((function(e){var t=e.users;return{cart:e.cart,users:t}}),{loginUser:_,cleanErrorMessage:N})((function(e){var t=e.loginUser,c=e.users,r=e.cleanErrorMessage,i=Object(n.useState)({email:"",password:""}),a=Object(G.a)(i,2),s=a[0],o=a[1];if(c.session.name)return Object(T.jsx)(J.a,{to:"/"});return Object(T.jsxs)("div",{className:"login",children:[Object(T.jsx)(R,{}),Object(T.jsxs)("div",{className:"login__card",children:[Object(T.jsx)("h1",{children:Object(T.jsx)("b",{children:"Sign In"})}),Object(T.jsx)("input",{type:"text",value:s.email,onChange:function(e){return o(Object(B.a)(Object(B.a)({},s),{},{email:e.target.value}))},placeholder:"Email Address"}),Object(T.jsx)("input",{type:"password",value:s.password,onChange:function(e){return o(Object(B.a)(Object(B.a)({},s),{},{password:e.target.value}))},placeholder:"Password"}),Object(T.jsx)(A,{onClick:function(){return function(e){if(""!==e.email&&""!==e.password)return""!==c.message?(w.a.fire({text:"".concat(c.message),icon:"error",width:"300px"}),void r()):void t(e);w.a.fire({text:"One or more field is empty",icon:"error",width:"300px"})}(s)},children:"Sign In"})]}),Object(T.jsxs)("p",{children:["Dont have an account ? ",Object(T.jsx)(S.b,{to:"/register",children:"Sign Up"})]})]})}))),V=(c(64),c(65),function(e){var t=e.heading,c=e.children;return Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("h1",{children:Object(T.jsx)("b",{children:t})}),c]})}),Y=Object(E.b)((function(e){return{cart:e.cart,users:e.users}}),{registerUser:g,cleanErrorMessage:N})((function(e){var t=e.registerUser,c=e.users,r=e.cleanErrorMessage,i=Object(n.useState)({name:"",email:"",password:""}),a=Object(G.a)(i,2),s=a[0],o=a[1];return Object(T.jsxs)("div",{className:"register",children:[Object(T.jsx)(R,{}),Object(T.jsxs)(V,{heading:"Sign Up",children:[Object(T.jsx)("input",{type:"text",value:s.name,onChange:function(e){return o(Object(B.a)(Object(B.a)({},s),{},{name:e.target.value}))},placeholder:"First Name"}),Object(T.jsx)("input",{type:"email",value:s.email,onChange:function(e){return o(Object(B.a)(Object(B.a)({},s),{},{email:e.target.value}))},placeholder:"Email Address"}),Object(T.jsx)("input",{type:"password",value:s.password,onChange:function(e){return o(Object(B.a)(Object(B.a)({},s),{},{password:e.target.value}))},placeholder:"Password"}),Object(T.jsx)(A,{onClick:function(){return function(e){if(""!==e.name&&""!==e.email&&""!==e.password){if(""!==c.message)return w.a.fire({text:"".concat(c.message),icon:"error",width:"300px"}),void r();t(e),w.a.fire({text:"User registered",icon:"success",width:"300px"}),o({name:"",email:"",password:""})}else w.a.fire({text:"All fields have to correctly filled",icon:"error",width:"300px"})}(s)},children:"Sign In"})]}),Object(T.jsxs)("p",{children:["Already have an account ? ",Object(T.jsx)(S.b,{to:"/login",children:"Sign In"})]})]})}));var K=function(){return Object(T.jsx)(S.a,{children:Object(T.jsxs)(J.d,{children:[Object(T.jsx)(J.b,{exact:!0,path:"/",children:Object(T.jsx)(P,{})}),Object(T.jsx)(J.b,{exact:!0,path:"/cart",component:L}),Object(T.jsx)(J.b,{exact:!0,path:"/login",component:H}),Object(T.jsx)(J.b,{exact:!0,path:"/register",component:Y})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))},W=c(14),z=c(34),X=c(33),Z=c(15),$={items:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var c=Object(B.a)(Object(B.a)({},t.payload),{},{quantity:1,total:t.payload.price});return Object(B.a)(Object(B.a)({},e),{},{items:[c].concat(Object(Z.a)(e.items))});case o:return Object(B.a)(Object(B.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload}))});case j:return Object(B.a)(Object(B.a)({},e),{},{items:[]});case l:var n=e.items.find((function(e){return e.id===t.payload.id})),r=Object(B.a)(Object(B.a)({},n),{},{quantity:n.quantity+1,total:n.total+n.price});return Object(B.a)(Object(B.a)({},e),{},{items:[r].concat(Object(Z.a)(e.items.filter((function(e){return e.id!==t.payload.id}))))});case d:var i=e.items.find((function(e){return e.id===t.payload.id})),a=Object(B.a)(Object(B.a)({},i),{},{quantity:i.quantity-1,total:i.total-i.price});return Object(B.a)(Object(B.a)({},e),{},{items:[a].concat(Object(Z.a)(e.items.filter((function(e){return e.id!==t.payload.id}))))});default:return e}},te=[{id:1,title:"Jogger",price:100,image:"https://via.placeholder.com/150"},{id:2,title:"T-shirt",price:250,image:"https://via.placeholder.com/150"},{id:3,title:"Short",price:300,image:"https://via.placeholder.com/150"},{id:4,title:"Jean",price:400,image:"https://via.placeholder.com/150"},{id:4,title:"Cap",price:120,image:"https://via.placeholder.com/150"},{id:5,title:"Hoodie",price:300,image:"https://via.placeholder.com/150"},{id:6,title:"Vest",price:200,image:"https://via.placeholder.com/150"}],ce=function(){var e=arguments.length>1?arguments[1]:void 0;return e.type,te},ne={list:[{name:"123",email:"123@gmail.com",password:"123"}],session:{},message:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var c=e.list.find((function(e){return e.email===t.payload.email&&e.password===t.payload.password}));return c?Object(B.a)(Object(B.a)({},e),{},{message:"",session:c}):Object(B.a)(Object(B.a)({},e),{},{message:"Couldnt find user"});case O:var n=e.list.find((function(e){return e.email===t.payload.email}));return n?Object(B.a)(Object(B.a)({},e),{},{message:"User already exist"}):Object(B.a)(Object(B.a)({},e),{},{message:"",list:[].concat(Object(Z.a)(e.list),[t.payload])});case m:return Object(B.a)(Object(B.a)({},e),{},{session:{}});case b:return Object(B.a)(Object(B.a)({},e),{},{message:""});default:return e}},ie=Object(W.combineReducers)({products:ce,users:re,cart:ee}),ae=Object(W.createStore)(ie,{},Object(X.composeWithDevTools)(Object(W.applyMiddleware)(z.a)));a.a.render(Object(T.jsx)(E.a,{store:ae,children:Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(K,{})})}),document.getElementById("root")),Q()}},[[66,1,2]]]);
//# sourceMappingURL=main.4cc3b703.chunk.js.map