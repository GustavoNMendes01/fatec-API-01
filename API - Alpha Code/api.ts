/*APRENDIZAGEM POR PROJETOS INTEGRADOS 2024-1

Tema do Semestre: Desenvolvimento de uma solução computacional simples, com ênfase em implementações de 
algoritmos e lógica de programação.

Título do Desafio: Desenvolvimento e Implementação de uma Calculadora Científica.

Professor M2: Prof. Fabiano Sabha 
Professor P2: Prof. Lucas Nadalete

GRUPO: >> ALPHA CODE <<

    INTEGRANTES

    Scrum Master: Felipe Reis
    PO: Renan Cassiano
    Dev: José Wesley de Jesus de Lima
    Dev: Gustavo Mendes
    Dev: João Victor
    Dev: Victor
    Dev: Ian Neves
    Dev: Matheus Carvalho
    Dev: Rodrigo Blaque

>>>>INSTRUÇÕES<<<<

PASSO 1
Para iniciar o algoritmo abra o terminal e execute o seguinte comando.
        >>npm install prompt-sync
        
        Serão instalados arquivos para que o Node possa permitir a interatividade.

PASSO 2
No seu código declare a seguinte constante: 
         >> const prompt = require('prompt-sync')({ sigint: true })

        Isso permite a interatividade por meio da função "prompt"

PASSO 3
Abra o terminal e execute o seguinte comando
        >> node api.ts 
        (Nome do arquivo a ser executado)
    
        Esse comando possibilita o uso da Calculadora Científica.


        >>> PENDÊNCIAS - FALTA IMPLEMENTAR ALGORITMO. <<<

        >        4 - Conversão de Bases Numéricas. - B2XB8 / B8XB2 / B16XB2

*/

const prompt = require('prompt-sync')({ sigint: true })
let op = Number(1)  /* VARIAVEL PARA EXECUTAR A CÁLCULADORA */
let op1 = Number(1) /* VARIAVEL PARA EXECUTAR AS INTERAÇÕES E NAVEGAÇÃO ENTRE AS OPERAÇÕES MATEMÁTICASS */
let s_n = ""        /* VARIAVEL PARA REPETIR AS OPERAÇÕES  */
console.clear()

/* INICIO DA CÁLCULADORA CIENTIFICA - UTILIZADO A FUNÇÃO DOWHILE CORRESPONDENTE A VARIAVEL (OP)*/

do {
    console.log(`
        -------------------
        >>>> ALPHA CODE<<<<                                                          
        -------------------

        1 - EXECUTAR
        0 - ENCERRAR
        `)
    console.log('       Informe a operação que deseja realizar: ')
    op = Number(prompt('           >> '));

    /* MENU INTERATIVO - UTILIZADO A FUNÇÃO DOWHILE CORRESPONDENTE A VARIAVEL (OP)*/

    switch (op) {
        case 1:
            console.clear()
            while (op !== 0) {
                console.log(`
        ----------------------------------------------------------------
                          >> Calculadora Científica <<
        ----------------------------------------------------------------
                              * Menu Principal *

        1 - Funções Básicas (Adição, Subtração, Multiplicação, Divisão). 
        2 - Cálculo Fatorial.
        3 - Equação do Segundo Grau.
        4 - Conversão de Bases Numéricas.
        5 - Concatenação de Duas Strings. 
        6 - Juros Simples e Juros Composto.

        >>   (0) - Encerrar   <<
`)

                /* A PARTIR DO MENU USA-SE A VARIAVEL (OP1) PARA IDENTIFICAR O (SWITCH) POR EXEMPLO - 1 - FUNÇÕES BÁSICAS*/

                console.log(`           Informe a operação que deseja realizar: `)
                op1 = Number(prompt(`           >> `));
                op = op1
                switch (op1) {
                    case 1:                          /* <<<< FUNÇÕES BÁSICAS */
                        console.clear();
                        while (op1 !== 0) {
                            console.log(`
        ---------------------
        >> Funções Básicas <<
        ---------------------
        1 - Adição
        2 - Subtração
        3 - Multiplicação
        4 - Divisão

        >> (0) - Retornar ao Menu Principal <<
        `);

                            /* AQUI NESTE PONTO É USADO UM (SWITCH) DE DENTRO DE OUTRO (SWITCH)*/

                            console.log('           Qual operação deseja realizar?')
                            op1 = Number(prompt('           >> '))

                            switch (op1) {
                                case 1:                             /* SEGUNDO SWITCH PARA ABRIR OPERAÇÃO - ACOMPANHADO DA FUNÇÃO DOWHILE QUE PERMITE REPETIR  A OPERAÇÃO */
                                    do {
                                        console.clear()
                                        console.log(`------------\n>> Adição <<\n------------`)
                                        var num1 = Number(prompt("Insira o primeiro valor: "));
                                        var num2 = Number(prompt("Insira o segundo valor: "));

                                        var total = num1 + num2;
                                        console.log("----------------------------")
                                        console.log("A SOMA dos números é: " + total);
                                        console.log("----------------------------");                                                                            // ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
                                        console.log("Deseja calcular novamente?");                                                                      //       ESTA É A ESTRUTURA PARA REPETIR O MESMO CÁLCULO
                                        console.log();                                                                                                                   //             do{ console.clear() 
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");             //        >> seu código <<   }    
                                        s_n = String(prompt(">>  "));                                                                                      //            while (s_n == "S" || s_n == "s")       
                                    } while (s_n == "S" || s_n == "s");                                                                                  //                 console.clear()
                                    console.clear();                                                                                                            //                 break;
                                    break;                                                                                                                        // ............................................................................................................................................

                                case 2:

                                    do {
                                        console.clear()
                                        console.log(`---------------\n>> Subtração <<\n---------------`)
                                        var num1 = Number(prompt("Insira o primeiro valor: "));
                                        var num2 = Number(prompt("Insira o segundo valor: "));

                                        var total = num1 - num2;
                                        console.log("----------------------------")
                                        console.log("A SUBTRAÇÃO dos números é: " + total);
                                        console.log("----------------------------");
                                        console.log("Deseja calcular novamente?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear()
                                    break;

                                case 3:
                                    do {
                                        console.clear()
                                        console.log(`-------------------\n>> Multiplicação <<\n-------------------`)
                                        var num1 = Number(prompt("Insira o primeiro valor: "));
                                        var num2 = Number(prompt("Insira o segundo valor: "));
                                        console.log("----------------------------")
                                        var total = num1 * num2;

                                        console.log("A MULTIPLICAÇÃO dos números é: " + total);
                                        console.log("----------------------------");
                                        console.log("Deseja calcular novamente?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear()
                                    break;

                                case 4:
                                    do {
                                        console.clear()
                                        console.log(`-------------\n>> Divisão <<\n-------------`)
                                        var num1 = Number(prompt("Insira o primeiro valor: "));
                                        var num2 = Number(prompt("Insira o segundo valor: "));

                                        var total = num1 / num2;
                                        console.log("----------------------------")
                                        console.log("A DIVISÃO dos números é: " + total);
                                        console.log("----------------------------");
                                        console.log("Deseja calcular novamente?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear()
                                    break;

                                case 0:
                                    console.clear()
                                    break;

                                default:
                                    console.clear()
                                    console.log('>>>>> Inválido <<<<<');
                                    console.log('Tente novamente...')
                                    break;

                            }
                        }
                    case 2:
                        console.clear();
                        while (op1 !== 0) {
                            console.log(`
        ----------------------
        >> Cálculo Fatorial <<
        ----------------------
        1 - Executar

        >> (0) - Retornar ao Menu Principal <<
        `)
                            console.log('           Qual operação deseja realizar?')
                            op1 = Number(prompt('           >> '))

                            switch (op1) {
                                case 1:
                                    do {
                                        console.clear()
                                        console.log(`----------------------\n>> Cálculo Fatorial <<\n----------------------`)
                                        var numero = Number(prompt("Insira um número: "));

                                        if (numero <= 0) {
                                            console.log("Insira um número maior que zero.");
                                        } else {
                                            var resultadof = Number(1);
                                            for (var ifat = Number(1); ifat <= numero; ifat++) {
                                                resultadof *= ifat;
                                            }
                                            console.log("----------------------------")
                                            console.log("O fatorial é " + resultadof);
                                        }
                                        console.log("----------------------------");
                                        console.log("Deseja calcular novamente?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear()
                                    break;

                                case 0:
                                    console.clear()
                                    break;

                                default:
                                    console.clear()
                                    console.log('>>>>> Inválido <<<<<');
                                    console.log('Tente novamente...')
                                    break;
                            }
                        }
                        console.clear()
                        break;

                    case 3:
                        console.clear();
                        while (op1 !== 0) {
                            console.log(`
        ----------------------------
        >> Equação do Segundo Grau <<
        ----------------------------
        1 - Executar

        >> (0) - Retornar ao Menu Principal <<
    `)
                            console.log('          Qual operação deseja realizar?')
                            op1 = Number(prompt('           >> '))

                            // CRIAR SWITCH PARA LER OP1 E EXECUTAR O ALGORITMO - VIDE EXEMPLOS NO INICIO

                            switch (op1) {
                                case 1:
                                    console.clear()

                                    do {
                                        console.clear()
                                        console.log(`----------------------------\n>> Equação do Segundo Grau <<\n----------------------------`)
                                        console.log('Digite os coeficientes da equação quadrática (ax² + bx + c = 0):');

                                        var eq2_A = Number(prompt("Insira o valor de A: "));
                                        var eq2_B = Number(prompt("Insira o valor de B: "));
                                        var eq2_C = Number(prompt("Insira o valor de C: "));

                                        const delta = eq2_B * eq2_B - 4 * eq2_A * eq2_C;

                                        var x1 = Number()
                                        var x2 = Number()

                                        switch (true) {

                                            case (delta > 0):
                                                x1 = (-eq2_B + Math.sqrt(delta)) / (2 * eq2_A);
                                                x2 = (-eq2_B - Math.sqrt(delta)) / (2 * eq2_A);

                                                console.log("----------------------------")
                                                console.log(`O Valor de X1 é igual a ${x1.toFixed(2)}\nO Valor de X2 é igual a ${x2.toFixed(2)}`);
                                                console.log("----------------------------");                                                                            // ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
                                                console.log("Deseja calcular novamente?");                                                                      //       ESTA É A ESTRUTURA PARA REPETIR O MESMO CÁLCULO
                                                console.log();                                                                                                                   //             do{ console.clear() 
                                                console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");             //        >> seu código <<   }    
                                                s_n = String(prompt(">>  "));
                                                break;


                                            case (delta === 0):
                                                x1 = -eq2_B / (2 * eq2_A);

                                                console.log("----------------------------")
                                                console.log(`O Valor de X1 é igual a ${x1.toFixed(2)}.`);
                                                console.log("----------------------------");                                                                            // ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
                                                console.log("Deseja calcular novamente?");

                                                console.log();                                                                                                                   //             do{ console.clear() 
                                                console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");             //        >> seu código <<   }    
                                                s_n = String(prompt(">>  "));
                                                break;


                                            default:
                                                console.log("----------------------------")
                                                console.log("A equação não possui raízes reais.");
                                                console.log("----------------------------");                                                                            // ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
                                                console.log("Deseja calcular novamente?");

                                                console.log();                                                                                                                   //             do{ console.clear() 
                                                console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");             //        >> seu código <<   }    
                                                s_n = String(prompt(">>  "));
                                                break;
                                        }

                                    } while (s_n == "S" || s_n == "s");                                                                                  //                 console.clear()
                                    console.clear();                                                                                                            //                 break;
                                    break;

                                case 0:
                                    console.clear()
                                    break;

                                default:
                                    console.clear()
                                    console.log('>>>>> Inválido <<<<<');
                                    console.log('Tente novamente...')
                                    break;
                            }
                        }
                        console.clear()

                        break;

                    case 4:
                        console.clear()
                        while (op1 !== 0) {
                            console.log(`
        ----------------------------------
        >> Conversão de Bases Númericas <<
        ----------------------------------
        1 - B10XB2 - Decimal para Binário.
        2 - B2XB10 - Binário para Decimal.
        3 - B2XB8 - Binário para Octal. ***
        4 - B8XB2 - Octal para Binário. ***
        5 - B2XB16 - Binário para Hexadecimal.
        6 - B16XB2 - Hexadecimal para Binário.***
        
        >>   (0) - Retornar ao Menu Principal <<
        `)

                            console.log('           Qual operação deseja realizar?')
                            op1 = Number(prompt('           >> '))

                            switch (op1) {
                                case 1:
                                    do {
                                        console.clear();
                                        console.log(`>> Conversão de Decimal para Binário - B10XB2 <<`);
                                        console.log("---------------------------------------------------------");
                                        let n = Number(prompt("Digite um número para converter de Decimal para Binário: "));
                                        let dec = Number(n);
                                        let resultado = String();
                                        while (n > 0) {
                                            if (n % 2 === 1) {
                                                resultado = ('1') + resultado;
                                            }
                                            else {
                                                resultado = ('0') + resultado;
                                            }
                                            n = Math.floor(n / 2);
                                        }
                                        console.log(`A conversão do número decimal: ${dec}\nCorresponde ao número binário: ${resultado} `);

                                        console.log("---------------------------------------");
                                        console.log("Deseja realizar outra conversão?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear();
                                    break;

                                case 2:
                                    do {
                                        console.clear();
                                        console.log(`>> Conversão de Binário para Decimal - B2XB10 <<`);
                                        console.log(`*** Lembre-se que um número binário é composto apenas por (0 e 1).***`);
                                        console.log("--------------------------------------------------------------------------------");
                                        let b = Number(prompt("Digite um número para converter de Binário para Decimal: "));
                                        let b1 = (b);
                                        let base = (1);
                                        let x = (0);
                                        let deci = Number();

                                        while (b1 > base) {

                                            let bin = Math.floor(b1 / base) % 10

                                            if (bin >= 1) {
                                                deci = deci + (2 ** x)
                                            };

                                            x = x + 1
                                            base = base * 10
                                        }

                                        console.log(`A conversão do número binário: ${b1}\nCorresponde ao número decimal: ${deci}`);
                                        console.log("---------------------------------------");
                                        console.log("Deseja realizar outra conversão?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear();
                                    break;

                                case 3:

                                    do {
                                        console.clear()
                                        console.log('Falta implementar algoritmo');

                                        //IMPLEMENTAR O CÓDIGO AQUI

                                        console.log(`----------------------------------`)
                                        console.log("Deseja realizar outra conversão?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear();

                                    break;

                                case 4:
                                    do {
                                        console.clear()
                                        console.log('Falta implementar algoritmo');

                                        //IMPLEMENTAR O CÓDIGO AQUI

                                        console.log(`----------------------------------`)
                                        console.log("Deseja realizar outra conversão?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear();
                                    break;

                                case 5:
                                    do {
                                        console.clear()
                                        console.log(`>> Conversão de Binário para Hexadecimal - B2XB16 <<`);
                                        console.log(`*** Lembre-se que um número binário é composto apenas por (0 e 1).***`);
                                        console.log("--------------------------------------------------------------------------");
                                        let bin1 = Number(prompt(`Digite um número para converter de binário para hexadecimal: `));
                                        let binario = (bin1);
                                        let bs = 1
                                        let resultadoh = String("");
                                        let hexad = Number();
                                        let hexa = Number();
                                        let y = Number();

                                        while (bs <= binario) {

                                            for (y = 0; y < 4; y++) {

                                                hexa = Math.floor(binario / bs) % 10

                                                if (hexa >= 1) {
                                                    hexad = hexad + (1 * (2 ** y))
                                                };

                                                bs = bs * 10
                                            }

                                            if (y = 4) {
                                                switch (hexad) {
                                                    case 1:
                                                        resultadoh = ("1") + resultadoh;
                                                        break;
                                                    case 2:
                                                        resultadoh = ("2") + resultadoh;
                                                        break;
                                                    case 3:
                                                        resultadoh = ("3") + resultadoh;
                                                        break;
                                                    case 4:
                                                        resultadoh = ("4") + resultadoh;
                                                        break;
                                                    case 5:
                                                        resultadoh = ("5") + resultadoh;
                                                        break;
                                                    case 6:
                                                        resultadoh = ("6") + resultadoh;
                                                        break;
                                                    case 7:
                                                        resultadoh = ("7") + resultadoh;
                                                        break;
                                                    case 8:
                                                        resultadoh = ("8") + resultadoh;
                                                        break;
                                                    case 9:
                                                        resultadoh = ("9") + resultadoh;
                                                        break;
                                                    case 10:
                                                        resultadoh = ("A") + resultadoh;
                                                        break;
                                                    case 11:
                                                        resultadoh = ("B") + resultadoh;
                                                        break;
                                                    case 12:
                                                        resultadoh = ("C") + resultadoh;
                                                        break;
                                                    case 13:
                                                        resultadoh = ("D") + resultadoh;
                                                        break;
                                                    case 14:
                                                        resultadoh = ("E") + resultadoh;
                                                        break;
                                                    case 15:
                                                        resultadoh = ("F") + resultadoh;
                                                        break;
                                                }
                                                y = 0
                                                hexad = 0
                                                hexa = 0
                                            }
                                        }
                                        console.log(`O valor em hexadecimal para o número binário: ${binario}\n Corresponde a: ${resultadoh}-h`);
                                        console.log("---------------------------------------");
                                        console.log("Deseja realizar outra conversão?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear()
                                    break;

                                case 6:
                                    do {
                                        console.clear()
                                        console.log('Falta implementar algoritmo');

                                        //IMPLEMENTAR O CÓDIGO AQUI

                                        console.log(`----------------------------------`)
                                        console.log("Deseja realizar outra conversão?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear();
                                    break;

                                case 0:
                                    console.clear()
                                    break;

                                default:
                                    console.clear()
                                    console.log('>>>>> Inválido <<<<<');
                                    console.log('Tente novamente...')
                                    break;
                            }
                        }
                        console.clear()

                        break;

                    case 5:
                        function concatena(str1 = String(), str2 = String()){
                            let result = '';

                            for (let i = 0; i < str1.length; i++) {
                                result += str1[i];
                            }

                            for (let i = 0; i < str2.length; i++) {
                                result += str2[i];
                            }

                            return result;
                        }

                        console.clear();
                        while (op1 !== 0) {
                            console.log(`
        ---------------------------------
        >> Concatenação de Duas Strings <<
        ---------------------------------
        1 - Executar

        >> (0) - Retornar ao Menu Principal <<
`)
                            console.log('           Qual operação deseja realizar?')
                            op1 = Number(prompt('           >> '))

                            // CRIAR SWITCH PARA LER OP1 E EXECUTAR O ALGORITMO - VIDE EXEMPLOS NO INICIO

                            switch (op1) {
                                case 1:
                                    do {
                                        console.clear()
                                        console.log(`----------------------------------\n>> Concatenação de Duas Strings <<\n----------------------------------`)
                                        
                                        const string1 = prompt("Digite a 1ª String: ");
                                        const string2 = prompt("Digite a 2ª String: ");

                                        console.log(`----------------------------------`)

                                        if (string1 !== null && string2 !== null) {
                                            const aux = concatena(string1, string2);
                                            console.log(`>> ${aux}`); 
                                            console.log(`----------------------------------`)

                                        } else {
                                            console.log("Entradas inválidas.");
                                        }

                                        console.log("Deseja realizar outra concatenação?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));

                                    } while (s_n == "S" || s_n == "s");

                                    console.clear()
                                    break;

                                case 0:
                                    console.clear()
                                    break;

                                default:
                                    console.clear()
                                    console.log('>>>>> Inválido <<<<<');
                                    console.log('Tente novamente...')
                                    break;
                            }
                        }

                        break;

                    case 6:

                        function potencia(x = Number(), y = Number()) {
                            var res = 1, i = 1

                            do {
                                res = res * x
                                i += i
                            } while (i <= y);

                            return res
                        }

                        console.clear();
                        while (op1 !== 0) {
                            console.log(`
        ------------------------------------
        >> Juros Simples e Juros Composto <<
        ------------------------------------
        1 - Juros Simples
        2 - Juros Composto
    
        >> (0) - Retornar ao Menu Principal <<
    `)
                            console.log('           Qual operação deseja realizar?')
                            op1 = Number(prompt('           >> '))

                            // CRIAR SWITCH PARA LER OP1 E EXECUTAR O ALGORITMO :)  - VIDE EXEMPLOS NO INICIO

                            switch (op1) {
                                case 1:
                                    do {
                                        console.clear()
                                        console.log(`-------------------\n>> Juros Simples <<\n-------------------`)
                                        var capI = Number(prompt("Insira o Capital Inicial:"))
                                        var taxa = Number(prompt("Insira a Taxa de Juros (em %):"))
                                        var temp = Number(prompt("Insira o Prazo (em meses):"))

                                        var juroVal = capI * (taxa / 100) * temp

                                        console.log(`----------------------------------`)
                                        console.log(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`)
                                        console.log(`----------------------------------`)
                                        console.log("Deseja realizar outra operação?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear()

                                    break;

                                case 2:
                                    do {
                                        console.clear()
                                        console.log(`---------------------\n>> Juros Compostos <<\n---------------------`)

                                        var capI = Number(prompt("Insira o Capital Inicial:"))
                                        var taxa = Number(prompt("Insira a Taxa de Juros (em %):"))
                                        var temp = Number(prompt("Insira o Prazo (em meses):"))

                                        var juroVal = capI * potencia((1 + (taxa / 100)), temp)

                                        console.log(`----------------------------------`)
                                        console.log(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`)
                                        console.log(`----------------------------------`)
                                        console.log("Deseja realizar outra operação?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");

                                    console.clear()

                                    break;

                                case 0:
                                    console.clear()
                                    break;

                                default:
                                    console.clear()
                                    console.log('>>>>> Inválido <<<<<');
                                    console.log('Tente novamente...')
                                    break;
                            }
                        }
                        break;

                    case 0:
                        setTimeout(() => {
                            console.log('>>> ALPHA CODE<<<')
                            console.log("Saindo...")
                        }, 1000);
                        console.clear()
                        break;

                    default:
                        console.clear()
                        console.log('>>>>> Inválido <<<<<');
                        console.log('Tente novamente...')
                        break;
                }
            }
            break;

        case 0:
            setTimeout(() => {
                console.log(">>> ALPHA CODE <<<.")
                console.log('Saindo...')

            }, 1000);
            console.clear()
            break;

        default:
            console.clear()
            console.log('>>>>> Inválido <<<<<');
            console.log('Tente novamente...')
            break;
    }

} while (op !== 0);
