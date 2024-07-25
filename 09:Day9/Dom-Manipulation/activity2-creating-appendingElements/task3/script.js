// Task 3: Create a new div elements with some text content and append it to the body. 
const newDiv=document.createElement('div')
const textContent=document.createTextNode("Hello,this is new created")
newDiv.append(textContent)
document.body.append(newDiv)
