/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

const longNameThatStartsWithA = names.find(item => item.startsWith("A") && item.length > 4)

const nameStartsWithA = names.filter(item => item.startsWith("A") && item.length > 8);

console.log(nameStartsWithA);
console.log(longNameThatStartsWithA); 

/* EXPECTED OUTPUT */
// "Alexandra"
