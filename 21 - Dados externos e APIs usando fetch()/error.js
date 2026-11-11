fetch('https://jsonplaceholder.typicode.com/pos/1')
    .then(response => {
        if (!response.ok) {  // verifica se a resposta HTTP indica sucesso
            throw new Error('Erro na requisição!'); // lança um erro caso a resposta não seja bem-sucedida
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => { // captura erros ocorridos durante a operação, incluindo falhas de rede e erros lançados no processamento
        console.log('Ocorreu um erro:', error);
    });