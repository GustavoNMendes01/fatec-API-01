/*APRENDIZAGEM POR PROJETOS INTEGRADOS 2024-1

Tema do Semestre: Desenvolvimento de uma solução computacional simples, com ênfase em implementações de 
algoritmos e lógica de programação 

Título do Desafio: Desenvolvimento e Implementação de uma Calculadora Científica

Professor M2: Prof. Fabiano Sabha 
Professor P2: Prof. Lucas Nadalete

GRUPO: >> ALPHA CODE <<

    INTEGRANTES

    Scrum Master:
    PO:
    Dev: José Wesley de Jesus de Lima
    Dev:
    Dev:
    Dev: 
    Dev:
    Dev:
    Dev:

>>>>INSTRUÇÕES<<<<

PASSO 1
Para iniciar o algoritmo abra o terminal e execute o seguinte comando.
        >>npm install prompt-sync
        
        Serão instalados arquivos para que o Node possa permitir a interatividade.

PASSO 2
Declare a seguinte constante.
         >> const prompt = require('prompt-sync')({ sigint: true })

        Isso permite a interatividade por meio da função "prompt"

PASSO 3
Abra o terminal e execute o seguinte comando
        >> node api.ts 
        (Nome do arquivo a ser executado)
    
        Esse comando possibilita o uso da Calculadora Científica.
*/

const prompt = require('prompt-sync')({ sigint: true })
let op = Number(1)
let op1 = Number(1)
let s_n = ""
console.clear()

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
                console.log(`           Informe a operação que deseja realizar: `)
                op1 = Number(prompt(`           >> `));
                op = op1
                switch (op1) {
                    case 1:
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
                            console.log('           Qual operação deseja realizar?')
                            op1 = Number(prompt('           >> '))

                            switch (op1) {
                                case 1:
                                    do {
                                        console.clear()
                                        console.log(`------------\n>> Adição <<\n------------`)
                                        var num1 = Number(prompt("Insira o primeiro valor: "));
                                        var num2 = Number(prompt("Insira o segundo valor: "));

                                        var total = num1 + num2;
                                        console.log("----------------------------")
                                        console.log("A SOMA dos números é: " + total);
                                        console.log("----------------------------");
                                        console.log("Deseja calcular novamente?");
                                        console.log();
                                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
                                        s_n = String(prompt(">>  "));
                                    } while (s_n == "S" || s_n == "s");
                                    console.clear();
                                    break;

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

                            // CRIAR SWITCH PARA LER OP1 E EXECUTAR O ALGORITMO

                            switch (op1) {
                                case 1:
                                    console.clear()

                                    //IMPLEMENTAR O CÓDIGO AQUI


                                    console.log('Falta implementar algoritmo')
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
        -----------------------------
        >> Equação do Segundo Grau <<
        -----------------------------
        1 - Executar

        >> (0) - Retornar ao Menu Principal <<
    `)
                            console.log('          Qual operação deseja realizar?')
                            op1 = Number(prompt('           >> '))

                            // CRIAR SWITCH PARA LER OP1 E EXECUTAR O ALGORITMO

                            switch (op1) {
                                case 1:
                                    console.clear()

                                    //IMPLEMENTAR O CÓDIGO AQUI


                                    console.log('Falta implementar algoritmo')
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
                                    console.clear()
                                    do {
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
                                    console.clear()
                                    do {
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
                                    console.clear()
                                    do {
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

                            // CRIAR SWITCH PARA LER OP1 E EXECUTAR O ALGORITMO

                            switch (op1) {
                                case 1:
                                    console.clear()

                                    //IMPLEMENTAR O CÓDIGO AQUI


                                    console.log('Falta implementar algoritmo')
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

                            // CRIAR SWITCH PARA LER OP1 E EXECUTAR O ALGORITMO :) 

                            switch (op1) {
                                case 1:
                                    console.clear()

                                    //IMPLEMENTAR O CÓDIGO AQUI


                                    console.log('Falta implementar algoritmo')
                                    break;

                                case 2:
                                    console.clear()

                                    //IMPLEMENTAR O CÓDIGO AQUI
                                    console.log('Falta implementar algoritmo')
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


