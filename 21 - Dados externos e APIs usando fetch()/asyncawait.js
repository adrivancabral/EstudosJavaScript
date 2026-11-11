async function buscarDados() { // async: declara uma função assícrona
    try { // executa o código que pode apresentar erro
        const response = await fetch( // Await: espera uma função assícrona terminar antes de continuar naquela função
            'https://jsonplaceholder.typicode.com/posts/1'
        );
        if (!response.ok) {
            throw new Error('Erro na requisição!');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) { // catch: captura o erro 
        console.log('Erro:', error);
    }
}
buscarDados();