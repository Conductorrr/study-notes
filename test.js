async function f() {
    throw new Error('出错了');
    console.log('sss')
}
f().then(
    v => console.log('aaa',v),
    e => console.log('bbb',e)
)