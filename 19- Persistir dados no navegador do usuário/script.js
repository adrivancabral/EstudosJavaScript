localStorage.setItem('nome', 'Adrivan'); // armazena de forma definitiva até que seja excluído manualmente.
let nome = localStorage.getItem('nome');
console.log(nome);

sessionStorage.setItem('usuario', 'Adrivan'); // armazena enquanto a sessão está ativa, após fechar, reiniciar ou desligar tudo é perdido.
let usuario = sessionStorage.getItem('usuario');
console.log(usuario);

let expense = {
    nome: 'Combustível',
    quantia: 150,
    categoria: 'Carro'
};

localStorage.setItem('expense', expense);
let expense1 = sessionStorage.getItem('expense');
console.log(expense)

let expenseJSON = JSON.stringify(expense); // para transformar o objeto em texto
console.log(expenseJSON);
console.log(typeof expenseJSON);

localStorage.setItem('expense', expenseJSON);

let expenseSaved = localStorage.getItem('expense'); // tranforma o texto em objeto novamente
let expenseObject = JSON.parse(expenseSaved);
console.log(expenseObject);
console.log(expenseObject.nome);
console.log(expenseObject.quantia);
console.log(typeof expenseObject);

// Objeto JavaScript -> JSON.stringify() -> String JSON -> localStorage.setItem() -> localStorage.getItem() -> JSON.parse() -> Objeto Javascript recuperado