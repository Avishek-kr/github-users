(this["webpackJsonpgithub-user"]=this["webpackJsonpgithub-user"]||[]).push([[0],{11:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(4),i=r.n(s),a=(r(11),r(3)),u=r.n(a),j=r(5),h=r(6),o=r(0),b=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),r=t[0],c=t[1],s=function(){var e=Object(j.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"github users"}),Object(o.jsx)("ul",{className:"users",children:r.map((function(e){var t=e.id,r=e.login,n=e.avatar_url,c=e.html_url;return Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:n,alt:r}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:r}),Object(o.jsx)("a",{href:c,children:"profile"}),Object(o.jsx)("h5",{children:Object(o.jsx)("a",{href:"".concat(c,"?tab=repositories"),children:"Repositories"})})]})]},t)}))})]})};var l=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,{})})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4775aae7.chunk.js.map