//desafio 1
// const pessoas = 10000

// let tipo1 = pessoas*0.3
// let tipo2 = pessoas*0.15
// let tipo3 = pessoas*0.05

// tipo1 = tipo1+tipo3
// tipo2 = tipo2+tipo3

// let tipo1Renda = tipo1*0.08
// let valorFinalTipo1 = tipo1Renda*60.51

// let tipo2Renda = tipo2*0.1
// let valorFinalTipo2 = tipo2Renda*51.73

// window.alert(valorFinalTipo1)
// window.alert(valorFinalTipo2)

//operador ternário (um if de uma linha só sem if)
//Ternário pois há uma condição, um valor se for verdadeiro e outro valor de não for verdadeiro
// const meta = 10000
// const legal = true
// const comida = /*meta for maior ou igual a 10000 ou ela for legal*/ meta >= 10000 || legal? /*se sim*/'Pizza🍕' : /*se não*/'Twix mordido🍫'
// window.alert(comida)

// função - sintaxe (a função ira funcionar mesmo estando depois do código onde é chamada)
// function soma(a,b){
//     return a+b;
// }
// window.alert(soma(1,2))

// no javascript vc pode guardar uma função em uma variavel (neste caso a função deve estar antes da sua chamada)
// const funcaoSoma = function somar(a,b){
//     return a+b
// }
// window.alert(funcaoSoma(5,5))

//uma lista é sempre const quando vc so vai mexer nos valores dentro dela
const l = ["oi", 3.14, "Batman", ["Batman", "Robson"]];
console.log(l);
l.push("Alfredo");
window.alert(l);

//não se pode atribuir uma lista em outra lista, pois ela é const
l = ["Alfredo", "Curinga"];
