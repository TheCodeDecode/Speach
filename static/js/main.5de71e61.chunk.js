(this.webpackJsonpspeak=this.webpackJsonpspeak||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),i=n(5),o=n.n(i),a=(n(13),n(4)),l=n.n(a),u=n(6),j=n(2),d=(n(15),n(7)),b=new(window.SpeechRecognition||window.webkitSpeechRecognition);b.continous=!0,b.intermResults=!0,b.lang="en-US";var h=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(s.useState)([]),o=Object(j.a)(i,2),a=o[0],h=o[1],f=Object(s.useState)(""),p=Object(j.a)(f,2),m=p[0],g=p[1];Object(s.useEffect)((function(){O()}),[n]);var O=function(){n?(b.start(),b.onend=function(){b.start()},b.onstart=function(){console.log("MICS on")}):(b.stop(),b.onend=function(){console.log("stopped mic")}),b.onresult=function(e){console.log(e,"event");var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");x(t),g(t)},b.onerror=function(){b.stop(),console.log("Please connect mic")}},x=function(e){var t=window.speechSynthesis,n=t.getVoices().filter((function(e){return"en"===e.lang}))[0],c=new SpeechSynthesisUtterance("Seraching news for "+e);c.voice=n,c.pitch=1.5,c.rate=1.25,c.volume=.8,t.speak(c),function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://newsapi.org/v2/everything?q=".concat(t,"&sortBy=publishedAt&apiKey=ba8a44f45f7b47e7b1402ced82e3c743"),e.next=3,fetch(n);case 3:return e.next=5,e.sent.json();case 5:c=e.sent,h(c.articles);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"jumbotron text-center banner",children:[Object(c.jsx)("h2",{className:"mb-3",children:"Voice Search"}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){return r((function(e){return!e}))},children:n?"Listening":"Not Listening"}),Object(c.jsxs)("p",{className:"mt-4",style:{fontSize:"18px"},children:["Seraching news for :",Object(c.jsxs)("b",{children:[" ",m]})]})]}),Object(c.jsx)("div",{className:"container",children:a&&a.map((function(e){return Object(c.jsx)("div",{className:"list_section mb-4",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)("img",{src:e.urlToImage||"https://discountseries.com/wp-content/uploads/2017/09/default.jpg",className:"img-fluid imgborder"})})}),Object(c.jsx)("div",{className:"col-lg-9 col-md-9",children:Object(c.jsxs)("div",{className:"result-content",children:[Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("h6",{children:d(e.publishedAt).format("MMM Do YYYY")}),Object(c.jsx)("div",{className:"text-right",children:Object(c.jsx)("a",{href:e.url,target:"_blank",className:"btn btn-custom",children:"Read More"})})]})})]})})}))})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.5de71e61.chunk.js.map