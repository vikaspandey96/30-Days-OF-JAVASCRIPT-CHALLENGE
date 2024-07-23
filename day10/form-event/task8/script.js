const item=document.querySelector('#items')
const displaypara=document.querySelector('#para')
item.addEventListener('change', function(e){
    // const value=e.target.value
    displaypara.textContent=`you have Selected value ${e.target.value}`
})
