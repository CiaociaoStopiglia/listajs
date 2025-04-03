let operacao = "+"
let numero1 = 2
let numero2 = 3

let resultado;
switch (operacao) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("A divisão por 0 não é permitida.");
            resultado: undefined
        }
        break;
    default:
        console.log("Operação inválida");
        resultado: undefined
}

if (resultado !== undefined) {
    console.log("resultado:", resultado)
}