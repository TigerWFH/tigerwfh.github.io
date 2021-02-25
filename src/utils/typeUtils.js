function TypeUtils() {
    this.displayName = 'Utils'
}
// 1
TypeUtils.prototype.isNumber = function(num) {
    // 即使使用了包装类Number，也是number
    return typeof num === 'number'
}
// 2
TypeUtils.prototype.isString = function(str) {
    return typeof str === 'string'
}
// 3
TypeUtils.prototype.isBoolean = function(bool) {
    return typeof bool === 'boolean'
}
// 4
TypeUtils.prototype.isUndefined = function(arg) {
    return typeof arg === 'undefined'
}
// 5
TypeUtils.prototype.isSymbol = function(symbol) {
    return typeof symbol === 'symbol'
}
// 6
TypeUtils.prototype.isNull = function(arg) {
    return !arg && typeof arg === 'object'
}
// 7
TypeUtils.prototype.isArguments = function(arg) {
    return !!arg && typeof arg === 'object' && arg.toString() === '[object Arguments]'
}
// 8
TypeUtils.prototype.isArgumentsOrArray = function(arr) {
    return Array.isArray(arr) || this.isArguments(arr);
}
// 9
TypeUtils.prototype.isPromise = function(arg) {
    return !!arg && typeof arg === 'object' && arg.toString() === '[object Promise]'
}
export default TypeUtils;
