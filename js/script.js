function criaSegundos (segundos) {
    const data = new Date(segundos * 1000)         // pegando em ms e formatando em seg
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'             // colocando timezone do marco zero(1970 às 00:00)
    })
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;
function iniciarRelogio() {
    timer = setInterval(function(){
     segundos++
     relogio.innerHTML = criaSegundos(segundos);
    },1000)
}

iniciar.addEventListener('click', function (event) {
    clearInterval(timer);     // pra não correr o risco de clicar mais de uma vez e criar outro timer
    iniciarRelogio();
    relogio.style.color= '#000'
})

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.style.color = '#ff0000'
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    relogio.style.color = '#ff0000'
    segundos =0;               // para quando zerar, não continuar de onde parou quando clicar em iniciar
})