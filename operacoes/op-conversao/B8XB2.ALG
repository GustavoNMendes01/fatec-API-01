Algoritmo "B8 para B2"
//
// Descrição   : Conversão de base Octal para Binário
//
Var

 num_o, num_b, dig_o, potencia, i, dig_b: inteiro

Inicio

escreva("Digite o número octal que será convertido: ")
   leia(num_o)

   num_b := 0
   potencia := 1
   enquanto num_o > 0 faca
      dig_o := num_o % 10
      num_o := num_o div 10

      i := 0
      enquanto i < 3 faca
         dig_b := dig_o % 2
         num_b := num_b + dig_b * potencia
         potencia := potencia * 10
         dig_o := dig_o div 2
         i := i + 1
      fimenquanto
   fimenquanto
    limpatela

   escreva("O número binário correspondente é: ", num_b)

Fimalgoritmo