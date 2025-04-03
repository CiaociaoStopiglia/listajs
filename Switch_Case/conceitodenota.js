let nota = 10

let conceito;
switch (true) {
    case (nota >= 9 && nota <= 10):
        conceito = "A";
        break;
    case (nota >= 7 && nota <= 8):
        conceito = "B";
        break;
    case (nota >= 5 && nota <= 6):
        conceito = "C";
        break;
    case (nota >= 3 && nota <= 4):
        conceito = "D";
        break;
    case (nota >= 0 && nota <= 2):
        break;
    default:
        conceito = "nota inválida";
}

console.log("conceito", conceito)