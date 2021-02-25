function log(total) {
    var arr = []
    while (total > 0) {
        total--
        arr.push((function(i){
            console.log(i)
        }(total)))
    }

    return arr
}
const a = log(5)
let length = a.length
while (length--) {
    a[length]() // 4，3，2，1，0
}