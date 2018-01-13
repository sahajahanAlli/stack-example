
/*
* Stack is perticular datatype in which data is arranged in perticular format. That Format is called LIFO(Last In First Out).
* LIFO means Whoever comes last into the storage system will leave first from the system. example is stack of plates storange.
* The plate which is kept last will be removes first.
*Merge sorting is one of the example of stack in computer system. computer keeps all the unfinished arithmetic expression in stack 
* and evaluates the last in function first them go to next expression  
*PUSH,POP,PEEK are the main methods of the stack operation.PUSH adds elements to stack. POP removes element from the stack.
* PEEK retruns the item on the top of the stack without removing it.
*
*
*/




function Stack(){

var top =null;   // keep track of top or last in element of stack 
var count=0;   // keeps the count of number of elements in the stack

//returns the no of items in the stack
this.getCount=function(){
	return count;
}

// push method 
/*
* It add the elements to the stack system. It adds the new elements and changes the top pointer to recently added element in the stack
**/

this.push=function(item){

	//creating the new node and assigning the data and referring to the next node
	var node={
		data:item,
		next:null
	}

	//  first item to stack, it is assigned to null ,as it is the first element and it doesn't element to link.After that it points to
	// last added element
	node.next=top;

	//make the current position to top / recently added element  of the stack
	top=node;

	//increase the counter of the stack
	count++;

}

this.pop=function(){

// to avoid error if stack is null
if(top==null){
	return null;
}

var popOutItem=top;

top=top.next;

// pop means removing top item from the stack. so it removes one element from the array and decreases the counter by one.
if(count>0){
	count--;
}
return popOutItem;
}

//Peek
/*
* It returns the top element of the stack without removing it.It is the safest method to read the top element of the stack.
*/

this.peek=function(){

	//return null if stack dont have value 
	if(top==null){
		return null;
	}else{
		// return the top element.
		return top;
	}


}
/*
* It is a way to read all the elements in the stack.
*
*/


this.displayAll=function(){
if(top==null){
		return null;
	}else{
		var arr=[];
		var curr=top;

		for(var i=0;i<count;i++){
			arr.push(curr.data);
			curr=curr.next;
		}
	}

return arr;
}

}


module.exports.Stack=Stack;