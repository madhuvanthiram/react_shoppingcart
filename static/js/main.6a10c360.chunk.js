(this.webpackJsonpreact_shoppingcart=this.webpackJsonpreact_shoppingcart||[]).push([[0],{21:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(0),i=n.n(a),c=n(8),r=n.n(c);n(28),n.p,n(29);var o=n(10),l=n(11),d=n(16),h=n(15),j=n.p+"static/media/pic1.d3098596.jpg",u=n.p+"static/media/pic2.0068276e.png",b=n.p+"static/media/pic3.3435019e.jpg",m=(n(21),n(20)),p=n(22),O=n(13),f=n(17),y=n(14),x=n(18),C=(n(30),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={setShow:!1,showcart:!1,Amounttopay:0},t}return Object(l.a)(n,[{key:"handleCloseModal",value:function(){this.setState({setShow:!1})}},{key:"handleOpenModal",value:function(){this.setState({setShow:!0})}},{key:"handleClickIncrement",value:function(t){var e=this.props.myarray;e[t].Quantity+=1,this.setState((function(t){return{myarray:e}}))}},{key:"handledelete",value:function(t){var e=this.props.myarray;console.log(e[t].inCart),e[t].inCart=!1,e.splice(t,1),this.props.formatcount(),this.setState((function(t){return{myarray:e}}))}},{key:"handleClickDecrement",value:function(t){var e=this.props.myarray;e[t].Quantity>0&&(e[t].Quantity-=1),this.setState((function(t){return{myarray:e}}))}},{key:"render",value:function(){for(var t=this,e=this.props.myarray,n=0,a=0;a<this.props.myarray.length;a++)n+=this.props.myarray[a].price*this.props.myarray[a].Quantity;var i=e.map((function(e,n){return Object(s.jsx)("div",{children:Object(s.jsx)("table",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsxs)("td",{children:[e.price," S$"]}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{className:"btn btn-secondary",onClick:t.handleClickIncrement.bind(t,n),children:Object(s.jsx)("i",{className:"fa fa-plus-circle","aria-hidden":"true"})})}),Object(s.jsx)("td",{children:e.Quantity}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{className:"btn btn-info m-2",onClick:t.handleClickDecrement.bind(t,n),children:Object(s.jsx)("i",{className:"fa fa-minus-circle","aria-hidden":"true"})})}),Object(s.jsx)("td",{children:"Amount"}),Object(s.jsxs)("td",{children:[e.price*e.Quantity,"SGD"]}),Object(s.jsxs)("td",{children:[Object(s.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(s.jsx)("span",{style:{fontSize:12},className:"btn btn-danger",onClick:t.handledelete.bind(t,n),children:Object(s.jsx)("i",{className:"fa fa-trash-o"})})]})]})})},e.id)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(s.jsx)("div",{className:"col-md-9",children:Object(s.jsx)("span",{style:{fontSize:30},onClick:this.handleOpenModal.bind(this),children:Object(s.jsx)("i",{className:"fa fa-shopping-cart fa-lg m-2",children:" "})})}),Object(s.jsxs)(p.a,{size:"lg",show:this.state.setShow,onHide:this.handleCloseModal.bind(this),children:[Object(s.jsx)(f.a,{closeButton:!0,children:Object(s.jsx)(x.a,{children:"Shopping Bag"})}),Object(s.jsx)(O.a,{children:i}),Object(s.jsxs)(y.a,{children:[Object(s.jsx)("button",{onClick:this.handleCloseModal.bind(this),children:"OK"}),Object(s.jsx)("p",{children:Object(s.jsxs)("b",{children:["TotalAmount:",n,"S$"]})})]})]})]})}}]),n}(a.Component)),v=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={count:0,showModal:!1,disabledButtons:[],newcart:[],showcomp:!1,Shoppinglist:[{id:1,img:j,name:"Item1",price:"10",Quantity:0,inCart:!1},{id:2,img:u,name:"Item2",price:"15",Quantity:0,inCart:!1},{id:3,img:b,name:"Item3",price:"26",Quantity:0,inCart:!1}]},t.formatCount=function(){console.log("inside format"),t.setState({count:t.state.count-1})},t}return Object(l.a)(n,[{key:"AddToCart",value:function(t,e){console.log("inside addto"),this.setState({showcomp:!0}),console.log(this.state.showcomp),this.setState({count:this.state.count+1});var n=this.state.Shoppinglist.find((function(e){return e.id===t}));console.log(n.inCart),n.inCart=!0;this.state.newcart.push(n)}},{key:"render",value:function(){var t=this,e=Object(s.jsx)(C,{myarray:this.state.newcart,formatcount:this.formatCount}),n=this.state.Shoppinglist.map((function(e,n){return Object(s.jsx)("div",{children:Object(s.jsx)("table",{className:"items",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsxs)("td",{children:[e.price,"SGD"]}),Object(s.jsx)("td",{children:e.inCart}),Object(s.jsxs)("td",{children:["   ",Object(s.jsx)("button",{className:"btn btn-primary m-2",onClick:t.AddToCart.bind(t,e.id,n),disabled:e.inCart,children:e.inCart?"Already In Cart":"Add To Cart"})]})]})})},e.id)}));return Object(s.jsxs)("div",{children:[this.state.showcomp?e:null,Object(s.jsx)("div",{className:"col-md-10",children:0===this.state.count?Object(s.jsxs)(m.a,{variant:"info",children:[" ",Object(s.jsx)("b",{children:"No items in cart"})]}):Object(s.jsxs)(m.a,{variant:"primary",children:[this.state.count," Items"]})}),Object(s.jsx)("h1",{children:n})]})}}]),n}(a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.6a10c360.chunk.js.map