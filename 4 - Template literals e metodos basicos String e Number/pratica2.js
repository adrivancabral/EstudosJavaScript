let nameUser = prompt('Qual é seu nome?');
let age = prompt('Qual sua idade?');
let city = prompt('Qual cidade você mora?');
let salary = Number(prompt('Qual é seu salário?'));
let expense = Number(prompt('Quanto você gasta por mês?'));
let rest = salary - expense;

console.log(`Nome: ${nameUser}`);
console.log(`Idade: ${age}`);
console.log(`Cidade: ${city}`);
console.log(`Salário: R$ ${salary.toFixed(2)}`);
console.log(`Despesas: R$ ${expense.toFixed(2)}`);
console.log(`Sobra: R$ ${rest.toFixed(2)}`);

alert(`
    Olá, ${nameUser}!
    
    Salário: R$ ${salary.toFixed(2)}
    Despesas: R$ ${expense.toFixed(2)}
    Sobra: R$ ${rest.toFixed(2)}
`);