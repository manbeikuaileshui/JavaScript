// 引入 fs 模块
const fs = require('fs');
// 读取 为学
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/为学.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}
// 读取 插秧
function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}
// 读取 观书
function readGuanShuYouGan() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

// 声明一个 async 函数
async function main() {
    // 获取为学内容
    let Weixue = await readWeiXue();
    // 获取插秧诗内容
    let Chayang = await readChaYangShi();
    // 获取观书有感内容
    let Guanshu = await readGuanShuYouGan();
    console.log(Weixue.toString());
    console.log(Chayang.toString());
    console.log(Guanshu.toString());
}
main();