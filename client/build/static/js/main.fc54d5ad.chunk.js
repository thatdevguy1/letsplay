(this.webpackJsonpletsplay=this.webpackJsonpletsplay||[]).push([[0],{117:function(e,t,n){},141:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(15),i=n.n(s),o=(n(195),n(40)),l=n(23),d=(n(196),n(10)),u=n.n(d),j=n(19),b=n(8),p=n(24),v=n.n(p),h=n(31),O=function(e){return{type:"SETLATLNG",payload:e}},m=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",url:"/api/getEvents",headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v()(n);case 4:(a=e.sent)&&!0===a.data.response&&t({type:"getEvents",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"get",url:"/api/getMyEvents",headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,v()(a);case 4:(c=t.sent)&&!0===c.data.response&&n({type:"toggleMyEvents",payload:{response:c,toggle:e}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"get",url:"/api"+"/getEvent?id=".concat(e),headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,v()(a);case 4:(c=t.sent)&&!0===c.data.response&&n({type:"selectEvent",payload:c.data._doc}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return{type:"selectEvent",payload:e}},y=n(318),E=n(287),w=(n(283),n(314)),k=(n(286),n(316),n(289),n(288)),C=(n(149),n(55)),I=n(73);n(281),Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var N=n(240),S=n(291),M=n(290),T=n(160),_=n.n(T),L=n(152),D=n.n(L),F=n(150),P=n.n(F),R=n(153),B=n.n(R),A=n(154),Y=n.n(A),$=n(155),z=n.n($),V=n(151),H=n.n(V),W=n(156),J=n.n(W),G=n(157),q=n.n(G),K=n(158),X=n.n(K),U=n(159),Q=n.n(U);var Z=function(e){var t=Object(l.f)(),n=Object(b.b)();return Object(a.jsxs)(N.a,{style:e.selected?{border:"solid 3px #c5ffc5",background:"#daffda"}:null,onClick:function(){n(g(e.eventData))},children:[Object(a.jsx)("input",{type:"hidden","data-id":e.eventData._id}),Object(a.jsx)(M.a,{children:Object(a.jsx)(y.a,{children:function(){switch(e.eventData.type.toLowerCase()){case"soccer":return Object(a.jsx)(P.a,{});case"hockey":return Object(a.jsx)(H.a,{});case"baseball":return Object(a.jsx)(D.a,{});case"football":return Object(a.jsx)(B.a,{});case"basketball":return Object(a.jsx)(Y.a,{});case"cricket":return Object(a.jsx)(z.a,{});case"rugby":return Object(a.jsx)(J.a,{});case"volleyball":return Object(a.jsx)(q.a,{});case"golf":return Object(a.jsx)(X.a,{});case"handball":return Object(a.jsx)(Q.a,{});default:return Object(a.jsx)(_.a,{})}}()})}),Object(a.jsx)(S.a,{primary:e.eventData.name,secondary:e.eventData.description,style:{maxHeight:"66px",overflow:"hidden",width:"70%",paddingRight:"20px"}}),Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(a){var c;a.preventDefault(),c=e.eventData,n(g(c)),t.push("/event-information?id=".concat(c._id))},children:"Learn More"})]})};var ee=n(285),te=(n(227),Object(I.a)((function(e){return{root:{width:"100%",maxWidth:930,backgroundColor:e.palette.background.paper}}})));var ne=function(){var e=Object(c.useRef)(null),t=te(),n=Object(b.b)(),r=Object(b.c)((function(e){return e.eventsInfo}));return Object(c.useEffect)((function(){n(m())}),[]),Object(c.useEffect)((function(){var t=Array.from(e.current.children).find((function(e){return e.children[0].getAttribute("data-id")===r.selectedEvent._id}));t&&t.scrollIntoView({behavior:"smooth",block:"start"})}),[r]),Object(a.jsx)("div",{className:"events",children:Object(a.jsx)(ee.a,{ref:e,className:t.root,children:!1===r.toggleMyEvents?r.events.map((function(e){return e.name.toLowerCase().includes(r.searchEvent)&&e.public?Object(a.jsx)(Z,{eventData:e,selected:e._id===r.selectedEvent._id},e._id):""})):r.myEvents.map((function(e){return e.name.toLowerCase().includes(r.searchEvent)&&Object(a.jsx)(Z,{eventData:e,selected:e._id===r.selectedEvent._id},e._id)}))})})},ae=n(6),ce=n(297),re=(n(228),n(295)),se=n(296),ie=(n(141),n(292)),oe=n(293),le=n(26),de={customMarkerIcon:Object(le.divIcon)({html:'<span style="'.concat("\n  background-color: #3F51B4;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: block;\n  left: -1.5rem;\n  top: -1.5rem;\n  position: relative;\n  border-radius: 1.5rem 1.5rem 0;\n  transform: rotate(45deg);\n  border: 1px solid #FFFFFF",'">')}),selectedCustomMarkerIcon:Object(le.divIcon)({html:'<span style="'.concat("\n  background-color: #2bb437;\n  border: solid 2px black;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: block;\n  left: -1.5rem;\n  top: -1.5rem;\n  position: relative;\n  border-radius: 2.5rem 2.5rem 0;\n  transform: rotate(45deg);\n  border: 1px solid #FFFFFF",'">')})},ue=function(){var e=Object(ie.a)(),t=Object(b.c)((function(e){return e.eventsInfo.selectedEvent.location})),n=t.latitude,r=t.longitude;return Object(c.useEffect)((function(){e.setView([n,r],14)})),Object(a.jsx)(oe.a,{position:[n,r],icon:de.customMarkerIcon})};function je(){return(je=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://ipapi.co/json/");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var be=function(){return je.apply(this,arguments)},pe=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.eventsInfo.createEventLocation})),n=t.lat,r=t.lng,s=Object(ie.a)(),i=Object(ie.b)({click:function(t){e(O([t.latlng.lat,t.latlng.lng])),s.setView([t.latlng.lat,t.latlng.lng])},locationfound:function(t){e(O([t.latlng.lat,t.latlng.lng])),s.setView([t.latlng.lat,t.latlng.lng],16)},locationerror:function(e){return Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:t=e.sent,s.setView([t.latitude,t.longitude],10);case 4:case"end":return e.stop()}}),e)})))()}});return Object(c.useEffect)((function(){i.locate()}),[]),Object(a.jsx)(oe.a,{position:[n,r],icon:de.customMarkerIcon})},ve=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.eventsInfo.selectedEvent.location})),n=t.latitude,r=t.longitude,s=Object(b.c)((function(e){return e.eventsInfo.createEventLocation})),i=s.lat,o=s.lng,l=Object(ie.a)();return Object(ie.b)({click:function(t){e(O([t.latlng.lat,t.latlng.lng])),l.setView([t.latlng.lat,t.latlng.lng])}}),Object(c.useEffect)((function(){l.setView([n,r],16),e(O([n,r]))}),[]),Object(a.jsx)(oe.a,{position:[i,o],icon:de.customMarkerIcon})},he=n(16),Oe=n(294),me=n(161),fe=n.n(me),xe=(n(230),n(34)),ge=n.n(xe),ye=n(162);ge()().format();var Ee=function(){var e=Object(b.c)((function(e){return e.eventsInfo})),t=Object(c.useState)([0,0,0,0]),n=Object(he.a)(t,2),r=(n[0],n[1],Object(b.b)()),s=Object(ie.a)(),i=Object(ie.b)({locationfound:function(e){s.setView([e.latlng.lat,e.latlng.lng],16)},locationerror:function(e){return Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:t=e.sent,s.setView([t.latitude,t.longitude],10);case 4:case"end":return e.stop()}}),e)})))()}});return Object(c.useEffect)((function(){i.locate()}),[]),Object(c.useEffect)((function(){Object.keys(e.selectedEvent)>0&&s.setView([e.selectedEvent.location.latitude,e.selectedEvent.location.longitude],17)}),[e.selectedEvent]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(fe.a,{iconCreateFunction:function(e){var t=e.getChildCount();return e.getAllChildMarkers().map((function(e){return e.options.isSelected})).includes("true")?Object(le.divIcon)({html:"<div>\n              <span>".concat(t,"</span>\n            </div>"),className:"marker-cluster selected"}):Object(le.divIcon)({html:"<div>\n              <span>".concat(t,"</span>\n            </div>"),className:"marker-cluster"})},spiderLegPolylineOptions:{weight:0,opacity:0},children:[Array.isArray(e.events)&&!1===e.toggleMyEvents&&e.events.map((function(t,n){if(t&&t.public)return Object(a.jsx)(oe.a,{"data-id":t._id,icon:t._id===e.selectedEvent._id?de.selectedCustomMarkerIcon:de.customMarkerIcon,isSelected:t._id===e.selectedEvent._id?"true":"false",position:[t.location.latitude,t.location.longitude],eventHandlers:{click:function(){r(g(t))}},children:Object(a.jsxs)(Oe.a,{children:[Object(a.jsx)("span",{children:t.name}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:ge()(t.date).format("dddd, MMMM Do YYYY")}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:t.startTime})]})},"event-".concat(n))})),Array.isArray(e.events)&&!0===e.toggleMyEvents&&e.myEvents.map((function(t,n){if(t)return Object(a.jsx)(oe.a,{"data-id":t._id,icon:t._id===e.selectedEvent._id?de.selectedCustomMarkerIcon:de.customMarkerIcon,isSelected:t._id===e.selectedEvent._id?"true":"false",position:[t.location.latitude,t.location.longitude],eventHandlers:{click:function(){r(g(t))}},children:Object(a.jsxs)(Oe.a,{children:[Object(a.jsx)("span",{children:t.name}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:ge()(t.date).format("dddd, MMMM Do YYYY")}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:t.startTime})]})},"event-".concat(n))}))]},Object(ye.v4)())})},we=function(e){var t=e.type;return Object(a.jsx)("div",{className:"map",children:Object(a.jsxs)(re.a,{center:[0,0],zoom:2,children:[Object(a.jsx)(se.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(){switch(t){case"displayLocation":return Object(a.jsx)(ue,{});case"setLocation":return Object(a.jsx)(pe,{});case"editLocation":return Object(a.jsx)(ve,{});case"cluster":return Object(a.jsx)(Ee,{})}}()]})})},ke=Object(ae.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(ce.a);var Ce=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.eventsInfo.toggleMyEvents}));return Object(l.f)(),Object(c.useEffect)((function(){e(f(t))}),[]),Object(a.jsxs)("div",{className:"dashboard",children:[Object(a.jsxs)("div",{className:"switchWrapper",children:[Object(a.jsx)("span",{style:{fontSize:"12px",padding:"0 10px"},children:"My Events"}),Object(a.jsx)(ke,{checked:!t,onChange:function(n){e(f(!t))},name:"publicEvent"}),Object(a.jsx)("span",{style:{fontSize:"12px",padding:"0 10px"},children:"Public Events"})]}),Object(a.jsxs)("div",{className:"list-and-map",children:[Object(a.jsx)(ne,{}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(we,{type:"cluster"})})]})]})},Ie=n(12),Ne=n(315),Se=n(25),Me=n(298),Te=n(321),_e=(n(234),n(110));ge()().format();var Le=["Soccer","Hockey","Baseball","Football","Cricket","Handball","Rugby","Tennis","Volleyball","Golf"];var De=function(){var e=Object(c.useRef)(null),t=Object(l.f)(),n=Object(b.b)(),r=Object(c.useState)(!0),s=Object(he.a)(r,2),i=s[0],o=s[1],d=Object(b.c)((function(e){return e.eventsInfo})).createEventLocation,p=Object(c.useState)(ge()()),O=Object(he.a)(p,2),f=O[0],x=O[1],g=Object(c.useState)(ge()()),y=Object(he.a)(g,2),I=y[0],N=y[1],S=Object(c.useState)({eventNameError:!1,sportNameError:!1,descriptionError:!1}),M=Object(he.a)(S,2),T=M[0],_=M[1],L=function(){var a=Object(j.a)(u.a.mark((function a(c){var r,s,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),!(e.current.eventName.value&&e.current.sportName.value&&e.current.description.value)){a.next=17;break}return r={name:e.current.eventName.value,type:e.current.sportName.value,icon:"Sports".concat(e.current.sportName.value,"OutlinedIcon"),location:{address:"n/a",latitude:d.lat,longitude:d.lng},description:e.current.description.value,startTime:I.format("LT"),date:f,public:i},s={method:"post",data:r,url:"/api/createEvent",headers:{"Content-Type":"application/json"}},a.prev=4,a.next=7,v()(s);case 7:(o=a.sent)&&!0===o.data.response&&(n(m()),h.b.success("Event has been created"),t.push("/")),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(4),console.log(a.t0),h.b.error("Something went wrong. Please try again later");case 15:a.next=18;break;case 17:_({eventNameError:!0,sportNameError:!0,descriptionError:!0});case 18:case"end":return a.stop()}}),a,null,[[4,11]])})));return function(e){return a.apply(this,arguments)}}(),D=Object(ae.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.primary.main,"& + $track":{opacity:1,backgroundColor:e.palette.common.white,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(ce.a);return Object(a.jsxs)("div",{className:"create-event",children:[Object(a.jsxs)("form",{ref:e,children:[Object(a.jsxs)(Se.a,{utils:_e.a,children:[Object(a.jsx)(C.a,{variant:"h4",style:{margin:"0 0 40px 0"},gutterBottom:!0,children:"Create Event"}),Object(a.jsxs)(k.a,{container:!0,spacing:3,children:[Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsxs)(k.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(a.jsx)(k.a,{item:!0,children:"Private"}),Object(a.jsx)(k.a,{item:!0,children:Object(a.jsx)(D,{checked:i,onChange:function(e){o(!i)},name:"publicEvent"})}),Object(a.jsx)(k.a,{item:!0,children:"Public"})]})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{required:!0,id:"eventName",name:"eventName",error:T.eventNameError,label:"Event Name",fullWidth:!0,autoComplete:"given-name",onChange:function(e){e.target.value&&_(Object(Ie.a)(Object(Ie.a)({},T),{},{eventNameError:!1}))},onBlur:function(e){e.target.value?_(Object(Ie.a)(Object(Ie.a)({},T),{},{eventNameError:!1})):_(Object(Ie.a)(Object(Ie.a)({},T),{},{eventNameError:!0}))}})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(Ne.a,{required:!0,fullWidth:!0,freeSolo:!0,options:Le.map((function(e){return e})),renderInput:function(e){return Object(a.jsx)(w.a,Object(Ie.a)(Object(Ie.a)({},e),{},{id:"sport",error:T.sportNameError,name:"sportName",label:"Sport",margin:"normal",variant:"outlined",onChange:function(e){e.target.value&&_(Object(Ie.a)(Object(Ie.a)({},T),{},{sportNameError:!1}))},onBlur:function(e){e.target.value?_(Object(Ie.a)(Object(Ie.a)({},T),{},{sportNameError:!1})):_(Object(Ie.a)(Object(Ie.a)({},T),{},{sportNameError:!0}))}}))}})}),Object(a.jsx)(k.a,{item:!0,xs:6,children:Object(a.jsx)(Me.a,{margin:"normal",id:"date-picker-dialog",label:"Date",format:"MM/DD/yyyy",value:f,onChange:function(e){x(e)},KeyboardButtonProps:{"aria-label":"change date"}})}),Object(a.jsx)(k.a,{item:!0,xs:6,children:Object(a.jsx)(Te.a,{margin:"normal",id:"time-picker",label:"Start Time",value:I,onChange:function(e){N(e)},KeyboardButtonProps:{"aria-label":"change time"}})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{required:!0,id:"description",name:"description",error:T.descriptionError,label:"Event Description",fullWidth:!0,multiline:!0,onChange:function(e){e.target.value&&_(Object(Ie.a)(Object(Ie.a)({},T),{},{descriptionError:!1}))},onBlur:function(e){e.target.value?_(Object(Ie.a)(Object(Ie.a)({},T),{},{descriptionError:!1})):_(Object(Ie.a)(Object(Ie.a)({},T),{},{descriptionError:!0}))}})})]})]}),Object(a.jsx)(E.a,{variant:"contained",style:{margin:"40px 0 0 0"},onClick:L,children:"Create Event"})]}),Object(a.jsx)("div",{className:"mapHolder",children:Object(a.jsx)(we,{type:"setLocation"})})]})},Fe=n(164),Pe=(n(117),n(317));function Re(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var Be=Object(I.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),display:"flex",flexDirection:"column","@media (max-width: 1000px)":{width:200}}}}));function Ae(e){var t=Be(),n=r.a.useState(Re),s=Object(he.a)(n,1)[0],i=r.a.useState(!1),o=Object(he.a)(i,2),l=o[0],d=o[1],p=r.a.useState(!1),O=Object(he.a)(p,2),m=O[0],f=O[1],x=Object(b.b)(),g=Object(c.useRef)(null),y=function(){d(!1)},E=Object(a.jsxs)("div",{style:s,className:t.paper,children:[Object(a.jsx)("h2",{id:"simple-modal-title",children:"What name should we use?"}),Object(a.jsx)(w.a,{error:m,id:"standard-basic",label:"username",inputRef:g}),Object(a.jsx)("button",{style:{marginTop:"20px"},onClick:function(){if(g.current.value){var t={participantsName:g.current.value,id:e.eventId};x(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"put",url:"/api/joinEvent",headers:{"Content-Type":"application/json"},data:e},t.prev=1,t.next=4,v()(a);case 4:(c=t.sent)&&!0===c.data.response?(n({type:"selectEvent",payload:c.data._doc}),h.b.success("You have joined this event as ".concat(e.participantsName))):h.b.warn(c.data.message),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),h.b.error("Something went wrong! Please try again later");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e.setJoined(!0),y()}else f(!0)},children:"Join Event"})]});return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:e.btnStyle,type:"button",onClick:function(){d(!0)},disabled:e.disabled,children:e.children}),Object(a.jsx)(Pe.a,{open:l,onClose:y,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:E})]})}var Ye=n(300),$e=n(301),ze=n(167),Ve=n.n(ze),He=n(168),We=n.n(He);var Je=function(e){var t=e.eventInfo,n=Object(c.useState)(""),r=Object(he.a)(n,2),s=r[0],i=r[1],o=Object(b.b)();function l(e){var n;console.dir(e.currentTarget.getAttribute("data-id")),o((n={participantId:e.currentTarget.getAttribute("data-id"),selectedEventId:t.selectedEvent._id},function(){var e=Object(j.a)(u.a.mark((function e(t){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"delete",url:"/api/removeParticipant",headers:{"Content-Type":"application/json"},data:n},e.prev=1,e.next=4,v()(a);case 4:(c=e.sent)&&!0===c.data.response?(t({type:"selectEvent",payload:c.data.updatedEvent}),h.b.success("You have left this event")):h.b.warn(c.data.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h.b.error("Something went wrong! Please try again later");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))}return Object(c.useEffect)((function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,"$1");i(e)}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Participants"}),Object(a.jsx)(ee.a,{component:"nav","aria-label":"contacts",children:t.selectedEvent.participants&&t.selectedEvent.participants.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(N.a,{children:[Object(a.jsx)(Ye.a,{children:Object(a.jsx)(Ve.a,{})}),Object(a.jsx)(S.a,{primary:e.name}),s.includes(e.userId)?Object(a.jsx)("div",{className:"remove-icon-wrapper","data-id":e.userId,onClick:l,children:Object(a.jsx)(We.a,{})}):null]}),Object(a.jsx)($e.a,{})]},t)}))})]})},Ge=n(302),qe=n(304),Ke=n(306),Xe=n(308),Ue=n(310),Qe=n(303),Ze=n(305),et=n(307),tt=n(309),nt=n(311);n(235);var at=function(e){var t=e.eventId,n="https://www.letsplay.gdn/event-information?id=".concat(t),r=Object(c.useRef)(null);return Object(a.jsxs)("div",{className:"share",children:[Object(a.jsx)("h1",{children:"SHARE"}),Object(a.jsx)("div",{className:"minified-url-wrapper",onClick:function(){r.current.select(),r.current.setSelectionRange(0,9999),document.execCommand("copy"),Object(h.b)("".concat(n," copied to clipboard"))},children:Object(a.jsx)("input",{ref:r,value:n,readOnly:!0})}),Object(a.jsxs)("div",{className:"share-button-wrapper",children:[Object(a.jsx)(Ge.a,{url:n,children:Object(a.jsx)(Qe.a,{size:45,round:!0})}),Object(a.jsx)(qe.a,{url:n,children:Object(a.jsx)(Ze.a,{size:45,round:!0})}),Object(a.jsx)(Ke.a,{url:n,children:Object(a.jsx)(et.a,{size:45,round:!0})}),Object(a.jsx)(Xe.a,{url:n,children:Object(a.jsx)(tt.a,{size:45,round:!0})}),Object(a.jsx)(Ue.a,{url:n,children:Object(a.jsx)(nt.a,{size:45,round:!0})})]})]})};ge()().format();var ct=function(e){var t=Object(c.useState)(!1),n=Object(he.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,"$1"),n=e.eventInfo.selectedEvent.participants.some((function(e){return t.includes(e.userId)}));s(n)}),[]),Object(a.jsx)(a.Fragment,{children:e.eventInfo.selectedEvent&&Object.keys(e.eventInfo.selectedEvent).length>0?Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsx)("h1",{children:e.eventInfo.selectedEvent.name}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(we,{type:"displayLocation"})}),Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("p",{className:"description-wrapper",children:e.eventInfo.selectedEvent.description}),Object(a.jsxs)("div",{className:"time-public-wrapper",children:[Object(a.jsxs)("div",{className:"date-wrapper",children:["Date:",Object(a.jsxs)("span",{style:{color:"white"},children:[" ",ge()(e.eventInfo.selectedEvent.date).format("dddd, MMMM Do YYYY")]})]}),Object(a.jsxs)("div",{className:"time-wrapper",children:["Start time:",Object(a.jsxs)("span",{style:{color:"white"},children:[" ",e.eventInfo.selectedEvent.startTime]})]}),Object(a.jsx)("div",{className:"public-wrapper",children:Object(a.jsxs)("span",{children:["This is a",e.eventInfo.selectedEvent.public?Object(a.jsx)("span",{style:{color:"blue"},children:" public "}):Object(a.jsx)("span",{style:{color:"red"},children:" private "}),"event"]})})]})]}),Object(a.jsxs)("div",{className:"button-wrapper",children:[e.admin?Object(a.jsxs)("div",{className:"admin-btns",children:[Object(a.jsx)(E.a,{onClick:e.handleEdit,children:"Edit"}),Object(a.jsx)(E.a,{className:"warning-btn",onClick:e.handleDelete,children:"Delete"})]}):"",Object(a.jsx)(Ae,{btnStyle:"success-btn",eventId:e.eventInfo.selectedEvent._id,disabled:r,setJoined:s,children:"JOIN"})]})]}):""})};var rt=function(e){var t=Object(b.c)((function(e){return e.eventsInfo})),n=Object(b.b)(),r=Object(l.f)(),s=(Object(c.useRef)(null),Object(c.useState)(e.eventInfo.selectedEvent.public)),i=Object(he.a)(s,2),o=i[0],d=i[1],p=Object(b.c)((function(e){return e.eventsInfo})).createEventLocation,h=Object(c.useState)(ge()()),O=Object(he.a)(h,2),m=(O[0],O[1],Object(c.useState)(ge()())),f=Object(he.a)(m,2),g=f[0],y=f[1],k=Object(c.useState)(e.eventInfo.selectedEvent.name),C=Object(he.a)(k,2),I=C[0],N=C[1],S=Object(c.useState)(e.eventInfo.selectedEvent.description),M=Object(he.a)(S,2),T=M[0],_=M[1];Object(c.useEffect)((function(){0===Object.keys(t.selectedEvent).length&&n(x(r.location.search.split("=")[1]))}),[]);var L=function(){var t=Object(j.a)(u.a.mark((function t(){var a,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:e.eventInfo.selectedEvent._id,name:I,location:{address:e.eventInfo.selectedEvent.location.address,latitude:p.lat,longitude:p.lng},description:T,startTime:g.format("LT"),public:o},c={method:"put",data:a,url:"/api/updateEvent",headers:{"Content-Type":"application/json"}},t.prev=2,t.next=5,v()(c);case 5:(r=t.sent)&&!0===r.data.response&&(n(x(r.data._doc._id)),e.toggleEditMode()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),D=Object(ae.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.primary.main,"& + $track":{opacity:1,backgroundColor:e.palette.common.white,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(ce.a);return Object(a.jsx)(a.Fragment,{children:e.eventInfo.selectedEvent&&Object.keys(e.eventInfo.selectedEvent).length>0?Object(a.jsx)("div",{className:"body-container",children:Object(a.jsxs)(Se.a,{utils:_e.a,children:[Object(a.jsx)("div",{children:Object(a.jsx)(w.a,{required:!0,id:"eventName",name:"eventName",label:"Event Name",value:I,onChange:function(e){N(e.target.value)},fullWidth:!0,autoComplete:"given-name"})}),Object(a.jsx)(w.a,{required:!0,id:"description",name:"description",label:"Event Description",value:T,onChange:function(e){_(e.target.value)},fullWidth:!0}),Object(a.jsxs)("div",{className:"time-public-wrapper",children:[Object(a.jsx)("div",{className:"time-wrapper",children:Object(a.jsx)(Te.a,{margin:"normal",id:"time-picker",label:"Start Time",value:g,onChange:function(e){y(e)},KeyboardButtonProps:{"aria-label":"change time"}})}),Object(a.jsxs)("div",{className:"public-wrapper",children:[Object(a.jsx)("span",{children:"Private"}),Object(a.jsx)(D,{checked:o,onChange:function(e){d(!o)},name:"publicEvent"}),Object(a.jsx)("span",{children:"Public"})]})]}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(we,{type:"editLocation"})}),Object(a.jsxs)("div",{className:"button-wrapper",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(E.a,{onClick:L,children:"Update"}),Object(a.jsx)(E.a,{onClick:function(){e.toggleEditMode()},children:"Cancel"})]}),Object(a.jsx)(Ae,{eventId:e.eventInfo.selectedEvent._id,children:"JOIN"})]})]})}):""})};var st=function(){var e=Object(b.c)((function(e){return e.eventsInfo})),t=Object(c.useState)(!1),n=Object(he.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(he.a)(i,2),d=o[0],p=o[1],O=Object(b.b)(),m=Object(l.f)();Object(c.useEffect)((function(){0===Object.keys(e.selectedEvent).length&&O(x(m.location.search.split("=")[1]))}),[]),Object(c.useEffect)((function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,"$1");t&&t.includes(e.selectedEvent.creator)?p(!0):p(!1)}),[e]);var f=function(){s(!r)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)("meta",{charSet:"utf-8"}),Object(a.jsx)("meta",{name:"description",content:"Inviting you to join "+e.selectedEvent.name+" with Lets Play"})]}),e.selectedEvent&&Object.keys(e.selectedEvent).length>0?Object(a.jsxs)("div",{className:"eventInformation",children:[Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsx)("div",{className:"participants-wrapper",children:Object(a.jsx)(Je,{eventInfo:e})}),Object(a.jsx)(at,{eventId:m.location.search.split("=")[1]})]}),r?Object(a.jsx)(rt,{eventInfo:e,toggleEditMode:f}):Object(a.jsx)(ct,{eventInfo:e,admin:d,handleEdit:f,handleDelete:function(){var t;O((t={id:e.selectedEvent._id},function(){var e=Object(j.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"delete",url:"/api/deleteEvent",headers:{"Content-Type":"application/json"},data:t},e.prev=1,e.next=4,v()(a);case 4:(c=e.sent)&&!0===c.data.response?(n({type:"deleteEvent",payload:c.data._doc}),h.b.success("You have deleted ".concat(c.data.name))):h.b.warn(c.data.message),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),h.b.error("Something went wrong! Please try again later");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),m.push("/")}})]}):""]})},it=n(72),ot=(n(236),n(11)),lt=n(313),dt=n(299),ut=n(175),jt=n(319),bt=n(312),pt=n(173),vt=n(170),ht=n.n(vt),Ot=n(171),mt=n.n(Ot),ft=Object(I.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(it.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(it.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ot.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ot.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(it.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(it.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(it.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var xt=function(){var e=Object(b.b)(),t=Object(l.f)(),n=(Object(b.c)((function(e){return e.eventsInfo})),ft()),c=r.a.useState(null),s=Object(he.a)(c,2),i=s[0],d=s[1],u=r.a.useState(null),j=Object(he.a)(u,2),p=j[0],v=j[1],h=Boolean(i),O=Boolean(p),m=function(){v(null)},f=function(){d(null),m()},x=function(){t.push("/create-event")},g=Object(a.jsxs)(pt.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:f,children:[Object(a.jsx)(bt.a,{onClick:f,children:"Profile"}),Object(a.jsx)(bt.a,{onClick:f,children:"My account"})]}),y="primary-search-account-menu-mobile",w=Object(a.jsx)(pt.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:m,children:Object(a.jsx)(bt.a,{onClick:x,children:"Create Event"})});return Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("div",{className:n.grow,children:[Object(a.jsx)(lt.a,{position:"static",children:Object(a.jsxs)(dt.a,{children:[Object(a.jsx)(C.a,{className:n.title,variant:"h6",noWrap:!0,children:Object(a.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"LetsPlay!"})}),Object(a.jsxs)("div",{className:n.search,children:[Object(a.jsx)("div",{className:n.searchIcon,children:Object(a.jsx)(ht.a,{})}),Object(a.jsx)(jt.a,{placeholder:"Search\u2026",onChange:function(t){e({type:"SEARCH_EVENT",payload:t.target.value.toLowerCase()})},classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}})]}),Object(a.jsx)("div",{className:n.grow}),Object(a.jsx)("div",{className:n.sectionDesktop,children:"/create-event"!=t.location.pathname?Object(a.jsx)(E.a,{variant:"contained",color:"primary",onClick:x,children:"Create Event"}):""}),Object(a.jsx)("div",{className:n.sectionMobile,children:Object(a.jsx)(ut.a,{"aria-label":"show more","aria-controls":y,"aria-haspopup":"true",onClick:function(e){v(e.currentTarget)},color:"inherit",children:Object(a.jsx)(mt.a,{})})})]})}),w,g]})})};n(237);var gt=function(){return v.a.defaults.withCredentials=!0,Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(a.jsxs)(o.a,{children:[Object(a.jsx)(xt,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(Ce,{})}),Object(a.jsx)(l.a,{path:"/create-event",children:Object(a.jsx)(De,{})}),Object(a.jsx)(l.a,{path:"/event-information",children:Object(a.jsx)(st,{})})]})]})]})},yt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,323)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},Et=n(77),wt=n(172),kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authenticated:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return{authenticated:!0,username:t.payload.username,userId:t.payload._id,events:t.payload.events};case"SIGN_OUT":return{authenticated:!1,username:"",userId:""};default:return e}},Ct={events:[],selectedEvent:{},myEvents:[],toggleMyEvents:!1,createEventLocation:{lat:0,lng:0},searchEvent:""},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_EVENT":return Object(Ie.a)(Object(Ie.a)({},e),{},{searchEvent:t.payload});case"SETLATLNG":return Object(Ie.a)(Object(Ie.a)({},e),{},{createEventLocation:{lat:t.payload[0],lng:t.payload[1]}});case"getEvents":return Object(Ie.a)(Object(Ie.a)({},e),{},{events:t.payload.data.events});case"selectEvent":return Object(Ie.a)(Object(Ie.a)({},e),{},{selectedEvent:t.payload});case"deleteEvent":return Object(Ie.a)({},e);case"toggleMyEvents":return Object(Ie.a)(Object(Ie.a)({},e),{},{toggleMyEvents:t.payload.toggle,myEvents:t.payload.response.data.myEvents});default:return e}},Nt=Object(Et.c)({user:kt,eventsInfo:It}),St=Object(Et.d)(Nt,Object(Et.a)(wt.a));i.a.render(Object(a.jsx)(b.a,{store:St,children:Object(a.jsx)(gt,{})}),document.getElementById("root")),yt()}},[[238,1,2]]]);
//# sourceMappingURL=main.fc54d5ad.chunk.js.map