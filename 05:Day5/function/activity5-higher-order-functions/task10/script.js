// Task 10:Write a higher-order function that takes a function and a number , and calls the function that many times.
function higherFun(fun1,fun2,value){
    let fun1val=fun1(value)
    let fun2val=fun2(fun1val)
    return fun2val
}
let squareNum=num=> num*num
let multiply=num=> num*2
value=3
const result=higherFun(squareNum,multiply,value)
console.log(result);

// output : 18
