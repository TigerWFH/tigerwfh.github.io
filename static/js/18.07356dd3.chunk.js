(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{514:function(e,t,n){e.exports=n.p+"static/media/flower.a2b96fae.mp4"},553:function(e,t,n){"use strict";n.r(t);var c=n(48),i=n(51),o=n(50),a=n(49),l=n(52),r=n(0),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).onClick=function(){n.setState({child:"child change child"})},n.state={child:"child"},n}return Object(l.a)(t,e),Object(a.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("child====>props====>",e),null}}]),Object(a.a)(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("button",{onClick:this.onClick},"change child child"),this.state.child)}}]),t}(r.Component);n.d(t,"default",function(){return s});var u=n(514),s=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).onChangeParentChild=function(){n.setState(function(e,t){return{child:"video change child"}})},n.onClick=function(){alert(1)},n.state={child:"initial video child"},n.dynamicLoadScript(),n}return Object(l.a)(t,e),Object(a.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("video===>",e),{monkey:{info:{name:"cat"}},cat:{name:"cat"}}}}]),Object(a.a)(t,[{key:"dynamicLoadScript",value:function(){console.log("dynamic load script");var e=document.createElement("script");e.src="../../libs/lib.js",e.onload=function(e){console.log("onload===>",e)},e.onerror=function(e){console.log("onerror script load error====>",e)},document.head.appendChild(e)}},{key:"render",value:function(){return r.createElement("div",null,r.createElement("button",{onClick:this.onChangeParentChild},"change parent child"),r.createElement(d,{child:this.state.child}),r.createElement("video",{width:"200px",onClick:this.onClick},r.createElement("source",{src:u,type:"video/mp4"})),r.createElement("video",{width:"200px",controls:!0},r.createElement("source",{src:u,type:"video/mp4"})))}}]),t}(r.Component)}}]);
//# sourceMappingURL=18.07356dd3.chunk.js.map