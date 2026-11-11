
fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição!');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Ocorreu um erro', error);
    })

