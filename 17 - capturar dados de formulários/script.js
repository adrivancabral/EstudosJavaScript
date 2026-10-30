const expenseForm = document.querySelector('#expenseForm');
const expenseName = document.querySelector('#expenseName');
const expenseAmount = document.querySelector('#expenseAmount');
const category = document.querySelector('#category');
const message = document.querySelector('#message');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = expenseName.value;
    const amount = expenseAmount.value;
    const selectedCategory = category.value;

    console.log(name);
    console.log(amount);
    console.log(selectedCategory);

    message.innerText = `Despesa: ${name} - Valor: R$ ${amount} - Categoria: ${selectedCategory}`;
});




// a propiedade value normalmente retorna uma string e nao um number, por isso para fazer um calculo é preciso converter para number por exemplo "let expense1 = Number(expenseAmount.value)"


