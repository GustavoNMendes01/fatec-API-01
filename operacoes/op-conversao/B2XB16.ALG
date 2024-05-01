Algoritmo "B2XB16 5"

Var

   x: inteiro
   hexa, hexad, base, b: real
   resultado, S_N: caracter


Inicio

   repita

      escreval("Digite um número para converter de binário para hexadecimal. ")
      escreval("Lembre-se que um número bínario é composto apenas por (0 e 1).")
      escreval("***Limite de 10 digitos***")
      escreval("Binario: ")
      leia(b)

      base <- 1
      x <- 0
      resultado <- ""

      enquanto base <= b faca

         repita

            hexa <- (b/base) % 10

            se hexa >=1 entao

               hexad <- hexad + (1 * (2^x))

            fimse

            x <- x + 1

            base <- base * 10

         ate x = 4

         se x = 4 entao

            escolha hexad

            caso 1
               resultado <- "1" + resultado

            caso 2
               resultado <- "2" + resultado

            caso 3
               resultado <- "3" + resultado

            caso 4
               resultado <- "4" + resultado

            caso 5
               resultado <- "5" + resultado

            caso 6
               resultado <- "6" + resultado

            caso 7
               resultado <- "7" + resultado

            caso 8
               resultado <- "8" + resultado

            caso 9
               resultado <- "9" + resultado

            caso 10
               resultado <- "A" + resultado

            caso 11
               resultado <- "B" + resultado

            caso 12
               resultado <- "C" + resultado

            caso 13
               resultado <- "D" + resultado

            caso 14
               resultado <- "E" + resultado

            caso 15
               resultado <- "F" + resultado

            fimescolha

            x <- 0
            hexad <- 0
            hexa <- 0

         fimse

      fimenquanto

      escreval("O valor em hexadecimal para o número binário:", b," é: ", resultado, " - h.")

      escreval("-----------------------------")
      escreval("Deseja converter outro número?")
      escreval("Sim - Digite (S) / Não - Digite (N)")
      leia(S_N)

      se (S_N = "S") ou (S_N = "s") entao

         limpatela

      fimse

   ate (S_N = "N") ou (S_N = "n")


Fimalgoritmo
