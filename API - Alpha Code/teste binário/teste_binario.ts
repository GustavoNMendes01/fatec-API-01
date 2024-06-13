let b = 222; //Substituir pelo número binário de entrada.

for(var i = 0; i < String(b).length; i++){

  if((Number(String(b)[i]) != 1) && (Number(String(b)[i]) != 0)){
    console.log(`${b} é diferente de 0 e 1`);
    break;
  }
