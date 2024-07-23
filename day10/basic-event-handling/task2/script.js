const img=document.querySelector('img')
img.addEventListener('dblclick',function(){
    if(img.style.display==="none"){
        img.style.display='block'
    }else{
        img.style.display='none'
    }
})

