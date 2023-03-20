
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

somar.addEventListener("click", (evento) => { //Aqui é usada função anônima, pois será executada apenas no momento que for invocada, ao clicar no Robô
    //console.log(evento)  //atraves desse console log podemos ver no console do navegador as propriedades do evento onclick, que inclui possicao do mouse na tela ao clicar
    braco.value = parseInt(braco.value) +1; //o valor do braço deve ser transformado para inteiro, pois é uma string (00)
} )
somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) -1;
})



function dizOi (nome){
    console.log('Oi '+ nome + ' Seja Bem-Vindo(a)')
}

dizOi('Yindi')




//Função anônima pode ser declarada das seguintes maneiras:
//function(){}
//() => {} //chamada de arrow function