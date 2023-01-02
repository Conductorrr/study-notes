Array.prototype.myReduce = function(cb, init) {
    let total = init || arr[0]
    console.log(total)
    for(let i = init ? 0 : 1; i < this.length; i++) {
        total = cb(total, this[i], i, this)
    }
    return total
}

const arr = [2,3,4,5]
const result = arr.myReduce((total, item) => {
    return total + item
}, 1)
console.log(result)