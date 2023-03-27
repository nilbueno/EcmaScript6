/*
Esta função auxiliar é particularmente interessante quando o
objetivo é encontrar um item específico dentro de um Array .
Digamos, por exemplo, que de uma lista de alunos queremos
somente o registro que contenha o nome “josé”. O que faríamos
tradicionalmente é algo nesse sentido:

    var alunos = [
        {nome:'joão'},
        {nome:'josé'},
        {nome:'maria'}
        ];

    var aluno;
        for(var i = 0; i < alunos.length; i++) {
            if(alunos[i].nome === 'josé') {
                aluno = alunos[i];
                break; // evita percorrer o resto da lista
            }
        }
console.log(aluno); // {"nome":"josé"}

Para cada elemento da lista, recuperamos a propriedade do
elemento e o comparamos com o nome que estamos buscando. Se
der igualdade, atribuímos o valor na variável aluno instanciada
antes do loop e o encerramos. Com o find , é possível reescrever
este código e obter o mesmo efeito, com a ressalva de que vamos
pegar somente o primeiro item que satisfaz o critério de busca. Fica
assim:*/

    var alunos = [ {nome:'joão'},{nome:'josé'},{nome:'maria'}];
        
    var aluno = alunos.find(function(aluno) {    
        return aluno.nome === 'josé';
    });
console.log(aluno); // {"nome":"josé"}

/*Caso na lista existissem dois alunos com o nome “josé”, somente
o primeiro seria retornado. Para contornar este caso, precisaríamos
usar um critério de busca mais específico.
*/
