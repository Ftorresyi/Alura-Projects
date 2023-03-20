
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

const controle = document.querySelectorAll('.controle-ajuste')

somar.addEventListener("click", (evento) => {manipulaDados('somar')} )
subtrair.addEventListener("click", (evento) => {manipulaDados('subtrair')})

function manipulaDados(operacao){
    if(operacao === 'subtrair'){
        braco.value = parseInt(braco.value) -1; //o valor do braço deve ser transformado para inteiro, pois é uma string (00)
    }else{
        braco.value = parseInt(braco.value) +1;
    } 
}




//Função anônima pode ser declarada das seguintes maneiras:
//function(){}
//() => {} //chamada de arrow function