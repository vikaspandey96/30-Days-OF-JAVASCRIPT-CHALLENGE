const fullname=document.querySelector('#text-input')
fullname.addEventListener('keydown', function(e){
    console.log(`Key Pressed: ${e.key}`);
})
//output--Key Pressed: ArrowDown




//OR
//It use when you want only keydown console
const fullname=document.querySelector('#text-input')
fullname.addEventListener('keydown', function(e){
    if(e.key==='ArrowDown'){
        console.log(e.key);
    }
   
})

