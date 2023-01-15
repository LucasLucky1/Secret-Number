var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang='pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
  
    const fala = e.results[0][0].transcript;
    const chute= document.querySelector('#chute');
    
    //exibir chute na tela
    chute.innerHTML = `<div>Você disse:</div> <span class="box" >${fala}</span>`;
    
    validaFala(fala);

    
 }
 




