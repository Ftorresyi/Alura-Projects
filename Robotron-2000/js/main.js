
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')


const controle = document.querySelectorAll('.controle-ajuste')

//Adiciona evendo ManipulaDados quando ocorrer o evento click em todos elementos da classe controle-ajuste
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento)=>{
        manipulaDados(evento.target.textContent, evento.target.parentNode)//manipula o conteudo do texto da target
        //console.log(evento.target.parentNode)//encontra o elemento pai na herança, o qual iremos referenciar
    })
    
})

// somar.addEventListener("click", (evento) => {manipulaDados('somar')} )
// subtrair.addEventListener("click", (evento) => {manipulaDados('subtrair')})

//Essa funcao adiona ou subtrai elementos que forem pecas, atraves da classe .controle-contador que elas herdarem.
function manipulaDados(operacao, controle){
    const peca = controle.querySelector('.controle-contador')
    if(operacao === '-'){
        peca.value = parseInt(peca.value) -1; //o valor do braço deve ser transformado para inteiro, pois é uma string (00)
    }else{
        peca.value = parseInt(peca.value) +1;
    } 
}




//Função anônima pode ser declarada das seguintes maneiras:
//function(){}
//() => {} //chamada de arrow function