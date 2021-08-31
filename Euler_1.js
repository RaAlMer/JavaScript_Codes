function multiplesOf3and5(number) {
  var my_3 = [];
  var my_5 = [];
  var total_3 = 0;
  var total_5 = 0;
  var total = 0;
  
  for(var i = 0; i < number; i++){
    if (i % 3 === 0){
      if (my_3.indexOf(number) !== -1){
        //Número ya está en el array
      } else {
        my_3.push(i);
      }
    } else if (i % 5 === 0) {
      if (my_5.indexOf(number) !== -1){
        //Número ya está en el array
      } else {
        my_5.push(i);
      }
    }
  }

  for(var j = 0; j < my_3.length; j++){
    total_3 += my_3[j];
  }
  for(var k = 0; k < my_5.length; k++){
    total_5 += my_5[k];
  }
  total = total_3 + total_5;
  return total;
}

multiplesOf3and5(1000);
