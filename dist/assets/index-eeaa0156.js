(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ot(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tt={exports:{}};(function(t,e){(function(i,n){t.exports=n()})(xt,function(){var i=1e3,n=6e4,r=36e5,s="millisecond",u="second",o="minute",a="hour",S="day",d="week",m="month",T="quarter",k="year",D="date",$="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(g){var f=["th","st","nd","rd"],c=g%100;return"["+g+(f[(c-20)%10]||f[c]||f[0])+"]"}},b=function(g,f,c){var p=String(g);return!p||p.length>=f?g:""+Array(f+1-p.length).join(c)+g},_={s:b,z:function(g){var f=-g.utcOffset(),c=Math.abs(f),p=Math.floor(c/60),l=c%60;return(f<=0?"+":"-")+b(p,2,"0")+":"+b(l,2,"0")},m:function g(f,c){if(f.date()<c.date())return-g(c,f);var p=12*(c.year()-f.year())+(c.month()-f.month()),l=f.clone().add(p,m),O=c-l<0,I=f.clone().add(p+(O?-1:1),m);return+(-(p+(c-l)/(O?l-I:I-l))||0)},a:function(g){return g<0?Math.ceil(g)||0:Math.floor(g)},p:function(g){return{M:m,y:k,w:d,d:S,D,h:a,m:o,s:u,ms:s,Q:T}[g]||String(g||"").toLowerCase().replace(/s$/,"")},u:function(g){return g===void 0}},V="en",w={};w[V]=P;var y=function(g){return g instanceof C},h=function g(f,c,p){var l;if(!f)return V;if(typeof f=="string"){var O=f.toLowerCase();w[O]&&(l=O),c&&(w[O]=c,l=O);var I=f.split("-");if(!l&&I.length>1)return g(I[0])}else{var A=f.name;w[A]=f,l=A}return!p&&l&&(V=l),l||!p&&V},x=function(g,f){if(y(g))return g.clone();var c=typeof f=="object"?f:{};return c.date=g,c.args=arguments,new C(c)},v=_;v.l=h,v.i=y,v.w=function(g,f){return x(g,{locale:f.$L,utc:f.$u,x:f.$x,$offset:f.$offset})};var C=function(){function g(c){this.$L=h(c.locale,null,!0),this.parse(c)}var f=g.prototype;return f.parse=function(c){this.$d=function(p){var l=p.date,O=p.utc;if(l===null)return new Date(NaN);if(v.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var I=l.match(E);if(I){var A=I[2]-1||0,F=(I[7]||"0").substring(0,3);return O?new Date(Date.UTC(I[1],A,I[3]||1,I[4]||0,I[5]||0,I[6]||0,F)):new Date(I[1],A,I[3]||1,I[4]||0,I[5]||0,I[6]||0,F)}}return new Date(l)}(c),this.$x=c.x||{},this.init()},f.init=function(){var c=this.$d;this.$y=c.getFullYear(),this.$M=c.getMonth(),this.$D=c.getDate(),this.$W=c.getDay(),this.$H=c.getHours(),this.$m=c.getMinutes(),this.$s=c.getSeconds(),this.$ms=c.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return this.$d.toString()!==$},f.isSame=function(c,p){var l=x(c);return this.startOf(p)<=l&&l<=this.endOf(p)},f.isAfter=function(c,p){return x(c)<this.startOf(p)},f.isBefore=function(c,p){return this.endOf(p)<x(c)},f.$g=function(c,p,l){return v.u(c)?this[p]:this.set(l,c)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(c,p){var l=this,O=!!v.u(p)||p,I=v.p(c),A=function(K,z){var Q=v.w(l.$u?Date.UTC(l.$y,z,K):new Date(l.$y,z,K),l);return O?Q:Q.endOf(S)},F=function(K,z){return v.w(l.toDate()[K].apply(l.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(z)),l)},Y=this.$W,H=this.$M,W=this.$D,q="set"+(this.$u?"UTC":"");switch(I){case k:return O?A(1,0):A(31,11);case m:return O?A(1,H):A(0,H+1);case d:var Z=this.$locale().weekStart||0,G=(Y<Z?Y+7:Y)-Z;return A(O?W-G:W+(6-G),H);case S:case D:return F(q+"Hours",0);case a:return F(q+"Minutes",1);case o:return F(q+"Seconds",2);case u:return F(q+"Milliseconds",3);default:return this.clone()}},f.endOf=function(c){return this.startOf(c,!1)},f.$set=function(c,p){var l,O=v.p(c),I="set"+(this.$u?"UTC":""),A=(l={},l[S]=I+"Date",l[D]=I+"Date",l[m]=I+"Month",l[k]=I+"FullYear",l[a]=I+"Hours",l[o]=I+"Minutes",l[u]=I+"Seconds",l[s]=I+"Milliseconds",l)[O],F=O===S?this.$D+(p-this.$W):p;if(O===m||O===k){var Y=this.clone().set(D,1);Y.$d[A](F),Y.init(),this.$d=Y.set(D,Math.min(this.$D,Y.daysInMonth())).$d}else A&&this.$d[A](F);return this.init(),this},f.set=function(c,p){return this.clone().$set(c,p)},f.get=function(c){return this[v.p(c)]()},f.add=function(c,p){var l,O=this;c=Number(c);var I=v.p(p),A=function(H){var W=x(O);return v.w(W.date(W.date()+Math.round(H*c)),O)};if(I===m)return this.set(m,this.$M+c);if(I===k)return this.set(k,this.$y+c);if(I===S)return A(1);if(I===d)return A(7);var F=(l={},l[o]=n,l[a]=r,l[u]=i,l)[I]||1,Y=this.$d.getTime()+c*F;return v.w(Y,this)},f.subtract=function(c,p){return this.add(-1*c,p)},f.format=function(c){var p=this,l=this.$locale();if(!this.isValid())return l.invalidDate||$;var O=c||"YYYY-MM-DDTHH:mm:ssZ",I=v.z(this),A=this.$H,F=this.$m,Y=this.$M,H=l.weekdays,W=l.months,q=l.meridiem,Z=function(z,Q,X,rt){return z&&(z[Q]||z(p,O))||X[Q].slice(0,rt)},G=function(z){return v.s(A%12||12,z,"0")},K=q||function(z,Q,X){var rt=z<12?"AM":"PM";return X?rt.toLowerCase():rt};return O.replace(L,function(z,Q){return Q||function(X){switch(X){case"YY":return String(p.$y).slice(-2);case"YYYY":return v.s(p.$y,4,"0");case"M":return Y+1;case"MM":return v.s(Y+1,2,"0");case"MMM":return Z(l.monthsShort,Y,W,3);case"MMMM":return Z(W,Y);case"D":return p.$D;case"DD":return v.s(p.$D,2,"0");case"d":return String(p.$W);case"dd":return Z(l.weekdaysMin,p.$W,H,2);case"ddd":return Z(l.weekdaysShort,p.$W,H,3);case"dddd":return H[p.$W];case"H":return String(A);case"HH":return v.s(A,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return K(A,F,!0);case"A":return K(A,F,!1);case"m":return String(F);case"mm":return v.s(F,2,"0");case"s":return String(p.$s);case"ss":return v.s(p.$s,2,"0");case"SSS":return v.s(p.$ms,3,"0");case"Z":return I}return null}(z)||I.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(c,p,l){var O,I=this,A=v.p(p),F=x(c),Y=(F.utcOffset()-this.utcOffset())*n,H=this-F,W=function(){return v.m(I,F)};switch(A){case k:O=W()/12;break;case m:O=W();break;case T:O=W()/3;break;case d:O=(H-Y)/6048e5;break;case S:O=(H-Y)/864e5;break;case a:O=H/r;break;case o:O=H/n;break;case u:O=H/i;break;default:O=H}return l?O:v.a(O)},f.daysInMonth=function(){return this.endOf(m).$D},f.$locale=function(){return w[this.$L]},f.locale=function(c,p){if(!c)return this.$L;var l=this.clone(),O=h(c,p,!0);return O&&(l.$L=O),l},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},g}(),B=C.prototype;return x.prototype=B,[["$ms",s],["$s",u],["$m",o],["$H",a],["$W",S],["$M",m],["$y",k],["$D",D]].forEach(function(g){B[g[1]]=function(f){return this.$g(f,g[0],g[1])}}),x.extend=function(g,f){return g.$i||(g(f,C,x),g.$i=!0),x},x.locale=h,x.isDayjs=y,x.unix=function(g){return x(1e3*g)},x.en=w[V],x.Ls=w,x.p={},x})})(Tt);var Ut=Tt.exports;const tt=Ot(Ut);var It={exports:{}};(function(t,e){(function(i,n){t.exports=n()})(xt,function(){var i,n,r=1e3,s=6e4,u=36e5,o=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S=31536e6,d=2592e6,m=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,T={years:S,months:d,days:o,hours:u,minutes:s,seconds:r,milliseconds:1,weeks:6048e5},k=function(w){return w instanceof _},D=function(w,y,h){return new _(w,h,y.$l)},$=function(w){return n.p(w)+"s"},E=function(w){return w<0},L=function(w){return E(w)?Math.ceil(w):Math.floor(w)},P=function(w){return Math.abs(w)},b=function(w,y){return w?E(w)?{negative:!0,format:""+P(w)+y}:{negative:!1,format:""+w+y}:{negative:!1,format:""}},_=function(){function w(h,x,v){var C=this;if(this.$d={},this.$l=v,h===void 0&&(this.$ms=0,this.parseFromMilliseconds()),x)return D(h*T[$(x)],this);if(typeof h=="number")return this.$ms=h,this.parseFromMilliseconds(),this;if(typeof h=="object")return Object.keys(h).forEach(function(f){C.$d[$(f)]=h[f]}),this.calMilliseconds(),this;if(typeof h=="string"){var B=h.match(m);if(B){var g=B.slice(2).map(function(f){return f!=null?Number(f):0});return this.$d.years=g[0],this.$d.months=g[1],this.$d.weeks=g[2],this.$d.days=g[3],this.$d.hours=g[4],this.$d.minutes=g[5],this.$d.seconds=g[6],this.calMilliseconds(),this}}return this}var y=w.prototype;return y.calMilliseconds=function(){var h=this;this.$ms=Object.keys(this.$d).reduce(function(x,v){return x+(h.$d[v]||0)*T[v]},0)},y.parseFromMilliseconds=function(){var h=this.$ms;this.$d.years=L(h/S),h%=S,this.$d.months=L(h/d),h%=d,this.$d.days=L(h/o),h%=o,this.$d.hours=L(h/u),h%=u,this.$d.minutes=L(h/s),h%=s,this.$d.seconds=L(h/r),h%=r,this.$d.milliseconds=h},y.toISOString=function(){var h=b(this.$d.years,"Y"),x=b(this.$d.months,"M"),v=+this.$d.days||0;this.$d.weeks&&(v+=7*this.$d.weeks);var C=b(v,"D"),B=b(this.$d.hours,"H"),g=b(this.$d.minutes,"M"),f=this.$d.seconds||0;this.$d.milliseconds&&(f+=this.$d.milliseconds/1e3);var c=b(f,"S"),p=h.negative||x.negative||C.negative||B.negative||g.negative||c.negative,l=B.format||g.format||c.format?"T":"",O=(p?"-":"")+"P"+h.format+x.format+C.format+l+B.format+g.format+c.format;return O==="P"||O==="-P"?"P0D":O},y.toJSON=function(){return this.toISOString()},y.format=function(h){var x=h||"YYYY-MM-DDTHH:mm:ss",v={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return x.replace(a,function(C,B){return B||String(v[C])})},y.as=function(h){return this.$ms/T[$(h)]},y.get=function(h){var x=this.$ms,v=$(h);return v==="milliseconds"?x%=1e3:x=v==="weeks"?L(x/T[v]):this.$d[v],x===0?0:x},y.add=function(h,x,v){var C;return C=x?h*T[$(x)]:k(h)?h.$ms:D(h,this).$ms,D(this.$ms+C*(v?-1:1),this)},y.subtract=function(h,x){return this.add(h,x,!0)},y.locale=function(h){var x=this.clone();return x.$l=h,x},y.clone=function(){return D(this.$ms,this)},y.humanize=function(h){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!h)},y.valueOf=function(){return this.asMilliseconds()},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},w}(),V=function(w,y,h){return w.add(y.years()*h,"y").add(y.months()*h,"M").add(y.days()*h,"d").add(y.hours()*h,"h").add(y.minutes()*h,"m").add(y.seconds()*h,"s").add(y.milliseconds()*h,"ms")};return function(w,y,h){i=h,n=h().$utils(),h.duration=function(C,B){var g=h.locale();return D(C,{$l:g},B)},h.isDuration=k;var x=y.prototype.add,v=y.prototype.subtract;y.prototype.add=function(C,B){return k(C)?V(this,C,1):x.bind(this)(C,B)},y.prototype.subtract=function(C,B){return k(C)?V(this,C,-1):v.bind(this)(C,B)}}})})(It);var Rt=It.exports;const Zt=Ot(Rt);var Pt={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ft={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Jt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],nt={CSS:{},springs:{}};function U(t,e,i){return Math.min(Math.max(t,e),i)}function et(t,e){return t.indexOf(e)>-1}function ut(t,e){return t.apply(null,e)}var M={arr:function(t){return Array.isArray(t)},obj:function(t){return et(Object.prototype.toString.call(t),"Object")},pth:function(t){return M.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||M.svg(t)},str:function(t){return typeof t=="string"},fnc:function(t){return typeof t=="function"},und:function(t){return typeof t>"u"},nil:function(t){return M.und(t)||t===null},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return M.hex(t)||M.rgb(t)||M.hsl(t)},key:function(t){return!Pt.hasOwnProperty(t)&&!ft.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function kt(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(i){return parseFloat(i)}):[]}function Lt(t,e){var i=kt(t),n=U(M.und(i[0])?1:i[0],.1,100),r=U(M.und(i[1])?100:i[1],.1,100),s=U(M.und(i[2])?10:i[2],.1,100),u=U(M.und(i[3])?0:i[3],.1,100),o=Math.sqrt(r/n),a=s/(2*Math.sqrt(r*n)),S=a<1?o*Math.sqrt(1-a*a):0,d=1,m=a<1?(a*o+-u)/S:-u+o;function T(D){var $=e?e*D/1e3:D;return a<1?$=Math.exp(-$*a*o)*(d*Math.cos(S*$)+m*Math.sin(S*$)):$=(d+m*$)*Math.exp(-$*o),D===0||D===1?D:1-$}function k(){var D=nt.springs[t];if(D)return D;for(var $=1/6,E=0,L=0;;)if(E+=$,T(E)===1){if(L++,L>=16)break}else L=0;var P=E*$*1e3;return nt.springs[t]=P,P}return e?T:k}function Qt(t){return t===void 0&&(t=10),function(e){return Math.ceil(U(e,1e-6,1)*t)*(1/t)}}var Kt=function(){var t=11,e=1/(t-1);function i(d,m){return 1-3*m+3*d}function n(d,m){return 3*m-6*d}function r(d){return 3*d}function s(d,m,T){return((i(m,T)*d+n(m,T))*d+r(m))*d}function u(d,m,T){return 3*i(m,T)*d*d+2*n(m,T)*d+r(m)}function o(d,m,T,k,D){var $,E,L=0;do E=m+(T-m)/2,$=s(E,k,D)-d,$>0?T=E:m=E;while(Math.abs($)>1e-7&&++L<10);return E}function a(d,m,T,k){for(var D=0;D<4;++D){var $=u(m,T,k);if($===0)return m;var E=s(m,T,k)-d;m-=E/$}return m}function S(d,m,T,k){if(!(0<=d&&d<=1&&0<=T&&T<=1))return;var D=new Float32Array(t);if(d!==m||T!==k)for(var $=0;$<t;++$)D[$]=s($*e,d,T);function E(L){for(var P=0,b=1,_=t-1;b!==_&&D[b]<=L;++b)P+=e;--b;var V=(L-D[b])/(D[b+1]-D[b]),w=P+V*e,y=u(w,d,T);return y>=.001?a(L,w,d,T):y===0?w:o(L,P,P+e,d,T)}return function(L){return d===m&&T===k||L===0||L===1?L:s(E(L),m,k)}}return S}(),Ct=function(){var t={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var r,s=4;n<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-n,2)}},Elastic:function(n,r){n===void 0&&(n=1),r===void 0&&(r=.5);var s=U(n,1,10),u=U(r,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-u/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/u)}}},i=["Quad","Cubic","Quart","Quint","Expo"];return i.forEach(function(n,r){e[n]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(e).forEach(function(n){var r=e[n];t["easeIn"+n]=r,t["easeOut"+n]=function(s,u){return function(o){return 1-r(s,u)(1-o)}},t["easeInOut"+n]=function(s,u){return function(o){return o<.5?r(s,u)(o*2)/2:1-r(s,u)(o*-2+2)/2}},t["easeOutIn"+n]=function(s,u){return function(o){return o<.5?(1-r(s,u)(1-o*2))/2:(r(s,u)(o*2-1)+1)/2}}}),t}();function lt(t,e){if(M.fnc(t))return t;var i=t.split("(")[0],n=Ct[i],r=kt(t);switch(i){case"spring":return Lt(t,e);case"cubicBezier":return ut(Kt,r);case"steps":return ut(Qt,r);default:return ut(n,r)}}function Et(t){try{var e=document.querySelectorAll(t);return e}catch{return}}function it(t,e){for(var i=t.length,n=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<i;s++)if(s in t){var u=t[s];e.call(n,u,s,t)&&r.push(u)}return r}function at(t){return t.reduce(function(e,i){return e.concat(M.arr(i)?at(i):i)},[])}function Mt(t){return M.arr(t)?t:(M.str(t)&&(t=Et(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function dt(t,e){return t.some(function(i){return i===e})}function ht(t){var e={};for(var i in t)e[i]=t[i];return e}function ot(t,e){var i=ht(t);for(var n in t)i[n]=e.hasOwnProperty(n)?e[n]:t[n];return i}function st(t,e){var i=ht(t);for(var n in e)i[n]=M.und(t[n])?e[n]:t[n];return i}function Gt(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function Xt(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(e,function(o,a,S,d){return a+a+S+S+d+d}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),r=parseInt(n[1],16),s=parseInt(n[2],16),u=parseInt(n[3],16);return"rgba("+r+","+s+","+u+",1)"}function te(t){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,s=e[4]||1;function u(T,k,D){return D<0&&(D+=1),D>1&&(D-=1),D<1/6?T+(k-T)*6*D:D<1/2?k:D<2/3?T+(k-T)*(2/3-D)*6:T}var o,a,S;if(n==0)o=a=S=r;else{var d=r<.5?r*(1+n):r+n-r*n,m=2*r-d;o=u(m,d,i+1/3),a=u(m,d,i),S=u(m,d,i-1/3)}return"rgba("+o*255+","+a*255+","+S*255+","+s+")"}function ee(t){if(M.rgb(t))return Gt(t);if(M.hex(t))return Xt(t);if(M.hsl(t))return te(t)}function J(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function re(t){if(et(t,"translate")||t==="perspective")return"px";if(et(t,"rotate")||et(t,"skew"))return"deg"}function ct(t,e){return M.fnc(t)?t(e.target,e.id,e.total):t}function R(t,e){return t.getAttribute(e)}function vt(t,e,i){var n=J(e);if(dt([i,"deg","rad","turn"],n))return e;var r=nt.CSS[e+i];if(!M.und(r))return r;var s=100,u=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(u),u.style.position="absolute",u.style.width=s+i;var a=s/u.offsetWidth;o.removeChild(u);var S=a*parseFloat(e);return nt.CSS[e+i]=S,S}function At(t,e,i){if(e in t.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=t.style[e]||getComputedStyle(t).getPropertyValue(n)||"0";return i?vt(t,r,i):r}}function gt(t,e){if(M.dom(t)&&!M.inp(t)&&(!M.nil(R(t,e))||M.svg(t)&&t[e]))return"attribute";if(M.dom(t)&&dt(Jt,e))return"transform";if(M.dom(t)&&e!=="transform"&&At(t,e))return"css";if(t[e]!=null)return"object"}function Ft(t){if(M.dom(t)){for(var e=t.style.transform||"",i=/(\w+)\(([^)]*)\)/g,n=new Map,r;r=i.exec(e);)n.set(r[1],r[2]);return n}}function ne(t,e,i,n){var r=et(e,"scale")?1:0+re(e),s=Ft(t).get(e)||r;return i&&(i.transforms.list.set(e,s),i.transforms.last=e),n?vt(t,s,n):s}function mt(t,e,i,n){switch(gt(t,e)){case"transform":return ne(t,e,n,i);case"css":return At(t,e,i);case"attribute":return R(t,e);default:return t[e]||0}}function yt(t,e){var i=/^(\*=|\+=|-=)/.exec(t);if(!i)return t;var n=J(t)||0,r=parseFloat(e),s=parseFloat(t.replace(i[0],""));switch(i[0][0]){case"+":return r+s+n;case"-":return r-s+n;case"*":return r*s+n}}function _t(t,e){if(M.col(t))return ee(t);if(/\s/g.test(t))return t;var i=J(t),n=i?t.substr(0,t.length-i.length):t;return e?n+e:n}function pt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function ie(t){return Math.PI*2*R(t,"r")}function ae(t){return R(t,"width")*2+R(t,"height")*2}function se(t){return pt({x:R(t,"x1"),y:R(t,"y1")},{x:R(t,"x2"),y:R(t,"y2")})}function Bt(t){for(var e=t.points,i=0,n,r=0;r<e.numberOfItems;r++){var s=e.getItem(r);r>0&&(i+=pt(n,s)),n=s}return i}function ue(t){var e=t.points;return Bt(t)+pt(e.getItem(e.numberOfItems-1),e.getItem(0))}function Ht(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return ie(t);case"rect":return ae(t);case"line":return se(t);case"polyline":return Bt(t);case"polygon":return ue(t)}}function oe(t){var e=Ht(t);return t.setAttribute("stroke-dasharray",e),e}function ce(t){for(var e=t.parentNode;M.svg(e)&&M.svg(e.parentNode);)e=e.parentNode;return e}function Yt(t,e){var i=e||{},n=i.el||ce(t),r=n.getBoundingClientRect(),s=R(n,"viewBox"),u=r.width,o=r.height,a=i.viewBox||(s?s.split(" "):[0,0,u,o]);return{el:n,viewBox:a,x:a[0]/1,y:a[1]/1,w:u,h:o,vW:a[2],vH:a[3]}}function fe(t,e){var i=M.str(t)?Et(t)[0]:t,n=e||100;return function(r){return{property:r,el:i,svg:Yt(i),totalLength:Ht(i)*(n/100)}}}function le(t,e,i){function n(d){d===void 0&&(d=0);var m=e+d>=1?e+d:0;return t.el.getPointAtLength(m)}var r=Yt(t.el,t.svg),s=n(),u=n(-1),o=n(1),a=i?1:r.w/r.vW,S=i?1:r.h/r.vH;switch(t.property){case"x":return(s.x-r.x)*a;case"y":return(s.y-r.y)*S;case"angle":return Math.atan2(o.y-u.y,o.x-u.x)*180/Math.PI}}function bt(t,e){var i=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=_t(M.pth(t)?t.totalLength:t,e)+"";return{original:n,numbers:n.match(i)?n.match(i).map(Number):[0],strings:M.str(t)||e?n.split(i):[]}}function $t(t){var e=t?at(M.arr(t)?t.map(Mt):Mt(t)):[];return it(e,function(i,n,r){return r.indexOf(i)===n})}function jt(t){var e=$t(t);return e.map(function(i,n){return{target:i,id:n,total:e.length,transforms:{list:Ft(i)}}})}function de(t,e){var i=ht(e);if(/^spring/.test(i.easing)&&(i.duration=Lt(i.easing)),M.arr(t)){var n=t.length,r=n===2&&!M.obj(t[0]);r?t={value:t}:M.fnc(e.duration)||(i.duration=e.duration/n)}var s=M.arr(t)?t:[t];return s.map(function(u,o){var a=M.obj(u)&&!M.pth(u)?u:{value:u};return M.und(a.delay)&&(a.delay=o?0:e.delay),M.und(a.endDelay)&&(a.endDelay=o===s.length-1?e.endDelay:0),a}).map(function(u){return st(u,i)})}function he(t){for(var e=it(at(t.map(function(s){return Object.keys(s)})),function(s){return M.key(s)}).reduce(function(s,u){return s.indexOf(u)<0&&s.push(u),s},[]),i={},n=function(s){var u=e[s];i[u]=t.map(function(o){var a={};for(var S in o)M.key(S)?S==u&&(a.value=o[S]):a[S]=o[S];return a})},r=0;r<e.length;r++)n(r);return i}function ve(t,e){var i=[],n=e.keyframes;n&&(e=st(he(n),e));for(var r in e)M.key(r)&&i.push({name:r,tweens:de(e[r],t)});return i}function ge(t,e){var i={};for(var n in t){var r=ct(t[n],e);M.arr(r)&&(r=r.map(function(s){return ct(s,e)}),r.length===1&&(r=r[0])),i[n]=r}return i.duration=parseFloat(i.duration),i.delay=parseFloat(i.delay),i}function me(t,e){var i;return t.tweens.map(function(n){var r=ge(n,e),s=r.value,u=M.arr(s)?s[1]:s,o=J(u),a=mt(e.target,t.name,o,e),S=i?i.to.original:a,d=M.arr(s)?s[0]:S,m=J(d)||J(a),T=o||m;return M.und(u)&&(u=S),r.from=bt(d,T),r.to=bt(yt(u,d),T),r.start=i?i.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=lt(r.easing,r.duration),r.isPath=M.pth(s),r.isPathTargetInsideSVG=r.isPath&&M.svg(e.target),r.isColor=M.col(r.from.original),r.isColor&&(r.round=1),i=r,r})}var Vt={css:function(t,e,i){return t.style[e]=i},attribute:function(t,e,i){return t.setAttribute(e,i)},object:function(t,e,i){return t[e]=i},transform:function(t,e,i,n,r){if(n.list.set(e,i),e===n.last||r){var s="";n.list.forEach(function(u,o){s+=o+"("+u+") "}),t.style.transform=s}}};function Wt(t,e){var i=jt(t);i.forEach(function(n){for(var r in e){var s=ct(e[r],n),u=n.target,o=J(s),a=mt(u,r,o,n),S=o||J(a),d=yt(_t(s,S),a),m=gt(u,r);Vt[m](u,r,d,n.transforms,!0)}})}function ye(t,e){var i=gt(t.target,e.name);if(i){var n=me(e,t),r=n[n.length-1];return{type:i,property:e.name,animatable:t,tweens:n,duration:r.end,delay:n[0].delay,endDelay:r.endDelay}}}function pe(t,e){return it(at(t.map(function(i){return e.map(function(n){return ye(i,n)})})),function(i){return!M.und(i)})}function zt(t,e){var i=t.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=i?Math.max.apply(Math,t.map(function(s){return n(s)+s.duration})):e.duration,r.delay=i?Math.min.apply(Math,t.map(function(s){return n(s)+s.delay})):e.delay,r.endDelay=i?r.duration-Math.max.apply(Math,t.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,r}var wt=0;function $e(t){var e=ot(Pt,t),i=ot(ft,t),n=ve(i,t),r=jt(t.targets),s=pe(r,n),u=zt(s,i),o=wt;return wt++,st(e,{id:o,children:[],animatables:r,animations:s,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var N=[],Nt=function(){var t;function e(){!t&&(!Dt()||!j.suspendWhenDocumentHidden)&&N.length>0&&(t=requestAnimationFrame(i))}function i(r){for(var s=N.length,u=0;u<s;){var o=N[u];o.paused?(N.splice(u,1),s--):(o.tick(r),u++)}t=u>0?requestAnimationFrame(i):void 0}function n(){j.suspendWhenDocumentHidden&&(Dt()?t=cancelAnimationFrame(t):(N.forEach(function(r){return r._onDocumentVisibility()}),Nt()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function Dt(){return!!document&&document.hidden}function j(t){t===void 0&&(t={});var e=0,i=0,n=0,r,s=0,u=null;function o(P){var b=window.Promise&&new Promise(function(_){return u=_});return P.finished=b,b}var a=$e(t);o(a);function S(){var P=a.direction;P!=="alternate"&&(a.direction=P!=="normal"?"normal":"reverse"),a.reversed=!a.reversed,r.forEach(function(b){return b.reversed=a.reversed})}function d(P){return a.reversed?a.duration-P:P}function m(){e=0,i=d(a.currentTime)*(1/j.speed)}function T(P,b){b&&b.seek(P-b.timelineOffset)}function k(P){if(a.reversePlayback)for(var _=s;_--;)T(P,r[_]);else for(var b=0;b<s;b++)T(P,r[b])}function D(P){for(var b=0,_=a.animations,V=_.length;b<V;){var w=_[b],y=w.animatable,h=w.tweens,x=h.length-1,v=h[x];x&&(v=it(h,function(Z){return P<Z.end})[0]||v);for(var C=U(P-v.start-v.delay,0,v.duration)/v.duration,B=isNaN(C)?1:v.easing(C),g=v.to.strings,f=v.round,c=[],p=v.to.numbers.length,l=void 0,O=0;O<p;O++){var I=void 0,A=v.to.numbers[O],F=v.from.numbers[O]||0;v.isPath?I=le(v.value,B*A,v.isPathTargetInsideSVG):I=F+B*(A-F),f&&(v.isColor&&O>2||(I=Math.round(I*f)/f)),c.push(I)}var Y=g.length;if(!Y)l=c[0];else{l=g[0];for(var H=0;H<Y;H++){g[H];var W=g[H+1],q=c[H];isNaN(q)||(W?l+=q+W:l+=q+" ")}}Vt[w.type](y.target,w.property,l,y.transforms),w.currentValue=l,b++}}function $(P){a[P]&&!a.passThrough&&a[P](a)}function E(){a.remaining&&a.remaining!==!0&&a.remaining--}function L(P){var b=a.duration,_=a.delay,V=b-a.endDelay,w=d(P);a.progress=U(w/b*100,0,100),a.reversePlayback=w<a.currentTime,r&&k(w),!a.began&&a.currentTime>0&&(a.began=!0,$("begin")),!a.loopBegan&&a.currentTime>0&&(a.loopBegan=!0,$("loopBegin")),w<=_&&a.currentTime!==0&&D(0),(w>=V&&a.currentTime!==b||!b)&&D(b),w>_&&w<V?(a.changeBegan||(a.changeBegan=!0,a.changeCompleted=!1,$("changeBegin")),$("change"),D(w)):a.changeBegan&&(a.changeCompleted=!0,a.changeBegan=!1,$("changeComplete")),a.currentTime=U(w,0,b),a.began&&$("update"),P>=b&&(i=0,E(),a.remaining?(e=n,$("loopComplete"),a.loopBegan=!1,a.direction==="alternate"&&S()):(a.paused=!0,a.completed||(a.completed=!0,$("loopComplete"),$("complete"),!a.passThrough&&"Promise"in window&&(u(),o(a)))))}return a.reset=function(){var P=a.direction;a.passThrough=!1,a.currentTime=0,a.progress=0,a.paused=!0,a.began=!1,a.loopBegan=!1,a.changeBegan=!1,a.completed=!1,a.changeCompleted=!1,a.reversePlayback=!1,a.reversed=P==="reverse",a.remaining=a.loop,r=a.children,s=r.length;for(var b=s;b--;)a.children[b].reset();(a.reversed&&a.loop!==!0||P==="alternate"&&a.loop===1)&&a.remaining++,D(a.reversed?a.duration:0)},a._onDocumentVisibility=m,a.set=function(P,b){return Wt(P,b),a},a.tick=function(P){n=P,e||(e=n),L((n+(i-e))*j.speed)},a.seek=function(P){L(d(P))},a.pause=function(){a.paused=!0,m()},a.play=function(){a.paused&&(a.completed&&a.reset(),a.paused=!1,N.push(a),m(),Nt())},a.reverse=function(){S(),a.completed=!a.reversed,m()},a.restart=function(){a.reset(),a.play()},a.remove=function(P){var b=$t(P);qt(b,a)},a.reset(),a.autoplay&&a.play(),a}function St(t,e){for(var i=e.length;i--;)dt(t,e[i].animatable.target)&&e.splice(i,1)}function qt(t,e){var i=e.animations,n=e.children;St(t,i);for(var r=n.length;r--;){var s=n[r],u=s.animations;St(t,u),!u.length&&!s.children.length&&n.splice(r,1)}!i.length&&!n.length&&e.pause()}function Me(t){for(var e=$t(t),i=N.length;i--;){var n=N[i];qt(e,n)}}function be(t,e){e===void 0&&(e={});var i=e.direction||"normal",n=e.easing?lt(e.easing):null,r=e.grid,s=e.axis,u=e.from||0,o=u==="first",a=u==="center",S=u==="last",d=M.arr(t),m=parseFloat(d?t[0]:t),T=d?parseFloat(t[1]):0,k=J(d?t[1]:t)||0,D=e.start||0+(d?m:0),$=[],E=0;return function(L,P,b){if(o&&(u=0),a&&(u=(b-1)/2),S&&(u=b-1),!$.length){for(var _=0;_<b;_++){if(!r)$.push(Math.abs(u-_));else{var V=a?(r[0]-1)/2:u%r[0],w=a?(r[1]-1)/2:Math.floor(u/r[0]),y=_%r[0],h=Math.floor(_/r[0]),x=V-y,v=w-h,C=Math.sqrt(x*x+v*v);s==="x"&&(C=-x),s==="y"&&(C=-v),$.push(C)}E=Math.max.apply(Math,$)}n&&($=$.map(function(g){return n(g/E)*E})),i==="reverse"&&($=$.map(function(g){return s?g<0?g*-1:-g:Math.abs(E-g)}))}var B=d?(T-m)/E:m;return D+B*(Math.round($[P]*100)/100)+k}}function we(t){t===void 0&&(t={});var e=j(t);return e.duration=0,e.add=function(i,n){var r=N.indexOf(e),s=e.children;r>-1&&N.splice(r,1);function u(T){T.passThrough=!0}for(var o=0;o<s.length;o++)u(s[o]);var a=st(i,ot(ft,t));a.targets=a.targets||t.targets;var S=e.duration;a.autoplay=!1,a.direction=e.direction,a.timelineOffset=M.und(n)?S:yt(n,S),u(e),e.seek(a.timelineOffset);var d=j(a);u(d),s.push(d);var m=zt(s,t);return e.delay=m.delay,e.endDelay=m.endDelay,e.duration=m.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}j.version="3.2.1";j.speed=1;j.suspendWhenDocumentHidden=!0;j.running=N;j.remove=Me;j.get=mt;j.set=Wt;j.convertPx=vt;j.path=fe;j.setDashoffset=oe;j.stagger=be;j.timeline=we;j.easing=lt;j.penner=Ct;j.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};const De="/age-calculator/icon-arrow.svg?inline";document.getElementById("submitBtn").src=De;tt().format();tt.extend(Zt);const Se=t=>{const e=document.querySelector(t),i=[{attribute:"required",isValid:s=>s.value.trim()!=="",errorMessage:()=>"This field cannot be empty"}],n=s=>{const u=s.querySelector("label"),o=s.querySelector("input"),a=s.querySelector(".error-message"),S=document.getElementById("day"),d=document.getElementById("month"),m=document.getElementById("year"),T=document.querySelectorAll(".output"),k=tt(),D=tt().set("date",S.value).set("month",d.value-1).set("year",m.value);tt.duration(k.diff(D)),D.isAfter(k);for(let $=0;$<T.length;$++){let E=!1;for(const L of i)o.hasAttribute(L.attribute)&&!L.isValid(o)&&(a.textContent=L.errorMessage(),u.classList.add("error"),o.classList.add("error-container"),E=!0),E||(a.textContent="",u.classList.remove("error"),o.classList.remove("error-container"),E=!1)}};e.setAttribute("novalidate",""),Array.from(e.elements).forEach(s=>{s.addEventListener("blur",u=>{n(u.target.closest(".container__input"))})}),e.addEventListener("submit",s=>{s.preventDefault(),r(e)});const r=s=>{Array.from(s.querySelectorAll(".container__input")).forEach(o=>{n(o)})}};Se("form");