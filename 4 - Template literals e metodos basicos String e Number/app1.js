// Métodos de String

// toUpperCase()
let nome = 'Adrivan'
console.log(nome.toUpperCase()); // Transforma tudo em maiúsculas.

// toLowercase()
let nome1 = 'Lenny'
console.log(nome1.toLowerCase()); // Tranforma tudo em minúsculas.

// length
let nameUser = 'Lisa';
console.log(nameUser.length); // Mostra a quantidade de caracteres que tem no texto

// trim()
let nameUser1 = '    Adrivan    ';
console.log(nameUser1.trim()); // Remove os espaços antes e depois do texto

// Includes()
let phrase = 'Estou estudando JavaScript';
console.log(phrase.includes('JavaScript')); // Verifica se o texto existe dentro da String , Ele mostra como True ou False

// startsWith()
let nameUser2 = 'Adrivan';
console.log(nameUser2.startsWith('Ad')); // Verifica se o texto começa com a sequencia determinada

// endsWith()
let nameUser3 = 'Adrivan';
console.log(nameUser3.endsWith('an')); // Verifica se o texto termina com a sequencia determinada

// replace()
let phrase1 = "Eu estudo PHP";
let newPhrase1 = phrase1.replace('PHP', 'JavaScript'); // Substitui o trecho selecionado por um novo trecho
console.log(newPhrase1);

