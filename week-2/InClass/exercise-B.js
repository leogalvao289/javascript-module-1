function boolChecker (bool) {
  if (typeof bool) {
    return "You've given me a bool, thanks!"
  } else {
    return 'No bool, not cool.'
  }
}

console.log(boolChecker(true))
