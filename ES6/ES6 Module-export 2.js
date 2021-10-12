/*
使用 ES6 Module：
1. 在浏览器中使用 ES6 Module：
   浏览器通过script标签加载ES6模块，加上type="module"属性。（之前是浏览器通过script标签加载JS脚本）
  （1）通过script的src引用模块
      <script type="module" src="./foo.js"></script>
      上面代码在网页中插入一个模块foo.js，由于type属性设为module，所以浏览器知道这是一个 ES6 模块
  （2）也可以在script标签中import模块
      <script type="module">
        import utils from "./utils.js";
        // other code
      </script>
   (需要起一个Web服务器来访问，双击本地运行index.html并不会执行type=module标签)

2. 在Nodejs中使用 ES6 Module：
   Node对ES6模块的处理比较麻烦，因为它有自己的CommonJS模块格式，与ES6模块格式是不兼容的。
   目前的解决方案是，将两者分开，ES6 模块和 CommonJS 采用各自的加载方案（不要混用的意思，见总结）。

   Node v8.5.0或以上版本支持ES6 Module，要用--experimental-modules参数才能打开该功能，从v13.2版本开始，Node.js已经默认
   打开了ES6 模块支持。且Node要求ES6 模块采用.mjs后缀文件名。
   如果不希望将后缀名改成.mjs，可以在项目的package.json文件中，指定type字段为module："type": "module",一旦设置了以后，
   该目录里面的 JS 脚本，就被解释用 ES6 模块。

   总结：.mjs文件总是以ES6模块加载(import)，.cjs文件总是以CommonJS模块加载(require)，.js文件的加载取决于package.json里type字段的设置。

3. 在webpack中使用 ES6 Module：从webpack2就默认支持es module了（并默认支持CommonJs）

4. rollup中使用 ES6 Module
*/





// 下面以在Nodejs中使用为背景，介绍一下ES6 Module的语法

import { firstName, lastName as ln, year2, multiply } from './ES6 Module-export.mjs'
console.log(firstName)
console.log(ln)
console.log(year2)

// export 暴露的成员只能使用 { } 的形式来接收，这种形式,叫做【按需导出】

// 可以使用as关键字将输入的变量重命名

// 建议不要在加载模块的脚本里面，改写接口     比如改写fisrtName = 'Jack' 不可以

// 模块的整体加载：用星号 * 指定一个对象，所有输出值都加载在这个对象上面
import * as all from './module.js'
console.log(all.firstName)

// 通过export语句输出的接口，取到的是模块内部实时的值





/*
ES6 Module的运行机制：
JS引擎对脚本静态分析的时候，碰到模块加载命令import，只会生成一个只读引用，等到脚本真正执行时（等我需要用到被导入模块的某个变量时），
再根据这个只读引用，到被导入模块里中取值
*/

/*
ES6 Module与CommonJS的差异：
1.Module输出的值 是一个实时的值，会随模块内部的变化而动态更新(因为，，，原理）
  CommonJS输出的值 不会(随模块内部的变化而)变化，一直用第一次require的结果(因为，，，原理），
2.Module是编译时输出接口（ES6模块它的对外接口只是一种静态定义，不是对象，在代码静态解析阶段就会生成）
  CommonJS是执行时加载（执行时输出接口，因CommonJS加载的是一个对象，该对象只有在脚本执行完才会生成）
3.Module顶层的this指向undefined，CommonJS顶层的this指向当前模块
4.Module静态语法只能写在顶层（不能在块极作用域中），CommonJs是动态语法可以写在判断里，
*/