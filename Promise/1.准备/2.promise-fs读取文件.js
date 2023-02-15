// 引入fs模块
const fs = require('fs')

// fs.readFile('./context.txt', (err, data) => {
//     // 如果出错，则抛出错误
//     if (err) throw err;
//     // 输出文件内容
//     console.log(data.toString());
// })

// Promise形式
const p = new Promise((resolve, reject) => {
    fs.readFile('./context.txt', (err, data) => {
        // 出错
        if (err) reject(err);
        // 成功
        resolve(data);
    })
})
// 调用then方法
p.then(value => {
    console.log(value.toString());
},
reason => {
    console.log(reason);
})