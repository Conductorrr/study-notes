/*
Fisher–Yates shuffle 洗牌算法：
先从数组末尾开始，选取最后一个元素，与数组中随机一个位置的元素交换位置，
然后在已经排好的最后一个元素以外的位置中，随机产生一个位置，让该位置元素与倒数第二个元素进行交换。
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
Array.prototype.shuffle = function () {
    let len = this.length,
        i;
    while (len) {
        i = Math.floor((Math.random() * len--));
        [this[len], this[i]] = [this[i], this[len]];
    }
    return this;
}
console.log(arr.shuffle())





// 面试题：有一个长度为100的数组，如何从中随机挑选50个元素，组成一个新的数组？

//（法一：通过 sort + Math.random() 实现乱序）
function randomSort(a,b) { 
    return .5 - Math.random(); 
}
let array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
console.log(array1.sort(randomSort));
// 这并不是真正的乱序，计算机的 random 函数因为循环周期的存在，无法生成真正的随机数

//（法二：从原数组中随机抽取一个数，然后使用splice删掉该元素）
function getRandomArrElement(arr, count) {
    let res = []
    while (res.length < count) {
        let randomIdx = (Math.random() * arr.length) >> 0; // 生成随机 index
        res.push(arr.splice(randomIdx, 1)[0]); // splice 返回的是一个数组
    }
    return res
}
let array2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
console.log(getRandomArrElement(array2, 5))

// 法三：结合洗牌算法，因为洗牌算法是从后往前的嘛，只要循环到一半就可以用slice截取数组了 ----- 真正的乱序
function getShuffle(arr, count) {
    let shuffled = arr.slice(0), 
        i = arr.length, 
        min = i - count, 
        temp, 
        index;
    while (i > min) {
        index = Math.floor((i--) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
let array3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
console.log(getShuffle(array3, 5));

// (splice也实现了乱序吧？因为取随机数时length会变？)洗牌算法的性能优秀很多。
// 用Array.form生成了一个长度为一百万的数组，然后从中随机取十万个数，使用splice的方案耗时47268，洗牌算法的方案耗时19。
// 猜测每次循环都要splice，splice要移动删除元素后面所有的元素，而洗牌算法每次循环只要交换即可。
// 而且法二还得用一个额外的空间，洗牌算法不需要。