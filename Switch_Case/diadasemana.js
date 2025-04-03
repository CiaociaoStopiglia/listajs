let numero = 3
let dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

if (numero >= 1 && numero <= 7) {
    console.log("o dia correspondente é:", dias[numero - 1])
} else {
    console.log("número inválido. digite um número entre 1 e 7.")
}