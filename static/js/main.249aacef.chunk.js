(this.webpackJsonpwerdevs=this.webpackJsonpwerdevs||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/Logo original RGB.b1a38376.svg"},25:function(e,a,t){e.exports=t.p+"static/media/keyboard_arrow_left.36f38cf6.svg"},26:function(e,a,t){e.exports=t.p+"static/media/keyboard_arrow_right.135d588a.svg"},27:function(e,a,t){e.exports=t(44)},36:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t.n(c),l=t(4),s=t(13),i=t(5),u=0,m=0,d=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]},p=function(e,a){if(void 0===e){var t=new Date,n=t.getDate(),r=t.getMonth(),c=t.getFullYear();return{loading:!0,realDay:n,realMonth:r,realYear:c,currentDay:n,currentMonth:r,arrDays:[],currentMonthName:"",currentYear:c}}switch(a.type){case"CALENDAR_LOADED":return Object(i.a)({},e.calendar,{loading:!1,currentMonthName:d(e.calendar.currentMonth),arrDays:a.payload});case"PREV_MONTH":return u=e.calendar.currentMonth-1,m=e.calendar.currentYear,u<0&&(u=11,m-=1),Object(i.a)({},e.calendar,{currentMonth:u,currentYear:m,currentMonthName:d(u)});case"NEXT_MONTH":return u=e.calendar.currentMonth+1,m=e.calendar.currentYear,u>11&&(u=0,m+=1),Object(i.a)({},e.calendar,{currentMonth:u,currentYear:m,currentMonthName:d(u)});default:return e.calendar}},h=function(e){var a=e%10,t=e%100;return 1==a&&11!=t?e+"st":2==a&&12!=t?e+"nd":3==a&&13!=t?e+"rd":e+"th"},y=function(e,a){if(void 0===e)return{status:"",month:"",day:"",dayName:""};switch(a.type){case"SHOW__POPUP":return Object(i.a)({},e.popUp,{status:!0});case"CLOSE__POPUP":return Object(i.a)({},e.popUp,{status:!1});case"PUSH__DATA":var t=a.payload;return Object(i.a)({},e.popUp,{month:d(t[0]),day:"".concat(h(t[1])),dayName:(n=t[2],["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"][n])});default:return e.popUp}var n},_=function(e,a){return{calendar:p(e,a),popUp:y(e,a)}},v=Object(s.b)(_),f=t(9),E=t(24),b=t.n(E),g=(t(36),function(){return r.a.createElement("header",{className:"app-header"},r.a.createElement("div",{className:"app-header__logo"},r.a.createElement("img",{src:b.a,alt:"header-logo"})),r.a.createElement("nav",{className:"app-header__navigation"},r.a.createElement(f.b,{to:"/",className:"app-header__navigation-item",onClick:function(){document.querySelector(".marker").classList.add("marker_default")}},r.a.createElement("div",{className:"app-header__link"},"HOME")),r.a.createElement(f.b,{to:"/about-us",className:"app-header__navigation-item",onClick:function(){document.querySelector(".marker").classList.remove("marker_default")}},r.a.createElement("div",{className:"app-header__link"},"ABOUT US"),r.a.createElement("div",{className:"marker marker_default"}))))}),N=t(7),M=t(8),k=t(14),D=t(15),O=(t(38),function(e){Object(D.a)(t,e);var a=Object(k.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(M.a)(t,[{key:"render",value:function(){var e=this.props,a=e.tag,t=e.date,n=e.showPopup,c=e.pushDataToPopup,o=new Date(t);return r.a.createElement("div",{className:a,onClick:function(){c([o.getMonth(),o.getDate(),o.getDay()]),n()}},o.getDate())}}]),t}(n.Component)),w=Object(l.b)((function(e){return{status:e.popUp.status}}),(function(e){return{showPopup:function(){e({type:"SHOW__POPUP"})},pushDataToPopup:function(a){e({type:"PUSH__DATA",payload:a})}}}))(O),P=t(25),C=t.n(P),j=t(26),x=t.n(j),L=function(){function e(){Object(N.a)(this,e)}return Object(M.a)(e,[{key:"getCalendar",value:function(e,a){return new Promise((function(t){t(function(e,a){for(var t=0,n=-1*new Date(a,e,1,0,0,0,0).getDay()+2,r=[],c=0;c<5;c++)for(var o=0;o<7;o++){var l=new Date(a,e,t+n,0,0,0,0);r.push(l),t++}return r}(e,a))}))}}]),e}(),S=(t(39),function(e,a,t){var n=new Date,r=n.getDate(),c=n.getMonth(),o=n.getFullYear();return r==e&&c==a&&o==t}),A=function(e,a,t,n,c){for(var o=[],l=n,s=-1*e.getDay()+2,i=0;i<7;i++){var u=new Date(t,a,l+s,0,0,0,0);u.getMonth()==a?S(u.getDate(),a,t)?o.push(r.a.createElement(w,{key:l,tag:"calendar-plate__item current",date:"".concat(c[l])})):o.push(r.a.createElement(w,{key:l,tag:"calendar-plate__item",date:"".concat(c[l])})):o.push(r.a.createElement(w,{key:l,tag:"calendar-plate__item calendar-plate__item-disable",date:"".concat(c[l])})),l++}return o},T=function(e){Object(D.a)(t,e);var a=Object(k.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.calendarLoaded,t=e.realMonth,n=e.realYear;(new L).getCalendar(t,n).then((function(e){return a(e)}))}},{key:"componentDidUpdate",value:function(e){if(this.props.currentMonth!==e.currentMonth){var a=this.props,t=a.currentMonth,n=a.currentYear,r=a.calendarLoaded,c=new L;console.log("YES",t,n),c.getCalendar(t,n).then((function(e){return r(e)}))}}},{key:"render",value:function(){var e=this.props,a=e.loading,t=e.prevMonth,n=e.nextMonth,c=e.currentMonth,o=e.arrDays,l=e.currentMonthName,s=e.currentYear;return a?r.a.createElement("div",null):r.a.createElement("div",{className:"calendar"},r.a.createElement("div",{className:"calendar__wrapper"},r.a.createElement("div",{className:"calendar__nav"},r.a.createElement("div",{className:"prev-month",onClick:function(){t()}},r.a.createElement("img",{src:C.a,alt:"prev-arrow"})),r.a.createElement("div",{className:"calendar-date"},r.a.createElement("div",{className:"calendar-date__month"},l),r.a.createElement("div",{className:"calendar-date__year"},s)),r.a.createElement("div",{className:"next-month",onClick:function(){return n()}},r.a.createElement("img",{src:x.a,alt:"next-arrow"}))),r.a.createElement("div",{className:"calendar-plate"},function(e,a,t){for(var n=[],c=0,o=new Date(e,a,1,0,0,0,0),l=(o.getDay(),0);l<5;l++){var s=r.a.createElement("div",{className:"calendar-plate__row",key:l},A(o,a,e,c,t));c+=7,n.push(s)}return n}(s,c,o)),r.a.createElement("div",{className:"calendar-days__names"},r.a.createElement("div",{className:"calendar-days__item"},"S"),r.a.createElement("div",{className:"calendar-days__item"},"M"),r.a.createElement("div",{className:"calendar-days__item"},"T"),r.a.createElement("div",{className:"calendar-days__item"},"W"),r.a.createElement("div",{className:"calendar-days__item"},"T"),r.a.createElement("div",{className:"calendar-days__item"},"F"),r.a.createElement("div",{className:"calendar-days__item"},"S"))))}}]),t}(n.Component),U=Object(l.b)((function(e){var a=e.calendar,t=a.loading,n=a.realDay,r=a.realMonth,c=a.realYear,o=a.currentDay,l=a.currentMonth,s=a.currentMonthName;return{loading:t,realDay:n,realMonth:r,realYear:c,currentDay:o,currentMonth:l,arrDays:a.arrDays,currentMonthName:s,currentYear:a.currentYear}}),(function(e){return{calendarLoaded:function(a){e({type:"CALENDAR_LOADED",payload:a})},prevMonth:function(){e({type:"PREV_MONTH"})},nextMonth:function(){e({type:"NEXT_MONTH"})},showPopup:function(){e({type:"SHOW__POPUP"})}}}))(T),Y=(t(40),Object(l.b)((function(e){var a=e.popUp;return{status:a.status,month:a.month,day:a.day,dayName:a.dayName}}),(function(e){return{closePopup:function(a){e({type:"CLOSE__POPUP"})}}}))((function(e){var a=e.status,t=e.month,n=e.day,c=e.dayName,o=e.closePopup;return!0===a?r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup__close",onClick:o},"\xd7"),r.a.createElement("div",{className:"popup__item"},r.a.createElement("div",{className:"popup__item-title"},"Month"),r.a.createElement("div",{className:"popup__item-value"},t)),r.a.createElement("div",{className:"popup__item"},r.a.createElement("div",{className:"popup__item-title"},"Day"),r.a.createElement("div",{className:"popup__item-value"},"".concat(n," ").concat(c))))):r.a.createElement("div",null)}))),H=(t(41),function(){return r.a.createElement("section",{className:"home-page"},r.a.createElement(Y,null),r.a.createElement("div",{className:"home-page__left"},r.a.createElement("div",{className:"home-page__content"},r.a.createElement("h1",{className:"home-page__title"},"Choose the day ",r.a.createElement("br",null),"for the meeting"),r.a.createElement("div",{className:"home-page__subtitle"},"We encourage you to book your ",r.a.createElement("br",null)," appointment online. ",r.a.createElement("br",null)," This will save you time."))),r.a.createElement("div",{className:"home-page__right"},r.a.createElement(U,null)))}),W=(t(42),function(){return r.a.createElement("section",{className:"about-us"},r.a.createElement("div",{className:"about-us__wrapper"},r.a.createElement("div",{className:"about-us__title"},"Lorem ipsum creation timelines"),r.a.createElement("div",{className:"about-us__text"},r.a.createElement("p",null,"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."),r.a.createElement("p",null,"It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries."),r.a.createElement("p",null,"And anyways, as Cecil Adams reasoned, \u201c[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?\u201d Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset."),r.a.createElement("p",null,"McClintock wrote to Before & After to explain his discovery;",r.a.createElement("br",null)," \u201cWhat I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!\u201d (The editors published his letter in a correction headlined \u201cLorem Oopsum\u201d)."))))}),F=t(1),B=(t(43),function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(g,null),r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/",component:H,exact:!0}),r.a.createElement(F.a,{path:"/about-us",component:W})))});o.a.render(r.a.createElement(l.a,{store:v},r.a.createElement(f.a,null,r.a.createElement(B,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.249aacef.chunk.js.map