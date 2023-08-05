var arr = [1,2,3,10,15,100,80];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);
console.log(max);