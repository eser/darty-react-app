/**
 * core-js 2.4.0
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2016 Denis Pushkarev
 */
!function(b,c,a){"use strict";!function(b){function __webpack_require__(c){if(a[c])return a[c].exports;var d=a[c]={exports:{},id:c,loaded:!1};return b[c].call(d.exports,d,d.exports,__webpack_require__),d.loaded=!0,d.exports}var a={};return __webpack_require__.m=b,__webpack_require__.c=a,__webpack_require__.p="",__webpack_require__(0)}([function(b,c,a){a(1),a(50),a(51),a(52),a(54),a(55),a(58),a(59),a(60),a(61),a(62),a(63),a(64),a(65),a(66),a(68),a(70),a(72),a(74),a(77),a(78),a(79),a(83),a(87),a(88),a(89),a(90),a(92),a(93),a(94),a(95),a(96),a(98),a(100),a(101),a(102),a(104),a(105),a(106),a(108),a(109),a(110),a(112),a(113),a(114),a(115),a(116),a(117),a(118),a(119),a(120),a(121),a(122),a(123),a(124),a(125),a(127),a(131),a(132),a(133),a(134),a(138),a(140),a(141),a(142),a(143),a(144),a(145),a(146),a(147),a(148),a(149),a(150),a(151),a(152),a(153),a(159),a(160),a(162),a(163),a(164),a(168),a(169),a(170),a(171),a(172),a(174),a(175),a(176),a(177),a(180),a(182),a(183),a(184),a(186),a(188),a(190),a(191),a(192),a(194),a(195),a(196),a(197),a(203),a(206),a(207),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(231),a(234),a(235),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(259),a(260),a(262),a(263),a(264),a(265),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(288),b.exports=a(289)},function(da,ca,b){var s=b(2),c=b(3),D=b(4),f=b(6),G=b(16),$=b(20).KEY,J=b(5),C=b(21),B=b(22),ba=b(17),n=b(23),aa=b(24),_=b(25),U=b(27),Y=b(40),X=b(43),A=b(10),t=b(30),z=b(14),x=b(15),l=b(44),N=b(47),O=b(49),P=b(9),W=b(28),H=O.f,j=P.f,T=N.f,d=s.Symbol,u=s.JSON,v=u&&u.stringify,i="prototype",e=n("_hidden"),L=n("toPrimitive"),V={}.propertyIsEnumerable,o=C("symbol-registry"),h=C("symbols"),m=C("op-symbols"),g=Object[i],k="function"==typeof d,E=s.QObject,F=!E||!E[i]||!E[i].findChild,y=D&&J(function(){return 7!=l(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(c,a,d){var b=H(g,a);b&&delete g[a],j(c,a,d),b&&c!==g&&j(g,a,b)}:j,R=function(a){var b=h[a]=l(d[i]);return b._k=a,b},w=k&&"symbol"==typeof d.iterator?function(a){return"symbol"==typeof a}:function(a){return a instanceof d},r=function defineProperty(a,b,d){return a===g&&r(m,b,d),A(a),b=z(b,!0),A(d),c(h,b)?(d.enumerable?(c(a,e)&&a[e][b]&&(a[e][b]=!1),d=l(d,{enumerable:x(0,!1)})):(c(a,e)||j(a,e,x(1,{})),a[e][b]=!0),y(a,b,d)):j(a,b,d)},S=function defineProperties(a,b){A(a);for(var c,d=Y(b=t(b)),e=0,f=d.length;f>e;)r(a,c=d[e++],b[c]);return a},Z=function create(b,c){return c===a?l(b):S(l(b),c)},Q=function propertyIsEnumerable(a){var b=V.call(this,a=z(a,!0));return this===g&&c(h,a)&&!c(m,a)?!1:b||!c(this,a)||!c(h,a)||c(this,e)&&this[e][a]?b:!0},M=function getOwnPropertyDescriptor(b,a){if(b=t(b),a=z(a,!0),b!==g||!c(h,a)||c(m,a)){var d=H(b,a);return!d||!c(h,a)||c(b,e)&&b[e][a]||(d.enumerable=!0),d}},K=function getOwnPropertyNames(g){for(var a,b=T(t(g)),d=[],f=0;b.length>f;)c(h,a=b[f++])||a==e||a==$||d.push(a);return d},I=function getOwnPropertySymbols(b){for(var a,d=b===g,e=T(d?m:t(b)),f=[],i=0;e.length>i;)c(h,a=e[i++])&&(d?c(g,a):!0)&&f.push(h[a]);return f};k||(d=function Symbol(){if(this instanceof d)throw TypeError("Symbol is not a constructor!");var b=ba(arguments.length>0?arguments[0]:a),f=function(a){this===g&&f.call(m,a),c(this,e)&&c(this[e],b)&&(this[e][b]=!1),y(this,b,x(1,a))};return D&&F&&y(g,b,{configurable:!0,set:f}),R(b)},G(d[i],"toString",function toString(){return this._k}),O.f=M,P.f=r,b(48).f=N.f=K,b(42).f=Q,b(41).f=I,D&&!b(26)&&G(g,"propertyIsEnumerable",Q,!0),aa.f=function(a){return R(n(a))}),f(f.G+f.W+f.F*!k,{Symbol:d});for(var q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),p=0;q.length>p;)n(q[p++]);for(var q=W(n.store),p=0;q.length>p;)_(q[p++]);f(f.S+f.F*!k,"Symbol",{"for":function(a){return c(o,a+="")?o[a]:o[a]=d(a)},keyFor:function keyFor(a){if(w(a))return U(o,a);throw TypeError(a+" is not a symbol!")},useSetter:function(){F=!0},useSimple:function(){F=!1}}),f(f.S+f.F*!k,"Object",{create:Z,defineProperty:r,defineProperties:S,getOwnPropertyDescriptor:M,getOwnPropertyNames:K,getOwnPropertySymbols:I}),u&&f(f.S+f.F*(!k||J(function(){var a=d();return"[null]"!=v([a])||"{}"!=v({a:a})||"{}"!=v(Object(a))})),"JSON",{stringify:function stringify(e){if(e!==a&&!w(e)){for(var b,c,d=[e],f=1;arguments.length>f;)d.push(arguments[f++]);return b=d[1],"function"==typeof b&&(c=b),!c&&X(b)||(b=function(b,a){return c&&(a=c.call(this,b,a)),w(a)?void 0:a}),d[1]=b,v.apply(u,d)}}}),d[i][L]||b(8)(d[i],L,d[i].valueOf),B(d,"Symbol"),B(Math,"Math",!0),B(s.JSON,"JSON",!0)},function(a,d){var b=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof c&&(c=b)},function(a,c){var b={}.hasOwnProperty;a.exports=function(a,c){return b.call(a,c)}},function(a,c,b){a.exports=!b(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(h,k,d){var c=d(2),e=d(7),i=d(8),j=d(16),g=d(18),f="prototype",b=function(k,l,o){var h,p,d,t,w=k&b.F,q=k&b.G,v=k&b.S,s=k&b.P,u=k&b.B,m=q?c:v?c[l]||(c[l]={}):(c[l]||{})[f],n=q?e:e[l]||(e[l]={}),r=n[f]||(n[f]={});q&&(o=l);for(h in o)p=!w&&m&&m[h]!==a,d=(p?m:o)[h],t=u&&p?g(d,c):s&&"function"==typeof d?g(Function.call,d):d,m&&j(m,h,d,k&b.U),n[h]!=d&&i(n,h,t),s&&r[h]!=d&&(r[h]=d)};c.core=e,b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128,h.exports=b},function(a,d){var c=a.exports={version:"2.4.0"};"number"==typeof b&&(b=c)},function(b,e,a){var c=a(9),d=a(15);b.exports=a(4)?function(a,b,e){return c.f(a,b,d(1,e))}:function(a,b,c){return a[b]=c,a}},function(g,c,a){var b=a(10),d=a(12),e=a(14),f=Object.defineProperty;c.f=a(4)?Object.defineProperty:function defineProperty(c,g,a){if(b(c),g=e(g,!0),b(a),d)try{return f(c,g,a)}catch(h){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(c[g]=a.value),c}},function(a,d,b){var c=b(11);a.exports=function(a){if(!c(a))throw TypeError(a+" is not an object!");return a}},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(b,c,a){b.exports=!a(4)&&!a(5)(function(){return 7!=Object.defineProperty(a(13)("div"),"a",{get:function(){return 7}}).a})},function(d,f,b){var c=b(11),a=b(2).document,e=c(a)&&c(a.createElement);d.exports=function(b){return e?a.createElement(b):{}}},function(b,d,c){var a=c(11);b.exports=function(b,e){if(!a(b))return b;var c,d;if(e&&"function"==typeof(c=b.toString)&&!a(d=c.call(b)))return d;if("function"==typeof(c=b.valueOf)&&!a(d=c.call(b)))return d;if(!e&&"function"==typeof(c=b.toString)&&!a(d=c.call(b)))return d;throw TypeError("Can't convert object to primitive value")}},function(a,b){a.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},function(g,j,a){var h=a(2),b=a(8),f=a(3),c=a(17)("src"),d="toString",e=Function[d],i=(""+e).split(d);a(7).inspectSource=function(a){return e.call(a)},(g.exports=function(d,a,e,j){var g="function"==typeof e;g&&(f(e,"name")||b(e,"name",a)),d[a]!==e&&(g&&(f(e,c)||b(e,c,d[a]?""+d[a]:i.join(String(a)))),d===h?d[a]=e:j?d[a]?d[a]=e:b(d,a,e):(delete d[a],b(d,a,e)))})(Function.prototype,d,function toString(){return"function"==typeof this&&this[c]||e.call(this)})},function(b,e){var c=0,d=Math.random();b.exports=function(b){return"Symbol(".concat(b===a?"":b,")_",(++c+d).toString(36))}},function(b,e,c){var d=c(19);b.exports=function(b,c,e){if(d(b),c===a)return b;switch(e){case 1:return function(a){return b.call(c,a)};case 2:return function(a,d){return b.call(c,a,d)};case 3:return function(a,d,e){return b.call(c,a,d,e)}}return function(){return b.apply(c,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(k,o,b){var a=b(17)("meta"),i=b(11),d=b(3),g=b(9).f,f=0,c=Object.isExtensible||function(){return!0},j=!b(5)(function(){return c(Object.preventExtensions({}))}),e=function(b){g(b,a,{value:{i:"O"+ ++f,w:{}}})},l=function(b,f){if(!i(b))return"symbol"==typeof b?b:("string"==typeof b?"S":"P")+b;if(!d(b,a)){if(!c(b))return"F";if(!f)return"E";e(b)}return b[a].i},m=function(b,f){if(!d(b,a)){if(!c(b))return!0;if(!f)return!1;e(b)}return b[a].w},h=function(b){return j&&n.NEED&&c(b)&&!d(b,a)&&e(b),b},n=k.exports={KEY:a,NEED:!1,fastKey:l,getWeak:m,onFreeze:h}},function(d,f,e){var a=e(2),b="__core-js_shared__",c=a[b]||(a[b]={});d.exports=function(a){return c[a]||(c[a]={})}},function(c,f,a){var d=a(9).f,e=a(3),b=a(23)("toStringTag");c.exports=function(a,c,f){a&&!e(a=f?a:a.prototype,b)&&d(a,b,{configurable:!0,value:c})}},function(e,h,a){var b=a(21)("wks"),f=a(17),c=a(2).Symbol,d="function"==typeof c,g=e.exports=function(a){return b[a]||(b[a]=d&&c[a]||(d?c:f)("Symbol."+a))};g.store=b},function(c,a,b){a.f=b(23)},function(c,h,a){var d=a(2),b=a(7),e=a(26),f=a(24),g=a(9).f;c.exports=function(a){var c=b.Symbol||(b.Symbol=e?{}:d.Symbol||{});"_"==a.charAt(0)||a in c||g(c,a,{value:f.f(a)})}},function(a,b){a.exports=!1},function(b,e,a){var c=a(28),d=a(30);b.exports=function(g,h){for(var a,b=d(g),e=c(b),i=e.length,f=0;i>f;)if(b[a=e[f++]]===h)return a}},function(b,e,a){var c=a(29),d=a(39);b.exports=Object.keys||function keys(a){return c(a,d)}},function(c,g,a){var b=a(3),d=a(30),e=a(34)(!1),f=a(38)("IE_PROTO");c.exports=function(j,h){var a,g=d(j),i=0,c=[];for(a in g)a!=f&&b(g,a)&&c.push(a);for(;h.length>i;)b(g,a=h[i++])&&(~e(c,a)||c.push(a));return c}},function(b,e,a){var c=a(31),d=a(33);b.exports=function(a){return c(d(a))}},function(a,d,b){var c=b(32);a.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==c(a)?a.split(""):Object(a)}},function(a,c){var b={}.toString;a.exports=function(a){return b.call(a).slice(8,-1)}},function(b,c){b.exports=function(b){if(b==a)throw TypeError("Can't call method on  "+b);return b}},function(b,f,a){var c=a(30),d=a(35),e=a(37);b.exports=function(a){return function(j,g,k){var h,f=c(j),i=d(f.length),b=e(k,i);if(a&&g!=g){for(;i>b;)if(h=f[b++],h!=h)return!0}else for(;i>b;b++)if((a||b in f)&&f[b]===g)return a||b||0;return!a&&-1}}},function(a,e,b){var c=b(36),d=Math.min;a.exports=function(a){return a>0?d(c(a),9007199254740991):0}},function(a,d){var b=Math.ceil,c=Math.floor;a.exports=function(a){return isNaN(a=+a)?0:(a>0?c:b)(a)}},function(a,f,b){var c=b(36),d=Math.max,e=Math.min;a.exports=function(a,b){return a=c(a),0>a?d(a+b,0):e(a,b)}},function(c,e,a){var b=a(21)("keys"),d=a(17);c.exports=function(a){return b[a]||(b[a]=d(a))}},function(a,b){a.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(b,f,a){var c=a(28),d=a(41),e=a(42);b.exports=function(a){var b=c(a),f=d.f;if(f)for(var g,h=f(a),j=e.f,i=0;h.length>i;)j.call(a,g=h[i++])&&b.push(g);return b}},function(b,a){a.f=Object.getOwnPropertySymbols},function(b,a){a.f={}.propertyIsEnumerable},function(a,d,b){var c=b(32);a.exports=Array.isArray||function isArray(a){return"Array"==c(a)}},function(g,k,b){var h=b(10),i=b(45),f=b(39),j=b(38)("IE_PROTO"),d=function(){},e="prototype",c=function(){var a,d=b(13)("iframe"),g=f.length,h=">";for(d.style.display="none",b(46).appendChild(d),d.src="javascript:",a=d.contentWindow.document,a.open(),a.write("<script>document.F=Object</script"+h),a.close(),c=a.F;g--;)delete c[e][f[g]];return c()};g.exports=Object.create||function create(f,g){var b;return null!==f?(d[e]=h(f),b=new d,d[e]=null,b[j]=f):b=c(),g===a?b:i(b,g)}},function(b,f,a){var c=a(9),d=a(10),e=a(28);b.exports=a(4)?Object.defineProperties:function defineProperties(a,b){d(a);for(var f,g=e(b),i=g.length,h=0;i>h;)c.f(a,f=g[h++],b[f]);return a}},function(a,c,b){a.exports=b(2).document&&document.documentElement},function(d,h,a){var e=a(30),b=a(48).f,f={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],g=function(a){try{return b(a)}catch(d){return c.slice()}};d.exports.f=function getOwnPropertyNames(a){return c&&"[object Window]"==f.call(a)?g(a):b(e(a))}},function(e,b,a){var c=a(29),d=a(39).concat("length","prototype");b.f=Object.getOwnPropertyNames||function getOwnPropertyNames(a){return c(a,d)}},function(j,c,a){var d=a(42),e=a(15),f=a(30),g=a(14),h=a(3),i=a(12),b=Object.getOwnPropertyDescriptor;c.f=a(4)?b:function getOwnPropertyDescriptor(a,c){if(a=f(a),c=g(c,!0),i)try{return b(a,c)}catch(j){}return h(a,c)?e(!d.f.call(a,c),a[c]):void 0}},function(c,d,a){var b=a(6);b(b.S+b.F*!a(4),"Object",{defineProperty:a(9).f})},function(c,d,a){var b=a(6);b(b.S+b.F*!a(4),"Object",{defineProperties:a(45)})},function(d,e,a){var b=a(30),c=a(49).f;a(53)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(a,d){return c(b(a),d)}})},function(c,f,a){var b=a(6),d=a(7),e=a(5);c.exports=function(a,g){var c=(d.Object||{})[a]||Object[a],f={};f[a]=g(c),b(b.S+b.F*e(function(){c(1)}),"Object",f)}},function(c,d,a){var b=a(6);b(b.S,"Object",{create:a(44)})},function(d,e,a){var b=a(56),c=a(57);a(53)("getPrototypeOf",function(){return function getPrototypeOf(a){return c(b(a))}})},function(a,d,b){var c=b(33);a.exports=function(a){return Object(c(a))}},function(c,g,a){var d=a(3),e=a(56),b=a(38)("IE_PROTO"),f=Object.prototype;c.exports=Object.getPrototypeOf||function(a){return a=e(a),d(a,b)?a[b]:"function"==typeof a.constructor&&a instanceof a.constructor?a.constructor.prototype:a instanceof Object?f:null}},function(d,e,a){var b=a(56),c=a(28);a(53)("keys",function(){return function keys(a){return c(b(a))}})},function(b,c,a){a(53)("getOwnPropertyNames",function(){return a(47).f})},function(d,e,a){var b=a(11),c=a(20).onFreeze;a(53)("freeze",function(a){return function freeze(d){return a&&b(d)?a(c(d)):d}})},function(d,e,a){var b=a(11),c=a(20).onFreeze;a(53)("seal",function(a){return function seal(d){return a&&b(d)?a(c(d)):d}})},function(d,e,a){var b=a(11),c=a(20).onFreeze;a(53)("preventExtensions",function(a){return function preventExtensions(d){return a&&b(d)?a(c(d)):d}})},function(c,d,a){var b=a(11);a(53)("isFrozen",function(a){return function isFrozen(c){return b(c)?a?a(c):!1:!0}})},function(c,d,a){var b=a(11);a(53)("isSealed",function(a){return function isSealed(c){return b(c)?a?a(c):!1:!0}})},function(c,d,a){var b=a(11);a(53)("isExtensible",function(a){return function isExtensible(c){return b(c)?a?a(c):!0:!1}})},function(c,d,b){var a=b(6);a(a.S+a.F,"Object",{assign:b(67)})},function(d,i,a){var c=a(28),e=a(41),f=a(42),g=a(56),h=a(31),b=Object.assign;d.exports=!b||a(5)(function(){var a={},c={},d=Symbol(),e="abcdefghijklmnopqrst";return a[d]=7,e.split("").forEach(function(a){c[a]=a}),7!=b({},a)[d]||Object.keys(b({},c)).join("")!=e})?function assign(n,q){for(var i=g(n),o=arguments.length,k=1,d=e.f,m=f.f;o>k;)for(var b,a=h(arguments[k++]),l=d?c(a).concat(d(a)):c(a),p=l.length,j=0;p>j;)m.call(a,b=l[j++])&&(i[b]=a[b]);return i}:b},function(c,d,a){var b=a(6);b(b.S,"Object",{is:a(69)})},function(a,b){a.exports=Object.is||function is(a,b){return a===b?0!==a||1/a===1/b:a!=a&&b!=b}},function(c,d,a){var b=a(6);b(b.S,"Object",{setPrototypeOf:a(71).set})},function(d,g,b){var e=b(11),f=b(10),c=function(b,a){if(f(b),!e(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};d.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,a,d){try{d=b(18)(Function.call,b(49).f(Object.prototype,"__proto__").set,2),d(e,[]),a=!(e instanceof Array)}catch(f){a=!0}return function setPrototypeOf(b,e){return c(b,e),a?b.__proto__=e:d(b,e),b}}({},!1):a),check:c}},function(d,e,a){var c=a(73),b={};b[a(23)("toStringTag")]="z",b+""!="[object z]"&&a(16)(Object.prototype,"toString",function toString(){return"[object "+c(this)+"]"},!0)},function(d,h,c){var b=c(32),e=c(23)("toStringTag"),f="Arguments"==b(function(){return arguments}()),g=function(a,b){try{return a[b]}catch(c){}};d.exports=function(d){var c,h,i;return d===a?"Undefined":null===d?"Null":"string"==typeof(h=g(c=Object(d),e))?h:f?b(c):"Object"==(i=b(c))&&"function"==typeof c.callee?"Arguments":i}},function(c,d,a){var b=a(6);b(b.P,"Function",{bind:a(75)})},function(d,i,a){var e=a(19),f=a(11),g=a(76),c=[].slice,b={},h=function(e,a,f){if(!(a in b)){for(var d=[],c=0;a>c;c++)d[c]="a["+c+"]";b[a]=Function("F,a","return new F("+d.join(",")+")")}return b[a](e,f)};d.exports=Function.bind||function bind(d){var a=e(this),i=c.call(arguments,1),b=function(){var e=i.concat(c.call(arguments));return this instanceof b?h(a,e.length,e):g(a,e,d)};return f(a.prototype)&&(b.prototype=a.prototype),b}},function(b,c){b.exports=function(c,b,d){var e=d===a;switch(b.length){case 0:return e?c():c.call(d);case 1:return e?c(b[0]):c.call(d,b[0]);case 2:return e?c(b[0],b[1]):c.call(d,b[0],b[1]);case 3:return e?c(b[0],b[1],b[2]):c.call(d,b[0],b[1],b[2]);case 4:return e?c(b[0],b[1],b[2],b[3]):c.call(d,b[0],b[1],b[2],b[3])}return c.apply(d,b)}},function(i,j,a){var c=a(9).f,e=a(15),f=a(3),d=Function.prototype,g=/^\s*function ([^ (]*)/,b="name",h=Object.isExtensible||function(){return!0};b in d||a(4)&&c(d,b,{configurable:!0,get:function(){try{var a=this,d=(""+a).match(g)[1];return f(a,b)||!h(a)||c(a,b,e(5,d)),d}catch(i){return""}}})},function(f,g,a){var b=a(11),e=a(57),c=a(23)("hasInstance"),d=Function.prototype;c in d||a(9).f(d,c,{value:function(a){if("function"!=typeof this||!b(a))return!1;if(!b(this.prototype))return a instanceof this;for(;a=e(a);)if(this.prototype===a)return!0;return!1}})},function(w,v,b){var k=b(2),j=b(3),i=b(32),n=b(80),o=b(14),p=b(5),q=b(48).f,t=b(49).f,u=b(9).f,m=b(81).trim,c="Number",a=k[c],d=a,f=a.prototype,r=i(b(44)(f))==c,s="trim"in String.prototype,l=function(i){var a=o(i,!1);if("string"==typeof a&&a.length>2){a=s?a.trim():m(a,3);var b,c,d,e=a.charCodeAt(0);if(43===e||45===e){if(b=a.charCodeAt(2),88===b||120===b)return NaN}else if(48===e){switch(a.charCodeAt(1)){case 66:case 98:c=2,d=49;break;case 79:case 111:c=8,d=55;break;default:return+a}for(var f,g=a.slice(2),h=0,j=g.length;j>h;h++)if(f=g.charCodeAt(h),48>f||f>d)return NaN;return parseInt(g,c)}}return+a};if(!a(" 0o1")||!a("0b1")||a("+0x1")){a=function Number(g){var e=1>arguments.length?0:g,b=this;return b instanceof a&&(r?p(function(){f.valueOf.call(b)}):i(b)!=c)?n(new d(l(e)),b,a):l(e)};for(var e,h=b(4)?q(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;h.length>g;g++)j(d,e=h[g])&&!j(a,e)&&u(a,e,t(d,e));a.prototype=f,f.constructor=a,b(16)(k,c,a)}},function(c,e,a){var d=a(11),b=a(71).set;c.exports=function(e,g,f){var a,c=g.constructor;return c!==f&&"function"==typeof c&&(a=c.prototype)!==f.prototype&&d(a)&&b&&b(e,a),e}},function(g,m,a){var d=a(6),h=a(33),i=a(5),c=a(82),b="["+c+"]",f="​",j=RegExp("^"+b+b+"*"),k=RegExp(b+b+"*$"),e=function(a,h,e){var b={},g=i(function(){return!!c[a]()||f[a]()!=f}),j=b[a]=g?h(l):c[a];e&&(b[e]=j),d(d.P+d.F*g,"String",b)},l=e.trim=function(a,b){return a=String(h(a)),1&b&&(a=a.replace(j,"")),2&b&&(a=a.replace(k,"")),a};g.exports=e},function(a,b){a.exports="	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(q,p,c){var f=c(6),n=(c(84),c(36)),o=c(85),g=c(86),j=1..toFixed,i=Math.floor,a=[0,0,0,0,0,0],k="Number.toFixed: incorrect invocation!",e="0",d=function(d,e){for(var c=-1,b=e;++c<6;)b+=d*a[c],a[c]=b%1e7,b=i(b/1e7)},h=function(d){for(var c=6,b=0;--c>=0;)b+=a[c],a[c]=i(b/d),b=b%d*1e7},l=function(){for(var c=6,b="";--c>=0;)if(""!==b||0===c||0!==a[c]){var d=String(a[c]);b=""===b?d:b+g.call(e,7-d.length)+d}return b},b=function(a,c,d){return 0===c?d:c%2===1?b(a,c-1,d*a):b(a*a,c/2,d)},m=function(c){for(var b=0,a=c;a>=4096;)b+=12,a/=4096;for(;a>=2;)b+=1,a/=2;return b};f(f.P+f.F*(!!j&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0))||!c(5)(function(){j.call({})})),"Number",{toFixed:function toFixed(s){var f,q,j,p,a=o(this,k),i=n(s),r="",c=e;if(0>i||i>20)throw RangeError(k);if(a!=a)return"NaN";if(-1e21>=a||a>=1e21)return String(a);if(0>a&&(r="-",a=-a),a>1e-21)if(f=m(a*b(2,69,1))-69,q=0>f?a*b(2,-f,1):a/b(2,f,1),q*=4503599627370496,f=52-f,f>0){for(d(0,q),j=i;j>=7;)d(1e7,0),j-=7;for(d(b(10,j,1),0),j=f-1;j>=23;)h(1<<23),j-=23;h(1<<j),d(1,1),h(2),c=l()}else d(0,q),d(1<<-f,0),c=l()+g.call(e,i);return i>0?(p=c.length,c=r+(i>=p?"0."+g.call(e,i-p)+c:c.slice(0,p-i)+"."+c.slice(p-i))):c=r+c,c}})},function(b,c){b.exports=function(b,d,e,c){if(!(b instanceof d)||c!==a&&c in b)throw TypeError(e+": incorrect invocation!");return b}},function(a,d,b){var c=b(32);a.exports=function(a,b){if("number"!=typeof a&&"Number"!=c(a))throw TypeError(b);return+a}},function(b,e,a){var c=a(36),d=a(33);b.exports=function repeat(f){var b=String(d(this)),e="",a=c(f);if(0>a||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(b+=b))1&a&&(e+=b);return e}},function(g,h,c){var d=c(6),e=c(5),f=c(85),b=1..toPrecision;d(d.P+d.F*(e(function(){return"1"!==b.call(1,a)})||!e(function(){b.call({})})),"Number",{toPrecision:function toPrecision(c){var d=f(this,"Number#toPrecision: incorrect invocation!");return c===a?b.call(d):b.call(d,c)}})},function(c,d,b){var a=b(6);a(a.S,"Number",{EPSILON:Math.pow(2,-52)})},function(d,e,a){var b=a(6),c=a(2).isFinite;b(b.S,"Number",{isFinite:function isFinite(a){return"number"==typeof a&&c(a)}})},function(c,d,a){var b=a(6);b(b.S,"Number",{isInteger:a(91)})},function(a,e,b){var c=b(11),d=Math.floor;a.exports=function isInteger(a){return!c(a)&&isFinite(a)&&d(a)===a}},function(c,d,b){var a=b(6);a(a.S,"Number",{isNaN:function isNaN(a){return a!=a}})},function(e,f,a){var b=a(6),c=a(91),d=Math.abs;b(b.S,"Number",{isSafeInteger:function isSafeInteger(a){return c(a)&&d(a)<=9007199254740991}})},function(c,d,b){var a=b(6);a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(c,d,b){var a=b(6);a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(d,e,b){var a=b(6),c=b(97);a(a.S+a.F*(Number.parseFloat!=c),"Number",{parseFloat:c})},function(c,e,a){var b=a(2).parseFloat,d=a(81).trim;c.exports=1/b(a(82)+"-0")!==-(1/0)?function parseFloat(e){var a=d(String(e),3),c=b(a);return 0===c&&"-"==a.charAt(0)?-0:c}:b},function(d,e,b){var a=b(6),c=b(99);a(a.S+a.F*(Number.parseInt!=c),"Number",{parseInt:c})},function(d,g,b){var a=b(2).parseInt,e=b(81).trim,c=b(82),f=/^[\-+]?0[xX]/;d.exports=8!==a(c+"08")||22!==a(c+"0x16")?function parseInt(c,d){var b=e(String(c),3);return a(b,d>>>0||(f.test(b)?16:10))}:a},function(d,e,b){var a=b(6),c=b(99);a(a.G+a.F*(parseInt!=c),{parseInt:c})},function(d,e,b){var a=b(6),c=b(97);a(a.G+a.F*(parseFloat!=c),{parseFloat:c})},function(f,g,c){var a=c(6),e=c(103),d=Math.sqrt,b=Math.acosh;a(a.S+a.F*!(b&&710==Math.floor(b(Number.MAX_VALUE))&&b(1/0)==1/0),"Math",{acosh:function acosh(a){return(a=+a)<1?NaN:a>94906265.62425156?Math.log(a)+Math.LN2:e(a-1+d(a-1)*d(a+1))}})},function(a,b){a.exports=Math.log1p||function log1p(a){return(a=+a)>-1e-8&&1e-8>a?a-a*a/2:Math.log(1+a)}},function(d,e,c){function asinh(a){return isFinite(a=+a)&&0!=a?0>a?-asinh(-a):Math.log(a+Math.sqrt(a*a+1)):a}var a=c(6),b=Math.asinh;a(a.S+a.F*!(b&&1/b(0)>0),"Math",{asinh:asinh})},function(d,e,c){var a=c(6),b=Math.atanh;a(a.S+a.F*!(b&&1/b(-0)<0),"Math",{atanh:function atanh(a){return 0==(a=+a)?a:Math.log((1+a)/(1-a))/2}})},function(d,e,a){var b=a(6),c=a(107);b(b.S,"Math",{cbrt:function cbrt(a){return c(a=+a)*Math.pow(Math.abs(a),1/3)}})},function(a,b){a.exports=Math.sign||function sign(a){return 0==(a=+a)||a!=a?a:0>a?-1:1}},function(c,d,b){var a=b(6);a(a.S,"Math",{clz32:function clz32(a){return(a>>>=0)?31-Math.floor(Math.log(a+.5)*Math.LOG2E):32}})},function(d,e,c){var a=c(6),b=Math.exp;a(a.S,"Math",{cosh:function cosh(a){return(b(a=+a)+b(-a))/2}})},function(d,e,b){var a=b(6),c=b(111);a(a.S+a.F*(c!=Math.expm1),"Math",{expm1:c})},function(b,c){var a=Math.expm1;b.exports=!a||a(10)>22025.465794806718||a(10)<22025.465794806718||-2e-17!=a(-2e-17)?function expm1(a){return 0==(a=+a)?a:a>-1e-6&&1e-6>a?a+a*a/2:Math.exp(a)-1}:a},function(k,j,e){var f=e(6),g=e(107),a=Math.pow,d=a(2,-52),b=a(2,-23),i=a(2,127)*(2-b),c=a(2,-126),h=function(a){return a+1/d-1/d};f(f.S,"Math",{fround:function fround(k){var f,a,e=Math.abs(k),j=g(k);return c>e?j*h(e/c/b)*c*b:(f=(1+b/d)*e,a=f-(f-e),a>i||a!=a?j*(1/0):j*a)}})},function(d,e,b){var a=b(6),c=Math.abs;a(a.S,"Math",{hypot:function hypot(h,i){for(var a,b,e=0,f=0,g=arguments.length,d=0;g>f;)a=c(arguments[f++]),a>d?(b=d/a,e=e*b*b+1,d=a):a>0?(b=a/d,e+=b*b):e+=a;return d===1/0?1/0:d*Math.sqrt(e)}})},function(d,e,b){var a=b(6),c=Math.imul;a(a.S+a.F*b(5)(function(){return-5!=c(4294967295,5)||2!=c.length}),"Math",{imul:function imul(f,g){var a=65535,b=+f,c=+g,d=a&b,e=a&c;return 0|d*e+((a&b>>>16)*e+d*(a&c>>>16)<<16>>>0)}})},function(c,d,b){var a=b(6);a(a.S,"Math",{log10:function log10(a){return Math.log(a)/Math.LN10}})},function(c,d,a){var b=a(6);b(b.S,"Math",{log1p:a(103)})},function(c,d,b){var a=b(6);a(a.S,"Math",{log2:function log2(a){return Math.log(a)/Math.LN2}})},function(c,d,a){var b=a(6);b(b.S,"Math",{sign:a(107)})},function(e,f,a){var b=a(6),c=a(111),d=Math.exp;b(b.S+b.F*a(5)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(a){return Math.abs(a=+a)<1?(c(a)-c(-a))/2:(d(a-1)-d(-a-1))*(Math.E/2)}})},function(e,f,a){var b=a(6),c=a(111),d=Math.exp;b(b.S,"Math",{tanh:function tanh(a){var b=c(a=+a),e=c(-a);return b==1/0?1:e==1/0?-1:(b-e)/(d(a)+d(-a))}})},function(c,d,b){var a=b(6);a(a.S,"Math",{trunc:function trunc(a){return(a>0?Math.floor:Math.ceil)(a)}})},function(f,g,b){var a=b(6),e=b(37),c=String.fromCharCode,d=String.fromCodePoint;a(a.S+a.F*(!!d&&1!=d.length),"String",{fromCodePoint:function fromCodePoint(g){for(var a,b=[],f=arguments.length,d=0;f>d;){if(a=+arguments[d++],e(a,1114111)!==a)throw RangeError(a+" is not a valid code point");b.push(65536>a?c(a):c(((a-=65536)>>10)+55296,a%1024+56320))}return b.join("")}})},function(e,f,a){var b=a(6),c=a(30),d=a(35);b(b.S,"String",{raw:function raw(f){for(var e=c(f.raw),g=d(e.length),h=arguments.length,b=[],a=0;g>a;)b.push(String(e[a++])),h>a&&b.push(String(arguments[a]));return b.join("")}})},function(b,c,a){a(81)("trim",function(a){return function trim(){return a(this,3)}})},function(d,e,a){var b=a(6),c=a(126)(!1);b(b.P,"String",{codePointAt:function codePointAt(a){return c(this,a)}})},function(c,f,b){var d=b(36),e=b(33);c.exports=function(b){return function(j,k){var f,h,g=String(e(j)),c=d(k),i=g.length;return 0>c||c>=i?b?"":a:(f=g.charCodeAt(c),55296>f||f>56319||c+1===i||(h=g.charCodeAt(c+1))<56320||h>57343?b?g.charAt(c):f:b?g.slice(c,c+2):(f-55296<<10)+(h-56320)+65536)}}},function(h,i,b){var c=b(6),e=b(35),g=b(128),d="endsWith",f=""[d];c(c.P+c.F*b(130)(d),"String",{endsWith:function endsWith(i){var b=g(this,i,d),j=arguments.length>1?arguments[1]:a,k=e(b.length),c=j===a?k:Math.min(e(j),k),h=String(i);return f?f.call(b,h,c):b.slice(c-h.length,c)===h}})},function(b,e,a){var c=a(129),d=a(33);b.exports=function(a,b,e){if(c(b))throw TypeError("String#"+e+" doesn't accept regex!");return String(d(a))}},function(c,g,b){var d=b(11),e=b(32),f=b(23)("match");c.exports=function(b){var c;return d(b)&&((c=b[f])!==a?!!c:"RegExp"==e(b))}},function(a,d,b){var c=b(23)("match");a.exports=function(b){var a=/./;try{"/./"[b](a)}catch(d){try{return a[c]=!1,!"/./"[b](a)}catch(e){}}return!0}},function(f,g,b){var c=b(6),e=b(128),d="includes";c(c.P+c.F*b(130)(d),"String",{includes:function includes(b){return!!~e(this,b,d).indexOf(b,arguments.length>1?arguments[1]:a)}})},function(c,d,a){var b=a(6);b(b.P,"String",{repeat:a(86)})},function(h,i,b){var c=b(6),f=b(35),g=b(128),d="startsWith",e=""[d];c(c.P+c.F*b(130)(d),"String",{startsWith:function startsWith(i){var b=g(this,i,d),c=f(Math.min(arguments.length>1?arguments[1]:a,b.length)),h=String(i);return e?e.call(b,h,c):b.slice(c,c+h.length)===h}})},function(d,e,b){var c=b(126)(!0);b(135)(String,"String",function(a){this._t=String(a),this._i=0},function(){var b,d=this._t,e=this._i;return e>=d.length?{value:a,done:!0}:(b=c(d,e),this._i+=b.length,{value:b,done:!1})})},function(q,s,b){var h=b(26),e=b(6),o=b(16),i=b(8),n=b(3),j=b(136),r=b(137),l=b(22),m=b(57),c=b(23)("iterator"),f=!([].keys&&"next"in[].keys()),p="@@iterator",k="keys",d="values",g=function(){return this};q.exports=function(C,w,x,H,s,G,D){r(x,w,H);var v,z,u,y=function(a){if(!f&&a in b)return b[a];switch(a){case k:return function keys(){return new x(this,a)};case d:return function values(){return new x(this,a)}}return function entries(){return new x(this,a)}},E=w+" Iterator",A=s==d,B=!1,b=C.prototype,t=b[c]||b[p]||s&&b[s],q=t||y(s),I=s?A?y("entries"):q:a,F="Array"==w?b.entries||t:t;if(F&&(u=m(F.call(new C)),u!==Object.prototype&&(l(u,E,!0),h||n(u,c)||i(u,c,g))),A&&t&&t.name!==d&&(B=!0,q=function values(){return t.call(this)}),h&&!D||!f&&!B&&b[c]||i(b,c,q),j[w]=q,j[E]=g,s)if(v={values:A?q:y(d),keys:G?q:y(k),entries:I},D)for(z in v)z in b||o(b,z,v[z]);else e(e.P+e.F*(f||B),w,v);return v}},function(a,b){a.exports={}},function(c,g,a){var d=a(44),e=a(15),f=a(22),b={};a(8)(b,a(23)("iterator"),function(){return this}),c.exports=function(a,c,g){a.prototype=d(b,{next:e(1,g)}),f(a,c+" Iterator")}},function(b,c,a){a(139)("anchor",function(a){return function anchor(b){return a(this,"a","name",b)}})},function(c,h,a){var b=a(6),d=a(5),e=a(33),f=/"/g,g=function(d,a,b,g){var h=String(e(d)),c="<"+a;return""!==b&&(c+=" "+b+'="'+String(g).replace(f,"&quot;")+'"'),c+">"+h+"</"+a+">"};c.exports=function(a,e){var c={};c[a]=e(g),b(b.P+b.F*d(function(){var b=""[a]('"');return b!==b.toLowerCase()||b.split('"').length>3}),"String",c)}},function(b,c,a){a(139)("big",function(a){return function big(){return a(this,"big","","")}})},function(b,c,a){a(139)("blink",function(a){return function blink(){return a(this,"blink","","")}})},function(b,c,a){a(139)("bold",function(a){return function bold(){return a(this,"b","","")}})},function(b,c,a){a(139)("fixed",function(a){return function fixed(){return a(this,"tt","","")}})},function(b,c,a){a(139)("fontcolor",function(a){return function fontcolor(b){return a(this,"font","color",b)}})},function(b,c,a){a(139)("fontsize",function(a){return function fontsize(b){return a(this,"font","size",b)}})},function(b,c,a){a(139)("italics",function(a){return function italics(){return a(this,"i","","")}})},function(b,c,a){a(139)("link",function(a){return function link(b){return a(this,"a","href",b)}})},function(b,c,a){a(139)("small",function(a){return function small(){return a(this,"small","","")}})},function(b,c,a){a(139)("strike",function(a){return function strike(){return a(this,"strike","","")}})},function(b,c,a){a(139)("sub",function(a){return function sub(){return a(this,"sub","","")}})},function(b,c,a){a(139)("sup",function(a){return function sup(){return a(this,"sup","","")}})},function(c,d,a){var b=a(6);b(b.S,"Array",{isArray:a(43)})},function(l,k,b){var g=b(18),c=b(6),e=b(56),h=b(154),i=b(155),j=b(35),d=b(156),f=b(157);c(c.S+c.F*!b(158)(function(a){Array.from(a)}),"Array",{from:function from(t){var o,c,m,n,k=e(t),p="function"==typeof this?this:Array,s=arguments.length,l=s>1?arguments[1]:a,q=l!==a,b=0,r=f(k);if(q&&(l=g(l,s>2?arguments[2]:a,2)),r==a||p==Array&&i(r))for(o=j(k.length),c=new p(o);o>b;b++)d(c,b,q?l(k[b],b):k[b]);else for(n=r.call(k),c=new p;!(m=n.next()).done;b++)d(c,b,q?h(n,l,[m.value,b],!0):m.value);return c.length=b,c}})},function(c,e,d){var b=d(10);c.exports=function(d,e,c,g){try{return g?e(b(c)[0],c[1]):e(c)}catch(h){var f=d["return"];throw f!==a&&b(f.call(d)),h}}},function(c,g,b){var d=b(136),e=b(23)("iterator"),f=Array.prototype;c.exports=function(b){return b!==a&&(d.Array===b||f[e]===b)}},function(b,e,a){var c=a(9),d=a(15);b.exports=function(a,b,e){b in a?c.f(a,b,d(0,e)):a[b]=e}},function(c,g,b){var d=b(73),e=b(23)("iterator"),f=b(136);
c.exports=b(7).getIteratorMethod=function(b){return b!=a?b[e]||b["@@iterator"]||f[d(b)]:void 0}},function(d,f,e){var a=e(23)("iterator"),b=!1;try{var c=[7][a]();c["return"]=function(){b=!0},Array.from(c,function(){throw 2})}catch(g){}d.exports=function(f,g){if(!g&&!b)return!1;var d=!1;try{var c=[7],e=c[a]();e.next=function(){return{done:d=!0}},c[a]=function(){return e},f(c)}catch(h){}return d}},function(d,e,a){var b=a(6),c=a(156);b(b.S+b.F*a(5)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var a=0,b=arguments.length,d=new("function"==typeof this?this:Array)(b);b>a;)c(d,a,arguments[a++]);return d.length=b,d}})},function(f,g,b){var c=b(6),e=b(30),d=[].join;c(c.P+c.F*(b(31)!=Object||!b(161)(d)),"Array",{join:function join(b){return d.call(e(this),b===a?",":b)}})},function(a,d,b){var c=b(5);a.exports=function(a,b){return!!a&&c(function(){b?a.call(null,function(){},1):a.call(null)})}},function(i,j,b){var c=b(6),d=b(46),h=b(32),e=b(37),f=b(35),g=[].slice;c(c.P+c.F*b(5)(function(){d&&g.call(d)}),"Array",{slice:function slice(j,b){var d=f(this.length),k=h(this);if(b=b===a?d:b,"Array"==k)return g.call(this,j,b);for(var i=e(j,d),n=e(b,d),l=f(n-i),m=Array(l),c=0;l>c;c++)m[c]="String"==k?this.charAt(i+c):this[i+c];return m}})},function(i,j,b){var c=b(6),h=b(19),e=b(56),f=b(5),d=[].sort,g=[1,2,3];c(c.P+c.F*(f(function(){g.sort(a)})||!f(function(){g.sort(null)})||!b(161)(d)),"Array",{sort:function sort(b){return b===a?d.call(e(this)):d.call(e(this),h(b))}})},function(e,f,a){var b=a(6),c=a(165)(0),d=a(161)([].forEach,!0);b(b.P+b.F*!d,"Array",{forEach:function forEach(a){return c(this,a,arguments[1])}})},function(c,i,b){var d=b(18),e=b(31),f=b(56),g=b(35),h=b(166);c.exports=function(b,l){var i=1==b,m=2==b,n=3==b,c=4==b,j=6==b,o=5==b||j,k=l||h;return function(p,v,x){for(var l,r,u=f(p),s=e(u),w=d(v,x,3),t=g(s.length),h=0,q=i?k(p,t):m?k(p,0):a;t>h;h++)if((o||h in s)&&(l=s[h],r=w(l,h,u),b))if(i)q[h]=r;else if(r)switch(b){case 3:return!0;case 5:return l;case 6:return h;case 2:q.push(l)}else if(c)return!1;return j?-1:n||c?c:q}}},function(a,d,b){var c=b(167);a.exports=function(a,b){return new(c(a))(b)}},function(d,g,b){var e=b(11),c=b(43),f=b(23)("species");d.exports=function(d){var b;return c(d)&&(b=d.constructor,"function"!=typeof b||b!==Array&&!c(b.prototype)||(b=a),e(b)&&(b=b[f],null===b&&(b=a))),b===a?Array:b}},function(d,e,a){var b=a(6),c=a(165)(1);b(b.P+b.F*!a(161)([].map,!0),"Array",{map:function map(a){return c(this,a,arguments[1])}})},function(d,e,a){var b=a(6),c=a(165)(2);b(b.P+b.F*!a(161)([].filter,!0),"Array",{filter:function filter(a){return c(this,a,arguments[1])}})},function(d,e,a){var b=a(6),c=a(165)(3);b(b.P+b.F*!a(161)([].some,!0),"Array",{some:function some(a){return c(this,a,arguments[1])}})},function(d,e,a){var b=a(6),c=a(165)(4);b(b.P+b.F*!a(161)([].every,!0),"Array",{every:function every(a){return c(this,a,arguments[1])}})},function(d,e,a){var b=a(6),c=a(173);b(b.P+b.F*!a(161)([].reduce,!0),"Array",{reduce:function reduce(a){return c(this,a,arguments.length,arguments[1],!1)}})},function(b,g,a){var c=a(19),d=a(56),e=a(31),f=a(35);b.exports=function(m,l,n,b,g){c(l);var i=d(m),h=e(i),j=f(i.length),a=g?j-1:0,k=g?-1:1;if(2>n)for(;;){if(a in h){b=h[a],a+=k;break}if(a+=k,g?0>a:a>=j)throw TypeError("Reduce of empty array with no initial value")}for(;g?a>=0:j>a;a+=k)a in h&&(b=l(b,h[a],a,i));return b}},function(d,e,a){var b=a(6),c=a(173);b(b.P+b.F*!a(161)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(a){return c(this,a,arguments.length,arguments[1],!0)}})},function(f,g,a){var b=a(6),e=a(34)(!1),c=[].indexOf,d=!!c&&1/[1].indexOf(1,-0)<0;b(b.P+b.F*(d||!a(161)(c)),"Array",{indexOf:function indexOf(a){return d?c.apply(this,arguments)||0:e(this,a,arguments[1])}})},function(h,i,a){var b=a(6),e=a(30),f=a(36),g=a(35),c=[].lastIndexOf,d=!!c&&1/[1].lastIndexOf(1,-0)<0;b(b.P+b.F*(d||!a(161)(c)),"Array",{lastIndexOf:function lastIndexOf(i){if(d)return c.apply(this,arguments)||0;var b=e(this),h=g(b.length),a=h-1;for(arguments.length>1&&(a=Math.min(a,f(arguments[1]))),0>a&&(a=h+a);a>=0;a--)if(a in b&&b[a]===i)return a||0;return-1}})},function(c,d,a){var b=a(6);b(b.P,"Array",{copyWithin:a(178)}),a(179)("copyWithin")},function(d,g,b){var e=b(56),c=b(37),f=b(35);d.exports=[].copyWithin||function copyWithin(l,m){var g=e(this),h=f(g.length),b=c(l,h),d=c(m,h),k=arguments.length>2?arguments[2]:a,i=Math.min((k===a?h:c(k,h))-d,h-b),j=1;for(b>d&&d+i>b&&(j=-1,d+=i-1,b+=i-1);i-- >0;)d in g?g[b]=g[d]:delete g[b],b+=j,d+=j;return g}},function(e,f,d){var b=d(23)("unscopables"),c=Array.prototype;c[b]==a&&d(8)(c,b,{}),e.exports=function(a){c[b][a]=!0}},function(c,d,a){var b=a(6);b(b.P,"Array",{fill:a(181)}),a(179)("fill")},function(d,g,b){var e=b(56),c=b(37),f=b(35);d.exports=function fill(j){for(var b=e(this),d=f(b.length),g=arguments.length,h=c(g>1?arguments[1]:a,d),i=g>2?arguments[2]:a,k=i===a?d:c(i,d);k>h;)b[h++]=j;return b}},function(g,h,b){var c=b(6),f=b(165)(5),d="find",e=!0;d in[]&&Array(1)[d](function(){e=!1}),c(c.P+c.F*e,"Array",{find:function find(b){return f(this,b,arguments.length>1?arguments[1]:a)}}),b(179)(d)},function(g,h,b){var c=b(6),f=b(165)(6),d="findIndex",e=!0;d in[]&&Array(1)[d](function(){e=!1}),c(c.P+c.F*e,"Array",{findIndex:function findIndex(b){return f(this,b,arguments.length>1?arguments[1]:a)}}),b(179)(d)},function(f,h,b){var d=b(179),c=b(185),e=b(136),g=b(30);f.exports=b(135)(Array,"Array",function(a,b){this._t=g(a),this._i=0,this._k=b},function(){var d=this._t,e=this._k,b=this._i++;return!d||b>=d.length?(this._t=a,c(1)):"keys"==e?c(0,b):"values"==e?c(0,d[b]):c(0,[b,d[b]])},"values"),e.Arguments=e.Array,d("keys"),d("values"),d("entries")},function(a,b){a.exports=function(a,b){return{value:b,done:!!a}}},function(b,c,a){a(187)("Array")},function(c,g,a){var d=a(2),e=a(9),f=a(4),b=a(23)("species");c.exports=function(c){var a=d[c];f&&a&&!a[b]&&e.f(a,b,{configurable:!0,get:function(){return this}})}},function(s,r,c){var i=c(2),q=c(80),o=c(9).f,n=c(48).f,m=c(129),l=c(189),b=i.RegExp,e=b,g=b.prototype,d=/a/g,f=/a/g,k=new b(d)!==d;if(c(4)&&(!k||c(5)(function(){return f[c(23)("match")]=!1,b(d)!=d||b(f)==f||"/a/i"!=b(d,"i")}))){b=function RegExp(c,f){var i=this instanceof b,d=m(c),h=f===a;return!i&&d&&c.constructor===b&&h?c:q(k?new e(d&&!h?c.source:c,f):e((d=c instanceof b)?c.source:c,d&&h?l.call(c):f),i?this:g,b)};for(var p=(function(a){a in b||o(b,a,{configurable:!0,get:function(){return e[a]},set:function(b){e[a]=b}})}),j=n(e),h=0;j.length>h;)p(j[h++]);g.constructor=b,b.prototype=g,c(16)(i,"RegExp",b)}c(187)("RegExp")},function(a,d,b){var c=b(10);a.exports=function(){var b=c(this),a="";return b.global&&(a+="g"),b.ignoreCase&&(a+="i"),b.multiline&&(a+="m"),b.unicode&&(a+="u"),b.sticky&&(a+="y"),a}},function(i,j,b){b(191);var f=b(10),g=b(189),h=b(4),c="toString",d=/./[c],e=function(a){b(16)(RegExp.prototype,c,a,!0)};b(5)(function(){return"/a/b"!=d.call({source:"a",flags:"b"})})?e(function toString(){var b=f(this);return"/".concat(b.source,"/","flags"in b?b.flags:!h&&b instanceof RegExp?g.call(b):a)}):d.name!=c&&e(function toString(){return d.call(this)})},function(b,c,a){a(4)&&"g"!=/./g.flags&&a(9).f(RegExp.prototype,"flags",{configurable:!0,get:a(189)})},function(c,d,b){b(193)("match",1,function(c,b,d){return[function match(d){var e=c(this),f=d==a?a:d[b];return f!==a?f.call(d,e):new RegExp(d)[b](String(e))},d]})},function(b,h,a){var c=a(8),d=a(16),e=a(5),f=a(33),g=a(23);b.exports=function(a,j,k){var b=g(a),h=k(f,b,""[a]),l=h[0],i=h[1];e(function(){var c={};return c[b]=function(){return 7},7!=""[a](c)})&&(d(String.prototype,a,l),c(RegExp.prototype,b,2==j?function(a,b){return i.call(a,this,b)}:function(a){return i.call(a,this)}))}},function(c,d,b){b(193)("replace",2,function(c,d,b){return[function replace(e,f){var g=c(this),h=e==a?a:e[d];return h!==a?h.call(e,g,f):b.call(String(g),e,f)},b]})},function(c,d,b){b(193)("search",1,function(c,b,d){return[function search(d){var e=c(this),f=d==a?a:d[b];return f!==a?f.call(d,e):new RegExp(d)[b](String(e))},d]})},function(c,d,b){b(193)("split",2,function(i,j,e){var k=b(129),f=e,l=[].push,d="split",c="length",g="lastIndex";if("c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[c]||2!="ab"[d](/(?:ab)*/)[c]||4!="."[d](/(.?)(.?)/)[c]||"."[d](/()()/)[c]>1||""[d](/.?/)[c]){var h=/()??/.exec("")[1]===a;e=function(d,o){var i=String(this);if(d===a&&0===o)return[];if(!k(d))return f.call(i,d,o);var s,b,p,t,n,e=[],r=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(d.sticky?"y":""),m=0,q=o===a?4294967295:o>>>0,j=new RegExp(d.source,r+"g");for(h||(s=new RegExp("^"+j.source+"$(?!\\s)",r));(b=j.exec(i))&&(p=b.index+b[0][c],!(p>m&&(e.push(i.slice(m,b.index)),!h&&b[c]>1&&b[0].replace(s,function(){for(n=1;arguments[c]-2>n;n++)arguments[n]===a&&(b[n]=a)}),b[c]>1&&i[c]>b.index&&l.apply(e,b.slice(1)),t=b[0][c],m=p,e[c]>=q)));)j[g]===b.index&&j[g]++;return m===i[c]?!t&&j.test("")||e.push(""):e.push(i.slice(m)),e[c]>q?e.slice(0,q):e}}else"0"[d](a,0)[c]&&(e=function(b,c){return b===a&&0===c?[]:f.call(this,b,c)});return[function split(b,c){var d=i(this),f=b==a?a:b[j];return f!==a?f.call(b,d,c):e.call(String(d),b,c)},e]})},function(K,J,b){var m,v,w,E=b(26),e=b(2),g=b(18),D=b(73),c=b(6),I=b(11),s=(b(10),b(19)),C=b(84),x=b(198),G=(b(71).set,b(199)),B=b(200).set,u=b(201)(),f="Promise",t=e.TypeError,n=e.process,d=e[f],n=e.process,k="process"==D(n),l=function(){},j=!!function(){try{var a=d.resolve(1),c=(a.constructor={})[b(23)("species")]=function(a){a(l,l)};return(k||"function"==typeof PromiseRejectionEvent)&&a.then(l)instanceof c}catch(e){}}(),z=function(a,b){return a===b||a===d&&b===w},A=function(a){var b;return I(a)&&"function"==typeof(b=a.then)?b:!1},i=function(a){return z(d,a)?new y(a):new v(a)},y=v=function(d){var b,c;this.promise=new d(function(d,e){if(b!==a||c!==a)throw t("Bad Promise constructor");b=d,c=e}),this.resolve=s(b),this.reject=s(c)},p=function(a){try{a()}catch(b){return{error:b}}},q=function(a,c){if(!a._n){a._n=!0;var b=a._c;u(function(){for(var d=a._v,e=1==a._s,f=0,g=function(b){var c,i,h=e?b.ok:b.fail,j=b.resolve,f=b.reject,g=b.domain;try{h?(e||(2==a._h&&H(a),a._h=1),h===!0?c=d:(g&&g.enter(),c=h(d),g&&g.exit()),c===b.promise?f(t("Promise-chain cycle")):(i=A(c))?i.call(c,j,f):j(c)):f(d)}catch(k){f(k)}};b.length>f;)g(b[f++]);a._c=[],a._n=!1,c&&!a._h&&F(a)})}},F=function(b){B.call(e,function(){var c,g,d,f=b._v;if(o(b)&&(c=p(function(){k?n.emit("unhandledRejection",f,b):(g=e.onunhandledrejection)?g({promise:b,reason:f}):(d=e.console)&&d.error&&d.error("Unhandled promise rejection",f)}),b._h=k||o(b)?2:1),b._a=a,c)throw c.error})},o=function(a){if(1==a._h)return!1;for(var b,c=a._a||a._c,d=0;c.length>d;)if(b=c[d++],b.fail||!o(b.promise))return!1;return!0},H=function(a){B.call(e,function(){var b;k?n.emit("rejectionHandled",a):(b=e.onrejectionhandled)&&b({promise:a,reason:a._v})})},h=function(b){var a=this;a._d||(a._d=!0,a=a._w||a,a._v=b,a._s=2,a._a||(a._a=a._c.slice()),q(a,!0))},r=function(b){var c,a=this;if(!a._d){a._d=!0,a=a._w||a;try{if(a===b)throw t("Promise can't be resolved itself");(c=A(b))?u(function(){var d={_w:a,_d:!1};try{c.call(b,g(r,d,1),g(h,d,1))}catch(e){h.call(d,e)}}):(a._v=b,a._s=1,q(a,!1))}catch(d){h.call({_w:a,_d:!1},d)}}};j||(d=function Promise(a){C(this,d,f,"_h"),s(a),m.call(this);try{a(g(r,this,1),g(h,this,1))}catch(b){h.call(this,b)}},m=function Promise(b){this._c=[],this._a=a,this._s=0,this._d=!1,this._v=a,this._h=0,this._n=!1},m.prototype=b(202)(d.prototype,{then:function then(c,e){var b=i(G(this,d));return b.ok="function"==typeof c?c:!0,b.fail="function"==typeof e&&e,b.domain=k?n.domain:a,this._c.push(b),this._a&&this._a.push(b),this._s&&q(this,!1),b.promise},"catch":function(b){return this.then(a,b)}}),y=function(){var a=new m;this.promise=a,this.resolve=g(r,a,1),this.reject=g(h,a,1)}),c(c.G+c.W+c.F*!j,{Promise:d}),b(22)(d,f),b(187)(f),w=b(7)[f],c(c.S+c.F*!j,f,{reject:function reject(b){var a=i(this),c=a.reject;return c(b),a.promise}}),c(c.S+c.F*(E||!j),f,{resolve:function resolve(a){if(a instanceof d&&z(a.constructor,this))return a;var b=i(this),c=b.resolve;return c(a),b.promise}}),c(c.S+c.F*!(j&&b(158)(function(a){d.all(a)["catch"](l)})),f,{all:function all(g){var c=this,b=i(c),d=b.resolve,e=b.reject,f=p(function(){var b=[],h=0,f=1;x(g,!1,function(i){var j=h++,g=!1;b.push(a),f++,c.resolve(i).then(function(a){g||(g=!0,b[j]=a,--f||d(b))},e)}),--f||d(b)});return f&&e(f.error),b.promise},race:function race(e){var b=this,a=i(b),c=a.reject,d=p(function(){x(e,!1,function(d){b.resolve(d).then(a.resolve,c)})});return d&&c(d.error),a.promise}})},function(f,d,a){var j=a(18),e=a(154),k=a(155),g=a(10),h=a(35),i=a(157),c={},b={},d=f.exports=function(d,m,t,r,s){var q,l,n,a,o=s?function(){return d}:i(d),p=j(t,r,m?2:1),f=0;if("function"!=typeof o)throw TypeError(d+" is not iterable!");if(k(o)){for(q=h(d.length);q>f;f++)if(a=m?p(g(l=d[f])[0],l[1]):p(d[f]),a===c||a===b)return a}else for(n=o.call(d);!(l=n.next()).done;)if(a=e(n,p,l.value,m),a===c||a===b)return a};d.BREAK=c,d.RETURN=b},function(d,g,b){var c=b(10),e=b(19),f=b(23)("species");d.exports=function(g,h){var b,d=c(g).constructor;return d===a||(b=c(d)[f])==a?h:e(b)}},function(s,t,b){var c,g,f,k=b(18),r=b(76),n=b(46),p=b(13),a=b(2),l=a.process,h=a.setImmediate,i=a.clearImmediate,o=a.MessageChannel,j=0,d={},q="onreadystatechange",e=function(){var a=+this;if(d.hasOwnProperty(a)){var b=d[a];delete d[a],b()}},m=function(a){e.call(a.data)};h&&i||(h=function setImmediate(a){for(var b=[],e=1;arguments.length>e;)b.push(arguments[e++]);return d[++j]=function(){r("function"==typeof a?a:Function(a),b)},c(j),j},i=function clearImmediate(a){delete d[a]},"process"==b(32)(l)?c=function(a){l.nextTick(k(e,a,1))}:o?(g=new o,f=g.port2,g.port1.onmessage=m,c=k(f.postMessage,f,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(c=function(b){a.postMessage(b+"","*")},a.addEventListener("message",m,!1)):c=q in p("script")?function(a){n.appendChild(p("script"))[q]=function(){n.removeChild(this),e.call(a)}}:function(a){setTimeout(k(e,a,1),0)}),s.exports={set:h,clear:i}},function(h,j,c){var b=c(2),i=c(200).set,f=b.MutationObserver||b.WebKitMutationObserver,d=b.process,e=b.Promise,g="process"==c(32)(d);h.exports=function(){var c,j,h,k=function(){var b,e;for(g&&(b=d.domain)&&b.exit();c;){e=c.fn,c=c.next;try{e()}catch(f){throw c?h():j=a,f}}j=a,b&&b.enter()};if(g)h=function(){d.nextTick(k)};else if(f){var l=!0,m=document.createTextNode("");new f(k).observe(m,{characterData:!0}),h=function(){m.data=l=!l}}else if(e&&e.resolve){var n=e.resolve();h=function(){n.then(k)}}else h=function(){i.call(b,k)};return function(d){var b={fn:d,next:a};j&&(j.next=b),c||(c=b,h()),j=b}}},function(a,d,b){var c=b(16);a.exports=function(a,b,e){for(var d in b)c(a,d,b[d],e);return a}},function(d,e,c){var b=c(204);d.exports=c(205)("Map",function(b){return function Map(){return b(this,arguments.length>0?arguments[0]:a)}},{get:function get(c){var a=b.getEntry(this,c);return a&&a.v},set:function set(a,c){return b.def(this,0===a?0:a,c)}},b,!0)},function(i,r,b){var j=b(9).f,m=b(44),o=(b(8),b(202)),p=b(18),f=b(84),q=b(33),k=b(198),l=b(135),e=b(185),n=b(187),g=b(4),h=b(20).fastKey,c=g?"_s":"size",d=function(b,c){var a,d=h(c);if("F"!==d)return b._i[d];for(a=b._f;a;a=a.n)if(a.k==c)return a};i.exports={getConstructor:function(e,h,i,l){var b=e(function(d,e){f(d,b,h,"_i"),d._i=m(null),d._f=a,d._l=a,d[c]=0,e!=a&&k(e,i,d[l],d)});return o(b.prototype,{clear:function clear(){for(var d=this,e=d._i,b=d._f;b;b=b.n)b.r=!0,b.p&&(b.p=b.p.n=a),delete e[b.i];d._f=d._l=a,d[c]=0},"delete":function(g){var b=this,a=d(b,g);if(a){var e=a.n,f=a.p;delete b._i[a.i],a.r=!0,f&&(f.n=e),e&&(e.p=f),b._f==a&&(b._f=e),b._l==a&&(b._l=f),b[c]--}return!!a},forEach:function forEach(d){f(this,b,"forEach");for(var c,e=p(d,arguments.length>1?arguments[1]:a,3);c=c?c.n:this._f;)for(e(c.v,c.k,this);c&&c.r;)c=c.p},has:function has(a){return!!d(this,a)}}),g&&j(b.prototype,"size",{get:function(){return q(this[c])}}),b},def:function(b,f,j){var g,i,e=d(b,f);return e?e.v=j:(b._l=e={i:i=h(f,!0),k:f,v:j,p:g=b._l,n:a,r:!1},b._f||(b._f=e),g&&(g.n=e),b[c]++,"F"!==i&&(b._i[i]=e)),b},getEntry:d,setStrong:function(d,b,c){l(d,b,function(b,c){this._t=b,this._k=c,this._l=a},function(){for(var c=this,d=c._k,b=c._l;b&&b.r;)b=b.p;return c._t&&(c._l=b=b?b.n:c._t._f)?"keys"==d?e(0,b.k):"values"==d?e(0,b.v):e(0,[b.k,b.v]):(c._t=a,e(1))},c?"entries":"values",!c,!0),n(b)}}},function(m,p,b){var l=b(2),c=b(6),g=b(16),h=b(202),f=b(20),j=b(198),k=b(84),d=b(11),e=b(5),n=b(158),i=b(22),o=b(80);m.exports=function(q,y,A,x,r,m){var u=l[q],b=u,s=r?"set":"add",p=b&&b.prototype,w={},t=function(b){var c=p[b];g(p,b,"delete"==b?function(a){return m&&!d(a)?!1:c.call(this,0===a?0:a)}:"has"==b?function has(a){return m&&!d(a)?!1:c.call(this,0===a?0:a)}:"get"==b?function get(b){return m&&!d(b)?a:c.call(this,0===b?0:b)}:"add"==b?function add(a){return c.call(this,0===a?0:a),this}:function set(a,b){return c.call(this,0===a?0:a,b),this})};if("function"==typeof b&&(m||p.forEach&&!e(function(){(new b).entries().next()}))){var v=new b,B=v[s](m?{}:-0,1)!=v,C=e(function(){v.has(1)}),D=n(function(a){new b(a)}),z=!m&&e(function(){for(var c=new b,a=5;a--;)c[s](a,a);return!c.has(-0)});D||(b=y(function(d,e){k(d,b,q);var c=o(new u,d,b);return e!=a&&j(e,r,c[s],c),c}),b.prototype=p,p.constructor=b),(C||z)&&(t("delete"),t("has"),r&&t("get")),(z||B)&&t(s),m&&p.clear&&delete p.clear}else b=x.getConstructor(y,q,r,s),h(b.prototype,A),f.NEED=!0;return i(b,q),w[q]=b,c(c.G+c.W+c.F*(b!=u),w),m||x.setStrong(b,q,r),b}},function(d,e,b){var c=b(204);d.exports=b(205)("Set",function(b){return function Set(){return b(this,arguments.length>0?arguments[0]:a)}},{add:function add(a){return c.def(this,a=0===a?0:a,a)}},c)},function(q,r,b){var d,p=b(165)(0),o=b(16),h=b(20),n=b(67),c=b(208),j=b(11),k=(b(3),h.getWeak),l=Object.isExtensible,m=c.ufstore,i={},g=function(b){return function WeakMap(){return b(this,arguments.length>0?arguments[0]:a)}},f={get:function get(b){if(j(b)){var c=k(b);return c===!0?m(this).get(b):c?c[this._i]:a}},set:function set(a,b){return c.def(this,a,b)}},e=q.exports=b(205)("WeakMap",g,f,c,!0,!0);7!=(new e).set((Object.freeze||Object)(i),7).get(i)&&(d=c.getConstructor(g),n(d.prototype,f),h.NEED=!0,p(["delete","has","get","set"],function(a){var b=e.prototype,c=b[a];o(b,a,function(b,e){if(j(b)&&!l(b)){this._f||(this._f=new d);var f=this._f[a](b,e);return"set"==a?this:f}return c.call(this,b,e)})}))},function(j,r,b){var l=b(202),e=b(20).getWeak,k=b(10),f=b(11),p=b(84),q=b(198),h=b(165),i=b(3),m=h(5),n=h(6),o=0,c=function(a){return a._l||(a._l=new g)},g=function(){this.a=[]},d=function(a,b){return m(a.a,function(a){return a[0]===b})};g.prototype={get:function(b){var a=d(this,b);return a?a[1]:void 0},has:function(a){return!!d(this,a)},set:function(a,b){var c=d(this,a);c?c[1]=b:this.a.push([a,b])},"delete":function(b){var a=n(this.a,function(a){return a[0]===b});return~a&&this.a.splice(a,1),!!~a}},j.exports={getConstructor:function(d,g,h,j){var b=d(function(c,d){p(c,b,g,"_i"),c._i=o++,c._l=a,d!=a&&q(d,h,c[j],c)});return l(b.prototype,{"delete":function(b){if(!f(b))return!1;var a=e(b);return a===!0?c(this)["delete"](b):a&&i(a,this._i)&&delete a[this._i]},has:function has(a){if(!f(a))return!1;var b=e(a);return b===!0?c(this).has(a):b&&i(b,this._i)}}),b},def:function(a,b,d){var f=e(k(b),!0);return f===!0?c(a).set(b,d):f[a._i]=d,a},ufstore:c}},function(d,e,b){var c=b(208);b(205)("WeakSet",function(b){return function WeakSet(){return b(this,arguments.length>0?arguments[0]:a)}},{add:function add(a){return c.def(this,a,!0)}},c,!1,!0)},function(f,g,a){var b=a(6),c=a(19),d=a(10),e=Function.apply;b(b.S,"Reflect",{apply:function apply(a,b,f){return e.call(c(a),b,d(f))}})},function(h,i,a){var b=a(6),e=a(44),c=a(19),f=a(10),d=a(11),g=a(75);b(b.S+b.F*a(5)(function(){function F(){}return!(Reflect.construct(function(){},[],F)instanceof F)}),"Reflect",{construct:function construct(b,a){c(b),f(a);var i=3>arguments.length?b:c(arguments[2]);if(b==i){switch(a.length){case 0:return new b;case 1:return new b(a[0]);case 2:return new b(a[0],a[1]);case 3:return new b(a[0],a[1],a[2]);case 4:return new b(a[0],a[1],a[2],a[3])}var h=[null];return h.push.apply(h,a),new(g.apply(b,h))}var j=i.prototype,k=e(d(j)?j:Object.prototype),l=Function.apply.call(b,k,a);return d(l)?l:k}})},function(f,g,a){var c=a(9),b=a(6),d=a(10),e=a(14);b(b.S+b.F*a(5)(function(){Reflect.defineProperty(c.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(b,a,f){d(b),a=e(a,!0),d(f);try{return c.f(b,a,f),!0}catch(g){return!1}}})},function(e,f,a){var b=a(6),c=a(49).f,d=a(10);b(b.S,"Reflect",{deleteProperty:function deleteProperty(a,b){var e=c(d(a),b);return e&&!e.configurable?!1:delete a[b]}})},function(f,g,b){var c=b(6),e=b(10),d=function(a){this._t=e(a),this._i=0;var b,c=this._k=[];for(b in a)c.push(b)};b(137)(d,"Object",function(){var c,b=this,d=b._k;do if(b._i>=d.length)return{value:a,done:!0};while(!((c=d[b._i++])in b._t));return{value:c,done:!1}}),c(c.S,"Reflect",{enumerate:function enumerate(a){return new d(a)}})},function(i,j,b){function get(b,i){var c,k,j=3>arguments.length?b:arguments[2];return h(b)===j?b[i]:(c=d.f(b,i))?f(c,"value")?c.value:c.get!==a?c.get.call(j):a:g(k=e(b))?get(k,i,j):void 0}var d=b(49),e=b(57),f=b(3),c=b(6),g=b(11),h=b(10);c(c.S,"Reflect",{get:get})},function(e,f,a){var c=a(49),b=a(6),d=a(10);b(b.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(a,b){return c.f(d(a),b)}})},function(e,f,a){var b=a(6),c=a(57),d=a(10);b(b.S,"Reflect",{getPrototypeOf:function getPrototypeOf(a){return c(d(a))}})},function(c,d,b){var a=b(6);a(a.S,"Reflect",{has:function has(a,b){return b in a}})},function(e,f,a){var b=a(6),d=a(10),c=Object.isExtensible;b(b.S,"Reflect",{isExtensible:function isExtensible(a){return d(a),c?c(a):!0}})},function(c,d,a){var b=a(6);b(b.S,"Reflect",{ownKeys:a(221)})},function(c,g,a){var d=a(48),e=a(41),f=a(10),b=a(2).Reflect;c.exports=b&&b.ownKeys||function ownKeys(a){var b=d.f(f(a)),c=e.f;return c?b.concat(c(a)):b}},function(e,f,a){var b=a(6),d=a(10),c=Object.preventExtensions;b(b.S,"Reflect",{preventExtensions:function preventExtensions(a){d(a);try{return c&&c(a),!0}catch(b){return!1}}})},function(l,k,b){function set(l,k,m){var n,o,e=4>arguments.length?l:arguments[3],b=d.f(g(l),k);if(!b){if(c(o=j(l)))return set(o,k,m,e);b=f(0)}return h(b,"value")?b.writable!==!1&&c(e)?(n=d.f(e,k)||f(0),n.value=m,i.f(e,k,n),!0):!1:b.set===a?!1:(b.set.call(e,m),!0)}var i=b(9),d=b(49),j=b(57),h=b(3),e=b(6),f=b(15),g=b(10),c=b(11);e(e.S,"Reflect",{set:set})},function(d,e,b){var c=b(6),a=b(71);a&&c(c.S,"Reflect",{setPrototypeOf:function setPrototypeOf(b,c){a.check(b,c);try{return a.set(b,c),!0}catch(d){return!1}}})},function(c,d,b){var a=b(6);a(a.S,"Date",{now:function(){return(new Date).getTime()}})},function(e,f,a){var b=a(6),c=a(56),d=a(14);b(b.P+b.F*a(5)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(e){var a=c(this),b=d(a);return"number"!=typeof b||isFinite(b)?a.toISOString():null}})},function(f,g,c){var b=c(6),d=c(5),e=Date.prototype.getTime,a=function(a){return a>9?a:"0"+a};b(b.P+b.F*(d(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!d(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function toISOString(){if(!isFinite(e.call(this)))throw RangeError("Invalid time value");var b=this,c=b.getUTCFullYear(),d=b.getUTCMilliseconds(),f=0>c?"-":c>9999?"+":"";return f+("00000"+Math.abs(c)).slice(f?-6:-4)+"-"+a(b.getUTCMonth()+1)+"-"+a(b.getUTCDate())+"T"+a(b.getUTCHours())+":"+a(b.getUTCMinutes())+":"+a(b.getUTCSeconds())+"."+(d>99?d:"0"+a(d))+"Z"}})},function(g,h,d){var a=Date.prototype,b="Invalid Date",c="toString",e=a[c],f=a.getTime;new Date(NaN)+""!=b&&d(16)(a,c,function toString(){var a=f.call(this);return a===a?e.call(this):b})},function(d,e,a){var b=a(23)("toPrimitive"),c=Date.prototype;b in c||a(8)(c,b,a(230))},function(c,f,a){var d=a(10),e=a(14),b="number";c.exports=function(a){if("string"!==a&&a!==b&&"default"!==a)throw TypeError("Incorrect hint");return e(d(this),a!=b)}},function(s,r,b){var c=b(6),f=b(232),j=b(233),g=b(10),m=b(37),n=b(35),p=b(11),i=(b(23)("typed_array"),b(2).ArrayBuffer),q=b(199),d=j.ArrayBuffer,k=j.DataView,l=f.ABV&&i.isView,h=d.prototype.slice,o=f.VIEW,e="ArrayBuffer";c(c.G+c.W+c.F*(i!==d),{ArrayBuffer:d}),c(c.S+c.F*!f.CONSTR,e,{isView:function isView(a){return l&&l(a)||p(a)&&o in a}}),c(c.P+c.U+c.F*b(5)(function(){return!new d(2).slice(1,a).byteLength}),e,{slice:function slice(f,b){if(h!==a&&b===a)return h.call(g(this),f);for(var c=g(this).byteLength,e=m(f,c),i=m(b===a?c:b,c),j=new(q(this,d))(n(i-e)),l=new k(this),o=new k(j),p=0;i>e;)o.setUint8(p++,l.getUint8(e++));return j}}),b(187)(e)},function(k,n,a){for(var b,c=a(2),e=a(8),f=a(17),d=f("typed_array"),g=f("view"),h=!(!c.ArrayBuffer||!c.DataView),i=h,j=0,l=9,m="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l>j;)(b=c[m[j++]])?(e(b.prototype,d,!0),e(b.prototype,g,!0)):i=!1;k.exports={ABV:h,CONSTR:i,TYPED:d,VIEW:g}},function(da,F,c){var m=c(2),q=c(4),aa=c(26),O=c(232),N=c(8),M=c(202),E=c(5),u=c(84),t=c(36),Q=c(35),ca=c(48).f,W=c(9).f,$=c(181),D=c(22),r="ArrayBuffer",k="DataView",h="prototype",G="Wrong length!",B="Wrong index!",b=m[r],d=m[k],j=m.Math,l=m.RangeError,s=m.Infinity,n=b,ba=j.abs,e=j.pow,X=j.floor,Y=j.log,Z=j.LN2,A="buffer",v="byteLength",C="byteOffset",w=q?"_b":A,i=q?"_l":v,x=q?"_o":C,z=function(a,c,l){var b,d,g,h=Array(l),i=8*l-c-1,j=(1<<i)-1,f=j>>1,m=23===c?e(2,-24)-e(2,-77):0,k=0,n=0>a||0===a&&0>1/a?1:0;for(a=ba(a),a!=a||a===s?(d=a!=a?1:0,b=j):(b=X(Y(a)/Z),a*(g=e(2,-b))<1&&(b--,g*=2),a+=b+f>=1?m/g:m*e(2,1-f),a*g>=2&&(b++,g/=2),b+f>=j?(d=0,b=j):b+f>=1?(d=(a*g-1)*e(2,c),b+=f):(d=a*e(2,f-1)*e(2,c),b=0));c>=8;h[k++]=255&d,d/=256,c-=8);for(b=b<<c|d,i+=c;i>0;h[k++]=255&b,b/=256,i-=8);return h[--k]|=128*n,h},H=function(h,g,k){var c,j=8*k-g-1,l=(1<<j)-1,i=l>>1,b=j-7,d=k-1,f=h[d--],a=127&f;for(f>>=7;b>0;a=256*a+h[d],d--,b-=8);for(c=a&(1<<-b)-1,a>>=-b,b+=g;b>0;c=256*c+h[d],d--,b-=8);if(0===a)a=1-i;else{if(a===l)return c?NaN:f?-s:s;c+=e(2,g),a-=i}return(f?-1:1)*c*e(2,a-g)},I=function(a){return a[3]<<24|a[2]<<16|a[1]<<8|a[0]},J=function(a){return[255&a]},K=function(a){return[255&a,a>>8&255]},L=function(a){return[255&a,a>>8&255,a>>16&255,a>>24&255]},U=function(a){return z(a,52,8)},V=function(a){return z(a,23,4)},o=function(a,b,c){W(a[h],b,{get:function(){return this[c]}})},g=function(b,c,g,h){var d=+g,a=t(d);if(d!=a||0>a||a+c>b[i])throw l(B);var j=b[w]._b,e=a+b[x],f=j.slice(e,e+c);return h?f:f.reverse()},f=function(c,d,j,h,f,g){var e=+j,b=t(e);if(e!=b||0>b||b+d>c[i])throw l(B);for(var k=c[w]._b,m=b+c[x],n=h(+f),a=0;d>a;a++)k[m+a]=n[g?a:d-a-1]},P=function(d,e){u(d,b,r);var a=+e,c=Q(a);if(a!=c)throw l(G);return c};if(O.ABV){if(!E(function(){new b})||!E(function(){new b(.5)})){b=function ArrayBuffer(a){return new n(P(this,a))};for(var y,_=b[h]=n[h],R=ca(n),S=0;R.length>S;)(y=R[S++])in b||N(b,y,n[y]);aa||(_.constructor=b)}var p=new d(new b(2)),T=d[h].setInt8;p.setInt8(0,2147483648),p.setInt8(1,2147483649),!p.getInt8(0)&&p.getInt8(1)||M(d[h],{setInt8:function setInt8(a,b){T.call(this,a,b<<24>>24)},setUint8:function setUint8(a,b){T.call(this,a,b<<24>>24)}},!0)}else b=function ArrayBuffer(b){var a=P(this,b);this._b=$.call(Array(a),0),this[i]=a},d=function DataView(f,h,c){u(this,d,k),u(f,b,k);var g=f[i],e=t(h);if(0>e||e>g)throw l("Wrong offset!");if(c=c===a?g-e:Q(c),e+c>g)throw l(G);this[w]=f,this[x]=e,this[i]=c},q&&(o(b,v,"_l"),o(d,A,"_b"),o(d,v,"_l"),o(d,C,"_o")),M(d[h],{getInt8:function getInt8(a){return g(this,1,a)[0]<<24>>24},getUint8:function getUint8(a){return g(this,1,a)[0]},getInt16:function getInt16(b){var a=g(this,2,b,arguments[1]);return(a[1]<<8|a[0])<<16>>16},getUint16:function getUint16(b){var a=g(this,2,b,arguments[1]);return a[1]<<8|a[0]},getInt32:function getInt32(a){return I(g(this,4,a,arguments[1]))},getUint32:function getUint32(a){return I(g(this,4,a,arguments[1]))>>>0},getFloat32:function getFloat32(a){return H(g(this,4,a,arguments[1]),23,4)},getFloat64:function getFloat64(a){return H(g(this,8,a,arguments[1]),52,8)},setInt8:function setInt8(a,b){f(this,1,a,J,b)},setUint8:function setUint8(a,b){f(this,1,a,J,b)},setInt16:function setInt16(a,b){f(this,2,a,K,b,arguments[2])},setUint16:function setUint16(a,b){f(this,2,a,K,b,arguments[2])},setInt32:function setInt32(a,b){f(this,4,a,L,b,arguments[2])},setUint32:function setUint32(a,b){f(this,4,a,L,b,arguments[2])},setFloat32:function setFloat32(a,b){f(this,4,a,V,b,arguments[2])},setFloat64:function setFloat64(a,b){f(this,8,a,U,b,arguments[2])}});D(b,r),D(d,k),N(d[h],O.VIEW,!0),F[r]=b,F[k]=d},function(c,d,b){var a=b(6);a(a.G+a.W+a.F*!b(232).ABV,{DataView:b(233).DataView})},function(b,c,a){a(236)("Int8",1,function(a){return function Int8Array(b,c,d){return a(this,b,c,d)}})},function(N,Wa,b){if(b(4)){var T=b(26),y=b(2),h=b(5),c=b(6),x=b(232),ca=b(233),Ka=b(18),da=b(84),Ha=b(15),e=b(8),D=b(202),Ga=(b(91),b(36)),q=b(35),fa=b(37),ia=b(14),s=b(3),ya=b(69),ka=b(73),j=b(11),ma=b(56),ta=b(155),sa=b(44),ra=b(57),B=b(48).f,Ra=(b(237),b(157)),Y=b(17),V=b(23),i=b(165),U=b(34),H=b(199),I=b(184),Sa=b(136),Ta=b(158),Qa=b(187),Va=b(181),qa=b(178),O=b(9),P=b(49),p=O.f,Ua=P.f,k=y.RangeError,J=y.TypeError,l=y.Uint8Array,E="ArrayBuffer",W="Shared"+E,X="BYTES_PER_ELEMENT",r="prototype",g=Array[r],C=ca.ArrayBuffer,Pa=ca.DataView,aa=i(0),Oa=i(2),La=i(3),Ja=i(4),Ia=i(5),oa=i(6),Ea=U(!0),Ca=U(!1),Aa=I.values,xa=I.keys,wa=I.entries,va=g.lastIndexOf,ua=g.reduce,pa=g.reduceRight,na=g.join,Fa=g.sort,M=g.slice,o=g.toString,K=g.toLocaleString,G=V("iterator"),t=V("toStringTag"),la=Y("typed_constructor"),w=Y("def_constructor"),ja=x.CONSTR,m=x.TYPED,za=x.VIEW,n="Wrong length!",Ba=i(1,function(a,b){return u(H(a,a[w]),b)}),ha=h(function(){return 1===new l(new Uint16Array([1]).buffer)[0]}),Da=!!l&&!!l[r].set&&h(function(){new l(1).set({})}),ga=function(b,d){if(b===a)throw J(n);var e=+b,c=q(b);if(d&&!ya(e,c))throw k(n);return c},A=function(b,c){var a=Ga(b);if(0>a||a%c)throw k("Wrong offset!");return a},d=function(a){if(j(a)&&m in a)return a;throw J(a+" is not a typed array!")},u=function(a,b){if(!(j(a)&&la in a))throw J("It is not a typed array constructor!");return new a(b)},ea=function(a,b){return F(H(a,a[w]),b)},F=function(e,b){for(var a=0,c=b.length,d=u(e,c);c>a;)d[a]=b[a++];return d},v=function(a,b,c){p(a,b,{get:function(){return this._d[c]}})},L=function from(m){var b,f,g,h,j,i,c=ma(m),k=arguments.length,d=k>1?arguments[1]:a,l=d!==a,e=Ra(c);if(e!=a&&!ta(e)){for(i=e.call(c),g=[],b=0;!(j=i.next()).done;b++)g.push(j.value);c=g}for(l&&k>2&&(d=Ka(d,arguments[2],2)),b=0,f=q(c.length),h=u(this,f);f>b;b++)h[b]=l?d(c[b],b):c[b];return h},Ma=function of(){for(var a=0,b=arguments.length,c=u(this,b);b>a;)c[a]=arguments[a++];return c},Na=!!l&&h(function(){K.call(new l(1))}),ba=function toLocaleString(){return K.apply(Na?M.call(d(this)):d(this),arguments)},_={copyWithin:function copyWithin(b,c){return qa.call(d(this),b,c,arguments.length>2?arguments[2]:a)},every:function every(b){return Ja(d(this),b,arguments.length>1?arguments[1]:a)},fill:function fill(a){return Va.apply(d(this),arguments)},filter:function filter(b){return ea(this,Oa(d(this),b,arguments.length>1?arguments[1]:a))},find:function find(b){return Ia(d(this),b,arguments.length>1?arguments[1]:a)},findIndex:function findIndex(b){return oa(d(this),b,arguments.length>1?arguments[1]:a)},forEach:function forEach(b){aa(d(this),b,arguments.length>1?arguments[1]:a)},indexOf:function indexOf(b){return Ca(d(this),b,arguments.length>1?arguments[1]:a)},includes:function includes(b){return Ea(d(this),b,arguments.length>1?arguments[1]:a)},join:function join(a){return na.apply(d(this),arguments)},lastIndexOf:function lastIndexOf(a){return va.apply(d(this),arguments)},map:function map(b){return Ba(d(this),b,arguments.length>1?arguments[1]:a);
},reduce:function reduce(a){return ua.apply(d(this),arguments)},reduceRight:function reduceRight(a){return pa.apply(d(this),arguments)},reverse:function reverse(){for(var e,a=this,b=d(a).length,f=Math.floor(b/2),c=0;f>c;)e=a[c],a[c++]=a[--b],a[b]=e;return a},some:function some(b){return La(d(this),b,arguments.length>1?arguments[1]:a)},sort:function sort(a){return Fa.call(d(this),a)},subarray:function subarray(g,e){var b=d(this),c=b.length,f=fa(g,c);return new(H(b,b[w]))(b.buffer,b.byteOffset+f*b.BYTES_PER_ELEMENT,q((e===a?c:fa(e,c))-f))}},$=function slice(a,b){return ea(this,M.call(d(this),a,b))},Z=function set(f){d(this);var b=A(arguments[1],1),g=this.length,c=ma(f),e=q(c.length),a=0;if(e+b>g)throw k(n);for(;e>a;)this[b+a]=c[a++]},z={entries:function entries(){return wa.call(d(this))},keys:function keys(){return xa.call(d(this))},values:function values(){return Aa.call(d(this))}},S=function(b,a){return j(b)&&b[m]&&"symbol"!=typeof a&&a in b&&String(+a)==String(a)},R=function getOwnPropertyDescriptor(b,a){return S(b,a=ia(a,!0))?Ha(2,b[a]):Ua(b,a)},Q=function defineProperty(b,c,a){return!(S(b,c=ia(c,!0))&&j(a)&&s(a,"value"))||s(a,"get")||s(a,"set")||a.configurable||s(a,"writable")&&!a.writable||s(a,"enumerable")&&!a.enumerable?p(b,c,a):(b[c]=a.value,b)};ja||(P.f=R,O.f=Q),c(c.S+c.F*!ja,"Object",{getOwnPropertyDescriptor:R,defineProperty:Q}),h(function(){o.call({})})&&(o=K=function toString(){return na.call(this)});var f=D({},_);D(f,z),e(f,G,z.values),D(f,{slice:$,set:Z,constructor:function(){},toString:o,toLocaleString:ba}),v(f,"buffer","b"),v(f,"byteOffset","o"),v(f,"byteLength","l"),v(f,"length","e"),p(f,t,{get:function(){return this[m]}}),N.exports=function(v,i,I,s){s=!!s;var d=v+(s?"Clamped":"")+"Array",S="Uint8Array"!=d,R="get"+v,N="set"+v,b=y[d],l=b||{},K=b&&ra(b),M=!b||!x.ABV,J={},g=b&&b[r],O=function(b,c){var a=b._d;return a.v[R](c*i+a.o,ha)},P=function(c,d,a){var b=c._d;s&&(a=(a=Math.round(a))<0?0:a>255?255:255&a),b.v[N](d*i+b.o,a,ha)},Q=function(b,a){p(b,a,{get:function(){return O(this,a)},set:function(b){return P(this,a,b)},enumerable:!0})};M?(b=I(function(o,c,u,r){da(o,b,d,"_d");var l,f,g,s,t=0,h=0;if(j(c)){if(!(c instanceof C||(s=ka(c))==E||s==W))return m in c?F(b,c):L.call(b,c);l=c,h=A(u,i);var p=c.byteLength;if(r===a){if(p%i)throw k(n);if(f=p-h,0>f)throw k(n)}else if(f=q(r)*i,f+h>p)throw k(n);g=f/i}else g=ga(c,!0),f=g*i,l=new C(f);for(e(o,"_d",{b:l,o:h,l:f,e:g,v:new Pa(l)});g>t;)Q(o,t++)}),g=b[r]=sa(f),e(g,"constructor",b)):Ta(function(a){new b(null),new b(a)},!0)||(b=I(function(h,c,e,f){da(h,b,d);var g;return j(c)?c instanceof C||(g=ka(c))==E||g==W?f!==a?new l(c,A(e,i),f):e!==a?new l(c,A(e,i)):new l(c):m in c?F(b,c):L.call(b,c):new l(ga(c,S))}),aa(K!==Function.prototype?B(l).concat(B(K)):B(l),function(a){a in b||e(b,a,l[a])}),b[r]=g,T||(g.constructor=b));var u=g[G],D=!!u&&("values"==u.name||u.name==a),H=z.values;e(b,la,!0),e(g,m,d),e(g,za,!0),e(g,w,b),(s?new b(1)[t]==d:t in g)||p(g,t,{get:function(){return d}}),J[d]=b,c(c.G+c.W+c.F*(b!=l),J),c(c.S,d,{BYTES_PER_ELEMENT:i,from:L,of:Ma}),X in g||e(g,X,i),c(c.P,d,_),Qa(d),c(c.P+c.F*Da,d,{set:Z}),c(c.P+c.F*!D,d,z),c(c.P+c.F*(g.toString!=o),d,{toString:o}),c(c.P+c.F*h(function(){new b(1).slice()}),d,{slice:$}),c(c.P+c.F*(h(function(){return[1,2].toLocaleString()!=new b([1,2]).toLocaleString()})||!h(function(){g.toLocaleString.call([1,2])})),d,{toLocaleString:ba}),Sa[d]=D?u:H,T||D||e(g,G,H)}}else N.exports=function(){}},function(c,g,b){var d=b(73),e=b(23)("iterator"),f=b(136);c.exports=b(7).isIterable=function(c){var b=Object(c);return b[e]!==a||"@@iterator"in b||f.hasOwnProperty(d(b))}},function(b,c,a){a(236)("Uint8",1,function(a){return function Uint8Array(b,c,d){return a(this,b,c,d)}})},function(b,c,a){a(236)("Uint8",1,function(a){return function Uint8ClampedArray(b,c,d){return a(this,b,c,d)}},!0)},function(b,c,a){a(236)("Int16",2,function(a){return function Int16Array(b,c,d){return a(this,b,c,d)}})},function(b,c,a){a(236)("Uint16",2,function(a){return function Uint16Array(b,c,d){return a(this,b,c,d)}})},function(b,c,a){a(236)("Int32",4,function(a){return function Int32Array(b,c,d){return a(this,b,c,d)}})},function(b,c,a){a(236)("Uint32",4,function(a){return function Uint32Array(b,c,d){return a(this,b,c,d)}})},function(b,c,a){a(236)("Float32",4,function(a){return function Float32Array(b,c,d){return a(this,b,c,d)}})},function(b,c,a){a(236)("Float64",8,function(a){return function Float64Array(b,c,d){return a(this,b,c,d)}})},function(e,f,b){var c=b(6),d=b(34)(!0);c(c.P,"Array",{includes:function includes(b){return d(this,b,arguments.length>1?arguments[1]:a)}}),b(179)("includes")},function(d,e,a){var b=a(6),c=a(126)(!0);b(b.P,"String",{at:function at(a){return c(this,a)}})},function(e,f,b){var c=b(6),d=b(249);c(c.P,"String",{padStart:function padStart(b){return d(this,b,arguments.length>1?arguments[1]:a,!0)}})},function(c,g,b){var d=b(35),e=b(86),f=b(33);c.exports=function(l,m,i,n){var c=String(f(l)),j=c.length,g=i===a?" ":String(i),k=d(m);if(j>=k||""==g)return c;var h=k-j,b=e.call(g,Math.ceil(h/g.length));return b.length>h&&(b=b.slice(0,h)),n?b+c:c+b}},function(e,f,b){var c=b(6),d=b(249);c(c.P,"String",{padEnd:function padEnd(b){return d(this,b,arguments.length>1?arguments[1]:a,!1)}})},function(b,c,a){a(81)("trimLeft",function(a){return function trimLeft(){return a(this,1)}},"trimStart")},function(b,c,a){a(81)("trimRight",function(a){return function trimRight(){return a(this,2)}},"trimEnd")},function(i,j,a){var b=a(6),d=a(33),e=a(35),f=a(129),g=a(189),h=RegExp.prototype,c=function(a,b){this._r=a,this._s=b};a(137)(c,"RegExp String",function next(){var a=this._r.exec(this._s);return{value:a,done:null===a}}),b(b.P,"String",{matchAll:function matchAll(a){if(d(this),!f(a))throw TypeError(a+" is not a regexp!");var j=String(this),b="flags"in h?String(a.flags):g.call(a),i=new RegExp(a.source,~b.indexOf("g")?b:"g"+b);return i.lastIndex=e(a.lastIndex),new c(i,j)}})},function(b,c,a){a(25)("asyncIterator")},function(b,c,a){a(25)("observable")},function(g,h,a){var b=a(6),c=a(221),d=a(30),e=a(49),f=a(156);b(b.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(j){for(var a,b=d(j),k=e.f,g=c(b),h={},i=0;g.length>i;)f(h,a=g[i++],k(b,a));return h}})},function(d,e,a){var b=a(6),c=a(258)(!1);b(b.S,"Object",{values:function values(a){return c(a)}})},function(b,f,a){var c=a(28),d=a(30),e=a(42).f;b.exports=function(a){return function(j){for(var b,f=d(j),g=c(f),k=g.length,h=0,i=[];k>h;)e.call(f,b=g[h++])&&i.push(a?[b,f[b]]:f[b]);return i}}},function(d,e,a){var b=a(6),c=a(258)(!0);b(b.S,"Object",{entries:function entries(a){return c(a)}})},function(f,g,a){var b=a(6),c=a(56),d=a(19),e=a(9);a(4)&&b(b.P+a(261),"Object",{__defineGetter__:function __defineGetter__(a,b){e.f(c(this),a,{get:d(b),enumerable:!0,configurable:!0})}})},function(b,c,a){b.exports=a(26)||!a(5)(function(){var b=Math.random();__defineSetter__.call(null,b,function(){}),delete a(2)[b]})},function(f,g,a){var b=a(6),c=a(56),d=a(19),e=a(9);a(4)&&b(b.P+a(261),"Object",{__defineSetter__:function __defineSetter__(a,b){e.f(c(this),a,{set:d(b),enumerable:!0,configurable:!0})}})},function(g,h,a){var b=a(6),c=a(56),d=a(14),e=a(57),f=a(49).f;a(4)&&b(b.P+a(261),"Object",{__lookupGetter__:function __lookupGetter__(g){var b,a=c(this),h=d(g,!0);do if(b=f(a,h))return b.get;while(a=e(a))}})},function(g,h,a){var b=a(6),c=a(56),d=a(14),e=a(57),f=a(49).f;a(4)&&b(b.P+a(261),"Object",{__lookupSetter__:function __lookupSetter__(g){var b,a=c(this),h=d(g,!0);do if(b=f(a,h))return b.set;while(a=e(a))}})},function(c,d,b){var a=b(6);a(a.P+a.R,"Map",{toJSON:b(266)("Map")})},function(b,e,a){var c=a(73),d=a(267);b.exports=function(a){return function toJSON(){if(c(this)!=a)throw TypeError(a+"#toJSON isn't generic");return d(this)}}},function(a,d,b){var c=b(198);a.exports=function(b,d){var a=[];return c(b,!1,a.push,a,d),a}},function(c,d,b){var a=b(6);a(a.P+a.R,"Set",{toJSON:b(266)("Set")})},function(c,d,a){var b=a(6);b(b.S,"System",{global:a(2)})},function(d,e,a){var b=a(6),c=a(32);b(b.S,"Error",{isError:function isError(a){return"Error"===c(a)}})},function(c,d,b){var a=b(6);a(a.S,"Math",{iaddh:function iaddh(c,d,e,f){var a=c>>>0,g=d>>>0,b=e>>>0;return g+(f>>>0)+((a&b|(a|b)&~(a+b>>>0))>>>31)|0}})},function(c,d,b){var a=b(6);a(a.S,"Math",{isubh:function isubh(c,d,e,f){var a=c>>>0,g=d>>>0,b=e>>>0;return g-(f>>>0)-((~a&b|~(a^b)&a-b>>>0)>>>31)|0}})},function(c,d,b){var a=b(6);a(a.S,"Math",{imulh:function imulh(i,j){var a=65535,e=+i,b=+j,g=e&a,h=b&a,f=e>>16,c=b>>16,d=(f*h>>>0)+(g*h>>>16);return f*c+(d>>16)+((g*c>>>0)+(d&a)>>16)}})},function(c,d,b){var a=b(6);a(a.S,"Math",{umulh:function umulh(i,j){var a=65535,e=+i,b=+j,g=e&a,h=b&a,f=e>>>16,c=b>>>16,d=(f*h>>>0)+(g*h>>>16);return f*c+(d>>>16)+((g*c>>>0)+(d&a)>>>16)}})},function(f,g,b){var a=b(276),c=b(10),d=a.key,e=a.set;a.exp({defineMetadata:function defineMetadata(a,b,f,g){e(a,b,c(f),d(g))}})},function(h,o,c){var e=c(203),f=c(6),g=c(21)("metadata"),d=g.store||(g.store=new(c(207))),b=function(f,g,h){var b=d.get(f);if(!b){if(!h)return a;d.set(f,b=new e)}var c=b.get(g);if(!c){if(!h)return a;b.set(g,c=new e)}return c},j=function(d,e,f){var c=b(e,f,!1);return c===a?!1:c.has(d)},k=function(d,e,f){var c=b(e,f,!1);return c===a?a:c.get(d)},l=function(a,c,d,e){b(d,e,!0).set(a,c)},m=function(d,e){var a=b(d,e,!1),c=[];return a&&a.forEach(function(b,a){c.push(a)}),c},i=function(b){return b===a||"symbol"==typeof b?b:String(b)},n=function(a){f(f.S,"Reflect",a)};h.exports={store:d,map:b,has:j,get:k,set:l,keys:m,key:i,exp:n}},function(h,i,c){var b=c(276),e=c(10),f=b.key,g=b.map,d=b.store;b.exp({deleteMetadata:function deleteMetadata(j,b){var h=3>arguments.length?a:f(arguments[2]),c=g(e(b),h,!1);if(c===a||!c["delete"](j))return!1;if(c.size)return!0;var i=d.get(b);return i["delete"](h),!!i.size||d["delete"](b)}})},function(j,k,c){var b=c(276),e=c(10),f=c(57),g=b.has,h=b.get,i=b.key,d=function(b,c,e){var j=g(b,c,e);if(j)return h(b,c,e);var i=f(c);return null!==i?d(b,i,e):a};b.exp({getMetadata:function getMetadata(b,c){return d(b,e(c),3>arguments.length?a:i(arguments[2]))}})},function(l,k,b){var e=b(206),f=b(267),c=b(276),g=b(10),h=b(57),i=c.keys,j=c.key,d=function(c,g){var a=i(c,g),j=h(c);if(null===j)return a;var b=d(j,g);return b.length?a.length?f(new e(a.concat(b))):b:a};c.exp({getMetadataKeys:function getMetadataKeys(b){return d(g(b),2>arguments.length?a:j(arguments[1]))}})},function(g,h,c){var b=c(276),d=c(10),e=b.get,f=b.key;b.exp({getOwnMetadata:function getOwnMetadata(b,c){return e(b,d(c),3>arguments.length?a:f(arguments[2]))}})},function(g,h,c){var b=c(276),d=c(10),e=b.keys,f=b.key;b.exp({getOwnMetadataKeys:function getOwnMetadataKeys(b){return e(d(b),2>arguments.length?a:f(arguments[1]))}})},function(i,j,b){var c=b(276),e=b(10),f=b(57),g=c.has,h=c.key,d=function(a,b,c){var h=g(a,b,c);if(h)return!0;var e=f(b);return null!==e?d(a,e,c):!1};c.exp({hasMetadata:function hasMetadata(b,c){return d(b,e(c),3>arguments.length?a:h(arguments[2]))}})},function(g,h,c){var b=c(276),d=c(10),e=b.has,f=b.key;b.exp({hasOwnMetadata:function hasOwnMetadata(b,c){return e(b,d(c),3>arguments.length?a:f(arguments[2]))}})},function(h,i,b){var c=b(276),d=b(10),e=b(19),f=c.key,g=c.set;c.exp({metadata:function metadata(b,c){return function decorator(i,h){g(b,c,(h!==a?d:e)(i),f(h))}}})},function(f,g,a){var b=a(6),d=a(201)(),c=a(2).process,e="process"==a(32)(c);b(b.G,{asap:function asap(a){var b=e&&c.domain;d(b?b.bind(a):a)}})},function(w,v,b){var q=b(6),r=b(2),s=b(7),p=b(201)(),k=b(23)("observable"),h=b(19),i=b(10),u=b(84),f=b(202),t=b(8),o=b(198),j=o.RETURN,g=function(b){return null==b?a:h(b)},d=function(b){var c=b._c;c&&(b._c=a,c())},e=function(b){return b._o===a},n=function(b){e(b)||(b._o=a,d(b))},m=function(c,f){i(c),this._c=a,this._o=c,c=new l(this);try{var b=f(c),g=b;null!=b&&("function"==typeof b.unsubscribe?b=function(){g.unsubscribe()}:h(b),this._c=b)}catch(j){return void c.error(j)}e(this)&&d(this)};m.prototype=f({},{unsubscribe:function unsubscribe(){n(this)}});var l=function(a){this._s=a};l.prototype=f({},{next:function next(d){var a=this._s;if(!e(a)){var b=a._o;try{var c=g(b.next);if(c)return c.call(b,d)}catch(f){try{n(a)}finally{throw f}}}},error:function error(b){var c=this._s;if(e(c))throw b;var f=c._o;c._o=a;try{var h=g(f.error);if(!h)throw b;b=h.call(f,b)}catch(i){try{d(c)}finally{throw i}}return d(c),b},complete:function complete(c){var b=this._s;if(!e(b)){var f=b._o;b._o=a;try{var h=g(f.complete);c=h?h.call(f,c):a}catch(i){try{d(b)}finally{throw i}}return d(b),c}}});var c=function Observable(a){u(this,c,"Observable","_f")._f=h(a)};f(c.prototype,{subscribe:function subscribe(a){return new m(a,this._f)},forEach:function forEach(a){var b=this;return new(s.Promise||r.Promise)(function(d,c){h(a);var e=b.subscribe({next:function(b){try{return a(b)}catch(d){c(d),e.unsubscribe()}},error:c,complete:d})})}}),f(c,{from:function from(a){var b="function"==typeof this?this:c,e=g(i(a)[k]);if(e){var d=i(e.call(a));return d.constructor===b?d:new b(function(a){return d.subscribe(a)})}return new b(function(c){var b=!1;return p(function(){if(!b){try{if(o(a,!1,function(a){return c.next(a),b?j:void 0})===j)return}catch(d){if(b)throw d;return void c.error(d)}c.complete()}}),function(){b=!0}})},of:function of(){for(var a=0,d=arguments.length,b=Array(d);d>a;)b[a]=arguments[a++];return new("function"==typeof this?this:c)(function(c){var a=!1;return p(function(){if(!a){for(var d=0;b.length>d;++d)if(c.next(b[d]),a)return;c.complete()}}),function(){a=!0}})}}),t(c.prototype,k,function(){return this}),q(q.G,{Observable:c}),b(187)("Observable")},function(d,e,b){var a=b(6),c=b(200);a(a.G+a.B,{setImmediate:c.set,clearImmediate:c.clear})},function(r,q,b){for(var j=b(184),p=b(16),o=b(2),g=b(8),h=b(136),i=b(23),f=i("iterator"),k=i("toStringTag"),l=h.Array,n=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],e=0;5>e;e++){var c,d=n[e],m=o[d],a=m&&m.prototype;if(a){a[f]||g(a,f,l),a[k]||g(a,k,d),h[d]=l;for(c in j)a[c]||p(a,c,j[c],!0)}}},function(i,j,a){var c=a(2),b=a(6),g=a(76),h=a(290),d=c.navigator,e=!!d&&/MSIE .\./.test(d.userAgent),f=function(a){return e?function(b,c){return a(g(h,[].slice.call(arguments,2),"function"==typeof b?b:Function(b)),c)}:a};b(b.G+b.B+b.F*e,{setTimeout:f(c.setTimeout),setInterval:f(c.setInterval)})},function(c,f,a){var d=a(291),b=a(76),e=a(19);c.exports=function(){for(var h=e(this),a=arguments.length,c=Array(a),f=0,i=d._,g=!1;a>f;)(c[f]=arguments[f++])===i&&(g=!0);return function(){var d,j=this,k=arguments.length,e=0,f=0;if(!g&&!k)return b(h,c,j);if(d=c.slice(),g)for(;a>e;e++)d[e]===i&&(d[e]=arguments[f++]);for(;k>f;)d.push(arguments[f++]);return b(h,d,j)}}},function(a,c,b){a.exports=b(2)}]),"undefined"!=typeof module&&module.exports?module.exports=b:"function"==typeof define&&define.amd?define(function(){return b}):c.core=b}(1,1);
//# sourceMappingURL=shim.min.js.map
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    var __Metadata__ = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param targetKey (Optional) The property key to decorate.
      * @param targetDescriptor (Optional) The property descriptor for the target key
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     C = Reflect.decorate(decoratorsArray, C);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(C, "staticMethod",
      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(C.prototype, "method",
      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
      *
      */
    function decorate(decorators, target, targetKey, targetDescriptor) {
        if (!IsUndefined(targetDescriptor)) {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsObject(target)) {
                throw new TypeError();
            }
            else if (IsUndefined(targetKey)) {
                throw new TypeError();
            }
            else if (!IsObject(targetDescriptor)) {
                throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
        }
        else if (!IsUndefined(targetKey)) {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsObject(target)) {
                throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
        }
        else {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsConstructor(target)) {
                throw new TypeError();
            }
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class C {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, targetKey) {
            if (!IsUndefined(targetKey)) {
                if (!IsObject(target)) {
                    throw new TypeError();
                }
                targetKey = ToPropertyKey(targetKey);
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
            }
            else {
                if (!IsConstructor(target)) {
                    throw new TypeError();
                }
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
            }
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param targetKey (Optional) The property key for the target.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, C);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetMetadata(metadataKey, target, targetKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(C);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(C.prototype, "method");
      *
      */
    function getMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryMetadataKeys(target, targetKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(C);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryOwnMetadataKeys(target, targetKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
        if (IsUndefined(metadataMap)) {
            return false;
        }
        if (!metadataMap.delete(metadataKey)) {
            return false;
        }
        if (metadataMap.size > 0) {
            return true;
        }
        var targetMetadata = __Metadata__.get(target);
        targetMetadata.delete(targetKey);
        if (targetMetadata.size > 0) {
            return true;
        }
        __Metadata__.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated)) {
                if (!IsConstructor(decorated)) {
                    throw new TypeError();
                }
                target = decorated;
            }
        }
        return target;
    }
    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated)) {
                if (!IsObject(decorated)) {
                    throw new TypeError();
                }
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            decorator(target, propertyKey);
        }
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
    function GetOrCreateMetadataMap(target, targetKey, create) {
        var targetMetadata = __Metadata__.get(target);
        if (!targetMetadata) {
            if (!create) {
                return undefined;
            }
            targetMetadata = new _Map();
            __Metadata__.set(target, targetMetadata);
        }
        var keyMetadata = targetMetadata.get(targetKey);
        if (!keyMetadata) {
            if (!create) {
                return undefined;
            }
            keyMetadata = new _Map();
            targetMetadata.set(targetKey, keyMetadata);
        }
        return keyMetadata;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
            return true;
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        }
        return false;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        if (metadataMap === undefined) {
            return false;
        }
        return Boolean(metadataMap.has(MetadataKey));
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        }
        return undefined;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        if (metadataMap === undefined) {
            return undefined;
        }
        return metadataMap.get(MetadataKey);
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = GetPrototypeOf(O);
        if (parent === null) {
            return ownKeys;
        }
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) {
            return ownKeys;
        }
        if (ownKeys.length <= 0) {
            return parentKeys;
        }
        var set = new _Set();
        var keys = [];
        for (var _i = 0; _i < ownKeys.length; _i++) {
            var key = ownKeys[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0; _a < parentKeys.length; _a++) {
            var key = parentKeys[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
    function OrdinaryOwnMetadataKeys(target, targetKey) {
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
        var keys = [];
        if (metadataMap) {
            metadataMap.forEach(function (_, key) { return keys.push(key); });
        }
        return keys;
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
    function IsArray(x) {
        return Array.isArray(x);
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
    function IsConstructor(x) {
        return typeof x === "function";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
    function ToPropertyKey(value) {
        if (IsSymbol(value)) {
            return value;
        }
        return String(value);
    }
    function GetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) {
            return proto;
        }
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard. 
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype) {
            return proto;
        }
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) {
            return proto;
        }
        // if the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") {
            return proto;
        }
        // if we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O) {
            return proto;
        }
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        function Map() {
            this._keys = [];
            this._values = [];
            this._cache = cacheSentinel;
        }
        Map.prototype = {
            get size() {
                return this._keys.length;
            },
            has: function (key) {
                if (key === this._cache) {
                    return true;
                }
                if (this._find(key) >= 0) {
                    this._cache = key;
                    return true;
                }
                return false;
            },
            get: function (key) {
                var index = this._find(key);
                if (index >= 0) {
                    this._cache = key;
                    return this._values[index];
                }
                return undefined;
            },
            set: function (key, value) {
                this.delete(key);
                this._keys.push(key);
                this._values.push(value);
                this._cache = key;
                return this;
            },
            delete: function (key) {
                var index = this._find(key);
                if (index >= 0) {
                    this._keys.splice(index, 1);
                    this._values.splice(index, 1);
                    this._cache = cacheSentinel;
                    return true;
                }
                return false;
            },
            clear: function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cache = cacheSentinel;
            },
            forEach: function (callback, thisArg) {
                var size = this.size;
                for (var i = 0; i < size; ++i) {
                    var key = this._keys[i];
                    var value = this._values[i];
                    this._cache = key;
                    callback.call(this, value, key, this);
                }
            },
            _find: function (key) {
                var keys = this._keys;
                var size = keys.length;
                for (var i = 0; i < size; ++i) {
                    if (keys[i] === key) {
                        return i;
                    }
                }
                return -1;
            }
        };
        return Map;
    }
    // naive Set shim
    function CreateSetPolyfill() {
        var cacheSentinel = {};
        function Set() {
            this._map = new _Map();
        }
        Set.prototype = {
            get size() {
                return this._map.length;
            },
            has: function (value) {
                return this._map.has(value);
            },
            add: function (value) {
                this._map.set(value, value);
                return this;
            },
            delete: function (value) {
                return this._map.delete(value);
            },
            clear: function () {
                this._map.clear();
            },
            forEach: function (callback, thisArg) {
                this._map.forEach(callback, thisArg);
            }
        };
        return Set;
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
        var nodeCrypto = isNode && require("crypto");
        var hasOwn = Object.prototype.hasOwnProperty;
        var keys = {};
        var rootKey = CreateUniqueKey();
        function WeakMap() {
            this._key = CreateUniqueKey();
        }
        WeakMap.prototype = {
            has: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table) {
                    return this._key in table;
                }
                return false;
            },
            get: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table) {
                    return table[this._key];
                }
                return undefined;
            },
            set: function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            },
            delete: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table && this._key in table) {
                    return delete table[this._key];
                }
                return false;
            },
            clear: function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            }
        };
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i) {
                buffer[i] = Math.random() * 255 | 0;
            }
        }
        function GenRandomBytes(size) {
            if (nodeCrypto) {
                var data = nodeCrypto.randomBytes(size);
                return data;
            }
            else if (typeof Uint8Array === "function") {
                var data = new Uint8Array(size);
                if (typeof crypto !== "undefined") {
                    crypto.getRandomValues(data);
                }
                else if (typeof msCrypto !== "undefined") {
                    msCrypto.getRandomValues(data);
                }
                else {
                    FillRandomBytes(data, size);
                }
                return data;
            }
            else {
                var data = new Array(size);
                FillRandomBytes(data, size);
                return data;
            }
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8) {
                    result += "-";
                }
                if (byte < 16) {
                    result += "0";
                }
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
        function CreateUniqueKey() {
            var key;
            do {
                key = "@@WeakMap@@" + CreateUUID();
            } while (hasOwn.call(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create) {
                    return undefined;
                }
                Object.defineProperty(target, rootKey, { value: Object.create(null) });
            }
            return target[rootKey];
        }
        return WeakMap;
    }
    // hook global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    __global.Reflect[p] = Reflect[p];
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof window !== "undefined" ? window :
        typeof WorkerGlobalScope !== "undefined" ? self :
            typeof global !== "undefined" ? global :
                Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/*
 * SystemJS v0.19.29
 */
(function() {
function bootstrap() {// from https://gist.github.com/Yaffle/1088850
(function(global) {
function URLPolyfill(url, baseURL) {
  if (typeof url != 'string')
    throw new TypeError('URL must be a string');
  var m = String(url).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
  if (!m)
    throw new RangeError('Invalid URL format');
  var protocol = m[1] || "";
  var username = m[2] || "";
  var password = m[3] || "";
  var host = m[4] || "";
  var hostname = m[5] || "";
  var port = m[6] || "";
  var pathname = m[7] || "";
  var search = m[8] || "";
  var hash = m[9] || "";
  if (baseURL !== undefined) {
    var base = baseURL instanceof URLPolyfill ? baseURL : new URLPolyfill(baseURL);
    var flag = !protocol && !host && !username;
    if (flag && !pathname && !search)
      search = base.search;
    if (flag && pathname[0] !== "/")
      pathname = (pathname ? (((base.host || base.username) && !base.pathname ? "/" : "") + base.pathname.slice(0, base.pathname.lastIndexOf("/") + 1) + pathname) : base.pathname);
    // dot segments removal
    var output = [];
    pathname.replace(/^(\.\.?(\/|$))+/, "")
      .replace(/\/(\.(\/|$))+/g, "/")
      .replace(/\/\.\.$/, "/../")
      .replace(/\/?[^\/]*/g, function (p) {
        if (p === "/..")
          output.pop();
        else
          output.push(p);
      });
    pathname = output.join("").replace(/^\//, pathname[0] === "/" ? "/" : "");
    if (flag) {
      port = base.port;
      hostname = base.hostname;
      host = base.host;
      password = base.password;
      username = base.username;
    }
    if (!protocol)
      protocol = base.protocol;
  }

  // convert windows file URLs to use /
  if (protocol == 'file:')
    pathname = pathname.replace(/\\/g, '/');

  this.origin = host ? protocol + (protocol !== "" || host !== "" ? "//" : "") + host : "";
  this.href = protocol + (protocol && host || protocol == "file:" ? "//" : "") + (username !== "" ? username + (password !== "" ? ":" + password : "") + "@" : "") + host + pathname + search + hash;
  this.protocol = protocol;
  this.username = username;
  this.password = password;
  this.host = host;
  this.hostname = hostname;
  this.port = port;
  this.pathname = pathname;
  this.search = search;
  this.hash = hash;
}
global.URLPolyfill = URLPolyfill;
})(typeof self != 'undefined' ? self : global);(function(__global) {

  var isWorker = typeof window == 'undefined' && typeof self != 'undefined' && typeof importScripts != 'undefined';
  var isBrowser = typeof window != 'undefined' && typeof document != 'undefined';
  var isWindows = typeof process != 'undefined' && typeof process.platform != 'undefined' && !!process.platform.match(/^win/);

  if (!__global.console)
    __global.console = { assert: function() {} };

  // IE8 support
  var indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, thisLen = this.length; i < thisLen; i++) {
      if (this[i] === item) {
        return i;
      }
    }
    return -1;
  };
  
  var defineProperty;
  (function () {
    try {
      if (!!Object.defineProperty({}, 'a', {}))
        defineProperty = Object.defineProperty;
    }
    catch (e) {
      defineProperty = function(obj, prop, opt) {
        try {
          obj[prop] = opt.value || opt.get.call(obj);
        }
        catch(e) {}
      }
    }
  })();

  var errArgs = new Error(0, '_').fileName == '_';

  function addToError(err, msg) {
    // parse the stack removing loader code lines for simplification
    if (!err.originalErr) {
      var stack = (err.stack || err.message || err).toString().split('\n');
      var newStack = [];
      for (var i = 0; i < stack.length; i++) {
        if (typeof $__curScript == 'undefined' || stack[i].indexOf($__curScript.src) == -1)
          newStack.push(stack[i]);
      }
    }

    var newMsg = (newStack ? newStack.join('\n\t') : err.message) + '\n\t' + msg;

    // Convert file:/// URLs to paths in Node
    if (!isBrowser)
      newMsg = newMsg.replace(isWindows ? /file:\/\/\//g : /file:\/\//g, '');

    var newErr = errArgs ? new Error(newMsg, err.fileName, err.lineNumber) : new Error(newMsg);
    
    // Node needs stack adjustment for throw to show message
    if (!isBrowser)
      newErr.stack = newMsg;
    // Clearing the stack stops unnecessary loader lines showing
    else
      newErr.stack = null;
    
    // track the original error
    newErr.originalErr = err.originalErr || err;

    return newErr;
  }

  function __eval(source, debugName, context) {
    try {
      new Function(source).call(context);
    }
    catch(e) {
      throw addToError(e, 'Evaluating ' + debugName);
    }
  }

  var baseURI;
  // environent baseURI detection
  if (typeof document != 'undefined' && document.getElementsByTagName) {
    baseURI = document.baseURI;

    if (!baseURI) {
      var bases = document.getElementsByTagName('base');
      baseURI = bases[0] && bases[0].href || window.location.href;
    }

    // sanitize out the hash and querystring
    baseURI = baseURI.split('#')[0].split('?')[0];
    baseURI = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);
  }
  else if (typeof process != 'undefined' && process.cwd) {
    baseURI = 'file://' + (isWindows ? '/' : '') + process.cwd() + '/';
    if (isWindows)
      baseURI = baseURI.replace(/\\/g, '/');
  }
  else if (typeof location != 'undefined') {
    baseURI = __global.location.href;
  }
  else {
    throw new TypeError('No environment baseURI');
  }

  try {
    var nativeURL = new __global.URL('test:///').protocol == 'test:';
  }
  catch(e) {}

  var URL = nativeURL ? __global.URL : __global.URLPolyfill;
/*
*********************************************************************************************

  Dynamic Module Loader Polyfill

    - Implemented exactly to the former 2014-08-24 ES6 Specification Draft Rev 27, Section 15
      http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27

    - Functions are commented with their spec numbers, with spec differences commented.

    - Spec bugs are commented in this code with links.

    - Abstract functions have been combined where possible, and their associated functions
      commented.

    - Realm implementation is entirely omitted.

*********************************************************************************************
*/

function Module() {}
// http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag
defineProperty(Module.prototype, 'toString', {
  value: function() {
    return 'Module';
  }
});
function Loader(options) {
  this._loader = {
    loaderObj: this,
    loads: [],
    modules: {},
    importPromises: {},
    moduleRecords: {}
  };

  // 26.3.3.6
  defineProperty(this, 'global', {
    get: function() {
      return __global;
    }
  });

  // 26.3.3.13 realm not implemented
}

(function() {

// Some Helpers

// logs a linkset snapshot for debugging
/* function snapshot(loader) {
  console.log('---Snapshot---');
  for (var i = 0; i < loader.loads.length; i++) {
    var load = loader.loads[i];
    var linkSetLog = '  ' + load.name + ' (' + load.status + '): ';

    for (var j = 0; j < load.linkSets.length; j++) {
      linkSetLog += '{' + logloads(load.linkSets[j].loads) + '} ';
    }
    console.log(linkSetLog);
  }
  console.log('');
}
function logloads(loads) {
  var log = '';
  for (var k = 0; k < loads.length; k++)
    log += loads[k].name + (k != loads.length - 1 ? ' ' : '');
  return log;
} */


/* function checkInvariants() {
  // see https://bugs.ecmascript.org/show_bug.cgi?id=2603#c1

  var loads = System._loader.loads;
  var linkSets = [];

  for (var i = 0; i < loads.length; i++) {
    var load = loads[i];
    console.assert(load.status == 'loading' || load.status == 'loaded', 'Each load is loading or loaded');

    for (var j = 0; j < load.linkSets.length; j++) {
      var linkSet = load.linkSets[j];

      for (var k = 0; k < linkSet.loads.length; k++)
        console.assert(loads.indexOf(linkSet.loads[k]) != -1, 'linkSet loads are a subset of loader loads');

      if (linkSets.indexOf(linkSet) == -1)
        linkSets.push(linkSet);
    }
  }

  for (var i = 0; i < loads.length; i++) {
    var load = loads[i];
    for (var j = 0; j < linkSets.length; j++) {
      var linkSet = linkSets[j];

      if (linkSet.loads.indexOf(load) != -1)
        console.assert(load.linkSets.indexOf(linkSet) != -1, 'linkSet contains load -> load contains linkSet');

      if (load.linkSets.indexOf(linkSet) != -1)
        console.assert(linkSet.loads.indexOf(load) != -1, 'load contains linkSet -> linkSet contains load');
    }
  }

  for (var i = 0; i < linkSets.length; i++) {
    var linkSet = linkSets[i];
    for (var j = 0; j < linkSet.loads.length; j++) {
      var load = linkSet.loads[j];

      for (var k = 0; k < load.dependencies.length; k++) {
        var depName = load.dependencies[k].value;
        var depLoad;
        for (var l = 0; l < loads.length; l++) {
          if (loads[l].name != depName)
            continue;
          depLoad = loads[l];
          break;
        }

        // loading records are allowed not to have their dependencies yet
        // if (load.status != 'loading')
        //  console.assert(depLoad, 'depLoad found');

        // console.assert(linkSet.loads.indexOf(depLoad) != -1, 'linkset contains all dependencies');
      }
    }
  }
} */

  // 15.2.3 - Runtime Semantics: Loader State

  // 15.2.3.11
  function createLoaderLoad(object) {
    return {
      // modules is an object for ES5 implementation
      modules: {},
      loads: [],
      loaderObj: object
    };
  }

  // 15.2.3.2 Load Records and LoadRequest Objects

  // 15.2.3.2.1
  function createLoad(name) {
    return {
      status: 'loading',
      name: name,
      linkSets: [],
      dependencies: [],
      metadata: {}
    };
  }

  // 15.2.3.2.2 createLoadRequestObject, absorbed into calling functions

  // 15.2.4

  // 15.2.4.1
  function loadModule(loader, name, options) {
    return new Promise(asyncStartLoadPartwayThrough({
      step: options.address ? 'fetch' : 'locate',
      loader: loader,
      moduleName: name,
      // allow metadata for import https://bugs.ecmascript.org/show_bug.cgi?id=3091
      moduleMetadata: options && options.metadata || {},
      moduleSource: options.source,
      moduleAddress: options.address
    }));
  }

  // 15.2.4.2
  function requestLoad(loader, request, refererName, refererAddress) {
    // 15.2.4.2.1 CallNormalize
    return new Promise(function(resolve, reject) {
      resolve(loader.loaderObj.normalize(request, refererName, refererAddress));
    })
    // 15.2.4.2.2 GetOrCreateLoad
    .then(function(name) {
      var load;
      if (loader.modules[name]) {
        load = createLoad(name);
        load.status = 'linked';
        // https://bugs.ecmascript.org/show_bug.cgi?id=2795
        load.module = loader.modules[name];
        return load;
      }

      for (var i = 0, l = loader.loads.length; i < l; i++) {
        load = loader.loads[i];
        if (load.name != name)
          continue;
        return load;
      }

      load = createLoad(name);
      loader.loads.push(load);

      proceedToLocate(loader, load);

      return load;
    });
  }

  // 15.2.4.3
  function proceedToLocate(loader, load) {
    proceedToFetch(loader, load,
      Promise.resolve()
      // 15.2.4.3.1 CallLocate
      .then(function() {
        return loader.loaderObj.locate({ name: load.name, metadata: load.metadata });
      })
    );
  }

  // 15.2.4.4
  function proceedToFetch(loader, load, p) {
    proceedToTranslate(loader, load,
      p
      // 15.2.4.4.1 CallFetch
      .then(function(address) {
        // adjusted, see https://bugs.ecmascript.org/show_bug.cgi?id=2602
        if (load.status != 'loading')
          return;
        load.address = address;

        return loader.loaderObj.fetch({ name: load.name, metadata: load.metadata, address: address });
      })
    );
  }

  var anonCnt = 0;

  // 15.2.4.5
  function proceedToTranslate(loader, load, p) {
    p
    // 15.2.4.5.1 CallTranslate
    .then(function(source) {
      if (load.status != 'loading')
        return;

      return Promise.resolve(loader.loaderObj.translate({ name: load.name, metadata: load.metadata, address: load.address, source: source }))

      // 15.2.4.5.2 CallInstantiate
      .then(function(source) {
        load.source = source;
        return loader.loaderObj.instantiate({ name: load.name, metadata: load.metadata, address: load.address, source: source });
      })

      // 15.2.4.5.3 InstantiateSucceeded
      .then(function(instantiateResult) {
        if (instantiateResult === undefined) {
          load.address = load.address || '<Anonymous Module ' + ++anonCnt + '>';

          // instead of load.kind, use load.isDeclarative
          load.isDeclarative = true;
          return transpile.call(loader.loaderObj, load)
          .then(function(transpiled) {
            // Hijack System.register to set declare function
            var curSystem = __global.System;
            var curRegister = curSystem.register;
            curSystem.register = function(name, deps, declare) {
              if (typeof name != 'string') {
                declare = deps;
                deps = name;
              }
              // store the registered declaration as load.declare
              // store the deps as load.deps
              load.declare = declare;
              load.depsList = deps;
            }
            // empty {} context is closest to undefined 'this' we can get
            __eval(transpiled, load.address, {});
            curSystem.register = curRegister;
          });
        }
        else if (typeof instantiateResult == 'object') {
          load.depsList = instantiateResult.deps || [];
          load.execute = instantiateResult.execute;
          load.isDeclarative = false;
        }
        else
          throw TypeError('Invalid instantiate return value');
      })
      // 15.2.4.6 ProcessLoadDependencies
      .then(function() {
        load.dependencies = [];
        var depsList = load.depsList;

        var loadPromises = [];
        for (var i = 0, l = depsList.length; i < l; i++) (function(request, index) {
          loadPromises.push(
            requestLoad(loader, request, load.name, load.address)

            // 15.2.4.6.1 AddDependencyLoad (load is parentLoad)
            .then(function(depLoad) {

              // adjusted from spec to maintain dependency order
              // this is due to the System.register internal implementation needs
              load.dependencies[index] = {
                key: request,
                value: depLoad.name
              };

              if (depLoad.status != 'linked') {
                var linkSets = load.linkSets.concat([]);
                for (var i = 0, l = linkSets.length; i < l; i++)
                  addLoadToLinkSet(linkSets[i], depLoad);
              }

              // console.log('AddDependencyLoad ' + depLoad.name + ' for ' + load.name);
              // snapshot(loader);
            })
          );
        })(depsList[i], i);

        return Promise.all(loadPromises);
      })

      // 15.2.4.6.2 LoadSucceeded
      .then(function() {
        // console.log('LoadSucceeded ' + load.name);
        // snapshot(loader);

        console.assert(load.status == 'loading', 'is loading');

        load.status = 'loaded';

        var linkSets = load.linkSets.concat([]);
        for (var i = 0, l = linkSets.length; i < l; i++)
          updateLinkSetOnLoad(linkSets[i], load);
      });
    })
    // 15.2.4.5.4 LoadFailed
    ['catch'](function(exc) {
      load.status = 'failed';
      load.exception = exc;

      var linkSets = load.linkSets.concat([]);
      for (var i = 0, l = linkSets.length; i < l; i++) {
        linkSetFailed(linkSets[i], load, exc);
      }

      console.assert(load.linkSets.length == 0, 'linkSets not removed');
    });
  }

  // 15.2.4.7 PromiseOfStartLoadPartwayThrough absorbed into calling functions

  // 15.2.4.7.1
  function asyncStartLoadPartwayThrough(stepState) {
    return function(resolve, reject) {
      var loader = stepState.loader;
      var name = stepState.moduleName;
      var step = stepState.step;

      if (loader.modules[name])
        throw new TypeError('"' + name + '" already exists in the module table');

      // adjusted to pick up existing loads
      var existingLoad;
      for (var i = 0, l = loader.loads.length; i < l; i++) {
        if (loader.loads[i].name == name) {
          existingLoad = loader.loads[i];

          if (step == 'translate' && !existingLoad.source) {
            existingLoad.address = stepState.moduleAddress;
            proceedToTranslate(loader, existingLoad, Promise.resolve(stepState.moduleSource));
          }

          // a primary load -> use that existing linkset if it is for the direct load here
          // otherwise create a new linkset unit
          if (existingLoad.linkSets.length && existingLoad.linkSets[0].loads[0].name == existingLoad.name)
            return existingLoad.linkSets[0].done.then(function() {
              resolve(existingLoad);
            });
        }
      }

      var load = existingLoad || createLoad(name);

      load.metadata = stepState.moduleMetadata;

      var linkSet = createLinkSet(loader, load);

      loader.loads.push(load);

      resolve(linkSet.done);

      if (step == 'locate')
        proceedToLocate(loader, load);

      else if (step == 'fetch')
        proceedToFetch(loader, load, Promise.resolve(stepState.moduleAddress));

      else {
        console.assert(step == 'translate', 'translate step');
        load.address = stepState.moduleAddress;
        proceedToTranslate(loader, load, Promise.resolve(stepState.moduleSource));
      }
    }
  }

  // Declarative linking functions run through alternative implementation:
  // 15.2.5.1.1 CreateModuleLinkageRecord not implemented
  // 15.2.5.1.2 LookupExport not implemented
  // 15.2.5.1.3 LookupModuleDependency not implemented

  // 15.2.5.2.1
  function createLinkSet(loader, startingLoad) {
    var linkSet = {
      loader: loader,
      loads: [],
      startingLoad: startingLoad, // added see spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
      loadingCount: 0
    };
    linkSet.done = new Promise(function(resolve, reject) {
      linkSet.resolve = resolve;
      linkSet.reject = reject;
    });
    addLoadToLinkSet(linkSet, startingLoad);
    return linkSet;
  }
  // 15.2.5.2.2
  function addLoadToLinkSet(linkSet, load) {
    if (load.status == 'failed')
      return;

    for (var i = 0, l = linkSet.loads.length; i < l; i++)
      if (linkSet.loads[i] == load)
        return;

    linkSet.loads.push(load);
    load.linkSets.push(linkSet);

    // adjustment, see https://bugs.ecmascript.org/show_bug.cgi?id=2603
    if (load.status != 'loaded') {
      linkSet.loadingCount++;
    }

    var loader = linkSet.loader;

    for (var i = 0, l = load.dependencies.length; i < l; i++) {
      if (!load.dependencies[i])
        continue;

      var name = load.dependencies[i].value;

      if (loader.modules[name])
        continue;

      for (var j = 0, d = loader.loads.length; j < d; j++) {
        if (loader.loads[j].name != name)
          continue;

        addLoadToLinkSet(linkSet, loader.loads[j]);
        break;
      }
    }
    // console.log('add to linkset ' + load.name);
    // snapshot(linkSet.loader);
  }

  // linking errors can be generic or load-specific
  // this is necessary for debugging info
  function doLink(linkSet) {
    var error = false;
    try {
      link(linkSet, function(load, exc) {
        linkSetFailed(linkSet, load, exc);
        error = true;
      });
    }
    catch(e) {
      linkSetFailed(linkSet, null, e);
      error = true;
    }
    return error;
  }

  // 15.2.5.2.3
  function updateLinkSetOnLoad(linkSet, load) {
    // console.log('update linkset on load ' + load.name);
    // snapshot(linkSet.loader);

    console.assert(load.status == 'loaded' || load.status == 'linked', 'loaded or linked');

    linkSet.loadingCount--;

    if (linkSet.loadingCount > 0)
      return;

    // adjusted for spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
    var startingLoad = linkSet.startingLoad;

    // non-executing link variation for loader tracing
    // on the server. Not in spec.
    /***/
    if (linkSet.loader.loaderObj.execute === false) {
      var loads = [].concat(linkSet.loads);
      for (var i = 0, l = loads.length; i < l; i++) {
        var load = loads[i];
        load.module = !load.isDeclarative ? {
          module: _newModule({})
        } : {
          name: load.name,
          module: _newModule({}),
          evaluated: true
        };
        load.status = 'linked';
        finishLoad(linkSet.loader, load);
      }
      return linkSet.resolve(startingLoad);
    }
    /***/

    var abrupt = doLink(linkSet);

    if (abrupt)
      return;

    console.assert(linkSet.loads.length == 0, 'loads cleared');

    linkSet.resolve(startingLoad);
  }

  // 15.2.5.2.4
  function linkSetFailed(linkSet, load, exc) {
    var loader = linkSet.loader;
    var requests;

    checkError: 
    if (load) {
      if (linkSet.loads[0].name == load.name) {
        exc = addToError(exc, 'Error loading ' + load.name);
      }
      else {
        for (var i = 0; i < linkSet.loads.length; i++) {
          var pLoad = linkSet.loads[i];
          for (var j = 0; j < pLoad.dependencies.length; j++) {
            var dep = pLoad.dependencies[j];
            if (dep.value == load.name) {
              exc = addToError(exc, 'Error loading ' + load.name + ' as "' + dep.key + '" from ' + pLoad.name);
              break checkError;
            }
          }
        }
        exc = addToError(exc, 'Error loading ' + load.name + ' from ' + linkSet.loads[0].name);
      }
    }
    else {
      exc = addToError(exc, 'Error linking ' + linkSet.loads[0].name);
    }


    var loads = linkSet.loads.concat([]);
    for (var i = 0, l = loads.length; i < l; i++) {
      var load = loads[i];

      // store all failed load records
      loader.loaderObj.failed = loader.loaderObj.failed || [];
      if (indexOf.call(loader.loaderObj.failed, load) == -1)
        loader.loaderObj.failed.push(load);

      var linkIndex = indexOf.call(load.linkSets, linkSet);
      console.assert(linkIndex != -1, 'link not present');
      load.linkSets.splice(linkIndex, 1);
      if (load.linkSets.length == 0) {
        var globalLoadsIndex = indexOf.call(linkSet.loader.loads, load);
        if (globalLoadsIndex != -1)
          linkSet.loader.loads.splice(globalLoadsIndex, 1);
      }
    }
    linkSet.reject(exc);
  }

  // 15.2.5.2.5
  function finishLoad(loader, load) {
    // add to global trace if tracing
    if (loader.loaderObj.trace) {
      if (!loader.loaderObj.loads)
        loader.loaderObj.loads = {};
      var depMap = {};
      load.dependencies.forEach(function(dep) {
        depMap[dep.key] = dep.value;
      });
      loader.loaderObj.loads[load.name] = {
        name: load.name,
        deps: load.dependencies.map(function(dep){ return dep.key }),
        depMap: depMap,
        address: load.address,
        metadata: load.metadata,
        source: load.source,
        kind: load.isDeclarative ? 'declarative' : 'dynamic'
      };
    }
    // if not anonymous, add to the module table
    if (load.name) {
      console.assert(!loader.modules[load.name], 'load not in module table');
      loader.modules[load.name] = load.module;
    }
    var loadIndex = indexOf.call(loader.loads, load);
    if (loadIndex != -1)
      loader.loads.splice(loadIndex, 1);
    for (var i = 0, l = load.linkSets.length; i < l; i++) {
      loadIndex = indexOf.call(load.linkSets[i].loads, load);
      if (loadIndex != -1)
        load.linkSets[i].loads.splice(loadIndex, 1);
    }
    load.linkSets.splice(0, load.linkSets.length);
  }

  function doDynamicExecute(linkSet, load, linkError) {
    try {
      var module = load.execute();
    }
    catch(e) {
      linkError(load, e);
      return;
    }
    if (!module || !(module instanceof Module))
      linkError(load, new TypeError('Execution must define a Module instance'));
    else
      return module;
  }

  // 26.3 Loader

  // 26.3.1.1
  // defined at top

  // importPromises adds ability to import a module twice without error - https://bugs.ecmascript.org/show_bug.cgi?id=2601
  function createImportPromise(loader, name, promise) {
    var importPromises = loader._loader.importPromises;
    return importPromises[name] = promise.then(function(m) {
      importPromises[name] = undefined;
      return m;
    }, function(e) {
      importPromises[name] = undefined;
      throw e;
    });
  }

  Loader.prototype = {
    // 26.3.3.1
    constructor: Loader,
    // 26.3.3.2
    define: function(name, source, options) {
      // check if already defined
      if (this._loader.importPromises[name])
        throw new TypeError('Module is already loading.');
      return createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
        step: 'translate',
        loader: this._loader,
        moduleName: name,
        moduleMetadata: options && options.metadata || {},
        moduleSource: source,
        moduleAddress: options && options.address
      })));
    },
    // 26.3.3.3
    'delete': function(name) {
      var loader = this._loader;
      delete loader.importPromises[name];
      delete loader.moduleRecords[name];
      return loader.modules[name] ? delete loader.modules[name] : false;
    },
    // 26.3.3.4 entries not implemented
    // 26.3.3.5
    get: function(key) {
      if (!this._loader.modules[key])
        return;
      doEnsureEvaluated(this._loader.modules[key], [], this);
      return this._loader.modules[key].module;
    },
    // 26.3.3.7
    has: function(name) {
      return !!this._loader.modules[name];
    },
    // 26.3.3.8
    'import': function(name, parentName, parentAddress) {
      if (typeof parentName == 'object')
        parentName = parentName.name;

      // run normalize first
      var loaderObj = this;

      // added, see https://bugs.ecmascript.org/show_bug.cgi?id=2659
      return Promise.resolve(loaderObj.normalize(name, parentName))
      .then(function(name) {
        var loader = loaderObj._loader;

        if (loader.modules[name]) {
          doEnsureEvaluated(loader.modules[name], [], loader._loader);
          return loader.modules[name].module;
        }

        return loader.importPromises[name] || createImportPromise(loaderObj, name,
          loadModule(loader, name, {})
          .then(function(load) {
            delete loader.importPromises[name];
            return evaluateLoadedModule(loader, load);
          }));
      });
    },
    // 26.3.3.9 keys not implemented
    // 26.3.3.10
    load: function(name) {
      var loader = this._loader;
      if (loader.modules[name])
        return Promise.resolve();
      return loader.importPromises[name] || createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
        step: 'locate',
        loader: loader,
        moduleName: name,
        moduleMetadata: {},
        moduleSource: undefined,
        moduleAddress: undefined
      }))
      .then(function() {
        delete loader.importPromises[name];
      }));
    },
    // 26.3.3.11
    module: function(source, options) {
      var load = createLoad();
      load.address = options && options.address;
      var linkSet = createLinkSet(this._loader, load);
      var sourcePromise = Promise.resolve(source);
      var loader = this._loader;
      var p = linkSet.done.then(function() {
        return evaluateLoadedModule(loader, load);
      });
      proceedToTranslate(loader, load, sourcePromise);
      return p;
    },
    // 26.3.3.12
    newModule: function (obj) {
      if (typeof obj != 'object')
        throw new TypeError('Expected object');

      var m = new Module();

      var pNames = [];
      if (Object.getOwnPropertyNames && obj != null)
        pNames = Object.getOwnPropertyNames(obj);
      else
        for (var key in obj)
          pNames.push(key);

      for (var i = 0; i < pNames.length; i++) (function(key) {
        defineProperty(m, key, {
          configurable: false,
          enumerable: true,
          get: function () {
            return obj[key];
          },
          set: function() {
            throw new Error('Module exports cannot be changed externally.');
          }
        });
      })(pNames[i]);

      if (Object.freeze)
        Object.freeze(m);

      return m;
    },
    // 26.3.3.14
    set: function(name, module) {
      if (!(module instanceof Module))
        throw new TypeError('Loader.set(' + name + ', module) must be a module');
      this._loader.modules[name] = {
        module: module
      };
    },
    // 26.3.3.15 values not implemented
    // 26.3.3.16 @@iterator not implemented
    // 26.3.3.17 @@toStringTag not implemented

    // 26.3.3.18.1
    normalize: function(name, referrerName, referrerAddress) {
      return name;
    },
    // 26.3.3.18.2
    locate: function(load) {
      return load.name;
    },
    // 26.3.3.18.3
    fetch: function(load) {
    },
    // 26.3.3.18.4
    translate: function(load) {
      return load.source;
    },
    // 26.3.3.18.5
    instantiate: function(load) {
    }
  };

  var _newModule = Loader.prototype.newModule;
/*
 * ES6 Module Declarative Linking Code - Dev Build Only
 */
  function link(linkSet, linkError) {

    var loader = linkSet.loader;

    if (!linkSet.loads.length)
      return;

    var loads = linkSet.loads.concat([]);

    for (var i = 0; i < loads.length; i++) {
      var load = loads[i];

      var module = doDynamicExecute(linkSet, load, linkError);
      if (!module)
        return;
      load.module = {
        name: load.name,
        module: module
      };
      load.status = 'linked';

      finishLoad(loader, load);
    }
  }

  function evaluateLoadedModule(loader, load) {
    console.assert(load.status == 'linked', 'is linked ' + load.name);
    return load.module.module;
  }

  function doEnsureEvaluated() {}

  function transpile() {
    throw new TypeError('ES6 transpilation is only provided in the dev module loader build.');
  }
})();/*
*********************************************************************************************

  System Loader Implementation

    - Implemented to https://github.com/jorendorff/js-loaders/blob/master/browser-loader.js

    - <script type="module"> supported

*********************************************************************************************
*/

var System;

function SystemLoader() {
  Loader.call(this);
  this.paths = {};
}

// NB no specification provided for System.paths, used ideas discussed in https://github.com/jorendorff/js-loaders/issues/25
function applyPaths(paths, name) {
  // most specific (most number of slashes in path) match wins
  var pathMatch = '', wildcard, maxWildcardPrefixLen = 0;

  // check to see if we have a paths entry
  for (var p in paths) {
    if (paths.hasOwnProperty && !paths.hasOwnProperty(p))
      continue;

    var pathParts = p.split('*');
    if (pathParts.length > 2)
      throw new TypeError('Only one wildcard in a path is permitted');

    // exact path match
    if (pathParts.length == 1) {
      if (name == p)
        return paths[p];
      
      // support trailing / in paths rules
      else if (name.substr(0, p.length - 1) == p.substr(0, p.length - 1) && (name.length < p.length || name[p.length - 1] == p[p.length - 1]) && (paths[p][paths[p].length - 1] == '/' || paths[p] == '')) {
        return paths[p].substr(0, paths[p].length - 1) + (name.length > p.length ? (paths[p] && '/' || '') + name.substr(p.length) : '');
      }
    }
    // wildcard path match
    else {
      var wildcardPrefixLen = pathParts[0].length;
      if (wildcardPrefixLen >= maxWildcardPrefixLen &&
          name.substr(0, pathParts[0].length) == pathParts[0] &&
          name.substr(name.length - pathParts[1].length) == pathParts[1]) {
            maxWildcardPrefixLen = wildcardPrefixLen;
            pathMatch = p;
            wildcard = name.substr(pathParts[0].length, name.length - pathParts[1].length - pathParts[0].length);
          }
    }
  }

  var outPath = paths[pathMatch];
  if (typeof wildcard == 'string')
    outPath = outPath.replace('*', wildcard);

  return outPath;
}

// inline Object.create-style class extension
function LoaderProto() {}
LoaderProto.prototype = Loader.prototype;
SystemLoader.prototype = new LoaderProto();
  var fetchTextFromURL;
  if (typeof XMLHttpRequest != 'undefined') {
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      var xhr = new XMLHttpRequest();
      var sameDomain = true;
      var doTimeout = false;
      if (!('withCredentials' in xhr)) {
        // check if same domain
        var domainCheck = /^(\w+:)?\/\/([^\/]+)/.exec(url);
        if (domainCheck) {
          sameDomain = domainCheck[2] === window.location.host;
          if (domainCheck[1])
            sameDomain &= domainCheck[1] === window.location.protocol;
        }
      }
      if (!sameDomain && typeof XDomainRequest != 'undefined') {
        xhr = new XDomainRequest();
        xhr.onload = load;
        xhr.onerror = error;
        xhr.ontimeout = error;
        xhr.onprogress = function() {};
        xhr.timeout = 0;
        doTimeout = true;
      }
      function load() {
        fulfill(xhr.responseText);
      }
      function error() {
        reject(new Error('XHR error' + (xhr.status ? ' (' + xhr.status + (xhr.statusText ? ' ' + xhr.statusText  : '') + ')' : '') + ' loading ' + url));
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          // in Chrome on file:/// URLs, status is 0
          if (xhr.status == 0) {
            if (xhr.responseText) {
              load();
            }
            else {
              // when responseText is empty, wait for load or error event
              // to inform if it is a 404 or empty file
              xhr.addEventListener('error', error);
              xhr.addEventListener('load', load);
            }
          }
          else if (xhr.status === 200) {
            load();
          }
          else {
            error();
          }
        }
      };
      xhr.open("GET", url, true);

      if (xhr.setRequestHeader) {
        xhr.setRequestHeader('Accept', 'application/x-es-module, */*');
        // can set "authorization: true" to enable withCredentials only
        if (authorization) {
          if (typeof authorization == 'string')
            xhr.setRequestHeader('Authorization', authorization);
          xhr.withCredentials = true;
        }
      }

      if (doTimeout) {
        setTimeout(function() {
          xhr.send();
        }, 0);
      } else {
        xhr.send(null);
      }
    };
  }
  else if (typeof require != 'undefined' && typeof process != 'undefined') {
    var fs;
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      if (url.substr(0, 8) != 'file:///')
        throw new Error('Unable to fetch "' + url + '". Only file URLs of the form file:/// allowed running in Node.');
      fs = fs || require('fs');
      if (isWindows)
        url = url.replace(/\//g, '\\').substr(8);
      else
        url = url.substr(7);
      return fs.readFile(url, function(err, data) {
        if (err) {
          return reject(err);
        }
        else {
          // Strip Byte Order Mark out if it's the leading char
          var dataString = data + '';
          if (dataString[0] === '\ufeff')
            dataString = dataString.substr(1);

          fulfill(dataString);
        }
      });
    };
  }
  else if (typeof self != 'undefined' && typeof self.fetch != 'undefined') {
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      var opts = {
        headers: {'Accept': 'application/x-es-module, */*'}
      };

      if (authorization) {
        if (typeof authorization == 'string')
          opts.headers['Authorization'] = authorization;
        opts.credentials = 'include';
      }

      fetch(url, opts)
        .then(function (r) {
          if (r.ok) {
            return r.text();
          } else {
            throw new Error('Fetch error: ' + r.status + ' ' + r.statusText);
          }
        })
        .then(fulfill, reject);
    }
  }
  else {
    throw new TypeError('No environment fetch API available.');
  }

  SystemLoader.prototype.fetch = function(load) {
    return new Promise(function(resolve, reject) {
      fetchTextFromURL(load.address, undefined, resolve, reject);
    });
  };
/*
 * Traceur, Babel and TypeScript transpile hook for Loader
 */
var transpile = (function() {

  // use Traceur by default
  Loader.prototype.transpiler = 'traceur';

  function transpile(load) {
    var self = this;

    return Promise.resolve(__global[self.transpiler == 'typescript' ? 'ts' : self.transpiler]
        || (self.pluginLoader || self)['import'](self.transpiler))
    .then(function(transpiler) {
      if (transpiler.__useDefault)
        transpiler = transpiler['default'];

      var transpileFunction;
      if (transpiler.Compiler)
        transpileFunction = traceurTranspile;
      else if (transpiler.createLanguageService)
        transpileFunction = typescriptTranspile;
      else
        transpileFunction = babelTranspile;

      // note __moduleName will be part of the transformer meta in future when we have the spec for this
      return '(function(__moduleName){' + transpileFunction.call(self, load, transpiler) + '\n})("' + load.name + '");\n//# sourceURL=' + load.address + '!transpiled';
    });
  };

  function traceurTranspile(load, traceur) {
    var options = this.traceurOptions || {};
    options.modules = 'instantiate';
    options.script = false;
    if (options.sourceMaps === undefined)
      options.sourceMaps = 'inline';
    options.filename = load.address;
    options.inputSourceMap = load.metadata.sourceMap;
    options.moduleName = false;

    var compiler = new traceur.Compiler(options);

    return doTraceurCompile(load.source, compiler, options.filename);
  }
  function doTraceurCompile(source, compiler, filename) {
    try {
      return compiler.compile(source, filename);
    }
    catch(e) {
      // on older versions of traceur (<0.9.3), an array of errors is thrown
      // rather than a single error.
      if (e.length) {
        throw e[0];
      }
      throw e;
    }
  }

  function babelTranspile(load, babel) {
    var options = this.babelOptions || {};
    options.modules = 'system';
    if (options.sourceMap === undefined)
      options.sourceMap = 'inline';
    options.inputSourceMap = load.metadata.sourceMap;
    options.filename = load.address;
    options.code = true;
    options.ast = false;

    return babel.transform(load.source, options).code;
  }

  function typescriptTranspile(load, ts) {
    var options = this.typescriptOptions || {};
    options.target = options.target || ts.ScriptTarget.ES5;
    if (options.sourceMap === undefined)
      options.sourceMap = true;
    if (options.sourceMap && options.inlineSourceMap !== false)
      options.inlineSourceMap = true;

    options.module = ts.ModuleKind.System;

    return ts.transpile(load.source, options, load.address);
  }

  return transpile;
})();
// SystemJS Loader Class and Extension helpers

function SystemJSLoader() {
  SystemLoader.call(this);

  systemJSConstructor.call(this);
}

// inline Object.create-style class extension
function SystemProto() {};
SystemProto.prototype = SystemLoader.prototype;
SystemJSLoader.prototype = new SystemProto();
SystemJSLoader.prototype.constructor = SystemJSLoader;

// remove ESML instantiate
SystemJSLoader.prototype.instantiate = function() {};

var systemJSConstructor;

function hook(name, hook) {
  SystemJSLoader.prototype[name] = hook(SystemJSLoader.prototype[name] || function() {});
}
function hookConstructor(hook) {
  systemJSConstructor = hook(systemJSConstructor || function() {});
}

function dedupe(deps) {
  var newDeps = [];
  for (var i = 0, l = deps.length; i < l; i++)
    if (indexOf.call(newDeps, deps[i]) == -1)
      newDeps.push(deps[i])
  return newDeps;
}

function group(deps) {
  var names = [];
  var indices = [];
  for (var i = 0, l = deps.length; i < l; i++) {
    var index = indexOf.call(names, deps[i]);
    if (index === -1) {
      names.push(deps[i]);
      indices.push([i]);
    }
    else {
      indices[index].push(i);
    }
  }
  return { names: names, indices: indices };
}

var getOwnPropertyDescriptor = true;
try {
  Object.getOwnPropertyDescriptor({ a: 0 }, 'a');
}
catch(e) {
  getOwnPropertyDescriptor = false;
}

// converts any module.exports object into an object ready for SystemJS.newModule
function getESModule(exports) {
  var esModule = {};
  // don't trigger getters/setters in environments that support them
  if ((typeof exports == 'object' || typeof exports == 'function') && exports !== __global) {
      if (getOwnPropertyDescriptor) {
        for (var p in exports) {
          // The default property is copied to esModule later on
          if (p === 'default')
            continue;
          defineOrCopyProperty(esModule, exports, p);
        }
      }
      else {
        extend(esModule, exports);
      }
  }
  esModule['default'] = exports;
  defineProperty(esModule, '__useDefault', {
    value: true
  });
  return esModule;
}

function defineOrCopyProperty(targetObj, sourceObj, propName) {
  try {
    var d;
    if (d = Object.getOwnPropertyDescriptor(sourceObj, propName))
      defineProperty(targetObj, propName, d);
  }
  catch (ex) {
    // Object.getOwnPropertyDescriptor threw an exception, fall back to normal set property
    // we dont need hasOwnProperty here because getOwnPropertyDescriptor would have returned undefined above
    targetObj[propName] = sourceObj[propName];
    return false;
  }
}

function extend(a, b, prepend) {
  var hasOwnProperty = b && b.hasOwnProperty;
  for (var p in b) {
    if (hasOwnProperty && !b.hasOwnProperty(p))
      continue;
    if (!prepend || !(p in a))
      a[p] = b[p];
  }
  return a;
}

// meta first-level extends where:
// array + array appends
// object + object extends
// other properties replace
function extendMeta(a, b, prepend) {
  var hasOwnProperty = b && b.hasOwnProperty;
  for (var p in b) {
    if (hasOwnProperty && !b.hasOwnProperty(p))
      continue;
    var val = b[p];
    if (!(p in a))
      a[p] = val;
    else if (val instanceof Array && a[p] instanceof Array)
      a[p] = [].concat(prepend ? val : a[p]).concat(prepend ? a[p] : val);
    else if (typeof val == 'object' && val !== null && typeof a[p] == 'object')
      a[p] = extend(extend({}, a[p]), val, prepend);
    else if (!prepend)
      a[p] = val;
  }
}

// deeply-merge (to first level) config with any existing package config
function setPkgConfig(loader, pkgName, cfg, prependConfig, warnInvalidProperties) {
  var curPkg = loader.packages[pkgName] = loader.packages[pkgName] || {};

  // dynamic config does not override existing System.config package configurations
  var pkg = prependConfig ? (loader.packages[pkgName] = {}) : curPkg;

  for (var prop in cfg) {
    if (['main', 'format', 'defaultExtension', 'basePath'].indexOf(prop) != -1) {
      pkg[prop] = cfg[prop];
    }
    else if (prop == 'map') {
      extend(pkg.map = pkg.map || {}, cfg.map);
    }
    else if (prop == 'meta') {
      extend(pkg.meta = pkg.meta || {}, cfg.meta);
    }
    else if (prop == 'depCache') {
      for (var d in cfg.depCache) {
        var dNormalized;

        if (d.substr(0, 2) == './')
          dNormalized = pkgName + '/' + d.substr(2);
        else
          dNormalized = coreResolve.call(loader, d);
        loader.depCache[dNormalized] = (loader.depCache[dNormalized] || []).concat(cfg.depCache[d]);
      }
    }
    else if (warnInvalidProperties && ['browserConfig', 'nodeConfig', 'devConfig', 'productionConfig'].indexOf(prop) == -1) {
      warn.call(loader, '"' + prop + '" is not a valid package configuration option in package ' + pkgName);
    }
  }

  // main object becomes main map
  if (typeof pkg.main == 'object') {
    pkg.map = pkg.map || {};
    pkg.map['./@main'] = pkg.main;
    pkg.main['default'] = pkg.main['default'] || './';
    pkg.main = '@main';
  }

  // prepend config becomes package config, then extended with original package config
  if (prependConfig)
    setPkgConfig(loader, pkgName, curPkg, false, false);

  return pkg;
}

function warn(msg) {
  if (this.warnings && typeof console != 'undefined' && console.warn)
    console.warn(msg);
}
// we define a __exec for globally-scoped execution
// used by module format implementations
var __exec;

(function() {

  var hasBtoa = typeof btoa != 'undefined';

  function getSource(load, wrap) {
    var lastLineIndex = load.source.lastIndexOf('\n');

    // wrap ES formats with a System closure for System global encapsulation
    if (load.metadata.format == 'global')
      wrap = false;

    var sourceMap = load.metadata.sourceMap;
    if (sourceMap) {
      if (typeof sourceMap != 'object')
        throw new TypeError('load.metadata.sourceMap must be set to an object.');

      sourceMap = JSON.stringify(sourceMap);
    }

    return (wrap ? '(function(System, SystemJS) {' : '') + load.source + (wrap ? '\n})(System, System);' : '')
        // adds the sourceURL comment if not already present
        + (load.source.substr(lastLineIndex, 15) != '\n//# sourceURL=' 
          ? '\n//# sourceURL=' + load.address + (sourceMap ? '!transpiled' : '') : '')
        // add sourceMappingURL if load.metadata.sourceMap is set
        + (sourceMap && hasBtoa && '\n//# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(sourceMap))) || '');
  }

  var curLoad;

  // System.register, System.registerDynamic, AMD define pipeline
  // if currently evalling code here, immediately reduce the registered entry against the load record
  hook('pushRegister_', function() {
    return function(register) {
      if (!curLoad)
        return false;

      this.reduceRegister_(curLoad, register);
      return true;
    };
  });

  // System clobbering protection (mostly for Traceur)
  var curSystem;
  var callCounter = 0;
  function preExec(loader, load) {
    curLoad = load;
    if (callCounter++ == 0)
      curSystem = __global.System;
    __global.System = __global.SystemJS = loader; 
  }
  function postExec() {
    if (--callCounter == 0)
      __global.System = __global.SystemJS = curSystem;
    curLoad = undefined;
  }

  var vm;
  __exec = function(load) {
    if (!load.source)
      return;
    if ((load.metadata.integrity || load.metadata.nonce) && supportsScriptExec)
      return scriptExec.call(this, load);
    try {
      preExec(this, load);
      curLoad = load;
      // global scoped eval for node (avoids require scope leak)
      if (this._nodeRequire) {
        vm = vm || this._nodeRequire('vm');
        vm.runInThisContext(getSource(load, true), { filename: load.address + (load.metadata.sourceMap ? '!transpiled' : '') });
      }
      else {
        (0, eval)(getSource(load, true));
      }
      postExec();
    }
    catch(e) {
      postExec(); 
      throw addToError(e, 'Evaluating ' + load.address);
    }
  };

  var supportsScriptExec = false;
  if (isBrowser && typeof document != 'undefined' && document.getElementsByTagName) {
    var scripts = document.getElementsByTagName('script');
    $__curScript = scripts[scripts.length - 1];

    if (!(window.chrome && window.chrome.extension || navigator.userAgent.match(/^Node\.js/)))
      supportsScriptExec = true;
  }

  // script execution via injecting a script tag into the page
  // this allows CSP integrity and nonce to be set for CSP environments
  var head;
  function scriptExec(load) {
    if (!head)
      head = document.head || document.body || document.documentElement;

    var script = document.createElement('script');
    script.text = getSource(load, false);
    var onerror = window.onerror;
    var e;
    window.onerror = function(_e) {
      e = addToError(_e, 'Evaluating ' + load.address);
      if (onerror)
        onerror.apply(this, arguments);
    }
    preExec(this, load);

    if (load.metadata.integrity)
      script.setAttribute('integrity', load.metadata.integrity);
    if (load.metadata.nonce)
      script.setAttribute('nonce', load.metadata.nonce);

    head.appendChild(script);
    head.removeChild(script);
    postExec();
    window.onerror = onerror;
    if (e)
      throw e;
  }

})();
var absURLRegEx = /^[^\/]+:\/\//;

function readMemberExpression(p, value) {
  var pParts = p.split('.');
  while (pParts.length)
    value = value[pParts.shift()];
  return value;
}

var baseURLCache = {};
function getBaseURLObj() {
  if (baseURLCache[this.baseURL])
    return baseURLCache[this.baseURL];

  // normalize baseURL if not already
  if (this.baseURL[this.baseURL.length - 1] != '/')
    this.baseURL += '/';

  var baseURL = new URL(this.baseURL, baseURI);

  this.baseURL = baseURL.href;

  return (baseURLCache[this.baseURL] = baseURL);
}

function getMapMatch(map, name) {
  var bestMatch, bestMatchLength = 0;

  for (var p in map) {
    if (name.substr(0, p.length) == p && (name.length == p.length || name[p.length] == '/')) {
      var curMatchLength = p.split('/').length;
      if (curMatchLength <= bestMatchLength)
        continue;
      bestMatch = p;
      bestMatchLength = curMatchLength;
    }
  }

  return bestMatch;
}

var envModule;
function setProduction(isProduction) {
  this.set('@system-env', envModule = this.newModule({
    browser: isBrowser,
    node: !!this._nodeRequire,
    production: isProduction,
    dev: !isProduction,
    'default': true
  }));
}

var baseURIObj = new URL(baseURI);

hookConstructor(function(constructor) {
  return function() {
    constructor.call(this);

    // support baseURL
    this.baseURL = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);

    // support map and paths
    this.map = {};
    this.paths = {};

    // global behaviour flags
    this.warnings = false;
    this.defaultJSExtensions = false;
    this.pluginFirst = false;
    this.loaderErrorStack = false;

    // by default load ".json" files as json
    // leading * meta doesn't need normalization
    // NB add this in next breaking release
    // this.meta['*.json'] = { format: 'json' };

    // support the empty module, as a concept
    this.set('@empty', this.newModule({}));

    setProduction.call(this, false);
  };
});

// include the node require since we're overriding it
if (typeof require != 'undefined' && typeof process != 'undefined' && !process.browser)
  SystemJSLoader.prototype._nodeRequire = require;

/*
  Core SystemJS Normalization

  If a name is relative, we apply URL normalization to the page
  If a name is an absolute URL, we leave it as-is

  Plain names (neither of the above) run through the map and paths
  normalization phases.

  The paths normalization phase applies last (paths extension), which
  defines the `decanonicalize` function and normalizes everything into
  a URL.
 */

function isPlain(name) {
  return (name[0] != '.' || (!!name[1] && name[1] != '/' && name[1] != '.')) && name[0] != '/' && !name.match(absURLRegEx);
}

function urlResolve(name, parent) {
  if (parent)
    parent = parent.replace(/#/g, '%05');
  return new URL(name, parent || baseURIObj).href.replace(/%05/g, '#');
}

// only applies to plain names
function baseURLResolve(loader, name) {
  return new URL(name, getBaseURLObj.call(loader)).href;
}

function coreResolve(name, parentName) {
  // standard URL resolution
  if (!isPlain(name))
    return urlResolve(name, parentName);

  // plain names not starting with './', '://' and '/' go through custom resolution
  var mapMatch = getMapMatch(this.map, name);

  if (mapMatch) {
    name = this.map[mapMatch] + name.substr(mapMatch.length);

    if (!isPlain(name))
      return urlResolve(name);
  }

  if (this.has(name))
    return name;
  // dynamically load node-core modules when requiring `@node/fs` for example
  if (name.substr(0, 6) == '@node/') {
    if (!this._nodeRequire)
      throw new TypeError('Error loading ' + name + '. Can only load node core modules in Node.');
    if (!isPlain(name.substr(6)))
      throw new Error('Node module ' + name.substr(6) + ' can\'t be loaded as it is not a package require.');
    this.set(name, this.newModule(getESModule(this._nodeRequire(name.substr(6)))));
    return name;
  }

  var pathed = applyPaths(this.paths, name);

  if (pathed && !isPlain(pathed))
    return urlResolve(pathed);

  return baseURLResolve(this, pathed || name);
}

hook('normalize', function(normalize) {
  return function(name, parentName, skipExt) {
    var resolved = coreResolve.call(this, name, parentName);
    if (!skipExt && this.defaultJSExtensions && resolved.substr(resolved.length - 3, 3) != '.js' && !isPlain(resolved))
      resolved += '.js';
    return resolved;
  };
});

// percent encode just '#' in urls if using HTTP requests
var httpRequest = typeof XMLHttpRequest != 'undefined';
hook('locate', function(locate) {
  return function(load) {
    return Promise.resolve(locate.call(this, load))
    .then(function(address) {
      if (httpRequest)
        return address.replace(/#/g, '%23');
      return address;
    });
  };
});

/*
 * Fetch with authorization
 */
hook('fetch', function() {
  return function(load) {
    return new Promise(function(resolve, reject) {
      fetchTextFromURL(load.address, load.metadata.authorization, resolve, reject);
    });
  };
});

/*
  __useDefault
  
  When a module object looks like:
  newModule(
    __useDefault: true,
    default: 'some-module'
  })

  Then importing that module provides the 'some-module'
  result directly instead of the full module.

  Useful for eg module.exports = function() {}
*/
hook('import', function(systemImport) {
  return function(name, parentName, parentAddress) {
    if (parentName && parentName.name)
      warn.call(this, 'SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing ' + name + ' from ' + parentName.name);
    return systemImport.call(this, name, parentName, parentAddress).then(function(module) {
      return module.__useDefault ? module['default'] : module;
    });
  };
});

/*
 * Allow format: 'detect' meta to enable format detection
 */
hook('translate', function(systemTranslate) {
  return function(load) {
    if (load.metadata.format == 'detect')
      load.metadata.format = undefined;
    return systemTranslate.call(this, load);
  };
});


/*
 * JSON format support
 *
 * Supports loading JSON files as a module format itself
 *
 * Usage:
 *
 * SystemJS.config({
 *   meta: {
 *     '*.json': { format: 'json' }
 *   }
 * });
 *
 * Module is returned as if written:
 *
 * export default {JSON}
 *
 * No named exports are provided
 *
 * Files ending in ".json" are treated as json automatically by SystemJS
 */
hook('instantiate', function(instantiate) {
  return function(load) {
    if (load.metadata.format == 'json' && !this.builder) {
      var entry = load.metadata.entry = createEntry();
      entry.deps = [];
      entry.execute = function() {
        try {
          return JSON.parse(load.source);
        }
        catch(e) {
          throw new Error("Invalid JSON file " + load.name);
        }
      };
    }
  };
})

/*
 Extend config merging one deep only

  loader.config({
    some: 'random',
    config: 'here',
    deep: {
      config: { too: 'too' }
    }
  });

  <=>

  loader.some = 'random';
  loader.config = 'here'
  loader.deep = loader.deep || {};
  loader.deep.config = { too: 'too' };


  Normalizes meta and package configs allowing for:

  SystemJS.config({
    meta: {
      './index.js': {}
    }
  });

  To become

  SystemJS.meta['https://thissite.com/index.js'] = {};

  For easy normalization canonicalization with latest URL support.

*/
SystemJSLoader.prototype.env = 'dev';

function envSet(loader, cfg, envCallback) {
  if (envModule.browser && cfg.browserConfig)
    envCallback(cfg.browserConfig);
  if (envModule.node && cfg.nodeConfig)
    envCallback(cfg.nodeConfig);
  if (envModule.dev && cfg.devConfig)
    envCallback(cfg.devConfig);
  if (envModule.production && cfg.productionConfig)
    envCallback(cfg.productionConfig);
}

SystemJSLoader.prototype.getConfig = function(name) {
  var cfg = {};
  var loader = this;
  for (var p in loader) {
    if (loader.hasOwnProperty && !loader.hasOwnProperty(p) || p in SystemJSLoader.prototype)
      continue;
    if (['_loader', 'amdDefine', 'amdRequire', 'defined', 'failed', 'version'].indexOf(p) == -1)
      cfg[p] = loader[p];
  }
  cfg.production = envModule.production;
  return cfg;
};

var curCurScript;
SystemJSLoader.prototype.config = function(cfg, isEnvConfig) {
  var loader = this;

  if ('loaderErrorStack' in cfg) {
    curCurScript = $__curScript;
    if (cfg.loaderErrorStack)
      $__curScript = undefined;
    else
      $__curScript = curCurScript;
  }

  if ('warnings' in cfg)
    loader.warnings = cfg.warnings;

  // transpiler deprecation path
  if (cfg.transpilerRuntime === false)
    loader._loader.loadedTranspilerRuntime = true;

  if ('production' in cfg)
    setProduction.call(loader, cfg.production);

  if (!isEnvConfig) {
    // if using nodeConfig / browserConfig / productionConfig, take baseURL from there
    // these exceptions will be unnecessary when we can properly implement config queuings
    var baseURL;
    envSet(loader, cfg, function(cfg) {
      baseURL = baseURL || cfg.baseURL;
    });
    baseURL = baseURL || cfg.baseURL;

    // always configure baseURL first
    if (baseURL) {
      var hasConfig = false;
      function checkHasConfig(obj) {
        for (var p in obj)
          if (obj.hasOwnProperty(p))
            return true;
      }
      if (checkHasConfig(loader.packages) || checkHasConfig(loader.meta) || checkHasConfig(loader.depCache) || checkHasConfig(loader.bundles) || checkHasConfig(loader.packageConfigPaths))
        throw new TypeError('Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.');

      loader.baseURL = baseURL;

      // sanitize baseURL
      getBaseURLObj.call(loader);
    }

    extend(loader.paths, cfg.paths);

    envSet(loader, cfg, function(cfg) {
      extend(loader.paths, cfg.paths);
    });

    // warn on wildcard path deprecations
    if (this.warnings) {
      for (var p in loader.paths)
        if (p.indexOf('*') != -1)
          warn.call(loader, 'Paths configuration "' + p + '" -> "' + loader.paths[p] + '" uses wildcards which are being deprecated for simpler trailing "/" folder paths.');
    }
  }

  if (cfg.defaultJSExtensions) {
    loader.defaultJSExtensions = cfg.defaultJSExtensions;
    warn.call(loader, 'The defaultJSExtensions configuration option is deprecated, use packages configuration instead.');
  }

  if (cfg.pluginFirst)
    loader.pluginFirst = cfg.pluginFirst;

  if (cfg.map) {
    var objMaps = '';
    for (var p in cfg.map) {
      var v = cfg.map[p];

      // object map backwards-compat into packages configuration
      if (typeof v !== 'string') {
        objMaps += (objMaps.length ? ', ' : '') + '"' + p + '"';

        var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
        var prop = loader.decanonicalize(p);
        if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
          prop = prop.substr(0, prop.length - 3);

        // if a package main, revert it
        var pkgMatch = '';
        for (var pkg in loader.packages) {
          if (prop.substr(0, pkg.length) == pkg 
              && (!prop[pkg.length] || prop[pkg.length] == '/') 
              && pkgMatch.split('/').length < pkg.split('/').length)
            pkgMatch = pkg;
        }
        if (pkgMatch && loader.packages[pkgMatch].main)
          prop = prop.substr(0, prop.length - loader.packages[pkgMatch].main.length - 1);

        var pkg = loader.packages[prop] = loader.packages[prop] || {};
        pkg.map = v;
      }
      else {
        loader.map[p] = v;
      }
    }
    if (objMaps)
      warn.call(loader, 'The map configuration for ' + objMaps + ' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "' + p + '": { map: {...} } } }).');
  }

  if (cfg.packageConfigPaths) {
    var packageConfigPaths = [];
    for (var i = 0; i < cfg.packageConfigPaths.length; i++) {
      var path = cfg.packageConfigPaths[i];
      var packageLength = Math.max(path.lastIndexOf('*') + 1, path.lastIndexOf('/'));
      var defaultJSExtension = loader.defaultJSExtensions && path.substr(packageLength - 3, 3) != '.js';
      var normalized = loader.decanonicalize(path.substr(0, packageLength));
      if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) == '.js')
        normalized = normalized.substr(0, normalized.length - 3);
      packageConfigPaths[i] = normalized + path.substr(packageLength);
    }
    loader.packageConfigPaths = packageConfigPaths;
  }

  if (cfg.bundles) {
    for (var p in cfg.bundles) {
      var bundle = [];
      for (var i = 0; i < cfg.bundles[p].length; i++) {
        var defaultJSExtension = loader.defaultJSExtensions && cfg.bundles[p][i].substr(cfg.bundles[p][i].length - 3, 3) != '.js';
        var normalizedBundleDep = loader.decanonicalize(cfg.bundles[p][i]);
        if (defaultJSExtension && normalizedBundleDep.substr(normalizedBundleDep.length - 3, 3) == '.js')
          normalizedBundleDep = normalizedBundleDep.substr(0, normalizedBundleDep.length - 3);
        bundle.push(normalizedBundleDep);
      }
      loader.bundles[p] = bundle;
    }
  }

  if (cfg.packages) {
    for (var p in cfg.packages) {
      if (p.match(/^([^\/]+:)?\/\/$/))
        throw new TypeError('"' + p + '" is not a valid package name.');

      var prop = coreResolve.call(loader, p);

      // allow trailing slash in packages
      if (prop[prop.length - 1] == '/')
        prop = prop.substr(0, prop.length - 1);

      setPkgConfig(loader, prop, cfg.packages[p], false, true);
    }
  }

  for (var c in cfg) {
    var v = cfg[c];

    if (['baseURL', 'map', 'packages', 'bundles', 'paths', 'warnings', 'packageConfigPaths', 
          'loaderErrorStack', 'browserConfig', 'nodeConfig', 'devConfig', 'productionConfig'].indexOf(c) != -1)
      continue;

    if (typeof v != 'object' || v instanceof Array) {
      loader[c] = v;
    }
    else {
      loader[c] = loader[c] || {};

      for (var p in v) {
        // base-level wildcard meta does not normalize to retain catch-all quality
        if (c == 'meta' && p[0] == '*') {
          extend(loader[c][p] = loader[c][p] || {}, v[p]);
        }
        else if (c == 'meta') {
          // meta can go through global map, with defaultJSExtensions adding
          var resolved = coreResolve.call(loader, p);
          if (loader.defaultJSExtensions && resolved.substr(resolved.length - 3, 3) != '.js' && !isPlain(resolved))
            resolved += '.js';
          extend(loader[c][resolved] = loader[c][resolved] || {}, v[p]);
        }
        else if (c == 'depCache') {
          var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
          var prop = loader.decanonicalize(p);
          if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
            prop = prop.substr(0, prop.length - 3);
          loader[c][prop] = [].concat(v[p]);
        }
        else {
          loader[c][p] = v[p];
        }
      }
    }
  }

  envSet(loader, cfg, function(cfg) {
    loader.config(cfg, true);
  });
};/*
 * Package Configuration Extension
 *
 * Example:
 *
 * SystemJS.packages = {
 *   jquery: {
 *     main: 'index.js', // when not set, package name is requested directly
 *     format: 'amd',
 *     defaultExtension: 'ts', // defaults to 'js', can be set to false
 *     modules: {
 *       '*.ts': {
 *         loader: 'typescript'
 *       },
 *       'vendor/sizzle.js': {
 *         format: 'global'
 *       }
 *     },
 *     map: {
 *        // map internal require('sizzle') to local require('./vendor/sizzle')
 *        sizzle: './vendor/sizzle.js',
 *        // map any internal or external require of 'jquery/vendor/another' to 'another/index.js'
 *        './vendor/another.js': './another/index.js',
 *        // test.js / test -> lib/test.js
 *        './test.js': './lib/test.js',
 *
 *        // environment-specific map configurations
 *        './index.js': {
 *          '~browser': './index-node.js',
 *          './custom-condition.js|~export': './index-custom.js'
 *        }
 *     },
 *     // allows for setting package-prefixed depCache
 *     // keys are normalized module names relative to the package itself
 *     depCache: {
 *       // import 'package/index.js' loads in parallel package/lib/test.js,package/vendor/sizzle.js
 *       './index.js': ['./test'],
 *       './test.js': ['external-dep'],
 *       'external-dep/path.js': ['./another.js']
 *     }
 *   }
 * };
 *
 * Then:
 *   import 'jquery'                       -> jquery/index.js
 *   import 'jquery/submodule'             -> jquery/submodule.js
 *   import 'jquery/submodule.ts'          -> jquery/submodule.ts loaded as typescript
 *   import 'jquery/vendor/another'        -> another/index.js
 *
 * Detailed Behaviours
 * - main can have a leading "./" can be added optionally
 * - map and defaultExtension are applied to the main
 * - defaultExtension adds the extension only if the exact extension is not present
 * - defaultJSExtensions applies after map when defaultExtension is not set
 * - if a meta value is available for a module, map and defaultExtension are skipped
 * - like global map, package map also applies to subpaths (sizzle/x, ./vendor/another/sub)
 * - condition module map is '@env' module in package or '@system-env' globally
 * - map targets support conditional interpolation ('./x': './x.#{|env}.js')
 * - internal package map targets cannot use boolean conditionals
 *
 * Package Configuration Loading
 *
 * Not all packages may already have their configuration present in the System config
 * For these cases, a list of packageConfigPaths can be provided, which when matched against
 * a request, will first request a ".json" file by the package name to derive the package
 * configuration from. This allows dynamic loading of non-predetermined code, a key use
 * case in SystemJS.
 *
 * Example:
 *
 *   SystemJS.packageConfigPaths = ['packages/test/package.json', 'packages/*.json'];
 *
 *   // will first request 'packages/new-package/package.json' for the package config
 *   // before completing the package request to 'packages/new-package/path'
 *   SystemJS.import('packages/new-package/path');
 *
 *   // will first request 'packages/test/package.json' before the main
 *   SystemJS.import('packages/test');
 *
 * When a package matches packageConfigPaths, it will always send a config request for
 * the package configuration.
 * The package name itself is taken to be the match up to and including the last wildcard
 * or trailing slash.
 * The most specific package config path will be used.
 * Any existing package configurations for the package will deeply merge with the
 * package config, with the existing package configurations taking preference.
 * To opt-out of the package configuration request for a package that matches
 * packageConfigPaths, use the { configured: true } package config option.
 *
 */
(function() {

  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.packages = {};
      this.packageConfigPaths = [];
    };
  });

  function getPackage(loader, normalized) {
    // use most specific package
    var curPkg, curPkgLen = 0, pkgLen;
    for (var p in loader.packages) {
      if (normalized.substr(0, p.length) === p && (normalized.length === p.length || normalized[p.length] === '/')) {
        pkgLen = p.split('/').length;
        if (pkgLen > curPkgLen) {
          curPkg = p;
          curPkgLen = pkgLen;
        }
      }
    }
    return curPkg;
  }

  function addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions) {
    // don't apply extensions to folders or if defaultExtension = false
    if (!subPath || subPath[subPath.length - 1] == '/' || skipExtensions || pkg.defaultExtension === false)
      return subPath;

    var metaMatch = false;

    // exact meta or meta with any content after the last wildcard skips extension
    if (pkg.meta)
      getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
          return metaMatch = true;
      });

    // exact global meta or meta with any content after the last wildcard skips extension
    if (!metaMatch && loader.meta)
      getMetaMatches(loader.meta, pkgName + '/' + subPath, function(metaPattern, matchMeta, matchDepth) {
        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
          return metaMatch = true;
      });

    if (metaMatch)
      return subPath;

    // work out what the defaultExtension is and add if not there already
    // NB reconsider if default should really be ".js"?
    var defaultExtension = '.' + (pkg.defaultExtension || 'js');
    if (subPath.substr(subPath.length - defaultExtension.length) != defaultExtension)
      return subPath + defaultExtension;
    else
      return subPath;
  }

  function applyPackageConfigSync(loader, pkg, pkgName, subPath, skipExtensions) {
    // main
    if (!subPath) {
      if (pkg.main)
        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
      else
        // NB can add a default package main convention here when defaultJSExtensions is deprecated
        // if it becomes internal to the package then it would no longer be an exit path
        return pkgName + (loader.defaultJSExtensions ? '.js' : '');
    }

    // map config checking without then with extensions
    if (pkg.map) {
      var mapPath = './' + subPath;

      var mapMatch = getMapMatch(pkg.map, mapPath);

      // we then check map with the default extension adding
      if (!mapMatch) {
        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
        if (mapPath != './' + subPath)
          mapMatch = getMapMatch(pkg.map, mapPath);
      }
      if (mapMatch)
        return doMapSync(loader, pkg, pkgName, mapMatch, mapPath, skipExtensions);
    }

    // normal package resolution
    return pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
  }

  function validateMapping(mapMatch, mapped, pkgName) {
    // disallow internal to subpath maps
    if (mapMatch == '.')
      throw new Error('Package ' + pkgName + ' has a map entry for "." which is not permitted.');
    // disallow internal ./x -> ./x/y recursive maps
    else if (mapped.substr(0, mapMatch.length) == mapMatch && (mapMatch[mapMatch.length - 1] != '/' && mapped[mapMatch.length] == '/'))
      throw new Error('Package ' + pkgName + ' has a recursive map for "' + mapMatch + '" which is not permitted.');
  }

  function doMapSync(loader, pkg, pkgName, mapMatch, path, skipExtensions) {
    var mapped = pkg.map[mapMatch];

    if (typeof mapped == 'object')
      throw new Error('Synchronous conditional normalization not supported sync normalizing ' + mapMatch + ' in ' + pkgName);

    validateMapping(mapMatch, mapped, pkgName);

    // ignore conditionals in sync
    if (typeof mapped != 'string')
      mapped = mapMatch = path;

    validateMapping(mapMatch, mapped, pkgName);

    // package map to main / base-level
    if (mapped == '.')
      mapped = pkgName;

    // internal package map
    else if (mapped.substr(0, 2) == './')
      return pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions);
    
    // external map reference
    return loader.normalizeSync(mapped + path.substr(mapMatch.length), pkgName + '/');
  }

  function applyPackageConfig(loader, pkg, pkgName, subPath, skipExtensions) {
    // main
    if (!subPath) {
      if (pkg.main)
        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
      else
        // NB can add a default package main convention here when defaultJSExtensions is deprecated
        // if it becomes internal to the package then it would no longer be an exit path
        return Promise.resolve(pkgName + (loader.defaultJSExtensions ? '.js' : ''));
    }

    // map config checking without then with extensions
    var mapPath, mapMatch;

    if (pkg.map) {
      mapPath = './' + subPath;
      mapMatch = getMapMatch(pkg.map, mapPath);

      // we then check map with the default extension adding
      if (!mapMatch) {
        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
        if (mapPath != './' + subPath)
          mapMatch = getMapMatch(pkg.map, mapPath);
      }
    }

    return (mapMatch ? doMap(loader, pkg, pkgName, mapMatch, mapPath, skipExtensions) : Promise.resolve())
    .then(function(mapped) {
      if (mapped)
        return Promise.resolve(mapped);

      // normal package resolution / fallback resolution for no conditional match
      return Promise.resolve(pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions));
    });
  }

  function doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions) {
    // NB the interpolation cases should strictly skip subsequent interpolation

    // package map to main / base-level
    if (mapped == '.')
      mapped = pkgName;
    
    // internal package map
    else if (mapped.substr(0, 2) == './')
      return Promise.resolve(pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions))
      .then(function(name) {
        return interpolateConditional.call(loader, name, pkgName + '/');
      });
    
    // external map reference
    return loader.normalize(mapped + path.substr(mapMatch.length), pkgName + '/');
  }

  function doMap(loader, pkg, pkgName, mapMatch, path, skipExtensions) {
    var mapped = pkg.map[mapMatch];

    if (typeof mapped == 'string') {
      validateMapping(mapMatch, mapped, pkgName);
      return doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions);
    }

    // we use a special conditional syntax to allow the builder to handle conditional branch points further
    if (loader.builder)
      return Promise.resolve(pkgName + '/#:' + path);

    // we load all conditions upfront
    var conditionPromises = [];
    var conditions = [];
    for (var e in mapped) {
      var c = parseCondition(e);
      conditions.push({
        condition: c,
        map: mapped[e]
      });
      conditionPromises.push(loader['import'](c.module, pkgName));
    }

    // map object -> conditional map
    return Promise.all(conditionPromises)
    .then(function(conditionValues) {
      // first map condition to match is used
      for (var i = 0; i < conditions.length; i++) {
        var c = conditions[i].condition;
        var value = readMemberExpression(c.prop, conditionValues[i]);
        if (!c.negate && value || c.negate && !value)
          return conditions[i].map;
      }
    })
    .then(function(mapped) {
      if (mapped) {
        if (typeof mapped != 'string')
          throw new Error('Unable to map a package conditional to a package conditional.');
        validateMapping(mapMatch, mapped, pkgName);
        return doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions);
      }

      // no environment match -> fallback to original subPath by returning undefined
    });
  }

  // normalizeSync = decanonicalize + package resolution
  SystemJSLoader.prototype.normalizeSync = SystemJSLoader.prototype.decanonicalize = SystemJSLoader.prototype.normalize;

  // decanonicalize must JUST handle package defaultExtension: false case when defaultJSExtensions is set
  // to be deprecated!
  hook('decanonicalize', function(decanonicalize) {
    return function(name, parentName) {
      if (this.builder)
        return decanonicalize.call(this, name, parentName, true);

      var decanonicalized = decanonicalize.call(this, name, parentName);

      if (!this.defaultJSExtensions)
        return decanonicalized;
    
      var pkgName = getPackage(this, decanonicalized);

      var pkg = this.packages[pkgName];
      var defaultExtension = pkg && pkg.defaultExtension;

      if (defaultExtension == undefined && pkg && pkg.meta)
        getMetaMatches(pkg.meta, decanonicalized.substr(pkgName), function(metaPattern, matchMeta, matchDepth) {
          if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1) {
            defaultExtension = false;
            return true;
          }
        });
      
      if ((defaultExtension === false || defaultExtension && defaultExtension != '.js') && name.substr(name.length - 3, 3) != '.js' && decanonicalized.substr(decanonicalized.length - 3, 3) == '.js')
        decanonicalized = decanonicalized.substr(0, decanonicalized.length - 3);

      return decanonicalized;
    };
  });

  hook('normalizeSync', function(normalizeSync) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      isPlugin = isPlugin === true;

      // apply contextual package map first
      // (we assume the parent package config has already been loaded)
      if (parentName)
        var parentPackageName = getPackage(loader, parentName) ||
            loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
            getPackage(loader, parentName.substr(0, parentName.length - 3));

      var parentPackage = parentPackageName && loader.packages[parentPackageName];

      // ignore . since internal maps handled by standard package resolution
      if (parentPackage && name[0] != '.') {
        var parentMap = parentPackage.map;
        var parentMapMatch = parentMap && getMapMatch(parentMap, name);

        if (parentMapMatch && typeof parentMap[parentMapMatch] == 'string')
          return doMapSync(loader, parentPackage, parentPackageName, parentMapMatch, name, isPlugin);
      }

      var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

      // apply map, core, paths, contextual package map
      var normalized = normalizeSync.call(loader, name, parentName);

      // undo defaultJSExtension
      if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
        defaultJSExtension = false;
      if (defaultJSExtension)
        normalized = normalized.substr(0, normalized.length - 3);

      var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
      var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

      if (!pkgName)
        return normalized + (defaultJSExtension ? '.js' : '');

      var subPath = normalized.substr(pkgName.length + 1);

      return applyPackageConfigSync(loader, loader.packages[pkgName] || {}, pkgName, subPath, isPlugin);
    };
  });

  hook('normalize', function(normalize) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      isPlugin = isPlugin === true;

      return Promise.resolve()
      .then(function() {
        // apply contextual package map first
        // (we assume the parent package config has already been loaded)
        if (parentName)
          var parentPackageName = getPackage(loader, parentName) ||
              loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
              getPackage(loader, parentName.substr(0, parentName.length - 3));

        var parentPackage = parentPackageName && loader.packages[parentPackageName];

        // ignore . since internal maps handled by standard package resolution
        if (parentPackage && name.substr(0, 2) != './') {
          var parentMap = parentPackage.map;
          var parentMapMatch = parentMap && getMapMatch(parentMap, name);

          if (parentMapMatch)
            return doMap(loader, parentPackage, parentPackageName, parentMapMatch, name, isPlugin);
        }

        return Promise.resolve();
      })
      .then(function(mapped) {
        if (mapped)
          return mapped;

        var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

        // apply map, core, paths, contextual package map
        var normalized = normalize.call(loader, name, parentName);

        // undo defaultJSExtension
        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
          defaultJSExtension = false;
        if (defaultJSExtension)
          normalized = normalized.substr(0, normalized.length - 3);

        var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
        var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

        if (!pkgName)
          return Promise.resolve(normalized + (defaultJSExtension ? '.js' : ''));

        var pkg = loader.packages[pkgName];

        // if package is already configured or not a dynamic config package, use existing package config
        var isConfigured = pkg && (pkg.configured || !pkgConfigMatch);
        return (isConfigured ? Promise.resolve(pkg) : loadPackageConfigPath(loader, pkgName, pkgConfigMatch.configPath))
        .then(function(pkg) {
          var subPath = normalized.substr(pkgName.length + 1);

          return applyPackageConfig(loader, pkg, pkgName, subPath, isPlugin);
        });
      });
    };
  });

  // check if the given normalized name matches a packageConfigPath
  // if so, loads the config
  var packageConfigPaths = {};

  // data object for quick checks against package paths
  function createPkgConfigPathObj(path) {
    var lastWildcard = path.lastIndexOf('*');
    var length = Math.max(lastWildcard + 1, path.lastIndexOf('/'));
    return {
      length: length,
      regEx: new RegExp('^(' + path.substr(0, length).replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^\\/]+') + ')(\\/|$)'),
      wildcard: lastWildcard != -1
    };
  }

  // most specific match wins
  function getPackageConfigMatch(loader, normalized) {
    var pkgName, exactMatch = false, configPath;
    for (var i = 0; i < loader.packageConfigPaths.length; i++) {
      var packageConfigPath = loader.packageConfigPaths[i];
      var p = packageConfigPaths[packageConfigPath] || (packageConfigPaths[packageConfigPath] = createPkgConfigPathObj(packageConfigPath));
      if (normalized.length < p.length)
        continue;
      var match = normalized.match(p.regEx);
      if (match && (!pkgName || (!(exactMatch && p.wildcard) && pkgName.length < match[1].length))) {
        pkgName = match[1];
        exactMatch = !p.wildcard;
        configPath = pkgName + packageConfigPath.substr(p.length);
      }
    }

    if (!pkgName)
      return;

    return {
      packageName: pkgName,
      configPath: configPath
    };
  }

  function loadPackageConfigPath(loader, pkgName, pkgConfigPath) {
    var configLoader = loader.pluginLoader || loader;

    // NB remove this when json is default
    (configLoader.meta[pkgConfigPath] = configLoader.meta[pkgConfigPath] || {}).format = 'json';
    configLoader.meta[pkgConfigPath].loader = null;

    return configLoader.load(pkgConfigPath)
    .then(function() {
      var cfg = configLoader.get(pkgConfigPath)['default'];

      // support "systemjs" prefixing
      if (cfg.systemjs)
        cfg = cfg.systemjs;

      // modules backwards compatibility
      if (cfg.modules) {
        cfg.meta = cfg.modules;
        warn.call(loader, 'Package config file ' + pkgConfigPath + ' is configured with "modules", which is deprecated as it has been renamed to "meta".');
      }

      return setPkgConfig(loader, pkgName, cfg, true, false);
    });
  }

  function getMetaMatches(pkgMeta, subPath, matchFn) {
    // wildcard meta
    var meta = {};
    var wildcardIndex;
    for (var module in pkgMeta) {
      // allow meta to start with ./ for flexibility
      var dotRel = module.substr(0, 2) == './' ? './' : '';
      if (dotRel)
        module = module.substr(2);

      wildcardIndex = module.indexOf('*');
      if (wildcardIndex === -1)
        continue;

      if (module.substr(0, wildcardIndex) == subPath.substr(0, wildcardIndex)
          && module.substr(wildcardIndex + 1) == subPath.substr(subPath.length - module.length + wildcardIndex + 1)) {
        // alow match function to return true for an exit path
        if (matchFn(module, pkgMeta[dotRel + module], module.split('/').length))
          return;
      }
    }
    // exact meta
    var exactMeta = pkgMeta[subPath] && pkgMeta.hasOwnProperty && pkgMeta.hasOwnProperty(subPath) ? pkgMeta[subPath] : pkgMeta['./' + subPath];
    if (exactMeta)
      matchFn(exactMeta, exactMeta, 0);
  }

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      return Promise.resolve(locate.call(this, load))
      .then(function(address) {
        var pkgName = getPackage(loader, load.name);
        if (pkgName) {
          var pkg = loader.packages[pkgName];
          var subPath = load.name.substr(pkgName.length + 1);

          var meta = {};
          if (pkg.meta) {
            var bestDepth = 0;

            // NB support a main shorthand in meta here?
            getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
              if (matchDepth > bestDepth)
                bestDepth = matchDepth;
              extendMeta(meta, matchMeta, matchDepth && bestDepth > matchDepth);
            });

            extendMeta(load.metadata, meta);
          }

          // format
          if (pkg.format && !load.metadata.loader)
            load.metadata.format = load.metadata.format || pkg.format;
        }

        return address;
      });
    };
  });

})();
/*
 * Script tag fetch
 *
 * When load.metadata.scriptLoad is true, we load via script tag injection.
 */
(function() {

  if (typeof document != 'undefined')
    var head = document.getElementsByTagName('head')[0];

  var curSystem;
  var curRequire;

  // if doing worker executing, this is set to the load record being executed
  var workerLoad = null;
  
  // interactive mode handling method courtesy RequireJS
  var ieEvents = head && (function() {
    var s = document.createElement('script');
    var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]';
    return s.attachEvent && !(s.attachEvent.toString && s.attachEvent.toString().indexOf('[native code') < 0) && !isOpera;
  })();

  // IE interactive-only part
  // we store loading scripts array as { script: <script>, load: {...} }
  var interactiveLoadingScripts = [];
  var interactiveScript;
  function getInteractiveScriptLoad() {
    if (interactiveScript && interactiveScript.script.readyState === 'interactive')
      return interactiveScript.load;

    for (var i = 0; i < interactiveLoadingScripts.length; i++)
      if (interactiveLoadingScripts[i].script.readyState == 'interactive') {
        interactiveScript = interactiveLoadingScripts[i];
        return interactiveScript.load;
      }
  }
  
  // System.register, System.registerDynamic, AMD define pipeline
  // this is called by the above methods when they execute
  // we then run the reduceRegister_ collection function either immediately
  // if we are in IE and know the currently executing script (interactive)
  // or later if we need to wait for the synchronous load callback to know the script
  var loadingCnt = 0;
  var registerQueue = [];
  hook('pushRegister_', function(pushRegister) {
    return function(register) {
      // if using eval-execution then skip
      if (pushRegister.call(this, register))
        return false;

      // if using worker execution, then we're done
      if (workerLoad)
        this.reduceRegister_(workerLoad, register);

      // detect if we know the currently executing load (IE)
      // if so, immediately call reduceRegister
      else if (ieEvents)
        this.reduceRegister_(getInteractiveScriptLoad(), register);

      // otherwise, add to our execution queue
      // to call reduceRegister on sync script load event
      else if (loadingCnt)
        registerQueue.push(register);

      // if we're not currently loading anything though
      // then do the reduction against a null load
      // (out of band named define or named register)
      // note even in non-script environments, this catch is used
      else
        this.reduceRegister_(null, register);

      return true;
    };
  });

  function webWorkerImport(loader, load) {
    return new Promise(function(resolve, reject) {
      if (load.metadata.integrity)
        reject(new Error('Subresource integrity checking is not supported in web workers.'));

      workerLoad = load;
      try {
        importScripts(load.address);
      }
      catch(e) {
        workerLoad = null;
        reject(e);
      }
      workerLoad = null;

      // if nothing registered, then something went wrong
      if (!load.metadata.entry)
        reject(new Error(load.address + ' did not call System.register or AMD define'));

      resolve('');
    });
  }

  // override fetch to use script injection
  hook('fetch', function(fetch) {
    return function(load) {
      var loader = this;

      if (load.metadata.format == 'json' || !load.metadata.scriptLoad || (!isBrowser && !isWorker))
        return fetch.call(this, load);

      if (isWorker)
        return webWorkerImport(loader, load);

      return new Promise(function(resolve, reject) {
        var s = document.createElement('script');
        
        s.async = true;

        if (load.metadata.crossOrigin)
          s.crossOrigin = load.metadata.crossOrigin;

        if (load.metadata.integrity)
          s.setAttribute('integrity', load.metadata.integrity);

        if (ieEvents) {
          s.attachEvent('onreadystatechange', complete);
          interactiveLoadingScripts.push({
            script: s,
            load: load
          });
        }
        else {
          s.addEventListener('load', complete, false);
          s.addEventListener('error', error, false);
        }

        loadingCnt++;

        curSystem = __global.System;
        curRequire = __global.require;

        s.src = load.address;
        head.appendChild(s);

        function complete(evt) {
          if (s.readyState && s.readyState != 'loaded' && s.readyState != 'complete')
            return;

          loadingCnt--;

          // complete call is sync on execution finish
          // (in ie already done reductions)
          if (!load.metadata.entry && !registerQueue.length) {
            loader.reduceRegister_(load);
          }
          else if (!ieEvents) {
            for (var i = 0; i < registerQueue.length; i++)
              loader.reduceRegister_(load, registerQueue[i]);
            registerQueue = [];
          }

          cleanup();

          // if nothing registered, then something went wrong
          if (!load.metadata.entry && !load.metadata.bundle)
            reject(new Error(load.name + ' did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.'));

          resolve('');
        }

        function error(evt) {
          cleanup();
          reject(new Error('Unable to load script ' + load.address));
        }

        function cleanup() {
          __global.System = curSystem;
          __global.require = curRequire;

          if (s.detachEvent) {
            s.detachEvent('onreadystatechange', complete);
            for (var i = 0; i < interactiveLoadingScripts.length; i++)
              if (interactiveLoadingScripts[i].script == s) {
                if (interactiveScript && interactiveScript.script == s)
                  interactiveScript = null;
                interactiveLoadingScripts.splice(i, 1);
              }
          }
          else {
            s.removeEventListener('load', complete, false);
            s.removeEventListener('error', error, false);
          }

          head.removeChild(s);
        }
      });
    };
  });
})();
/*
 * Instantiate registry extension
 *
 * Supports Traceur System.register 'instantiate' output for loading ES6 as ES5.
 *
 * - Creates the loader.register function
 * - Also supports metadata.format = 'register' in instantiate for anonymous register modules
 * - Also supports metadata.deps, metadata.execute and metadata.executingRequire
 *     for handling dynamic modules alongside register-transformed ES6 modules
 *
 *
 * The code here replicates the ES6 linking groups algorithm to ensure that
 * circular ES6 compiled into System.register can work alongside circular AMD 
 * and CommonJS, identically to the actual ES6 loader.
 *
 */


/*
 * Registry side table entries in loader.defined
 * Registry Entry Contains:
 *    - name
 *    - deps 
 *    - declare for declarative modules
 *    - execute for dynamic modules, different to declarative execute on module
 *    - executingRequire indicates require drives execution for circularity of dynamic modules
 *    - declarative optional boolean indicating which of the above
 *
 * Can preload modules directly on SystemJS.defined['my/module'] = { deps, execute, executingRequire }
 *
 * Then the entry gets populated with derived information during processing:
 *    - normalizedDeps derived from deps, created in instantiate
 *    - groupIndex used by group linking algorithm
 *    - evaluated indicating whether evaluation has happend
 *    - module the module record object, containing:
 *      - exports actual module exports
 *
 *    For dynamic we track the es module with:
 *    - esModule actual es module value
 *    - esmExports whether to extend the esModule with named exports
 *      
 *    Then for declarative only we track dynamic bindings with the 'module' records:
 *      - name
 *      - exports
 *      - setters declarative setter functions
 *      - dependencies, module records of dependencies
 *      - importers, module records of dependents
 *
 * After linked and evaluated, entries are removed, declarative module records remain in separate
 * module binding table
 *
 */

var leadingCommentAndMetaRegEx = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
function detectRegisterFormat(source) {
  var leadingCommentAndMeta = source.match(leadingCommentAndMetaRegEx);
  return leadingCommentAndMeta && source.substr(leadingCommentAndMeta[0].length, 15) == 'System.register';
}

function createEntry() {
  return {
    name: null,
    deps: null,
    originalIndices: null,
    declare: null,
    execute: null,
    executingRequire: false,
    declarative: false,
    normalizedDeps: null,
    groupIndex: null,
    evaluated: false,
    module: null,
    esModule: null,
    esmExports: false
  };
}

(function() {

  /*
   * There are two variations of System.register:
   * 1. System.register for ES6 conversion (2-3 params) - System.register([name, ]deps, declare)
   *    see https://github.com/ModuleLoader/es6-module-loader/wiki/System.register-Explained
   *
   * 2. System.registerDynamic for dynamic modules (3-4 params) - System.registerDynamic([name, ]deps, executingRequire, execute)
   * the true or false statement 
   *
   * this extension implements the linking algorithm for the two variations identical to the spec
   * allowing compiled ES6 circular references to work alongside AMD and CJS circular references.
   *
   */
  SystemJSLoader.prototype.register = function(name, deps, declare) {
    if (typeof name != 'string') {
      declare = deps;
      deps = name;
      name = null;
    }

    // dynamic backwards-compatibility
    // can be deprecated eventually
    if (typeof declare == 'boolean')
      return this.registerDynamic.apply(this, arguments);

    var entry = createEntry();
    // ideally wouldn't apply map config to bundle names but 
    // dependencies go through map regardless so we can't restrict
    // could reconsider in shift to new spec
    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
    entry.declarative = true;
    entry.deps = deps;
    entry.declare = declare;

    this.pushRegister_({
      amd: false,
      entry: entry
    });
  };
  SystemJSLoader.prototype.registerDynamic = function(name, deps, declare, execute) {
    if (typeof name != 'string') {
      execute = declare;
      declare = deps;
      deps = name;
      name = null;
    }

    // dynamic
    var entry = createEntry();
    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
    entry.deps = deps;
    entry.execute = execute;
    entry.executingRequire = declare;

    this.pushRegister_({
      amd: false,
      entry: entry
    });
  };
  hook('reduceRegister_', function() {
    return function(load, register) {
      if (!register)
        return;

      var entry = register.entry;
      var curMeta = load && load.metadata;

      // named register
      if (entry.name) {
        if (!(entry.name in this.defined))
          this.defined[entry.name] = entry;

        if (curMeta)
          curMeta.bundle = true;
      }
      // anonymous register
      if (!entry.name || load && !curMeta.entry && entry.name == load.name) {
        if (!curMeta)
          throw new TypeError('Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.');
        if (curMeta.entry) {
          if (curMeta.format == 'register')
            throw new Error('Multiple anonymous System.register calls in module ' + load.name + '. If loading a bundle, ensure all the System.register calls are named.');
          else
            throw new Error('Module ' + load.name + ' interpreted as ' + curMeta.format + ' module format, but called System.register.');
        }
        if (!curMeta.format)
          curMeta.format = 'register';
        curMeta.entry = entry;
      }
    };
  });

  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);

      this.defined = {};
      this._loader.moduleRecords = {};
    };
  });

  function buildGroups(entry, loader, groups) {
    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
      return;

    groups[entry.groupIndex].push(entry);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = loader.defined[depName];
      
      // not in the registry means already linked / ES6
      if (!depEntry || depEntry.evaluated)
        continue;
      
      // now we know the entry is in our unlinked linkage group
      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

      // the group index of an entry is always the maximum
      if (depEntry.groupIndex === null || depEntry.groupIndex < depGroupIndex) {
        
        // if already in a group, remove from the old group
        if (depEntry.groupIndex !== null) {
          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

          // if the old group is empty, then we have a mixed depndency cycle
          if (groups[depEntry.groupIndex].length == 0)
            throw new Error("Mixed dependency cycle detected");
        }

        depEntry.groupIndex = depGroupIndex;
      }

      buildGroups(depEntry, loader, groups);
    }
  }

  function link(name, loader) {
    var startEntry = loader.defined[name];

    // skip if already linked
    if (startEntry.module)
      return;

    startEntry.groupIndex = 0;

    var groups = [];

    buildGroups(startEntry, loader, groups);

    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
    for (var i = groups.length - 1; i >= 0; i--) {
      var group = groups[i];
      for (var j = 0; j < group.length; j++) {
        var entry = group[j];

        // link each group
        if (curGroupDeclarative)
          linkDeclarativeModule(entry, loader);
        else
          linkDynamicModule(entry, loader);
      }
      curGroupDeclarative = !curGroupDeclarative; 
    }
  }

  // module binding records
  function ModuleRecord() {}
  defineProperty(ModuleRecord, 'toString', {
    value: function() {
      return 'Module';
    }
  });

  function getOrCreateModuleRecord(name, moduleRecords) {
    return moduleRecords[name] || (moduleRecords[name] = {
      name: name,
      dependencies: [],
      exports: new ModuleRecord(), // start from an empty module and extend
      importers: []
    });
  }

  function linkDeclarativeModule(entry, loader) {
    // only link if already not already started linking (stops at circular)
    if (entry.module)
      return;

    var moduleRecords = loader._loader.moduleRecords;
    var module = entry.module = getOrCreateModuleRecord(entry.name, moduleRecords);
    var exports = entry.module.exports;

    var declaration = entry.declare.call(__global, function(name, value) {
      module.locked = true;

      if (typeof name == 'object') {
        for (var p in name)
          exports[p] = name[p];
      }
      else {
        exports[name] = value;
      }

      for (var i = 0, l = module.importers.length; i < l; i++) {
        var importerModule = module.importers[i];
        if (!importerModule.locked) {
          var importerIndex = indexOf.call(importerModule.dependencies, module);
          importerModule.setters[importerIndex](exports);
        }
      }

      module.locked = false;
      return value;
    }, { id: entry.name });
    
    module.setters = declaration.setters;
    module.execute = declaration.execute;

    if (!module.setters || !module.execute) {
      throw new TypeError('Invalid System.register form for ' + entry.name);
    }

    // now link all the module dependencies
    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = loader.defined[depName];
      var depModule = moduleRecords[depName];

      // work out how to set depExports based on scenarios...
      var depExports;

      if (depModule) {
        depExports = depModule.exports;
      }
      // dynamic, already linked in our registry
      else if (depEntry && !depEntry.declarative) {
        depExports = depEntry.esModule;
      }
      // in the loader registry
      else if (!depEntry) {
        depExports = loader.get(depName);
      }
      // we have an entry -> link
      else {
        linkDeclarativeModule(depEntry, loader);
        depModule = depEntry.module;
        depExports = depModule.exports;
      }

      // only declarative modules have dynamic bindings
      if (depModule && depModule.importers) {
        depModule.importers.push(module);
        module.dependencies.push(depModule);
      }
      else {
        module.dependencies.push(null);
      }
      
      // run setters for all entries with the matching dependency name
      var originalIndices = entry.originalIndices[i];
      for (var j = 0, len = originalIndices.length; j < len; ++j) {
        var index = originalIndices[j];
        if (module.setters[index]) {
          module.setters[index](depExports);
        }
      }
    }
  }

  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
  function getModule(name, loader) {
    var exports;
    var entry = loader.defined[name];

    if (!entry) {
      exports = loader.get(name);
      if (!exports)
        throw new Error('Unable to load dependency ' + name + '.');
    }

    else {
      if (entry.declarative)
        ensureEvaluated(name, [], loader);
    
      else if (!entry.evaluated)
        linkDynamicModule(entry, loader);

      exports = entry.module.exports;
    }

    if ((!entry || entry.declarative) && exports && exports.__useDefault)
      return exports['default'];
    
    return exports;
  }

  function linkDynamicModule(entry, loader) {
    if (entry.module)
      return;

    var exports = {};

    var module = entry.module = { exports: exports, id: entry.name };

    // AMD requires execute the tree first
    if (!entry.executingRequire) {
      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        // we know we only need to link dynamic due to linking algorithm
        var depEntry = loader.defined[depName];
        if (depEntry)
          linkDynamicModule(depEntry, loader);
      }
    }

    // now execute
    entry.evaluated = true;
    var output = entry.execute.call(__global, function(name) {
      for (var i = 0, l = entry.deps.length; i < l; i++) {
        if (entry.deps[i] != name)
          continue;
        return getModule(entry.normalizedDeps[i], loader);
      }
      // try and normalize the dependency to see if we have another form
      var nameNormalized = loader.normalizeSync(name, entry.name);
      if (indexOf.call(entry.normalizedDeps, nameNormalized) != -1)
        return getModule(nameNormalized, loader);

      throw new Error('Module ' + name + ' not declared as a dependency of ' + entry.name);
    }, exports, module);
    
    if (output)
      module.exports = output;

    // create the esModule object, which allows ES6 named imports of dynamics
    exports = module.exports;

    // __esModule flag treats as already-named
    if (exports && (exports.__esModule || exports instanceof Module))
      entry.esModule = exports;
    // set module as 'default' export, then fake named exports by iterating properties
    else if (entry.esmExports && exports !== __global)
      entry.esModule = getESModule(exports);
    // just use the 'default' export
    else
      entry.esModule = { 'default': exports };
  }

  /*
   * Given a module, and the list of modules for this current branch,
   *  ensure that each of the dependencies of this module is evaluated
   *  (unless one is a circular dependency already in the list of seen
   *  modules, in which case we execute it)
   *
   * Then we evaluate the module itself depth-first left to right 
   * execution to match ES6 modules
   */
  function ensureEvaluated(moduleName, seen, loader) {
    var entry = loader.defined[moduleName];

    // if already seen, that means it's an already-evaluated non circular dependency
    if (!entry || entry.evaluated || !entry.declarative)
      return;

    // this only applies to declarative modules which late-execute

    seen.push(moduleName);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      if (indexOf.call(seen, depName) == -1) {
        if (!loader.defined[depName])
          loader.get(depName);
        else
          ensureEvaluated(depName, seen, loader);
      }
    }

    if (entry.evaluated)
      return;

    entry.evaluated = true;
    entry.module.execute.call(__global);
  }

  // override the delete method to also clear the register caches
  hook('delete', function(del) {
    return function(name) {
      delete this._loader.moduleRecords[name];
      delete this.defined[name];
      return del.call(this, name);
    };
  });

  hook('fetch', function(fetch) {
    return function(load) {
      if (this.defined[load.name]) {
        load.metadata.format = 'defined';
        return '';
      }

      load.metadata.deps = load.metadata.deps || [];
      
      return fetch.call(this, load);
    };
  });

  hook('translate', function(translate) {
    // we run the meta detection here (register is after meta)
    return function(load) {
      load.metadata.deps = load.metadata.deps || [];
      return Promise.resolve(translate.call(this, load)).then(function(source) {
        // run detection for register format
        if (load.metadata.format == 'register' || !load.metadata.format && detectRegisterFormat(load.source))
          load.metadata.format = 'register';
        return source;
      });
    };
  });

  hook('instantiate', function(instantiate) {
    return function(load) {
      if (load.metadata.format == 'detect')
        load.metadata.format = undefined;

      // assumes previous instantiate is sync
      // (core json support)
      instantiate.call(this, load);

      var loader = this;

      var entry;

      // first we check if this module has already been defined in the registry
      if (loader.defined[load.name]) {
        entry = loader.defined[load.name];
        // don't support deps for ES modules
        if (!entry.declarative)
          entry.deps = entry.deps.concat(load.metadata.deps);
        entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // picked up already by an anonymous System.register script injection
      // or via the dynamic formats
      else if (load.metadata.entry) {
        entry = load.metadata.entry;
        entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // Contains System.register calls
      // (dont run bundles in the builder)
      else if (!(loader.builder && load.metadata.bundle) 
          && (load.metadata.format == 'register' || load.metadata.format == 'esm' || load.metadata.format == 'es6')) {
        
        if (typeof __exec != 'undefined')
          __exec.call(loader, load);

        if (!load.metadata.entry && !load.metadata.bundle)
          throw new Error(load.name + ' detected as ' + load.metadata.format + ' but didn\'t execute.');

        entry = load.metadata.entry;

        // support metadata deps for System.register
        if (entry && load.metadata.deps)
          entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // named bundles are just an empty module
      if (!entry) {
        entry = createEntry();
        entry.deps = load.metadata.deps;
        entry.execute = function() {};
      }

      // place this module onto defined for circular references
      loader.defined[load.name] = entry;
      
      var grouped = group(entry.deps);
      
      entry.deps = grouped.names;
      entry.originalIndices = grouped.indices;
      entry.name = load.name;
      entry.esmExports = load.metadata.esmExports !== false;

      // first, normalize all dependencies
      var normalizePromises = [];
      for (var i = 0, l = entry.deps.length; i < l; i++)
        normalizePromises.push(Promise.resolve(loader.normalize(entry.deps[i], load.name)));

      return Promise.all(normalizePromises).then(function(normalizedDeps) {

        entry.normalizedDeps = normalizedDeps;

        return {
          deps: entry.deps,
          execute: function() {
            // recursively ensure that the module and all its 
            // dependencies are linked (with dependency group handling)
            link(load.name, loader);

            // now handle dependency execution in correct order
            ensureEvaluated(load.name, [], loader);

            // remove from the registry
            loader.defined[load.name] = undefined;

            // return the defined module object
            return loader.newModule(entry.declarative ? entry.module.exports : entry.esModule);
          }
        };
      });
    };
  });
})();
/*
 * Extension to detect ES6 and auto-load Traceur or Babel for processing
 */
(function() {
  // good enough ES6 module detection regex - format detections not designed to be accurate, but to handle the 99% use case
  var esmRegEx = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/;

  var traceurRuntimeRegEx = /\$traceurRuntime\s*\./;
  var babelHelpersRegEx = /babelHelpers\s*\./;

  hook('translate', function(translate) {
    return function(load) {
      var loader = this;
      return translate.call(loader, load)
      .then(function(source) {
        // detect & transpile ES6
        if (load.metadata.format == 'esm' || load.metadata.format == 'es6' || !load.metadata.format && source.match(esmRegEx)) {
          if (load.metadata.format == 'es6')
            warn.call(loader, 'Module ' + load.name + ' has metadata setting its format to "es6", which is deprecated.\nThis should be updated to "esm".');

          load.metadata.format = 'esm';

          if (load.metadata.deps) {
            var depInject = '';
            for (var i = 0; i < load.metadata.deps.length; i++)
              depInject += 'import "' + load.metadata.deps[i] + '"; ';
            load.source = depInject + source;
          }

          if (loader.transpiler === false) {
            // we accept translation to esm for builds though to enable eg rollup optimizations
            if (loader.builder)
              return source;
            throw new TypeError('Unable to dynamically transpile ES module as SystemJS.transpiler set to false.');
          }

          // setting _loader.loadedTranspiler = false tells the next block to
          // do checks for setting transpiler metadata
          loader._loader.loadedTranspiler = loader._loader.loadedTranspiler || false;
          if (loader.pluginLoader)
            loader.pluginLoader._loader.loadedTranspiler = loader._loader.loadedTranspiler || false;

          // do transpilation
          return (loader._loader.transpilerPromise || (
            loader._loader.transpilerPromise = Promise.resolve(
              __global[loader.transpiler == 'typescript' ? 'ts' : loader.transpiler] || (loader.pluginLoader || loader)['import'](loader.transpiler)
          ))).then(function(transpiler) {
            loader._loader.loadedTranspilerRuntime = true;

            // translate hooks means this is a transpiler plugin instead of a raw implementation
            if (transpiler.translate) {
              // if transpiler is the same as the plugin loader, then don't run twice
              if (transpiler == load.metadata.loaderModule)
                return load.source;

              // convert the source map into an object for transpilation chaining
              if (typeof load.metadata.sourceMap == 'string')
                load.metadata.sourceMap = JSON.parse(load.metadata.sourceMap);

              return Promise.resolve(transpiler.translate.call(loader, load))
              .then(function(source) {
                // sanitize sourceMap if an object not a JSON string
                var sourceMap = load.metadata.sourceMap;
                if (sourceMap && typeof sourceMap == 'object') {
                  var originalName = load.address.split('!')[0];
                  
                  // force set the filename of the original file
                  if (!sourceMap.file || sourceMap.file == load.address)
                    sourceMap.file = originalName + '!transpiled';

                  // force set the sources list if only one source
                  if (!sourceMap.sources || sourceMap.sources.length <= 1 && (!sourceMap.sources[0] || sourceMap.sources[0] == load.address))
                    sourceMap.sources = [originalName];
                }

                if (load.metadata.format == 'esm' && !loader.builder && detectRegisterFormat(source))
                  load.metadata.format = 'register';
                return source;
              });
            }

            // legacy builder support
            if (loader.builder)
              load.metadata.originalSource = load.source;
            
            // defined in es6-module-loader/src/transpile.js
            return transpile.call(loader, load)
            .then(function(source) {
              // clear sourceMap as transpiler embeds it
              load.metadata.sourceMap = undefined;
              return source;
            });            
          });
        }

        // skip transpiler and transpiler runtime loading when transpiler is disabled
        if (loader.transpiler === false)
          return source;

        // load the transpiler correctly
        if (loader._loader.loadedTranspiler === false && (loader.transpiler == 'traceur' || loader.transpiler == 'typescript' || loader.transpiler == 'babel')
            && load.name == loader.normalizeSync(loader.transpiler)) {

          // always load transpiler as a global
          if (source.length > 100 && !load.metadata.format) {
            load.metadata.format = 'global';

            if (loader.transpiler === 'traceur')
              load.metadata.exports = 'traceur';
            if (loader.transpiler === 'typescript')
              load.metadata.exports = 'ts';
          }

          loader._loader.loadedTranspiler = true;
        }

        // load the transpiler runtime correctly
        if (loader._loader.loadedTranspilerRuntime === false) {
          if (load.name == loader.normalizeSync('traceur-runtime')
              || load.name == loader.normalizeSync('babel/external-helpers*')) {
            if (source.length > 100)
              load.metadata.format = load.metadata.format || 'global';

            loader._loader.loadedTranspilerRuntime = true;
          }
        }

        // detect transpiler runtime usage to load runtimes
        if ((load.metadata.format == 'register' || load.metadata.bundle) && loader._loader.loadedTranspilerRuntime !== true) {
          if (!__global.$traceurRuntime && load.source.match(traceurRuntimeRegEx)) {
            loader._loader.loadedTranspilerRuntime = loader._loader.loadedTranspilerRuntime || false;
            return loader['import']('traceur-runtime').then(function() {
              return source;
            });
          }
          if (!__global.babelHelpers && load.source.match(babelHelpersRegEx)) {
            loader._loader.loadedTranspilerRuntime = loader._loader.loadedTranspilerRuntime || false;
            return loader['import']('babel/external-helpers').then(function() {
              return source;
            });
          }
        }

        return source;
      });
    };
  });

})();
/*
  SystemJS Global Format

  Supports
    metadata.deps
    metadata.globals
    metadata.exports

  Without metadata.exports, detects writes to the global object.
*/
var __globalName = typeof self != 'undefined' ? 'self' : 'global';

hook('fetch', function(fetch) {
  return function(load) {
    if (load.metadata.exports && !load.metadata.format)
      load.metadata.format = 'global';
    return fetch.call(this, load);
  };
});

// ideally we could support script loading for globals, but the issue with that is that
// we can't do it with AMD support side-by-side since AMD support means defining the
// global define, and global support means not definining it, yet we don't have any hook
// into the "pre-execution" phase of a script tag being loaded to handle both cases
hook('instantiate', function(instantiate) {
  return function(load) {
    var loader = this;

    if (!load.metadata.format)
      load.metadata.format = 'global';

    // global is a fallback module format
    if (load.metadata.format == 'global' && !load.metadata.registered) {

      var entry = createEntry();

      load.metadata.entry = entry;

      entry.deps = [];

      for (var g in load.metadata.globals) {
        var gl = load.metadata.globals[g];
        if (gl)
          entry.deps.push(gl);
      }

      entry.execute = function(require, exports, module) {

        var globals;
        if (load.metadata.globals) {
          globals = {};
          for (var g in load.metadata.globals)
            if (load.metadata.globals[g])
              globals[g] = require(load.metadata.globals[g]);
        }
        
        var exportName = load.metadata.exports;

        if (exportName)
          load.source += '\n' + __globalName + '["' + exportName + '"] = ' + exportName + ';';

        var retrieveGlobal = loader.get('@@global-helpers').prepareGlobal(module.id, exportName, globals, !!load.metadata.encapsulateGlobal);
        __exec.call(loader, load);

        return retrieveGlobal();
      }
    }
    return instantiate.call(this, load);
  };
});


function getGlobalValue(exports) {
  if (typeof exports == 'string')
    return readMemberExpression(exports, __global);

  if (!(exports instanceof Array))
    throw new Error('Global exports must be a string or array.');

  var globalValue = {};
  var first = true;
  for (var i = 0; i < exports.length; i++) {
    var val = readMemberExpression(exports[i], __global);
    if (first) {
      globalValue['default'] = val;
      first = false;
    }
    globalValue[exports[i].split('.').pop()] = val;
  }
  return globalValue;
}

hook('reduceRegister_', function(reduceRegister) {
  return function(load, register) {
    if (register || !load.metadata.exports)
      return reduceRegister.call(this, load, register);

    load.metadata.format = 'global';
    var entry = load.metadata.entry = createEntry();
    entry.deps = load.metadata.deps;
    var globalValue = getGlobalValue(load.metadata.exports);
    entry.execute = function() {
      return globalValue;
    };
  };
});

hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(loader);

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    // bare minimum ignores
    var ignoredGlobalProps = ['_g', 'sessionStorage', 'localStorage', 'clipboardData', 'frames', 'frameElement', 'external', 
      'mozAnimationStartTime', 'webkitStorageInfo', 'webkitIndexedDB', 'mozInnerScreenY', 'mozInnerScreenX'];

    var globalSnapshot;

    function forEachGlobal(callback) {
      if (Object.keys)
        Object.keys(__global).forEach(callback);
      else
        for (var g in __global) {
          if (!hasOwnProperty.call(__global, g))
            continue;
          callback(g);
        }
    }

    function forEachGlobalValue(callback) {
      forEachGlobal(function(globalName) {
        if (indexOf.call(ignoredGlobalProps, globalName) != -1)
          return;
        try {
          var value = __global[globalName];
        }
        catch (e) {
          ignoredGlobalProps.push(globalName);
        }
        callback(globalName, value);
      });
    }

    loader.set('@@global-helpers', loader.newModule({
      prepareGlobal: function(moduleName, exports, globals, encapsulate) {
        // disable module detection
        var curDefine = __global.define;
        
        __global.define = undefined;

        // set globals
        var oldGlobals;
        if (globals) {
          oldGlobals = {};
          for (var g in globals) {
            oldGlobals[g] = __global[g];
            __global[g] = globals[g];
          }
        }

        // store a complete copy of the global object in order to detect changes
        if (!exports) {
          globalSnapshot = {};

          forEachGlobalValue(function(name, value) {
            globalSnapshot[name] = value;
          });
        }

        // return function to retrieve global
        return function() {
          var globalValue = exports ? getGlobalValue(exports) : {};

          var singleGlobal;
          var multipleExports = !!exports;

          if (!exports || encapsulate)
            forEachGlobalValue(function(name, value) {
              if (globalSnapshot[name] === value)
                return;
              if (typeof value == 'undefined')
                return;
              
              // allow global encapsulation where globals are removed
              if (encapsulate)
                __global[name] = undefined;

              if (!exports) {
                globalValue[name] = value;

                if (typeof singleGlobal != 'undefined') {
                  if (!multipleExports && singleGlobal !== value)
                    multipleExports = true;
                }
                else {
                  singleGlobal = value;
                }
              }
            });

          globalValue = multipleExports ? globalValue : singleGlobal;

          // revert globals
          if (oldGlobals) {
            for (var g in oldGlobals)
              __global[g] = oldGlobals[g];
          }
          __global.define = curDefine;

          return globalValue;
        };
      }
    }));
  };
});
/*
  SystemJS CommonJS Format
*/
(function() {
  // CJS Module Format
  // require('...') || exports[''] = ... || exports.asd = ... || module.exports = ...
  var cjsExportsRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/;
  // RegEx adjusted from https://github.com/jbrantly/yabble/blob/master/lib/yabble.js#L339
  var cjsRequireRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g;
  var commentRegEx = /(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;

  var stringRegEx = /("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g;

  // used to support leading #!/usr/bin/env in scripts as supported in Node
  var hashBangRegEx = /^\#\!.*/;

  function getCJSDeps(source) {
    cjsRequireRegEx.lastIndex = commentRegEx.lastIndex = stringRegEx.lastIndex = 0;

    var deps = [];

    var match;

    // track string and comment locations for unminified source    
    var stringLocations = [], commentLocations = [];

    function inLocation(locations, match) {
      for (var i = 0; i < locations.length; i++)
        if (locations[i][0] < match.index && locations[i][1] > match.index)
          return true;
      return false;
    }

    if (source.length / source.split('\n').length < 200) {
      while (match = stringRegEx.exec(source))
        stringLocations.push([match.index, match.index + match[0].length]);

      // TODO: track template literals here before comments
      
      while (match = commentRegEx.exec(source)) {
        // only track comments not starting in strings
        if (!inLocation(stringLocations, match))
          commentLocations.push([match.index + match[1].length, match.index + match[0].length - 1]);
      }
    }

    while (match = cjsRequireRegEx.exec(source)) {
      // ensure we're not within a string or comment location
      if (!inLocation(stringLocations, match) && !inLocation(commentLocations, match)) {
        var dep = match[1].substr(1, match[1].length - 2);
        // skip cases like require('" + file + "')
        if (dep.match(/"|'/))
          continue;
        // trailing slash requires are removed as they don't map mains in SystemJS
        if (dep[dep.length - 1] == '/')
          dep = dep.substr(0, dep.length - 1);
        deps.push(dep);
      }
    }

    return deps;
  }

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      if (!load.metadata.format) {
        cjsExportsRegEx.lastIndex = 0;
        cjsRequireRegEx.lastIndex = 0;
        if (cjsRequireRegEx.exec(load.source) || cjsExportsRegEx.exec(load.source))
          load.metadata.format = 'cjs';
      }

      if (load.metadata.format == 'cjs') {
        var metaDeps = load.metadata.deps;
        var deps = load.metadata.cjsRequireDetection === false ? [] : getCJSDeps(load.source);

        for (var g in load.metadata.globals)
          if (load.metadata.globals[g])
            deps.push(load.metadata.globals[g]);

        var entry = createEntry();

        load.metadata.entry = entry;

        entry.deps = deps;
        entry.executingRequire = true;
        entry.execute = function(_require, exports, module) {
          function require(name) {
            if (name[name.length - 1] == '/')
              name = name.substr(0, name.length - 1);
            return _require.apply(this, arguments);
          }
          require.resolve = function(name) {
            return loader.get('@@cjs-helpers').requireResolve(name, module.id);
          };

          // ensure meta deps execute first
          if (!load.metadata.cjsDeferDepsExecute)
            for (var i = 0; i < metaDeps.length; i++)
              require(metaDeps[i]);

          var pathVars = loader.get('@@cjs-helpers').getPathVars(module.id);
          var __cjsWrapper = {
            exports: exports,
            args: [require, exports, module, pathVars.filename, pathVars.dirname, __global, __global]
          };

          var cjsWrapper = "(function(require, exports, module, __filename, __dirname, global, GLOBAL";

          // add metadata.globals to the wrapper arguments
          if (load.metadata.globals)
            for (var g in load.metadata.globals) {
              __cjsWrapper.args.push(require(load.metadata.globals[g]));
              cjsWrapper += ", " + g;
            }

          // disable AMD detection
          var define = __global.define;
          __global.define = undefined;
          __global.__cjsWrapper = __cjsWrapper;

          load.source = cjsWrapper + ") {" + load.source.replace(hashBangRegEx, '') + "\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);";

          __exec.call(loader, load);

          __global.__cjsWrapper = undefined;
          __global.define = define;
        };
      }

      return instantiate.call(loader, load);
    };
  });
})();
hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(loader);

    if (typeof window != 'undefined' && typeof document != 'undefined' && window.location)
      var windowOrigin = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

    function stripOrigin(path) {
      if (path.substr(0, 8) == 'file:///')
        return path.substr(7 + !!isWindows);
      
      if (windowOrigin && path.substr(0, windowOrigin.length) == windowOrigin)
        return path.substr(windowOrigin.length);

      return path;
    }

    loader.set('@@cjs-helpers', loader.newModule({
      requireResolve: function(request, parentId) {
        return stripOrigin(loader.normalizeSync(request, parentId));
      },
      getPathVars: function(moduleId) {
        // remove any plugin syntax
        var pluginIndex = moduleId.lastIndexOf('!');
        var filename;
        if (pluginIndex != -1)
          filename = moduleId.substr(0, pluginIndex);
        else
          filename = moduleId;

        var dirname = filename.split('/');
        dirname.pop();
        dirname = dirname.join('/');

        return {
          filename: stripOrigin(filename),
          dirname: stripOrigin(dirname)
        };
      }
    }))
  };
});/*
 * AMD Helper function module
 * Separated into its own file as this is the part needed for full AMD support in SFX builds
 * NB since implementations have now diverged this can be merged back with amd.js
 */

hook('fetch', function(fetch) {
  return function(load) {
    // script load implies define global leak
    if (load.metadata.scriptLoad && isBrowser)
      __global.define = this.amdDefine;
    return fetch.call(this, load);
  };
});
 
hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(this);

    var commentRegEx = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;
    var cjsRequirePre = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])";
    var cjsRequirePost = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)";
    var fnBracketRegEx = /\(([^\)]*)\)/;
    var wsRegEx = /^\s+|\s+$/g;
    
    var requireRegExs = {};

    function getCJSDeps(source, requireIndex) {

      // remove comments
      source = source.replace(commentRegEx, '');

      // determine the require alias
      var params = source.match(fnBracketRegEx);
      var requireAlias = (params[1].split(',')[requireIndex] || 'require').replace(wsRegEx, '');

      // find or generate the regex for this requireAlias
      var requireRegEx = requireRegExs[requireAlias] || (requireRegExs[requireAlias] = new RegExp(cjsRequirePre + requireAlias + cjsRequirePost, 'g'));

      requireRegEx.lastIndex = 0;

      var deps = [];

      var match;
      while (match = requireRegEx.exec(source))
        deps.push(match[2] || match[3]);

      return deps;
    }

    /*
      AMD-compatible require
      To copy RequireJS, set window.require = window.requirejs = loader.amdRequire
    */
    function require(names, callback, errback, referer) {
      // in amd, first arg can be a config object... we just ignore
      if (typeof names == 'object' && !(names instanceof Array))
        return require.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));

      // amd require
      if (typeof names == 'string' && typeof callback == 'function')
        names = [names];
      if (names instanceof Array) {
        var dynamicRequires = [];
        for (var i = 0; i < names.length; i++)
          dynamicRequires.push(loader['import'](names[i], referer));
        Promise.all(dynamicRequires).then(function(modules) {
          if (callback)
            callback.apply(null, modules);
        }, errback);
      }

      // commonjs require
      else if (typeof names == 'string') {
        var defaultJSExtension = loader.defaultJSExtensions && names.substr(names.length - 3, 3) != '.js';
        var normalized = loader.decanonicalize(names, referer);
        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) == '.js')
          normalized = normalized.substr(0, normalized.length - 3);
        var module = loader.get(normalized);
        if (!module)
          throw new Error('Module not already loaded loading "' + names + '" as ' + normalized + (referer ? ' from "' + referer + '".' : '.'));
        return module.__useDefault ? module['default'] : module;
      }

      else
        throw new TypeError('Invalid require');
    }

    function define(name, deps, factory) {
      if (typeof name != 'string') {
        factory = deps;
        deps = name;
        name = null;
      }
      if (!(deps instanceof Array)) {
        factory = deps;
        deps = ['require', 'exports', 'module'].splice(0, factory.length);
      }

      if (typeof factory != 'function')
        factory = (function(factory) {
          return function() { return factory; }
        })(factory);

      // in IE8, a trailing comma becomes a trailing undefined entry
      if (deps[deps.length - 1] === undefined)
        deps.pop();

      // remove system dependencies
      var requireIndex, exportsIndex, moduleIndex;
      
      if ((requireIndex = indexOf.call(deps, 'require')) != -1) {
        
        deps.splice(requireIndex, 1);

        // only trace cjs requires for non-named
        // named defines assume the trace has already been done
        if (!name)
          deps = deps.concat(getCJSDeps(factory.toString(), requireIndex));
      }

      if ((exportsIndex = indexOf.call(deps, 'exports')) != -1)
        deps.splice(exportsIndex, 1);
      
      if ((moduleIndex = indexOf.call(deps, 'module')) != -1)
        deps.splice(moduleIndex, 1);

      function execute(req, exports, module) {
        var depValues = [];
        for (var i = 0; i < deps.length; i++)
          depValues.push(req(deps[i]));

        module.uri = module.id;

        module.config = function() {};

        // add back in system dependencies
        if (moduleIndex != -1)
          depValues.splice(moduleIndex, 0, module);
        
        if (exportsIndex != -1)
          depValues.splice(exportsIndex, 0, exports);
        
        if (requireIndex != -1) {
          function contextualRequire(names, callback, errback) {
            if (typeof names == 'string' && typeof callback != 'function')
              return req(names);
            return require.call(loader, names, callback, errback, module.id);
          }
          contextualRequire.toUrl = function(name) {
            // normalize without defaultJSExtensions
            var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';
            var url = loader.decanonicalize(name, module.id);
            if (defaultJSExtension && url.substr(url.length - 3, 3) == '.js')
              url = url.substr(0, url.length - 3);
            return url;
          };
          depValues.splice(requireIndex, 0, contextualRequire);
        }

        // set global require to AMD require
        var curRequire = __global.require;
        __global.require = require;

        var output = factory.apply(exportsIndex == -1 ? __global : exports, depValues);

        __global.require = curRequire;

        if (typeof output == 'undefined' && module)
          output = module.exports;

        if (typeof output != 'undefined')
          return output;
      }

      var entry = createEntry();
      entry.name = name && (loader.decanonicalize || loader.normalize).call(loader, name);
      entry.deps = deps;
      entry.execute = execute;

      loader.pushRegister_({
        amd: true,
        entry: entry
      });
    }
    define.amd = {};

    // reduction function to attach defines to a load record
    hook('reduceRegister_', function(reduceRegister) {
      return function(load, register) {
        // only handle AMD registers here
        if (!register || !register.amd)
          return reduceRegister.call(this, load, register);

        var curMeta = load && load.metadata;
        var entry = register.entry;

        if (curMeta) {
          if (!curMeta.format || curMeta.format == 'detect')
            curMeta.format = 'amd';
          else if (!entry.name && curMeta.format != 'amd')
            throw new Error('AMD define called while executing ' + curMeta.format + ' module ' + load.name);
        }

        // anonymous define
        if (!entry.name) {
          if (!curMeta)
            throw new TypeError('Unexpected anonymous AMD define.');

          if (curMeta.entry && !curMeta.entry.name)
            throw new Error('Multiple anonymous defines in module ' + load.name);
          
          curMeta.entry = entry;
        }
        // named define
        else {
          // if we don't have any other defines, 
          // then let this be an anonymous define
          // this is just to support single modules of the form:
          // define('jquery')
          // still loading anonymously
          // because it is done widely enough to be useful
          // as soon as there is more than one define, this gets removed though
          if (curMeta) {
            if (!curMeta.entry && !curMeta.bundle)
              curMeta.entry = entry;
            else if (curMeta.entry && curMeta.entry.name)
              curMeta.entry = undefined;

            // note this is now a bundle
            curMeta.bundle = true;
          }

          // define the module through the register registry
          if (!(entry.name in this.defined))
            this.defined[entry.name] = entry;
        }
      };
    });

    loader.amdDefine = define;
    loader.amdRequire = require;
  };
});/*
  SystemJS AMD Format
*/
(function() {
  // AMD Module Format Detection RegEx
  // define([.., .., ..], ...)
  // define(varName); || define(function(require, exports) {}); || define({})
  var amdRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      
      if (load.metadata.format == 'amd' || !load.metadata.format && load.source.match(amdRegEx)) {
        load.metadata.format = 'amd';
        
        if (!loader.builder && loader.execute !== false) {
          var curDefine = __global.define;
          __global.define = this.amdDefine;

          try {
            __exec.call(loader, load);
          }
          finally {
            __global.define = curDefine;
          }

          if (!load.metadata.entry && !load.metadata.bundle)
            throw new TypeError('AMD module ' + load.name + ' did not define');
        }
        else {
          load.metadata.execute = function() {
            return load.metadata.builderExecute.apply(this, arguments);
          };
        }
      }

      return instantiate.call(loader, load);
    };
  });

})();
/*
  SystemJS Loader Plugin Support

  Supports plugin loader syntax with "!", or via metadata.loader

  The plugin name is loaded as a module itself, and can override standard loader hooks
  for the plugin resource. See the plugin section of the systemjs readme.
*/

(function() {
  function getParentName(loader, parentName) {
    // if parent is a plugin, normalize against the parent plugin argument only
    if (parentName) {
      var parentPluginIndex;
      if (loader.pluginFirst) {
        if ((parentPluginIndex = parentName.lastIndexOf('!')) != -1)
          return parentName.substr(parentPluginIndex + 1);
      }
      else {
        if ((parentPluginIndex = parentName.indexOf('!')) != -1)
          return parentName.substr(0, parentPluginIndex);
      }

      return parentName;
    }
  }

  function parsePlugin(loader, name) {
    var argumentName;
    var pluginName;

    var pluginIndex = name.lastIndexOf('!');

    if (pluginIndex == -1)
      return;

    if (loader.pluginFirst) {
      argumentName = name.substr(pluginIndex + 1);
      pluginName = name.substr(0, pluginIndex);
    }
    else {
      argumentName = name.substr(0, pluginIndex);
      pluginName = name.substr(pluginIndex + 1) || argumentName.substr(argumentName.lastIndexOf('.') + 1);
    }

    return {
      argument: argumentName,
      plugin: pluginName
    };
  }

  // put name back together after parts have been normalized
  function combinePluginParts(loader, argumentName, pluginName, defaultExtension) {
    if (defaultExtension && argumentName.substr(argumentName.length - 3, 3) == '.js')
      argumentName = argumentName.substr(0, argumentName.length - 3);

    if (loader.pluginFirst) {
      return pluginName + '!' + argumentName;
    }
    else {
      return argumentName + '!' + pluginName;
    }
  }

  // note if normalize will add a default js extension
  // if so, remove for backwards compat
  // this is strange and sucks, but will be deprecated
  function checkDefaultExtension(loader, arg) {
    return loader.defaultJSExtensions && arg.substr(arg.length - 3, 3) != '.js'; 
  }

  function createNormalizeSync(normalizeSync) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      
      parentName = getParentName(this, parentName);
      var parsed = parsePlugin(loader, name);

      if (!parsed)
        return normalizeSync.call(this, name, parentName, isPlugin);

      // if this is a plugin, normalize the plugin name and the argument
      var argumentName = loader.normalizeSync(parsed.argument, parentName, true);
      var pluginName = loader.normalizeSync(parsed.plugin, parentName, true);
      return combinePluginParts(loader, argumentName, pluginName, checkDefaultExtension(loader, parsed.argument));
    };
  }
  
  hook('decanonicalize', createNormalizeSync);
  hook('normalizeSync', createNormalizeSync);

  hook('normalize', function(normalize) {
    return function(name, parentName, isPlugin) {
      var loader = this;

      parentName = getParentName(this, parentName);

      var parsed = parsePlugin(loader, name);

      if (!parsed)
        return normalize.call(loader, name, parentName, isPlugin);

      return Promise.all([
        loader.normalize(parsed.argument, parentName, true),
        loader.normalize(parsed.plugin, parentName)
      ])
      .then(function(normalized) {
        return combinePluginParts(loader, normalized[0], normalized[1], checkDefaultExtension(loader, parsed.argument));
      });
    }
  });

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;

      var name = load.name;

      // plugin syntax
      var pluginSyntaxIndex;
      if (loader.pluginFirst) {
        if ((pluginSyntaxIndex = name.indexOf('!')) != -1) {
          load.metadata.loader = name.substr(0, pluginSyntaxIndex);
          load.name = name.substr(pluginSyntaxIndex + 1);
        }
      }
      else {
        if ((pluginSyntaxIndex = name.lastIndexOf('!')) != -1) {
          load.metadata.loader = name.substr(pluginSyntaxIndex + 1);
          load.name = name.substr(0, pluginSyntaxIndex);
        }
      }

      return locate.call(loader, load)
      .then(function(address) {
        if (pluginSyntaxIndex != -1 || !load.metadata.loader)
          return address;

        // normalize plugin relative to parent in locate here when
        // using plugin via loader metadata
        return (loader.pluginLoader || loader).normalize(load.metadata.loader, load.name)
        .then(function(loaderNormalized) {
          load.metadata.loader = loaderNormalized;
          return address;
        });
      })
      .then(function(address) {
        var plugin = load.metadata.loader;

        if (!plugin)
          return address;

        // don't allow a plugin to load itself
        if (load.name == plugin)
          throw new Error('Plugin ' + plugin + ' cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.');

        // only fetch the plugin itself if this name isn't defined
        if (loader.defined && loader.defined[name])
          return address;

        var pluginLoader = loader.pluginLoader || loader;

        // load the plugin module and run standard locate
        return pluginLoader['import'](plugin)
        .then(function(loaderModule) {
          // store the plugin module itself on the metadata
          load.metadata.loaderModule = loaderModule;

          load.address = address;
          if (loaderModule.locate)
            return loaderModule.locate.call(loader, load);

          return address;
        });
      });
    };
  });

  hook('fetch', function(fetch) {
    return function(load) {
      var loader = this;
      if (load.metadata.loaderModule && load.metadata.loaderModule.fetch && load.metadata.format != 'defined') {
        load.metadata.scriptLoad = false;
        return load.metadata.loaderModule.fetch.call(loader, load, function(load) {
          return fetch.call(loader, load);
        });
      }
      else {
        return fetch.call(loader, load);
      }
    };
  });

  hook('translate', function(translate) {
    return function(load) {
      var loader = this;
      if (load.metadata.loaderModule && load.metadata.loaderModule.translate && load.metadata.format != 'defined') {
        return Promise.resolve(load.metadata.loaderModule.translate.call(loader, load)).then(function(result) {
          var sourceMap = load.metadata.sourceMap;

          // sanitize sourceMap if an object not a JSON string
          if (sourceMap) {
            if (typeof sourceMap != 'object')
              throw new Error('load.metadata.sourceMap must be set to an object.');

            var originalName = load.address.split('!')[0];
            
            // force set the filename of the original file
            if (!sourceMap.file || sourceMap.file == load.address)
              sourceMap.file = originalName + '!transpiled';

            // force set the sources list if only one source
            if (!sourceMap.sources || sourceMap.sources.length <= 1 && (!sourceMap.sources[0] || sourceMap.sources[0] == load.address))
              sourceMap.sources = [originalName];
          }

          // if running on file:/// URLs, sourcesContent is necessary
          // load.metadata.sourceMap.sourcesContent = [load.source];

          if (typeof result == 'string')
            load.source = result;
          else
            warn.call(this, 'Plugin ' + load.metadata.loader + ' should return the source in translate, instead of setting load.source directly. This support will be deprecated.');

          return translate.call(loader, load);
        });
      }
      else {
        return translate.call(loader, load);
      }
    };
  });

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      var calledInstantiate = false;

      if (load.metadata.loaderModule && load.metadata.loaderModule.instantiate && !loader.builder && load.metadata.format != 'defined')
        return Promise.resolve(load.metadata.loaderModule.instantiate.call(loader, load, function(load) {
          if (calledInstantiate)
            throw new Error('Instantiate must only be called once.');
          calledInstantiate = true;
          return instantiate.call(loader, load);
        })).then(function(result) {
          if (calledInstantiate)
            return result;

          load.metadata.entry = createEntry();
          load.metadata.entry.execute = function() {
            return result;
          }
          load.metadata.entry.deps = load.metadata.deps;
          load.metadata.format = 'defined';
          return instantiate.call(loader, load);
        });
      else
        return instantiate.call(loader, load);
    };
  });

})();/*
 * Conditions Extension
 *
 *   Allows a condition module to alter the resolution of an import via syntax:
 *
 *     import $ from 'jquery/#{browser}';
 *
 *   Will first load the module 'browser' via `SystemJS.import('browser')` and 
 *   take the default export of that module.
 *   If the default export is not a string, an error is thrown.
 * 
 *   We then substitute the string into the require to get the conditional resolution
 *   enabling environment-specific variations like:
 * 
 *     import $ from 'jquery/ie'
 *     import $ from 'jquery/firefox'
 *     import $ from 'jquery/chrome'
 *     import $ from 'jquery/safari'
 *
 *   It can be useful for a condition module to define multiple conditions.
 *   This can be done via the `|` modifier to specify an export member expression:
 *
 *     import 'jquery/#{./browser.js|grade.version}'
 *
 *   Where the `grade` export `version` member in the `browser.js` module  is substituted.
 *
 *
 * Boolean Conditionals
 *
 *   For polyfill modules, that are used as imports but have no module value,
 *   a binary conditional allows a module not to be loaded at all if not needed:
 *
 *     import 'es5-shim#?./conditions.js|needs-es5shim'
 *
 *   These conditions can also be negated via:
 *     
 *     import 'es5-shim#?./conditions.js|~es6'
 *
 */

  var sysConditions = ['browser', 'node', 'dev', 'production', 'default'];

  function parseCondition(condition) {
    var conditionExport, conditionModule, negation;

    var negation = condition[0] == '~';
    var conditionExportIndex = condition.lastIndexOf('|');
    if (conditionExportIndex != -1) {
      conditionExport = condition.substr(conditionExportIndex + 1);
      conditionModule = condition.substr(negation, conditionExportIndex - negation);
      
      if (negation)
        warn.call(this, 'Condition negation form "' + condition + '" is deprecated for "' + conditionModule + '|~' + conditionExport + '"');

      if (conditionExport[0] == '~') {
        negation = true;
        conditionExport = conditionExport.substr(1);
      }
    }
    else {
      conditionExport = 'default';
      conditionModule = condition.substr(negation);
      if (sysConditions.indexOf(conditionModule) != -1) {
        conditionExport = conditionModule;
        conditionModule = null;
      }
    }

    return {
      module: conditionModule || '@system-env',
      prop: conditionExport,
      negate: negation
    };
  }

  function serializeCondition(conditionObj) {
    return conditionObj.module + '|' + (conditionObj.negate ? '~' : '') + conditionObj.prop;
  }

  function resolveCondition(conditionObj, parentName, bool) {
    var self = this;
    return this.normalize(conditionObj.module, parentName)
    .then(function(normalizedCondition) {
      return self.load(normalizedCondition)
      .then(function(q) {
        var m = readMemberExpression(conditionObj.prop, self.get(normalizedCondition));

        if (bool && typeof m != 'boolean')
          throw new TypeError('Condition ' + serializeCondition(conditionObj) + ' did not resolve to a boolean.');

        return conditionObj.negate ? !m : m;
      });
    });
  }

  var interpolationRegEx = /#\{[^\}]+\}/;
  function interpolateConditional(name, parentName) {
    // first we normalize the conditional
    var conditionalMatch = name.match(interpolationRegEx);

    if (!conditionalMatch)
      return Promise.resolve(name);

    var conditionObj = parseCondition.call(this, conditionalMatch[0].substr(2, conditionalMatch[0].length - 3));

    // in builds, return normalized conditional
    if (this.builder)
      return this['normalize'](conditionObj.module, parentName)
      .then(function(conditionModule) {
        conditionObj.module = conditionModule;
        return name.replace(interpolationRegEx, '#{' + serializeCondition(conditionObj) + '}');
      });

    return resolveCondition.call(this, conditionObj, parentName, false)
    .then(function(conditionValue) {
      if (typeof conditionValue !== 'string')
        throw new TypeError('The condition value for ' + name + ' doesn\'t resolve to a string.');

      if (conditionValue.indexOf('/') != -1)
        throw new TypeError('Unabled to interpolate conditional ' + name + (parentName ? ' in ' + parentName : '') + '\n\tThe condition value ' + conditionValue + ' cannot contain a "/" separator.');

      return name.replace(interpolationRegEx, conditionValue);
    });
  }

  function booleanConditional(name, parentName) {
    // first we normalize the conditional
    var booleanIndex = name.lastIndexOf('#?');

    if (booleanIndex == -1)
      return Promise.resolve(name);

    var conditionObj = parseCondition.call(this, name.substr(booleanIndex + 2));

    // in builds, return normalized conditional
    if (this.builder)
      return this['normalize'](conditionObj.module, parentName)
      .then(function(conditionModule) {
        conditionObj.module = conditionModule;
        return name.substr(0, booleanIndex) + '#?' + serializeCondition(conditionObj);
      });

    return resolveCondition.call(this, conditionObj, parentName, true)
    .then(function(conditionValue) {
      return conditionValue ? name.substr(0, booleanIndex) : '@empty';
    });
  }

  // normalizeSync does not parse conditionals at all although it could
  hook('normalize', function(normalize) {
    return function(name, parentName, parentAddress) {
      var loader = this;
      return booleanConditional.call(loader, name, parentName)
      .then(function(name) {
        return normalize.call(loader, name, parentName, parentAddress);
      })
      .then(function(normalized) {
        return interpolateConditional.call(loader, normalized, parentName);
      });
    };
  });
/*
 * Alias Extension
 *
 * Allows a module to be a plain copy of another module by module name
 *
 * SystemJS.meta['mybootstrapalias'] = { alias: 'bootstrap' };
 *
 */
(function() {
  // aliases
  hook('fetch', function(fetch) {
    return function(load) {
      var alias = load.metadata.alias;
      var aliasDeps = load.metadata.deps || [];
      if (alias) {
        load.metadata.format = 'defined';
        var entry = createEntry();
        this.defined[load.name] = entry;
        entry.declarative = true;
        entry.deps = aliasDeps.concat([alias]);
        entry.declare = function(_export) {
          return {
            setters: [function(module) {
              for (var p in module)
                _export(p, module[p]);
              if (module.__useDefault)
                entry.module.exports.__useDefault = true;
            }],
            execute: function() {}
          };
        };
        return '';
      }

      return fetch.call(this, load);
    };
  });
})();/*
 * Meta Extension
 *
 * Sets default metadata on a load record (load.metadata) from
 * loader.metadata via SystemJS.meta function.
 *
 *
 * Also provides an inline meta syntax for module meta in source.
 *
 * Eg:
 *
 * loader.meta({
 *   'my/module': { deps: ['jquery'] }
 *   'my/*': { format: 'amd' }
 * });
 *
 * Which in turn populates loader.metadata.
 *
 * load.metadata.deps and load.metadata.format will then be set
 * for 'my/module'
 *
 * The same meta could be set with a my/module.js file containing:
 *
 * my/module.js
 *   "format amd";
 *   "deps[] jquery";
 *   "globals.some value"
 *   console.log('this is my/module');
 *
 * Configuration meta always takes preference to inline meta.
 *
 * Multiple matches in wildcards are supported and ammend the meta.
 *
 *
 * The benefits of the function form is that paths are URL-normalized
 * supporting say
 *
 * loader.meta({ './app': { format: 'cjs' } });
 *
 * Instead of needing to set against the absolute URL (https://site.com/app.js)
 *
 */

(function() {

  hookConstructor(function(constructor) {
    return function() {
      this.meta = {};
      constructor.call(this);
    };
  });

  hook('locate', function(locate) {
    return function(load) {
      var meta = this.meta;
      var name = load.name;

      // NB for perf, maybe introduce a fast-path wildcard lookup cache here
      // which is checked first

      // apply wildcard metas
      var bestDepth = 0;
      var wildcardIndex;
      for (var module in meta) {
        wildcardIndex = module.indexOf('*');
        if (wildcardIndex === -1)
          continue;
        if (module.substr(0, wildcardIndex) === name.substr(0, wildcardIndex)
            && module.substr(wildcardIndex + 1) === name.substr(name.length - module.length + wildcardIndex + 1)) {
          var depth = module.split('/').length;
          if (depth > bestDepth)
            bestDepth = depth;
          extendMeta(load.metadata, meta[module], bestDepth != depth);
        }
      }

      // apply exact meta
      if (meta[name])
        extendMeta(load.metadata, meta[name]);

      return locate.call(this, load);
    };
  });

  // detect any meta header syntax
  // only set if not already set
  var metaRegEx = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/;
  var metaPartRegEx = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;

  function setMetaProperty(target, p, value) {
    var pParts = p.split('.');
    var curPart;
    while (pParts.length > 1) {
      curPart = pParts.shift();
      target = target[curPart] = target[curPart] || {};
    }
    curPart = pParts.shift();
    if (!(curPart in target))
      target[curPart] = value;
  }

  hook('translate', function(translate) {
    return function(load) {
      // NB meta will be post-translate pending transpiler conversion to plugins
      var meta = load.source.match(metaRegEx);
      if (meta) {
        var metaParts = meta[0].match(metaPartRegEx);

        for (var i = 0; i < metaParts.length; i++) {
          var curPart = metaParts[i];
          var len = curPart.length;

          var firstChar = curPart.substr(0, 1);
          if (curPart.substr(len - 1, 1) == ';')
            len--;

          if (firstChar != '"' && firstChar != "'")
            continue;

          var metaString = curPart.substr(1, curPart.length - 3);
          var metaName = metaString.substr(0, metaString.indexOf(' '));

          if (metaName) {
            var metaValue = metaString.substr(metaName.length + 1, metaString.length - metaName.length - 1);

            if (metaName.substr(metaName.length - 2, 2) == '[]') {
              metaName = metaName.substr(0, metaName.length - 2);
              load.metadata[metaName] = load.metadata[metaName] || [];
              load.metadata[metaName].push(metaValue);
            }
            else if (load.metadata[metaName] instanceof Array) {
              // temporary backwards compat for previous "deps" syntax
              warn.call(this, 'Module ' + load.name + ' contains deprecated "deps ' + metaValue + '" meta syntax.\nThis should be updated to "deps[] ' + metaValue + '" for pushing to array meta.');
              load.metadata[metaName].push(metaValue);
            }
            else {
              setMetaProperty(load.metadata, metaName, metaValue);
            }
          }
          else {
            load.metadata[metaString] = true;
          }
        }
      }

      return translate.call(this, load);
    };
  });
})();
/*
  System bundles

  Allows a bundle module to be specified which will be dynamically 
  loaded before trying to load a given module.

  For example:
  SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']

  Will result in a load to "mybundle" whenever a load to "jquery"
  or "bootstrap/js/bootstrap" is made.

  In this way, the bundle becomes the request that provides the module
*/

(function() {
  // bundles support (just like RequireJS)
  // bundle name is module name of bundle itself
  // bundle is array of modules defined by the bundle
  // when a module in the bundle is requested, the bundle is loaded instead
  // of the form SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']
  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.bundles = {};
      this._loader.loadedBundles = {};
    };
  });

  // assign bundle metadata for bundle loads
  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      var matched = false;

      if (!(load.name in loader.defined))
        for (var b in loader.bundles) {
          for (var i = 0; i < loader.bundles[b].length; i++) {
            var curModule = loader.bundles[b][i];

            if (curModule == load.name) {
              matched = true;
              break;
            }

            // wildcard in bundles does not include / boundaries
            if (curModule.indexOf('*') != -1) {
              var parts = curModule.split('*');
              if (parts.length != 2) {
                loader.bundles[b].splice(i--, 1);
                continue;
              }
              
              if (load.name.substring(0, parts[0].length) == parts[0] &&
                  load.name.substr(load.name.length - parts[1].length, parts[1].length) == parts[1] &&
                  load.name.substr(parts[0].length, load.name.length - parts[1].length - parts[0].length).indexOf('/') == -1) {
                matched = true;
                break;
              }
            }
          }

          if (matched)
            return loader['import'](b)
            .then(function() {
              return locate.call(loader, load);
            });
        }

      return locate.call(loader, load);
    };
  });
})();
/*
 * Dependency Tree Cache
 * 
 * Allows a build to pre-populate a dependency trace tree on the loader of 
 * the expected dependency tree, to be loaded upfront when requesting the
 * module, avoinding the n round trips latency of module loading, where 
 * n is the dependency tree depth.
 *
 * eg:
 * SystemJS.depCache = {
 *  'app': ['normalized', 'deps'],
 *  'normalized': ['another'],
 *  'deps': ['tree']
 * };
 * 
 * SystemJS.import('app') 
 * // simultaneously starts loading all of:
 * // 'normalized', 'deps', 'another', 'tree'
 * // before "app" source is even loaded
 *
 */

(function() {
  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.depCache = {};
    }
  });

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      // load direct deps, in turn will pick up their trace trees
      var deps = loader.depCache[load.name];
      if (deps)
        for (var i = 0; i < deps.length; i++)
          loader['import'](deps[i], load.name);

      return locate.call(loader, load);
    };
  });
})();
  
System = new SystemJSLoader();

__global.SystemJS = System;
System.version = '0.19.29 Standard';
  // -- exporting --

  if (typeof exports === 'object')
    module.exports = Loader;

  __global.Reflect = __global.Reflect || {};
  __global.Reflect.Loader = __global.Reflect.Loader || Loader;
  __global.Reflect.global = __global.Reflect.global || __global;
  __global.LoaderPolyfill = Loader;

  if (!System) {
    System = new SystemLoader();
    System.constructor = SystemLoader;
  }

  if (typeof exports === 'object')
    module.exports = System;

  __global.System = System;

})(typeof self != 'undefined' ? self : global);}

// auto-load Promise polyfill if needed in the browser
var doPolyfill = typeof Promise === 'undefined';

// document.write
if (typeof document !== 'undefined') {
  var scripts = document.getElementsByTagName('script');
  $__curScript = scripts[scripts.length - 1];
  if (doPolyfill) {
    var curPath = $__curScript.src;
    var basePath = curPath.substr(0, curPath.lastIndexOf('/') + 1);
    window.systemJSBootstrap = bootstrap;
    document.write(
      '<' + 'script type="text/javascript" src="' + basePath + 'system-polyfills.js">' + '<' + '/script>'
    );
  }
  else {
    bootstrap();
  }
}
// importScripts
else if (typeof importScripts !== 'undefined') {
  var basePath = '';
  try {
    throw new Error('_');
  } catch (e) {
    e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function(m, url) {
      $__curScript = { src: url };
      basePath = url.replace(/\/[^\/]*$/, '/');
    });
  }
  if (doPolyfill)
    importScripts(basePath + 'system-polyfills.js');
  bootstrap();
}
else {
  $__curScript = typeof __filename != 'undefined' ? { src: __filename } : null;
  bootstrap();
}


})();
(function (global) {
    var config = {
        map: {
            'app': 'dist/scripts/app',
            'react': 'node_modules/react/dist/react.js',
            'react-dom': 'node_modules/react-dom/dist/react-dom.js'
        },
        packages: {
            'app': { main: 'index.js', defaultExtension: 'js' }
        }
    };
    System.config(config);
})(this);

//# sourceMappingURL=globalPreload.js.map
