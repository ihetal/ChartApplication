(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,a){e.exports=a(70)},40:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),i=(a(40),a(14)),s=a(1),o=a(6),u=a(7),m=a(9),d=a(8),h=a(11),p=a.n(h),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).logout=function(){p.a.get("/api/logout")},n.state={isAuthenticated:!0,username:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/userprofile").then((function(t){e.setState({isAuthenticated:!0,username:t.data.username})})).catch((function(t){t.response&&e.setState({isAuthenticated:!1})}))}},{key:"render",value:function(){var e=null;return this.state.isAuthenticated||(e=l.a.createElement(s.a,{to:"/"})),l.a.createElement("div",null,e,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("h2",null,l.a.createElement("i",{class:"fa fa-home","aria-hidden":"true"})," ","  ","Welcome"))),l.a.createElement("span",{className:"navbar-text",style:{textAlign:"right"}},""!==this.state.username?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Hello ",this.state.username,"!\xa0\xa0",l.a.createElement(i.b,{to:"/",onClick:this.logout},"Logout"))):null))))}}]),a}(n.Component),E=(a(63),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).onClick=function(){p.a.get("/auth/google")},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"login"},l.a.createElement("h2",null,l.a.createElement("i",{class:"fas fa-chart-line"})," Chart Application"),l.a.createElement("div",{class:"section"},l.a.createElement("p",null,"Please login in to view")),l.a.createElement("div",{class:"container"},l.a.createElement("button",{class:"btn btn-danger",onClick:this.onClick},l.a.createElement("i",{class:"fab fa-google left"}),"\xa0\xa0 Login")))))}}]),a}(n.Component)),v=a(18),b=a.n(v),f=a(32),y=a.n(f),_=a(19),k=a.n(_),O=a(33),j=a.n(O);y()(b.a),k.a.fcRoot(b.a,j.a);var S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:[{label:"Ice Cream Sandwich",value:"1000"},{label:"Jelly Bean",value:"5300"},{label:"Kitkat",value:"10500"},{label:"Lollipop",value:"18900"},{label:"Marshmallow",value:"17904"}]},n}return Object(u.a)(a,[{key:"render",value:function(){var e={chart:{caption:"Total Placed by Degree",showpercentvalues:"1",defaultcenterlabel:"",aligncaptionwithcanvas:"0",captionpadding:"0",decimals:"1",plottooltext:"<b>$percentValue</b> of our Android users are on <b>$label</b>",centerlabel:"Students: $value",theme:"candy"},data:this.props.data};return l.a.createElement(k.a,{type:"doughnut2d",width:"100%",height:"350",dataFormat:"JSON",dataSource:e})}}]),a}(n.Component),C=(a(69),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,this.props.data.gender),l.a.createElement("td",null,this.props.data.degree_t),l.a.createElement("td",null,this.props.data.degree_p),l.a.createElement("td",null,this.props.data.specialisation),l.a.createElement("td",null,this.props.data.mba_p),l.a.createElement("td",null,this.props.data.status),l.a.createElement("td",null,this.props.data.workex)))}}]),a}(n.Component)),w=a(34),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(w.a)({},e.target.name,e.target.value)),setTimeout((function(){return n.props.filterSelected(n.state)}),500)},n.reset=function(){window.location.reload(!0)},n.state={gender:"",degree:"",specialization:"",workex:"",degree_filter:[],specialization_filter:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/filters").then((function(t){return e.setState({degree_filter:t.data.degree,specialization_filter:t.data.specialization})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{class:"custom-select filters",name:"gender",value:this.state.gender,onChange:this.onChange},l.a.createElement("option",{selected:!0},"Gender"),l.a.createElement("option",{value:"M"},"Male"),l.a.createElement("option",{value:"F"},"Female")),l.a.createElement("select",{class:"custom-select filters",name:"degree",value:this.state.degree,onChange:this.onChange},l.a.createElement("option",{selected:!0},"Degree"),0!==this.state.degree_filter.length?l.a.createElement(l.a.Fragment,null,this.state.degree_filter.map((function(e){return l.a.createElement("option",{key:e.degree_t,value:e.degree_t},e.degree_t)}))):null),l.a.createElement("select",{class:"custom-select filters",name:"specialization",value:this.state.specialization,onChange:this.onChange},l.a.createElement("option",{selected:!0},"Specialization"),0!==this.state.specialization_filter.length?l.a.createElement(l.a.Fragment,null,this.state.specialization_filter.map((function(e){return l.a.createElement("option",{key:e.specialisation,value:e.specialisation},e.specialisation)}))):null),l.a.createElement("select",{class:"custom-select filters",name:"workex",value:this.state.workex,onChange:this.onChange},l.a.createElement("option",{selected:!0},"Work Experience"),l.a.createElement("option",{value:"Yes"},"Yes"),l.a.createElement("option",{value:"No"},"No")),l.a.createElement("button",{class:"btn btn-primary",style:{maxWidth:"150px"},onClick:this.reset},"Reset"))}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).prevPage=function(){n.state.page>1&&n.setState({page:n.state.page-1})},n.nextPage=function(){n.state.page<Math.ceil(n.state.tabledata.length/n.state.limit)&&n.setState({page:n.state.page+1})},n.filterSelected=function(e){p.a.post("/api/datafiltered",e).then((function(e){n.setState({avg_salary:e.data.avg_salary.Avg_Salary,total_placed:e.data.total_placed.Total_Placed,by_degree:e.data.by_degree,tabledata:e.data.tabledata})}))},n.state={avg_salary:0,total_placed:0,by_degree:"",tabledata:[],page:1,limit:10,totalpages:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/chartdata").then((function(t){e.setState({avg_salary:t.data.avg_salary.Avg_Salary,total_placed:t.data.total_placed.Total_Placed,by_degree:t.data.by_degree,tabledata:t.data.tabledata})}))}},{key:"render",value:function(){var e=this,t=null;return 0!==this.state.tabledata.length&&(t=Math.ceil(this.state.tabledata.length/this.state.limit)),l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{class:"filter__header"},l.a.createElement("h4",null," FILTERS"),l.a.createElement(x,{filterSelected:this.filterSelected})),l.a.createElement("div",null,l.a.createElement("section",{class:"content"},l.a.createElement("div",{class:"container",style:{display:"flex"}},l.a.createElement("div",{class:"col-lg-4 col-md-4 card-section"},l.a.createElement("div",{class:"card"},l.a.createElement("h2",null,"Average Salary"),l.a.createElement("h2",null,this.state.avg_salary)),l.a.createElement("div",{class:"card"},l.a.createElement("h1",null,"Total Placed"),l.a.createElement("h2",null,this.state.total_placed))),l.a.createElement("div",{class:"col-lg-8 col-md-8",style:{width:"800px",height:"200px"}},l.a.createElement(S,{data:this.state.by_degree})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"pagination"},l.a.createElement("p",null,"Showing Page ",this.state.page," of ",t),l.a.createElement("h4",{onClick:this.prevPage},"\xab"),l.a.createElement("h4",{onClick:this.nextPage},"\xbb")),l.a.createElement("table",{class:"table table-dark custom-table table-sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",class:"th-sm"},"Gender"),l.a.createElement("th",{scope:"col"},"Degree"),l.a.createElement("th",{scope:"col"},"Degree Percentage"),l.a.createElement("th",{scope:"col"},"Specialization"),l.a.createElement("th",{scope:"col"},"MBA Percentage"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"Work Experience"))),l.a.createElement("tbody",null,0!==this.state.tabledata.length?l.a.createElement(l.a.Fragment,null,this.state.tabledata.filter((function(t,a){return a>=10*(e.state.page-1)&&a<10*e.state.page})).map((function(e){return l.a.createElement(C,{data:e})}))):null)))),l.a.createElement("br",null)))}}]),a}(n.Component);var F=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(s.b,{exact:!0,path:"/",component:E}),l.a.createElement(s.b,{path:"/dashboard",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4d83d23c.chunk.js.map