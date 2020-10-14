function reuqest1(){
    return new Promise(resolve=>resolve(1))
}
function reuqest2(){
    return new Promise(resolve=>resolve(2))
}
function reuqest3(){
    return new Promise(resolve=>resolve(3))
}

reuqest1().then(v=>{
    console.log('第一层then')
    console.log(v,`v`)
    return reuqest2()
}).then(v=>{
    console.log('第二层then')
    console.log(v,`v`)
    return reuqest3()
})

