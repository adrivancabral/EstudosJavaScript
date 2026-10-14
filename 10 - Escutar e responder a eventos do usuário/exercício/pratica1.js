let expenseForm = document.querySelector('#expenseForm');
let expenseName = document.querySelector('#expenseName');
let message = document.querySelector('#message');
let expenseAmount = document.querySelector('#expenseAmount');

expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
    message.innerText = 'Despesa: ' + expenseName.value + ' -Valor: R$' + expenseAmount.value;
});

