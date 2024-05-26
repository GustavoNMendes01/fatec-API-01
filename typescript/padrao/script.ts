function op111(id: number){
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

    //EXEMPLOS: APAGAR!
    var nome = String(leia("Qual é seu nome?")) //EXEMPLO DE COMO LER UMA VARIÁVEL

    escreva(`Meu nome é ${nome}.`) //EXEMPLO DE COMO ESCREVER UM ALERTA

    fechar() //CHAMADA PARA FECHAR A JANELA E VOLTAR PARA O MENU PRINCIPAL
}