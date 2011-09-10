/* Prevel Framework v1.0.0
 * http://github.com/chernikovalexey/Prevel
 * 
 * Copyright 2011, Alexey Chernikov
 * Dual licensed under the:
 *  - GNU LGPL (http://opensource.org/licenses/lgpl-license.php)
 *  - MIT License (http://opensource.org/licenses/mit-license.php)
 * 
 * =====
 * 
 * Contains YASS v0.3.9
 * http://yass.webo.in
 * 
 * Copyright 2008-2009, Nikolay Matsievsky (sunnybear)
 * Dual licensed under the:
 *  - MIT License (http://opensource.org/licenses/mit-license.php)
 *  - GNU GPL (http://opensource.org/licenses/gpl-license.php)
**/
(function(s,g,t,B,r,o,C,v,H,z,A,I){(function(){var g={"function":"fn",object:"obj",number:"int",string:"str","boolean":"bool","undefined":v},l=!!Object[t].__lookupGetter__&&!!Object[t].__lookupSetter__,f=function(){return function(a,b,c){return f.fn?new f.fn.init(a,b,c):I}}(),e=s.navigator.userAgent.toLowerCase();f.extend=function(a,b){b||(b=a,a=f);if(l){var c,d,e;for(e in b)c=b.__lookupGetter__(e),d=b.__lookupSetter__(e),c||d?(c&&a.__defineGetter__(e,c),d&&a.__defineSetter__(e,d)):a[e]||(a[e]=b[e])}else for(e in b)a[e]||(a[e]=b[e]);return a},f.extend({implement:function(a,b){return f.extend(a[t],b)},isArray:Array.isArray||function(a){return Object[t].toString.call(a)==="[object Array]"},type:function(a,b){var c;return f.isArray(a)?c="arr":a instanceof RegExp?c="regexp":a instanceof Date?c="date":a===z?c=C:c=g[typeof a],b?c===b:c},empty:function(a){if(f.type(a,"obj")){for(var b in a)return!1;return!0}return f.type(a,C)||f.type(a,v)||!a.length},trim:function(a){return String[t].trim?a.trim():a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},each:function(a,b){for(var c=a.length;--c>-1;)b.call(a[c],c,a[c])},inArray:function(a,b){return Array[t].indexOf?b.indexOf(a):(f.each(b,function(b){if(a===this)return b}),-1)},toParams:function(a){if(!f.type(a,"obj"))return a;var b=[],c;for(c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},JSON:function(c){return!/[^,:{}[]0-9.-+Eaeflnr-u nrt]/.test(c.replace(/"(.|[^"])*"/g,""))&&eval("("+c+")")},browser:function(a){var b=/opera/i.test(e),c=/chrome/i.test(e),b={opera:b,ie:!b&&/msie/i.test(e),ie6:!b&&/msie 6/i.test(e),ie7:!b&&/msie 7/i.test(e),ie8:!b&&/msie 8/i.test(e),firefox:/firefox/i.test(e),chrome:c,safari_khtml:!c&&/khtml/i.test(e),safari:!c&&/webkit|safari/i.test(e)},d;for(d in b)if(b[d])return a===d||d}}),f.extend(s,{pl:f,prevel:f})})(),function(){pl.extend({ajax:function(a){var b,c=a.load||A,d=a.error||A,e=a.success||A,f=function(c){b.setRequestHeader("X-Requested-With","XMLHttpRequest"),c&&b.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset="+(a.charset||"utf-8"))};a.type=a.type||"POST",a.data=pl.toParams(a.data||{}),a.async=a.async||!0,function(){if(s.XMLHttpRequest)b=new XMLHttpRequest,b.overrideMimeType&&b.overrideMimeType("text/html");else if(s.ActiveXObject)try{b=new ActiveXObject("Msxml2.XMLHTTP")}catch(f){try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(h){}}if(!b)return alert("Could not create an XMLHttpRequest instance.");b.onreadystatechange=function(){switch(b.readyState){case 1:c();break;case 4:b.status===200?e(a.dataType==="json"?pl.JSON(b.responseText):b.responseText):d(b.status)}}}();switch(a.type){case"POST":b.open("POST",a.url,a.async),f(1),b.send(a.data);break;case"GET":b.open("GET",a.url+"?"+a.data,a.async),f(),b.send(z)}}})}(),function(){var a={className:"class",cssFloat:"float",htmlFor:"for"};pl.extend({fn:{},find:function(a,b){return g.querySelectorAll(b?b+" "+a:a)}}),pl.extend(pl.fn,{init:function(){return function(a,b,d){var e;switch(pl.type(a)){case"str":var f=a.match(H);if(f)e=b,f=g.createElement(f[1]),e=[e?pl.extend(f,e):f];else switch(pl.type(b)){case"str":switch(pl.type(d)){case"int":e=[pl.find(a,b)[d]];break;default:case v:e=pl.find(a)}break;case"int":e=[pl.find(a)[b]];break;default:case v:e=pl.find(a)}break;case"fn":c.ready(a);break;case"obj":e=[a]}return this.elements=e,this.selector=arguments,__this=this,this}}(),len:function(){return this.elements.length},last:function(){var a=this.elements.length;return this.elements=[a?this.elements[a-1]:z],this},html:function(a,b){return d(this,"innerHTML",a,b)},text:function(a,c){return d(this,b,a,c)},get:function(a){var b=this.elements;return b.length===1?b[0]:pl.type(a,v)?b:b[a]},parent:function(a){return a||(a=1),f(this.elements[0],a)},remove:function(){return pl.each(this.elements,function(){this.parentNode.removeChild(this)}),this},addClass:function(a){return pl.each(this.elements,function(){pl.inArray(a,this[o].split(" "))===-1&&(this[o]+=(this[o]?" ":"")+a)}),this},hasClass:function(a){return pl.inArray(a,this.elements[0][o].split(" "))!==-1},removeClass:function(a){return pl.each(this.elements,function(){var b=this[o].split(" "),c=pl.inArray(a,b);c!==-1&&(b.splice(c,1),pl.empty(b)?this.removeAttribute("class"):this[o]=b.join(" "))}),this},attr:function(b,c){b=a[b]||b;if(c)pl.each(this.elements,function(){this.setAttribute(b,c)});else switch(pl.type(b)){case"obj":for(var d in b)arguments.callee.call(this,d,b[d]);break;case"str":return this.elements[0].getAttribute(b)}return this},removeAttr:function(b){return b=a[b]||b,pl.each(this.elements,function(){this.removeAttribute(b)}),this},css:function(a,b){if(b){a=e.fixStyle(a);if(pl.type(b,"int")&&!e.rmvPostFix[a])b+="px";else if(a==="opacity")var c=e.fixOpacity(b),a=c[0],b=c[1];pl.each(this.elements,function(){this.style[a]=b})}else switch(pl.type(a)){case"obj":for(c in a)arguments.callee.call(this,c,a[c]);break;case"str":return e.get(this.elements[0],a)}return this},each:function(a){return pl.each(__this.elements,function(){a.call(this)}),this},bind:function(a,b){return c.routeEvent(a,b,1)},unbind:function(a,b){return c.routeEvent(a,b,0)},show:function(){return pl.each(this.elements,function(){pl(this).css("display")==="none"&&pl(this).css("display",this.getAttribute("plrd")||"")}),this},hide:function(){return pl.each(this.elements,function(){var a=pl(this).css("display");a!=="none"&&(this.setAttribute("plrd",a),this.style.display="none")}),this},after:function(a){if(pl.type(a,"obj")){var b=g.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.elements,function(){var b=this,c=g.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.parentNode.insertBefore(this,b.nextSibling)})}catch(d){}}),this},before:function(a){if(pl.type(a,"obj")){var b=g.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.elements,function(){var b=this,c=g.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.parentNode.insertBefore(this,b)})}catch(d){}}),this},append:function(a){if(pl.type(a,"obj")){var b=g.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.elements,function(){var b=this,c=g.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.appendChild(this)})}catch(d){}}),this},prepend:function(a){if(pl.type(a,"obj")){var b=g.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.elements,function(){var b=this,c=g.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.insertBefore(this,b.firstChild)})}catch(d){}}),this}}),pl.implement(pl.fn.init,pl.fn);var b=pl.browser("ie")?"innerText":"textContent",c={ready:function(){this.readyList=[],this.bindReady=function(a){function b(){d||(d=!0,a())}var d=!1;if(g[B])c.attaches.bind(g,"DOMContentLoaded",b);else if(g.attachEvent){if(g.documentElement.doScroll&&s===s.top){var e=function(){if(!d&&g.body)try{g.documentElement.doScroll("left"),b()}catch(a){setTimeout(e,0)}};e()}c.attaches.bind(g,"readystatechange",function(){g.readyState==="complete"&&b()})}c.attaches.bind(s,"load",b)};var a=this;return function(b){a.readyList.length||a.bindReady(function(){pl.each(a.readyList,function(){this()})}),a.readyList.push(b)}}(),attaches:function(){function a(a){return a=a||s.event,a.fixed?a:(a.fixed=!0,a.preventDefault=a.preventDefault||function(){this.returnValue=!1},a.stopPropagation=a.stopPropagation||function(){this.cancelBubble=!0},a.target||(a.target=a.srcElement),!a.which&&a.button&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0),a)}function b(b){var b=a(b),c=this.evt[b.type],d;for(d in c)c[d].call(this,b)||(b.preventDefault(),b.stopPropagation())}var d=0;return{bind:function(a,e,f){pl.browser("ie")&&a.setInterval&&a!==s&&(a=s),f.turnID||(f.turnID=++d),a.evt||(a.evt={},a.handleEvt=function(d){if(!pl.type(c.attaches,v))return b.call(a,d)}),a.evt[e]||(a.evt[e]={},a[B]?a[B](e,a.handleEvt,!1):a.attachEvent("on"+e,a.handleEvt)),a.evt[e][f.turnID]=f},unbind:function(a,b,c){var d=a.evt&&a.evt[b];if(d){delete d[c.turnID];for(var e in d)return;a.removeEventListener?a.removeEventListener(b,a.handleEvt,!1):a.detachEvent("on"+b,a.handleEvt),delete a.evt[b];for(e in a.evt)return;try{delete a.handleEvt,delete a.evt}catch(f){a.removeAttribute("handleEvt"),a.removeAttribute("evt")}}}}}(),routeEvent:function(a,b,d){if(b)d?pl.each(__this.elements,function(){c.attaches.bind(this,a,b)}):pl.each(__this.elements,function(){c.attaches.unbind(this,a,b)});else for(var e in a)arguments.callee(e,a[e],d);return __this}},d=function(a,b,c,d){var e=a,a=e.elements[0];if(!c)return a[b];if(d)switch(d){case 1:pl.each(e.elements,function(){this[b]+=c});break;case-1:pl.each(e.elements,function(){this[b]=c+this[b]})}else a[b]=c;return e},e={fixStyle:function(a){return a.match("-")?(a=a.split("-"),a[0]+a[1].toUpperCase()):a},fixOpacity:function(a){var b=["opacity",a];switch(pl.browser()){case"ie7":b[0]="filter",b[1]="alpha(opacity="+a*100+");";break;case"ie8":b[0]="-ms-filter",b[1]="alpha(opacity="+a*100+")";break;case"safari_khtml":b[0]="-khtml-opacity";break;case"firefox":b[0]="-moz-opacity"}return b},fixReturnOpacity:function(a){return a?a.match("opacity=")?a.match("=([0-9]+)")[1]/100:a:z},rmvPostFix:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},get:function(a,b){return b==="opacity"&&(b=e.fixOpacity(0)[0]),e.fixReturnOpacity(a.currentStyle?a.currentStyle[b]:s.getComputedStyle(a,z).getPropertyValue(b))}},f=function(a,b){return b>0?f(a.parentNode,--b):a}}(),function(){var a=!!g[r+"sByClassName"],b=!!g.querySelectorAll;pl.find=function(c){return pl.extend(c,{attr:{"":function(a,b){return!!a.getAttribute(b)},"=":function(a,b,c){return(b=a.getAttribute(b))&&b===c},"&=":function(){},"^=":function(){},"$=":function(){},"*=":function(){},"|=":function(){},"!=":function(){}},mods:{"first-child":function(){},"last-child":function(a){for(;(a=a.nextSibling)&&a.nodeType!=1;);return!!a},root:function(a){return a.nodeName.toLowerCase()!=="html"},"nth-child":function(a,b){var c=a.nodeIndex||0,d=b[3]=b[3]?(b[2]==="%"?-1:1)*b[3]:0,e=b[1];if(c)return!((c+d)%e);var f=a.parentNode.firstChild;c++;do if(f.nodeType==1&&(f.nodeIndex=++c)&&a===f&&(c+d)%e)return 0;while(f=f.nextSibling);return 1},"nth-last-child":function(a,b){var c=a.nodeIndexLast||0,d=b[3]?(b[2]==="%"?-1:1)*b[3]:0,e=b[1];if(c)return!((c+d)%e);var f=a.parentNode.lastChild;c++;do if(f.nodeType==1&&(f.nodeLastIndex=c++)&&a===f&&(c+d)%e)return 0;while(f=f.previousSibling);return 1},empty:function(a){return!!a.firstChild},parent:function(a){return!a.firstChild},"only-child":function(a){return a.parentNode[r+"sByTagName"]("*").length!=1},checked:function(a){return!a.checked},lang:function(a,b){return a.lang!==b&&g.documentElement.lang!==b},enabled:function(a){return a.disabled||a.type==="hidden"},disabled:function(a){return!a.disabled},selected:function(){return!child.selected}}}),function(d,e){e&&(d=e+" "+d),e=g;var h=[];if(d==="body *")return g.body[r+"sByTagName"]("*");if(/^[\w[:#.][\w\]*^|=!]*$/.test(d)){var i=0;switch(d.charAt(0)){case"#":i=d.slice(1),h=g[r+"ById"](i),pl.browser("ie")&&h.id!==i&&(h=g.all[i]),h=h?[h]:[];break;case".":var j=d.slice(1);if(a)h=(h=e[r+"sByClassName"](j)).length?h:[];else{for(var j=" "+j+" ",k=e[r+"sByTagName"]("*"),m=0,n;n=k[m++];)(" "+n[o]+" ").indexOf(j)!=-1&&(h[i++]=n);h=i?h:[]}break;case":":for(var k=e[r+"sByTagName"]("*"),m=0,p=d.replace(/[^(]*\(([^)]*)\)/,"$1"),q=d.replace(/\(.*/,"");n=k[m++];)c.mods[q]&&!c.mods[q](n,p)&&(h[i++]=n);h=i?h:[];break;case"[":for(var k=e[r+"sByTagName"]("*"),m=0,q=/\[([^!~^*|$ [:=]+)([$^*|]?=)?([^ :\]]+)?\]/.exec(d),t=q[1],u=q[2]||"",q=q[3];n=k[m++];)c.attr[u]&&(c.attr[u](n,t,q)||t==="class"&&c.attr[u](n,o,q))&&(h[i++]=n);h=i?h:[];break;default:h=(h=e[r+"sByTagName"](d)).length?h:[]}}else if(b&&d.indexOf("!=")==-1)h=e.querySelectorAll(d.replace(/=([^\]]+)/,'="$1"'));else{n=d.split(/ *, */);for(var v=n.length-1,w=!!v,x,y,A,B,C,D,E,F,G,H,I,J;i=n[v--];){for(y=(x=i.replace(/(\([^)]*)\+/,"$1%").replace(/(\[[^\]]+)~/,"$1&").replace(/(~|>|\+)/," $1 ").split(/ +/)).length,m=0,B=" ",k=[e];A=x[m++];)if(A!==" "&&A!==">"&&A!=="~"&&A!=="+"&&k){for(A=A.match(/([^[:.#]+)?(?:#([^[:.#]+))?(?:\.([^[:.]+))?(?:\[([^!&^*|$[:=]+)([!$^*|&]?=)?([^:\]]+)?\])?(?:\:([^(]+)(?:\(([^)]+)\))?)?/),C=A[1]||"*",D=A[2],j=A[3]?" "+A[3]+" ":"",t=A[4],u=A[5]||"",q=A[7],p=q==="nth-child"||q==="nth-last-child"?/(?:(-?\d*)n)?(?:(%|-)(\d*))?/.exec(A[8]==="even"&&"2n"||A[8]==="odd"&&"2n%1"||!/\D/.test(A[8])&&"0n%"+A[8]||A[8]):A[8],E=[],i=F=0,H=m==y;G=k[F++];)switch(B){case" ":for(I=G[r+"sByTagName"](C),G=0;J=I[G++];)(!D||J.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!t||c.attr[u]&&(c.attr[u](J,t,A[6])||t==="class"&&c.attr[u](J,o,A[6])))&&!J.yeasss&&(c.mods[q]?!c.mods[q](J,p):!q)&&(H&&(J.yeasss=1),E[i++]=J);break;case"~":for(C=C.toLowerCase();(G=G.nextSibling)&&!G.yeasss;)G.nodeType==1&&(C==="*"||G.nodeName.toLowerCase()===C)&&(!D||G.id===D)&&(!j||(" "+G[o]+" ").indexOf(j)!=-1)&&(!t||c.attr[u]&&(c.attr[u](J,t,A[6])||t==="class"&&c.attr[u](J,o,A[6])))&&!G.yeasss&&(c.mods[q]?!c.mods[q](G,p):!q)&&(H&&(G.yeasss=1),E[i++]=G);break;case"+":for(;(G=G.nextSibling)&&G.nodeType!=1;);G&&(G.nodeName.toLowerCase()===C.toLowerCase()||C==="*")&&(!D||G.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!t||c.attr[u]&&(c.attr[u](J,t,A[6])||t==="class"&&c.attr[u](J,o,A[6])))&&!G.yeasss&&(c.mods[q]?!c.mods[q](G,p):!q)&&(H&&(G.yeasss=1),E[i++]=G);break;case">":for(I=G[r+"sByTagName"](C),m=0;J=I[m++];)J.parentNode===G&&(!D||J.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!t||c.attr[u]&&(c.attr[u](J,t,A[6])||t==="class"&&c.attr[u](J,o,A[6])))&&!J.yeasss&&(c.mods[q]?!c.mods[q](J,p):!q)&&(H&&(J.yeasss=1),E[i++]=J)}k=E}else B=A;if(w){if(!k.concat){for(E=[],G=0;J=k[G];)E[G++]=J;k=E}h=k.concat(h.length==1?h[0]:h)}else h=k}for(i=h.length;i--;)h[i].yeasss=h[i].nodeIndex=h[i].nodeIndexLast=z}return h}}({})}()})(this,document,"prototype","addEventListener","getElement","className","null","undef","<([A-z]+)>",null,function(){})