(function(c){function A(b,e,i){var d={},f="[data-ur-set='"+e+"']",M="data-ur-"+e+"-component",k="["+M+"],"+f+":empty";c(b).find(k).addBack(k).each(function(){if(!c(this).data("urCompInit")){var b=[];this!=document&&(b=c(this).attr("data-ur-id")?c(this):c(this).closest(f));if(b[0]&&!b.data("urInit")){c(this).data("urCompInit",e);var k=b.attr("data-ur-id");k||(k=T(),b.attr("data-ur-id",k));d[k]=d[k]||{};d[k]._id=k;if(b.is(f))d[k].set=b[0];if(i)i(d[k],this);else if(b=c(this).attr(M))d[k][b]=d[k][b]||
[],d[k][b].push(this)}}});return d}function x(b,e,i){var d=T();c.each(b,function(d,f){typeof f=="string"&&(b[d]=f=c(f));for(var N=f.length-1;N>=0;N--){var l=c(f[N]);l[0]instanceof Node&&(l.data("urCompInit")?c(f).splice(N,1):c(this).data("urCompInit",e))}!i&&d!="set"&&c(f).attr("data-ur-"+e+"-component",d)});b.set&&b.set.length!==0?c(b.set).attr("data-ur-set",e).attr("data-ur-id",d):c.each(b,function(){c(this).attr("data-ur-id",d)});i&&i(b);var f={};f[d]=c.extend({_id:d},b);return f}function $(c){var e=
c.originalEvent.touches,c=e&&e[0]||c;return{x:c.clientX,y:c.clientY}}function O(c){c.preventDefault();c.stopPropagation()}function p(c,e){return Math.max(e[0],Math.min(c,e[1]))}function oa(c){return typeof c=="string"?c!="disabled"&&c!="false":c}var t=c.fn.jquery.split(".");t[0]==1&&t[1]<4&&(c=c.extend(function(b,e){return new c.fn.init(b||[],e)},c));c.fn.on||c.fn.extend({on:function(c,e,i,d){i==null&&d==null?(d=e,e=null):d==null&&typeof e!="string"&&(d=i,i=e,e=null);return e?this.delegate(e,c,i,
d):this.bind(c,i,d)},off:function(c,e,i){i==null&&(i=e,e=null);return e?this.undelegate(e,c,i):this.unbind(c,i)}});if(!c.fn.addBack)c.fn.addBack=c.fn.andSelf;if(!c.error)c.error=function(c){throw Error(c);};var T=function(){var c=0;return function(){return++c+""}}(),la=/Android [12]/.test(navigator.userAgent),J=!la;J&&(t=c("<a>").css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"}),J=(t.css("WebkitTransform")+
t.css("MozTransform")+t.css("msTransform")+t.css("transform")+"").indexOf("(")!=-1);var K="ontouchstart"in window,aa=(K?"touchstart":"mousedown")+".ur",ba=(K?"touchmove":"mousemove")+".ur",fa=(K?"touchend":"mouseup")+".ur",E={toggler:function(b){function e(b){var b=c(b).clone().attr("data-ur-state","enabled").css({height:"auto",position:"absolute",top:"-3000px",left:"-3000px"}).appendTo(c(b).parent()),d=b.outerHeight(!0);b.remove();return d}b=b.constructor==Object?x(b,"toggler"):A(b,"toggler");c.each(b,
function(b,d){d.button||c.error("no button found for toggler with id: "+b);d.content||c.error("no content found for toggler with id: "+b);var f=c(d.button).attr("data-ur-state")||"disabled";c(d.button).add(d.content).attr("data-ur-state",f);c(d.button).on("click.ur.toggler",function(){var b=c(d.button).attr("data-ur-state")=="enabled",f=b?"disabled":"enabled";if(c(d.set).attr("data-ur-collapsible")&&c(d.set).attr("data-ur-collapsible")=="enabled"){c(d.set).addClass("mw-collapsing");var i=b?"0":e(c(d.content));
b?(b=!b?"0":e(c(d.content)),c(d.content).css({height:b,opacity:0}),setTimeout(function(){c(d.content).css("height",i)},15)):c(d.content).css({height:i,opacity:1});c(d.content).on("webkitTransitionEnd transitionend",function(){c(d.content).css({height:"",opacity:""});c(d.set).removeClass("mw-collapsing");c(d.button).add(d.content).attr("data-ur-state",f)})}else c(d.button).add(d.content).attr("data-ur-state",f)});c(d.drawer).on("webkitTransitionEnd.ur.toggler transitionend.ur.toggler",function(){c(this).attr("data-ur-state",
c(d.button).attr("data-ur-state"))});c(d.set).data("urInit",!0)})},tabs:function(b,e){var e=e||{},i=b.constructor==Object?x(b,"tabs",function(d){c.each(d.tabs,function(d){c.each(this,function(b){c(this).attr({"data-ur-id":d,"data-ur-tabs-component":b})})})}):A(b,"tabs",function(d,b){var e=c(b).attr("data-ur-tab-id");d.tabs=d.tabs||{};d.tabs[e]=d.tabs[e]||{};var k=c(b).attr("data-ur-tabs-component");d.tabs[e][k]=d.tabs[e][k]||[];d.tabs[e][k].push(b)});c.each(i,function(d,b){b.closeable=oa(c(b.set).attr("data-ur-closeable")||
e.closeable);c.each(b.tabs,function(){var b=c(this.button).attr("data-ur-state")||"disabled";c(this.button).add(this.content).attr("data-ur-state",b)});c.each(b.tabs,function(d,e){c(e.button).on("click.ur.tabs",function(){var d=c(this).attr("data-ur-state")=="enabled";c.each(b.tabs,function(){c(this.button).add(this.content).attr("data-ur-state","disabled")});(!d||!b.closeable)&&c(e.button).add(e.content).attr("data-ur-state","enabled")})});c(b.set).data("urInit",!0)})},inputclear:function(b){b=b.constructor==
Object?x(b,"input-clear"):A(b,"input-clear");c.each(b,function(b,i){var d=c("<div class='data-ur-input-clear-ex'></div>").hide();c(i.set).append(d);d.on(K?"touchstart.ur.inputclear":"click.ur.inputclear",function(){f[0].value="";f[0].focus()}).on("touchend.ur.inputclear",function(){f[0].blur()});var f=c(i.set).find("input");f.on("focus.ur.inputclear",function(){f[0].value!=""&&d.show()}).on("keydown.ur.inputclear",function(){d.show()}).on("blur.ur.inputclear",function(){setTimeout(function(){d.hide()},
150)});c(i.set).data("urInit",!0)})},geocode:function(b,e){var e=e||{},i=b.constructor==Object?x(b,"reverse-geocode",function(b){b.elements=b.elements||{};c.each(b,function(e,i){e!="set"&&(b.elements[e]=c(i))})}):A(b,"reverse-geocode",function(b,e){b.elements=b.elements||{};b.elements[c(e).attr("data-ur-reverse-geocode-component")]=e});c.each(i,function(b,f){function i(b,d,e){var f=0,a=null,j=null,g=null;switch(c(b).attr("data-ur-reverse-geocode-component")){case "rg-city":j="locality";break;case "rg-street":j=
"street_number";break;case "rg-zip":j="postal_code";break;case "rg-state":j="administrative_area_level_1";break;case "rg-country":j="country"}for(var g=d[0],k=null,M=g.address_components.length,m=0;m<M;m++)for(var n=g.address_components[m].types.length,l=0;l<n;l++)if(k=g.address_components[m].types[l],j==k){switch(k){case "street_number":f=m;a=m+1;break;case "locality":f=m;break;case "postal_code":f=m;break;case "administrative_area_level_1":f=m;break;case "country":f=m}break}if(e==="input")b.value=
a===null?d[0].address_components[f].long_name:d[0].address_components[f].long_name+" "+d[0].address_components[a].long_name;else if(e==="select"){d=d[0].address_components[f];e=0;for(f=b.length;e<f;e++)if(b[e].value===d.long_name||b[e].value.toUpperCase()===d.short_name)b.selectedIndex=e}}var k=this.set,p=c(k).attr("data-ur-callback")||e.callback,l=c(k).attr("data-ur-error-callback")||e.errorCallback,n,F,w;this.setupCallbacks=function(){w=this;var b=this.elements["rg-button"];if(b)c(b).on("click.ur.inputclear",
function(c){return function(){c.geocodeInit()}}(this));else console.warn("no button for triggering reverse geocoding present"),this.geocodeInit()};this.geoSuccess=function(c){c={lat:c.coords.latitude,lng:c.coords.longitude};this.codeLatLng(c.lat,c.lng)};this.geoError=function(c){console.error("Ur geolocation error -- Error Getting Your Coordinates!");switch(c.code){case c.TIMEOUT:console.error("Ur geolocation error -- Timeout");break;case c.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");
break;case c.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case c.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}typeof l=="function"?l():eval(l)};this.geoDenied=function(){console.error("Ur geolocation error -- User Denied Geolocation")};this.codeLatLng=function(c,b){var d=new google.maps.LatLng(c,b);n.geocode({latLng:d},function(c,a){if(a==google.maps.GeocoderStatus.OK)if(c[1]){F=c;var b=w.elements;for(elm in b)b[elm].localName==="input"?
i(b[elm],F,"input"):b[elm].localName==="select"&&i(b[elm],F,"select");typeof p=="function"?p():eval(p);return c}else console.error("Geocoder failed due to: "+a)})};this.geocodeInit=function(){navigator.geolocation&&(n=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(c){return function(b){c.geoSuccess(b)}}(this),function(c){return function(b){c.geoError(b)}}(this),this.geoDenied))};UrGeocode=function(c){return function(){c.setupCallbacks()}}(this);k=document.createElement("script");
k.type="text/javascript";k.src="https://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";c("head").append(k);c(f.set).data("urInit",!0)})},zoom:function(b,e){function i(b){function d(a){if(w&&a!=w[0]){l.state="enabled-out";var b=w.data("urZoomImg");b.transform(0,0,1);b.transitionEnd()}w=c(a)}function i(b){function l(){F.attr("data-ur-transform3d",n.transform3d?"enabled":"disabled");ha=ha||h.parent().outerWidth();ia=ia||h.parent().outerHeight();P=P||parseInt(h.attr("width"))||parseInt(h.css("width"))||
h[0].width;ca=ca||parseInt(h.attr("height"))||parseInt(h.css("height"))||h[0].height;V=parseInt(h.attr("data-ur-width"))||h[0].naturalWidth;da=parseInt(h.attr("data-ur-height"))||h[0].naturalHeight;h.attr("data-ur-src")||h.attr("data-ur-src",h.attr("src"));if(h.attr("data-ur-width")&&h.attr("data-ur-height")||h.attr("src")==h.attr("data-ur-src"))R=!0;G=V/P;C=(V-ha)/2;D=(da-ia)/2}function M(c){if(n.state=="enabled-slide"){Q("enabled");var b=(Date.now()-W)/300;if(b<1){clearTimeout(X);var o=1-Math.pow(1-
b,1.685),b=p(g+o*ja,[-C,C]),o=p(r+o*ka,[-D,D]);S(b,o,G)}}z=!1;ga=c.pageX;m=c.pageY;y=!0;if(b=c.originalEvent.touches)ga=b[0].pageX,m=b[0].pageY;b=h[0].style;window.WebKitCSSMatrix?(b=new WebKitCSSMatrix(b.webkitTransform),a=b.m41,j=b.m42):(b=b.MozTransform||b.msTransform||b.transform||"translate(0, 0)",b=b.replace(/.*?\(|\)/,"").split(","),a=parseInt(b[0]),j=parseInt(b[1]));O(c)}function w(c){if(y){O(c);var b=c.pageX,d=c.pageY;if(c=c.originalEvent.touches)b=c[0].pageX,d=c[0].pageY;b-=ga;d-=m;if(Math.abs(b)>
5||Math.abs(d)>5)z=!0;g=p(a+b,[-C,C]);r=p(j+d,[-D,D]);S(g,r,G);Y=H;Z=o;H=b;o=d;ma=ea;ea=Date.now()}}function N(a){z?Date.now()<ea+50&&K():E.zoomOut();O(a);y=!1;z=!0}function K(){Q("enabled-slide");var a=H-Y,c=o-Z,a=100*Math.sqrt((a*a+c*c)/(H*H+o*o))/(ea-ma);ja=a*H;ka=a*o;a=p(g+ja,[-C,C]);c=p(r+ka,[-D,D]);S(a,c,G);W=Date.now();X=setTimeout(function(){Q("enabled")},300)}function Q(a){n.state=a;h.attr("data-ur-state",a);n.img.length==1&&F.attr("data-ur-state",a)}function J(a,c){B.attr("data-ur-state",
"enabled");Q("enabled-in");S(a||0,c||0,G)}function S(a,c,b){var o="";a!=null&&(o=L+a+"px, "+c+"px"+v);b!=null&&(o+=q+b+", "+b+A);return h.css({webkitTransform:o,MozTransform:o,msTransform:o,transform:o})}var E=this,h=c(b),ha,ia,P,ca,V,da,C,D,G,R;this.transitionEnd=function(){n.state=="enabled-in"?(h.css({webkitTransitionDelay:"",MozTransitionDelay:"",OTransitionDelay:"",transitionDelay:""}),h.attr("src",h.attr("data-ur-src")),f.indexOf(h.attr("data-ur-src"))==-1&&setTimeout(function(){f.indexOf(h.attr("data-ur-src"))==
-1&&t.attr("data-ur-state","enabled")},16),Q("enabled"),h.on(aa+".zoom",M).on(ba+".zoom",w).on(fa+".zoom",N)):n.state=="enabled-out"&&(Q("disabled"),h.off(aa+".zoom",M).off(ba+".zoom",w).off(fa+".zoom",N))};this.transform=S;this.zoomIn=function(a){if(n.state=="disabled"){P||(l(),h.css("width",P+"px"),h.css("height",ca+"px"));var c=a.pageX,b=a.pageY;if(a.touches)c=a.touches[0].pageX,b=a.touches[0].pageY;U=a.offsetX;u=a.offsetY;if(U==void 0||u==void 0)a=h[0].getBoundingClientRect(),U=c-a.left,u=b-a.top;
R?(c=p(V/2-G*U,[-C,C]),b=p(da/2-G*u,[-D,D]),J(c,b)):(n.state="enabled-in",h.attr("src",h.attr("data-ur-src")),setTimeout(function(){R||t.attr("data-ur-state","enabled")},0))}};this.zoomOut=function(){n.state=="enabled"&&(B.attr("data-ur-state","disabled"),Q("enabled-out"),S(0,0,1))};if(F.attr("data-ur-touch")!="disabled"||e.touch)h.on(aa+".zoom",function(a){s=I=!0;x=$(a)}),h.on(ba+".zoom",function(a){a=$(a);I&&Math.abs(x.x-a.x)+Math.abs(x.x-a.x)>0&&(s=!1)}),h.on("click.ur.zoom",function(a){s&&(d(this),
this==h[0]&&E.zoomIn(a))});h.on("load.ur.zoom",function(){h.attr("src")==h.attr("data-ur-src")&&f.push(h.attr("src"));t.attr("data-ur-state","disabled");if(!R&&n.state=="enabled-in"){R=!0;l();var a=p(V/2-G*U,[-C,C]),c=p(da/2-G*u,[-D,D]);h.css({webkitTransitionDelay:"0.3s",MozTransitionDelay:"0.3s",OTransitionDelay:"0.3s",transitionDelay:"0.3s"});J(a,c)}});this.zoom=function(){n.state=="disabled"?(P||(l(),h.css("width",P+"px"),h.css("height",ca+"px")),R?J(0,0):(n.state="enabled-in",h.attr("src",h.attr("data-ur-src")),
setTimeout(function(){f.indexOf(h.attr("data-ur-src"))==-1&&t.attr("data-ur-state","enabled")},0))):E.zoomOut()};h.on("webkitTransitionEnd.ur.zoom transitionend.ur.zoom",this.transitionEnd)}var l=this,n=this;this.container=b.set;this.img=b.img;this.state="disabled";this.button=b.button;this.idler=b.loading;var F=c(this.container),w,t=c(this.idler),B=c(this.button),U,u,a=0,j=0,g=0,r=0,ga=0,m=0,y=!1,z=!0,L="translate(",v=")",q=" scale(",A=")",x,s,I,W,X,Y=0,Z=0,H=0,o=0,ma=0,ea=0,ja,ka;this.transform3d=
J;if(b=F.attr("data-ur-transform3d"))this.transform3d=b!="disabled";else if("transform3d"in e)this.transform3d=e.transform3d;l.transform3d&&(L="translate3d(",v=",0)",q=" scale3d(",A=",1)");c(l.img).each(function(){f.push(c(this).attr("src"));c(this).data("urZoomImg",new i(this))});c(l.button).on(K?"touchstart.ur.zoom":"click.ur.zoom",function(){l.img.length>1?d(c(l.img).filter(F.find("[data-ur-state='active'] *"))[0]):d(l.img[0]);w.data("urZoomImg").zoom()})}var e=c.extend({touch:!0},e),d=b.constructor==
Object?x(b,"zoom",function(b){b.img=[];c.each(b.imgs,function(){c(this.img).attr({"data-ur-zoom-component":"img","data-ur-width":this.width,"data-ur-height":this.height,"data-ur-src":this.src});b.img.push(c(this.img))});c(b.loading).attr({"data-ur-zoom-component":"loading","data-ur-state":"disabled"})}):A(b,"zoom"),f=[];c.each(d,function(b,d){Uranium.zoom[b]=new i(this);c(d.set).data("urInit",!0)})},carousel:function(b,e){function i(b,d){function e(){a.options.transform3d||(W="translate(",X=")");
g.each(function(b,d){if(c(d).attr("data-ur-state")=="active")return a.itemIndex=b,!1});i();n(a.options.center?a.itemIndex+a.options.cloneLength:a.itemIndex);l();a.update();c(a.scroller).on("dragstart.ur.carousel",function(){return!1});a.options.touch&&(c(a.scroller).on(aa+".carousel",t).on(ba+".carousel",w).on(fa+".carousel",x),g.each(function(b,d){d.onclick&&c(d).data("urClick",d.onclick);d.onclick=function(b){if(a.flag.click||!b.clientX&&!b.clientY){var d=c(this).data("urClick");d&&d.call(this,
b)}else O(b),b.stopImmediatePropagation()}}));a.button.prev.on("click.ur.carousel",function(){B(1)});a.button.next.on("click.ur.carousel",function(){B(-1)});if("onorientationchange"in window)c(window).on("orientationchange.ur.carousel",a.update);else c(window).on("resize.ur.carousel",function(){s!=j.outerWidth()&&(a.update(),setTimeout(a.update,100))});g.find("img").addBack("img").on("load.ur.carousel",a.update);a.autoscrollStart();j.triggerHandler("load.ur.carousel")}function i(){if(a.options.infinite){if(a.options.cloneLength==
0)if(a.options.fill)a.options.cloneLength=a.options.center?Math.min(1,a.options.fill-1):a.options.fill;else if(a.options.center){for(var b=[0,0],d=s/2+g[v].offsetWidth/2,e=v;d>0;e=(e-1+a.count)%a.count)d-=g[e].offsetWidth,b[0]++;d=s/2+g[0].offsetWidth/2;for(e=0;d>0;e=(e+1)%a.count)d-=g[e].offsetWidth,b[1]++;a.options.cloneLength=Math.max(b[0],b[1])}else{d=s;for(e=0;d>0;)d-=g[e].offsetWidth,a.options.cloneLength++,e=(e+1)%g.length}j.attr("data-ur-clones",a.options.cloneLength);b=document.createDocumentFragment();
for(e=0;e<a.options.cloneLength;e++){var f=e%a.count,f=g.eq(f).clone(!0).attr("data-ur-clone",f).attr("data-ur-state","inactive");b.appendChild(f[0])}g.parent().append(b);if(a.options.center){b=document.createDocumentFragment();for(e=d=a.count-a.options.cloneLength%a.count;e<d+a.options.cloneLength;e++)f=e%a.count,f=g.eq(f).clone(!0).attr("data-ur-clone",f).attr("data-ur-state","inactive"),b.appendChild(f[0]);g.parent().prepend(b)}g=c(a.scroller).find("[data-ur-carousel-component='item']");v=g.length-
1}else a.options.cloneLength=0,j.attr("data-ur-clones",0)}function l(){if(a.dots){var b=c(a.dots).find("[data-ur-carousel-component='dot']");if(b.length!=a.count){b.remove();for(var b=c("<div data-ur-carousel-component='dot'>"),d=document.createDocumentFragment(),e=0;e<a.count;e++){var f=b.clone().attr("data-ur-state",e==a.itemIndex?"active":"inactive");d.appendChild(f[0])}c(a.dots).append(d)}}}function n(b){if(b!==void 0){a.itemIndex=b;if(a.itemIndex<0)a.itemIndex=0;else if(a.itemIndex>v)a.itemIndex=
v;var d=a.itemIndex;a.options.infinite&&a.options.center&&(d=a.itemIndex-a.options.cloneLength);d%=a.count;c(a.counter).html(function(){return(c(this).attr("data-ur-template")||"{{index}} of {{count}}").replace("{{index}}",d+1).replace("{{count}}",a.count)});g.attr("data-ur-state","inactive");g.eq(a.itemIndex%a.count).attr("data-ur-state","active");c(a.dots).find("[data-ur-carousel-component='dot']").attr("data-ur-state","inactive").eq(d).attr("data-ur-state","active");a.options.infinite?c([a.button.prev,
a.button.next]).attr("data-ur-state","enabled"):(c(a.button.prev).attr("data-ur-state",a.itemIndex==0?"disabled":"enabled"),c(a.button.next).attr("data-ur-state",a.itemIndex==a.count-Math.max(a.options.fill,1)?"disabled":"enabled"))}}function t(c){a.options.verticalScroll||O(c);a.autoscrollStop();a.flag.touched=!0;a.flag.lock=null;a.flag.click=!0;m=E=r=$(c);I=a.translate}function w(c){if(a.flag.touched){E=r;r=$(c);if(Math.abs(m.y-r.y)+Math.abs(m.x-r.x)>0)a.flag.click=!1;if(K&&a.options.verticalScroll){var b=
Math.abs((m.y-r.y)/(m.x-r.x));if(a.flag.lock){if(a.flag.lock=="y")return}else if(b>1.2){a.flag.lock="y";return}else if(b<=1.2)a.flag.lock="x";else return}O(c);if(r!==null){var c=I+(r.x-m.x),d=-c;a.options.center&&(d+=s/2);g.each(function(c,b){var e=b.offsetLeft;if(e+b.offsetWidth>d)return a.itemIndex=c,y=(d-e)/b.offsetWidth,a.options.center&&(y-=0.5),!1});a.options.infinite&&(a.options.center?a.itemIndex<a.options.cloneLength?(I-=q,c-=q,a.itemIndex+=a.count):a.itemIndex>=a.count+a.options.cloneLength&&
(I+=q,c+=q,a.itemIndex-=a.count):y<0?(I-=q,c-=q,a.itemIndex+=a.count,b=g[a.itemIndex],y=(-c-b.offsetLeft)/b.offsetWidth):a.itemIndex>=a.count&&(b=g[a.count].offsetLeft-g[0].offsetLeft,I+=b,c+=b,a.itemIndex-=a.count));u(c)}}}function x(c){if(a.flag.touched){if(!a.flag.click||a.flag.lock)O(c);else if(c.target.tagName=="AREA")location.href=c.target.href;a.flag.touched=!1;c=r.x-E.x;a.options.center?c<0&&y>0?B(-1):c>0&&y<0?B(1):B(0):B(c<0?-1:0)}}function B(c){a.autoscrollStop();clearTimeout(na);var b=
a.itemIndex-c;a.options.infinite||(b=a.options.fill>0?p(b,[0,a.count-a.options.fill]):p(b,[0,v]));if(a.options.infinite){var d=a.translate;if(a.options.center)if(b<a.options.cloneLength)u(d-q),b+=a.count,a.itemIndex=b+c;else{if(b>=a.count+a.options.cloneLength)u(d+q),b-=a.count,a.itemIndex=b+c}else if(b<0)u(d-q),b+=a.count,a.itemIndex=b+c;else if(b>a.count)u(d+q),b-=a.count,a.itemIndex=b+c}z=g[b];j.triggerHandler("slidestart",{index:b});setTimeout(function(){A();n(b)},0)}function A(){function c(){if(!a.flag.touched){var b=
a.translate,d=L-b;d-=d/a.options.speed>=0?Math.floor(d/a.options.speed):Math.ceil(d/a.options.speed);Math.abs(d)<0.01&&(d=0);u(b+d);a.flag.snapping=d!=0;a.flag.snapping?na=setTimeout(c,16):(a.options.infinite&&!a.options.center&&a.itemIndex>=a.count&&(u(a.translate+q),a.itemIndex-=a.count),y=0,a.flag.click=!0,a.autoscrollStart(),j.triggerHandler("slideend",{index:a.itemIndex}))}}L=-z.offsetLeft;a.options.center&&(L+=Math.floor((s-z.offsetWidth)/2));c()}function u(b){a.translate=b;b=W+b+"px, 0px"+
X;c(a.scroller).css({webkitTransform:b,MozTransform:b,msTransform:b,transform:b})}var a=this;a.urId=b._id;a.container=b.set;a.scroller=b.scroll_container;a.scroller||c.error("carousel missing item components");a.items=b.item||[];a.button={prev:c(b.button).filter("[data-ur-carousel-button-type='prev']"),next:c(b.button).filter("[data-ur-carousel-button-type='next']")};a.counter=b.count;a.dots=b.dots;a.flag={click:!0,snapping:!1,lock:null,touched:!1};a.options={autoscroll:!1,autoscrollDelay:5E3,autoscrollForward:!0,
center:!1,cloneLength:0,fill:0,infinite:!0,speed:1.1,transform3d:J,touch:!0,verticalScroll:!0};c.extend(a.options,d);a.count=a.items.length;a.itemIndex=0;a.translate=0;var j=c(a.container),g=c(a.items),r=null,E,m={x:0,y:0},y=0,z=g[0],L,v=a.count-1,q,T,na,s=j.outerWidth(),I=null,W="translate3d(",X=", 0)";a.update=function(){var b=g.length;g=c(a.scroller).find("[data-ur-carousel-component='item']");if(b!=g.length){a.items=g.filter(":not([data-ur-clone])").toArray();a.count=a.items.length;v=g.length-
1;g.each(function(b,d){if(c(d).attr("data-ur-state")=="active")return a.itemIndex=b,!1});if(a.itemIndex>=g.length-a.options.cloneLength)a.itemIndex=v-a.options.cloneLength,g.eq(a.itemIndex).attr("data-ur-state","active");c.contains(a.scroller,z)||(z=g[a.itemIndex]);l();n(a.options.center?a.itemIndex+a.options.cloneLength:a.itemIndex)}s=j.outerWidth();var b=0,d=[];if(a.options.fill>0)for(var e=s,f=a.options.fill;f>0;f--){var i=Math.round(e/f);d.push(i);e-=i}for(f=q=0;f<g.length;f++)if(a.options.fill>
0?(i=d[f%a.options.fill],e=g.eq(f),e.css("width",i+parseInt(e.css("width"))-e.outerWidth()),b+=i):b+=g[f].offsetWidth,f<=v-a.options.cloneLength&&f>=(a.options.center?a.options.cloneLength:0))q+=g[f].offsetWidth;c(a.scroller).width(b);b=g[a.itemIndex];d=-(b.offsetLeft+y*b.offsetWidth);L=-z.offsetLeft;a.options.center&&(d+=Math.floor((s-b.offsetWidth)/2),L+=Math.floor((s-z.offsetWidth)/2));u(d)};a.autoscrollStart=function(){a.options.autoscroll&&(T=setTimeout(function(){s!=0?!a.options.infinite&&a.itemIndex==
v&&a.options.autoscrollForward?a.jumpToIndex(0):!a.options.infinite&&a.itemIndex==0&&!a.options.autoscrollForward?a.jumpToIndex(v):B(a.options.autoscrollForward?-1:1):a.autoscrollStart()},a.options.autoscrollDelay))};a.autoscrollStop=function(){clearTimeout(T)};a.jumpToIndex=function(b){B(a.itemIndex-b)};(function(){var b=j.attr("data-ur-android3d")||j.attr("data-ur-transform3d");if(b)a.options.transform3d=b!="disabled";j.attr("data-ur-transform3d",a.options.transform3d?"enabled":"disabled");if(la&&
!a.options.transform3d)b=parseFloat(j.attr("data-ur-speed")),a.options.speed=b>1?b:1.3;j.attr("data-ur-speed",a.options.speed);b=parseInt(j.attr("data-ur-fill"));if(b>0)a.options.fill=b;j.attr("data-ur-fill",a.options.fill);if(b=j.attr("data-ur-clones"))a.options.cloneLength=parseInt(b);j.attr("data-ur-clones",a.options.cloneLength);b=parseInt(j.attr("data-ur-autoscroll-delay"));if(b>=0)a.options.autoscrollDelay=b;j.attr("data-ur-autoscroll-delay",a.options.autoscrollDelay);if(b=j.attr("data-ur-autoscroll-dir"))a.options.autoscrollForward=
b!="prev";j.attr("data-ur-autoscroll-dir",a.options.autoscrollForward?"next":"prev");c.each(["autoscroll","center","infinite","touch","verticalScroll"],function(b,c){var d="data-ur-"+c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),e=j.attr(d);e=="enabled"?a.options[c]=!0:e=="disabled"&&(a.options[c]=!1);j.attr(d,a.options[c]?"enabled":"disabled")})})();var Y=!1;a.options.infinite&&!a.options.fill&&a.options.cloneLength==0&&g.width(function(a,b){b==0&&(Y=!0)});if(Y){console.warn("carousel with id: "+
a.urId+" will be late loaded");var Z=g.find("img").addBack("img").filter(function(){return this.naturalWidth==0||this.width==0}),H=Z.length;if(H>0)Z.on("load.ur.carousel",function(){--H==0&&e()});else c(window).on("load.ur.carousel",e)}else e()}var d=b.constructor==Object?x(b,"carousel"):A(b,"carousel");c.each(d,function(b,d){c(d.buttons).each(function(){var d=c(this).attr("data-ur-carousel-button-type");d||c.error("malformed carousel button type for carousel with id: "+b);c(this).attr("data-ur-state",
d=="prev"?"disabled":"enabled")});Uranium.carousel[b]=new i(d,e);c(d.set).data("urInit",!0);c(d.set).attr("data-ur-state","enabled")})}};window.Uranium={lib:E};c.each(E,function(b){Uranium[b]={}});c.fn.Uranium=function(){var b=this;c.each(E,function(){this(b)});return this};c(document).ready(c(document).Uranium)})(jQuery);
