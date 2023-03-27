const soma = function(x,y){

    return x + y
}

const imprimirResultado = function(a,b, op = soma){
    console.log(op(a,b))
}
imprimirResultado(10,15);