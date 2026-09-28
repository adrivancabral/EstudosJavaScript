// Number 

// toFixed()
let value = 139.6589;
console.log(value.toFixed(2)); // Arredonda o numero

let price = 49.9;
console.log(`Preço R$ ${price.toFixed(2)}`);
let result = price.toFixed(2);
console.log(typeof result); // Ele retorna uma String e não um numero

// Number
let value1 = "100";
console.log(typeof value1);
let number = Number(value1);
console.log(typeof number); // Converte para number quando é possível

// parseInt()
let value0 = '100';
let number0 = parseInt(value0);
console.log(number0); // Converte para numero inteiro

let value2 = "100.5";
console.log(parseInt(value2)); // Pega somente a parte inteira de um numero 

// parseFloat()
let value3 = '100.69';
let number2 = parseFloat(value3); // é usado em numeros que podem possuir casas decimais 
console.log(number2);

// Teste
let description = '    Combustivel     ';
let value5 = '125.50';
description = description.trim();
value5 = Number(value5);

console.log(`
Despesa: ${description},
Valor: R$ ${value5.toFixed(2)}
`)



