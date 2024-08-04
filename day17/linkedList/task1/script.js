class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
const node1=new node(22)
const node2=new node(10)
node1.next=node2
console.log(node1);
console.log(node2);

/* output: 
node { value: 22, next: node { value: 10, next: null } }
node { value: 10, next: null } */
