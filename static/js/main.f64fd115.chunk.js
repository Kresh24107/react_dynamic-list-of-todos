(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,s){t.exports=s(19)},,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),o=s.n(a),n=s(8),r=s.n(n),i=(s(15),s(2)),u=s(3),c=s(6),l=s(4),d=s(1),m=s(5);s(16);function h(t){return o.a.createElement("div",{className:"todo-item"},o.a.createElement("span",{className:"todo-title"},t.title),o.a.createElement("span",null,t.completed?"completed":"todo"),t.children)}function p(t){return o.a.createElement("div",{className:"user-info"},o.a.createElement("h3",null,t.name),o.a.createElement("div",null,o.a.createElement("a",{href:"mailto:".concat(t.email)},t.username)))}s(17);var f=function(t){function e(t){var s;return Object(i.a)(this,e),(s=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={todos:s.props.todos,users:s.props.users,sortBy:"time"},s.sort=s.sort.bind(Object(d.a)(s)),s}return Object(m.a)(e,t),Object(u.a)(e,[{key:"sort",value:function(t){var e=this;if("title"===t.target.dataset.sortType){var s=this.state.todos.sort(function(t,e){return t.title.localeCompare(e.title)});this.setState(function(){return{todos:s}})}if("status"===t.target.dataset.sortType){var a=this.state.todos.sort(function(t,e){return t.completed>e.completed?1:t.completed<e.completed?-1:0});this.setState(function(){return{todos:a}})}if("name"===t.target.dataset.sortType){var o=this.state.todos.sort(function(t,s){return e.state.users[t.userId].name>e.state.users[s.userId].name?1:e.state.users[t.userId].name<e.state.users[s.userId].name?-1:0});this.setState(function(){return{todos:o}})}}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"todo-list"},o.a.createElement("div",{className:"sort-panel"},"Sort to:",o.a.createElement("button",{"data-sort-type":"title",onClick:this.sort},"Title"),o.a.createElement("button",{"data-sort-type":"status",onClick:this.sort},"status"),o.a.createElement("button",{"data-sort-type":"name",onClick:this.sort},"Name")),this.props.todos.map(function(e){return o.a.createElement(h,{key:e.id,title:e.title,completed:e.completed},o.a.createElement(p,{name:t.state.users[e.userId].name,username:t.state.users[e.userId].username,email:t.state.users[e.userId].email}))}))}}]),e}(a.Component),v=(s(18),function(t){function e(t){var s;return Object(i.a)(this,e),(s=Object(c.a)(this,Object(l.a)(e).call(this,t))).data=[s.props.urlUsers,s.props.urlTodos],s.state={todos:[],users:[],status:"before download"},s.showTodos=s.showTodos.bind(Object(d.a)(s)),s}return Object(m.a)(e,t),Object(u.a)(e,[{key:"createPromise",value:function(t){return fetch(t).then(function(t){return t.json()})}},{key:"getAllData",value:function(t){var e=this;return Promise.all(t.map(function(t){return e.createPromise(t)}))}},{key:"init",value:function(){var t=this;this.getAllData(this.data).then(function(e){return t.parseData(e)})}},{key:"parseData",value:function(t){var e=t[1],s=this.usersToObj(t[0]);this.setState(function(){return{todos:e,users:s,status:"redy to show"}})}},{key:"showTodos",value:function(){this.setState(function(t){return t.status="loading"}),this.init()}},{key:"usersToObj",value:function(t){return t.reduce(function(t,e){return t[e.id]=e,t},{})}},{key:"render",value:function(){return o.a.createElement("div",null,"before download"===this.state.status&&o.a.createElement("button",{className:"download",onClick:this.showTodos},"Show Todos!"),"loading"===this.state.status&&o.a.createElement("button",{className:"download",disabled:!0},"Loading..."),"redy to show"===this.state.status&&o.a.createElement(f,{todos:this.state.todos,users:this.state.users}))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,{urlTodos:"https://jsonplaceholder.typicode.com/todos",urlUsers:"https://jsonplaceholder.typicode.com/users"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.f64fd115.chunk.js.map