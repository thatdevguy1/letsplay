(this.webpackJsonpletsplay=this.webpackJsonpletsplay||[]).push([[0],{117:function(e,t,n){},141:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(13),o=n.n(s),i=(n(191),n(40)),l=n(21),d=(n(192),n(14)),u=n.n(d),j=n(29),b=n(8),p=n(25),h=n.n(p),v=n(35),O=function(e){return{type:"SETLATLNG",payload:e}},m=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",url:"/api/getEvents",headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,h()(n);case 4:a=e.sent,console.log("getEvents res: ",a),a&&!0===a.data.response&&t({type:"getEvents",payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"get",url:"/api/getMyEvents",headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,h()(a);case 4:c=t.sent,console.log("Myevents are: ",c),c&&!0===c.data.response&&n({type:"toggleMyEvents",payload:{response:c,toggle:e}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"get",url:"/api"+"/getEvent?id=".concat(e),headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,h()(a);case 4:(c=t.sent)&&!0===c.data.response&&n({type:"selectEvent",payload:c.data._doc}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return{type:"selectEvent",payload:e}},y=n(316),E=n(285),w=(n(281),n(312)),k=(n(284),n(314),n(287),n(286)),C=(n(149),n(55)),I=n(73);n(279),Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var N=n(238),S=n(289),_=n(288),M=n(160),T=n.n(M),D=n(152),L=n.n(D),F=n(150),R=n.n(F),P=n(153),B=n.n(P),V=n(154),z=n.n(V),A=n(155),H=n.n(A),W=n(151),Y=n.n(W),X=n(156),$=n.n(X),G=n(157),q=n.n(G),U=n(158),J=n.n(U),K=n(159),Q=n.n(K);var Z=function(e){var t=Object(l.f)(),n=Object(b.b)();return Object(a.jsxs)(N.a,{style:e.selected?{border:"solid 3px #c5ffc5",background:"#daffda"}:null,onClick:function(){n(g(e.eventData))},children:[Object(a.jsx)("input",{type:"hidden","data-id":e.eventData._id}),Object(a.jsx)(_.a,{children:Object(a.jsx)(y.a,{children:function(){switch(e.eventData.type){case"Soccer":return Object(a.jsx)(R.a,{});case"Hockey":return Object(a.jsx)(Y.a,{});case"Baseball":return Object(a.jsx)(L.a,{});case"Football":return Object(a.jsx)(B.a,{});case"Basketball":return Object(a.jsx)(z.a,{});case"Cricket":return Object(a.jsx)(H.a,{});case"Rugby":return Object(a.jsx)($.a,{});case"Volleyball":return Object(a.jsx)(q.a,{});case"Golf":return Object(a.jsx)(J.a,{});case"Handball":return Object(a.jsx)(Q.a,{});default:return Object(a.jsx)(T.a,{})}}()})}),Object(a.jsx)(S.a,{primary:e.eventData.name,secondary:e.eventData.description,style:{maxHeight:"66px",overflow:"hidden",width:"70%",paddingRight:"20px"}}),Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(a){var c;a.preventDefault(),c=e.eventData,n(g(c)),t.push("/event-information?id=".concat(c._id))},children:"Learn More"})]})};var ee=n(283),te=(n(223),Object(I.a)((function(e){return{root:{width:"100%",maxWidth:930,backgroundColor:e.palette.background.paper}}})));var ne=function(){var e=Object(c.useRef)(null),t=te(),n=Object(b.b)(),r=Object(b.c)((function(e){return e.eventsInfo}));return Object(c.useEffect)((function(){n(m())}),[]),Object(c.useEffect)((function(){var t=Array.from(e.current.children).find((function(e){return e.children[0].getAttribute("data-id")===r.selectedEvent._id}));t&&t.scrollIntoView({behavior:"smooth",block:"start"})}),[r]),Object(a.jsx)("div",{className:"events",children:Object(a.jsx)(ee.a,{ref:e,className:t.root,children:!1===r.toggleMyEvents?r.events.map((function(e){return e.name.toLowerCase().includes(r.searchEvent)&&e.public?Object(a.jsx)(Z,{eventData:e,selected:e._id===r.selectedEvent._id},e._id):""})):r.myEvents.map((function(e){return e.name.toLowerCase().includes(r.searchEvent)&&Object(a.jsx)(Z,{eventData:e,selected:e._id===r.selectedEvent._id},e._id)}))})})},ae=n(5),ce=n(295),re=(n(224),n(293)),se=n(294),oe=(n(141),n(290)),ie=n(291),le=n(24),de={customMarkerIcon:Object(le.divIcon)({html:'<span style="'.concat("\n  background-color: #3F51B4;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: block;\n  left: -1.5rem;\n  top: -1.5rem;\n  position: relative;\n  border-radius: 1.5rem 1.5rem 0;\n  transform: rotate(45deg);\n  border: 1px solid #FFFFFF",'">')}),selectedCustomMarkerIcon:Object(le.divIcon)({html:'<span style="'.concat("\n  background-color: #2bb437;\n  border: solid 2px black;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: block;\n  left: -1.5rem;\n  top: -1.5rem;\n  position: relative;\n  border-radius: 2.5rem 2.5rem 0;\n  transform: rotate(45deg);\n  border: 1px solid #FFFFFF",'">')})},ue=function(){var e=Object(oe.a)(),t=Object(b.c)((function(e){return e.eventsInfo.selectedEvent.location})),n=t.latitude,r=t.longitude;return Object(c.useEffect)((function(){e.setView([n,r],14)})),Object(a.jsx)(ie.a,{position:[n,r],icon:de.customMarkerIcon})},je=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.eventsInfo.createEventLocation})),n=t.lat,r=t.lng,s=Object(oe.a)(),o=Object(oe.b)({click:function(t){e(O([t.latlng.lat,t.latlng.lng])),s.setView([t.latlng.lat,t.latlng.lng])},locationfound:function(t){e(O([t.latlng.lat,t.latlng.lng])),s.setView([t.latlng.lat,t.latlng.lng],16)}});return Object(c.useEffect)((function(){o.locate()}),[]),Object(a.jsx)(ie.a,{position:[n,r],icon:de.customMarkerIcon})},be=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.eventsInfo.selectedEvent.location})),n=t.latitude,r=t.longitude,s=Object(b.c)((function(e){return e.eventsInfo.createEventLocation})),o=s.lat,i=s.lng,l=Object(oe.a)();return Object(oe.b)({click:function(t){e(O([t.latlng.lat,t.latlng.lng])),l.setView([t.latlng.lat,t.latlng.lng])}}),Object(c.useEffect)((function(){l.setView([n,r],16),e(O([n,r]))}),[]),Object(a.jsx)(ie.a,{position:[o,i],icon:de.customMarkerIcon})},pe=n(16),he=n(292),ve=n(161),Oe=n.n(ve),me=(n(226),n(228),n(33)),fe=n.n(me),xe=n(162);fe()().format();var ge=function(){var e=Object(b.c)((function(e){return e.eventsInfo})),t=Object(c.useState)([0,0,0,0]),n=Object(pe.a)(t,2),r=(n[0],n[1],Object(b.b)()),s=Object(oe.a)(),o=Object(oe.b)({locationfound:function(e){s.setView([e.latlng.lat,e.latlng.lng],16)}});return Object(c.useEffect)((function(){o.locate()}),[]),Object(c.useEffect)((function(){Object.keys(e.selectedEvent)>0&&s.setView([e.selectedEvent.location.latitude,e.selectedEvent.location.longitude],17)}),[e.selectedEvent]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Oe.a,{iconCreateFunction:function(e){var t=e.getChildCount();return e.getAllChildMarkers().map((function(e){return e.options.isSelected})).includes("true")?Object(le.divIcon)({html:"<div>\n              <span>".concat(t,"</span>\n            </div>"),className:"marker-cluster selected"}):Object(le.divIcon)({html:"<div>\n              <span>".concat(t,"</span>\n            </div>"),className:"marker-cluster"})},spiderLegPolylineOptions:{weight:0,opacity:0},children:Array.isArray(e.events)&&e.events.map((function(t,n){if(t)return Object(a.jsx)(ie.a,{"data-id":t._id,icon:t._id===e.selectedEvent._id?de.selectedCustomMarkerIcon:de.customMarkerIcon,isSelected:t._id===e.selectedEvent._id?"true":"false",position:[t.location.latitude,t.location.longitude],eventHandlers:{click:function(){r(g(t))}},children:Object(a.jsxs)(he.a,{children:[Object(a.jsx)("span",{children:t.name}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:fe()(t.date).format("dddd, MMMM Do YYYY")}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:t.startTime})]})},"event-".concat(n))}))},Object(xe.v4)())})},ye=function(e){var t=e.type;return Object(a.jsx)("div",{className:"map",children:Object(a.jsxs)(re.a,{center:[0,0],zoom:2,children:[Object(a.jsx)(se.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(){switch(t){case"displayLocation":return Object(a.jsx)(ue,{});case"setLocation":return Object(a.jsx)(je,{});case"editLocation":return Object(a.jsx)(be,{});case"cluster":return Object(a.jsx)(ge,{})}}()]})})},Ee=Object(ae.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(ce.a);var we=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.eventsInfo.toggleMyEvents}));return Object(l.f)(),Object(c.useEffect)((function(){e(f(t))}),[]),Object(a.jsxs)("div",{className:"dashboard",children:[Object(a.jsxs)("div",{className:"switchWrapper",children:[Object(a.jsx)("span",{style:{fontSize:"12px",padding:"0 10px"},children:"My Events"}),Object(a.jsx)(Ee,{checked:!t,onChange:function(n){e(f(!t))},name:"publicEvent"}),Object(a.jsx)("span",{style:{fontSize:"12px",padding:"0 10px"},children:"All Events"})]}),Object(a.jsxs)("div",{className:"list-and-map",children:[Object(a.jsx)(ne,{}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(ye,{type:"cluster"})})]})]})},ke=n(23),Ce=n(313),Ie=n(22),Ne=n(319),Se=n(297),_e=(n(232),n(109));fe()().format();var Me=["Soccer","Hockey","Baseball","Football","Cricket","Handball","Rugby","Tennis","Volleyball","Golf"];var Te=function(){var e=Object(c.useRef)(null),t=Object(l.f)(),n=Object(b.b)(),r=Object(c.useState)(!0),s=Object(pe.a)(r,2),o=s[0],i=s[1],d=Object(b.c)((function(e){return e.eventsInfo})).createEventLocation,p=Object(c.useState)(fe()()),O=Object(pe.a)(p,2),f=O[0],x=O[1],g=Object(c.useState)(fe()()),y=Object(pe.a)(g,2),I=y[0],N=y[1],S=function(){var a=Object(j.a)(u.a.mark((function a(c){var r,s,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),console.log(e.current.sportName.value),r={name:e.current.eventName.value,type:e.current.sportName.value,icon:"Sports".concat(e.current.sportName.value,"OutlinedIcon"),location:{address:"n/a",latitude:d.lat,longitude:d.lng},description:e.current.description.value,startTime:I.format("LT"),date:f,public:o},console.log("data is: ",r),s={method:"post",data:r,url:"/api/createEvent",headers:{"Content-Type":"application/json"}},a.prev=5,a.next=8,h()(s);case 8:i=a.sent,console.log(i),i&&!0===i.data.response&&(n(m()),v.b.success("Event has been created"),t.push("/")),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(5),console.log(a.t0),v.b.error("Something went wrong. Please try again later");case 17:case"end":return a.stop()}}),a,null,[[5,13]])})));return function(e){return a.apply(this,arguments)}}(),_=Object(ae.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.primary.main,"& + $track":{opacity:1,backgroundColor:e.palette.common.white,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(ce.a);return Object(a.jsxs)("div",{className:"create-event",children:[Object(a.jsxs)("form",{ref:e,children:[Object(a.jsxs)(Ie.a,{utils:_e.a,children:[Object(a.jsx)(C.a,{variant:"h4",style:{margin:"0 0 40px 0"},gutterBottom:!0,children:"Create Event"}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsxs)(k.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(a.jsx)(k.a,{item:!0,children:"Private"}),Object(a.jsx)(k.a,{item:!0,children:Object(a.jsx)(_,{checked:o,onChange:function(e){i(!o)},name:"publicEvent"})}),Object(a.jsx)(k.a,{item:!0,children:"Public"})]})}),Object(a.jsxs)(k.a,{container:!0,spacing:3,children:[Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{required:!0,id:"username",name:"username",label:"Username",fullWidth:!0,autoComplete:"given-name"})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{required:!0,id:"eventName",name:"eventName",label:"Event Name",fullWidth:!0,autoComplete:"given-name"})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(Ce.a,{required:!0,fullWidth:!0,freeSolo:!0,options:Me.map((function(e){return e})),renderInput:function(e){return Object(a.jsx)(w.a,Object(ke.a)(Object(ke.a)({},e),{},{id:"sport",name:"sportName",label:"Sport",margin:"normal",variant:"outlined"}))}})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(Ne.a,{margin:"normal",id:"time-picker",label:"Start Time",value:I,onChange:function(e){N(e)},KeyboardButtonProps:{"aria-label":"change time"}})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{margin:"normal",id:"date-picker-dialog",label:"Date",format:"MM/DD/yyyy",value:f,onChange:function(e){x(e)},KeyboardButtonProps:{"aria-label":"change date"}})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{required:!0,id:"description",name:"description",label:"Event Description",fullWidth:!0,multiline:!0})})]})]}),Object(a.jsx)(E.a,{variant:"contained",style:{margin:"40px 0 0 0"},onClick:S,children:"Create Event"})]}),Object(a.jsx)("div",{className:"mapHolder",children:Object(a.jsx)(ye,{type:"setLocation"})})]})},De=(n(117),n(315));function Le(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var Fe=Object(I.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),display:"flex",flexDirection:"column"}}}));function Re(e){var t=Fe(),n=r.a.useState(Le),s=Object(pe.a)(n,1)[0],o=r.a.useState(!1),i=Object(pe.a)(o,2),l=i[0],d=i[1],p=Object(b.b)(),O=Object(c.useRef)(null),m=function(){d(!1)},f=Object(a.jsxs)("div",{style:s,className:t.paper,children:[Object(a.jsx)("h2",{id:"simple-modal-title",children:"What name should we use?"}),Object(a.jsx)(w.a,{id:"standard-basic",label:"username",inputRef:O}),Object(a.jsx)("button",{style:{marginTop:"20px"},onClick:function(){var t={participantsName:O.current.value,id:e.eventId};p(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"put",url:"/api/joinEvent",headers:{"Content-Type":"application/json"},data:e},t.prev=1,t.next=4,h()(a);case 4:c=t.sent,console.log("response from join event: ",c),c&&!0===c.data.response?(n({type:"selectEvent",payload:c.data._doc}),v.b.success("You have joined this event as ".concat(e.participantsName))):v.b.warn(c.data.message),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),v.b.error("Something went wrong! Please try again later");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t)),m()},children:"Join Event"})]});return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:e.btnStyle,type:"button",onClick:function(){d(!0)},children:e.children}),Object(a.jsx)(De.a,{open:l,onClose:m,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:f})]})}var Pe=n(298),Be=n(299),Ve=n(164),ze=n.n(Ve);var Ae=function(e){var t=e.eventInfo;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Participants"}),Object(a.jsx)(ee.a,{component:"nav","aria-label":"contacts",children:t.selectedEvent.participants&&t.selectedEvent.participants.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(N.a,{children:[Object(a.jsx)(Pe.a,{children:Object(a.jsx)(ze.a,{})}),Object(a.jsx)(S.a,{primary:e.name})]}),Object(a.jsx)(Be.a,{})]},t)}))})]})},He=n(300),We=n(302),Ye=n(304),Xe=n(306),$e=n(308),Ge=n(301),qe=n(303),Ue=n(305),Je=n(307),Ke=n(309);n(233);var Qe=function(e){var t=e.eventId;console.log("The location prop is: ",t);var n="localhost:3000/event-information?id=".concat(t),r=Object(c.useRef)(null);return Object(a.jsxs)("div",{className:"share",children:[Object(a.jsx)("h1",{children:"SHARE"}),Object(a.jsx)("div",{className:"minified-url-wrapper",onClick:function(){r.current.select(),r.current.setSelectionRange(0,9999),document.execCommand("copy"),Object(v.b)("".concat(n," copied to clipboard"))},children:Object(a.jsx)("input",{ref:r,value:n,readonly:!0})}),Object(a.jsxs)("div",{className:"share-button-wrapper",children:[Object(a.jsx)(He.a,{url:n,children:Object(a.jsx)(Ge.a,{size:45,round:!0})}),Object(a.jsx)(We.a,{url:n,children:Object(a.jsx)(qe.a,{size:45,round:!0})}),Object(a.jsx)(Ye.a,{url:n,children:Object(a.jsx)(Ue.a,{size:45,round:!0})}),Object(a.jsx)(Xe.a,{url:n,children:Object(a.jsx)(Je.a,{size:45,round:!0})}),Object(a.jsx)($e.a,{url:n,children:Object(a.jsx)(Ke.a,{size:45,round:!0})})]})]})};fe()().format();var Ze=function(e){return Object(a.jsx)(a.Fragment,{children:e.eventInfo.selectedEvent&&Object.keys(e.eventInfo.selectedEvent).length>0?Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsx)("h1",{children:e.eventInfo.selectedEvent.name}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(ye,{type:"displayLocation"})}),Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("p",{className:"description-wrapper",children:e.eventInfo.selectedEvent.description}),Object(a.jsxs)("div",{className:"time-public-wrapper",children:[Object(a.jsxs)("div",{className:"date-wrapper",children:["Date:",Object(a.jsxs)("span",{style:{color:"white"},children:[" ",fe()(e.eventInfo.selectedEvent.date).format("dddd, MMMM Do YYYY")]})]}),Object(a.jsxs)("div",{className:"time-wrapper",children:["Start time:",Object(a.jsxs)("span",{style:{color:"white"},children:[" ",e.eventInfo.selectedEvent.startTime]})]}),Object(a.jsx)("div",{className:"public-wrapper",children:Object(a.jsxs)("span",{children:["This is a",e.eventInfo.selectedEvent.public?Object(a.jsx)("span",{style:{color:"blue"},children:" public "}):Object(a.jsx)("span",{style:{color:"red"},children:" private "}),"event"]})})]})]}),Object(a.jsxs)("div",{className:"button-wrapper",children:[e.admin?Object(a.jsxs)("div",{className:"admin-btns",children:[Object(a.jsx)(E.a,{onClick:e.handleEdit,children:"Edit"}),Object(a.jsx)(E.a,{className:"warning-btn",onClick:e.handleDelete,children:"Delete"})]}):"",Object(a.jsx)(Re,{btnStyle:"success-btn",eventId:e.eventInfo.selectedEvent._id,children:"JOIN"})]})]}):""})};var et=function(e){var t=Object(b.c)((function(e){return e.eventsInfo})),n=Object(b.b)(),r=Object(l.f)(),s=(Object(c.useRef)(null),Object(c.useState)(e.eventInfo.selectedEvent.public)),o=Object(pe.a)(s,2),i=o[0],d=o[1],p=Object(b.c)((function(e){return e.eventsInfo})).createEventLocation,v=Object(c.useState)(fe()()),O=Object(pe.a)(v,2),m=(O[0],O[1],Object(c.useState)(fe()())),f=Object(pe.a)(m,2),g=f[0],y=f[1],k=Object(c.useState)(e.eventInfo.selectedEvent.name),C=Object(pe.a)(k,2),I=C[0],N=C[1],S=Object(c.useState)(e.eventInfo.selectedEvent.description),_=Object(pe.a)(S,2),M=_[0],T=_[1];Object(c.useEffect)((function(){console.log(r.location.search.split("=")[1]),0===Object.keys(t.selectedEvent).length&&n(x(r.location.search.split("=")[1]))}),[]);var D=function(){var t=Object(j.a)(u.a.mark((function t(){var a,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:e.eventInfo.selectedEvent._id,name:I,location:{address:e.eventInfo.selectedEvent.location.address,latitude:p.lat,longitude:p.lng},description:M,startTime:g.format("LT"),public:i},c={method:"put",data:a,url:"/api/updateEvent",headers:{"Content-Type":"application/json"}},t.prev=2,t.next=5,h()(c);case 5:r=t.sent,console.log(r),r&&!0===r.data.response&&(n(x(r.data._doc._id)),e.toggleEditMode()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}(),L=Object(ae.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.primary.main,"& + $track":{opacity:1,backgroundColor:e.palette.common.white,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(ce.a);return Object(a.jsx)(a.Fragment,{children:e.eventInfo.selectedEvent&&Object.keys(e.eventInfo.selectedEvent).length>0?Object(a.jsx)("div",{className:"body-container",children:Object(a.jsxs)(Ie.a,{utils:_e.a,children:[Object(a.jsx)("div",{children:Object(a.jsx)(w.a,{required:!0,id:"eventName",name:"eventName",label:"Event Name",value:I,onChange:function(e){N(e.target.value)},fullWidth:!0,autoComplete:"given-name"})}),Object(a.jsx)(w.a,{required:!0,id:"description",name:"description",label:"Event Description",value:M,onChange:function(e){T(e.target.value)},fullWidth:!0}),Object(a.jsxs)("div",{className:"time-public-wrapper",children:[Object(a.jsx)("div",{className:"time-wrapper",children:Object(a.jsx)(Ne.a,{margin:"normal",id:"time-picker",label:"Start Time",value:g,onChange:function(e){y(e)},KeyboardButtonProps:{"aria-label":"change time"}})}),Object(a.jsxs)("div",{className:"public-wrapper",children:[Object(a.jsx)("span",{children:"Private"}),Object(a.jsx)(L,{checked:i,onChange:function(e){d(!i)},name:"publicEvent"}),Object(a.jsx)("span",{children:"Public"})]})]}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(ye,{type:"editLocation"})}),Object(a.jsxs)("div",{className:"button-wrapper",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(E.a,{onClick:D,children:"Update"}),Object(a.jsx)(E.a,{onClick:function(){e.toggleEditMode()},children:"Cancel"})]}),Object(a.jsx)(Re,{eventId:e.eventInfo.selectedEvent._id,children:"JOIN"})]})]})}):""})};var tt=function(){var e=Object(b.c)((function(e){return e.eventsInfo})),t=Object(c.useState)(!1),n=Object(pe.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(!1),i=Object(pe.a)(o,2),d=i[0],p=i[1],O=Object(b.b)(),m=Object(l.f)();Object(c.useEffect)((function(){console.log(m.location.search.split("=")[1]),0===Object.keys(e.selectedEvent).length&&O(x(m.location.search.split("=")[1]))}),[]),Object(c.useEffect)((function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,"$1");t&&t.includes(e.selectedEvent.creator)?p(!0):p(!1)}),[e]);var f=function(){s(!r)};return Object(a.jsx)(a.Fragment,{children:e.selectedEvent&&Object.keys(e.selectedEvent).length>0?Object(a.jsxs)("div",{className:"eventInformation",children:[Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsx)("div",{className:"participants-wrapper",children:Object(a.jsx)(Ae,{eventInfo:e})}),Object(a.jsx)(Qe,{eventId:m.location.search.split("=")[1]})]}),r?Object(a.jsx)(et,{eventInfo:e,toggleEditMode:f}):Object(a.jsx)(Ze,{eventInfo:e,admin:d,handleEdit:f,handleDelete:function(){var t;console.log("trigger delete on ".concat(e.selectedEvent._id)),O((t={id:e.selectedEvent._id},function(){var e=Object(j.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"delete",url:"/api/deleteEvent",headers:{"Content-Type":"application/json"},data:t},e.prev=1,e.next=4,h()(a);case 4:c=e.sent,console.log("response from delete event: ",c),c&&!0===c.data.response?(console.log("payload from delete ".concat(c.data._doc)),n({type:"deleteEvent",payload:c.data._doc}),console.log(c),v.b.success("You have deleted ".concat(c.data.name))):v.b.warn(c.data.message),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),v.b.error("Something went wrong! Please try again later");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),m.push("/")}})]}):""})},nt=n(72),at=(n(234),n(10)),ct=n(311),rt=n(296),st=n(171),ot=n(317),it=n(310),lt=n(169),dt=n(166),ut=n.n(dt),jt=n(167),bt=n.n(jt),pt=Object(I.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(nt.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(nt.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(at.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(at.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(nt.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(nt.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(nt.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var ht=function(){var e=Object(b.b)(),t=Object(l.f)(),n=(Object(b.c)((function(e){return e.eventsInfo})),pt()),c=r.a.useState(null),s=Object(pe.a)(c,2),o=s[0],d=s[1],u=r.a.useState(null),j=Object(pe.a)(u,2),p=j[0],h=j[1],v=Boolean(o),O=Boolean(p),m=function(){h(null)},f=function(){d(null),m()},x=function(){t.push("/create-event")},g=Object(a.jsxs)(lt.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:f,children:[Object(a.jsx)(it.a,{onClick:f,children:"Profile"}),Object(a.jsx)(it.a,{onClick:f,children:"My account"})]}),y="primary-search-account-menu-mobile",w=Object(a.jsx)(lt.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:m,children:Object(a.jsx)(it.a,{onClick:x,children:"Create Event"})});return Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("div",{className:n.grow,children:[Object(a.jsx)(ct.a,{position:"static",children:Object(a.jsxs)(rt.a,{children:[Object(a.jsx)(C.a,{className:n.title,variant:"h6",noWrap:!0,children:Object(a.jsx)(i.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"LetsPlay!"})}),Object(a.jsxs)("div",{className:n.search,children:[Object(a.jsx)("div",{className:n.searchIcon,children:Object(a.jsx)(ut.a,{})}),Object(a.jsx)(ot.a,{placeholder:"Search\u2026",onChange:function(t){e({type:"SEARCH_EVENT",payload:t.target.value.toLowerCase()})},classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}})]}),Object(a.jsx)("div",{className:n.grow}),Object(a.jsx)("div",{className:n.sectionDesktop,children:"/create-event"!=t.location.pathname?Object(a.jsx)(E.a,{variant:"contained",color:"primary",onClick:x,children:"Create Event"}):""}),Object(a.jsx)("div",{className:n.sectionMobile,children:Object(a.jsx)(st.a,{"aria-label":"show more","aria-controls":y,"aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},color:"inherit",children:Object(a.jsx)(bt.a,{})})})]})}),w,g]})})};n(235);var vt=function(){return h.a.defaults.withCredentials=!0,Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(v.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(a.jsxs)(i.a,{children:[Object(a.jsx)(ht,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(we,{})}),Object(a.jsx)(l.a,{path:"/create-event",children:Object(a.jsx)(Te,{})}),Object(a.jsx)(l.a,{path:"/event-information",children:Object(a.jsx)(tt,{})})]})]})]})},Ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,321)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},mt=n(77),ft=n(168),xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authenticated:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return{authenticated:!0,username:t.payload.username,userId:t.payload._id,events:t.payload.events};case"SIGN_OUT":return{authenticated:!1,username:"",userId:""};default:return e}},gt={events:[],selectedEvent:{},myEvents:[],toggleMyEvents:!1,createEventLocation:{lat:0,lng:0},searchEvent:""},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_EVENT":return Object(ke.a)(Object(ke.a)({},e),{},{searchEvent:t.payload});case"SETLATLNG":return Object(ke.a)(Object(ke.a)({},e),{},{createEventLocation:{lat:t.payload[0],lng:t.payload[1]}});case"getEvents":return Object(ke.a)(Object(ke.a)({},e),{},{events:t.payload.data.events});case"selectEvent":return Object(ke.a)(Object(ke.a)({},e),{},{selectedEvent:t.payload});case"deleteEvent":return Object(ke.a)({},e);case"toggleMyEvents":return Object(ke.a)(Object(ke.a)({},e),{},{toggleMyEvents:t.payload.toggle,myEvents:t.payload.response.data.myEvents});default:return e}},Et=Object(mt.c)({user:xt,eventsInfo:yt});window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__();var wt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,kt=Object(mt.d)(Et,wt(Object(mt.a)(ft.a)));o.a.render(Object(a.jsx)(b.a,{store:kt,children:Object(a.jsx)(vt,{})}),document.getElementById("root")),Ot()}},[[236,1,2]]]);
//# sourceMappingURL=main.d956b4b8.chunk.js.map