let expenses = [
    {
        name: 'Combustível',
        amount: 150,
        category: 'Carro'
    },
    {
        name: 'Mercado',
        amount: 230,
        category: 'Casa'
    },
    {
        name: 'Remédio',
        amount: 45,
        category: 'Saúde'
    }
];

console.log(expenses[0].name); // Exepenses = Array inteiro, [0] = o primeiro objeto, .name = a propiedade name desse objeto
console.log(expenses[2].category);
console.log(expenses[1].amount);

expenses.push({ // Adiciona um novo registro 
    name: 'Estacionamento',
    amount: 20,
    category: 'Carro'
});

console.log(expenses.length); // Confere a quantidade de registros que a array tem 
console.log(expenses[3].name);

expenses.forEach(function(expenses) { 
    console.log(expenses.name); // Percorre e mostra todos os registros no name
});

// somando todas as despesas
let total = 0;

expenses.forEach(function(expenses) {
    total = total + expenses.amount;
});

console.log(total);