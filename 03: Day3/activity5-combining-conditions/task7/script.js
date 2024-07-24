// Task 7: Write a program to check if a year is a leap year using multiple 
// conditions(divisible by 4,but not 100 unless also divisible by 400)and log the result to the console.
let year=2000
if(year%4===0){
    if(year%100){
        if(year%400){
            console.log(`${year} year is leap year`);
        }else{
            console.log(`${year} year is not leap year`);
        }
    }else{
        console.log(`${year} is leap year`);
    }
}else{
    console.log(`${year} is not leap year`);
}

// output: 2000 is leap year
