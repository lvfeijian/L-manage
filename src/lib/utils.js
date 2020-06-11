// 时间格式化
export function FormatDate(date, fmt) {
    date = new Date(date);
    if (typeof fmt === "undefined") {
        fmt = "yyyy-MM-dd hh:mm:ss";
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    }
    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? str : ("00" + str).substr(str.length)
            );
        }
    }
    return fmt;
}

//浏览器全屏
export function fullScreen() {
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
        el.mozRequestFullScreen || el.msRequestFullScreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    } else if (typeof window.ActiveXObject != "undefined") {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}

//退出浏览器全屏
export function exitFullScreen() {
    var el = document;
    var cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
        el.mozCancelFullScreen || el.exitFullScreen;
    if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
    } else if (typeof window.ActiveXObject != "undefined") {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}

//message
let messageList = []
export function message(msg) {
    const div = document.createElement('div')
    for(let i = 0; i < messageList.length && i >= 0; i++) {
        const opacity = window.getComputedStyle(messageList[i].getElementsByTagName("div")[0], null).getPropertyValue('opacity')
        if(parseFloat(opacity) === 0) {
            document.body.removeChild(messageList.splice(i, 1)[0])
            i--
        } 
    }
    messageList.push(div)
    let icon = '&#xe603;'
    switch(msg.type) {
        case 'ok': icon = '&#xe703;'; break //正确消息
        case 'error': icon = '&#xe637;'; break //错误消息
        case 'warning': icon = '&#xe6b4;'; break //警告消息
    }
    div.setAttribute('style', 'top: ' + (messageList.length - 1) * 60 + 'px;')
    div.innerHTML = '<div class="app-message iconfont app-message-' + msg.type + '" style="top:' + (messageList.length - 1) * 60 + 'px;"><span>' + icon + '</span><span>' + msg.text + '</span></div>'
    document.body.appendChild(div)
}