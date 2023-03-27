/*Esta é uma função auxiliar bem interessante. Ao contrário das
outras que vimos até então, esta não retorna uma cópia do Array ,
mas sim um valor booleano.
A função every é pertinente para validar se todos os elementos
de um Array respeitam uma dada condição. Para exemplificar,
vamos novamente utilizar o cenário dos alunos maiores de idade.
Mas para este caso, queremos saber se todos os alunos são maiores
de idade. Primeiro, fazemos da forma convencional:

var alunos = [{nome:'joão', idade: 18},{nome:'maria', idade: 20},{nome:'pedro', idade: 24}];

var todosAlunosDeMaior = true;
for(var i = 0; i< alunos.length; i++) {
    if(alunos[i].idade < 18) {
    todosAlunosDeMaior = false;
    break;
    }
}

console.log(todosAlunosDeMaior); // true
Iteramos toda a lista procurando por alunos menores de idade.
Ao achar um, já encerramos a iteração e retornamos false . Agora,
observe como podemos simplificar essa lógica usando o every :*/

var alunos = [{nome:'joão', idade: 18}, {nome:'maria', idade: 20},{nome:'pedro', idade: 24}];

    var todosAlunosDeMaior = alunos.every(function(aluno){
    return aluno.idade > 18;
    });
    console.log(todosAlunosDeMaior); // true

    /*Para cada peso de mala contida no pesoDasMalas , é verificado
se ele é superior a 30 kg. Na primeira ocorrência de caso positivo
para a condição, a execução do loop é interrompida e o método
retorna true . Caso contrário, o Array todo é percorrido e o
método retorna false se chegar ao final sem encontrar um
registro que satisfaça a condição.
*/