
// Criando referências para os elementos HTML
const form = document.querySelector('#form-veiculo');
const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const ano = document.querySelector('#ano');
const placa = document.querySelector('#placa');
const cor = document.querySelector('#cor');
const quilometragem = document.querySelector('#quilometragem');
const listaVeiculos = document.querySelector('#lista-veiculos');
const mensagem = document.querySelector('#mensagem');
const botaoEnviar = document.querySelector('#botao-enviar');
const botaoCancelar = document.querySelector('#botao-cancelar');
// Capturar dados do formulário 
let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [] // localStorage.getItem('veiculos'): Procura os dados armazenados. JSON.parse(): converte o texto JSON novamente em array e objetos JavaScript. || []: se não houver dados armazenados, inicia um array vazio. 
let indiceEdicao = null; // guarda a posição do veículo que o usuário escolheu
form.addEventListener('submit', (event) => { // AddEventListener: Adiciona um ouvinte de eventos. Submit: identifica o envio do formulário. Event: Representa o evento que aconteceu
    event.preventDefault(); // Impede o comportamento padrão do formulário que é recarregar a página
    const dadosVeiculo = {
        marca: marca.value,
        modelo: modelo.value,
        ano: Number(ano.value),
        placa: placa.value,
        cor: cor.value,
        quilometragem: Number(quilometragem.value) 
    };

    if (indiceEdicao !== null) { // Se indiceEdicao tiver um número, estamos editando
        veiculos[indiceEdicao] = dadosVeiculo; // substitui o objeto naquela posição
        indiceEdicao = null; // se indiceEdicao foir null, estamos fazendo um cadastro novo
    } else {
        veiculos.push(dadosVeiculo);
    }

    salvarVeiculos();
    renderizarVeiculos();
    cancelarEdicao();
    console.log(veiculos);
    console.log('Formulário enviado!');
});
function renderizarVeiculos () {
    listaVeiculos.innerHTML = ''; // Limpa o conteúdo atual da tabela antes de desenhar novamente os veículos
    veiculos.forEach((veiculo, indice) => { // percorre todos os elementos do array, a variável veículo aprensenta o objeto atual durante cada repetição
        const linha = document.createElement('tr'); // Cria uma nova linha HTML para tabela 
        // linha.innerHTML: insere as células HTML dentro da linha
        linha.innerHTML = ` 
            <td>${veiculo.marca}</td>
            <td>${veiculo.modelo}</td>
            <td>${veiculo.ano}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.cor}</td>
            <td>${veiculo.quilometragem}</td>
            <td>
                <button class="botao-editar" type="button">Editar</button>
                <button class="botao-excluir" type="button">Excluir</button>
            </td>
        `;
        const botaoExcluir = linha.querySelector('.botao-excluir');
        const botaoEditar = linha.querySelector('.botao-editar');

        botaoExcluir.addEventListener('click', () => {
            const confirmar = confirm('Deseja realmente excluir este veículo?'); // Confirm: pergunta se o usuário deseja excluir
            if (confirmar) { // permite executar a exclusão
                veiculos = veiculos.filter((veiculo, posicao) => { // o filter() percorre o array e mantém somente os veículos cuja posição seja diferente daquele do botão clicado
                    return posicao !== indice;
                });
                salvarVeiculos();  // Atualiza os dados armazenados no navegador
                renderizarVeiculos(); // Desenha novamente a tabela, agora sem o veículo excluído
            }
        });

        botaoEditar.addEventListener('click', () => {
            indiceEdicao = indice;

            marca.value = veiculo.marca;
            modelo.value = veiculo.modelo;
            ano.value = veiculo.ano;
            placa.value = veiculo.placa;
            cor.value = veiculo.cor;
            quilometragem.value = veiculo.quilometragem;

            botaoEnviar.textContent = 'Salvar Alterações';
            botaoCancelar.hidden = false;
        });

        listaVeiculos.appendChild(linha); // Adiciona a linha criada dentro do elemento tbody
    });
}

function cancelarEdicao() {
    indiceEdicao = null;
    form.reset();
    botaoEnviar.textContent = 'Cadastrar veículo'
    botaoCancelar.hidden = true;
}
botaoCancelar.addEventListener('click', cancelarEdicao);

function salvarVeiculos() {
    localStorage.setItem('veiculos', JSON.stringify(veiculos));  //localStorage.setitem(): Salva uma informação. 'veiculos' é a chave que identifica os dados armazenados. JSON.stringify(veiculos): transoforma nosso array em uma string JSON
}
renderizarVeiculos();