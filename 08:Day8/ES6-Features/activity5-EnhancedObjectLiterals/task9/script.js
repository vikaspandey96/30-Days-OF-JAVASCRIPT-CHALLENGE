// Task 9:Create an obejct with computed property names based on variable and log the object to the console. 
const lastName="lname"
const fullName={
    fname:"vikas",
    [lastName]:'pandey'
}
console.log(`My fullname is ${fullName.fname} ${fullName.lname}`);

// output: My fullname is vikas pandey
