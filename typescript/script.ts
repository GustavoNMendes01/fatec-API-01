function op1(id: number){
    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow?.document.write(`<html><head><title>${nomeOp}</title></head></html>`);

    function leia(texto: string){
        return(myWindow?.prompt(texto))
    }

    function escreva(texto: string){
        return(myWindow?.alert(texto))
    }

    function fechar(){
        return myWindow?.close()
    }

    var op = Number(leia("qual operação deseja realizar?\n 1-Adição \n 2-Subtração \n 3-multiplicação \n 4-divisão"))

    switch (op) {
        case 1:
            var num1 = Number(leia("Insira o primeiro valor:"));
            var num2 = Number(leia("Insira o segundo valor:"));
            
            var total = num1 + num2;
            
            escreva("A SOMA dos números é:" + total);
            fechar();
            
            break;
            
        case 2:
            var num1 = Number(leia("Insira o primeiro valor:"));
            var num2 = Number(leia("Insira o segundo valor:"));
            
            var total = num1 - num2;
            
            escreva("A SUBTRAÇÃO dos números é:" + total);
            fechar();
            
            break;
            
        case 3:
            var num1 = Number(leia("Insira o primeiro valor:"));
            var num2 = Number(leia("Insira o segundo valor:"));
            
            var total = num1 * num2;
            
            escreva("A MULTIPLICAÇÃO dos números é:" + total);
            fechar();
            
            break;
            
        case 4:
            var num1 = Number(leia("Insira o primeiro valor:"));
            var num2 = Number(leia("Insira o segundo valor:"));
            
            var total = num1 / num2;
            
            escreva("a DIVISÃO dos números é:" + total);
            fechar();
            
            break;
            
        default:
            escreva(`Operação inválida.`);
            fechar();
            break;
    }
}



function op4(id: number) {
    //INÍCIO - PARTE PADRÃO
    let myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    function leia(texto: string) {
        return (myWindow?.prompt(texto))
    }
    function escreva(texto: string) {
        return (myWindow?.alert(texto))
    };

    let op = Number(leia("Conversão de Bases Númericas. \n 1 - B10XB2 - Decimal para Binário. \n 2 - B2XB10 - Binário para Decimal. \n 3 - B2XB16 - Binário para Hexadecimal."))


    switch (op) {
    case 1:
         function B10XB2() {
                console.log("Conversão de Decimal para Binário");
                let d = String(leia("Digite um número para converter de Decimal para Binário: "));
                let n = Number(d);
                let dec = Number(d);
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
                escreva(`A conversão do número decimal: ${dec}, corresponde ao número binário: ${resultado}`);
            };

             B10XB2()
            break;
            
        case 2:
            function B2XB10() {
                console.log("Conversão de Binário para Decimal");
                console.log("Lembre-se que um número binário é composto apenas por (0 e 1).");

                let b = String(leia("Digite um número para converter de Binário para Decimal: "));

                let b1 = parseInt(b);
                let base = (1);
                let x = (0);
                let dec = Number()

                while (b1 > base) {

                    let bin = Math.floor(b1 / base) % 10

                    if (bin >= 1) {
                        dec = dec + (2 ** x)
                    };

                    x = x + 1
                    base = base * 10
                }

                escreva(`A conversão do número binário: ${b1}, corresponde ao número decimal: ${dec}`);
            };
            break;

        case 3:

            function B2XB16() {

                console.log("Conversão de Binário para Hexadecimal")
                console.log("Lembre-se que um número bínario é composto apenas por (0 e 1).")

                let b = String(leia("Digite um número para converter de binário para hexadecimal. "));

                let b1 = parseFloat(b)
                let base = 1
                let resultado = String("")
                let hexad = Number()
                let hexa = Number()
                let x = Number()

                while (base <= b1) {

                    for (x = 0; x < 4; x++) {

                        hexa = Math.floor(b1 / base) % 10

                        if (hexa >= 1) {
                            hexad = hexad + (1 * (2 ** x))
                        };

                        base = base * 10
                    }

                    if (x = 4) {
                        switch (hexad) {
                            case 1:
                                resultado = ("1") + resultado;
                                break;
                            case 2:
                                resultado = ("2") + resultado;
                                break;
                            case 3:
                                resultado = ("3") + resultado;
                                break;
                            case 4:
                                resultado = ("4") + resultado;
                                break;
                            case 5:
                                resultado = ("5") + resultado;
                                break;
                            case 6:
                                resultado = ("6") + resultado;
                                break;
                            case 7:
                                resultado = ("7") + resultado;
                                break;
                            case 8:
                                resultado = ("8") + resultado;
                                break;
                            case 9:
                                resultado = ("9") + resultado;
                                break;
                            case 10:
                                resultado = ("A") + resultado;
                                break;
                            case 11:
                                resultado = ("B") + resultado;
                                break;
                            case 12:
                                resultado = ("C") + resultado;
                                break;
                            case 13:
                                resultado = ("D") + resultado;
                                break;
                            case 14:
                                resultado = ("E") + resultado;
                                break;
                            case 15:
                                resultado = ("F") + resultado;
                                break;
                        }
                        x = 0
                        hexad = 0
                        hexa = 0
                    }
                }

                escreva(`O valor em hexadecimal para o número binário: ${b1}, corresponde a: ${resultado}-h`)
            }   B2XB16()
                break;
                }
}


function op6(id: number){

    //INÍCIO - PARTE PADRÃO

    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow?.document.write(`<html><head><title>${nomeOp}</title></head></html>`);

    function leia(texto: string){
        return(myWindow?.prompt(texto))
    }

    function escreva(texto: string){
        return(myWindow?.alert(texto))
    }

    function fechar(){
        return myWindow?.close()
    }

    //FIM - PARTE PADRÃO

    function potencia(x:number ,y:number){
        var res = 1, i = 1

        do {
            res = res * x
            i += i
        } while (i<=y); 

        return res
    }

    var j = Number(leia('Deseja realizar qual operação?\n1) Juros Simples\n2) Juros Composto'))

    switch (j){
        case 1:
            var capI = Number(leia("Insira o Capital Inicial:"))
            var taxa = Number(leia("Insira a Taxa de Juros (em %):"))
            var temp = Number(leia("Insira o Prazo (em meses):"))
        
            var juroVal = capI * (taxa/100) * temp

            escreva(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`)
            fechar() 

            break

        case 2:
            var capI = Number(leia("Insira o Capital Inicial:"))
            var taxa = Number(leia("Insira a Taxa de Juros (em %):"))
            var temp = Number(leia("Insira o Prazo (em meses):"))

            var juroVal = capI * potencia((1 + (taxa/100)),temp)

            escreva(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`)
            fechar() 

            break

        default:
            escreva("Opção não disponível.")
            fechar()
            break
    }
}
