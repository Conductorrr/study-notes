function testAwait1() {
    return Promise.reject("error");
}
async function helloAsync1() {
    try {
        await testAwait1();
    } catch (e) {
        console.log("this error:" + e) //this error:error
    }
    console.log("helloAsync1"); //helloAsync1
}
helloAsync1().then(v => {}).catch(e => {
    console.log(e); //没有打印
});