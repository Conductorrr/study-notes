// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 

// 思路：先把整个字符都颠倒过来,之后按照空格分隔开， 重新排序

let str = "Let's take LeetCode contest"

let reverseWord = (str) => {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

console.log(reverseWord(str))