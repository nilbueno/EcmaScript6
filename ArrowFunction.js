/*
Arrow functions nos permite escrever funções menos verbosas.
Vamos mostrar partindo de um código ES5 e o refatorando passo a
passo até o ideal em ES6. Considere a seguinte declaração de uma
função anônima atribuída à variável boasVindas . Ela recebe um
parâmetro chamado nome e o utiliza para retornar uma saudação:

var boasVindas = function(nome) {
return "Seja bem-vindo, " + nome;
}

boasVindas("Luiz"); // Seja bem-vindo, Luiz
Esse código, apesar de já ser relativamente simples, pode ficar
ainda mais enxuto usando arrow functions. Vamos começar a
simplificá-lo removendo a palavra-chave function e adicionando
a fat arrow ( => ) no lugar:*/


    var boasVindas = (nome) => {
        return "Seja bem-vindo, " + nome;
    }

console.log(boasVindas("Estevão"));
/*
Como só temos um parâmetro na nossa função, a sintaxe nos
permite eliminar os parênteses:
*/
    var boasVindas = nome => {
        return "Seja bem-vindo, " + nome;
    }
//boasVindas("Luiz"); // Seja bem-vindo, Luiz
console.log(boasVindas("João"));

/*
Como também só temos uma linha dentro do corpo da função,
podemos eliminar a palavra-chave return e as chaves:*/

var boasVindas = nome => "Seja bem-vindo, " + nome;
console.log(boasVindas("Pedro")); // Seja bem-vindo, Luiz

/*Por fim, podemos dar um toque de excelência aplicando o que
vimos no capítulo anterior e trocando o var por const :*/

const boasVindass = nome => `Seja bem-vindo, ${nome}`;
console.log(boasVindas("André")); // Seja bem-vindo, Luiz

/*Perceba que continuamos com o mesmo comportamento, mas
agora temos um código bem melhor.
*/


