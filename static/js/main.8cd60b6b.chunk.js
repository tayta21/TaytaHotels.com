(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{14:function(e,a,t){},47:function(e,a,t){e.exports=t(65)},52:function(e,a,t){},53:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},60:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),i=(t(52),t(53),t(14),t(11)),o=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand"},"TaytaHotels.com"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(i.b,{to:"/"},r.a.createElement("a",{className:"nav-item nav-link active"}," Home ")),r.a.createElement(i.b,{to:"/Hotels"},r.a.createElement("a",{className:"nav-item nav-link"},"Hotels")),r.a.createElement(i.b,{to:"/Login"}," ",r.a.createElement("a",{className:"nav-item nav-link"},"Login")))))},s=t(38),m=t.n(s),d=t(37),u=t.n(d),h={backgroundColor:"#f0e5f6",textAlign:"left",padding:"20px",position:"flex",left:"0",bottom:"0",height:"150px",width:"100%",border:"2px solid black"};var f=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:h},r.a.createElement("h5",null,"TaytaHotels.com is an online agency for lodging reservations "),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(u.a,{fontSize:"large",color:"secondary"}),r.a.createElement("h5",null,"(+216) 22 09 22 32 ")),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(m.a,{fontSize:"large",color:"secondary"}),r.a.createElement("h5",null,"ahmedtritar21@gmail.com "))))};var b=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o,null)),r.a.createElement("div",{className:"backgroundimg"},r.a.createElement("div",{className:"home"},r.a.createElement("h1",{className:"hometext"},"Reserve Room ",r.a.createElement("br",null)," for Family Vacation"),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/hotels"},r.a.createElement("button",{className:"b"}," Book now ")))),r.a.createElement("div",null,r.a.createElement(f,null)))},p=t(17),g=t(18),v=t(20),E=t(19),w=(t(60),t(43)),y=t(9),k=t(77),x=t(78),S=function(e){return r.a.createElement("div",{className:"listworker"},e.workers.map((function(a){return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(k.a,{style:{width:"18rem"}},r.a.createElement(x.a,{variant:"flush"},r.a.createElement(x.a.Item,null,"name : ",a.name),r.a.createElement(x.a.Item,null,"id : ",a.idcard),r.a.createElement(x.a.Item,null,"post : ",a.post),r.a.createElement(x.a.Item,null,r.a.createElement("button",{onClick:function(){return e.getInput(a)},className:"bac"},"click to edit")),r.a.createElement(x.a.Item,null,r.a.createElement("button",{onClick:function(){return e.remove(a)},className:"bac"},"click to delete")))))})))},j=function(e){var a=Object(n.useState)(""),t=Object(y.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),o=Object(y.a)(i,2),s=o[0],m=o[1],d=Object(n.useState)(""),u=Object(y.a)(d,2),h=u[0],f=u[1],b=Object(n.useState)(null),p=Object(y.a)(b,2),g=p[0],v=p[1],E=Object(n.useState)([{name:"ahmed",idcard:"01254365874",post:"admin"}]),k=Object(y.a)(E,2),x=k[0],j=k[1];return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"100vw",height:"78vh",display:"grid",backgroundColor:"#f0e5f6"}},r.a.createElement("div",{style:{margin:"26px"}},r.a.createElement("h2",null,g?"from here you can update user":"from here you can add users :"),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:l,placeholder:"name",style:{borderRadius:"50px",marginRight:"15px"}}),r.a.createElement("input",{onChange:function(e){return m(e.target.value)},value:s,placeholder:"id",style:{borderRadius:"50px",marginRight:"15px"}}),r.a.createElement("input",{onChange:function(e){return f(e.target.value)},value:h,placeholder:"post",style:{borderRadius:"50px"}}),r.a.createElement("button",{onClick:g?function(){var e=x.map((function(e){return e!==g?e:{name:l,idcard:s,post:h}}));j(e),v(null),c(""),m(""),f("")}:function(){j([].concat(Object(w.a)(x),[{name:l,idcard:s,post:h}])),c(""),m(""),f("")},className:"bac"}," ",g?"update user":"Add new user")),r.a.createElement("div",{style:{margin:"2px"}},r.a.createElement(S,{workers:x,remove:function(e){return function(e){var a=x.filter((function(a){return a!==e}));j(a)}(e)},getInput:function(e){return function(e){c(e.name),m(e.idcard),f(e.post),v(e)}(e)}})),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.handleShowtwo,className:"ba"},"log out"))))},C=t(76),O=function(e){return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"100vw",height:"78vh",display:"grid",backgroundColor:"#f0e5f6"}},r.a.createElement("div",{style:{padding:"20px",maxWidth:"430px",maxHeight:"420px",marginLeft:"40%",marginTop:"15vh"}},r.a.createElement("h2",null,"this is the admin page please login:"),r.a.createElement("br",null),r.a.createElement("form",{style:{backgroundColor:"#f0e5f6"}},r.a.createElement(C.a.Group,{controlId:"formBasicEmail"},r.a.createElement(C.a.Label,null,"Email address"),r.a.createElement(C.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement(C.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(C.a.Group,{controlId:"formBasicPassword"},r.a.createElement(C.a.Label,null,"Password"),r.a.createElement(C.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement("button",{onClick:e.handleShow,className:"ba"},"submit")))))},N=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).handleShow=function(){n.setState({logedIn:!1})},n.handleShowtwo=function(){n.setState({logedIn:!0})},n.state={logedIn:!0},n}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o,null)),this.state.logedIn?r.a.createElement("div",{style:{width:"100vw",height:"78vh",display:"grid",backgroundColor:"#f0e5f6"}},r.a.createElement(O,{handleShow:this.handleShow})):r.a.createElement("div",null,r.a.createElement(j,{handleShowtwo:this.handleShowtwo})),r.a.createElement("div",null,r.a.createElement(f,null)))}}]),t}(n.Component),H=t(26),L=t.n(H),q=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={rating:0},e}return Object(g.a)(t,[{key:"onStarClick",value:function(e,a,t){this.setState({rating:e}),this.props.getRating(e)}},{key:"render",value:function(){var e=this.state.rating;return r.a.createElement("div",{style:{marginLeft:"30px"}},r.a.createElement("h3",null," min rating filter : ",e),r.a.createElement(L.a,{name:"rate1",starCount:5,value:e,onStarClick:this.onStarClick.bind(this)}))}}]),t}(r.a.Component),B=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={filter:""},e.handleChange=function(a){e.setState({filter:a.target.value}),e.props.getFilter(a.target.value)},e}return Object(g.a)(t,[{key:"render",value:function(){var e=this.state,a=e.filter;e.setFilter;return r.a.createElement("div",null,r.a.createElement("input",{style:{margin:"12px"},placeholder:"filter",value:a,onChange:this.handleChange}))}}]),t}(r.a.Component),I=t(44),P=function(e){return r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement(k.a,{style:{width:"19rem",padding:"4px"}},r.a.createElement(k.a.Img,{style:{borderRadius:"15px"},variant:"top",src:e.hotel.img}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e.hotel.name),r.a.createElement(k.a.Text,null,e.hotel.description)),r.a.createElement(x.a,{className:"list-group-flush"},r.a.createElement(I.a,null,e.hotel.location),r.a.createElement(I.a,null,r.a.createElement(L.a,{starCount:5,value:e.hotel.rate}))),r.a.createElement(k.a.Body,null,r.a.createElement(i.b,{to:"/Confirmation/".concat(e.hotel.id)},r.a.createElement("button",{className:"ba"},"reserve now")))))},T=function(e){return r.a.createElement("div",{className:"listhotels"},e.hotels.map((function(e){return r.a.createElement(P,{hotel:e})})))},F=function(){var e=Object(n.useState)([{id:1,img:"https://cf.bstatic.com/xdata/images/hotel/square200/75881056.webp?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=",name:"La Badira - Adult Only ",location:"hammamet",rate:5,description:"Offering 3 outdoor pools and a private beach access, La Badira - Adult Only is located in Hammamet. Free WiFi access is available."},{id:2,img:"https://cf.bstatic.com/xdata/images/hotel/square200/7279065.jpg?k=c57ca757cac0891f30b7117740da9367cd5e3c6729471acf0932c81c54e7dfe8&o=",name:"Chich Khan Hotel ",location:"hammamet",rate:4,description:"All-inclusive Chich Khan is located near Hammamet, 200 m from a private beach. It offers wellness and beauty treatments, an indoor and outdoor swimming pool and a tennis court."},{id:3,img:"https://cf.bstatic.com/xdata/images/hotel/square200/114157516.jpg?k=7d8b25adfd6fa3158faef3c60c3e3d73d5f3b9cdcaf46daab1c9ed5ea5bf1284&o=",name:"La Playa Hotel Club",location:"hammamet",rate:3,description:"Situ\xe9 \xe0 Hammamet, l'\xe9tablissement La Playa Hotel Club propose une piscine ext\xe9rieure et une piscine int\xe9rieure. Vous profiterez d'une connexion Wi-Fi gratuite dans les parties communes."},{id:4,img:"https://cf.bstatic.com/xdata/images/hotel/square200/120700636.webp?k=880fea7f22d12c1b727829a33bcc58b2e9e1e0a9bd08cb6bb211c8b7d67ab84f&o=",name:"M\xf6venpick Resort & Marine Spa Sousse",location:"sousse",rate:5,description:"M\xf6venpick Resort & Marine Spa\u2019s restaurants and snack bars serve international cuisine, such as Mediterranean, Japanese and grills. The several bars and cafes, such as the pool-side bar and Aga Caf\xe9, serve a range of beverages. A buffet breakfast is served daily. "},{id:5,img:"https://cf.bstatic.com/xdata/images/hotel/square200/181700108.webp?k=23a52229be76a4cd96b32fa699f878132ebffde9fe800403628fcf3918289a96&o=",name:"Marhaba Royal Salem",location:"sousse",rate:4,description:" With its own private beach area and surrounded by 7 hectares of garden and forest, this hotel features 2 pools, a spa and several sports facilities. It offers air-conditioned rooms, Wi-Fi access and a beach-front BBQ"},{id:6,img:"https://cf.bstatic.com/xdata/images/hotel/square200/154995371.webp?k=2c2576640d5fa5080645aca108d77a19a879f4ad078a897ffc45e711f492e50d&o=",name:"Hotel Sindbad Sousse",location:"sousse",rate:3,description:" Hotel Sindbad Sousse has a restaurant, seasonal outdoor swimming pool, a bar and shared lounge in Sousse. Featuring a garden, the hotel is close to several noted attractions, around an 8-minute walk from Thalassa Sousse Beach, half a kilometer from Hammam Sousse Beach and an 11-minute walk from Las Vegas Beach. The property has a 24-hour front desk, room service and currency exchange for guests."},{id:7,img:"https://cf.bstatic.com/xdata/images/hotel/square200/73347792.jpg?k=88fcb8dc71350c8bd7be3434398906cb25b0cc77ba8a1ece76c70c41e8b44bc9&o=",name:"Hasdrubal Prestige Djerba",location:"djerba",rate:5,description:" Located on the Sidi Mahrez beach in Djerba, The Hasdrubal Prestige Thalassa & Spa Djerba offers luxurious 5-star accommodations, a spa and free Wi-Fi."},{id:8,img:"https://cf.bstatic.com/xdata/images/hotel/square200/116043715.jpg?k=a4b1a50e0ee7f355636553068e0818d932a24bc277d1fa58d827fea7ed5d353b&o=",name:"Vincci Helios Beach",location:"djerba",rate:4,description:"This all-inclusive Vincci Hotel is on the western cost of Djerba Island, in southern Tunisian. It has a large outdoor swimming pool, a sunbathing terrace and a beach-side bar. "},{id:9,img:"https://cf.bstatic.com/xdata/images/hotel/square200/201479374.jpg?k=a7c022a1acefec1bc1f05ecc51688d62798b97e6b7cac0b368c39e61634271e3&o=",name:"Le Petit Palais & Spa",location:"djerba",rate:3,description:" At the hotel, all rooms are equipped with a balcony with a pool view. Le Petit Palais & Spa has some units with garden views, and the rooms include a terrace. All guest rooms feature a closet."}]),a=Object(y.a)(e,2),t=a[0],l=(a[1],Object(n.useState)("")),c=Object(y.a)(l,2),i=c[0],o=c[1],s=Object(n.useState)(""),m=Object(y.a)(s,2),d=m[0],u=m[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(B,{getFilter:function(e){o(e)}}),r.a.createElement(q,{getRating:function(e){u(e)}})),r.a.createElement("div",null,r.a.createElement(T,{hotels:t.filter((function(e){return e.name.toLocaleLowerCase().includes(i.toLocaleLowerCase())&&e.rate>=d}))}))))},A=function(){return r.a.createElement("div",{className:"backgroundb"},r.a.createElement("div",null,r.a.createElement(o,null)),r.a.createElement("div",{style:{width:"99vw",display:"grid",backgroundColor:"#f0e5f6"}},r.a.createElement(F,null)),r.a.createElement("div",null,r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(62),t(63);var R=t(5),M=function(e){console.log(e.match.params.id);var a=[{id:1,img:"https://cf.bstatic.com/xdata/images/hotel/square200/75881056.webp?k=5ae83fc38270b09384307c99fd41d7e497b79c73e54d7c2538f011d18c011d3d&o=",name:"La Badira - Adult Only ",location:"hammamet",rate:5,description:"Offering 3 outdoor pools and a private beach access, La Badira - Adult Only is located in Hammamet. Free WiFi access is available."},{id:2,img:"https://cf.bstatic.com/xdata/images/hotel/square200/7279065.jpg?k=c57ca757cac0891f30b7117740da9367cd5e3c6729471acf0932c81c54e7dfe8&o=",name:"Chich Khan Hotel ",location:"hammamet",rate:4,description:"All-inclusive Chich Khan is located near Hammamet, 200 m from a private beach. It offers wellness and beauty treatments, an indoor and outdoor swimming pool and a tennis court."},{id:3,img:"https://cf.bstatic.com/xdata/images/hotel/square200/114157516.jpg?k=7d8b25adfd6fa3158faef3c60c3e3d73d5f3b9cdcaf46daab1c9ed5ea5bf1284&o=",name:"La Playa Hotel Club",location:"hammamet",rate:3,description:"Situ\xe9 \xe0 Hammamet, l'\xe9tablissement La Playa Hotel Club propose une piscine ext\xe9rieure et une piscine int\xe9rieure. Vous profiterez d'une connexion Wi-Fi gratuite dans les parties communes."},{id:4,img:"https://cf.bstatic.com/xdata/images/hotel/square200/120700636.webp?k=880fea7f22d12c1b727829a33bcc58b2e9e1e0a9bd08cb6bb211c8b7d67ab84f&o=",name:"M\xf6venpick Resort & Marine Spa Sousse",location:"sousse",rate:5,description:"M\xf6venpick Resort & Marine Spa\u2019s restaurants and snack bars serve international cuisine, such as Mediterranean, Japanese and grills. The several bars and cafes, such as the pool-side bar and Aga Caf\xe9, serve a range of beverages. A buffet breakfast is served daily. "},{id:5,img:"https://cf.bstatic.com/xdata/images/hotel/square200/181700108.webp?k=23a52229be76a4cd96b32fa699f878132ebffde9fe800403628fcf3918289a96&o=",name:"Marhaba Royal Salem",location:"sousse",rate:4,description:" With its own private beach area and surrounded by 7 hectares of garden and forest, this hotel features 2 pools, a spa and several sports facilities. It offers air-conditioned rooms, Wi-Fi access and a beach-front BBQ"},{id:6,img:"https://cf.bstatic.com/xdata/images/hotel/square200/154995371.webp?k=2c2576640d5fa5080645aca108d77a19a879f4ad078a897ffc45e711f492e50d&o=",name:"Hotel Sindbad Sousse",location:"sousse",rate:3,description:" Hotel Sindbad Sousse has a restaurant, seasonal outdoor swimming pool, a bar and shared lounge in Sousse. Featuring a garden, the hotel is close to several noted attractions, around an 8-minute walk from Thalassa Sousse Beach, half a kilometer from Hammam Sousse Beach and an 11-minute walk from Las Vegas Beach. The property has a 24-hour front desk, room service and currency exchange for guests."},{id:7,img:"https://cf.bstatic.com/xdata/images/hotel/square200/73347792.jpg?k=88fcb8dc71350c8bd7be3434398906cb25b0cc77ba8a1ece76c70c41e8b44bc9&o=",name:"Hasdrubal Prestige Djerba",location:"djerba",rate:5,description:" Located on the Sidi Mahrez beach in Djerba, The Hasdrubal Prestige Thalassa & Spa Djerba offers luxurious 5-star accommodations, a spa and free Wi-Fi."},{id:8,img:"https://cf.bstatic.com/xdata/images/hotel/square200/116043715.jpg?k=a4b1a50e0ee7f355636553068e0818d932a24bc277d1fa58d827fea7ed5d353b&o=",name:"Vincci Helios Beach",location:"djerba",rate:4,description:"This all-inclusive Vincci Hotel is on the western cost of Djerba Island, in southern Tunisian. It has a large outdoor swimming pool, a sunbathing terrace and a beach-side bar. "},{id:9,img:"https://cf.bstatic.com/xdata/images/hotel/square200/201479374.jpg?k=a7c022a1acefec1bc1f05ecc51688d62798b97e6b7cac0b368c39e61634271e3&o=",name:"Le Petit Palais & Spa",location:"djerba",rate:3,description:" At the hotel, all rooms are equipped with a balcony with a pool view. Le Petit Palais & Spa has some units with garden views, and the rooms include a terrace. All guest rooms feature a closet."}],t=Object(n.useState)({}),l=Object(y.a)(t,2),c=l[0],i=l[1];Object(n.useEffect)((function(){var t=a.filter((function(a){return a.id==e.match.params.id}))[0];i(t)}),[]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o,null)),r.a.createElement("div",{className:"confirmationbox"},r.a.createElement("div",{className:"form-style-2 box"},r.a.createElement("div",{className:"form-style-2-heading"},"Provide your information"),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"field1"},r.a.createElement("span",null,"Name ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",className:"input-field",name:"field1"})),r.a.createElement("label",{htmlFor:"field1"},r.a.createElement("span",null,"LastName ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",className:"input-field",name:"field1"})),r.a.createElement("label",{htmlFor:"field2"},r.a.createElement("span",null,"Email ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",className:"input-field",name:"field2"})),r.a.createElement("label",{for:"field5"},r.a.createElement("span",null,"Special Requests ",r.a.createElement("span",{class:"required"},"*")),r.a.createElement("textarea",{name:"field5",class:"textarea-field"})),r.a.createElement("label",null,r.a.createElement("span",null," "),r.a.createElement("button",{onClick:function(){alert("thanks for booking ".concat(c.name," "))},className:"ba"},"submit"))))),r.a.createElement("div",null,r.a.createElement(f,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(R.a,{exact:!0,path:"/",component:b}),r.a.createElement(R.a,{exact:!0,path:"/Hotels",component:A}),r.a.createElement(R.a,{exact:!0,path:"/Login",component:N}),r.a.createElement(R.a,{exact:!0,path:"/confirmation/:id",component:M}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.8cd60b6b.chunk.js.map