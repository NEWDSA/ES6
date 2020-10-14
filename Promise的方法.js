//当网络请求慢于2s的时候，就提示网络状况不佳
const promise1 = new Promise(resolve => {
    setTimeout(() => {
        resolve(1);
    }, 3000);
});
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(2);
    }, 2000);
});
const promise3 = new Promise(resolve => {
    setTimeout(() => {
        resolve(3);
    }, 1000)
});

/**
 *  all 方法先写那个就那个先执行
 *  但是如果有 reject的话就执行执行reject
 */
Promise.all([promise1, promise2, promise3]).then(v => {
    console.log('then');
    console.log(v, `v`);
}).catch(v => {
    console.log('catch');
    console.log(v, `v`);
}) //promise.all方法接收一个数组

/**
 *  race 方法会执行最先完成的
 */
Promise.race([promise1, promise2, promise3]).then(v=>{
    console.log('then');
    console.log(v,`v`);
}).catch(v=>{
    console.log('catch');
    console.log('网络状况不佳')
    console.log(v,`v`)
})

/**
 *  按顺序执行 async/await 是成对出现
 */
async function execute(){
    await promise1.then(v=>console.log(v))
    await promise2.then(v=>console.log(v))
    await promise3.then(v=>console.log(v))
}

execute();