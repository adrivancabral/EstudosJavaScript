// Template Literals 
let nome = 'Adrivan';
let idade = 29;
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); // Usar a `` no lugar das '' permite facilitar ao escrever o código
// `Texto ${variavel} texto`

let descricao = 'combustivel';
let valor = 100;
console.log(`Despesa: ${descricao} - R$ ${valor}`);

let preco = 100;
let quantidade = 3;
console.log(`Total: R$ ${preco * quantidade}`); // Também pode ser colocado uma operação dentro de ${}

let idade1 = 29;
console.log(`Ano que vem você terá ${idade1 + 1} anos.`);

console.log('Nome: Adrivan\nIdade: 29\nCidade: Maricá'); // Sem template literal
console.log(`
Nome: Adrivan
Idade: 29
Cidade: Maricá    
`); // Com template literal
