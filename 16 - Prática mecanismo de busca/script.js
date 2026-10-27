const searchInput = document.querySelector('#searchInput');
const expenseList = document.querySelector('#expenseList');

const expenses = [
    'Combustível',
    'Mercado',
    'Internet',
    'Manutenção do carro',
    'Água',
    'Energia elétrica'
];

// Função para mostrar as despesas na tela
function renderExpenses(expensesToRender) {
    expenseList.innerHTML = '';

    expensesToRender.forEach(function(expense) {
        const item = document.createElement('li');

        item.innerText = expense;

        expenseList.appendChild(item);
    });
}

// Detecta a digitação no campo de busca
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredExpenses = expenses.filter(function(expense) {
        return expense.toLowerCase().includes(searchTerm);
    });

    renderExpenses(filteredExpenses);
});

// Exibe todas as despesas quando a página é carregada
renderExpenses(expenses);