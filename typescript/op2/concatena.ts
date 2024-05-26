function op2(id: number){
    //INÍCIO - PARTE PADRÃO
    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow?.document.write(`<html><head><title>${nomeOp}</title></head></html>`);

function concatena(str1: string, str2: string): string {
    let result = '';
    
    // Adiciona os caracteres da primeira string
    for (let i = 0; i < str1.length; i++) {
        result += str1[i];
    }

    // Adiciona os caracteres da segunda string
    for (let i = 0; i < str2.length; i++) {
        result += str2[i];
    }

    return result;
}

// Obtendo as entradas do usuário
const string1 = prompt("Digite o primeiro : ");
const string2 = prompt("Digite o segundo : ");

// Certifique-se de que as entradas não são nulas
if (string1 !== null && string2 !== null) {
    const aux = concatena(string1, string2);
    console.log(aux);  // Saída: a concatenação das duas strings
} else {
    console.log("Entradas inválidas.");
}
}