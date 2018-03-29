/*

Executando
tsc teste.ts
node teste.js

*/
// Imprimindo na tela
console.log("Texto");
// Definição de variáveis: var, let, const
var nome_variavel1 = 1;
var nome_variavel2 = 2;
var nome_variavel3 = 3;
// Definição de funções
function nome_funcao(parâmetros) {
    // instruções
}
// chamando a função
nome_funcao(1);
// Definição de variáveis (typescript)
//Inteiro
var age = 30;
//String
var nome = "Anderson";
//Interpretação de variáveis
var text = "Olá, seu nome é ${name} e sua idade é ${age}";
//Listas
// let lista1:Array<tipo_dados> = []
var lista2 = []; // padrão. não especifica o tipo de dados
var numeros = [1, 2, 3, 4, 5];
var lista3 = [1, "a", "b", "c"];
console.log(lista3[1]);
console.log(lista3[0]);
//Tuplas
var tupla = ["senha", "123"];
//enum
var DIA;
(function (DIA) {
    DIA[DIA["SEGUNDA"] = 0] = "SEGUNDA";
    DIA[DIA["TERCA"] = 1] = "TERCA";
    DIA[DIA["QUARTA"] = 2] = "QUARTA";
})(DIA || (DIA = {}));
console.log(DIA.SEGUNDA);
//enum DIA {SEGUNDA = 2, TERCA = 3, QUARTA = 4}
console.log(DIA[2]);
//Dicionários
var dicionario = { nome: "Anderson", idade: 23 };
console.log(dicionario.nome); // Anderson
var pessoa = {
    nome: "",
    idade: 0,
    setNome: function (nome) {
        this.nome = nome;
    }
};
// invocando a função
console.log(pessoa.setNome("Anderson"));
