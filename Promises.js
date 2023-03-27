//Exemplo 1
let a  = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){

    cumprirPromessa(3)
})

p.then(function(valor){
console.log(valor)
})

// Exemplo 2
let ex2 = new Promise(function(segundapromessa){

    segundapromessa(['Ana','Bia','Carlos','Daniel'])
})

ex2.then(valor => console.log(valor));


//Exemplo 3

let promise = new Promise((resolve, reject) => {
let result  = true // altera para false para mudar o comportamento

    if(result){
        resolve('deu tudo certo!');

    }else {
        reject('deu errado');
    }
})

promise.then((data) => console.log(`${data}`)).catch((data) => console.log(` ${data}`));


// Exemplo 4 
/*Para facilmente simular a execução de uma função assíncrona
dentro da nossa promise — como uma chamada AJAX, por
exemplo — vamos utilizar a função setTimeout*/
let promiseEx4 = new Promise((resolve, reject) => {
    let resultado = false;
    let tempo = 2000; // milisegundos
    setTimeout(() => {
        if(resultado) {
            resolve("deu tudo certo!");
        } else {
            reject("deu tudo errado!");
        }
    }, tempo)
});
/*
As funções then e catch possuem várias características
importantes que precisamos saber antes de sair usando. A primeira
delas é que podemos aninhar suas chamadas. Por exemplo, na
declaração de uma promise, em vez de declarar os métodos then e
catch de modo separado, como fizemos antes, podemos fazer de
modo aninhado:*/
promiseEx4.then((data) => console.log(`resultado positivo: ${data}`)).catch((data) => console.log(`resultado negativo: ${data}`));

// Exemplo 5
/*

Isso acontece porque o valor da variável data , disponível na
primeira chamada do then , não é passada adiante. Ou seja, o valor
da variável data é sempre correspondente ao retorno da função
anterior. Isso significa que, para que tenhamos a mensagem “deu
tudo certo!” nas duas execuções do then , precisamos alterar nosso
código. Retornaremos a variável data dentro da execução do
then :
*/
let promiseEx5 = new Promise((resolve, reject) => {
    resolve('ok!');
    });

    promiseEx5.then((data) => {
    console.log(`sucesso: ${data}`);
    throw new Error("erro!");
    return data;
    })
    .then((data) => console.log(`sucesso: ${data}`))
    .catch((data) => console.log(`falha: ${data}`));