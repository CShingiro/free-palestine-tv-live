import{a as u}from"./vm.1d49fb8a.js";import{a0 as m,m as i,g as s}from"./index.16b29dc5.js";function f(){let e=null;const o=s();function t(){e!==null&&(clearTimeout(e),e=null)}return m(t),i(t),{removeTimeout:t,registerTimeout(n,r){t(),u(o)===!1&&(e=setTimeout(()=>{e=null,n()},r))}}}export{f as u};