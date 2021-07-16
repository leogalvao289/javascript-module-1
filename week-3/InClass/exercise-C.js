let nums = [1, 2, 3]
let doubles = nums.map(function (num) {
  return num * 2
})

console.log(doubles)


function magician (yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  )
  const namesArray = [
    'James',
    'Elamin',
    'Ismael',
    'Sanyia',
    'Chris',
    'Antigoni'
  ]

  const magicOutput = yourFunc(namesArray)

  return magicOutput
}

const upperCaseName = miArray 
