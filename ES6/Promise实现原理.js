//极简的实现
class Promise {
    callbacks = [];
    constructor(fn) {
        fn(this._resolve.bind(this)); // resolve作为参数传给fn
    }
    then(onFulfilled) {
        this.callbacks.push(onFulfilled);
    }
    _resolve(value) {
        this.callbacks.forEach(fn => fn(value));
    }
}

// callbacks为数组，可见.then可以调用多次

// https://my.oschina.net/vivotech/blog/3214445