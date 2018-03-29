// arrays
/*

os arrays podem armazenar dados de qualquer tipo (inteiros, strings, float)

Sintaxe

var array = [1,2,3,4,5];
var array1 = ['a', 'b', 'c'];
var array2 = ['a', 'b', 1,2,3];

*/

var gaveteiro = [10,20,30];

/*

- Para acessar uma posição do array

array[posicao]

console.log(array[0]);

- Para alterar um valor do array

array[posicao] = novo_valor

array[0] = 15;

console.log(array[0]);


*/

console.log(gaveteiro[0]); // 10
console.log(gaveteiro[1]); // 20


gaveteiro[0] = 15;
console.log(gaveteiro[0]); // 15

/*

Inserir elementos: 

nome_array.push(valor) --> insere no final do array
*/


gaveteiro.push(40);
console.log(gaveteiro[3]); // 40

/*
Remover elementos: pode ser feito de duas formas
nome_array.pop() --> remove no final do array
nome_array.shift() --> remove no início do array

*/

console.log(gaveteiro); // [15, 20, 30, 40]
gaveteiro.pop()
console.log(gaveteiro); // [15, 20, 30]
gaveteiro.shift()
console.log(gaveteiro); // [20, 30]

/*

Slice = fatiamento 
Exibe parte de um array

nome_array.slice(inicio, fim)

*/

var fatia = gaveteiro.slice(0,2); // pega as posições 0 e 1.
console.log(fatia); // [20,30]

console.log("Vetor: " + gaveteiro);
gaveteiro.push(40);
gaveteiro.push(50);
gaveteiro.push(60);
gaveteiro.push(70);
gaveteiro.push(80);
gaveteiro.push(90);
gaveteiro.push(100);

/*
Tamanho de uma lista: length

nome_array.length

*/

console.log("Tamanho do array: " + gaveteiro.length + "\n" + gaveteiro)

