(this["webpackJsonplearn-react-with-minin"]=this["webpackJsonplearn-react-with-minin"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(4),o=n.n(r),a=(n(14),n(2)),s=i.a.createContext(),l=n(0),d={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},input:{marginRight:".5rem"}};var u=function(e){var t=e.todo,n=e.index,i=e.onChange,r=Object(c.useContext)(s).removeTodo,o=[];return t.completed&&o.push("done"),Object(l.jsxs)("li",{style:d.li,children:[Object(l.jsxs)("span",{className:o.join(" "),children:[Object(l.jsx)("input",{checked:t.completed,style:d.input,type:"checkbox",onChange:function(){return i(t.id)}}),Object(l.jsx)("strong",{children:n+1}),"\xa0",t.title]}),Object(l.jsx)("button",{className:"rm",onClick:r.bind(null,t.id),children:"\xd7"})]})},j={ul:{listStyle:"none",margin:0,padding:0}};var b=function(e){return Object(l.jsx)("ul",{style:j.ul,children:e.todos.map((function(t,n){return Object(l.jsx)(u,{todo:t,index:n,onChange:e.onToggle},t.id)}))})};var O=function(){return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(l.jsxs)("div",{className:"lds-ring",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})},h=n(8);var m=function(e){var t=e.onCreate,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(c.useState)(e),n=Object(a.a)(t,2),i=n[0],r=n[1];return{bind:{value:i,onChange:function(e){return r(e.target.value)}},clear:function(){return r("")},value:function(){return i}}}("");return Object(l.jsxs)("form",{style:{marginBottom:"1rem"},onSubmit:function(e){e.preventDefault(),n.value().trim()&&(t(n.value()),n.clear())},children:[Object(l.jsx)("input",Object(h.a)({},n.bind)),Object(l.jsx)("button",{type:"submit",children:"Add todo"})]})},p=n(5),x=n(6),f=n(9),v=n(7),g=(n(16),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isOpen:!1},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsx)("button",{onClick:function(){return e.setState({isOpen:!0})},children:"Open Modal"}),this.state.isOpen&&Object(l.jsx)("div",{className:"modal",children:Object(l.jsxs)("div",{className:"modal-body",children:[Object(l.jsx)("h1",{children:"Modal title"}),Object(l.jsx)("p",{children:"Heloo, My name is Alexander"}),Object(l.jsx)("button",{onClick:function(){return e.setState({isOpen:!1})},children:"Close modal"})]})})]})}}]),n}(i.a.Component));var y=function(){var e=i.a.useState([]),t=Object(a.a)(e,2),n=t[0],r=t[1],o=i.a.useState(!0),d=Object(a.a)(o,2),u=d[0],j=d[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return e.json()})).then((function(e){r(e),j(!1)}))}),[]),Object(l.jsx)(s.Provider,{value:{removeTodo:function(e){r(n.filter((function(t){return t.id!==e})))}},children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h1",{children:"React tutorial"}),Object(l.jsx)(g,{}),Object(l.jsx)(m,{onCreate:function(e){r(n.concat([{title:e,id:Date.now(),completed:!1}]))}}),u&&Object(l.jsx)(O,{}),n.length?Object(l.jsx)(b,{todos:n,onToggle:function(e){r(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):u?null:Object(l.jsx)("p",{children:"No todos"})]})})};o.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.abb5bccc.chunk.js.map