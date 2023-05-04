//Escreva um programa onde, você chame uma função enviando um número;
//a função deve imprimir na tela os números de 1 até o número que você enviou.

function numbers (number){
    for (let i=1; i < number; i++) {
        console.log('Contagem', i)
    }
}
numbers(8)