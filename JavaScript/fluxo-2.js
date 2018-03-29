function calculadora(operacao, valor1, valor2) {
	switch(operacao) {
		case "soma":
			return valor1 + valor2;
		case "subtracao":
			return valor1 - valor2;
		case "divisao":
			return valor1 / valor2;
		case "multiplicacao":
			return valor1 * valor2;
		case "resto":
			return valor1 % valor;
	}
}

console.log(calculadora("soma", 10, 20));

// callback

function soma(num1, num2) {
	return num1 + num2;
}

function subtracao(num1, num2) {
	return num1 - num2;
}

function calculadora(callback, valor1, valor2) {
	return callback(valor1, valor2)
}

console.log(calculadora(soma, 10, 20));
console.log(calculadora(subtracao, 10, 20));
