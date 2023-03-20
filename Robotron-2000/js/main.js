
const robotron = document.querySelector('#robotron')

robotron.addEventListener("click", (evento) => { //Aqui é usada função anônima, pois será executada apenas no momento que for invocada, ao clicar no Robô
    console.log(evento)  //atraves desse console log podemos ver no console do navegador as propriedades do evento onclick, que inclui possicao do mouse na tela ao clicar
} )

function dizOi (nome){
    console.log('Oi '+ nome + ' Seja Bem-Vindo(a)')
}

dizOi('Yindi')




//Função anônima pode ser declarada das seguintes maneiras:
//function(){}
//() => {} //chamada de arrow function