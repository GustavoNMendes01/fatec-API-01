Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/04/2024
Var
// Seção de Declarações das variáveis 
 numero, primeiroNum, fim, meio, raiz: real
    erro: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
        // Solicita o número do usuário
    escreva("Digite um número para calcular a raiz quadrada: ")
    leia(numero)

    // Define os limites da busca binária
    primeiroNum <- 0
    fim <- numero
    erro <- 0.0001

    // Loop para encontrar a raiz quadrada usando busca binária
    enquanto (fim - primeiroNum) > erro faça
        // Calcula o ponto médio
        meio <- (primeiroNum + fim) / 2

        // Verifica em qual metade está a raiz e atualiza os limites
        se meio * meio > numero então
            fim <- meio
        senao
            primeiroNum <- meio
        fimse
    fimenquanto

    // O ponto médio é a aproximação da raiz quadrada
    raiz <- (primeiroNum + fim) / 2

    // Mostra o resultado
escreva("A raiz quadrada de ", numero, " é aproximadamente: ", raiz:4:3)


Fimalgoritmo