(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(t,e,n){t.exports=n(64)},36:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(28),c=n.n(r),l=n(18),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=n(13),f=n(11),h=(n(36),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"x")))}}]),e}(o.Component)),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},y=h,v=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).markComplete=function(){console.log("hello")},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(o.Component);var g={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},j=function(){return a.a.createElement("header",{style:g},a.a.createElement("h1",null,"Todo List"),a.a.createElement(m.b,{style:E,to:"/react"},"Home")," | ",a.a.createElement(m.b,{style:E,to:"/about"},"About"))},O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){n.setState({title:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add to do...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",name:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);var k=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the todo lsit app version 1.0.0. This is part of react crash course"))},x=n(14),C=n.n(x),T=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(j,null),a.a.createElement(f.a,{exact:!0,path:"/react",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{addTodo:t.addTodo}),a.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(f.a,{path:"/about",component:k}))))}}]),e}(o.Component);c.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.fcd1d28f.chunk.js.map