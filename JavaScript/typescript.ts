/*

Executando
tsc teste.ts
node teste.js

*/

// Imprimindo na tela
console.log("Texto");

// Definição de variáveis: var, let, const
var nome_variavel1 = 1;
let nome_variavel2 = 2;
const nome_variavel3 = 3;

// Definição de funções
function nome_funcao(parâmetros) {
	// instruções
}
// chamando a função
nome_funcao(1);

// Definição de variáveis (typescript)
//Inteiro
let age:number = 30

//String
let nome: string = "Anderson"

//Interpretação de variáveis
let text:string = "Olá, seu nome é ${name} e sua idade é ${age}"

//Listas
// let lista1:Array<tipo_dados> = []
let lista2:any = [] // padrão. não especifica o tipo de dados
let numeros:Array<number> = [1,2,3,4,5]
let lista3:Array<string | number> = [1, "a", "b", "c"]
console.log(<string>lista3[1])
console.log(lista3[0] as string)

//Tuplas
let tupla:[string, string] = ["senha", "123"]

//enum
enum DIA {SEGUNDA, TERCA, QUARTA}
console.log(DIA.SEGUNDA)

//enum DIA {SEGUNDA = 2, TERCA = 3, QUARTA = 4}
console.log(DIA[2])

//Dicionários
let dicionario:any = {nome: "Anderson", idade: 23}
console.log(dicionario.nome) // Anderson

let pessoa = {
	nome : "",
	idade : 0,
	setNome : function(nome:string) {
		this.nome = nome;
		return this.nome;
	},
}

// invocando a função
console.log(pessoa.setNome("Anderson"))
