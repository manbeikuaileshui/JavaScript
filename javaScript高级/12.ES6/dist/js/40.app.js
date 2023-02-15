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