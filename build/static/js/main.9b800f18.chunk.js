(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(13),l=a.n(r),c=(a(63),a(14)),i=a(126),s=a(129),m=a(128),u=a(123),d=a(124),p=a(125),g=(a(64),a(47)),f=(a(78),a(130)),S=(a(79),a(127)),v=a(32),E=a.n(v),b=E.a.initializeApp({apiKey:"AIzaSyAk55_K2PkHtm9dc57ZPDqJPXtBmKTR6Wc",authDomain:"todo-app-d0a0d.firebaseapp.com",databaseURL:"https://todo-app-d0a0d.firebaseio.com",projectId:"todo-app-d0a0d",storageBucket:"todo-app-d0a0d.appspot.com",messagingSenderId:"899210179996",appId:"1:899210179996:web:ff94c6b7fad981b6368459",measurementId:"G-GWNCV6K2HY"}).firestore(),N=a(120),O=Object(N.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var I=function(e){var t=O(),a=Object(o.useState)(!1),r=Object(c.a)(a,2),l=r[0],i=r[1],s=Object(o.useState)(),m=Object(c.a)(s,2),g=m[0],v=m[1];function E(e){return!!localStorage.getItem("mytodos")&&!!localStorage.getItem("mytodos").split(",").includes(e.id)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(S.a,{open:l,onClose:function(e){return i(!1)}},n.a.createElement("div",{className:t.paper},n.a.createElement("h1",null,"Edit Your Message"),n.a.createElement("input",{placeholder:e.todo.todo,value:g,onChange:function(e){return v(e.target.value)}}),n.a.createElement(u.a,{onClick:function(){b.collection("groups").doc(e.groupId).collection("messages").doc(e.todo.id).set({todo:g},{merge:!0}),i(!1)}},"Update Message"))),n.a.createElement(d.a,{className:"todo__list"},n.a.createElement(p.a,null,n.a.createElement(f.a,{primary:e.todo.todo,secondary:e.todo.name+" \ud83d\udc6f\u200d\u2642\ufe0f\ud83d\udd7a\ud83d\udc83",className:"todo__list__item"}),E(b.collection("todos").doc(e.todo.id))&&n.a.createElement(u.a,{variant:"contained",onClick:function(e){return i(!0)},className:"todo__list__button"},"Edit"),E(b.collection("todos").doc(e.todo.id))&&n.a.createElement(u.a,{variant:"contained",onClick:function(){return function(t){b.collection("groups").doc(e.groupId).collection("messages").doc(t).delete();var a=localStorage.getItem("mytodos").split(",");a.splice(a.indexOf(t),1),localStorage.setItem("mytodos",a)}(e.todo.id)}},n.a.createElement("span",{role:"img","aria-label":"delete"},"\u274c"),"                "))))},y=a(92),h={dictionaries:[g.a,g.b],separator:"-",length:2},j=Object(g.c)(h);var _=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(o.useState)(""),g=Object(c.a)(l,2),f=g[0],S=g[1],v=Object(o.useState)(""),N=Object(c.a)(v,2),O=N[0],h=N[1],_=Object(o.useState)(),k=Object(c.a)(_,2),J=k[0],C=k[1],G=Object(o.useState)(),w=Object(c.a)(G,2),D=w[0],A=w[1],B=Object(o.useState)(""),M=Object(c.a)(B,2),W=M[0],x=M[1],K=Object(o.useState)([]),R=Object(c.a)(K,2),q=R[0],F=R[1],V=Object(o.useState)([]),P=Object(c.a)(V,2),T=(P[0],P[1]),Y=function(e){if(localStorage.getItem("myGroups")){var t=localStorage.getItem("myGroups");return!!(t=(t=JSON.parse(t)).find((function(t){return t.id===e})))}return!1};return Object(o.useEffect)((function(){var e=localStorage.getItem("groups");e&&(e=JSON.parse(e),F(e))}),[]),Object(o.useEffect)((function(){J&&b.collection("groups").doc(J).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,todo:e.data().todo,name:e.data().name}})))}))}),[J]),n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Virtual Dancers ",n.a.createElement("span",{role:"img","aria-label":"dancers"}," \ud83d\udc6f\u200d\u2642\ufe0f\ud83d\udd7a\ud83d\udc83 "),"Secret Messenger"),!J&&n.a.createElement("div",{className:"group"},n.a.createElement("div",{className:"join"},n.a.createElement("form",null,n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement("span",{role:"img","aria-label":"tick"}," \u2705 ")," Enter Group Id"),n.a.createElement(m.a,{value:O,onChange:function(e){return h(e.target.value)}})),n.a.createElement(u.a,{disabled:!O,type:"submit",onClick:function(e){e.preventDefault(),b.collection("groups").doc(O).get().then((function(e){if(e.data()){var t=e.data().name;if(A(t),C(O),localStorage.getItem("groups")){var a=localStorage.getItem("groups");a=JSON.parse(a);var o={id:O,name:t};a.find((function(e){return e.id===o.id}))||(a.push(o),F(a),localStorage.setItem("groups",JSON.stringify(a)))}else{var n=[],r={id:O,name:D};n.find((function(e){return e.id===r.id}))||(n.push(r),F(n),localStorage.setItem("groups",JSON.stringify(n)))}}})),h("")},variant:"contained",color:"primary",className:"join_group_btn"},"Join Group"))),n.a.createElement("span",{className:"or"},"OR"),n.a.createElement("div",{className:"create"},n.a.createElement("form",null,n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement("span",{role:"img","aria-label":"tick"}," \u2705 ")," Write Group Name"),n.a.createElement(m.a,{value:W,onChange:function(e){return x(e.target.value)}})),n.a.createElement(u.a,{disabled:!W,type:"submit",onClick:function(e){e.preventDefault();var t=y.generate();if(C(t),b.collection("groups").doc(t).set({timestamp:E.a.firestore.FieldValue.serverTimestamp(),name:W}),localStorage.getItem("groups")){var a=localStorage.getItem("groups");a=JSON.parse(a);var o={id:t,name:W};a.push(o),F(a),localStorage.setItem("groups",JSON.stringify(a))}else{var n=[],r={id:t,name:W};n.push(r),F(n),localStorage.setItem("groups",JSON.stringify(n))}if(localStorage.getItem("myGroups")){var l=localStorage.getItem("myGroups");l=JSON.parse(l);var c={id:t,name:W};l.push(c),T(l),localStorage.setItem("myGroups",JSON.stringify(l))}else{var i=[],s={id:t,name:W};i.push(s),T(i),localStorage.setItem("myGroups",JSON.stringify(i))}A(W),x("")},variant:"contained",color:"primary",className:"add_message_btn"},"Create Group")))),!J&&n.a.createElement("div",{className:"groupNames"},n.a.createElement("div",{className:"groupNames-text"},"Your Recent Groups :"),n.a.createElement(d.a,{className:"todo__list"},q.map((function(e,t){return Y(e.id),n.a.createElement("div",null,n.a.createElement(p.a,null,n.a.createElement(u.a,{onClick:function(){return function(e){b.collection("groups").doc(e).get().then((function(t){if(!t.data()){var a=localStorage.getItem("groups");return a=(a=JSON.parse(a)).filter((function(t){return t.id!==e})),F(a),localStorage.setItem("groups",JSON.stringify(a)),n.a.createElement(n.a.Fragment,null,alert("OOps! Group Deleted by creater"))}C(e),A(t.data().name)}))}(e.id)},variant:"contained",color:"primary",className:"open_grp_btn"},e.name),n.a.createElement(u.a,{variant:"contained",onClick:function(){return function(e){var t=localStorage.getItem("groups");t=(t=JSON.parse(t)).filter((function(t){return t.id!==e})),F(t),localStorage.setItem("groups",JSON.stringify(t))}(e.id)},className:"remove_group"},"Remove"),Y(e.id)&&n.a.createElement(u.a,{variant:"contained",onClick:function(){return function(e){b.collection("groups").doc(e).delete();var t=localStorage.getItem("groups");if(t=(t=JSON.parse(t)).filter((function(t){return t.id!==e})),F(t),localStorage.setItem("groups",JSON.stringify(t)),localStorage.getItem("myGroups")){var a=localStorage.getItem("myGroups");a=(a=JSON.parse(a)).filter((function(t){return t.id!==e})),T(a),localStorage.setItem("myGroups",JSON.stringify(a))}}(e.id)},className:"delete_group"},n.a.createElement("span",{role:"img","aria-label":"delete"},"\u274c"),"  ")))})))),J&&n.a.createElement("div",{className:"group-info"},n.a.createElement("div",{className:"group-info-name"}," Name: ",D," ",n.a.createElement("br",null)," "),n.a.createElement("div",{className:"group-info-id"}," Id: ",J," ",n.a.createElement("br",null)," ")),J&&n.a.createElement("div",{className:"back"},n.a.createElement(u.a,{type:"submit",onClick:function(){C()},variant:"contained",color:"primary",className:"add_message_btn"},"BACK")),J&&n.a.createElement("form",null,n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement("span",{role:"img","aria-label":"tick"}," \u2705 ")," Write a Message"),n.a.createElement(m.a,{value:f,onChange:function(e){return S(e.target.value)}})),n.a.createElement(u.a,{disabled:!f,type:"submit",onClick:function(e){e.preventDefault(),localStorage.getItem("uniqueName")||localStorage.setItem("uniqueName",j),b.collection("groups").doc(J).collection("messages").add({todo:f,timestamp:E.a.firestore.FieldValue.serverTimestamp(),name:localStorage.getItem("uniqueName")}).then((function(e){if(localStorage.getItem("mytodos")){var t=localStorage.getItem("mytodos");localStorage.setItem("mytodos","".concat(t,",").concat(e.id))}else localStorage.setItem("mytodos",e.id)})),S("")},variant:"contained",color:"primary",className:"add_message_btn"},"Add Message")),J&&n.a.createElement("ul",null,a.map((function(e,t){return n.a.createElement(I,{key:t,todo:e,groupId:J})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){e.exports=a(101)},63:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.9b800f18.chunk.js.map