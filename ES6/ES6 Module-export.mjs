// (一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。但)
// 可以使用export关键字输出常量、变量、函数、类、文件、模块，在其他文件或模块中使用import关键字将其导入，以便能够对其使用

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
function multiply(x, y) {
    return x * y;
};

export {firstName, lastName, year as year2, multiply};

// 可以使用as关键字重命名





// 也可以这样 写一个导出一个
export var firstName = 'Michael';
export var lastName = 'Jackson';