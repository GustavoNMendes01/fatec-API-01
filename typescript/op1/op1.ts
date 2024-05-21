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

