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
    day: '2-digit',
    month: 'long',
    year: 'numeric'
});

console.log(formattedDate); // dessa forma ele retorna "09 de junho de 2025"
