// 入口文件

// 模块引入
import * as m1 from "./40.模块化.js";
import * as m2 from "./40.模块化1.js";
import * as m3 from "./40.模块化2.js";

console.log(m1);
console.log(m1.school);
m1.teach();  // 我们可以教给你开发技能
console.log(m2);
console.log(m2.school);
m2.findJob();  // 我们可以帮助你找工作
console.log(m3);
console.log(m3.default.school);
m3.default.change();  // 我们可以改变你