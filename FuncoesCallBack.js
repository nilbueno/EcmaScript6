
// Exemplo 1
const fabricantes = ["Mercedes", "Volvo", "Audi"]
function imprimir(nome, indice){
    console.log(`${indice + 1 }.${nome}`)
}
fabricantes.forEach(imprimir)


// Exemplo 2
const fabricantesEx2 = ["Mercedes", "Volvo", "Audi"]
function imprimirEx2(nome, indice){
    console.log(`${indice + 1 }.${nome}`)
}
fabricantesEx2.forEach(function(a){
    console.log(a)
})


//Exemplo 3 Com Funcao Arrow
const fabricantesEx3 = ["BMW", "FERRARI", "FORD"]
fabricantesEx3.forEach(fabricantesEx3 => console.log(fabricantesEx3))


