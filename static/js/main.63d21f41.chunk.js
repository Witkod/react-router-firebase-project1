(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),s=(a(37),a(5)),l=a(11),i=a(15),u=a(9),m=a(2);var d=function(e,t,a){var n=r.a.useState(e),c=Object(m.a)(n,2),o=c[0],s=c[1],l=r.a.useState({}),d=Object(m.a)(l,2),p=d[0],f=d[1],h=r.a.useState(!1),v=Object(m.a)(h,2),b=v[0],E=v[1];return r.a.useEffect(function(){b&&(0===Object.keys(p).length?(a(),E(!1)):E(!1))},[p]),{handleSubmit:function(e){e.preventDefault();var a=t(o);f(a),E(!0)},handleBlur:function(){var e=t(o);f(e)},handleChange:function(e){e.persist(),s(function(t){return Object(u.a)({},t,Object(i.a)({},e.target.name,e.target.value))})},values:o,errors:p,isSubmitting:b}};function p(e){var t={};return e.description?e.description.length<10&&(t.description="Description must be at least 10 characters"):t.description="Description required",e.url?/^(ftp|http|https):\/\/[^ "]+$/.test(e.url)||(t.url="Url must be valid"):t.url="Url required",t}var f=a(4),h=a.n(f),v=a(10),b=a(28),E=a(29),g=a(18),w=a.n(g),k=(a(40),a(42),{apiKey:"AIzaSyAx-vO2aB7wpFmsKsIQhvlBVRbenNiV1pI",authDomain:"hooks-news-c6ff4.firebaseapp.com",databaseURL:"https://hooks-news-c6ff4.firebaseio.com",projectId:"hooks-news-c6ff4",storageBucket:"hooks-news-c6ff4.appspot.com",messagingSenderId:"502970399835",appId:"1:502970399835:web:675b3716ac201fecc2137e",measurementId:"G-3GXH0YFSGV"}),y=new(function(){function e(){Object(b.a)(this,e),w.a.initializeApp(k),this.auth=w.a.auth(),this.db=w.a.firestore()}return Object(E.a)(e,[{key:"register",value:function(){var e=Object(v.a)(h.a.mark(function e(t,a,n){var r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(a,n);case 2:return r=e.sent,e.next=5,r.user.updateProfile({displayName:t});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(v.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signInWithEmailAndPassword(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(v.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signOut();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"resetPassword",value:function(){var e=Object(v.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.sendPasswordResetEmail(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),N=r.a.createContext(null),x=y,C={description:"",url:""};var O=function(e){var t=Object(n.useContext)(N),a=t.firebase,c=t.user,o=d(C,p,function(){if(c){var t=i.url,n=i.description,r={url:t,description:n,postedBy:{id:c.uid,name:c.displayName},voteCount:0,votes:[],comments:[],created:Date.now()};a.db.collection("links").add(r),e.history.push("/")}else e.history.push("/login");console.log("link created!")}),s=o.handleSubmit,l=o.handleChange,i=o.values,u=o.errors;return r.a.createElement("form",{onSubmit:s,className:"flex flex-column mt3"},r.a.createElement("input",{onChange:l,value:i.description,name:"description",placeholder:"A description for your link",autoComplete:"off",type:"text",className:u.description&&"error-input"}),u.description&&r.a.createElement("p",{className:"error-text"},u.description),r.a.createElement("input",{onChange:l,value:i.url,name:"url",placeholder:"The url for the link",autoComplete:"off",type:"url",className:u.url&&"error-input"}),u.url&&r.a.createElement("p",{className:"error-text"},u.url),r.a.createElement("button",{className:"button",type:"submit"},"Submit"))};function j(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email required",e.password?e.password.length<6&&(t.password="Password must be at least 6 characters"):t.password="Password required",t}var S={name:"",email:"",password:""};var B=function(e){var t=d(S,j,function(){return y.apply(this,arguments)}),a=t.handleSubmit,n=t.handleBlur,c=t.handleChange,o=t.values,l=t.errors,i=t.isSubmitting,u=r.a.useState(!0),p=Object(m.a)(u,2),f=p[0],b=p[1],E=r.a.useState(null),g=Object(m.a)(E,2),w=g[0],k=g[1];function y(){return(y=Object(v.a)(h.a.mark(function t(){var a,n,r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=o.name,n=o.email,r=o.password,t.prev=1,!f){t.next=8;break}return t.next=5,x.login(n,r);case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,x.register(a,n,r);case 10:t.t0=t.sent;case 11:t.t0,e.history.push("/"),t.next=19;break;case 15:t.prev=15,t.t1=t.catch(1),console.error("authentication Error",t.t1),k(t.t1.message);case 19:case"end":return t.stop()}},t,null,[[1,15]])}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("h2",{className:"mv3"},f?"Login":"Create account"),r.a.createElement("form",{onSubmit:a,className:"flex flex-column"},!f&&r.a.createElement("input",{onChange:c,value:o.name,name:"name",type:"text",placeholder:"Your name",autoComplete:"off"}),r.a.createElement("input",{onChange:c,onBlur:n,value:o.email,name:"email",type:"email",placeholder:"Your email",autoComplete:"off"}),l.email&&r.a.createElement("p",{className:"error-text"},l.email),r.a.createElement("input",{onChange:c,onBlur:n,value:o.password,name:"password",type:"password",placeholder:"Choose a secure password"}),l.password&&r.a.createElement("p",{className:"error-text"},l.password),w&&r.a.createElement("p",{className:"error-text"},w),r.a.createElement("div",{className:"flex mt3"},r.a.createElement("button",{type:"submit",className:"button pointer mr2",disabled:i,style:{background:i?"grey":"orange"}},"Submit"),r.a.createElement("button",{type:"button",className:"pointer button",onClick:function(){return b(function(e){return!e})}},f?"need to create an account?":"Already have an account?"))),r.a.createElement("div",{class:"forgot-password"},r.a.createElement(s.b,{to:"/forgot"},"Forgot Password?")))};var A=function(){var e=r.a.useContext(N).firebase,t=r.a.useState(""),a=Object(m.a)(t,2),n=a[0],c=a[1],o=r.a.useState(!1),s=Object(m.a)(o,2),l=s[0],i=s[1],u=r.a.useState(null),d=Object(m.a)(u,2),p=d[0],f=d[1];function b(){return(b=Object(v.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.resetPassword(n);case 3:i(!0),f(null),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error sending mail",t.t0),f(t.t0.message),i(!1);case 12:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("input",{type:"email",className:"input",placeholder:"Provide your account email",onChange:function(e){return c(e.target.value)}}),r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:function(){return b.apply(this,arguments)}},"Reset Password")),l&&r.a.createElement("p",null,"Check email to reset password"),p&&r.a.createElement("p",{className:"error-text"},p))},I=a(17),P=2;var D=a(16),L=a.n(D);var F=Object(l.f)(function(e){var t=e.link,a=e.index,n=e.showCount,c=e.history,o=r.a.useContext(N),l=o.firebase,i=o.user,u=i&&i.uid===t.postedBy.id;return r.a.createElement("div",{className:"flex items-start mt2"},r.a.createElement("div",{className:"flex items-center"},n&&r.a.createElement("span",{className:"gray"},a,"."),r.a.createElement("div",{className:"vote-button",onClick:function(){if(i){var e=l.db.collection("links").doc(t.id);e.get().then(function(t){if(t.exists){var a=t.data().votes,n={votedBy:{id:i.uid,name:i.displayName}},r=[].concat(Object(I.a)(a),[n]),c=r.length;e.update({votes:r,voteCount:c})}})}else c.push("/login")}},"\u25b2")),r.a.createElement("div",{className:"ml1"},r.a.createElement("div",null,r.a.createElement("a",{href:t.url,className:"black no-underline"},t.description)," ",r.a.createElement("span",{className:"link"},"(",t.url.replace(/^https?:\/\//i,""),")")),r.a.createElement("div",{className:"f6 1h-copy gray"},t.voteCount," votes by ",t.postedBy.name," ",L()(t.created)," | ",r.a.createElement(s.b,{to:"/link/".concat(t.id)},t.comments.length>0?"".concat(t.comments.length," comments"):"discuss"),u&&r.a.createElement(r.a.Fragment,null," | ",r.a.createElement("span",{className:"delete-button",onClick:function(){l.db.collection("links").doc(t.id).delete().then(function(){console.log("Document with ID ".concat(t.id," deleted"))}).catch(function(e){console.error("Error deleting document:",e)})}},"delete")))))});var q=function(){var e=r.a.useState(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=r.a.useState([]),o=Object(m.a)(c,2),s=o[0],l=o[1],i=r.a.useContext(N).firebase,d=r.a.useState([]),p=Object(m.a)(d,2),f=p[0],h=p[1];return r.a.useEffect(function(){i.db.collection("links").get().then(function(e){var t=e.docs.map(function(e){return Object(u.a)({id:e.id},e.data())});h(t)})},[]),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=a.toLowerCase(),n=f.filter(function(e){return e.description.toLowerCase().includes(t)||e.url.toLowerCase().includes(t)||e.postedBy.name.toLowerCase().includes(t)});l(n)}},r.a.createElement("div",null,"Search ",r.a.createElement("input",{onChange:function(e){return n(e.target.value)}}),r.a.createElement("button",null,"OK"))),s.map(function(e,t){return r.a.createElement(F,{key:e.id,showCount:!1,link:e,index:t})}))};var R=function(e){var t=r.a.useContext(N).firebase,a=r.a.useState([]),n=Object(m.a)(a,2),c=n[0],o=n[1],s=r.a.useState(!1),l=Object(m.a)(s,2),i=l[0],d=l[1],p=r.a.useState(null),f=Object(m.a)(p,2),h=f[0],v=f[1],b=e.location.pathname.includes("new"),E=e.location.pathname.includes("top"),g=Number(e.match.params.page);function w(e){var t=e.docs.map(function(e){return Object(u.a)({id:e.id},e.data())}),a=t[t.length-1];o(t),v(a),d(!1)}r.a.useEffect(function(){var e=function(){d(!0);var e=Boolean(h);return E?t.db.collection("links").orderBy("voteCount","desc").limit(P).onSnapshot(w):1===g?t.db.collection("links").orderBy("created","desc").limit(P).onSnapshot(w):e?t.db.collection("links").orderBy("created","desc").startAfter(h.created).limit(P).onSnapshot(w):void 0}();return function(){return e()}},[E,g]);var k=g?(g-1)*P+1:0;return r.a.createElement("div",{style:{opacity:i?.25:1}},c.map(function(e,t){return r.a.createElement(F,{key:e.id,showCount:!0,link:e,index:t+k})}),b&&r.a.createElement("div",{className:"pagination"},r.a.createElement("div",{className:"pointer mr2",onClick:function(){g>1&&e.history.push("/new/".concat(g-1))}},"Previous"),r.a.createElement("div",{className:"pointer",onClick:function(){g<=c.length/P&&e.history.push("/new/".concat(g+1))}},"Next")))};var U=function(e){var t=r.a.useContext(N),a=t.firebase,n=t.user,c=r.a.useState(null),o=Object(m.a)(c,2),s=o[0],l=o[1],i=r.a.useState(""),d=Object(m.a)(i,2),p=d[0],f=d[1],h=e.match.params.linkId,v=a.db.collection("links").doc(h);return r.a.useEffect(function(){v.get().then(function(e){l(Object(u.a)({},e.data(),{id:e.id}))})},[]),s?r.a.createElement("div",null,r.a.createElement(F,{showCount:!1,link:s}),r.a.createElement("textarea",{onChange:function(e){return f(e.target.value)},value:p,rows:"6",cols:"60"}),r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:function(){n?v.get().then(function(e){if(e.exists){var t=e.data().comments,a={postedBy:{id:n.uid,name:n.displayName},created:Date.now(),text:p},r=[].concat(Object(I.a)(t),[a]);v.update({comments:r}),l(function(e){return Object(u.a)({},e,{comments:r})}),f("")}}):e.history.push("/login")}},"Add Comment")),s.comments.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",{className:"comment-author"},e.postedBy.name," | ",L()(e.created)),r.a.createElement("p",null,e.text))})):r.a.createElement("div",null,"Loading...")};var W=function(){var e=r.a.useContext(N),t=e.user,a=e.firebase;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"flex"},r.a.createElement("img",{src:"/logo.png",alt:"Hooks News Logo",className:"logo"}),r.a.createElement(s.c,{to:"/",className:"header-title"},"Hooks News"),r.a.createElement(s.c,{to:"/",className:"header-link"},"new"),r.a.createElement("div",{className:"divider"},"|"),r.a.createElement(s.c,{to:"/top",className:"header-link"},"top"),r.a.createElement("div",{className:"divider"},"|"),r.a.createElement(s.c,{to:"/search",className:"header-link"},"search"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"divider"},"|"),r.a.createElement(s.c,{to:"/create",className:"header-link"},"submit"))),r.a.createElement("div",{className:"flex"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-name"},t.displayName),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"header-button",onClick:function(){return a.logout()}},"logout")):r.a.createElement(s.c,{to:"/login",className:"header-link"},"login")))};var G=function(){var e=r.a.useState(null),t=Object(m.a)(e,2),a=t[0],n=t[1];return r.a.useEffect(function(){var e=x.auth.onAuthStateChanged(function(e){n(e||null)});return function(){return e()}},[]),a};var H=function(){var e=G();return console.log({user:e}),r.a.createElement(s.a,null,r.a.createElement(N.Provider,{value:{user:e,firebase:x}},r.a.createElement("div",{className:"app-container"},r.a.createElement(W,null),r.a.createElement("div",{className:"route-container"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(l.a,{to:"/new/1"})}}),r.a.createElement(l.b,{path:"/create",component:O}),r.a.createElement(l.b,{path:"/login",component:B}),r.a.createElement(l.b,{path:"/forgot",component:A}),r.a.createElement(l.b,{path:"/search",component:q}),r.a.createElement(l.b,{path:"/top",component:R}),r.a.createElement(l.b,{path:"/new/:page",component:R}),r.a.createElement(l.b,{path:"/link/:linkId",component:U}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.63d21f41.chunk.js.map