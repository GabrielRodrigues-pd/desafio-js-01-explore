/* 
  Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

*/

let firstNumber = Number(prompt('Insira o primeiro número'))
let secondNumber = Number(prompt('Insira o segundo número'))

const som = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const divs = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert(`A soma dos dois números é: ${som}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divs dos dois números é: ${divs.toFixed(2)}`)
alert(`A rest dos dois números é: ${rest}`)

if (rest == 0) {
  alert(`A soma dos dois números é par: ${som}`)
} else {
  alert(`A soma dos dois números é ímpar: ${som}`)
}

if (firstNumber == secondNumber) {
  alert(`Os dois números inseridos são iguais
  ${firstNumber} e ${secondNumber}`)
} else {
  alert(`Os dois números inseridos são diferentes`)
}
