let num = 13;

function satisfiesRequirements(num) {
 if (num > 3 && num < 10) {
   return true;
 } else if (1 || 12) {
   return true;
 }
 return false;
}
console.log(satisfiesRequirements(num));