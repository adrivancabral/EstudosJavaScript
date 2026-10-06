// # IF (se)
let age = 18;
if (age >= 18) {
    console.log('Você é maior de idade.'); // (codigo executado se a condição for true) se a idade for maior ou igual a 18 a mensagem será mostrada, automaticamente nenhuma mensagem sera mostra se nao for 
}

let money = 300;
if (money >= 200) {
    console.log('Você pode comprar');
}

// # else (senão)
let money1 = 1000;
if (money1 >= 350) {
    console.log('Você pode comprar');
} else {
    console.log('Você não pode comprar'); // Se a condição for false é executado o "else"
}

// Se uma condição for verdadeira executa o if e se for falsa executa o else

// # else if (senao se)
let score = 10;
if (score >= 7){
    console.log('Aprovado');
} else if (score >= 5) {
    console.log('Recuperação'); // Quando tem mais de duas opções é usado dessa forma, a leitura é feita de cima para baixo e isso precisa de atenção
} else {
    console.log('Reprovado');
}

let agee = 29;
if (agee < 12){
    console.log('Criança');
} else if (agee < 18) {
    console.log('Adolescente');
} else if (agee < 60) {
    console.log('Adulto');
} else {
    console.log('Idoso');
}

let age2 = 18;
let money2 = 100;
if (age2 >= 18 && money2 >= 50) { // As duas condições precisam ser True
    console.log('Pode comprar');
} else {
    console.log('Não pode comprar');
}

let day = 'saturday';
if (day === 'saturday' || day === 'sunday') { // Só uma das condições precisa ser true
    console.log('É fim de semana');
}

let raining = false;
if (!raining) { // Inverte de false para true
    console.log('Pode sair.');
}

