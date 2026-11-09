// Código sícrono: Executa as instruções em sequencia. uma operação precisa terminar para que outra comece

console.log('primeiro');
console.log('segundo');
console.log('teceiro');

// Código assícrono: permite iniciar uma operação que levará algum tempo e continuar executando outras tarefas enquanto aguarda sua conclusão

console.log('primeiro');
setTimeout(function() {
    console.log('segundo');
}, 1000); // função programada para ser executada após 1 segundo
console.log('terceiro'); // a função foi agendada e por isso a ordem de execução foi: primeiro -> terceiro -> segundo

// Callbacks: Uma função passada como argumento para outra função, para ser executada em determinado momento.

function digaOla(nome) { // Uma função que recebe um nome
    console.log(`Olá, ${nome}!`); 
}
function registreUsuario(callback) { // Recebe outra função como parâmetro 
    let nome = 'Adrivan';
    callback(nome); // Executa a função recebida, passando o nome como argumento
}

registreUsuario(digaOla); // Entrega a função digaOla para ser executada posteriormente 

// callback em uma operação assícrona 

function tarefaConcluida() {
    console.log('Tarefa concluída!');
}
console.log('Iniciando tarefa...');
setTimeout(tarefaConcluida, 2000); // funciona como um callback, será executado depois do tempo programado
console.log('Executando outras tarefas...');

// Promises: Promessas de que algo será concluído 

let tarefa = new Promise(function(resolve, reject) { // cria uma nova promessa
    let sucesso = true; // variável criada para simular o resultado 
    if (sucesso) {
        resolve('Operação concluída!'); // informa que a operação foi concluída com sucesso 
    } else {
        reject('Ocorreu um erro!'); // informa que a operação falhou 
    }
});
tarefa 
    .then(function(result) { // executa quando a promessa é resolvida 
        console.log(result);
    })
    .catch(function(error) { // executa quando a promessa é rejeitada 
        console.log(error);
    });