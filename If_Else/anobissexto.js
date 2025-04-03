let ano = 2

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("o ano é bissexto.")
} else {
    console.log("o ano não é bissexto.")
}