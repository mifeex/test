(this.webpackJsonptest_app=this.webpackJsonptest_app||[]).push([[0],{177:function(e,t,a){e.exports=a(376)},182:function(e,t,a){},183:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(49),c=a.n(l),u=(a(182),a(183),a(147)),o=a(35),i=a(138),m=a.n(i),d=a(18),s=function(e){return r.a.createElement(d.c,{width:500,height:500,data:e.data,margin:{top:5,right:20,left:10,bottom:5}},r.a.createElement(d.e,{dataKey:"name"}),r.a.createElement(d.d,null),r.a.createElement(d.a,{stroke:"#f5f5f5"}),r.a.createElement(d.b,{type:"monotone",dataKey:"uv",stroke:"#ff7300",yAxisId:0}),r.a.createElement(d.b,{type:"monotone",dataKey:"pv",stroke:"#387908",yAxisId:1}))},E=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1];return setInterval((function(){return e.getCurrencyAPI(!1)}),6e5),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,e.items.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",null,"1$ = ",e.dollar,"\u20bd"),r.a.createElement("div",null,"1\u20ac = ",e.euro,"\u20bd"))}))),r.a.createElement("button",{onClick:function(){return c(!l)}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u043a..."),r.a.createElement("div",{className:"showTableCenter"},l&&r.a.createElement(s,{data:e.data})))},f=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)([]),d=Object(o.a)(i,2),s=d[0],f=d[1],p=function(e,t){c([{id:l.length,dollar:e,euro:t}]),f([].concat(Object(u.a)(s),[{name:s.length,uv:e,pv:t,amt:300}]))};Object(n.useEffect)((function(){return b(!0)}),[s.uv]);var b=function(e){m.a.get("https://www.cbr-xml-daily.ru/daily_json.js").then((function(t){return e?p(t.data.Valute.USD.Value,t.data.Valute.EUR.Value):p(t.data.Valute.USD.Previous,t.data.Valute.EUR.Previous)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){b(!0)}},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0446\u0435\u043d\u0443 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c...."),r.a.createElement(E,{items:l,addItem:p,getCurrencyAPI:b,data:s}))};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.c9278fa2.chunk.js.map