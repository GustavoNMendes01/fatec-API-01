const prompt = require('prompt-sync')({ sigint: true })

function splitNumberIntoDigits(number) {
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

    if((Number(resultado) < 100) && (Number(resultado) > 9)){
        resultado = "0" + resultado
    }

    if(Number(resultado) < 9){
        resultado = "00" + resultado
    }

    return resultado;
}

do {
    console.clear();
    console.log(`>> Conversão de Octal para Binário - B8XB2 <<`);
    console.log("-------------------------------------------------------");
    let nOct = Number(prompt("Digite um número para converter de Octal para Binário: "));
    var binNumArray = new Array;

    const digits = splitNumberIntoDigits(nOct).reverse();

    for(var contBin = 0; contBin < digits.length; contBin++){
        binNumArray[contBin] = OctParaBin(digits[contBin]);
    }

    var vBin = Number(binNumArray.reverse().join(''));

    console.log(`A conversão do número octal: ${nOct}\nCorresponde ao número binário: ${vBin}`);
    console.log("-------------------------------------------------------");
    console.log("Deseja realizar outra conversão?");
    console.log();
    console.log("Digite (S) - Sim / Digite (N) - Para retornar ao menu anterior ");
    s_n = String(prompt(">>  "));
} while (s_n == "S" || s_n == "s");
console.clear();