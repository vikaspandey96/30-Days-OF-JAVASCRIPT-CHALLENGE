const parent=document.querySelector('.parent')
const addChild=document.querySelector('#childAdd')
parent.addEventListener('click',function(e){
    console.log('clicked child element text content',e.target.textContent);
})

addChild.addEventListener('click', function(){
    const newChild=document.createElement('div')
    newChild.classList.add("childEle")
    newChild.textContent='This is new child element'
    parent.appendChild(newChild)
})
