let title = document.querySelector('#title');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    title.innerText = 'Bem vindo ao meu aplicativo!';
});

//

let expenseName =  document.querySelector('#expenseName');
let preview = document.querySelector('#preview');

expenseName.addEventListener('input', function() {
    preview.innerText = expenseName.value;
});

//

let expenseForm = document.querySelector('#expenseForm');
let message = document.querySelector('#message');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    message.innerText = 'Despesa cadastrada com sucesso!';
});

//

let category = document.querySelector('#category');
let selectedCategory = document.querySelector('#selectedCategory');

category.addEventListener('change', function(){
    selectedCategory.innerText = category.value;
});