(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{52:function(e,t,a){e.exports=a(76)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),c=a.n(r),l=(a(57),a(18)),i=a(103),d=a(106),s=a(105),u=a(99),p=(a(58),a(102)),m=a(107),f=(a(59),a(104)),E=a(100),b=a(101),g=a(34),h=a.n(g),v=h.a.initializeApp({apiKey:"AIzaSyAk55_K2PkHtm9dc57ZPDqJPXtBmKTR6Wc",authDomain:"todo-app-d0a0d.firebaseapp.com",databaseURL:"https://todo-app-d0a0d.firebaseio.com",projectId:"todo-app-d0a0d",storageBucket:"todo-app-d0a0d.appspot.com",messagingSenderId:"899210179996",appId:"1:899210179996:web:ff94c6b7fad981b6368459",measurementId:"G-GWNCV6K2HY"}).firestore(),k=a(47),w=a.n(k),j=a(96),O=Object(j.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var S=function(e){var t=O(),a=Object(n.useState)(!1),r=Object(l.a)(a,2),c=r[0],i=r[1],d=Object(n.useState)(),s=Object(l.a)(d,2),g=s[0],h=s[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{open:c,onClose:function(e){return i(!1)}},o.a.createElement("div",{className:t.paper},o.a.createElement("h1",null,"Edit Your Message"),o.a.createElement("input",{placeholder:e.todo.todo,value:g,onChange:function(e){return h(e.target.value)}}),o.a.createElement(u.a,{onClick:function(){v.collection("todos").doc(e.todo.id).set({todo:g},{merge:!0}),i(!1)}},"Update Message"))),o.a.createElement(E.a,{className:"todo__list"},o.a.createElement(b.a,null,o.a.createElement(p.a,null),o.a.createElement(m.a,{primary:e.todo.todo,secondary:"Virtual Dancers \ud83d\udc6f\u200d\u2642\ufe0f\ud83d\udd7a\ud83d\udc83"})),o.a.createElement("button",{onClick:function(e){return i(!0)}},"Edit"),o.a.createElement(w.a,{onClick:function(t){return v.collection("todos").doc(e.todo.id).delete()}})))};var y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),p=Object(l.a)(c,2),m=p[0],f=p[1];return Object(n.useEffect)((function(){v.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Virtual Dancers \ud83d\udc6f\u200d\u2642\ufe0f\ud83d\udd7a\ud83d\udc83 Secret Messenger"),o.a.createElement("form",null,o.a.createElement(i.a,null,o.a.createElement(d.a,null,"\u2705 Write a Message"),o.a.createElement(s.a,{value:m,onChange:function(e){return f(e.target.value)}})),o.a.createElement(u.a,{disabled:!m,type:"submit",onClick:function(e){e.preventDefault(),v.collection("todos").add({todo:m,timestamp:h.a.firestore.FieldValue.serverTimestamp()}),f("")},variant:"contained",color:"primary"},"Add Message")),o.a.createElement("ul",null,a.map((function(e){return o.a.createElement(S,{todo:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.cc1d1f7c.chunk.js.map