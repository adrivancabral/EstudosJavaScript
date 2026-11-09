function obterDespesas () { // função 
    return new Promise(function(resolve, reject) { // retorna uma promessa
        setTimeout(function() { // simula uma consulta que demora 3 segundos
            let despesas = [
                { nome: 'Combústivel', quantidade: 150},
                { nome: 'Mercado', quantidade: 200},
                { nome: 'Internet', quantidade: 100}
            ];
            resolve(despesas);
        }, 3000);
    });
}
obterDespesas()
    .then(function(data) { 
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });