// Função para ler entrada do usuário no navegador
function lerNumero(mensagem: string): number {
    const entrada = prompt(mensagem);
    if (entrada !== null) {
        return parseFloat(entrada);
    }
    return 0;
}

// Função para ler entrada do usuário no navegador para caractere
function lerCaractere(mensagem: string): string {
    const entrada = prompt(mensagem);
    if (entrada !== null) {
        return entrada;
    }
    return "";
}

// Função principal
function main() {
    let coef1: number, coef2: number, coef3: number;
    let continuar: string = "n";

    while (continuar === "n") {
        console.log("              ax² + bx + c = 0");
        console.log(" a: equivale ao primeiro coeficiente, ");
        console.log(" b: equivale ao segundo coeficiente, ");
        console.log(" c: equivale ao terceiro coeficiente, ");
        console.log("");

        coef1 = lerNumero("Informe o primeiro coeficiente: ");
        coef2 = lerNumero("Informe o segundo coeficiente: ");
        coef3 = lerNumero("Informe o terceiro coeficiente: ");

        console.log(`Sua função é: ${coef1}x² + ${coef2}x + ${coef3} = 0`);
        console.log("");

        continuar = lerCaractere("Deseja continuar? (s para sim ou n para nao): ");
        console.log("");
    }
}

// Executa a função principal
main();
