function contar(str,char) {
  var contadorChar = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      contadorChar += 1
    }
  }
  return contadorChar
}

console.log(contar("alcancia","l"));
