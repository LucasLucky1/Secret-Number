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
        document.body.innerHTML = `<h3> Você acertou! </h3> <div> O número secreto era ${numeroSecreto} 
        </div><button class= "btn" id='btn'>Jogar novamente </button>` ;
        //opção de botão reload
        // const botaoRestart = document.querySelector('.btn');
        // botaoRestart.addEventListener('click', ()=>{
        // window.location.reload()
// })
       
        
    }else if(numero > numeroSecreto){
        chute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`

    }else{
        chute.innerHTML += `<div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`

    }
}


function valorDentroDoPermitido(numero){
    if(numero > maiorValor || numero < menorValor){
        return true
    }
}

//botão reload no escopo global
window.addEventListener('click', e=>{
    if(e.target.id=='btn'){
        window.location.reload();
    }
})