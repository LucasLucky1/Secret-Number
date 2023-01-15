function validaFala(fala){
    const numero = + fala;
    if (isNaN(numero)){
        chute.innerHTML += '<div> Não é um número</div> '
        return

       
    }
    if(valorDentroDoPermitido(numero)){
        chute.innerHTML += `<div> Valor incorreto: o número deve estar entre ${maiorValor} e ${menorValor} </div>`
        return
        
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `<h3> Você acertou! </h3> <div> O número secreto era ${numeroSecreto}` ;
    }else if(numero > numeroSecreto){
        chute.innerHTML += `<div> O número é maior</div>`

    }else if(numero < numeroSecreto){
        chute.innerHTML += `<div> O número é menor</div>`

    }
}


function valorDentroDoPermitido(numero){
    if(numero > maiorValor || numero < menorValor){
        return true
    }
}