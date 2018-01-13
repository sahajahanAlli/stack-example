
var StackMod=require('./stack.js')

var stackExample=new StackMod.Stack();


console.log('Adding two elements to the stack : '+"50 and 40");
console.log('First push is 50');
stackExample.push(50);
console.log('Count after PUSH: '+stackExample.getCount());
console.log('Second push is 40');
stackExample.push(40);
console.log('Count after PUSH: '+stackExample.getCount());
console.log('Displaying all the elements of the stack....')
console.log(stackExample.displayAll())
console.log('POP operation on the current stack : ')
console.log(stackExample.pop().data);
console.log('Count after POP: '+stackExample.getCount());
console.log('PEEK operation on the current stack : ')
console.log(stackExample.peek().data);
console.log('Count after PEEK: '+stackExample.getCount());