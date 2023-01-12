
const menorValor = 0;
const maiorValor = 1000;
const numeroSecreto = geraNumero();

const spanMenorValor = document.querySelector('#menor-valor');
spanMenorValor.innerHTML=menorValor;

const spanMaiorValor = document.querySelector('#maior-valor');
spanMaiorValor.innerHTML =maiorValor;


function geraNumero (){
   return parseInt(Math.random()*(maiorValor+1));
}






console.log('numero secreto é: ' + numeroSecreto)