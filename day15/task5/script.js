// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. 
// Use a Closures to ensure each function logs correct index. 
function arrayFun(arrSize){
    const funArray=[]
    for(let i=0;i<arrSize;i++){
        let index=i
        funArray.push(function(){
            console.log(index);
        })
    }
    return funArray;
}

let arr= arrayFun(3);
arr[0]()
arr[1]()
arr[2]()
