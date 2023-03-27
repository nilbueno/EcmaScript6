/*O método map é muito útil quando precisamos não somente
passar por todos os elementos de um Array , mas também
modificá-los. Por exemplo, imagine que precisamos de um
algoritmo para duplicar todos os valores de uma lista de números
naturais. Sem pensar muito, faríamos algo assim:

var numeros = [1,2,3];
var dobro = [];
for(var i = 0; i < numeros.length; i++) {
dobro.push(numeros[i] * 2);
}
console.log(numeros); // [1,2,3]
console.log(dobro); // [2,4,6]


Criamos um novo Array chamado dobro e usamos o seu
método push para inserir o dobro de cada um dos valores
recuperados por índice na iteração dos numeros . Podemos ter o
mesmo comportamento ao usar o map :
*/

var numeros = [1,2,3];
var dobro = numeros.map(function(numero) {
return numero * 2;
});
console.log(numeros); // [1,2,3]
console.log(dobro); // [2,4,6]

/*
O map executa a função de callback recebida por parâmetro
para cada elemento iterado de numeros e constrói um novo
Array com base nos retornos de cada uma das chamadas. Como o
map nos devolve uma outra instância de Array , a lista original
nunca é realmente modificada, o que mantém sua integridade.
E assim como no vimos no forEach , a função de callback
não passa por elementos que foram modificados, alterados ou
removidos depois da primeira execução da função de retorno.
*/

//Exemplo 2
const nums = [1,2,3,4,5]
const dobro2  = n => n * 2

console.log(nums.map(dobro2))

//Exemplo 3
const carrinho = [
    {nome:'Caneta', qtde: 10, preco: 7.99},
    {nome:'Impressoa', qtde: 1, preco: 649.50},
    {nome:'Caderno', qtde: 4, preco: 27.10},
    {nome:'Lapis', qtde: 3, preco: 5.82},
    {nome:'Tesoura', qtde: 1, preco: 19.20},
]

const getNome = item => item.nome
const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais);
