//Encontro Remoro 2 - Exercicio 1

let NumDeAlunos = 10;

for (let contador = 0; contador <= NumDeAlunos; contador++)
{
    if (contador == 0) {
        console.log("O número atual é zero")
    } 
    else if (contador % 2 == 0) {
        console.log("O número ${contador} é par")
    } 
    else {
        console.log("O número ${contador} é impar")
    }
}

//Encontro Remoro 2 - Exercicio 2
let nomeAlunos = ["Caique", "Thiago", "Odirlei", "Jessica"];

for (let nome of nomeAlunos) {
    console.log("Esta pessoa se chama ${nome}")
}
