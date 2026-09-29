let title = document.querySelector('#title'); // reconhece o h1 como title no JS
title.textContent = 'Adrivan'; // Coloca esse texto no h1 sem precisar modificar no html
console.log(title); // Exibe no console

let message = document.querySelector('#message');
message.textContent = 'Estou aprendendo JavaScript';
console.log(message);

let city = document.querySelector('#city');
city.textContent = 'Maricá';
console.log(city);

let button = document.querySelector('.button');
console.log(button);
// button.addEventListener('click', function(){ // Adiciona uma função ao botão
  //  title.textContent = 'Olá, Adrivan!'
  // message.textContent = 'O botão foi clicado!'
  //  city.textContent = 'Rio de Janeiro'
 //});

 