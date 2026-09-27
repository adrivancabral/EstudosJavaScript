//1# STRING "TEXTO"
let nome = 'Adrivan'; /* String (Texto) */
console.log(typeof nome); /* mostra string (texto)*/

let idade = '29';
console.log(typeof idade);

//2# NUMBER
let idade2 = 29; /* Number */
console.log(typeof idade2) /* mostra number */

let preco = 50;
let quantidade = 3;

let total = preco * quantidade;
console.log(total); /* mostra 150, 50 * 3 */

let item1 = '50'; /*Teste de erro por conta de tipo string*/
let item2 = 50; 
let total2 = item1 + item2;
console.log(total2); /* Ele junta o texto "50" com o numero 50 e fica 5050 (Erro por conta das aspas no primeiro 50 do item1)*/

// teste de comentario 
//3# BOOLEAN
let temDinheiro = true; // Boolean: Recebe verdadeiro ou falso. 
console.log(temDinheiro); // Mostra true 

let idade3 = 17;
let maiorIdade = idade3 >= 18;
console.log(maiorIdade) // Mostra falso pq 17 não é maior nem igual a 18 

let saldo = 50;
let podeComprar = saldo >= 40;
console.log(podeComprar); // Mostra True pq vc tem 50 de saldo e o custo é 40 

//4# ARRAY : Lista de valores
let carros = ['HB20','Corola','Civic'];
let numeros = [10,20,30,40];
let nomes = ['Carlos','Larissa','Alberto'];
console.log(carros, numeros, nomes); // Mostra todos os carros, numeros e nomes
console.log(numeros[1]); //acessa o valor através do indice, o indice começa em [0]
carros[1] = 'Elantra'; // Substitui o carro q estava na posição do indice 1
console.log(carros);

//5# Object : Ele guarda varias informações relacionadas
let pessoa = {
    nome: 'Arnaldo',
    idade: 55,
    cidade: "Friburgo"
};
console.log(pessoa); // Acessa todas as informaçoes 
console.log(pessoa.idade); // Acessa somente a informação que foi pedida
console.log(pessoa['idade']); // faz a mesma função da opção anterior

//6# Array + Object
let gastos = [ // Array Gastos e Abre o Object [{ }]
    {
        descricao: "Combustível",
        valor: 100
    },
    {
        descricao: "Mercado",
        valor: 250
    },
    {
        descricao: "Internet",
        valor: 100
    }
];
console.log(gastos[1]); // Mostra a informaçao que foi guardada no indice 1
console.log(gastos[2].valor); // Mostra somente o valor da informaçao guardada no indice 2, sempre lembrar q o indice começa em  0

//7# Null : Ausencia intencional de valor 
let usuarioSelecionado = null;
console.log(usuarioSelecionado); // Mostra null pois ainda nao tem usuario selecionado
usuarioSelecionado = "Sabrina"; // Define um nome de usuario
console.log(usuarioSelecionado); // Mostra o novo nome de usuario que foi definido

//8# Undefined: Valor não definido.
let nome4;
console.log(nome4); // Mostra "Undefined"

let pessoa3 = {
    nome: 'George'
};
console.log(pessoa3.idade); // tambem mostra "undefined" pois nao tem idade no objeto

// Undefined nao foi definido 
//null foi definido como sem valor de proposito mas alguma hora recebera um valor