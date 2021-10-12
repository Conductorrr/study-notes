//极简的实现
class Promise {
    callbacks = [];
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {
        this.callbacks.push(onFulfilled);
    }
    _resolve(value) {
        this.callbacks.forEach(fn => fn(value));
    }
}

//完整的看收藏