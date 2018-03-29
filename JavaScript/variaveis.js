// definição de variáveis
// var nome_variavel = valor
// let nome_variavel = valor
// const nome_variavel = valor

/*

Regras para criação de variáveis

Case sensitive: Nome é diferente de nome
Caracteres válidos: não usar acentos nem espaços
Números: desde que precedidos de uma ou mais letras

*/

var site="globo.com"; // string
var idade=20; // inteiro
var pessoas=["A", "B", "C"]; //lista
var time={
	nome: "Corinthians",
	estado: "SP",
	ano_fundacao: 1910,
	cores: ["Preto", "Branco"],
};//dicionário

console.log("Hello world");

// tipos de dados
var num1 = 22;
var num2 = "22";

console.log(num1+num2); // retorna 2222
console.log(num1===num2); // false
console.log(typeof num1); //number
console.log(typeof num2); //string


var nome; //undefined: não recebeu nenhum valor
console.log(typeof nome); // undefined
console.log(nome===undefined); // true

// declarando variáveis em um único comando

var nome="Anderson", 
	idade=23,
	sexo="masculino",
	altura=1.70;


var pessoa="Gabriel";
var idade=25;