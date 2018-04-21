function caracteresEnComun (str1,str2) {
  var contador = 0
  var array1 = []
  var arrayRespuesta =[]
  for (var i = 0; i < str1.length; i++) {
    array1.push(str1[i])
  }
  for (var i = 0; i < str2.length; i++) {
    array1.push(str2[i])
  }
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array1.length; j++) {
      if (array1[i] === array1[j] ){
        contador += 1
      }
    }
    if (contador === 2) {
        arrayRespuesta.push(array1[i])
    }
  }
  return arrayRespuesta
}

console.log(caracteresEnComun('diego','william'))
