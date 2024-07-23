const items=document.querySelector('#listItem')
items.addEventListener('click', function(e){
    console.log(`your click item is ${e.target.textContent}`)
})
