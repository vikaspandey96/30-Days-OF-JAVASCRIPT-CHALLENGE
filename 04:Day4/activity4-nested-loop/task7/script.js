/* Task 7: Write a program to pring a pattern using nested for loops 
*
**
***
****
*****
 */

for(let i=1;i<=5;i++){
    let star="";
    for(let j=1;j<=i;j++){
       star= star+'*' 
    }
    console.log(star);
}

// output
// *
// **
// ***
// ****
// *****
