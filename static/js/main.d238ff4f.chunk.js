(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(5),o=n.n(s),u=(n(17),n(18),n(2)),i=n(8),l=n(6),h=n(7),j=n(10),b=n(9),d=(n(19),function(){return Object(c.jsx)("button",{className:"btn-convert",children:"Convert"})}),m=(n(20),function(e){var t=e.selectedCurrency,n=e.onChangeCurrency,r=e.currencyOptions,a=e.labelName;return Object(c.jsxs)("div",{className:"select-wrapper",children:[Object(c.jsx)("label",{className:"select-label",htmlFor:a,children:a}),Object(c.jsx)("select",{className:"select-currency",value:t,onChange:n,children:r.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))})]})}),C=n(4),v=n(11),O=(n(21),function(e){var t=e.handleAmountChange,n=Object(v.a)(e,["handleAmountChange"]);return Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("input",Object(C.a)(Object(C.a)({type:"number",onChange:t},n),{},{required:!0})),Object(c.jsx)("label",{htmlFor:"amount",className:"label-name",children:Object(c.jsx)("span",{className:"content-name",children:"amount"})})]})}),f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).fetchData=function(t){var n="https://api.exchangeratesapi.io/latest?base=".concat(t);fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({rates:t.rates,currencies:Object(i.a)(Object.keys(t.rates).sort())})}))},e.handleAmountChange=function(t){var n=t.target,c=n.value,r=n.name;e.setState(Object(u.a)({},r,c))},e.changeBaseCurrency=function(t){e.setState({baseCurrency:t.target.value}),e.fetchData(t.target.value)},e.changetoCurrency=function(t){e.setState({toCurrency:t.target.value}),e.fetchData(t.target.value)},e.handleConvert=function(t){t.preventDefault();var n=e.state,c=n.originalAmount,r=n.toCurrency,a=n.rates;e.setState({converted:(c*a[r]).toFixed(3),isConverted:!0})},e.state={originalAmount:"",baseCurrency:"NOK",toCurrency:"USD",currencies:[],rates:[],converted:"",isConverted:!1},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchData(this.state.baseCurrency)}},{key:"render",value:function(){var e=this.state,t=e.originalAmount,n=e.baseCurrency,r=e.toCurrency,a=e.currencies,s=e.isConverted,o=e.converted,u="".concat(t," ").concat(n," = ").concat(o," ").concat(r);return Object(c.jsxs)("form",{onSubmit:this.handleConvert,children:[Object(c.jsx)(O,{name:"originalAmount",value:t,id:"originalAmount",handleAmountChange:this.handleAmountChange}),Object(c.jsx)(m,{labelName:"from",currencyOptions:a,onChangeCurrency:this.changeBaseCurrency,name:"baseCurrency",id:"from",selectedCurrency:n}),Object(c.jsx)(m,{labelName:"to",currencyOptions:a,onChangeCurrency:this.changetoCurrency,name:"toCurrency",id:"to",selectedCurrency:r}),Object(c.jsx)(d,{}),Object(c.jsx)("p",{children:s?u:"Converted \ud83d\udcb0 will appear here."})]})}}]),n}(r.Component);var p=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Currency Converter"})}),Object(c.jsx)("div",{className:"App-content",children:Object(c.jsx)(f,{})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),y()}],[[22,1,2]]]);
//# sourceMappingURL=main.d238ff4f.chunk.js.map