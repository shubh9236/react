(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,o){e.exports=o(69)},38:function(e,t,o){},69:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(30),i=o.n(r),l=o(18),c=o(7),s=o(8),d=o(10),u=o(9),m=o(11),p=o(14),h=o(12),f=(o(38),function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.title;return n.a.createElement("div",{style:this.getStyle()},n.a.createElement("p",null,n.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),o,n.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:b},"x")))}}]),t}(a.Component)),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},y=f,g=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).markComplete=function(){console.log("hello")},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return n.a.createElement(y,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(a.Component);var v={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},k={color:"#fff",textDecoration:"none"},w=function(){return n.a.createElement("header",{style:v},n.a.createElement("h1",null,"Todo List"),n.a.createElement(p.b,{style:k,to:"/react"},"Home")," | ",n.a.createElement(p.b,{style:k,to:"/about"},"About"))},E=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={title:""},o.onChange=function(e){o.setState({title:e.target.value})},o.onSubmit=function(e){e.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",placeholder:"Add to do...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),n.a.createElement("input",{type:"submit",name:"submit",className:"btn",style:{flex:"1"}}))}}]),t}(a.Component);var j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This is the todo lsit app version 1.0.0. This is part of react crash course"))},O=o(3),x=o.n(O),T=(o(49),function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[{id:x.a.v4(),title:"This Barnes & Noble Book Club Edition contains a special afterword from Martha Hall Kelly, featuring a deeply personal look at the many travels and journeys she took researching the history and the characters for Lost Roses and Lilac Girls, as well as a reading group guide.",completed:!1},{id:x.a.v4(),title:"From the cofounder of VerySmartBrothas.com, and one of the most read writers on race and culture at work today, a provocative and humorous memoir-in-essays that explores the ever-shifting definitions of what it means to be Black (and male) in America",completed:!1},{id:x.a.v4(),title:"An \u201cirresistible\u201d (Anthony Marra) debut about a Russian American girl\u2019s bumpy path to adulthood",completed:!1},{id:x.a.v4(),title:"The Light Years is a joyous and defiant coming-of-age memoir set during one of the most turbulent times in American history",completed:!1},{id:x.a.v4(),title:"A gripping and deftly plotted narrative of family and belonging, Lights All Night Long is a dazzling debut novel from an acclaimed young writer",completed:!1},{id:x.a.v4(),title:"Diary of an Awesome Friendly Kid: Rowley Jefferson Journal",completed:!1},{id:x.a.v4(),title:"Get ready for a whole new look into Jeff Kinney\u2019s Diary of a Wimpy Kid! Introducing the newest Wimpy Kid author\u2014Rowley Jefferson! Rowley\u2019s best friend Greg Heffley has been chronicling his middle-school years in thirteen Diary of a Wimpy Kid journals . . . and counting.",completed:!1},{id:x.a.v4(),title:"I can't even express how much I love this book! I didn't want this story to end!--Reese Witherspoon",completed:!1},{id:x.a.v4(),title:"The #1 Instant New York Times Bestseller \u2013 Soon to be a Major Motion Picture",completed:!1},{id:x.a.v4(),title:"From #1 New York Times bestselling author Richard Paul Evans, the dramatic conclusion in the riveting Broken Road trilogy\u2014a powerful redemption story about finding happiness on a pilgrimage across iconic Route 66.",completed:!1}]},o.markComplete=function(e){o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},o.delTodo=function(e){o.setState({todos:Object(l.a)(o.state.todos.filter(function(t){return t.id!==e}))})},o.addTodo=function(e){var t={id:x.a.v4(),title:e,completed:!1};o.setState({todos:[].concat(Object(l.a)(o.state.todos),[t])})},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(w,null),n.a.createElement(h.a,{exact:!0,path:"/react",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,{addTodo:e.addTodo}),n.a.createElement(g,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),n.a.createElement(h.a,{path:"/about",component:j}))))}}]),t}(a.Component));i.a.render(n.a.createElement(T,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1700b801.chunk.js.map