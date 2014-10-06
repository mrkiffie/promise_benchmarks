(function(){function u(a,b){m[k]=a;m[k+1]=b;k+=2;2===k&&C()}function z(a){return"function"===typeof a}function H(){return function(){process.nextTick(v)}}function I(){var a=0,b=new D(v),c=document.createTextNode("");b.observe(c,{characterData:!0});return function(){c.data=a=++a%2}}function J(){var a=new MessageChannel;a.port1.onmessage=v;return function(){a.port2.postMessage(0)}}function K(){return function(){setTimeout(v,1)}}function v(){for(var a=0;a<k;a+=2)(0,m[a])(m[a+1]),m[a]=void 0,m[a+1]=void 0;
k=0}function n(){}function L(a,b,c,d){try{a.call(b,c,d)}catch(f){return f}}function M(a,b,c){u(function(a){var f=!1,e=L(c,b,function(c){f||(f=!0,b!==c?r(a,c):l(a,c))},function(b){f||(f=!0,g(a,b))});!f&&e&&(f=!0,g(a,e))},a)}function N(a,b){a.k=null;b.a===s?l(a,b.b):a.a===p?g(a,b.b):w(b,void 0,function(c){b!==c?r(a,c):l(a,c)},function(b){g(a,b)})}function r(a,b){if(a===b)l(a,b);else if("function"===typeof b||"object"===typeof b&&null!==b)if(b instanceof a.constructor)N(a,b);else{var c;try{c=b.then}catch(d){x.error=
d,c=x}c===x?g(a,x.error):void 0===c?l(a,b):z(c)?M(a,b,c):l(a,b)}else l(a,b)}function O(a){A(a)}function l(a,b){a.a===q&&(a.b=b,a.a=s,u(A,a))}function g(a,b){a.a===q&&(a.a=p,a.b=b,u(O,a))}function w(a,b,c,d){var f=a.e,e=f.length;f[e]=b;f[e+s]=c;f[e+p]=d;0===e&&a.a&&u(A,a)}function A(a){var b=a.e,c=a.a;if(0!==b.length){for(var d,f,e=a.b,g=0;g<b.length;g+=3)d=b[g],f=b[g+c],d?E(c,d,f,e):f(e);a.e.length=0}}function F(){this.error=null}function E(a,b,c,d){var f=z(c),e,h,k,m;if(f){try{e=c(d)}catch(n){B.error=
n,e=B}e===B?(m=!0,h=e.error,e=null):k=!0;if(b===e){g(b,new TypeError("A promises callback cannot return that same promise."));return}}else e=d,k=!0;b.a===q&&(f&&k?r(b,e):m?g(b,h):a===s?l(b,e):a===p&&g(b,e))}function P(a,b){try{b(function(b){r(a,b)},function(b){g(a,b)})}catch(c){g(a,c)}}function t(a,b){this.j=a;this.c=new a(n);G(b)?(this.i=b,this.d=this.length=b.length,this.b=Array(this.length),0===this.length?l(this.c,this.b):(this.length=this.length||0,this.h(),0===this.d&&l(this.c,this.b))):g(this.c,
this.l())}function h(a){this.e=[];if(n!==a){if(!z(a))throw new TypeError("The Promise constructor must be called a resolver");if(!(this instanceof h))throw new TypeError("The Promise constructor must be called with `new`");P(this,a)}}var G=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},k=0,y="undefined"!==typeof window?window:{},D=y.MutationObserver||y.WebKitMutationObserver,y="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&
"undefined"!==typeof MessageChannel,m=Array(1E3),C;C="undefined"!==typeof process&&"[object process]"==={}.toString.call(process)?H():D?I():y?J():K();var q=void 0,s=1,p=2,x=new F,B=new F;t.prototype.l=function(){return Error("Array Methods must be provided an Array")};t.prototype.h=function(){for(var a=this.length,b=this.c,c=this.i,d=0;b.a===q&&d<a;d++)this.g(c[d],d)};t.prototype.g=function(a,b){var c=this.j;"object"===typeof a&&null!==a?a.constructor===c&&a.a!==q?(a.k=null,this.f(a.a,b,a.b)):this.m(c.resolve(a),
b):(this.d--,this.b[b]=a)};t.prototype.f=function(a,b,c){var d=this.c;d.a===q&&(this.d--,a===p?g(d,c):this.b[b]=c);0===this.d&&l(d,this.b)};t.prototype.m=function(a,b){var c=this;w(a,void 0,function(a){c.f(s,b,a)},function(a){c.f(p,b,a)})};h.all=function(a){return(new t(this,a)).c};h.race=function(a){function b(a){r(d,a)}function c(a){g(d,a)}var d=new this(n);if(!G(a))return g(d,new TypeError("You must pass an array to race.")),d;for(var f=a.length,e=0;d.a===q&&e<f;e++)w(this.resolve(a[e]),void 0,
b,c);return d};h.resolve=function(a){if(a&&"object"===typeof a&&a.constructor===this)return a;var b=new this(n);r(b,a);return b};h.reject=function(a){var b=new this(n);g(b,a);return b};h.prototype={constructor:h,a:void 0,b:void 0,e:void 0,then:function(a,b){var c=this.a;if(c===s&&!a||c===p&&!b)return this;var d=new this.constructor(n),f=this.b;if(c){var e=arguments[c-1];u(function(){E(c,d,e,f)})}else w(this,d,a,b);return d}};"function"===typeof define&&define.n?define(function(){return h}):"undefined"!==
typeof module&&module.exports&&(module.exports=h)}).call(this);
