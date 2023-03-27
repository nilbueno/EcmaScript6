/*A função auxiliar reduce foi deixada para o final por ser a
mais complicada. A ideia por trás dela é pegar todos os valores de
um Array e condensá-los em um único. Para demonstrar seu
funcionamento, vamos mostrar um caso clássico de uso.
Neste exemplo, vamos fazer a soma de todos os elementos de
dentro de um Array . Como fizemos nos outros, primeiro
implementamos uma abordagem mais comum:
  
    var numeros = [1,2,3,4,5];
    var soma = 0;
    
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

console.log(soma); // 15

Aqui não tem segredo. Apenas iteramos a lista com um laço de
repetição e usamos a variável soma , inicializada em 0 , para
acumular o resultado. Agora perceba como temos o efeito
*/
var numeros = [1,2,3,4,5];
var soma = 0;
soma = numeros.reduce(function(soma, numero){

    return soma + numero;
},0)
console.log(soma);

//Exemplo 2

const carrinho = [
    {nome:'Caneta', qtde: 10, preco: 7.99},
    {nome:'Impressoa', qtde: 0, preco: 649.50},
    {nome:'Caderno', qtde: 4, preco: 27.10},
    {nome:'Lapis', qtde: 3, preco: 5.82},
    {nome:'Tesoura', qtde: 1, preco: 19.20},
]
const somaCompraItemQuatidade = item => item.qtde * item.preco;
const finalizarTotasAsComprasDaLista = (acumulador, elemento) => acumulador + elemento;

const totalGeral = carrinho.map(somaCompraItemQuatidade).reduce(finalizarTotasAsComprasDaLista)
console.log(totalGeral)