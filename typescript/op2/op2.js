"use strict";
function op22(id) {
    //INÍCIO - PARTE PADRÃO
    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow === null || myWindow === void 0 ? void 0 : myWindow.document.write(`<html><head><title>${nomeOp}</title></head></html>`);
    function leia(texto) {
        return (myWindow === null || myWindow === void 0 ? void 0 : myWindow.prompt(texto));
    }
    function escreva(texto) {
        return (myWindow === null || myWindow === void 0 ? void 0 : myWindow.alert(texto));
    }
    function fechar() {
        return myWindow === null || myWindow === void 0 ? void 0 : myWindow.close();
    }
    var numero = Number(leia("Insira um número"));
    if (numero <= 0) {
        escreva("Insira um número maior que zero.");
        fechar();
    }
    else {
        var resultado = 1;
        for (var i = 1; i <= numero; i++) {
            resultado *= i;
        }
        escreva("O fatorial é " + resultado);
        fechar();
    }
}
