let title = document.querySelector('#title'); // Seleciona o primeiro elemento com id Title do html
let message = document.querySelectorAll('.message'); //  seleciona todos os elementos com classe message do html

title.textContent = 'Minha Pagina';
message.textContent = 'Estou aprendendo a selecionar elementos'
message[3].textContent = 'Parágrafo modificado' // modifica o quarto elemento message da pagina 

console.log(title);
console.log(message[4]); // mostra o quinto elemento message no console
console.log(message[2]); // aqui mostra o terceiro, lembrando que começa em [0]