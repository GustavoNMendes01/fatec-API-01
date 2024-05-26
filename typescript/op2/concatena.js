function op2(id) {
    //INÍCIO - PARTE PADRÃO
    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow === null || myWindow === void 0 ? void 0 : myWindow.document.write("<html><head><title>".concat(nomeOp, "</title></head></html>"));
    function concatena(str1, str2) {
        var result = '';
        // Adiciona os caracteres da primeira string
        for (var i = 0; i < str1.length; i++) {
            result += str1[i];
        }
        // Adiciona os caracteres da segunda string
        for (var i = 0; i < str2.length; i++) {
            result += str2[i];
        }
        return result;
    }
    // Obtendo as entradas do usuário
    var string1 = prompt("Digite o primeiro : ");
    var string2 = prompt("Digite o segundo : ");
    // Certifique-se de que as entradas não são nulas
    if (string1 !== null && string2 !== null) {
        var aux = concatena(string1, string2);
        console.log(aux); // Saída: a concatenação das duas strings
    }
    else {
        console.log("Entradas inválidas.");
    }
}
