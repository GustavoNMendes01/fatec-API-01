Algoritmo "B10XB2"

Var

   n, r, d: real
   resultado, S_N: caracter


Inicio

   repita

      escreva("Digite um número para converter de Decimal para Binário: ")
      leia(n)

      d <- n
      resultado <- ""

      repita

         se n % 2 = 1 entao

            resultado <- ("1") + resultado

         fimse

         se n % 2 = 0 entao

            resultado <- ("0") + resultado

         fimse

         r <- n/2

         n <- r

      ate n < 2

      se r >=1  entao

         resultado <- ("1") + resultado

      fimse

      escreval("A conversão do número decimal:", d)
      escreval("Corresponde ao número binário: ", resultado)
      escreval("-----------------------------")
      escreval("Deseja converter outro número?")
      escreval("Sim - Digite (S) / Não - Digite (N)")
      leia(S_N)

      se (S_N = "S") ou (S_N = "s") entao


         limpatela

      fimse

   ate (S_N = "N") ou (S_N = "n")

Fimalgoritmo