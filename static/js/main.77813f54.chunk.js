(this["webpackJsonpeleven-firebase-github"]=this["webpackJsonpeleven-firebase-github"]||[]).push([[0],{44:function(e,t,a){e.exports=a(87)},49:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(49),a(8)),s=(a(50),a(51),a(15)),i=(a(52),r.a.createContext()),m=a(13),u=a(7),p=a(22),E=a.n(p),d=a(42),b=a(94),h=a(95),g=a(96),f=a(23),v=a.n(f),w=a(90),x=a(91),j=function(e){var t=e.user;return r.a.createElement(w.a,{className:"text-center"},r.a.createElement("img",{src:t.avatar_url,className:"img-thumbnail",height:"300",width:"500"}),r.a.createElement(x.a,{className:"md-4 mt-3",style:{fontSize:"20px",float:"left"}},r.a.createElement("div",null,"Name:",t.name),r.a.createElement("div",null,"Location:",t.location),r.a.createElement("div",null,"Followers:",t.followers),r.a.createElement("div",null,"Hireable:",t.hireable?"Yes":"Not Mentioned")))},N=a(92),O=a(93),y=function(e){var t=e.user;return r.a.createElement("div",{className:"mb-5"},r.a.createElement("h1",{color:"success"},"Repositories"),t.map((function(e){return r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(N.a,null,"Project Name: ",e.name),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://sreeramthatavarthi.github.io/".concat(e.name)},"Project link"))))})))},S=function(){var e=Object(n.useContext)(i),t="https://api.github.com/users/",a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],m=l[1],p=Object(n.useState)([]),f=Object(o.a)(p,2),w=f[0],x=f[1],N=Object(n.useState)([]),O=Object(o.a)(N,2),S=O[0],I=O[1],k=function(){var e=Object(d.a)(E.a.mark((function e(){var a,n,r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(t).concat(c),m(""),e.prev=2,e.next=5,v.a.get(t).catch((function(e){if(404===e.response.status)throw new Error("".concat(e.config.url," not found"));throw e}));case 5:return a=e.sent,n=a.data,r=n.repos_url,e.next=10,v.a.get(r);case 10:l=e.sent,I(l.data),x(n),console.log(n),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),Object(s.b)("User Id Not Found",{type:"error"});case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();return e.user?r.a.createElement(b.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(g.a,{className:"md-6"},r.a.createElement("div",{className:"input-group mb-3 mt-4",style:{width:"400px"}},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter GitHub Id",value:c,onChange:function(e){return m(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn  btn-primary",type:"button",onClick:k},"Submit"))),w.id?r.a.createElement(j,{user:w}):""),r.a.createElement(g.a,{className:"md-6"},w.id?r.a.createElement(y,{user:S}):""))):r.a.createElement(u.a,{to:"/signin"})},I=a(97),k=a(98),C=a(99),U=a(100),P=a(101),F=a(102),B=a(103),A=a(17),D=a.n(A),G=function(){var e,t=Object(n.useContext)(i),a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],m=l[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),d=E[0],f=E[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?r.a.createElement(u.a,{to:"/"}):r.a.createElement(b.a,{className:"text-center"},"Note:SignIn is required.",r.a.createElement(h.a,null,r.a.createElement(g.a,{lg:6,className:"offset-lg-3 mt-5"},r.a.createElement(w.a,null,r.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),D.a.auth().signInWithEmailAndPassword(c,d).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(s.b)(e.message,{type:"error"})}))}},r.a.createElement(k.a,{className:""},"SignIn here"),r.a.createElement(x.a,null,r.a.createElement(C.a,{row:!0},r.a.createElement(U.a,{for:"email",sm:3},"Email"),r.a.createElement(g.a,{sm:9},r.a.createElement(P.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:c,onChange:function(e){return m(e.target.value)}}))),r.a.createElement(C.a,{row:!0},r.a.createElement(U.a,{for:"password",sm:3},"Password"),r.a.createElement(g.a,{sm:9},r.a.createElement(P.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return f(e.target.value)}})))),r.a.createElement(F.a,null,r.a.createElement(B.a,{type:"submit",block:!0,color:"primary"},"Sign In")))))))},H=function(){return r.a.createElement("h1",null,"Page Not Found")},W=function(){var e,t=Object(n.useContext)(i),a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],m=l[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),d=E[0],f=E[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?r.a.createElement(u.a,{to:"/"}):r.a.createElement(b.a,{className:"text-center"},r.a.createElement(h.a,null,r.a.createElement(g.a,{lg:6,className:"offset-lg-3 mt-5"},r.a.createElement(w.a,null,r.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),D.a.auth().createUserWithEmailAndPassword(c,d).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(s.b)(e.message,{type:"error"})}))}},r.a.createElement(k.a,{className:""},"SignUp here"),r.a.createElement(x.a,null,r.a.createElement(C.a,{row:!0},r.a.createElement(U.a,{for:"email",sm:3},"Email"),r.a.createElement(g.a,{sm:9},r.a.createElement(P.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:c,onChange:function(e){return m(e.target.value)}}))),r.a.createElement(C.a,{row:!0},r.a.createElement(U.a,{for:"password",sm:3},"Password"),r.a.createElement(g.a,{sm:9},r.a.createElement(P.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return f(e.target.value)}})))),r.a.createElement(F.a,null,r.a.createElement(B.a,{type:"submit",block:!0,color:"primary"},"Sign Up")))))))},z=function(){return r.a.createElement(b.a,{fluid:!0,tag:"footer",className:"text-center bg-info text-white text-uppercase fixed-bottom p-3"},"Siri GITHUB Search App with FireBase")},J=a(104),R=a(105),V=a(106),_=a(107),q=a(111),K=a(108),L=a(109),M=a(110),T=function(){var e,t=Object(n.useContext)(i),a=Object(n.useState)(!1),l=Object(o.a)(a,2),c=l[0],s=l[1];return r.a.createElement(J.a,{color:"info",light:!0,expand:"md"},r.a.createElement(R.a,null,r.a.createElement(m.b,{to:"/",className:"text-white"},"Github with Firebase")),r.a.createElement(V.a,null,(null===(e=t.user)||void 0===e?void 0:e.email)?t.user.email:""),r.a.createElement(_.a,{onClick:function(){return s(!c)}}),r.a.createElement(q.a,{isOpen:c,navbar:!0},r.a.createElement(K.a,{className:"ml-auto",navbar:!0},t.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement(M.a,{style:{cursor:"pointer"},onClick:function(){return t.setUser(null)},className:"text-white"},"Signout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement(M.a,{tag:m.b,to:"/signup",className:"text-white"},"Signup")),r.a.createElement(L.a,null,r.a.createElement(M.a,{tag:m.b,to:"/signin",className:"text-white"},"Signin"))))))};a(84),a(86);D.a.initializeApp({apiKey:"AIzaSyD_R706OcnKZ74gP9pFtxwq6Vl09llIBrs",authDomain:"git-app-890e2.firebaseapp.com",databaseURL:"https://git-app-890e2.firebaseio.com",projectId:"git-app-890e2",storageBucket:"git-app-890e2.appspot.com",messagingSenderId:"146086151419",appId:"1:146086151419:web:88624d08c0fd927a7edc5e",measurementId:"G-5JV69HB3XV"});var X=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(m.a,null,r.a.createElement(s.a,null),r.a.createElement(i.Provider,{value:{user:a,setUser:l}},r.a.createElement(T,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:S}),r.a.createElement(u.b,{exact:!0,path:"/signin",component:G}),r.a.createElement(u.b,{exact:!0,path:"/signup",component:W}),r.a.createElement(u.b,{exact:!0,path:"*",component:H})),r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.77813f54.chunk.js.map