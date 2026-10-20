let expenses = [
    { name: 'combustível', amount: 120, category: 'Carro'},
    { name: 'Mercado', amount: 85, category: 'Casa'},
    { name: 'Internet', amount: 100, category: 'Casa'},
    { name: 'Estacionamento', amount: 25, category: 'Carro'}
]

// .forEach()
expenses.forEach(function(expenses) { 
    console.log(expenses.name); // Dessa forma será exibido todas despesas cadastradas
});

// .map()
let expensesNames = expenses.map(function(expenses) {
    return expenses.name;
});
console.log(expensesNames); // dessa forma será criada uma lista com somente os nomes de cada despesa

let updateAmounts = expenses.map(function(expenses) {
    return expenses.amount + 10;
});
console.log(updateAmounts); // Irá somar 10 a cada valor e mostrará uma lista 

// .filter()
let carExpenses = expenses.filter(function(expenses) {
    return expenses.category === 'Carro';
});
console.log(carExpenses); // Voltara como resultado todos os itens com categoria carro

let expensiveItems = expenses.filter(function(expenses) {
    return expenses.amount > 90;
});

console.log(expensiveItems); // Retorna os itens que o valor ficou acima de 90

// .find()
let foundExpense = expenses.find(function(expenses) {
    return expenses.name === 'Internet';
});

console.log(foundExpense); // retorna o primeiro objeto com o nome Internet

// .reduce()
let totalExpenses = expenses.reduce(function(total, expenses) {
    return total + expenses.amount;
}, 0);
console.log(totalExpenses); // retorna a soma de todas as despesas 