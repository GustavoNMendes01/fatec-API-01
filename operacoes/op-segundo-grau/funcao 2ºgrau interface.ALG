Algoritmo "Equação 2grau"
Var
// Seção de Declarações das variáveis
  coef1, coef2, coef3, delta, x1, x2: real
  continuar: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  continuar := "n"

  enquanto continuar = "n" faça
    escreval ("              ax² + bx + c = 0" )
    escreval (" a: equivale ao primeiro coeficiente, ")
    escreval (" b: equivale ao segundo coeficiente, ")
    escreval (" c: equivale ao terceiro coeficiente, ")
    escreval
    escreva ("Informe o primeiro coeficiente: ")
    leia(coef1)
    escreva ("Informe o segundo coeficiente: ")
    leia(coef2)
    escreva ("Informe o terceiro coeficiente: ")
    leia(coef3)

    escreval ("Sua função é: ", coef1, "x² + ", coef2, "x + ", coef3, " = 0")
    escreval
    escreva ("Deseja continuar? (s para sim ou n para nao): ") // caso queira corrigir o valor informado
    leia(continuar)
    escreval
 fimenquanto








FimAlgoritmo
