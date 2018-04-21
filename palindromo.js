String.prototype.esPalindrome = function () {
  var stripStr = this.toLowerCase().replace(/\W|\s/g, '')
  var checkStr = stripStr.split('').reverse().join('')
  if (stripStr === checkStr) {
    return true
  } else {
    return false
  }
}

console.log('hola'.esPalindrome())
console.log('bob'.esPalindrome())
console.log('anita lava la tina'.esPalindrome())
console.log('a ti no bonita'.esPalindrome())
