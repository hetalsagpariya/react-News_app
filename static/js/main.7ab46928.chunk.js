(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/loading1.747d0ffa.gif"},25:function(e,a,t){e.exports=t(41)},30:function(e,a,t){},31:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(15),c=t.n(s),l=(t(30),t(16)),o=t(17),i=t(24),m=t(22),g=(t(31),t(6)),u=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(g.b,{className:"navbar-brand",to:"/"},"NewsMonkey"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{className:"nav-link",to:"/business"},"Business")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{className:"nav-link",to:"/entertainment"},"Entertainment")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{className:"nav-link",to:"/general"},"General")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{className:"nav-link",to:"/health"},"Health")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{className:"nav-link",to:"/science"},"Science")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{className:"nav-link",to:"/sports"},"Sports")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{className:"nav-link",to:"/technology"},"Technology")))))))},p=t(8),d=t.n(p),h=t(11),E=t(7),b=function(e){var a=e.title,t=e.description,n=e.imageUrl,s=e.newsUrl,c=e.author,l=e.date,o=e.source;return r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}},r.a.createElement("span",{className:"badge rounded-pill bg-danger"}," ",o," ")),r.a.createElement("img",{src:n||"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a,"  "),r.a.createElement("p",{className:"card-text"},t),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"By ",c||"Unknown"," on  ",new Date(l).toGMTString())),r.a.createElement("a",{rel:"noreferrer",href:s,target:"_blank",className:"btn btn-sm btn-dark"},"Read More"))))},v=t(20),y=t.n(v),f=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"my-3",src:y.a,alt:"loading"}))},N=t(21),S=function(e){var a=Object(n.useState)([]),t=Object(E.a)(a,2),s=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(E.a)(l,2),i=o[0],m=o[1],g=Object(n.useState)(1),u=Object(E.a)(g,2),p=u[0],v=u[1],y=Object(n.useState)(0),S=Object(E.a)(y,2),x=S[0],k=S[1],P=function(){var a=Object(h.a)(d.a.mark(function a(){var t,n,r;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.setProgress(10),t="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=789c98d108c24363b6ea2bdf70817c45&page=").concat(p,"&pageSize=").concat(e.pageSize),m(!0),a.next=5,fetch(t);case 5:return n=a.sent,e.setProgress(30),a.next=9,n.json();case 9:r=a.sent,e.setProgress(70),c(r.articles),k(r.totalResults),m(!1),e.setProgress(100);case 15:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();Object(n.useEffect)(function(){P()},[]);var w,z=function(){var a=Object(h.a)(d.a.mark(function a(){var t,n,r;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return v(p+1),t="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=789c98d108c24363b6ea2bdf70817c45&page=").concat(p,"&pageSize=").concat(e.pageSize),a.next=4,fetch(t);case 4:return n=a.sent,a.next=7,n.json();case 7:r=a.sent,c(s.concat(r.articles)),k(r.totalResults);case 10:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center",style:{margin:"35px 0px"}},"NewsMonkey - Top ",(w=e.category).charAt(0).toUpperCase()+w.slice(1)," Headlines"),i&&r.a.createElement(f,null),r.a.createElement(N.a,{dataLength:s.length,next:z,hasMore:s.length!==x,loader:r.a.createElement(f,null)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},s.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.url},r.a.createElement(b,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name}))})))))};S.defaultProps={country:"in",pageSize:8,category:"general"};var x=S,k=t(1),P=t(23),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).pageSize=5,e.state={progress:0},e.setProgress=function(a){e.setState({progress:a})},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(u,null),r.a.createElement(P.a,{height:3,color:"#f11946",progress:this.state.progress}),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement(x,{setProgress:this.setProgress,key:"general",pageSize:this.pageSize,country:"in",category:"general"})),r.a.createElement(k.a,{exact:!0,path:"/business"},r.a.createElement(x,{setProgress:this.setProgress,key:"business",pageSize:this.pageSize,country:"in",category:"business"})),r.a.createElement(k.a,{exact:!0,path:"/entertainment"},r.a.createElement(x,{setProgress:this.setProgress,key:"entertainment",pageSize:this.pageSize,country:"in",category:"entertainment"})),r.a.createElement(k.a,{exact:!0,path:"/general"},r.a.createElement(x,{setProgress:this.setProgress,key:"general",pageSize:this.pageSize,country:"in",category:"general"})),r.a.createElement(k.a,{exact:!0,path:"/health"},r.a.createElement(x,{setProgress:this.setProgress,key:"health",pageSize:this.pageSize,country:"in",category:"health"})),r.a.createElement(k.a,{exact:!0,path:"/science"},r.a.createElement(x,{setProgress:this.setProgress,key:"science",pageSize:this.pageSize,country:"in",category:"science"})),r.a.createElement(k.a,{exact:!0,path:"/sports"},r.a.createElement(x,{setProgress:this.setProgress,key:"sports",pageSize:this.pageSize,country:"in",category:"sports"})),r.a.createElement(k.a,{exact:!0,path:"/technology"},r.a.createElement(x,{setProgress:this.setProgress,key:"technology",pageSize:this.pageSize,country:"in",category:"technology"})))))}}]),t}(n.Component),z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),s(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),z()}},[[25,1,2]]]);
//# sourceMappingURL=main.7ab46928.chunk.js.map