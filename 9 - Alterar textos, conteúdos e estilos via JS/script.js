let message = document.querySelector('#message'); // seleciona a variável message do html
message.innerText = 'Estou aprendendo JavaScript'; // Altera o texto original
console.log(message.innerText); // Mostra somente o texto que estiver dentro do elemento

let message1 = document.querySelector('#message1');
message1.innerHTML = 'Olá, <strong>Programador!</strong>' // usando o innnerHTML o código aceita a tag strong que faz o texto ficar em negrito 
console.log(message1.innerText); // Dessa forma ele mostra no console somente o texto sem a tag strong
console.log(message1.innerHTML); // Dessa forma ele mostra todo o texto incluindo a tag strong

let stats = document.querySelector('#stats');
stats.classList.add('pending'); // Muda a classe da variavel stats e o estilo definido para essa classe no css é aplicado a variavel stats 
stats.classList.remove('pending'); // Remove a classe da variavel assim voltando ela pra forma original como escrita no HTML

let subtitle = document.querySelector('#subtitle');
subtitle.style.color = 'blue';
subtitle.style.fontSize = '32px';
subtitle.style.backgroundColor = 'yellow'; // dessa forma altera caracteristicas de um unico elemento diretamente pelo JavaScript

