(this.webpackJsonpslickhub=this.webpackJsonpslickhub||[]).push([[0],{130:function(e,t,a){},492:function(e,t,a){},493:function(e,t,a){},494:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(0),r=a(11),s=a.n(r),l=(a(130),a(35)),o=a(44),c=a(51),h=a(52),u=a(54),d=a(53),p=a(118),b=a.n(p),g=a(79),j=a.n(g),v=a(119),f=a.n(v),m=a(13),x=a.n(m),O=a(43),y=a.n(O),k=a(120),w=a.n(k),C=a(36),T=a.n(C),N=a(37),S=a.n(N),I=a(34),L=a(80),E=a.n(L),_=a(15),D=a(121),W=a.n(D),M=a(122),q=a.n(M),B=a(123),R=a.n(B),Y=a(124),z=(a(490),a(491),a(492),{refresh:{display:"inline-block",position:"relative"}}),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).config={query:"",criteria:"pushed",sort:"stars",order:"desc",interval:"today",limit:25},e.state={hasError:!1,isLoading:!0,repos:[]},e.closing=!1,e}return Object(h.a)(a,[{key:"componentWillUnmount",value:function(){this.closing=!0}},{key:"getDate",value:function(e){var t=W()(),a="";switch(e){case"today":a=t;break;case"this_week":a=t.subtract(1,"weeks");break;case"this_month":a=t.subtract(1,"months");break;case"this_year":a=t.subtract(6,"months");break;default:a=t}return a.format("YYYY-MM-DD")}},{key:"componentWillMount",value:function(){var e=this;window.fetch("https://api.github.com/search/repositories?q="+this.config.query+this.config.criteria+":>="+this.getDate(this.config.interval)+"&sort="+this.config.sort+"&order="+this.config.order+"&per_page="+this.config.limit).then((function(e){return e.json()})).then((function(t){e.closing||t.message||e.setState({hasError:!1,isLoading:!1,repos:t.items||{}})})).catch((function(t){throw e.setState({hasError:!0,isLoading:!1}),t}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState({isLoading:!0});var a="string"===typeof e.query?e.query+"+":this.config.query,i="string"===typeof e.criteria?e.criteria:this.config.criteria,n="string"===typeof e.sort?e.sort:this.config.sort,r="string"===typeof e.order?e.order:this.config.order,s="string"===typeof e.interval?this.getDate(e.interval):this.getDate(this.config.interval),l="number"===typeof e.limit?e.limit:this.config.limit;window.fetch("https://api.github.com/search/repositories?q="+a+i+":>="+s+"&sort="+n+"&order="+r+"&per_page="+l).then((function(e){return e.json()})).then((function(e){t.closing||e.message||t.setState({hasError:!1,isLoading:!1,repos:e.items||{}})})).catch((function(e){throw t.setState({hasError:!0,isLoading:!1}),e})),window.scrollTo(0,0)}},{key:"render",value:function(){this.state.isLoading;var e=this.state.repos.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"rsg-index",children:t+1}),Object(i.jsx)(Y.Github,{objRepo:e},t)]},t)})),t="",a="",n="";return this.state.hasError?(n="message is-displayed",t="slick-github not-visible",a="refresh not-displayed"):(n="message not-displayed",this.state.isLoading?(t="slick-github not-visible",a="refresh is-displayed"):(t="slick-github is-visible",a="refresh not-displayed")),Object(i.jsxs)("div",{children:[Object(i.jsx)(q.a,{size:72,left:24,top:32,status:"loading",style:z.refresh,className:a}),Object(i.jsx)("h3",{className:n,children:"There was an error retrieving the data. Please try again later."}),Object(i.jsx)(R.a,Object(l.a)(Object(l.a)({},{arrows:!0,dots:!1,infinite:!0,initialSlide:1,speed:1e3,autoplay:!0,autoplaySpeed:5e3,variableWidth:!0,slidesToScroll:5,responsive:[{breakpoint:1455,settings:{slidesToScroll:4}},{breakpoint:1190,settings:{slidesToScroll:3}},{breakpoint:925,settings:{slidesToScroll:2}},{breakpoint:660,settings:{slidesToScroll:1}},{breakpoint:568,settings:"unslick"}]}),{},{className:t,children:e}))]})}}]),a}(n.Component),P=(a(493),j()({palette:{primary1Color:_.grey900,primary2Color:_.grey700,primary3Color:_.grey500,accent1Color:_.orange500,accent2Color:_.orange300,accent3Color:_.orange100,textColor:_.darkBlack,shadowColor:_.fullBlack}})),U=[{value:"created",label:"Created"},{value:"pushed",label:"Pushed"}],G=[{value:"stars",label:"Stars"},{value:"forks",label:"Forks"}],F=[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"}],H=[{value:"today",label:"Today"},{value:"this_week",label:"This Week"},{value:"this_month",label:"This Month"}],J=[{value:10,label:"10"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}],$={appbar:{position:"fixed",background:"#f4f6f8",title:{color:"#000"}}},K=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).config={app:{name:"SlickHub",year:(new Date).getFullYear(),author:"David Spudic",author_url:"https://david-spudic.com"}},i.state={criteria:"pushed",sort:"stars",order:"desc",interval:"today",limit:25},i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){E.a.initialize("UA-105985893-1"),E.a.pageview(window.location.pathname)}},{key:"handleChange",value:function(e,t){this.setState(Object(o.a)({},e,t))}},{key:"handleSelectChange",value:function(e,t,a,i){this.setState(Object(o.a)({},e,i))}},{key:"update",value:function(){this.setState(this.config)}},{key:"render",value:function(){var e=this,t=Object(i.jsx)(A,Object(l.a)(Object(l.a)({},this.state),{},{children:" "}));return Object(i.jsx)(b.a,{muiTheme:P,children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(f.a,{className:"app-bar",showMenuIconButton:!1,style:$.appbar,title:this.config.app.name,titleStyle:$.appbar.title,iconElementRight:Object(i.jsxs)(w.a,{className:"app-bar--options",iconButtonElement:Object(i.jsx)(y.a,{children:Object(i.jsx)(I.SettingsIcon,{})}),iconStyle:{fill:"rgba(0, 0, 0, 0.87)"},anchorOrigin:{horizontal:"left",vertical:"top"},targetOrigin:{horizontal:"left",vertical:"top"},children:[Object(i.jsx)(x.a,{primaryText:"Criteria",rightIcon:Object(i.jsx)(S.a,{}),menuItems:[U.map((function(t,a){return Object(i.jsx)(x.a,{value:t.value,primaryText:t.label,onClick:e.handleChange.bind(e,"criteria",t.value)},a)}))]}),Object(i.jsx)(x.a,{primaryText:"Sort",rightIcon:Object(i.jsx)(S.a,{}),menuItems:[G.map((function(t,a){return Object(i.jsx)(x.a,{value:t.value,primaryText:t.label,onClick:e.handleChange.bind(e,"sort",t.value)},a)}))]}),Object(i.jsx)(x.a,{primaryText:"Order",rightIcon:Object(i.jsx)(S.a,{}),menuItems:[F.map((function(t,a){return Object(i.jsx)(x.a,{value:t.value,primaryText:t.label,onClick:e.handleChange.bind(e,"order",t.value)},a)}))]}),Object(i.jsx)(x.a,{primaryText:"Interval",rightIcon:Object(i.jsx)(S.a,{}),menuItems:[H.map((function(t,a){return Object(i.jsx)(x.a,{value:t.value,primaryText:t.label,onClick:e.handleChange.bind(e,"interval",t.value)},a)}))]}),Object(i.jsx)(x.a,{primaryText:"Limit",rightIcon:Object(i.jsx)(S.a,{}),menuItems:[J.map((function(t,a){return Object(i.jsx)(x.a,{value:t.value,primaryText:t.label,onClick:e.handleChange.bind(e,"limit",t.value)},a)}))]})]})}),Object(i.jsxs)("div",{className:"app-header",children:[Object(i.jsxs)("div",{className:"pure-g app-filter",children:[Object(i.jsx)("div",{className:"pure-u-1 pure-u-lg-2-24 app-filter--icon",children:Object(i.jsx)(I.SettingsIcon,{})}),Object(i.jsx)("div",{className:"pure-u-1-2 pure-u-lg-5-24",children:Object(i.jsx)(T.a,{className:"app-filter--option",floatingLabelText:"Criteria",value:this.state.criteria,onChange:this.handleSelectChange.bind(this,"criteria"),children:U.map((function(e,t){return Object(i.jsx)(x.a,{value:e.value,primaryText:e.label},t)}))})}),Object(i.jsx)("div",{className:"pure-u-1-2 pure-u-lg-5-24",children:Object(i.jsx)(T.a,{className:"app-filter--option",floatingLabelText:"Sort",value:this.state.sort,onChange:this.handleSelectChange.bind(this,"sort"),children:G.map((function(e,t){return Object(i.jsx)(x.a,{value:e.value,primaryText:e.label},t)}))})}),Object(i.jsx)("div",{className:"pure-u-1-2 pure-u-lg-5-24",children:Object(i.jsx)(T.a,{className:"app-filter--option",floatingLabelText:"Order",value:this.state.order,onChange:this.handleSelectChange.bind(this,"order"),children:F.map((function(e,t){return Object(i.jsx)(x.a,{value:e.value,primaryText:e.label},t)}))})}),Object(i.jsx)("div",{className:"pure-u-7-24 pure-u-lg-5-24",children:Object(i.jsx)(T.a,{className:"app-filter--option",floatingLabelText:"Interval",value:this.state.interval,onChange:this.handleSelectChange.bind(this,"interval"),children:H.map((function(e,t){return Object(i.jsx)(x.a,{value:e.value,primaryText:e.label},t)}))})}),Object(i.jsx)("div",{className:"pure-u-5-24 pure-u-lg-2-24",children:Object(i.jsx)(T.a,{className:"app-filter--option",floatingLabelText:"Limit",value:this.state.limit,onChange:this.handleSelectChange.bind(this,"limit"),children:J.map((function(e,t){return Object(i.jsx)(x.a,{value:e.value,primaryText:e.label},t)}))})})]}),Object(i.jsx)("h1",{className:"app-header--description",children:Object(i.jsxs)("div",{className:"headline",children:["These are the ",Object(i.jsx)("span",{className:"highlight",children:this.state.limit})," GitHub repositories ",Object(i.jsx)("span",{className:"highlight",children:this.state.criteria})," ",Object(i.jsx)("span",{className:"highlight",children:this.state.interval.replace("_"," ")})," sorted by ",Object(i.jsx)("span",{className:"highlight",children:this.state.sort})," in ",Object(i.jsx)("span",{className:"highlight",children:this.state.order})," order"]})})]}),Object(i.jsx)("div",{className:"app-content",children:t}),Object(i.jsxs)("div",{className:"app-footer",children:[Object(i.jsxs)("div",{children:[this.config.app.name," \xa9 2019 ",Object(i.jsx)("a",{href:this.config.app.author_url,target:"_blank",children:this.config.app.author})]}),Object(i.jsx)("div",{children:"Made with React, Material-UI, Slick and Github API"})]})]})})}}]),a}(n.Component),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(i.jsx)(K,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Q?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):V(e)}))}}()}},[[494,1,2]]]);
//# sourceMappingURL=main.441c0ed1.chunk.js.map