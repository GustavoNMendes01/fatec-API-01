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
*/

const prompt = require('prompt-sync')({ sigint: true })
let op = Number(1)  /* VARIAVEL PARA EXECUTAR A CÁLCULADORA */
let op1 = Number(1) /* VARIAVEL PARA EXECUTAR AS INTERAÇÕES E NAVEGAÇÃO ENTRE AS OPERAÇÕES MATEMÁTICASS */
let s_n = ""        /* VARIAVEL PARA REPETIR AS OPERAÇÕES  */
console.clear();

/* MENU INTERATIVO - UTILIZADO A FUNÇÃO DOWHILE CORRESPONDENTE A VARIAVEL (OP)*/

do {
    console.log(`
            ----------------------------------------------------------------
                                  >>> ALPHA CODE<<<
            ----------------------------------------------------------------
                                Calculadora Científica 
            ----------------------------------------------------------------
                                  * Menu Principal *
    
            1 - Funções Básicas (Adição, Subtração, Multiplicação, Divisão). 
            2 - Cálculo Fatorial.
            3 - Equação do Segundo Grau.
            4 - Conversão de Bases Numéricas.
            5 - Concatenação de Duas Strings. 
            6 - Juros Simples e Juros Composto.
    
            >>   (0) - Encerrar   <<
    

    `);

    /* A PARTIR DO MENU USA-SE A VARIAVEL (OP1) PARA IDENTIFICAR O (SWITCH) POR EXEMPLO - 1 - FUNÇÕES BÁSICAS*/

    console.log(`           Informe a operação que deseja realizar: `);
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

                console.log('           Qual operação deseja realizar?');
                op1 = Number(prompt('           >> '));
                switch (op1) {
                    case 1:                             /* SEGUNDO SWITCH PARA ABRIR OPERAÇÃO - ACOMPANHADO DA FUNÇÃO DOWHILE QUE PERMITE REPETIR  A OPERAÇÃO */
                        do {
                            console.clear();
                            console.log(`------------\n>> Adição <<\n------------`);
                            var num1 = Number(prompt("Insira o primeiro valor: "));
                            var num2 = Number(prompt("Insira o segundo valor: "));

                            var total = num1 + num2;
                            console.log("----------------------------");
                            console.log("A Soma dos números é: " + total);
                            console.log("----------------------------");                                                                            // ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
                            console.log("Deseja calcular novamente?");                                                                      //       ESTA É A ESTRUTURA PARA REPETIR O MESMO CÁLCULO
                            console.log();                                                                                                                   //             do{ console.clear() 
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");             //        >> seu código <<   }    
                            s_n = String(prompt(">>  "));                                                                                      //            while (s_n == "S" || s_n == "s")       
                        } while (s_n == "S" || s_n == "s");                                                                                  //                 console.clear()
                        console.clear();                                                                                                            //                 break;
                        break;                                                                                                                        // ............................................................................................................................................

                    case 2:
                        do {
                            console.clear();
                            console.log(`---------------\n>> Subtração <<\n---------------`);
                            var num1 = Number(prompt("Insira o primeiro valor: "));
                            var num2 = Number(prompt("Insira o segundo valor: "));

                            var total = num1 - num2;
                            console.log("----------------------------");
                            console.log("A Subtração dos números é: " + total);
                            console.log("----------------------------");
                            console.log("Deseja calcular novamente?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;

                    case 3:
                        do {
                            console.clear();
                            console.log(`-------------------\n>> Multiplicação <<\n-------------------`);
                            var num1 = Number(prompt("Insira o primeiro valor: "));
                            var num2 = Number(prompt("Insira o segundo valor: "));
                            console.log("----------------------------");
                            var total = num1 * num2;

                            console.log("A Multiplicação dos números é: " + total);
                            console.log("----------------------------");
                            console.log("Deseja calcular novamente?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;

                    case 4:
                        do {
                            console.clear();
                            console.log(`-------------\n>> Divisão <<\n-------------`);
                            var num1 = Number(prompt("Insira o primeiro valor: "));
                            var num2 = Number(prompt("Insira o segundo valor: "));

                            var total = num1 / num2;
                            console.log("----------------------------");
                            console.log("A Divisão dos números é: " + total);
                            console.log("----------------------------");
                            console.log("Deseja calcular novamente?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;

                    case 0:
                        console.clear();
                        break;

                    default:
                        console.clear();
                        console.log('>>>>> Inválido <<<<<');
                        console.log('Tente novamente...');
                        break;
                }
            }
            break;

        case 2:
            do {
                console.clear();
                console.log(`----------------------\n>> Cálculo Fatorial <<\n----------------------`);
                var numero = Number(prompt("Insira um número: "));

                if (numero <= 0) {
                    console.log("Insira um número maior que zero.");
                } else if (numero > 21) {
                    console.log("Não é possível calcular - Minímo Fatorial (21!)");
                } else {
                    var resultadof = Number(1);
                    for (var ifat = Number(1); ifat <= numero; ifat++) {
                        resultadof *= ifat;
                    }
                    console.log("----------------------------------");
                    console.log("O resultado fatorial é: " + resultadof);
                }
                console.log("----------------------------------");
                console.log("Deseja calcular novamente?");
                console.log();
                console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                s_n = String(prompt(">>  "));
            } while (s_n == "S" || s_n == "s");
            console.clear();
            break;

        case 3:
            do {
                console.clear();
                console.log(`-----------------------------\n>> Equação do Segundo Grau <<\n-----------------------------`);
                console.log('Digite os coeficientes da equação quadrática (ax² + bx + c = 0):');

                var eq2_A = Number(prompt("Insira o valor de A: "));
                var eq2_B = Number(prompt("Insira o valor de B: "));
                var eq2_C = Number(prompt("Insira o valor de C: "));

                const delta = eq2_B * eq2_B - 4 * eq2_A * eq2_C;

                var x1 = Number();
                var x2 = Number();

                switch (true) {

                    case (delta > 0):
                        x1 = (-eq2_B + Math.sqrt(delta)) / (2 * eq2_A);
                        x2 = (-eq2_B - Math.sqrt(delta)) / (2 * eq2_A);

                        console.log("----------------------------");
                        console.log(`O Valor de X1 é igual a ${x1.toFixed(2)}\nO Valor de X2 é igual a ${x2.toFixed(2)}`);
                        console.log("----------------------------");
                        console.log("Deseja calcular novamente?");
                        console.log();
                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                        s_n = String(prompt(">>  "));
                        break;

                    case (delta === 0):
                        x1 = -eq2_B / (2 * eq2_A);
                        console.log("----------------------------");
                        console.log(`O Valor de X1 é igual a ${x1.toFixed(2)}.`);
                        console.log("----------------------------");
                        console.log("Deseja calcular novamente?");

                        console.log();
                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                        s_n = String(prompt(">>  "));
                        break;

                    default:
                        console.log("----------------------------");
                        console.log("A equação não possui raízes reais.");
                        console.log("----------------------------");
                        console.log("Deseja calcular novamente?");

                        console.log();
                        console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                        s_n = String(prompt(">>  "));
                        break;
                }
            } while (s_n == "S" || s_n == "s");
            console.clear();
            break;

        case 4:
            console.clear();
            while (op1 !== 0) {
                console.log(`
        ----------------------------------
        >> Conversão de Bases Númericas <<
        ----------------------------------
        1 - B10XB2 - Decimal para Binário.
        2 - B2XB10 - Binário para Decimal.
        3 - B2XB8 - Binário para Octal. 
        4 - B8XB2 - Octal para Binário.
        5 - B2XB16 - Binário para Hexadecimal.
        6 - B16XB2 - Hexadecimal para Binário.
            
        >>   (0) - Retornar ao Menu Principal <<
            `)

                console.log('           Qual operação deseja realizar?');
                op1 = Number(prompt('           >> '));

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
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;

                    case 2:
                        do {
                            console.clear();
                            console.log(`>> Conversão de Binário para Decimal - B2XB10 <<`);
                            console.log(`*** Lembre-se que um número Binário é composto apenas por (0 e 1).***`);
                            console.log("--------------------------------------------------------------------------------");
                            let b = Number(prompt("Digite um número para converter de Binário para Decimal: "));
                            let b1 = (b);
                            let base = (1);
                            let x = (0);
                            let deci = Number();
                            let n_bin = Number()

                            for (let i = 0; i < String(b).length; i++) {

                                if ((Number(String(b)[i]) > 1)) {
                                    n_bin = Number(1)
                                }
                            }

                            switch (n_bin) {
                                case 1:
                                    console.log(`>> ${b} não é um número binário.`);
                                    break;

                                default:
                                    while (b1 >= base) {

                                        let bin = Math.floor(b1 / base) % 10

                                        if (bin >= 1) {
                                            deci = deci + (2 ** x)
                                        };

                                        x = x + 1
                                        base = base * 10
                                    }
                                    console.log(`A conversão do número Binário: ${b1}\nCorresponde ao número Decimal: ${deci}`);
                            }
                            console.log("---------------------------------------");
                            console.log("Deseja realizar outra conversão?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;

                    case 3:
                        function splitNumberIntoDigits(number) {
                            return number
                                .toString()
                                .split("")
                                .map(Number);
                        }

                        function binarioParaOct(binario = String()) {
                            let octal = 0;
                            let length = binario.length;

                            for (let i = 0; i < length; i++) {
                                let digito = parseInt(binario[i]);

                                if (digito !== 0 && digito !== 1) {
                                    throw new Error("Entrada inválida: o número deve ser binário.");
                                }

                                let potencia = length - i - 1;

                                octal += digito * Math.pow(2, potencia);
                            }
                            return octal;
                        }

                        do {
                            console.clear();
                            console.log(`>> Conversão de Binário para Octal - B2XB8 <<`);
                            console.log(`*** Lembre-se que um número Binário é composto apenas por (0 e 1).***`);
                            console.log("--------------------------------------------------------------------------------");
                            let nBin = Number(prompt("Digite um número para converter de Binário para Octal: "));
                            var octNumArray = new Array
                            let n_bin = Number()

                            const digits = splitNumberIntoDigits(nBin).reverse();

                            for (let i = 0; i < String(nBin).length; i++) {

                                if ((Number(String(nBin)[i]) > 1)) {
                                    n_bin = Number(1)
                                }
                            }

                            switch (n_bin) {
                                case 1:
                                    console.log(`>> ${nBin} não é um número binário.`);
                                    break;

                                default:
                                    var digLength = (digits.length % 3 > 0)
                                        ? (Math.floor(digits.length / 3) + 1)
                                        : (digits.length / 3)
                                        ;

                                    for (var contOct = 0; contOct < digLength; contOct++) {
                                        var trio = new Array
                                        var localI = contOct * 3

                                        trio[contOct] = [((digits[localI + 2] != undefined) ? digits[localI + 2] : ''), ((digits[localI + 1] != undefined) ? digits[localI + 1] : ''), (digits[localI])]

                                        //console.log(binarioParaOct(String(trio[contOct].join(''))))
                                        octNumArray[contOct] = binarioParaOct(String(trio[contOct].join('')))
                                    }

                                    var octal = Number(octNumArray.reverse().join(''))

                                    console.log(`A conversão do número Binário: ${nBin}\nCorresponde ao número Octal: ${octal}`);
                            }
                            console.log("---------------------------------------");
                            console.log("Deseja realizar outra conversão?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;

                    case 4:
                        function splitNumberIntoDigits1(number) {
                            return number
                                .toString()
                                .split("")
                                .map(Number);
                        }

                        function OctParaBin(n = Number()) {
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
                            if ((Number(resultado) < 100) && (Number(resultado) > 9)) {
                                resultado = "0" + resultado
                            }
                            if (Number(resultado) < 9) {
                                resultado = "00" + resultado
                            }
                            return resultado;
                        }

                        do {
                            console.clear();
                            console.log(`>> Conversão de Octal para Binário - B8XB2 <<`);
                            console.log(`*** Lembre-se que um número Octal é composto por números de 0 a 7.***`);
                            console.log("-------------------------------------------------------");
                            let nOct = Number(prompt("Digite um número para converter de Octal para Binário: "));
                            var binNumArray = new Array;
                            let n_bin = Number()

                            const digits = splitNumberIntoDigits1(nOct).reverse();

                            for (let i = 0; i < String(nOct).length; i++) {

                                if ((Number(String(nOct)[i]) > 7)) {
                                    n_bin = Number(1)
                                }
                            }

                            switch (n_bin) {
                                case 1:
                                    console.log(`>> ${nOct} não é um número octal.`);
                                    break;

                                default:

                                    for (var contBin = 0; contBin < digits.length; contBin++) {
                                        binNumArray[contBin] = OctParaBin(digits[contBin]);
                                    }

                                    var vBin = Number(binNumArray.reverse().join(''));
                                    console.log(`A conversão do número Octal: ${nOct}\nCorresponde ao número Binário: ${vBin}`);
                            }
                            console.log("-------------------------------------------------------");
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
                            console.log(`*** Lembre-se que um número Binário é composto apenas por (0 e 1).***`);
                            console.log("--------------------------------------------------------------------------");
                            let bin1 = Number(prompt(`Digite um número para converter de Binário para Hexadecimal: `));
                            let binario = (bin1);
                            let bs = 1
                            let resultadoh = String("");
                            let hexad = Number();
                            let hexa = Number();
                            let y = Number();
                            let n_bin = Number()

                            for (let i = 0; i < String(bin1).length; i++) {

                                if ((Number(String(bin1)[i]) > 1)) {
                                    n_bin = Number(1)
                                }
                            }

                            switch (n_bin) {
                                case 1:
                                    console.log(`>> ${bin1} não é um número binário.`);
                                    break;

                                default:
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
                                    console.log(`A conversão do número Binário: ${binario}\nCorresponde ao Hexadecimal: ${resultadoh}-h`);
                            }
                            console.log("---------------------------------------");
                            console.log("Deseja realizar outra conversão?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear()
                        break;

                    case 6:
                        do {
                            console.clear()
                            console.log(`>> Conversão de Hexadecimal para Binário - B16XB2 <<`);
                            console.log(`*** Lembre-se que um Hexadecimal é composto apenas por números de 0 a 9 e letras de A a F.***`);
                            console.log("------------------------------------------------------------------------------------------");
                            let hexad = String(prompt(`Digite um valor para converter de Hexadecimal para Binário: `));
                            let id = String();
                            let r_hexad = String();
                            let n_bin = Number()

                            for (let i = 0; i < String(hexad).length; i++) {

                                if ((String(hexad)[i]) > 'f') {
                                    n_bin = Number(1)
                                }
                            }

                            switch (n_bin) {
                                case 1:
                                    console.log(`>> ${hexad} não é um hexadecimal.`);
                                    break;

                                default:

                                    for (let i = 0; i < hexad.length; i++) {
                                        id = hexad[i].toUpperCase();

                                        switch (id) {
                                            case "0":
                                                r_hexad = r_hexad + "0000"
                                                break;
                                            case "1":
                                                r_hexad = r_hexad + "0001"
                                                break;
                                            case "2":
                                                r_hexad = r_hexad + "0010"
                                                break;
                                            case "3":
                                                r_hexad = r_hexad + "0011"
                                                break;
                                            case "4":
                                                r_hexad = r_hexad + "0100"
                                                break;
                                            case "5":
                                                r_hexad = r_hexad + "0101"
                                                break;
                                            case "6":
                                                r_hexad = r_hexad + "0110"
                                                break;
                                            case "7":
                                                r_hexad = r_hexad + "0111"
                                                break;
                                            case "8":
                                                r_hexad = r_hexad + "1000"
                                                break;
                                            case "9":
                                                r_hexad = r_hexad + "1001"
                                                break;
                                            case "A":
                                                r_hexad = r_hexad + "1010"
                                                break;
                                            case "B":
                                                r_hexad = r_hexad + "1011"
                                                break;
                                            case "C":
                                                r_hexad = r_hexad + "1100"
                                                break;
                                            case "D":
                                                r_hexad = r_hexad + "1101"
                                                break;
                                            case "E":
                                                r_hexad = r_hexad + "1110"
                                                break;
                                            case "F":
                                                r_hexad = r_hexad + "1111"
                                                break;
                                        }
                                    }
                                    console.log(`A conversão do Hexadecimal: ${hexad}\nCorresponde ao Binário: ${r_hexad}`);
                            }
                            console.log(`----------------------------------------`);
                            console.log("Deseja realizar outra conversão?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;

                    case 0:
                        console.clear();
                        break;

                    default:
                        console.clear();
                        console.log('>>>>> Inválido <<<<<');
                        console.log('Tente novamente...');
                        break;
                }
            }
            break;

        case 5:
            function concatena(str1 = String(), str2 = String()) {
                let result = '';

                for (let i = 0; i < str1.length; i++) {
                    result += str1[i];
                }

                for (let i = 0; i < str2.length; i++) {
                    result += str2[i];
                }

                return result;
            }
            do {
                console.clear()
                console.log(`----------------------------------\n>> Concatenação de Duas Strings <<\n----------------------------------`)
                const string1 = prompt("Digite a 1ª String: ");
                const string2 = prompt("Digite a 2ª String: ");
                console.log(`----------------------------------`);

                if (string1 !== null && string2 !== null) {
                    const aux = concatena(string1, string2);
                    console.log(`>> ${aux}`);
                    console.log(`----------------------------------`)

                } else {
                    console.log("Entradas inválidas.");
                }
                console.log("Deseja realizar outra concatenação?");
                console.log();
                console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                s_n = String(prompt(">>  "));
            } while (s_n == "S" || s_n == "s");
            console.clear();
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
        `);
                console.log('           Qual operação deseja realizar?');
                op1 = Number(prompt('           >> '));

                switch (op1) {
                    case 1:
                        do {
                            console.clear();
                            console.log(`-------------------\n>> Juros Simples <<\n-------------------`);
                            var capI = Number(prompt("Insira o Capital Inicial: "));
                            var taxa = Number(prompt("Insira a Taxa de Juros (em %): "));
                            var temp = Number(prompt("Insira o Prazo (em meses): "));

                            var juroVal = capI * (taxa / 100) * temp

                            console.log(`----------------------------------`);
                            console.log(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`);
                            console.log(`----------------------------------`);
                            console.log("Deseja realizar outra operação?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;

                    case 2:
                        do {
                            console.clear();
                            console.log(`---------------------\n>> Juros Compostos <<\n---------------------`);
                            var capI = Number(prompt("Insira o Capital Inicial: "));
                            var taxa = Number(prompt("Insira a Taxa de Juros (em %): "));
                            var temp = Number(prompt("Insira o Prazo (em meses): "));

                            var juroVal = capI * potencia((1 + (taxa / 100)), temp);

                            console.log(`----------------------------------`);
                            console.log(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`)
                            console.log(`----------------------------------`);
                            console.log("Deseja realizar outra operação?");
                            console.log();
                            console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior. ");
                            s_n = String(prompt(">>  "));
                        } while (s_n == "S" || s_n == "s");
                        console.clear();
                        break;
                    case 0:
                        console.clear();
                        break;
                    default:
                        console.clear();
                        console.log('>>>>> Inválido <<<<<');
                        console.log('Tente novamente...');
                        break;
                }
            }
            break;
        case 0:
            setTimeout(() => {
                console.log('>>> ALPHA CODE<<<');
                console.log("Saindo...");
            }, 1000);
            console.clear();
            break;
        default:
            console.clear();
            console.log('>>>>> Inválido <<<<<');
            console.log('Tente novamente...');
            break;
    }
} while (op !== 0);