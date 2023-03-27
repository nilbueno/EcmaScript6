//Function Declaration
function bomDiaFunctionDeclarition(){
    console.log('Bom dia!')
}
bomDiaFunctionDeclarition();



//Function Expression Exemplo A
const boaTardeFunctionExpression = function(){
    console.log('Boa Tarde!')
}
boaTardeFunctionExpression();

//Exemplo B
function somar(a,b){
    return a + b 
}
const resultado = somar(3,4)
console.log(resultado)

// Function Expression em função anonimas
const boaNoite = function(){
    console.log('Boa Noite!')
}

// Recebendo uma outra funcao como parametro
function executarQualquerCoisa(fn){
    fn();
}

executarQualquerCoisa(boaNoite);

// ArrowFunction
