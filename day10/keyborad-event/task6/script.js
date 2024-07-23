let textInput=document.querySelector('#text-input')
let paragraph=document.querySelector('#para')
textInput.addEventListener('keyup', function(){
    paragraph.textContent=textInput.value
})
