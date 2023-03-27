/*
Obtemos o resultado esperado, mas agora veja como podemos
melhorar o código e ter o mesmo efeito. Para isso, invocamos a
função forEach no Array , e passamos como parâmetro uma
função de retorno que aceita um outro parâmetro. Neste exemplo,
usaremos a função anônima function(nome){...} :
*/ 
var nomes = ['maria', 'josé', 'joão'];
nomes.forEach(function(nome) {
console.log(nome);
});

/*Repare no que aconteceu. Dentro do forEach , passamos uma
função anônima de retorno, que costumamos chamar de função de
callback . Ela é executada para cada elemento dentro da lista. A
cada iteração, o valor da lista é atribuído à variável passada como
3.2 FOREACH
12 3.2 FOREACH
parâmetro no callback — no nosso caso, a variável nome .
Neste exemplo, somente emitimos no console seu valor. Mas
nesta função de callback , podemos fazer qualquer coisa com o
valor da variável, inclusive passá-la como parâmetro para outros
métodos.
Entretanto, note que a função de callback não precisa
necessariamente ser anônima. Podemos defini-la antes e atribuí-la a
uma variável para passá-la como parâmetro ao forEach :*/


var nomes = ['maria', 'josé', 'joão'];
function imprimeNome(nome) {
console.log(nome);
}
nomes.forEach(imprimeNome);