Algoritmo "B2XB10"

Var

   b, dec: Real
   bin, base, x: inteiro
   S_N: caracter



Inicio

   repita

      escreval("Digite um número para converter de Binário para Decimal: ")
      escreval("Lembre-se que um número binário é composto apenas por (0 e 1).")
      escreval("***Limite de 10 digitos***")
      leia(b)

      base <- 1
      x <- 0

      repita

         bin <- (b/base) % 10

         se bin >= 1 entao

            dec <- dec + (2^x)

         fimse

         x <- x + 1

         base <- base * 10

      ate base > b

      escreval("A conversão do número binário: ", b)
      escreval("Corresponde ao número decimal: ", dec)
      escreval("-----------------------------")
      escreval("Deseja converter outro número?")
      escreval("Sim - Digite (S) / Não - Digite (N)")
      leia(S_N)

      se (S_N = "S") ou (S_N = "s") entao

         bin <- 0
         dec <- 0

         limpatela

      fimse

   ate (S_N = "N") ou (S_N = "n")



Fimalgoritmo