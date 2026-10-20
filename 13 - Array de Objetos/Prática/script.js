let expenses = [
    {name: 'Combustível', amount: 120, category: 'Carro'},
    {name: 'Mercado', amount: 85, category: 'Casa'},
    {name: 'Internet', amount: 100, category: 'Casa' }
]

console.log(expenses[0].name);
console.log(expenses[2].amount);
console.log(expenses[1].category);

expenses.push({name: 'Estacionamento', amount: 25, category:'Carro'});

console.log(expenses.length);
