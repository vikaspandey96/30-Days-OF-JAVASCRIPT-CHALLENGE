// Task 9: Write a higher order function that takes a function and a number , and calls the function that many times.
function callManyTime(func,time){
    for(i=0;i<=time;i++){
        func()
    }
}
function sayHello(){
    console.log('hello');
}
callManyTime(sayHello,4)

// output:
// hello
// hello
// hello
// hello
