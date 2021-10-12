export default function () {
    console.log('foo')
}

/*
export default命令，用于为模块指定默认的输出
其他模块加载该模块时，import命令可以用任意名称指向原模块输出的方法，这时就不需要知道原模块输出的函数名
显然，一个模块只能有一个默认输出，因此export default命令只能使用一次（可以有多个export）(在一个模块中，可以同时使用 export default 和 export 向外暴露成员)
*/



// function foo() {
//     console.log('foo');
// }
// export default foo;
// 上面代码中，foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。