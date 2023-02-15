// util.promisify方法

// 引入 util 模块
const util = require('util')
// 引入fs模块
const fs = require('fs')
// 返回一个新的函数 函数的返回值就是一个promise对象
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./context.txt').then(
    value => {
        console.log(value.toString());
    },
    reason => {
        console.log(reason);
    }
)