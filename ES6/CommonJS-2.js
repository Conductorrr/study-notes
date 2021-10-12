var mod = require('./CommonJS');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3   没变



/*
CommonJS加载的原理：
第一次碰到require命令加载脚本，就会执行整个脚本，然后在内存生成一个对象
    {
        id: '...',
        exports: { ... },  //exports属性是模块输出的各个接口
        loaded: true,
        ...
    }
以后需要用到这个模块的时候，就会到exports属性上面取值。后面再用require命令，也不会再执行模块，就直接到缓存之中取值
(CommonJS模块无论加载多少次，都只会在第一次加载时执行一次，以后再加载，就返回第一次执行的结果，除非手动清除系统缓存)
*/