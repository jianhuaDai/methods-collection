
// 判断数据类型 meun {object,array,date,string,number...}
function typeOf(obj) {
    let res = Object.prototype.toString.call(obj).split(' ')[1]
    res = res.substring(0, res.length - 1).toLowerCase()
    return res
}

