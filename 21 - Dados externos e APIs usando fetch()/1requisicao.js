fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })

// Recebemos um objeto JavaScript com informações que estavam em outro servidor