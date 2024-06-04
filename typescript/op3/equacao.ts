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
// Função para calcular as raízes de uma equação quadrática
function calcularRaizes(a: number, b: number, c: number): { x1?: number, x2?: number, mensagem?: string } {
    const delta = b * b - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return { x1, x2 };
    } else if (delta === 0) {
        const x1 = -b / (2 * a);
        return { x1 };
    } else {
        return { mensagem: 'A equação não possui raízes reais.' };
    }
}

// Função para exibir as raízes ou a mensagem de erro
function exibirResultado(resultado: { x1?: number, x2?: number, mensagem?: string }) {
    if (resultado.mensagem) {
        console.log(resultado.mensagem);
    } else if (resultado.x2 !== undefined) {
        console.log(`As raízes da equação são x1 = ${resultado.x1} e x2 = ${resultado.x2}`);
    } else {
        console.log(`A equação possui uma raiz real dupla: x = ${resultado.x1}`);
    }
}

// Função principal
function main() {
    // Solicitar coeficientes ao usuário
    console.log('Digite os coeficientes da equação quadrática (ax² + bx + c = 0):');

    // Coletar coeficientes
    const a = parseFloat(prompt('Digite o valor de a: '));
    const b = parseFloat(prompt('Digite o valor de b: '));
    const c = parseFloat(prompt('Digite o valor de c: '));

    // Calcular e exibir o resultado
    const resultado = calcularRaizes(a, b, c);
    exibirResultado(resultado);
}

// Chamar a função principal
main();