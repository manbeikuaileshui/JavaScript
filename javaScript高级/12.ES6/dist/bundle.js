(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _ = require("./40.\u6A21\u5757\u5316.js");

var m1 = _interopRequireWildcard(_);

var _2 = require("./40.\u6A21\u5757\u53161.js");

var m2 = _interopRequireWildcard(_2);

var _3 = require("./40.\u6A21\u5757\u53162.js");

var m3 = _interopRequireWildcard(_3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1); // 入口文件

// 模块引入

console.log(m1.school);
m1.teach(); // 我们可以教给你开发技能
console.log(m2);
console.log(m2.school);
m2.findJob(); // 我们可以帮助你找工作
console.log(m3);
console.log(m3.default.school);
m3.default.change(); // 我们可以改变你
},{"./40.模块化.js":2,"./40.模块化1.js":3,"./40.模块化2.js":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.teach = teach;
// 分别暴露
var school = exports.school = '尚硅谷';
function teach() {
    console.log('我们可以教给你开发技能');
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一暴露
var school = '尚硅谷';
function findJob() {
    console.log('我们可以帮助你找工作');
}

exports.school = school;
exports.findJob = findJob;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露
exports.default = {
    school: 'ATGUIGU',
    change: function change() {
        console.log('我们可以改变你');
    }
};
},{}]},{},[1]);
