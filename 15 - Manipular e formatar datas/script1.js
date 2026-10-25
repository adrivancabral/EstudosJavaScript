let expenses = [
    {name: 'Combustível', amount: 100, date: new Date(2025, 9, 5)},
    {name: 'Mercado', amount: 250, date: new Date(2025, 9, 5)},
    {name: 'Internet', amount: 100, date: new Date(2025, 10, 2)}
];
expenses.forEach(function(expenses) {
    console.log(expenses.name);
    console.log(expenses.amount);
    console.log(expenses.date.toLocaleDateString('pt-BR'));
})