// Escreva um programa onde, você chame uma função enviando um número
// (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const tabuada = (number) => {
    if (number > 10 || number < 1) {
        console.log ('Digite um número entre 1 e 10')
        return
    }

    for (let i=1; i <= 10; i++) {
        console.log (`${i} x ${number} = ${i * number}`)

    }
}

tabuada (2)