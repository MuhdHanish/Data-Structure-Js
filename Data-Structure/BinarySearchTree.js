class Node {
 constructor(data) {
  this.data = data;
  this.left = null;
  this.right = null;
 }
}

class BinarySearchTree {
 constructor(){
  this.root = null;
 }
 insert = (data) =>{
  const node = new Node(data);
  if(this.root==null){
   this.root = node;
  }else{
   this.insertNode(this.root,node);
  }
 }
 insertNode = (node,newNode) =>{
  while(node){
   if(newNode.data < node.data){
    if(node.left==null){
     node.left = newNode;
     break;
    }else{
     node = node.left;
    }
   }else{
    if(node.right==null){
     node.right = newNode;
     break;
    }else{
     node = node.right;
    }
   }
  }
 }
 contains = (data) =>{
  let curr = this.root;
  while(curr){
   if(data<curr.data){
    curr = curr.left;
   }else if(data>curr.data){
    curr = curr.right;
   }else{
    return true;
   }
  }
  return false;
 }
 remove = (data) =>{
  this.removeHelper (data,this.root,null);
 }
 removeHelper = (data,node,parent) =>{
   while(node){
    if(data<node.data){
     parent = node;
     node = node.left;
    }else if(data>node.data){
     parent = node;
     node = node.right;
    }else{
     if(node.left!=null&&node.right!=null){
      node.data = this.getMinValue(node.right)
      this.removeHelper(node.data,node.right,node);
     } else{
      if(parent==null){
       if(node.right==null){
        this.root = node.left;
       }else{
        this.root = node.right;
       }
      }else{
       if(node==parent.left){
        if(node.left==null){
         parent.left = node.right;
        }else{
         parent.left = node.left;
        }
       }else{
        if(node.right==null){
         parent.right = node.left;
        }else{
         parent.right = node.right;
        }
       }
      }
     }
     break;
    }
   }
 }
 getMinValue = (node) =>{
  if(node.left==null){
   return node.data;
  }else{
   return this.getMinValue(node.left);
  }
 }
 preOeder = () =>{
  this.preOederHelper(this.root)
 }
 preOederHelper(node){
  if(node!=null){
   console.log(node.data);
   this.preOederHelper(node.left);
   this.preOederHelper(node.right);
  }
 }
 inOrder = () =>{
  this.inOrderHelper(this.root);
 }
 inOrderHelper = (node) =>{
  if(node!=null){
   this.inOrderHelper(node.left);
   console.log(node.data);
   this.inOrderHelper(node.right);
  }
 }
 postOrder = () =>{
  this.postOrderHelper(this.root);
 }
 postOrderHelper = (node) =>{
  if(node!=null){
   this.postOrderHelper(node.left);
   this.postOrderHelper(node.right);
   console.log(node.data);
  }
 }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(8);
bst.insert(11);
bst.insert(4);
bst.insert(9);

bst.preOeder();
console.log('-------')
bst.inOrder();
console.log('-------')
bst.postOrder();

