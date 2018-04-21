function contar(str) {
  var contadorA = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      contadorA += 1
    }
  }
  return contadorA
}

console.log(contar("alcancia"));
