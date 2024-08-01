// Task 6: Use Closures to create a simple module for managing a collection of items. Implement methods to add,remove, and list items.
function createItem(){
    const items=[]
    return {
        addItem: function(item){
            items.push(item)
            console.log(`you have add ${item}`);
        },
        removeItem: function(item){
            const index=items.indexOf(item)
            if(index !==-1){
                items.splice(index,1)
            }else{
                console.log(`item not found`);
            }
        },
        listOFItems:function(){
            console.log(`you have currents items ${items}`);
        }
    }
}
const furits=createItem()
furits.addItem('Apple')
furits.addItem('Banana')
furits.listOFItems()
furits.removeItem('Apple')
furits.listOFItems()
