(this["webpackJsonphackernews-clone-react-app"]=this["webpackJsonphackernews-clone-react-app"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(13),s=n.n(r),i=(n(38),n(14)),l=(n(39),n(40),n(30)),o=n(2);function j(e){var t=e.getQuery;return Object(o.jsx)("div",{className:"navbar navbar-light bg-light",children:Object(o.jsxs)("form",{className:"form-inline",onSubmit:function(e){e.preventDefault();var n=e.target.userQuery.value;n?(t(n),e.target.userQuery.value=""):alert("Somethihng went wrong")},children:[Object(o.jsx)("input",{className:"form-control mr-sm-2 mb-4",type:"text",name:"userQuery"})," ",Object(o.jsx)(l.a,{variant:"success",type:"submit",className:"mb-4",children:"Search"})," "]})})}var u=n(15),b=n(32),h=n.n(b),d=n(31),g=n.n(d),m=n(29),O=n(24);function x(e){var t=e.isLoading,n=e.articles;return t?Object(o.jsx)(h.a,{size:60}):0===n.length?Object(o.jsxs)(m.a,{variant:"danger",className:"mt-4",children:[Object(o.jsx)(m.a.Heading,{children:"Aww, snap!"}),Object(o.jsx)("h2",{children:"\u2639"}),Object(o.jsx)("h4",{className:"mb-2 mt-4",children:"There is no matching results... try again !"})]}):n.map((function(e){return Object(o.jsx)(O.a,{defaultActiveKey:"0",children:Object(o.jsxs)(u.a,{className:"mb-2",border:"secondary",children:[Object(o.jsx)(O.a.Toggle,{as:u.a.Header,eventKey:"1",children:Object(o.jsxs)(u.a.Body,{children:[" ",e.title||e.story_title]})}),Object(o.jsx)(O.a.Collapse,{eventKey:"1",children:Object(o.jsxs)(u.a.Text,{className:"mb-2 text-muted",children:[g()(e.created_at).format("MMM Do YY")," ",Object(o.jsx)(u.a.Link,{className:"mb-2 text-muted",href:e.url||e.story_url,target:"_blank",children:"Full article"})]})})]},e.created_at_i)})}))}function f(e){for(var t=e.articlesPerPage,n=e.totalArticles,c=e.changePage,a=[],r=n/t,s=1;s<=r;s++)a.push(s);return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(o.jsx)("li",{className:"page-link",style:{color:"black"},onClick:function(){return c(e)},children:e},e)}))})})}var p=n(28),v=n(33);function y(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(v.a,{className:"nav-container",children:Object(o.jsx)(p.a,{expand:"lg",variant:"light",bg:"light",children:Object(o.jsx)(p.a.Brand,{href:"#",children:"Hacker news Clone"})})})})}function N(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(i.a)(r,2),l=s[0],u=s[1],b=Object(c.useState)("cryptocurrency"),h=Object(i.a)(b,2),d=h[0],g=h[1],m=Object(c.useState)(1),O=Object(i.a)(m,2),p=O[0],v=O[1],N=Object(c.useState)(10),w=Object(i.a)(N,1)[0];Object(c.useEffect)((function(){u(!0),setTimeout((function(){fetch("https://hn.algolia.com/api/v1/search?query=".concat(d,"&hitsPerPage=60")).then((function(e){if(console.log(e),e.ok)return e.json();throw Error("Whoops!")})).then((function(e){console.log(e.hits),a(e.hits),u(!1)}))}),3e3)}),[d]);var k=p*w,P=k-w,S=n.slice(P,k);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(y,{}),Object(o.jsx)(j,{getQuery:function(e){return g(e)}}),Object(o.jsx)(x,{isLoading:l,articles:S}),l?null:Object(o.jsx)(f,{articlesPerPage:w,totalArticles:n.length,changePage:function(e){v(e),window.scrollTo(0,0)}})]})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),w()}},[[53,1,2]]]);
//# sourceMappingURL=main.19efa82a.chunk.js.map