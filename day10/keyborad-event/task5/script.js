const fullname=document.querySelector('#text-input')
fullname.addEventListener('keydown', function(e){
    console.log(`Key Pressed: ${e.key}`);
})
//output--Key Pressed: ArrowDown
