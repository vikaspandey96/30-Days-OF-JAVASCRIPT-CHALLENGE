// Task 4: Create a clousre that captures a user's name and returns a function that greets the user by name.
function username(name){
    return function(){
        return ` your name ${name}`
    }
}
const greetsRam=username('Ram')
const greetsRadha=username('Radha')
console.log(greetsRadha());
console.log(greetsRam());
