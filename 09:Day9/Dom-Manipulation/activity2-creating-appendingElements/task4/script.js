// Task 4: Create a new li elements and add it to na existing ul list. 
const newLI=document.createElement('li')
const textContent=document.createTextNode("Laptop")
newLI.append(textContent)
document.querySelector('#item-list').append(newLI)
