const a = require('./百度a')
console.log(a.a)//1
console.log(a.b)//{}
setTimeout(()=>{
    console.log(a.a)//1 没变
    console.log(a.b)//{ b: 2 } 变了   猜测是值不能变，增加一个属性就行
},500)
