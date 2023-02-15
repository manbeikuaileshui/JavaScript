function animate(obj, target, callback) {
    clearInterval(obj.timer);  // 清除多次点击加快的bug
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);  // 步长取整，小数会导致与目标值有偏差
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
         //    回调函数写到定时器结束里面
         if (callback) {
             // 调用函数
             callback();
         }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}