// 1 → 2 → 3 → 4
// insert 99 at possition 3
//1,2,99,3,4

class Node
{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}

function insertNode(head,val)
{
    let node=new Node(val)
    
    if(head===null)
    {
        return node
    }
    let start=head
    
    while(start.next!==null)
    {
        start=start.next
    }
    start.next=node
    
    return head
}
let head=null

head=insertNode(head,1)
head=insertNode(head,2)
head=insertNode(head,3)
head=insertNode(head,4)

// let print=head


function insertion(head,val,pos)
{
    let newNode=new Node(val)
    let curr=head
    let count=0
    while(curr!==null&&count<pos-2)
    {
        curr=curr.next
        count++
    }
    let nextNode=curr.next
    curr.next=newNode
    newNode.next=nextNode
   
   
   return head
}
head=insertion(head,900,5)

let print=head
while(print!==null)
{
    console.log(print.data)
    print=print.next
}

