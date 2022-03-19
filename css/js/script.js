// 1. Escreva um algoritmo que receba 2 valores. Some os valores e mostre o resultado na tela.
function somar() {
    // 1. ENTRADA
    // Declaração das variáveis e Atribuição de valores
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;

    // 2. PROCESSAMENTO
    // Cálculos e Validações
    const resultado = parseInt(valor1) + parseInt(valor2);

    // 3. SAÍDA
    // Mostra o resultado na tela
    document.getElementById('resultado1').value = resultado;
} 

<hr>

// Exercicio 2
function CalcularMedia{



<h3>2. Escreva um algoritmo que receba 3 notas. Calcule a média das notas e mostre na tela.</h3>

Media: input type="text" id="resultado2" disabled value="0" class="display"

<p>Nota 1:input type="number" id="nota1"</p>
<p>Nota 2:input type="number" id="nota2"</p>
<p>Nota 3:input type="number" id="nota3"</p>

<button onclick="calcularMedia()">Calcular Média</button>

}








// Exercício 3
function calcularDesconto() {
	// Declaração das variáveis
	const valorProduto = parseFloat(document.getElementById('valorProduto').value);
	const desconto = 10;
	
	// Calcula o desconto
	const novoValorProduto = valorProduto - valorProduto /100 * desconto;
	
	// Mostra o resultado (com duas casas decimais)
	document.getElementById('resultado3').value = novoValorProduto.toFixed(2);
}










// Exercício 4
function calcularDesconto2() {
	// Declaração das variáveis
	const valorProduto = parseFloat(document.getElementById('valorProduto2').value);
	const percentualDesconto = parseFloat(document.getElementById('percentualDesconto').value);
	
	// Calcula o desconto
	const novoValorProduto = valorProduto - valorProduto / 100 * percentualDesconto;
	
	// Mostra o resultado
	document.getElementById('resultado4').value = novoValorProduto.toFixed(2);

}










// Exercício 5
function inverterValores() {
	// Declaração das variáveis
	let valorA = document.getElementById('valorA').value;
	let valorB = document.getElementById('valorB').value;
	let aux;
	
	// Inverte os valores
	aux = valorA;
	valorA = valorB;
	valorB = aux;
	
	// Mostra o resultado
	document.getElementById('valorA').value = valorA;
	document.getElementById('valorB').value = valorB;
}










// Exercício 6
function calcularVendaPicoles() {
	// Declaração das variáveis
	const valorFruta = 2.5;
	const valorChocolate = 3.5;
	const valorRecheado = 4.5;
	
	// Recebe as quantidades informadas
	const quantidadeFruta = document.getElementById('quantidadeFruta').value;
	const quantidadeChocolate = document.getElementById('quantidadeChocolate').value;
	const quantidadeRecheado = document.getElementById('quantidadeRecheado').value;
	
	// Calcula as vendas
	const totalFruta = valorFruta * quantidadeFruta;
	const totalChocolate = valorChocolate * quantidadeChocolate;
	const totalRecheado = valorRecheado * quantidadeRecheado;
	const totalVendas = totalFruta + totalChocolate + totalRecheado;
	
	// Mostra o resultado
	document.getElementById('resultadoFruta').value = totalFruta.toFixed(2);
	document.getElementById('resultadoChocolate').value = totalChocolate.toFixed(2);
	document.getElementById('resultadoRecheado').value = totalRecheado.toFixed(2);
	document.getElementById('resultado6').value = totalVendas.toFixed(2);
}










// Exercício 7
function calcularParcelas() {
	// Declaração das variáveis
	const totalParcelas = document.getElementById('totalParcelas').value;
	const quantidadePagas = document.getElementById('quantidadePagas').value;
	const valorParcela = document.getElementById('valorParcela').value;
	
	// Calcula o saldo devedor
	const parcelasRestantes = totalParcelas - quantidadePagas;
	const saldoDevedor = parcelasRestantes * valorParcela;
	
	// Mostra o saldo devedor
	document.getElementById('saldoDevedor').innerHTML = `Saldo devedor: R$ ${saldoDevedor.toFixed(2)}`;
	document.getElementById('parcelasRestantes').innerHTML = `Parcelas restantes: ${parcelasRestantes}`;
}