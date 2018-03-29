// Funções

/*

Definição de funções

function nome_funcao (argumentos) {
	instruções
}

Obs: argumentos são opcionais na função

Invocando a função
nome_funcao()

*/


/*
Funções do JavaScript
	open() : abre janelas pop-up
	parseInt() : converte string para inteiro
	encodeURL() : codifica uma cadeia de caracteres em um URL
*/

function soma(valor1, valor2) { // função com argumentos
	console.log(valor1 + valor2);
}

soma(4, 5);


function exibeMsg() { // função sem argumentos
	console.log("Olá!");
}
exibeMsg()

function calcular(operacao, num1, num2) {
	switch(operacao) {
		case "soma": 
			return num1 + num2;
		case "subtracao": 
			return num1 - num2;
		case "mult": 
			return num1 * num2;
		case "divisao": 
			return num1 / num2;
		case "resto": 
			return num1 % num2;
	}	
}

console.log(calcular("resto", 10, 5)) // imprime o resultado da função