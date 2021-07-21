
const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange']; 
 
function replacer(str) {
    return str.replace("apple" , "raspberry");
}

console.log(replacer(fruits))