
var mozjpeg_dec = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(mozjpeg_dec) {
  mozjpeg_dec = mozjpeg_dec || {};


var d;d||(d=typeof mozjpeg_dec !== 'undefined' ? mozjpeg_dec : {});var aa,ba;d.ready=new Promise(function(a,b){aa=a;ba=b});var r={},t;for(t in d)d.hasOwnProperty(t)&&(r[t]=d[t]);var ca="./this.program";function u(a,b){throw b;}var v=!1,w=!1,da=!1,ea=!1;v="object"===typeof window;w="function"===typeof importScripts;da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!v&&!da&&!w;var x="",z,A,fa,ha;
if(da)x=w?require("path").dirname(x)+"/":__dirname+"/",z=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},A=function(a){a=z(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||B("Assertion failed: undefined");return a},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",B),u=function(a){process.exit(a)},
d.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=typeof read&&(z=function(a){return read(a)}),A=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||B("Assertion failed: undefined");return a},"function"===typeof quit&&(u=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:
print);else if(v||w)w?x=self.location.href:document.currentScript&&(x=document.currentScript.src),_scriptDir&&(x=_scriptDir),0!==x.indexOf("blob:")?x=x.substr(0,x.lastIndexOf("/")+1):x="",z=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},w&&(A=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ja=d.print||console.log.bind(console),D=d.printErr||console.warn.bind(console);
for(t in r)r.hasOwnProperty(t)&&(d[t]=r[t]);r=null;d.thisProgram&&(ca=d.thisProgram);d.quit&&(u=d.quit);var E;d.wasmBinary&&(E=d.wasmBinary);var noExitRuntime;d.noExitRuntime&&(noExitRuntime=d.noExitRuntime);"object"!==typeof WebAssembly&&B("no native wasm support detected");var F,ka=new WebAssembly.Table({initial:156,maximum:156,element:"anyfunc"}),la=!1,ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&ma)return ma.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else{var l=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|l:(f&7)<<18|g<<12|l<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}
function oa(a,b,c){var e=G;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;e[b++]=g}else{if(2047>=g){if(b+1>=c)break;e[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;e[b++]=224|g>>12}else{if(b+3>=c)break;e[b++]=240|g>>18;e[b++]=128|g>>12&63}e[b++]=128|g>>6&63}e[b++]=128|g&63}}e[b]=0}}var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function qa(a,b){var c=a>>1;for(var e=c+b/2;!(c>=e)&&H[c];)++c;c<<=1;if(32<c-a&&pa)return pa.decode(G.subarray(a,c));c=0;for(e="";;){var f=I[a+2*c>>1];if(0==f||c==b/2)return e;++c;e+=String.fromCharCode(f)}}function ra(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var e=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)I[b>>1]=a.charCodeAt(f),b+=2;I[b>>1]=0;return b-e}function sa(a){return 2*a.length}
function ta(a,b){for(var c=0,e="";!(c>=b/4);){var f=J[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023)):e+=String.fromCharCode(f)}return e}function ua(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var e=b;c=e+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}J[b>>2]=g;b+=4;if(b+4>c)break}J[b>>2]=0;return b-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&++c;b+=4}return b}var L,M,G,I,H,J,N,wa,xa;function ya(a){L=a;d.HEAP8=M=new Int8Array(a);d.HEAP16=I=new Int16Array(a);d.HEAP32=J=new Int32Array(a);d.HEAPU8=G=new Uint8Array(a);d.HEAPU16=H=new Uint16Array(a);d.HEAPU32=N=new Uint32Array(a);d.HEAPF32=wa=new Float32Array(a);d.HEAPF64=xa=new Float64Array(a)}var za=d.INITIAL_MEMORY||16777216;d.wasmMemory?F=d.wasmMemory:F=new WebAssembly.Memory({initial:za/65536,maximum:32768});
F&&(L=F.buffer);za=L.byteLength;ya(L);J[3100]=5255440;function O(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(d);else{var c=b.Y;"number"===typeof c?void 0===b.U?d.dynCall_v(c):d.dynCall_vi(c,b.U):c(void 0===b.U?null:b.U)}}}var Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=d.preRun.shift();Aa.unshift(a)}var Q=0,Fa=null,R=null;d.preloadedImages={};d.preloadedAudios={};
function B(a){if(d.onAbort)d.onAbort(a);D(a);la=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}function Ga(a){var b=S;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ha(){return Ga("data:application/octet-stream;base64,")}var S="mozjpeg_dec.wasm";if(!Ha()){var Ia=S;S=d.locateFile?d.locateFile(Ia,x):x+Ia}
function Ja(){try{if(E)return new Uint8Array(E);if(A)return A(S);throw"both async and sync fetching of the wasm failed";}catch(a){B(a)}}function Ka(){return E||!v&&!w||"function"!==typeof fetch||Ga("file://")?new Promise(function(a){a(Ja())}):fetch(S,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+S+"'";return a.arrayBuffer()}).catch(function(){return Ja()})}Ba.push({Y:function(){La()}});function Ma(){return 0<Ma.W}
function Na(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Oa=void 0;function T(a){for(var b="";G[a];)b+=Oa[G[a++]];return b}var U={},V={},Pa={};function Qa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Ra(a,b){a=Qa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Sa(a){var b=Error,c=Ra(a,function(e){this.name=a;this.message=e;e=Error(e).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var Ta=void 0;function W(a){throw new Ta(a);}var Ua=void 0;function Va(a,b){function c(k){k=b(k);if(k.length!==e.length)throw new Ua("Mismatched type converter count");for(var h=0;h<e.length;++h)X(e[h],k[h])}var e=[];e.forEach(function(k){Pa[k]=a});var f=Array(a.length),g=[],l=0;a.forEach(function(k,h){V.hasOwnProperty(k)?f[h]=V[k]:(g.push(k),U.hasOwnProperty(k)||(U[k]=[]),U[k].push(function(){f[h]=V[k];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}
function X(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||W('type "'+e+'" must have a positive integer typeid pointer');if(V.hasOwnProperty(a)){if(c.Z)return;W("Cannot register type '"+e+"' twice")}V[a]=b;delete Pa[a];U.hasOwnProperty(a)&&(b=U[a],delete U[a],b.forEach(function(f){f()}))}var Wa=[],Y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Xa(a){4<a&&0===--Y[a].V&&(Y[a]=void 0,Wa.push(a))}function Ya(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Wa.length?Wa.pop():Y.length;Y[b]={V:1,value:a};return b}}function Za(a){return this.fromWireType(N[a>>2])}function $a(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function cb(a,b){switch(b){case 2:return function(c){return this.fromWireType(wa[c>>2])};case 3:return function(c){return this.fromWireType(xa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function db(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ra(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function eb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function fb(a,b){var c=d;if(void 0===c[a].S){var e=c[a];c[a]=function(){c[a].S.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].S+")!");return c[a].S[arguments.length].apply(this,arguments)};c[a].S=[];c[a].S[e.X]=e}}
function gb(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].S&&void 0!==d[a].S[c])&&W("Cannot register public name '"+a+"' twice"),fb(a,a),d.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].S[c]=b):(d[a]=b,void 0!==c&&(d[a].aa=c))}function hb(a,b){for(var c=[],e=0;e<a;e++)c.push(J[(b>>2)+e]);return c}
function ib(a,b){a=T(a);var c=d["dynCall_"+a];for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function dynCall_"+(a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall","rawFunction",f+"};\n"))(c,b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}var jb=void 0;function kb(a){a=lb(a);var b=T(a);Z(a);return b}
function mb(a,b){function c(g){f[g]||V[g]||(Pa[g]?Pa[g].forEach(c):(e.push(g),f[g]=!0))}var e=[],f={};b.forEach(c);throw new jb(a+": "+e.map(kb).join([", "]));}function nb(a,b,c){switch(b){case 0:return c?function(e){return M[e]}:function(e){return G[e]};case 1:return c?function(e){return I[e>>1]}:function(e){return H[e>>1]};case 2:return c?function(e){return J[e>>2]}:function(e){return N[e>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var ob={};
function pb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function qb(a,b){var c=V[a];void 0===c&&W(b+" has unknown type "+kb(a));return c}var rb={},sb={};function tb(){if(!ub){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in sb)a[b]=sb[b];var c=[];for(b in a)c.push(b+"="+a[b]);ub=c}return ub}
for(var ub,vb=[null,[],[]],wb=Array(256),xb=0;256>xb;++xb)wb[xb]=String.fromCharCode(xb);Oa=wb;Ta=d.BindingError=Sa("BindingError");Ua=d.InternalError=Sa("InternalError");d.count_emval_handles=function(){for(var a=0,b=5;b<Y.length;++b)void 0!==Y[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<Y.length;++a)if(void 0!==Y[a])return Y[a];return null};jb=d.UnboundTypeError=Sa("UnboundTypeError");
var zb={m:function(a){return yb(a)},i:function(){},l:function(a){"uncaught_exception"in Ma?Ma.W++:Ma.W=1;throw a;},y:function(a,b,c,e,f){var g=Na(c);b=T(b);X(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,k){return k?e:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var k=M;else if(2===c)k=I;else if(4===c)k=J;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[l>>g])},T:null})},x:function(a,b){b=T(b);X(a,{name:b,fromWireType:function(c){var e=
Y[c].value;Xa(c);return e},toWireType:function(c,e){return Ya(e)},argPackAdvance:8,readValueFromPointer:Za,T:null})},g:function(a,b,c){c=Na(c);b=T(b);X(a,{name:b,fromWireType:function(e){return e},toWireType:function(e,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+$a(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:cb(b,c),T:null})},n:function(a,b,c,e,f,g){var l=hb(b,c);a=T(a);f=ib(e,f);gb(a,function(){mb("Cannot call "+a+" due to unbound types",
l)},b-1);Va(l,function(k){var h=[k[0],null].concat(k.slice(1)),n=k=a,p=f,q=h.length;2>q&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var y=null!==h[1]&&!1,C=!1,m=1;m<h.length;++m)if(null!==h[m]&&void 0===h[m].T){C=!0;break}var ab="void"!==h[0].name,K="",P="";for(m=0;m<q-2;++m)K+=(0!==m?", ":"")+"arg"+m,P+=(0!==m?", ":"")+"arg"+m+"Wired";n="return function "+Qa(n)+"("+K+") {\nif (arguments.length !== "+(q-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+
(q-2)+" args!');\n}\n";C&&(n+="var destructors = [];\n");var bb=C?"destructors":"null";K="throwBindingError invoker fn runDestructors retType classParam".split(" ");p=[W,p,g,eb,h[0],h[1]];y&&(n+="var thisWired = classParam.toWireType("+bb+", this);\n");for(m=0;m<q-2;++m)n+="var arg"+m+"Wired = argType"+m+".toWireType("+bb+", arg"+m+"); // "+h[m+2].name+"\n",K.push("argType"+m),p.push(h[m+2]);y&&(P="thisWired"+(0<P.length?", ":"")+P);n+=(ab?"var rv = ":"")+"invoker(fn"+(0<P.length?", ":"")+P+");\n";
if(C)n+="runDestructors(destructors);\n";else for(m=y?1:2;m<h.length;++m)q=1===m?"thisWired":"arg"+(m-2)+"Wired",null!==h[m].T&&(n+=q+"_dtor("+q+"); // "+h[m].name+"\n",K.push(q+"_dtor"),p.push(h[m].T));ab&&(n+="var ret = retType.fromWireType(rv);\nreturn ret;\n");K.push(n+"}\n");h=db(K).apply(null,p);m=b-1;if(!d.hasOwnProperty(k))throw new Ua("Replacing nonexistant public symbol");void 0!==d[k].S&&void 0!==m?d[k].S[m]=h:(d[k]=h,d[k].X=m);return[]})},b:function(a,b,c,e,f){function g(n){return n}b=
T(b);-1===f&&(f=4294967295);var l=Na(c);if(0===e){var k=32-8*c;g=function(n){return n<<k>>>k}}var h=-1!=b.indexOf("unsigned");X(a,{name:b,fromWireType:g,toWireType:function(n,p){if("number"!==typeof p&&"boolean"!==typeof p)throw new TypeError('Cannot convert "'+$a(p)+'" to '+this.name);if(p<e||p>f)throw new TypeError('Passing a number "'+$a(p)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+f+"]!");return h?p>>>0:p|0},argPackAdvance:8,readValueFromPointer:nb(b,
l,0!==e),T:null})},a:function(a,b,c){function e(g){g>>=2;var l=N;return new f(L,l[g+1],l[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=T(c);X(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{Z:!0})},h:function(a,b){b=T(b);var c="std::string"===b;X(a,{name:b,fromWireType:function(e){var f=N[e>>2];if(c)for(var g=e+4,l=0;l<=f;++l){var k=e+4+l;if(l==f||0==G[k]){g=g?na(G,g,k-g):"";if(void 0===h)var h=g;else h+=String.fromCharCode(0),
h+=g;g=k+1}}else{h=Array(f);for(l=0;l<f;++l)h[l]=String.fromCharCode(G[e+4+l]);h=h.join("")}Z(e);return h},toWireType:function(e,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||W("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var n=0,p=0;p<f.length;++p){var q=f.charCodeAt(p);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|f.charCodeAt(++p)&1023);127>=q?++n:n=2047>=q?n+
2:65535>=q?n+3:n+4}return n}:function(){return f.length})(),k=yb(4+l+1);N[k>>2]=l;if(c&&g)oa(f,k+4,l+1);else if(g)for(g=0;g<l;++g){var h=f.charCodeAt(g);255<h&&(Z(k),W("String has UTF-16 code units that do not fit in 8 bits"));G[k+4+g]=h}else for(g=0;g<l;++g)G[k+4+g]=f[g];null!==e&&e.push(Z,k);return k},argPackAdvance:8,readValueFromPointer:Za,T:function(e){Z(e)}})},d:function(a,b,c){c=T(c);if(2===b){var e=qa;var f=ra;var g=sa;var l=function(){return H};var k=1}else 4===b&&(e=ta,f=ua,g=va,l=function(){return N},
k=2);X(a,{name:c,fromWireType:function(h){for(var n=N[h>>2],p=l(),q,y=h+4,C=0;C<=n;++C){var m=h+4+C*b;if(C==n||0==p[m>>k])y=e(y,m-y),void 0===q?q=y:(q+=String.fromCharCode(0),q+=y),y=m+b}Z(h);return q},toWireType:function(h,n){"string"!==typeof n&&W("Cannot pass non-string to C++ string type "+c);var p=g(n),q=yb(4+p+b);N[q>>2]=p>>k;f(n,q+4,p+b);null!==h&&h.push(Z,q);return q},argPackAdvance:8,readValueFromPointer:Za,T:function(h){Z(h)}})},j:function(a,b){b=T(b);X(a,{$:!0,name:b,argPackAdvance:0,fromWireType:function(){},
toWireType:function(){}})},u:Xa,z:function(a){if(0===a)return Ya(pb());var b=ob[a];a=void 0===b?T(a):b;return Ya(pb()[a])},o:function(a){4<a&&(Y[a].V+=1)},e:function(a,b,c,e){a||W("Cannot use deleted val. handle = "+a);a=Y[a].value;var f=rb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+'], "parameter '+g+
'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(qb,d,Ya);rb[b]=f}return f(a,c,e)},s:function(){B()},r:function(a,b,c){G.copyWithin(a,b,b+c)},c:function(a){a>>>=0;var b=G.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,a+100663296);e=Math.max(16777216,a,e);0<e%
65536&&(e+=65536-e%65536);a:{try{F.grow(Math.min(2147483648,e)-L.byteLength+65535>>>16);ya(F.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},t:function(a,b){var c=0;tb().forEach(function(e,f){var g=b+c;f=J[a+4*f>>2]=g;for(g=0;g<e.length;++g)M[f++>>0]=e.charCodeAt(g);M[f>>0]=0;c+=e.length+1});return 0},v:function(a,b){var c=tb();J[a>>2]=c.length;var e=0;c.forEach(function(f){e+=f.length+1});J[b>>2]=e;return 0},k:function(a){if(!noExitRuntime&&(la=!0,d.onExit))d.onExit(a);u(a,new ia(a))},
w:function(){return 0},p:function(){},f:function(a,b,c,e){for(var f=0,g=0;g<c;g++){for(var l=J[b+8*g>>2],k=J[b+(8*g+4)>>2],h=0;h<k;h++){var n=G[l+h],p=vb[a];0===n||10===n?((1===a?ja:D)(na(p,0)),p.length=0):p.push(n)}f+=k}J[e>>2]=f;return 0},memory:F,q:function(){},table:ka};
(function(){function a(f){d.asm=f.exports;Q--;d.monitorRunDependencies&&d.monitorRunDependencies(Q);0==Q&&(null!==Fa&&(clearInterval(Fa),Fa=null),R&&(f=R,R=null,f()))}function b(f){a(f.instance)}function c(f){return Ka().then(function(g){return WebAssembly.instantiate(g,e)}).then(f,function(g){D("failed to asynchronously prepare wasm: "+g);B(g)})}var e={a:zb};Q++;d.monitorRunDependencies&&d.monitorRunDependencies(Q);if(d.instantiateWasm)try{return d.instantiateWasm(e,a)}catch(f){return D("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(E||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||Ga("file://")||"function"!==typeof fetch)return c(b);fetch(S,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(g){D("wasm streaming compile failed: "+g);D("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var La=d.___wasm_call_ctors=function(){return(La=d.___wasm_call_ctors=d.asm.A).apply(null,arguments)},yb=d._malloc=function(){return(yb=d._malloc=d.asm.B).apply(null,arguments)},Z=d._free=function(){return(Z=d._free=d.asm.C).apply(null,arguments)},lb=d.___getTypeName=function(){return(lb=d.___getTypeName=d.asm.D).apply(null,arguments)};d.___embind_register_native_and_builtin_types=function(){return(d.___embind_register_native_and_builtin_types=d.asm.E).apply(null,arguments)};
d.dynCall_iii=function(){return(d.dynCall_iii=d.asm.F).apply(null,arguments)};d.dynCall_vii=function(){return(d.dynCall_vii=d.asm.G).apply(null,arguments)};d.dynCall_vi=function(){return(d.dynCall_vi=d.asm.H).apply(null,arguments)};d.dynCall_ii=function(){return(d.dynCall_ii=d.asm.I).apply(null,arguments)};d.dynCall_iiiiii=function(){return(d.dynCall_iiiiii=d.asm.J).apply(null,arguments)};d.dynCall_iiiiiii=function(){return(d.dynCall_iiiiiii=d.asm.K).apply(null,arguments)};
d.dynCall_iiiii=function(){return(d.dynCall_iiiii=d.asm.L).apply(null,arguments)};d.dynCall_iiii=function(){return(d.dynCall_iiii=d.asm.M).apply(null,arguments)};d.dynCall_viiiii=function(){return(d.dynCall_viiiii=d.asm.N).apply(null,arguments)};d.dynCall_viiii=function(){return(d.dynCall_viiii=d.asm.O).apply(null,arguments)};d.dynCall_viiiiiii=function(){return(d.dynCall_viiiiiii=d.asm.P).apply(null,arguments)};d.dynCall_jiji=function(){return(d.dynCall_jiji=d.asm.Q).apply(null,arguments)};
d.dynCall_viiiiii=function(){return(d.dynCall_viiiiii=d.asm.R).apply(null,arguments)};var Ab;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}R=function Bb(){Ab||Cb();Ab||(R=Bb)};
function Cb(){function a(){if(!Ab&&(Ab=!0,d.calledRun=!0,!la)){O(Ba);O(Ca);aa(d);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var b=d.postRun.shift();Da.unshift(b)}O(Da)}}if(!(0<Q)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ea();O(Aa);0<Q||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);a()},1)):a())}}
d.run=Cb;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();noExitRuntime=!0;Cb();


  return mozjpeg_dec.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = mozjpeg_dec;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return mozjpeg_dec; });
    else if (typeof exports === 'object')
      exports["mozjpeg_dec"] = mozjpeg_dec;
    