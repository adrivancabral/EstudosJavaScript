let expense = 
    {name: 'Combustível', amount: 100, date: new Date()};

console.log(expense);

let currentDate = new Date()

console.log(currentDate); // js criará um objeto mostrando data e hora atuais

console.log(currentDate.getFullYear()); // dessa forma ele só traz o ano 

console.log(currentDate.getMonth() + 1); // traz só o ano, porem ele conta de 0 a 11 por isso deve usar o +1 para mostrar o numero correspondente

console.log(currentDate.getDate()); // Mostra o dia do mês 

console.log(currentDate.getDay()); //  ele mostra o dia da semana porem conta de 0 a 6

console.log(currentDate.getHours()); // retorna as horas
console.log(currentDate.getMinutes()); // retorna os minutos
console.log(currentDate.getSeconds()); // retorna os segundos

let birthday = new Date(1996, 9, 28); // dessa forma a data especifica fica registrada

console.log(birthday);

let appointment = new Date(2026, 9, 28, 19, 30);

console.log(appointment); // ele retorna uma data especifica com um horario especifico 

let purchaseDate =  new Date(2025, 9, 5);

let day = String(purchaseDate.getDate()).padStart(2, '0'); // dessa forma define o numero de caracteres maximos =2 e se não houver dois caracteres originalmente ele preenche o primeiro caractere com 0
let month = String(purchaseDate.getMonth() + 1).padStart(2, '0');
let year = purchaseDate.getFullYear();

console.log(`${day}/${month}/${year}`); // Data formatada 5/10/2025

let purchaseDate2 = new Date(2025, 9, 5);

console.log(purchaseDate2.toLocaleString('pt-BR')); // Esse forma é mais simples para mostrar a data formatada para o padrão Brasil

let purchaseDate3 = new Date(2025, 5, 9);
let formattedDate = purchaseDate3.toLocaleString('pt-BR', {
    day: '2-digit', // dia com dois digitos 
    month: 'long', // nome completo do mes ('short' voltaria o nome abreviado do mes e '2-digit' voltaria o mes com dois digitos)
    year: 'numeric' //  ano numérico
});

console.log(formattedDate); // dessa forma ele retorna "09 de junho de 2025"

let date = new Date(2025, 9, 5);
date.setFullYear(2026); // alterou o ano da data para 2026, existe para cada um setMonth(), setDate(), setHours(), setMinutes(), setSeconds()
console.log(date.toLocaleDateString('pt-BR'));

let date1 = new Date(2025, 9, 5);
date1.setDate(16); // altera o dia
console.log(date1.toLocaleDateString('pt-BR'));

let date2 = new Date(2025, 0, 31);
date2.setDate(32); // automaticamente o javascript ajusta a data quando foge do padrão de datas
console.log(date2.toLocaleDateString('pt-BR'));

let firstDate = new Date(2025, 9, 5);
let secondDate = new Date(2025, 9, 20);
console.log(firstDate < secondDate); // pergunta se first é menor que second = verdadeiro 
console.log(firstDate > secondDate); // pergunta se first é maior que second = falso
console.log(firstDate.getTime() === secondDate.getTime()); // pergunta se as duas datas são iguais = falso
// o metodo getTime retorna o numero de milisegundos desde 1° de janeiro de 1970 até o instante representado pelo objeto

let expenseDate = new Date(2025, 9, 5);
let limitDate = new Date(2025, 9, 10);
if (expenseDate < limitDate) {
    console.log('A despesa aconteceu antes da data limite.')
} else {
    console.log('A despesa aconteceu na data limite ou depois dela.');
}

//Diferença entre duas datas
let startDate = new Date(2025, 9, 1);
let endDate = new Date(2025, 9, 11);
let difference = endDate.getTime() - startDate.getTime();
let days = difference / (1000 * 60 * 60 * 24); // respectivamente de milissegunos -> segundos -> minutos -> horas -> dias
console.log(days);