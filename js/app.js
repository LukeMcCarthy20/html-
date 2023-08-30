"use strict";

console.log(':)');


let userName = prompt('what is your name?');
//console.log(indetifer, value)

console.log('user name:', userName);

let userPlay = prompt('Have you played elden ring: Type 1 for YES and 2 for NO?');

console.log('Answer:', userPlay);

//you can respond using condtions

//if(some condition is true){
    //then we will do some code stuff here}
let message;
//this creates a variable to hold a value

if(userPlay < 1){
 message = 'you should play Elden Ring!';
} else{
    message = 'good job'
}
console.log('user response',message);

document.write('Hello, ' + message + ' ' + userName + '.');

let userFun = confirm('do you like my website?');

console.log('user response', userFun);

let userAsk =prompt('Do you have any questions: 1 yes and 2 no')
let message2;

if(userAsk = 1){
    message2 = ' ' + 'Someone will give you a call soon!'
} else if(userTime = 2){
    message = ' ' + 'Enjoy The Website';
}

document.write(message2)
//our if conditons will run if the condition is ture


//use console logs to see our input in code.




//single line comment (EXAMPLES)

/**
 * Methods 
 * 1. prompting
 */