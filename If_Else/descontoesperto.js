let salario = 2000

Desconto = salario > 2000 ? 0.10 : 0.05
let salarioFinal = salario - (salario * Desconto);

console.log(`seu salário depois do desconto é: R$${salarioFinal.toFixed(2)}`);