// loops: for, for in, foreach, while, do while

/*

FOR: geralmente é usado para contadores

Sintaxe:

for (inicializacao, condicao, incremento) {
	codigo
}

*/

for (var i = 0; i < 25; i++) {
	console.log(i)
}

/*

FOR IN

Sintaxe:

for (var <variavel> in <lista ou objeto>) {
	codigo
}

*/

console.log("\nFOR\n")
times = ["Vasco", "Flamengo", "Botafogo", "Fluminense", "Santos", "São Paulo", "Palmeiras", "Corinthians"];
for (var index in times) {
	console.log(times[index]);
}

/*

FOREACH

Sintaxe:

for (var <variavel> in <lista ou objeto>) {
	codigo
}

*/

console.log("\nFOREACH\n");
times.forEach(function(time) {
	console.log(time);
});

/*

WHILE: é usado até que uma condição mude

Sintaxe:

while (condicao) {
	<instrucoes>
}

*/

console.log("\nWHILE\n")
var contador = 0;

while (contador < 10) {
	console.log(contador);
	contador++;
}

var condicao = true;
while (condicao == true) {
	console.log("Verdadeiro");
	condicao = false;
}


/*

DO WHILE: primeiro executa o que está dentro do laço, depois verifica a condicao

Sintaxe:

do {
	<instrucoes>
} while (condicao);

*/

console.log("\nDO WHILE\n");
var a = 3;
do {
	a++;
	console.log(a);
} while (a <= 5);

