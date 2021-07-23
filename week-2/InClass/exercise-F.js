function isValidUser (user) {
  const letter = user[0].toUpperCase();
  if (
    letter == 'A' ||
    letter == 'B' ||
    letter == 'I' ||
    letter == 'O' ||
    (letter == 'U' && user.length > 5 && user.length < 10)
  ) {
    return 'Username valid'
  } else {
    return 'Username invalid'
  }
}

const user = "123456"
console.log(isValidUser(user));
