Algoritmo "Juros Simples e Juros Compostos"

Var
op, JT: inteiro
JC, JI, J: real

funcao potencia(x,y: real): real  //Sendo 'x' a base e 'y' o expoente.
       var res1, cont: real
       inicio
       
             res1 <-1
             cont <- 1

             enquanto (cont <= y) faca
                      res1 <- res1 * x
                      cont <- cont + 1
             fimenquanto

             retorne res1
fimfuncao

Inicio

      escreval("- - - - - JUROS SIMPLES E COMPOSTO  - - - -")
      escreval("")
      
      escreval("Qual operação deseja realizar?")
      escreval("1 - Juros Simples")
      escreval("2 - Juros Compostos")
      escreval("0 - Retornar ao menu principal")
      leia(op)
      limpatela

      enquanto ((op <= 2) e (op <> 0)) faca

               se (op = 1) entao
                  escreval("- - - - - - - JUROS SIMPLES - - - - - - - -")
                  escreval("")

                  escreva("Insira o Capital Inicial (em R$): ")
                  leia(JC)
                  escreva("Insira a Taxa de Juros (em %): ")
                  leia(JI)
                  escreva("Insira o Prazo (em meses): ")
                  leia(JT)

                  J <- JC * (JI/100) * JT

                  escreval("")
                  escreval ("O valor do juros total será de: R$", J:6:2)

                  op <- 0
               fimse

               se (op = 2) entao
                  escreval("- - - - - - - JUROS COMPOSTO  - - - - - - -")
                  escreval("")

                  escreva("Insira o Capital Inicial (em R$): ")
                  leia(JC)
                  escreva("Insira a Taxa de Juros (em %): ")
                  leia(JI)
                  escreva("Insira o Prazo (em meses): ")
                  leia(JT)

                  J <- JC * potencia((1+(JI/100)),JT)

                  escreval("")
                  escreval ("O valor do montante com juros no total será de: R$", J:6:2)

                  op <- 0
               fimse

      fimenquanto

Fimalgoritmo