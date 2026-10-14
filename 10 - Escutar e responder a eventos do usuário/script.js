// JavaScript seleciona o titulo e o botão, registra um ouvinte para o evento click, quando o usuário clica no botão, a função é executada, o texto do título é alterado
//CLICK
let title = document.querySelector('#title');
let button =  document.querySelector('#button');

button.addEventListener('click', function() {
    title.innerText = 'Você clicou no botão!'; 
});

//SUBMIT

let expenseForm = document.querySelector('#expenseForm');
let message = document.querySelector('#message');

expenseForm.addEventListener('submit', function(){
    event.preventDefault(); // impede que a pagina seja atualizada ou aconteça um redirecionamento depois de clicar no botão 
    message.innerText = 'Despesa cadastrada com sucesso!';
});

// CHANGE

let category = document.querySelector('#category');
let selectedCategory = document.querySelector ('#selectedCategory');

category.addEventListener('change', function(){
    selectedCategory.innerText = category.value; // quando o usuário selecionar "carro" por exemplo o texto exibido será "car" pois é o valor definido no atributo value da opção.
});

// INPUT

let expenseName = document.querySelector('#expenseName');
let preview = document.querySelector('#preview');

expenseName.addEventListener('input', function() {
    preview.innerText = expenseName.value; // Mostra em tempo real no "preview" o conteudo digitado pelo usuário 
});