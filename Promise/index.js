const promise1 = new Promise((resolve, reject) => { }) //pending(未执行)
const promise2=new Promise((resolve,reject)=>resolve(1)); //resolved(已解决的)
const promise3=new Promise((resolve,reject)=>reject(2)); //rejected(拒绝的)
console.log(promise1, `promise1`)
console.log(promise2, `promise2`)
console.log(promise3, `promise3`)

/**
 *  resolved 执行的是then方法
 */
promise2.then(v=>{
    console.log('then');
    console.log(v,`v`);
})
/**
 *  rejected执行的是catch方法
 */
promise3.catch(v=>{
    console.log('catch')
    console.log(v,`v`)
})

