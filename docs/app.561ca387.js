parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
var t=document.getElementsByClassName("inochi__pupil"),e=function(t){var e=[];return Array.from(t,function(t){var n=t.getBoundingClientRect();e.push({element:t,x:n.x,y:n.y,width:n.width,height:n.height})}),e},n=function(t,e,n){return t-e>1.5*n?n:t-e<=.5*n?0:t-e-.5*n};window.addEventListener("load",function(){var i=e(t);window.addEventListener("mousemove",function(t){Array.from(i,function(e){var i=n(t.clientX,e.x,e.width),o=n(t.clientY,e.y,e.height);e.element.setAttribute("style","left: ".concat(i,"px; top: ").concat(o,"px"))})})});
},{}]},{},["QdeU"], null)
//# sourceMappingURL=app.561ca387.js.map