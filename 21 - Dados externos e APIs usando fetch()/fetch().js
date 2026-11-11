
// O fetch() é um recurso nativo do JavaScript utilizado para realizar requisições HTTP.

fetch('URL_DA_API') // Faz a requisição HTTP
    .then(response => { // Executa a ação quando a Promise é resolvida
        return response.json(); // Response: representa a resposta recebida  // .json(): converte o corpo da resposta JSON em dados JavaScript
    })
    .then(data => { // data: Contém os dados recebidos 
        console.log(data);
    })
    