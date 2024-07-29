// Actvity 4: Using Third pary Modules 
// Task 6: Install a thrid party module(eg. lodash) using npm. Import and use a function from this module in java script. 
import _ from "lodash"
const arr=[1,2,3,4,5]
const addEleement=_.concat(arr,7,8)
console.log(`Orignal array ${arr}`);
console.log(`New  array ${addEleement}`);

// output
// Orignal array 1,2,3,4,5
// New  array 1,2,3,4,5,7,8
