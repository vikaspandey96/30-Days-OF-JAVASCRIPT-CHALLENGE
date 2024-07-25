// TAsk 9: Add a click event listener to a button that changes the text content of a paragraph. 
const content=document.querySelector('h1')
const btn=document.querySelector('#change-content')
btn.addEventListener('click',()=>{
    content.textContent='My name is vikas pandey'
})
