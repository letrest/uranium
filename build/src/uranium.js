(function(b){function u(f,c,e){var g={},r="[data-ur-set='"+c+"']",v="data-ur-"+c+"-component";b(f).find("["+v+"]").addBack("["+v+"]").each(function(){if(!b(this).data("urCompInit")){var f=b(this).attr("data-ur-id")?b(this):b(this).closest(r);if(f[0]&&!f.data("urInit")){b(this).data("urCompInit",!0);var c=f.attr("data-ur-id");c||(c=Q(),f.attr("data-ur-id",c));g[c]=g[c]||{};g[c]._id=c;if(f.is(r))g[c].set=f[0];e?e(g[c],this):(f=b(this).attr(v),g[c][f]=g[c][f]||[],g[c][f].push(this))}}});return g}function K(b){var c=
b.originalEvent.touches,b=c&&c[0]||b;return{x:b.clientX,y:b.clientY}}function x(b){b.preventDefault();b.stopPropagation()}var p=b.fn.jquery.split(".");p[0]==1&&p[1]<4&&(b=b.extend(function(f,c){return new b.fn.init(f||[],c)},b));b.fn.on||b.fn.extend({on:function(b,c,e,g){e==null&&g==null?(g=c,c=null):g==null&&typeof c!="string"&&(g=e,e=c,c=null);return c?this.delegate(c,b,e,g):this.bind(b,e,g)},off:function(b,c,e){e==null&&(e=c,c=null);return c?this.undelegate(c,b,e):this.unbind(b,e)}});if(!b.fn.addBack)b.fn.addBack=
b.fn.andSelf;if(!b.error)b.error=function(b){throw Error(b);};var Q=function(){var b=0;return function(){return++b}}(),S=/Android [12]/.test(navigator.userAgent),L=!S;L&&(p=b("<a>").css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"}),L=(p.css("WebkitTransform")+p.css("MozTransform")+p.css("msTransform")+p.css("transform")).indexOf("(")!=-1);var C="ontouchstart"in window,M=(C?"touchstart":"mousedown")+
".ur",N=(C?"touchmove":"mousemove")+".ur",R=(C?"touchend":"mouseup")+".ur",P={toggler:function(f){f=u(f,"toggler");b.each(f,function(c,e){e.button||b.error("no button found for toggler with id: "+c);e.content||b.error("no content found for toggler with id: "+c);var g=b(e.button).attr("data-ur-state")||"disabled";b(e.button).add(e.content).attr("data-ur-state",g);b(e.button).on("click.ur.toggler",function(){var c=b(e.button).attr("data-ur-state")=="enabled",g=c?"disabled":"enabled";b(e.button).add(e.content).attr("data-ur-state",
g);c||b(e.drawer).attr("data-ur-state",g)});b(e.drawer).on("webkitTransitionEnd.ur.toggler transitionend.ur.toggler",function(){b(this).attr("data-ur-state",b(e.button).attr("data-ur-state"))});b(e.set).data("urInit",!0)})},tabs:function(f){f=u(f,"tabs",function(c,e){var g=b(e).attr("data-ur-tab-id");c.tabs=c.tabs||{};c.tabs[g]=c.tabs[g]||{};var f=b(e).attr("data-ur-tabs-component");c.tabs[g][f]=c.tabs[g][f]||[];c.tabs[g][f].push(e)});b.each(f,function(c,e){e.closeable=b(e.set).attr("data-ur-closeable")==
"true";b.each(e.tabs,function(){var e=b(this.button).attr("data-ur-state")||"disabled";b(this.button).add(this.content).attr("data-ur-state",e)});b.each(e.tabs,function(c,f){b(f.button).on("click.ur.tabs",function(){var c=b(this).attr("data-ur-state")=="enabled";b.each(e.tabs,function(){b(this.button).add(this.content).attr("data-ur-state","disabled")});(!c||!e.closeable)&&b(f.button).add(f.content).attr("data-ur-state","enabled")})});b(e.set).data("urInit",!0)})},inputClear:function(f){f=u(f,"input-clear");
b.each(f,function(c,e){var g=b("<div class='data-ur-input-clear-ex'></div>").hide();b(e.set).append(g);g.on(C?"touchstart.ur.inputclear":"click.ur.inputclear",function(){f[0].value="";f[0].focus()}).on("touchend.ur.inputclear",function(){f[0].blur()});var f=b(e.set).find("input");f.on("focus.ur.inputclear",function(){f[0].value!=""&&g.show()}).on("keydown.ur.inputclear",function(){g.show()}).on("blur.ur.inputclear",function(){setTimeout(function(){g.hide()},150)});b(e.set).data("urInit",!0)})},geoCode:function(f){f=
u(f,"reverse-geocode",function(c,e){c.elements=c.elements||{};c.elements[b(e).attr("data-ur-reverse-geocode-component")]=e});b.each(f,function(c,e){function f(e,c,g){var d=0,i=null,a=null,j=null;switch(b(e).attr("data-ur-reverse-geocode-component")){case "rg-city":a="locality";break;case "rg-street":a="street_number";break;case "rg-zip":a="postal_code";break;case "rg-state":a="administrative_area_level_1";break;case "rg-country":a="country"}for(var j=c[0],h=null,r=j.address_components.length,k=0;k<
r;k++)for(var v=j.address_components[k].types.length,n=0;n<v;n++)if(h=j.address_components[k].types[n],a==h){switch(h){case "street_number":d=k;i=k+1;break;case "locality":d=k;break;case "postal_code":d=k;break;case "administrative_area_level_1":d=k;break;case "country":d=k}break}if(g==="input")e.value=i===null?c[0].address_components[d].long_name:c[0].address_components[d].long_name+" "+c[0].address_components[i].long_name;else if(g==="select"){c=c[0].address_components[d];g=0;for(d=e.length;g<d;g++)if(e[g].value===
c.long_name||e[g].value.toUpperCase()===c.short_name)e.selectedIndex=g}}var r=this.set;b(r).attr("data-ur-callback");var v=b(r).attr("data-ur-error-callback"),G,B,x;this.setupCallbacks=function(){x=this;var c=b(this.elements).filter("[data-ur-reverse-geocode-component='rg-button']");if(c.length>0)b(c).on("click.ur.inputclear",function(b){return function(){b.geocodeInit()}}(this));else console.warn("no button for triggering reverse geocoding present"),this.geocodeInit()};this.geoSuccess=function(b){b=
{lat:b.coords.latitude,lng:b.coords.longitude};this.codeLatLng(b.lat,b.lng)};this.geoError=function(b){console.error("Ur geolocation error -- Error Getting Your Coordinates!");switch(b.code){case b.TIMEOUT:console.error("Ur geolocation error -- Timeout");break;case b.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");break;case b.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case b.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}v!==
void 0&&eval(v)};this.geoDenied=function(){console.error("Ur geolocation error -- User Denied Geolocation")};this.codeLatLng=function(b,c){var e=new google.maps.LatLng(b,c),d=this;G.geocode({latLng:e},function(b,a){if(a==google.maps.GeocoderStatus.OK)if(b[1]){B=b;var c=x.elements;for(elm in c)c[elm].localName==="input"?f(c[elm],B,"input"):c[elm].localName==="select"&&f(c[elm],B,"select");d.callback!==void 0&&eval(d.callback);return b}else console.error("Geocoder failed due to: "+a)})};this.geocodeInit=
function(){navigator.geolocation&&(G=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(b){return function(c){b.geoSuccess(c)}}(this),function(b){return function(c){b.geoError(c)}}(this),this.geoDenied))};UrGeocode=function(b){return function(){b.setupCallbacks()}}(this);r=document.createElement("script");r.type="text/javascript";r.src="https://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";b("head").append(r);b(e.set).data("urInit",!0)})},zoom:function(f){function c(b,
c){return Math.max(Math.min(c[0],b),c[1])}function e(e){function f(){var a=b(d.container).attr("data-ur-transform3d");if(a)d.transform3d=a!="disabled";d.transform3d&&(H="translate3d(",q=",0)",y=" scale3d(",I=",1)");b(d.container).attr("data-ur-transform3d",d.transform3d?"enabled":"disabled");d.canvasWidth=d.canvasWidth||d.container.offsetWidth;d.canvasHeight=d.canvasHeight||d.container.offsetHeight;d.width=d.width||parseInt(i.attr("width"))||parseInt(i.css("width"))||d.img.width;d.height=d.height||
parseInt(i.attr("height"))||parseInt(i.css("height"))||d.img.height;d.bigWidth=parseInt(i.attr("data-ur-width"))||d.img.naturalWidth;d.bigHeight=parseInt(i.attr("data-ur-height"))||d.img.naturalHeight;if(i.attr("data-ur-width")&&i.attr("data-ur-height")||i.attr("src")==i.attr("data-ur-src"))d.prescale=!0;d.ratio=d.bigWidth/d.width;h=(d.canvasWidth-d.bigWidth)/2;l=(d.canvasHeight-d.bigHeight)/2}function G(a){if(a.target==d.img){A=!1;z=a.pageX;o=a.pageY;m=!0;var b=a.originalEvent.touches;if(b)z=b[0].pageX,
o=b[0].pageY;b=d.img.style;window.WebKitCSSMatrix?(b=new WebKitCSSMatrix(b.webkitTransform),n=b.m41,w=b.m42):(b=b.MozTransform||b.msTransform||b.transform||"translate(0, 0)",b=b.replace(/.*?\(|\)/,"").split(","),n=parseInt(b[0]),w=parseInt(b[1]));x(a)}}function B(a){if(m&&a.target==d.img){x(a);var b=a.pageX,e=a.pageY;if(a=a.originalEvent.touches)b=a[0].pageX,e=a[0].pageY;b-=z;e-=o;if(Math.abs(b)>5||Math.abs(e)>5)A=!0;b=c(n+b,[-h,h]);e=c(w+e,[-l,l]);D(b,e,d.ratio)}}function p(a){A||d.zoomOut();x(a);
m=!1;A=!0}function u(){if(d.state=="enabled-in")i.css({webkitTransitionDelay:"",MozTransitionDelay:"",OTransitionDelay:"",transitionDelay:""}),d.img.src=i.attr("data-ur-src"),g.indexOf(d.img.getAttribute("data-ur-src"))==-1&&setTimeout(function(){g.indexOf(d.img.getAttribute("data-ur-src"))==-1&&a.attr("data-ur-state","enabled")},16),d.state="enabled",d.container.setAttribute("data-ur-state",d.state),b(d.container).on(M+".zoom",G).on(N+".zoom",B).on(R+".zoom",p);else if(d.state=="enabled-out")d.state=
"disabled",d.container.setAttribute("data-ur-state",d.state),b(d.container).off(M+".zoom",G).off(N+".zoom",B).off(R+".zoom",p)}function s(a,b){j.attr("data-ur-state","enabled");d.state="enabled-in";d.container.setAttribute("data-ur-state",d.state);D(a||0,b||0,d.ratio)}function D(a,b,d){var c="";a!=null&&(c=H+a+"px, "+b+"px"+q);d!=null&&(c+=y+d+", "+d+I);return i.css({webkitTransform:c,MozTransform:c,msTransform:c,transform:c})}var d=this;this.container=e.set;this.img=e.img[0];this.prescale=!1;this.canvasWidth=
this.canvasHeight=this.bigWidth=this.bigHeight=this.width=this.height=0;this.ratio=1;this.state="disabled";this.transform3d=L;this.button=e.button;this.idler=e.loading;var i=b(this.img),a=b(this.idler),j=b(this.button),h,l,k,t,n=0,w=0,z=0,o=0,m=!1,A=!0,H="translate(",q=")",y=" scale(",I=")",E,F,J;g.push(i.attr("src"));this.zoomIn=function(b){if(d.state=="disabled"){if(!d.width)f(),d.img.style.width=d.width+"px",d.img.style.height=d.height+"px";var e=b.pageX,O=b.pageY;if(b.touches)e=b.touches[0].pageX,
O=b.touches[0].pageY;k=b.offsetX;t=b.offsetY;if(k==void 0||t==void 0)b=d.img.getBoundingClientRect(),k=e-b.left,t=O-b.top;d.prescale?(e=c(d.bigWidth/2-d.ratio*k,[-h,h]),O=c(d.bigHeight/2-d.ratio*t,[-l,l]),s(e,O)):(d.state="enabled-in",d.img.src=i.attr("data-ur-src"),setTimeout(function(){d.prescale||a.attr("data-ur-state","enabled")},0))}};this.zoomOut=function(){if(d.state=="enabled")j.attr("data-ur-state","disabled"),d.state="enabled-out",d.container.setAttribute("data-ur-state",d.state),D(0,0,
1)};d.container.getAttribute("data-ur-touch")!="disabled"&&(b(d.container).on(M+".zoom",function(a){F=J=!0;E=K(a)}),b(d.container).on(N+".zoom",function(a){a=K(a);J&&Math.abs(E.x-a.x)+Math.abs(E.x-a.x)>0&&(F=!1)}),b(d.container).on("click.ur.zoom",function(a){F&&d.zoomIn(a)}));i.on("load.ur.zoom",function(){i.attr("src")==i.attr("data-ur-src")&&g.push(i.attr("src"));a.attr("data-ur-state","disabled");if(!d.prescale&&d.state=="enabled-in"){d.prescale=!0;f();var b=c(d.bigWidth/2-d.ratio*k,[-h,h]),e=
c(d.bigHeight/2-d.ratio*t,[-l,l]);i.css({webkitTransitionDelay:"0.3s",MozTransitionDelay:"0.3s",OTransitionDelay:"0.3s",transitionDelay:"0.3s"});s(b,e)}});this.zoom=function(){if(d.state=="disabled"){if(!d.width)f(),d.img.style.width=d.width+"px",d.img.style.height=d.height+"px";d.prescale?s(0,0):(d.state="enabled-in",d.img.src=i.attr("data-ur-src"),setTimeout(function(){g.indexOf(d.img.getAttribute("data-ur-src"))==-1&&a.attr("data-ur-state","enabled")},0))}else d.zoomOut()};b(d.button).on(C?"touchstart.ur.zoom":
"click.ur.zoom",d.zoom);i.on("webkitTransitionEnd.ur.zoom transitionend.ur.zoom",u);this.reset=function(){d.prescale=!1;d.width=d.height=0;i.css({width:"",height:""});D();d.state="enabled-out";u();a.attr("data-ur-state","disabled");j.attr("data-ur-state","disabled")}}var f=u(f,"zoom"),g=[];b.each(f,function(c,f){Uranium.zoom[c]=new e(this);b(f.set).data("urInit",!0)})},carousel:function(f){function c(c){function f(){a.options.transform3d||(I="translate(",E=")");h.each(function(d,c){if(b(c).attr("data-ur-state")==
"active")return a.itemIndex=d,!1});r();p(a.options.center?a.itemIndex+a.options.cloneLength:a.itemIndex);v();a.update();b(a.scroller).on("dragstart.ur.carousel",function(){return!1});a.options.touch&&(b(a.scroller).on(M+".carousel",u).on(N+".carousel",P).on(R+".carousel",Q),h.each(function(d,c){c.onclick&&b(c).data("urClick",c.onclick);c.onclick=function(d){if(a.flag.click||!d.clientX&&!d.clientY){var c=b(this).data("urClick");c&&c.call(this,d)}else x(d),d.stopImmediatePropagation()}}));a.button.prev.on("click.ur.carousel",
function(){s(1)});a.button.next.on("click.ur.carousel",function(){s(-1)});if("onorientationchange"in window)b(window).on("orientationchange.ur.carousel",a.update);else b(window).on("resize.ur.carousel",function(){q!=j.outerWidth()&&(a.update(),setTimeout(a.update,100))});h.find("img").addBack("img").on("load.ur.carousel",a.update);a.autoscrollStart();j.triggerHandler("load.ur.carousel")}function r(){if(a.options.infinite){if(a.options.cloneLength==0)if(a.options.fill)a.options.cloneLength=a.options.center?
a.options.fill-1:a.options.fill;else if(a.options.center){for(var d=[0,0],c=q/2+h[o].offsetWidth/2,e=o;c>0;e=(e-1+a.count)%a.count)c-=h[e].offsetWidth,d[0]++;c=q/2+h[0].offsetWidth/2;for(e=0;c>0;e=(e+1)%a.count)c-=h[e].offsetWidth,d[1]++;a.options.cloneLength=Math.max(d[0],d[1])}else{c=q;for(e=0;c>0;)c-=h[e].offsetWidth,a.options.cloneLength++,e=(e+1)%h.length}j.attr("data-ur-clones",a.options.cloneLength);d=document.createDocumentFragment();for(e=0;e<a.options.cloneLength;e++){var f=e%a.count,f=
h.eq(f).clone(!0).attr("data-ur-clone",f).attr("data-ur-state","inactive");d.appendChild(f[0])}h.parent().append(d);if(a.options.center){d=document.createDocumentFragment();for(e=c=a.count-a.options.cloneLength%a.count;e<c+a.options.cloneLength;e++)f=e%a.count,f=h.eq(f).clone(!0).attr("data-ur-clone",f).attr("data-ur-state","inactive"),d.appendChild(f[0]);h.parent().prepend(d)}h=b(a.scroller).find("[data-ur-carousel-component='item']");o=h.length-1}else a.options.cloneLength=0,j.attr("data-ur-clones",
0)}function v(){if(a.dots){var d=b(a.dots).find("[data-ur-carousel-component='dot']");if(d.length!=a.count){d.remove();for(var d=b("<div data-ur-carousel-component='dot'>"),c=document.createDocumentFragment(),e=0;e<a.count;e++){var f=d.clone().attr("data-ur-state",e==a.itemIndex?"active":"inactive");c.appendChild(f[0])}b(a.dots).append(c)}}}function p(d){if(d!==void 0){a.itemIndex=d;if(a.itemIndex<0)a.itemIndex=0;else if(a.itemIndex>o)a.itemIndex=o;var c=a.itemIndex;a.options.infinite&&a.options.center&&
(c=a.itemIndex-a.options.cloneLength);c%=a.count;b(a.counter).html(function(){return(b(this).attr("data-ur-template")||"{{index}} of {{count}}").replace("{{index}}",c+1).replace("{{count}}",a.count)});h.attr("data-ur-state","inactive");h.eq(a.itemIndex).attr("data-ur-state","active");b(a.dots).find("[data-ur-carousel-component='dot']").attr("data-ur-state","inactive").eq(c).attr("data-ur-state","active");a.options.infinite?b([a.button.prev,a.button.next]).attr("data-ur-state","enabled"):(b(a.button.prev).attr("data-ur-state",
a.itemIndex==0?"disabled":"enabled"),b(a.button.next).attr("data-ur-state",a.itemIndex==a.count-Math.max(a.options.fill,1)?"disabled":"enabled"))}}function u(b){a.options.verticalScroll||x(b);a.autoscrollStop();a.flag.touched=!0;a.flag.lock=null;a.flag.click=!0;t=k=l=K(b);y=a.translate}function P(b){if(a.flag.touched){k=l;l=K(b);if(Math.abs(t.y-l.y)+Math.abs(t.x-l.x)>0)a.flag.click=!1;if(C&&a.options.verticalScroll){var c=Math.abs((t.y-l.y)/(t.x-l.x));if(a.flag.lock){if(a.flag.lock=="y")return}else if(c>
1.2){a.flag.lock="y";return}else if(c<=1.2)a.flag.lock="x";else return}x(b);if(l!==null){var b=y+(l.x-t.x),e=-b;a.options.center&&(e+=q/2);h.each(function(b,d){var c=d.offsetLeft;if(c+d.offsetWidth>e)return a.itemIndex=b,n=(e-c)/d.offsetWidth,a.options.center&&(n-=0.5),!1});a.options.infinite&&(a.options.center?a.itemIndex<a.options.cloneLength?(y-=m,b-=m,a.itemIndex+=a.count):a.itemIndex>=a.count+a.options.cloneLength&&(y+=m,b+=m,a.itemIndex-=a.count):n<0?(y-=m,b-=m,a.itemIndex+=a.count,c=h[a.itemIndex],
n=(-b-c.offsetLeft)/c.offsetWidth):a.itemIndex>=a.count&&(c=h[a.count].offsetLeft-h[0].offsetLeft,y+=c,b+=c,a.itemIndex-=a.count));d(b)}}}function Q(b){if(a.flag.touched){if(!a.flag.click||a.flag.lock)x(b);else if(b.target.tagName=="AREA")location.href=b.target.href;a.flag.touched=!1;b=l.x-k.x;a.options.center?b<0&&n>0?s(-1):b>0&&n<0?s(1):s(0):s(b<0?-1:0)}}function s(b){a.autoscrollStop();clearTimeout(H);var c=a.itemIndex-b;a.options.infinite||(c=a.options.fill>0?i(c,[0,a.count-a.options.fill]):i(c,
[0,o]));if(a.options.infinite){var e=a.translate;if(a.options.center)if(c<a.options.cloneLength)d(e-m),c+=a.count,a.itemIndex=c+b;else{if(c>=a.count+a.options.cloneLength)d(e+m),c-=a.count,a.itemIndex=c+b}else if(c<0)d(e-m),c+=a.count,a.itemIndex=c+b;else if(c>a.count)d(e+m),c-=a.count,a.itemIndex=c+b}w=h[c];j.triggerHandler("slidestart",{index:c});setTimeout(function(){D();p(c)},0)}function D(){function b(){if(!a.flag.touched){var c=a.translate,e=z-c;e-=e/a.options.speed>=0?Math.floor(e/a.options.speed):
Math.ceil(e/a.options.speed);Math.abs(e)<0.01&&(e=0);d(c+e);a.flag.snapping=e!=0;a.flag.snapping?H=setTimeout(b,16):(a.options.infinite&&!a.options.center&&a.itemIndex>=a.count&&(d(a.translate+m),a.itemIndex-=a.count),n=0,a.flag.click=!0,a.autoscrollStart(),j.triggerHandler("slideend",{index:a.itemIndex}))}}z=-w.offsetLeft;a.options.center&&(z+=Math.floor((q-w.offsetWidth)/2));b()}function d(c){a.translate=c;c=I+c+"px, 0px"+E;b(a.scroller).css({webkitTransform:c,MozTransform:c,msTransform:c,transform:c})}
function i(a,b){return Math.min(Math.max(b[0],a),b[1])}var a=this;a.urId=c._id;a.container=c.set;a.scroller=c.scroll_container;a.scroller||b.error("carousel missing item components");a.items=c.item||[];a.button={prev:b(c.button).filter("[data-ur-carousel-button-type='prev']"),next:b(c.button).filter("[data-ur-carousel-button-type='next']")};a.counter=c.count;a.dots=c.dots;a.flag={click:!0,snapping:!1,lock:null,touched:!1};a.options={autoscroll:!1,autoscrollDelay:5E3,autoscrollForward:!0,center:!1,
cloneLength:0,fill:0,infinite:!0,speed:1.1,transform3d:L,touch:!0,verticalScroll:!0};a.count=a.items.length;a.itemIndex=0;a.translate=0;var j=b(a.container),h=b(a.items),l=null,k,t={x:0,y:0},n=0,w=h[0],z,o=a.count-1,m,A,H,q=j.outerWidth(),y=null,I="translate3d(",E=", 0)";a.update=function(){var c=h.length;h=b(a.scroller).find("[data-ur-carousel-component='item']");if(c!=h.length){a.items=h.filter(":not([data-ur-clone])").toArray();a.count=a.items.length;o=h.length-1;h.each(function(c,d){if(b(d).attr("data-ur-state")==
"active")return a.itemIndex=c,!1});if(a.itemIndex>=h.length-a.options.cloneLength)a.itemIndex=o-a.options.cloneLength,h.eq(a.itemIndex).attr("data-ur-state","active");b.contains(a.scroller,w)||(w=h[a.itemIndex]);v();p(a.options.center?a.itemIndex+a.options.cloneLength:a.itemIndex)}q=j.outerWidth();var c=0,e=[];if(a.options.fill>0)for(var f=q,g=a.options.fill;g>0;g--){var i=Math.round(f/g);e.push(i);f-=i}for(g=m=0;g<h.length;g++)if(a.options.fill>0?(i=e[g%a.options.fill],h.eq(g).outerWidth(i),c+=i):
c+=h[g].offsetWidth,g<=o-a.options.cloneLength&&g>=(a.options.center?a.options.cloneLength:0))m+=h[g].offsetWidth;b(a.scroller).width(c);c=h[a.itemIndex];e=-(c.offsetLeft+n*c.offsetWidth);z=-w.offsetLeft;a.options.center&&(e+=Math.floor((q-c.offsetWidth)/2),z+=Math.floor((q-w.offsetWidth)/2));d(e)};a.autoscrollStart=function(){a.options.autoscroll&&(A=setTimeout(function(){q!=0?!a.options.infinite&&a.itemIndex==o&&a.options.autoscrollForward?a.jumpToIndex(0):!a.options.infinite&&a.itemIndex==0&&!a.options.autoscrollForward?
a.jumpToIndex(o):s(a.options.autoscrollForward?-1:1):a.autoscrollStart()},a.options.autoscrollDelay))};a.autoscrollStop=function(){clearTimeout(A)};a.jumpToIndex=function(b){s(a.itemIndex-b)};(function(){var c=j.attr("data-ur-android3d")||j.attr("data-ur-transform3d");if(c)a.options.transform3d=c!="disabled";j.attr("data-ur-transform3d",a.options.transform3d?"enabled":"disabled");if(S&&!a.options.transform3d)c=parseFloat(j.attr("data-ur-speed")),a.options.speed=c>1?c:1.3;j.attr("data-ur-speed",a.options.speed);
c=parseInt(j.attr("data-ur-fill"));if(c>0)a.options.fill=c;j.attr("data-ur-fill",a.options.fill);if(c=j.attr("data-ur-clones"))a.options.cloneLength=parseInt(c);j.attr("data-ur-clones",a.options.cloneLength);c=parseInt(j.attr("data-ur-autoscroll-delay"));if(c>=0)a.options.autoscrollDelay=c;j.attr("data-ur-autoscroll-delay",a.options.autoscrollDelay);a.options.autoscrollForward=j.attr("data-ur-autoscroll-dir")!="prev";j.attr("data-ur-autoscroll-dir",a.options.autoscrollForward?"next":"prev");b.each(["autoscroll",
"center","infinite","touch","verticalScroll"],function(b,c){var d="data-ur-"+c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),e=j.attr(d);e=="enabled"?a.options[c]=!0:e=="disabled"&&(a.options[c]=!1);j.attr(d,a.options[c]?"enabled":"disabled")})})();var F=!1;a.options.infinite&&!a.options.fill&&a.options.cloneLength==0&&h.width(function(a,b){b==0&&(F=!0)});if(F){console.warn("carousel with id: "+a.urId+" will be late loaded");var c=h.find("img").addBack("img"),J=c.length;if(J>0)c.on("load.ur.carousel",
function(){--J==0&&f()});else b(window).on("load.ur.carousel",f)}else f()}f=u(f,"carousel");b.each(f,function(e,f){b(f.buttons).each(function(){var c=b(this).attr("data-ur-carousel-button-type");c||b.error("malformed carousel button type for carousel with id: "+e);b(this).attr("data-ur-state",c=="prev"?"disabled":"enabled")});Uranium.carousel[e]=new c(f);b(f.set).data("urInit",!0);b(f.set).attr("data-ur-state","enabled")})}};window.Uranium={};b.each(P,function(b){Uranium[b]={}});b.fn.Uranium=function(){var f=
this;b.each(P,function(){this(f)});return this};b(document).ready(b(document).Uranium)})(jQuery);
