let num = 13;

function satisfiesRequirements(num) {
 if (num > 3 && num < 10) {
   return true;
 } else {
 return false;
 }
}
console.log(satisfiesRequirements(num));

/* $ node 
Welcome to Node.js v14.15.4.
Type ".help" for more information.
> let num = 10
undefined
> num > 5 && num < 15
true
> num < 10 || num === 10
true
> false || true
true
> !true
false
> let greaterThan5 = num > 5
undefined
> !greaterThan5
false
> !(num === 10)
false */