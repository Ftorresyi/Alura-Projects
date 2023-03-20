
function tocaSom(seletorAudio){
    elemento = document.querySelector(seletorAudio);
   
    if (elemento && elemento.localName === 'audio') { //a comparação com null pode ser removida q o JS irá checar se ele existe, ou seja, é diferente de todas as formas 'inválidas' existentes.
        //console.log(elemento.localName === 'audio'); //ao fazer o deploy e executar essa função no console do navegador é possível descobrir as propriedades e funcionalidades JS de elemento que serão impressoss
        elemento.play();
    }
    else{
        alert('Elemento nao encontrado OU Seletor inválido');
    }
}

//tocaSomPom deve ser sem parenteses para ser guardada sua referencia, caso contrario sera exutado antes de ser clicado
//document.querySelector('.tecla_pom').onclick = tocaSom;

//Cria uma referencia de todas as teclas como uma lista e associa a classe CSS .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');


//A estrutura de repetição for ajuda a criar um código mais limpo em relação ao while, pois usa menos linhas e cria menos variáveis
for (let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1]; //o atributo classList acessa a classe do elemento tecla
    //console.log(instrumento);
    const idAudio = `#som_${instrumento}` //tamplate string (Textos Dinâmincos)- nesse caso é necessário usar crase, pois estamos usando uma variável dentro da string de referência
    
    //Manipulando eventos do MOUSE:
    tecla.onclick = function (){ //usa função anônima - function (){} - para fazer referência ao parâmetro de outra função
        tocaSom(idAudio);//usar o # para se referir a um id, e o . para se referir a uma classe css.
    } 
    
    //Manipulando eventos com o TECLADO:
    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}






/*
PASSO A PASSO EVENTO ONCLICK DO MOUSE:
O primeiro passo é criar uma referência (const listaDeTeclas) para poder receber a lista com todas as teclas do Alura Fone, 
ficando const listaDeTeclas = document.querySelectorAll('input[type=button]').

O segundo passo é criar o laço de repetição for, que vai percorrer a lista de teclas, por esta razão, a condição do for é 
indice < listaDeTeclas.length, ou seja, enquanto o indice for menor que o tamanho de listaDeTeclas, executa um comando.

Dentro do for, para facilitar o entendimento, crie uma referência constante const tecla para que a cada iteração , 
receba o valor correspondente da tecla listaDeTeclas[indice], ficando const tecla = listaDeTeclas.

Após isto, adicione no evento de ao apertar uma tecla do teclado onkeydown uma função anônima que recebe como parâmetro um evento. 
Dentro do escopo da função, vamos criar um if com a condição: se evento.code (o código do evento onkeydown) for igual a "Enter" 
ou for igual a "Space", adicione a classe ativa no elemento tecla, ficando então assim tecla.classList.add(‘ativa’);

Como foi resolvido a adição da classe ativa a partir do clique da tecla Enter ou Space, é necessário remover 
essa classe logo após deixamos de pressionar a tecla. Para isso, você precisa adicionar na tecla o evento de 
onkeyup (quando o usuário solta a tecla) uma função anônima, e dentro do escopo desta função, 
vamos remover a classe ativa da classe, ficando assim: tecla.classList.remove(‘ativa’);
*/