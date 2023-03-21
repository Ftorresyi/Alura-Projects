
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')

const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
//console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//Adiciona evendo ManipulaDados quando ocorrer o evento click em todos elementos da classe controle-ajuste
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)//manipula o conteudo do texto da target
        //console.log(evento.target.parentNode)//encontra o elemento pai na herança, o qual iremos referenciar
        atualizaEstatisticas(evento.target.dataset.peca) //Atualiza a funcao atualizaEstatisticas com a informacao da peça que for clicada
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

//ATUALIZAR AS ESTATÍSTICAS COM OS DADOS DAS PEÇAS:
function atualizaEstatisticas(peca){
    console.log(pecas[peca])

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        console.log()
    })
}



//Função anônima pode ser declarada das seguintes maneiras:
//function(){}
//() => {} //chamada de arrow function