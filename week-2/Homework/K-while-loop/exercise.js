/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while lo369	

*/

let n = 12
function sumTillNum (num) {
  let arr = []
  let sum = 0
  while (num >= 0) {
    arr.push(num)
    sum += num
    num--
  }
  arr = arr.sort((a, b) => a - b)
  return arr.join(' + ') + ' or ' + sum
}

console.log('Sum from 0 to ' + n + ' is: ' + sumTillNum(n))
