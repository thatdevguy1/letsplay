(this.webpackJsonpletsplay=this.webpackJsonpletsplay||[]).push([[0],{130:function(e,t,n){},160:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},254:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(13),i=n.n(s),o=(n(216),n(38)),l=n(24),d=(n(217),n(9)),u=n.n(d),j=n(18),p=n(8),b=n(21),v=n.n(b),h=n(23),O=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c,r,s,i,o,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/api/nominatim/getLatLng/".concat(e[0],"/").concat(e[1]),c={method:"get",url:a},console.log("string from setLATLNG ",a),t.prev=3,t.next=6,v()(c);case 6:r=t.sent,s=r.data,console.log(s),s.display_name?((i=s.display_name.split(",")).splice(4,2),i.splice(2,1),o=i.map((function(e,t){return 0===t||t===i.length-1?e:e+","})),l=o.join(""),n({type:"SETLATLNG",payload:{coords:e,address:l}})):n({type:"SETLATLNG",payload:{coords:e,address:""}}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0.message),h.b.error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",url:"/api/getEvents",headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v()(n);case 4:(a=e.sent)&&!0===a.data.response&&t({type:"getEvents",payload:a}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),h.b.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"get",url:"/api/getMyEvents",headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,v()(a);case 4:(c=t.sent)&&!0===c.data.response&&n({type:"toggleMyEvents",payload:{response:c,toggle:e}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),h.b.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"get",url:"/api"+"/getEvent?id=".concat(e),headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,v()(a);case 4:(c=t.sent)&&!0===c.data.response&&n({type:"selectEvent",payload:c.data._doc}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),h.b.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return{type:"selectEvent",payload:e}},y=n(364),E=n(333),w=(n(330),n(361)),k=(n(332),n(363),n(335),n(334)),C=(n(181),n(56)),I=n(74);n(328),Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var N=n(291),S=n(337),L=n(336),M=n(182),T=n.n(M);var _=function(e){var t=Object(l.f)(),n=Object(p.b)();return Object(a.jsxs)(N.a,{style:e.selected?{borderLeft:"solid 3px #3f51b4"}:null,onClick:function(){n(g(e.eventData))},children:[Object(a.jsx)("input",{type:"hidden","data-id":e.eventData._id}),Object(a.jsx)(L.a,{children:Object(a.jsx)(y.a,{children:Object(a.jsx)(T.a,{})})}),Object(a.jsx)(S.a,{primary:e.eventData.name,secondary:e.eventData.description,style:{maxHeight:"46px",overflow:"hidden",width:"70%",paddingRight:"20px"}}),Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(a){var c;a.preventDefault(),c=e.eventData,n(g(c)),t.push("/event-information?id=".concat(c._id))},children:"Learn More"})]})};var D=n(331),F=(n(247),Object(I.a)((function(e){return{root:{width:"100%",maxWidth:930}}})));var P=function(){var e=Object(c.useRef)(null),t=F(),n=Object(p.b)(),r=Object(p.c)((function(e){return e.eventsInfo}));return Object(c.useEffect)((function(){n(m())}),[]),Object(c.useEffect)((function(){var t=Array.from(e.current.children).find((function(e){return e.children[0].getAttribute("data-id")===r.selectedEvent._id}));t&&t.scrollIntoView({behavior:"smooth",block:"start"})}),[r]),Object(a.jsx)("div",{className:"events",children:Object(a.jsx)(D.a,{ref:e,className:t.root,children:!1===r.toggleMyEvents?r.events.map((function(e){return e.name.toLowerCase().includes(r.searchEvent)&&e.public?Object(a.jsx)(_,{eventData:e,selected:e._id===r.selectedEvent._id},e._id):""})):r.myEvents.map((function(e){return e.name.toLowerCase().includes(r.searchEvent)&&Object(a.jsx)(_,{eventData:e,selected:e._id===r.selectedEvent._id},e._id)}))})})},A=n(6),R=n(344),B=(n(248),n(12)),Y=n(341),$=n(342),z=(n(160),n(338)),V=n(339),G=n(26),W={customMarkerIcon:Object(G.divIcon)({html:'<span style="'.concat("\n  background-color: #3F51B4;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: block;\n  left: -1.5rem;\n  top: -1.5rem;\n  position: relative;\n  border-radius: 1.5rem 1.5rem 0;\n  transform: rotate(45deg);\n  border: 1px solid #FFFFFF",'">')}),selectedCustomMarkerIcon:Object(G.divIcon)({html:'<span style="'.concat("\n  background-color: #2bb437;\n  border: solid 2px black;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: block;\n  left: -1.5rem;\n  top: -1.5rem;\n  position: relative;\n  border-radius: 2.5rem 2.5rem 0;\n  transform: rotate(45deg);\n  border: 1px solid #FFFFFF",'">')})},H=function(){var e=Object(z.a)(),t=Object(p.c)((function(e){return e.eventsInfo.selectedEvent.location})),n=t.latitude,r=t.longitude;return Object(c.useEffect)((function(){e.setView([n,r],14)})),Object(a.jsx)(V.a,{position:[n,r],icon:W.customMarkerIcon})};function J(){return(J=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://ipapi.co/json/");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var q=function(){return J.apply(this,arguments)},K=function(e){var t=Object(p.b)(),n=Object(p.c)((function(e){return e.eventsInfo.createEventLocation})),r=n.lat,s=n.lng,i=Object(z.a)(),o=Object(z.b)({click:function(n){t(O([n.latlng.lat,n.latlng.lng])),e.setLoading(!0),i.setView([n.latlng.lat,n.latlng.lng])},locationfound:function(e){t(O([e.latlng.lat,e.latlng.lng])),i.setView([e.latlng.lat,e.latlng.lng],16)},locationerror:function(e){return Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:(t=e.sent)&&i.setView([t.latitude,t.longitude],10);case 4:case"end":return e.stop()}}),e)})))()}});return Object(c.useEffect)((function(){o.locate()}),[]),Object(c.useEffect)((function(){e.setLoading(!1)}),[r]),Object(a.jsx)(V.a,{position:[r,s],icon:W.customMarkerIcon})},X=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.eventsInfo.selectedEvent.location})),n=t.latitude,r=t.longitude,s=Object(p.c)((function(e){return e.eventsInfo.createEventLocation})),i=s.lat,o=s.lng,l=Object(z.a)();return Object(z.b)({click:function(t){e(O([t.latlng.lat,t.latlng.lng])),l.setView([t.latlng.lat,t.latlng.lng])}}),Object(c.useEffect)((function(){l.setView([n,r],16),e(O([n,r]))}),[]),Object(a.jsx)(V.a,{position:[i,o],icon:W.customMarkerIcon})},U=n(340),Q=n(183),Z=n.n(Q),ee=(n(250),n(32)),te=n.n(ee),ne=n(184);te()().format();var ae=function(){var e=Object(p.c)((function(e){return e.eventsInfo})),t=Object(c.useState)([0,0,0,0]),n=Object(B.a)(t,2),r=(n[0],n[1],Object(p.b)()),s=Object(z.a)(),i=Object(z.b)({locationfound:function(e){s.setView([e.latlng.lat,e.latlng.lng],16)},locationerror:function(e){return Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:(t=e.sent)&&s.setView([t.latitude,t.longitude],10);case 4:case"end":return e.stop()}}),e)})))()}});return Object(c.useEffect)((function(){i.locate()}),[]),Object(c.useEffect)((function(){Object.keys(e.selectedEvent)>0&&s.setView([e.selectedEvent.location.latitude,e.selectedEvent.location.longitude],17)}),[e.selectedEvent]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(Z.a,{iconCreateFunction:function(e){var t=e.getChildCount();return e.getAllChildMarkers().map((function(e){return e.options.isSelected})).includes("true")?Object(G.divIcon)({html:"<div>\n              <span>".concat(t,"</span>\n            </div>"),className:"marker-cluster selected"}):Object(G.divIcon)({html:"<div>\n              <span>".concat(t,"</span>\n            </div>"),className:"marker-cluster"})},spiderLegPolylineOptions:{weight:0,opacity:0},children:[Array.isArray(e.events)&&!1===e.toggleMyEvents&&e.events.map((function(t,n){if(t&&t.public)return Object(a.jsx)(V.a,{"data-id":t._id,icon:t._id===e.selectedEvent._id?W.selectedCustomMarkerIcon:W.customMarkerIcon,isSelected:t._id===e.selectedEvent._id?"true":"false",position:[t.location.latitude,t.location.longitude],eventHandlers:{click:function(){r(g(t))}},children:Object(a.jsxs)(U.a,{children:[Object(a.jsx)("span",{children:t.name}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:te()(t.date).format("dddd, MMMM Do YYYY")}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:t.startTime})]})},"event-".concat(n))})),Array.isArray(e.events)&&!0===e.toggleMyEvents&&e.myEvents.map((function(t,n){if(t)return Object(a.jsx)(V.a,{"data-id":t._id,icon:t._id===e.selectedEvent._id?W.selectedCustomMarkerIcon:W.customMarkerIcon,isSelected:t._id===e.selectedEvent._id?"true":"false",position:[t.location.latitude,t.location.longitude],eventHandlers:{click:function(){r(g(t))}},children:Object(a.jsxs)(U.a,{children:[Object(a.jsx)("span",{children:t.name}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:te()(t.date).format("dddd, MMMM Do YYYY")}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:t.startTime})]})},"event-".concat(n))}))]},Object(ne.v4)())})},ce=n(343),re=function(e){var t=e.type,n=Object(c.useState)(!1),r=Object(B.a)(n,2),s=r[0],i=r[1];return Object(a.jsxs)("div",{className:"map",children:[Object(a.jsxs)(Y.a,{center:[0,0],zoom:2,children:[Object(a.jsx)($.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(){switch(t){case"displayLocation":return Object(a.jsx)(H,{});case"setLocation":return Object(a.jsx)(K,{setLoading:i});case"editLocation":return Object(a.jsx)(X,{});case"cluster":return Object(a.jsx)(ae,{})}}()]}),s?Object(a.jsx)(ce.a,{color:"primary"}):null]})},se=Object(A.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(R.a);var ie=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.eventsInfo.toggleMyEvents}));return Object(l.f)(),Object(c.useEffect)((function(){e(f(t))}),[]),Object(a.jsxs)("div",{className:"dashboard",children:[Object(a.jsxs)("div",{className:"switchWrapper",children:[Object(a.jsx)("span",{style:{fontSize:"12px",padding:"0 10px"},children:"My Events"}),Object(a.jsx)(se,{checked:!t,onChange:function(n){e(f(!t))},name:"publicEvent"}),Object(a.jsx)("span",{style:{fontSize:"12px",padding:"0 10px"},children:"Public Events"})]}),Object(a.jsxs)("div",{className:"list-and-map",children:[Object(a.jsx)(P,{}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(re,{type:"cluster"})})]})]})},oe=n(14),le=n(25),de=n(345),ue=n(367),je=(n(254),n(125));te()().format();var pe=function(){var e=Object(c.useRef)(null),t=Object(l.f)(),n=Object(p.b)(),r=Object(c.useState)(!0),s=Object(B.a)(r,2),i=s[0],o=s[1],d=Object(p.c)((function(e){return e.eventsInfo})).createEventLocation,b=Object(c.useState)(te()()),O=Object(B.a)(b,2),f=O[0],x=O[1],g=Object(c.useState)(te()()),y=Object(B.a)(g,2),I=y[0],N=y[1],S=Object(c.useState)(d.address),L=Object(B.a)(S,2),M=L[0],T=L[1],_=Object(c.useState)(!0),D=Object(B.a)(_,2),F=D[0],P=D[1],Y=Object(c.useState)({eventNameError:!1,sportNameError:!1,descriptionError:!1}),$=Object(B.a)(Y,2),z=$[0],V=$[1];Object(c.useEffect)((function(){T(d.address),P(!1)}),[d]);var G=function(){var a=Object(j.a)(u.a.mark((function a(c){var r,s,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),!e.current.eventName.value||!e.current.description.value){a.next=17;break}return r={name:e.current.eventName.value,location:{address:d.address,latitude:d.lat,longitude:d.lng},description:e.current.description.value,startTime:I.format("LT"),date:f,public:i},s={method:"post",data:r,url:"/api/createEvent",headers:{"Content-Type":"application/json"}},a.prev=4,a.next=7,v()(s);case 7:(o=a.sent)&&!0===o.data.response?(n(m()),h.b.success("Event has been created"),t.push("/")):console.log(o),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(4),console.log(a.t0),h.b.error("Something went wrong. Please try again later");case 15:a.next=18;break;case 17:V({eventNameError:!0,sportNameError:!0,descriptionError:!0});case 18:case"end":return a.stop()}}),a,null,[[4,11]])})));return function(e){return a.apply(this,arguments)}}(),W=Object(A.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.primary.main,"& + $track":{opacity:1,backgroundColor:e.palette.common.white,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(R.a);return Object(a.jsxs)("div",{className:"create-event",children:[Object(a.jsxs)("form",{ref:e,children:[Object(a.jsxs)(le.a,{utils:je.a,children:[Object(a.jsx)(C.a,{variant:"h4",style:{margin:"0 0 40px 0"},gutterBottom:!0,children:"Create Event"}),Object(a.jsxs)(k.a,{container:!0,spacing:3,children:[Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsxs)(k.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(a.jsx)(k.a,{item:!0,children:"Private"}),Object(a.jsx)(k.a,{item:!0,children:Object(a.jsx)(W,{checked:i,onChange:function(e){o(!i)},name:"publicEvent"})}),Object(a.jsx)(k.a,{item:!0,children:"Public"})]})}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{required:!0,id:"eventName",name:"eventName",error:z.eventNameError,label:"Event Name",fullWidth:!0,autoComplete:"given-name",onChange:function(e){e.target.value&&V(Object(oe.a)(Object(oe.a)({},z),{},{eventNameError:!1}))},onBlur:function(e){e.target.value?V(Object(oe.a)(Object(oe.a)({},z),{},{eventNameError:!1})):V(Object(oe.a)(Object(oe.a)({},z),{},{eventNameError:!0}))}})}),Object(a.jsx)(k.a,{item:!0,xs:6,children:Object(a.jsx)(de.a,{margin:"normal",id:"date-picker-dialog",label:"Date",format:"MM/DD/yyyy",value:f,onChange:function(e){x(e)},KeyboardButtonProps:{"aria-label":"change date"}})}),Object(a.jsx)(k.a,{item:!0,xs:6,children:Object(a.jsx)(ue.a,{margin:"normal",id:"time-picker",label:"Start Time",value:I,onChange:function(e){N(e)},KeyboardButtonProps:{"aria-label":"change time"}})}),Object(a.jsxs)(k.a,{item:!0,xs:12,children:[Object(a.jsx)(w.a,{required:!0,id:"address",name:"address",label:"Address",fullWidth:!0,autoComplete:"address",value:M,onChange:function(e){T(e.target.value)},onBlur:function(e){P(!0),n(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c,r,s,i,o,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/api/nominatim/setLatLng/".concat(e),c={method:"get",url:a},t.prev=2,t.next=5,v()(c);case 5:r=t.sent,s=r.data,console.log(s),s[0].display_name?((i=s[0].display_name.split(",")).splice(4,2),i.splice(2,1),o=i.map((function(e,t){return 0===t||t===i.length-1?e:e+","})),l=o.join(""),n({type:"SETLATLNG",payload:{coords:[s[0].lat,s[0].lon],address:l}})):n({type:"SETLATLNG",payload:{coords:[0,0],address:""}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),h.b.error(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}(M))}}),F?Object(a.jsx)(ce.a,{color:"primary"}):null]}),Object(a.jsx)(k.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{required:!0,id:"description",name:"description",error:z.descriptionError,label:"Event Description",fullWidth:!0,multiline:!0,onChange:function(e){e.target.value&&V(Object(oe.a)(Object(oe.a)({},z),{},{descriptionError:!1}))},onBlur:function(e){e.target.value?V(Object(oe.a)(Object(oe.a)({},z),{},{descriptionError:!1})):V(Object(oe.a)(Object(oe.a)({},z),{},{descriptionError:!0}))}})})]})]}),Object(a.jsx)(E.a,{variant:"contained",style:{margin:"40px 0 0 0",backgroundColor:"#3f51b4",color:"rgb(240, 240, 240)"},onClick:G,children:"Create Event"})]}),Object(a.jsx)("div",{className:"mapHolder",children:Object(a.jsx)(re,{type:"setLocation"})})]})},be=n(185),ve=(n(130),n(362));function he(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var Oe=Object(I.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),display:"flex",flexDirection:"column","@media (max-width: 1000px)":{width:200}}}}));function me(e){var t=Oe(),n=r.a.useState(he),s=Object(B.a)(n,1)[0],i=r.a.useState(!1),o=Object(B.a)(i,2),l=o[0],d=o[1],b=r.a.useState(!1),O=Object(B.a)(b,2),m=O[0],f=O[1],x=Object(p.b)(),g=Object(c.useRef)(null),y=function(){d(!1)},E=Object(a.jsxs)("div",{style:s,className:t.paper,children:[Object(a.jsx)("h2",{id:"simple-modal-title",children:"What name should we use?"}),Object(a.jsx)(w.a,{error:m,id:"standard-basic",label:"username",inputRef:g,inputProps:{maxLength:15}}),Object(a.jsx)("button",{style:{marginTop:"20px"},onClick:function(){if(g.current.value){var t={participantsName:g.current.value,id:e.eventId};x(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"put",url:"/api/joinEvent",headers:{"Content-Type":"application/json"},data:e},t.prev=1,t.next=4,v()(a);case 4:(c=t.sent)&&!0===c.data.response?(n({type:"selectEvent",payload:c.data._doc}),h.b.success("You have joined this event as ".concat(e.participantsName))):h.b.warn(c.data.message),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),h.b.error("Something went wrong! Please try again later");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e.setJoined(!0),y()}else f(!0)},children:"Join Event"})]});return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:e.btnStyle,type:"button",onClick:function(){d(!0)},disabled:e.disabled,children:e.children}),Object(a.jsx)(ve.a,{open:l,onClose:y,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:E})]})}var fe=n(347),xe=n(348),ge=n(188),ye=n.n(ge),Ee=n(189),we=n.n(Ee),ke=n(92),Ce=n.n(ke);var Ie=function(e){var t=e.eventInfo,n=Ce.a.getSocket(),r=Object(c.useState)(""),s=Object(B.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(t.selectedEvent.participants),d=Object(B.a)(l,2),b=d[0],O=d[1],m=Object(p.b)();function f(e){var n;console.dir(e.currentTarget.getAttribute("data-id")),m((n={participantId:e.currentTarget.getAttribute("data-id"),selectedEventId:t.selectedEvent._id},function(){var e=Object(j.a)(u.a.mark((function e(t){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"delete",url:"/api/removeParticipant",headers:{"Content-Type":"application/json"},data:n},e.prev=1,e.next=4,v()(a);case 4:(c=e.sent)&&!0===c.data.response?(t({type:"selectEvent",payload:c.data.updatedEvent}),h.b.success("You have left this event")):h.b.warn(c.data.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h.b.error("Something went wrong! Please try again later");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))}return Object(c.useEffect)((function(){n.on("update participants",(function(e){O(e)}));var e=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,"$1");o(e)}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Participants"}),Object(a.jsx)(D.a,{component:"nav","aria-label":"contacts",children:b&&b.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(N.a,{children:[Object(a.jsx)(fe.a,{children:Object(a.jsx)(ye.a,{})}),Object(a.jsx)(S.a,{primary:e.name}),i.includes(e.userId)?Object(a.jsx)("div",{className:"remove-icon-wrapper","data-id":e.userId,onClick:f,children:Object(a.jsx)(we.a,{})}):null]}),Object(a.jsx)(xe.a,{})]},t)}))})]})},Ne=n(349),Se=n(351),Le=n(353),Me=n(355),Te=n(357),_e=n(350),De=n(352),Fe=n(354),Pe=n(356),Ae=n(358);n(286);var Re=function(e){var t=e.eventId,n="https://www.letsplay.gdn/event-information?id=".concat(t),r=Object(c.useRef)(null);return Object(a.jsxs)("div",{className:"share",children:[Object(a.jsx)("h1",{children:"SHARE"}),Object(a.jsx)("div",{className:"minified-url-wrapper",onClick:function(){r.current.select(),r.current.setSelectionRange(0,9999),document.execCommand("copy"),Object(h.b)("".concat(n," copied to clipboard"))},children:Object(a.jsx)("input",{ref:r,value:n,readOnly:!0})}),Object(a.jsxs)("div",{className:"share-button-wrapper",children:[Object(a.jsx)(Ne.a,{url:n,children:Object(a.jsx)(_e.a,{size:45,round:!0})}),Object(a.jsx)(Se.a,{url:n,children:Object(a.jsx)(De.a,{size:45,round:!0})}),Object(a.jsx)(Le.a,{url:n,children:Object(a.jsx)(Fe.a,{size:45,round:!0})}),Object(a.jsx)(Me.a,{url:n,children:Object(a.jsx)(Pe.a,{size:45,round:!0})}),Object(a.jsx)(Te.a,{url:n,children:Object(a.jsx)(Ae.a,{size:45,round:!0})})]})]})};te()().format();var Be=function(e){var t=Object(c.useState)(!1),n=Object(B.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,"$1"),n=e.eventInfo.selectedEvent.participants.some((function(e){return t.includes(e.userId)}));s(n)}),[]),Object(a.jsx)(a.Fragment,{children:e.eventInfo.selectedEvent&&Object.keys(e.eventInfo.selectedEvent).length>0?Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsx)("h1",{children:e.eventInfo.selectedEvent.name}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(re,{type:"displayLocation"})}),Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("p",{className:"description-wrapper",children:e.eventInfo.selectedEvent.description}),Object(a.jsxs)("div",{className:"time-public-wrapper",children:[Object(a.jsxs)("div",{className:"address-wrapper",children:["Address:",Object(a.jsxs)("span",{style:{color:"white"},children:[" ",e.eventInfo.selectedEvent.location.address]})]}),Object(a.jsxs)("div",{className:"date-wrapper",children:["Date:",Object(a.jsxs)("span",{style:{color:"white"},children:[" ",te()(e.eventInfo.selectedEvent.date).format("dddd, MMMM Do YYYY")]})]}),Object(a.jsxs)("div",{className:"time-wrapper",children:["Start time:",Object(a.jsxs)("span",{style:{color:"white"},children:[" ",e.eventInfo.selectedEvent.startTime]})]}),Object(a.jsx)("div",{className:"public-wrapper",children:Object(a.jsxs)("span",{children:["This is a",e.eventInfo.selectedEvent.public?Object(a.jsx)("span",{style:{color:"blue"},children:" public "}):Object(a.jsx)("span",{style:{color:"red"},children:" private "}),"event"]})})]})]}),Object(a.jsxs)("div",{className:"button-wrapper",children:[e.admin?Object(a.jsxs)("div",{className:"admin-btns",children:[Object(a.jsx)(E.a,{onClick:e.handleEdit,children:"Edit"}),Object(a.jsx)(E.a,{className:"warning-btn",onClick:e.handleDelete,children:"Delete"})]}):"",Object(a.jsx)(me,{btnStyle:"success-btn",eventId:e.eventInfo.selectedEvent._id,disabled:r,setJoined:s,children:"JOIN"})]})]}):""})};var Ye=function(e){var t=Object(p.c)((function(e){return e.eventsInfo})),n=Object(p.b)(),r=Object(l.f)(),s=(Object(c.useRef)(null),Object(c.useState)(e.eventInfo.selectedEvent.public)),i=Object(B.a)(s,2),o=i[0],d=i[1],b=Object(p.c)((function(e){return e.eventsInfo})).createEventLocation,h=Object(c.useState)(te()()),O=Object(B.a)(h,2),m=(O[0],O[1],Object(c.useState)(te()())),f=Object(B.a)(m,2),g=f[0],y=f[1],k=Object(c.useState)(e.eventInfo.selectedEvent.name),C=Object(B.a)(k,2),I=C[0],N=C[1],S=Object(c.useState)(e.eventInfo.selectedEvent.description),L=Object(B.a)(S,2),M=L[0],T=L[1];Object(c.useEffect)((function(){0===Object.keys(t.selectedEvent).length&&n(x(r.location.search.split("=")[1]))}),[]);var _=function(){var t=Object(j.a)(u.a.mark((function t(){var a,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:e.eventInfo.selectedEvent._id,name:I,location:{address:e.eventInfo.selectedEvent.location.address,latitude:b.lat,longitude:b.lng},description:M,startTime:g.format("LT"),public:o},c={method:"put",data:a,url:"/api/updateEvent",headers:{"Content-Type":"application/json"}},t.prev=2,t.next=5,v()(c);case 5:(r=t.sent)&&!0===r.data.response&&(n(x(r.data._doc._id)),e.toggleEditMode()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),D=Object(A.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.error.light,"&$checked":{transform:"translateX(12px)",color:e.palette.primary.main,"& + $track":{opacity:1,backgroundColor:e.palette.common.white,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(R.a);return Object(a.jsx)(a.Fragment,{children:e.eventInfo.selectedEvent&&Object.keys(e.eventInfo.selectedEvent).length>0?Object(a.jsx)("div",{className:"body-container",children:Object(a.jsxs)(le.a,{utils:je.a,children:[Object(a.jsx)("div",{children:Object(a.jsx)(w.a,{required:!0,id:"eventName",name:"eventName",label:"Event Name",value:I,onChange:function(e){N(e.target.value)},fullWidth:!0,autoComplete:"given-name"})}),Object(a.jsx)(w.a,{required:!0,id:"description",name:"description",label:"Event Description",value:M,onChange:function(e){T(e.target.value)},fullWidth:!0}),Object(a.jsxs)("div",{className:"time-public-wrapper",children:[Object(a.jsx)("div",{className:"time-wrapper",children:Object(a.jsx)(ue.a,{margin:"normal",id:"time-picker",label:"Start Time",value:g,onChange:function(e){y(e)},KeyboardButtonProps:{"aria-label":"change time"}})}),Object(a.jsxs)("div",{className:"public-wrapper",children:[Object(a.jsx)("span",{children:"Private"}),Object(a.jsx)(D,{checked:o,onChange:function(e){d(!o)},name:"publicEvent"}),Object(a.jsx)("span",{children:"Public"})]})]}),Object(a.jsx)("div",{className:"map-wrapper",children:Object(a.jsx)(re,{type:"editLocation"})}),Object(a.jsxs)("div",{className:"button-wrapper",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(E.a,{onClick:_,children:"Update"}),Object(a.jsx)(E.a,{onClick:function(){e.toggleEditMode()},children:"Cancel"})]}),Object(a.jsx)(me,{eventId:e.eventInfo.selectedEvent._id,children:"JOIN"})]})]})}):""})};var $e=function(){var e=Ce.a.getSocket(),t=Object(p.c)((function(e){return e.eventsInfo})),n=Object(c.useState)(!1),r=Object(B.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(!1),d=Object(B.a)(o,2),b=d[0],O=d[1],m=Object(p.b)(),f=Object(l.f)();Object(c.useEffect)((function(){0===Object.keys(t.selectedEvent).length&&m(x(f.location.search.split("=")[1]))}),[]),Object(c.useEffect)((function(){t.selectedEvent._id&&e.emit("join room",t.selectedEvent._id);var n=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,"$1");n&&n.includes(t.selectedEvent.creator)?O(!0):O(!1)}),[t]);var g=function(){i(!s)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(be.a,{children:[Object(a.jsx)("meta",{charSet:"utf-8"}),Object(a.jsx)("meta",{name:"description",content:"Inviting you to join "+t.selectedEvent.name+" with Lets Play"})]}),t.selectedEvent&&Object.keys(t.selectedEvent).length>0?Object(a.jsxs)("div",{className:"eventInformation",children:[Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsx)("div",{className:"participants-wrapper",children:Object(a.jsx)(Ie,{eventInfo:t})}),Object(a.jsx)(Re,{eventId:f.location.search.split("=")[1]})]}),s?Object(a.jsx)(Ye,{eventInfo:t,toggleEditMode:g}):Object(a.jsx)(Be,{eventInfo:t,admin:b,handleEdit:g,handleDelete:function(){var e;m((e={id:t.selectedEvent._id},function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"delete",url:"/api/deleteEvent",headers:{"Content-Type":"application/json"},data:e},t.prev=1,t.next=4,v()(a);case 4:(c=t.sent)&&!0===c.data.response?(n({type:"deleteEvent",payload:c.data._doc}),h.b.success("You have deleted ".concat(c.data.name))):h.b.warn(c.data.message),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),h.b.error("Something went wrong! Please try again later");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())),f.push("/")}})]}):""]})},ze=n(73),Ve=(n(287),n(17)),Ge=n(360),We=n(346),He=n(196),Je=n(365),qe=n(359),Ke=n(194),Xe=n(191),Ue=n.n(Xe),Qe=n(192),Ze=n.n(Qe),et=Object(I.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(ze.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(ze.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ve.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ve.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(ze.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(ze.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(ze.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var tt=function(){var e=Object(p.b)(),t=Object(l.f)(),n=(Object(p.c)((function(e){return e.eventsInfo})),et()),c=r.a.useState(null),s=Object(B.a)(c,2),i=s[0],d=s[1],u=r.a.useState(null),j=Object(B.a)(u,2),b=j[0],v=j[1],h=Boolean(i),O=Boolean(b),m=function(){v(null)},f=function(){d(null),m()},x=function(){t.push("/create-event")},g=Object(a.jsxs)(Ke.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:f,children:[Object(a.jsx)(qe.a,{onClick:f,children:"Profile"}),Object(a.jsx)(qe.a,{onClick:f,children:"My account"})]}),y="primary-search-account-menu-mobile",w=Object(a.jsx)(Ke.a,{anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:m,children:Object(a.jsx)(qe.a,{onClick:x,children:"Create Event"})});return Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("div",{className:n.grow,children:[Object(a.jsx)(Ge.a,{position:"static",children:Object(a.jsxs)(We.a,{children:[Object(a.jsx)(C.a,{className:n.title,variant:"h6",noWrap:!0,children:Object(a.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"LetsPlay!"})}),Object(a.jsxs)("div",{className:n.search,children:[Object(a.jsx)("div",{className:n.searchIcon,children:Object(a.jsx)(Ue.a,{})}),Object(a.jsx)(Je.a,{placeholder:"Search\u2026",onChange:function(t){e({type:"SEARCH_EVENT",payload:t.target.value.toLowerCase()})},classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}})]}),Object(a.jsx)("div",{className:n.grow}),Object(a.jsx)("div",{className:n.sectionDesktop,children:"/create-event"!=t.location.pathname?Object(a.jsx)(E.a,{variant:"contained",color:"primary",onClick:x,children:"Create Event"}):""}),Object(a.jsx)("div",{className:n.sectionMobile,children:Object(a.jsx)(He.a,{"aria-label":"show more","aria-controls":y,"aria-haspopup":"true",onClick:function(e){v(e.currentTarget)},color:"inherit",children:Object(a.jsx)(Ze.a,{})})})]})}),w,g]})})};n(288);Ce.a.init();var nt=function(){return v.a.defaults.withCredentials=!0,Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(a.jsxs)(o.a,{children:[Object(a.jsx)(tt,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(ie,{})}),Object(a.jsx)(l.a,{path:"/create-event",children:Object(a.jsx)(pe,{})}),Object(a.jsx)(l.a,{path:"/event-information",children:Object(a.jsx)($e,{})})]})]})]})},at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,369)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},ct=n(78),rt=n(193),st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authenticated:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return{authenticated:!0,username:t.payload.username,userId:t.payload._id,events:t.payload.events};case"SIGN_OUT":return{authenticated:!1,username:"",userId:""};default:return e}},it={events:[],selectedEvent:{},myEvents:[],toggleMyEvents:!1,createEventLocation:{lat:0,lng:0,address:""},searchEvent:""},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_EVENT":return Object(oe.a)(Object(oe.a)({},e),{},{searchEvent:t.payload});case"SETLATLNG":return Object(oe.a)(Object(oe.a)({},e),{},{createEventLocation:{lat:t.payload.coords[0],lng:t.payload.coords[1],address:t.payload.address}});case"getEvents":return Object(oe.a)(Object(oe.a)({},e),{},{events:t.payload.data.events});case"selectEvent":return Object(oe.a)(Object(oe.a)({},e),{},{selectedEvent:t.payload});case"deleteEvent":return Object(oe.a)({},e);case"toggleMyEvents":return Object(oe.a)(Object(oe.a)({},e),{},{toggleMyEvents:t.payload.toggle,myEvents:t.payload.response.data.myEvents});default:return e}},lt=Object(ct.c)({user:st,eventsInfo:ot}),dt=Object(ct.d)(lt,Object(ct.a)(rt.a));i.a.render(Object(a.jsx)(p.a,{store:dt,children:Object(a.jsx)(nt,{})}),document.getElementById("root")),at()},92:function(e,t,n){var a,c=n(255);e.exports={init:function(){return a=c("/")},getSocket:function(){return a}}}},[[289,1,2]]]);
//# sourceMappingURL=main.77688e26.chunk.js.map