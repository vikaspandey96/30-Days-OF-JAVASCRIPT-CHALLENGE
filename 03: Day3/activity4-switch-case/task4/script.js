// Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and 
// log the day name to the console.
let day=3;
let dayname;
switch(day){
    case 1: dayname='Sunday';
    break;
    case 2: dayname='Mondey';
    break;
    case 3: dayname="Thuseday"
    break;
    case 4: dayname="Wednesday"
    break;
    case 5: dayname="Friday"
    break;
    case 6: dayname="Saturday"
    break;
    default: dayname='Enter a vaild number'
}
console.log( "Today is ",dayname);


// output: Today is Thuseday
