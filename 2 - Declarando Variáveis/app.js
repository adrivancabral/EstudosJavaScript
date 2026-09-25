const elementoPrecoBase = document.getElementById("preco-base")
const elementoPrecoFinal = document.getElementById("preco-final")
const botaoCalcular = document.getElementById("btn-calcular")
const TAXA_IMPOSTO = 0.23;

botaoCalcular.addEventListener("click", () => {
    const precoInicial = Number(elementoPrecoBase.textContent);
    let valorCalculado = precoInicial + (precoInicial * TAXA_IMPOSTO);
    elementoPrecoFinal.textContent = valorCalculado.toFixed(2);
});