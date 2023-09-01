"use strict";
console.log("our loop js file is connected!");

// How long would it take to print the numbers 0 to 100 using console.log?
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Use a loop to run code many times

// console.log("While loops require a starting variable, in this case a variable set to 0");
// let count = 10;
// while (count <= 50) {
//   count = count + 5;
// }

//----------------------------
// count = 50;
// while(count >= 40) {
//   console.log(count);
//   count = count - 2;
// }
 //----------------------------
 // console.log("Count up from 0 to 60 by 10");
// count = 0;
// while(count <= 60) {
//   console.log(count);
  // count = count + 10;
//   count += 10;
// }

// This loop will run forever, prompting the user to enter a number until they type 1. 
// let stop = '1'; //SENTINAL
// while(true){
//   let input = prompt('Give a number. Type 1 to exit. ');
//   if(input === stop) {
//     break;
//   }
// }

// let answer = 'ice cream';

// while(true){
//   let input = prompt('What is your favorite dessert?');
//   if(input === answer){
//     break;
//   }
// }



 console.log("For loops incorporate the 3 required parts of a loop on a single line: ");
 console.log("(1) starting variable, ");
 console.log("(2) an expression to end the loop, ");
 console.log("(3) an expression to increment the starting variable. ");
 console.log('\n');


//  for(1.  2.  3. ){

//  }
//                             count = count + 1
for(let count = 0;  count < 50;  count++){
  // console.log('we are looping', count);
}

for(let count = 50; count >= 0; count-=10){
  // console.log('count going down', count);
}


//new content from curriculum 102 class 8 demo 
/**
 * Add validation on one of the user inputs.
 * Keep asking until an acceptable value is entered.
 * Show an image related to your page's topic, repeated within your page.
 * Prompt the user with a relevant question for a number (e.g.: "How many cats do you want?" or "What star rating      would you give, 1-5?")
 * Use a loop in your JavaScript code to show the image that many times.
 * How could you use functions to make your code more readable?
 */

//grab our html section element id in the section in the footer
let imageElement = document.getElementById('imageSection');
console.log(imageElement);

//ask the user for info
//prompt methods return the value as a string only text
let userInput = prompt('How many images would you like to see?');
// console.log(typeof(userInput));
//can be checked in our if              number    <-   string
let userInputParsed =  parseInt(userInput);

//add check to see that we have a number 
if(!isNaN(userInputParsed)){
  //ask question again
  console.log('we have a valid number to use!');
} else {
  userInput = prompt('Please, How many images would you like to see?');
}


//              user    4
for(let i = 0; i < userInputParsed; i++){
  let listImage = document.createElement('li');
  console.log(listImage);
  // string interpolation or string template or template literal '  ---  ` ${}`
  listImage.textContent = `image number ${i + 1}`;
  //creat html img tag first
  let image = document.createElement('img');
  // console.log('empty image tag: ',image);
  //we add actual img link. 
  image.setAttribute('src', 'images/header.jpg');

  // is how we get the image to the html it appends each image to the browser 
  //we give the image to the <li>
  listImage.appendChild(image); 
  //we give <li> tag to our section in html
  imageElement.appendChild(listImage);
}



// prompt()
// write()
// confirm()
// appendChild()