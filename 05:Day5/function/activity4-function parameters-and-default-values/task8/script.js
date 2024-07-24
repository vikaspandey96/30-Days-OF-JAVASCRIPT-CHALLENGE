// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. 
greetPerson=(name,age=33)=>`Hello ${name} , you are ${age} year old`;
console.log(greetPerson('Rahul')); 
console.log(greetPerson('ram', 20));

// output:
// Hello Rahul , you are 33 year old 
// Hello ram , you are 20 year old 
