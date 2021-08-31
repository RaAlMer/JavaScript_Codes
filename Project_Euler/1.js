// Función que busca la suma de todos los números inferiores a uno dado que sean múltiplos de 3 o 5

function multiplesOf3and5(number) {
  var my_3 = []; // Array donde irán los números que son múltiplos de 3
  var my_5 = []; // Array donde irán los números que son múltiplos de 5
  var total_3 = 0;
  var total_5 = 0;
  var total = 0;
  
  for(var i = 0; i < number; i++){
    if (i % 3 === 0){
      if (my_3.indexOf(number) !== -1){
        // Número ya está en el array
      } else {
        my_3.push(i);
      }
    } else if (i % 5 === 0) {
      if (my_5.indexOf(number) !== -1){
        // Número ya está en el array
      } else {
        my_5.push(i);
      }
    }
  }

  // Suma de los múltiplos de 3
  for(var j = 0; j < my_3.length; j++){
    total_3 += my_3[j];
  }
  // Suma de los múltiplos de 5
  for(var k = 0; k < my_5.length; k++){
    total_5 += my_5[k];
  }
  // Suma total
  total = total_3 + total_5;
  return total;
}

multiplesOf3and5(1000);
