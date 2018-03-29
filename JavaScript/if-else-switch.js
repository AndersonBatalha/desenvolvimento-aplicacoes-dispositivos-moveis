// Controle de fluxo: if, else, switch

/*
IF

if (condicao) {
	codigo
}

ELSE

if (condicao) {
	codigo
}
else {
	codigo
}

*/


var nome="Anderson";
if (nome === "Anderson") {
	console.log(nome);
}
else {
	console.log("Outro nome");
}


/*

SWITCH: testa várias condições

switch (variavel) {
	case condicao1:
		<instrucoes>
		break;
	case condicao2:
		<instrucoes>
		break;
	case condicao3:
		<instrucoes>
		break;
	case condicaoN:
		<instrucoes>
		break;
	default: 
		<instrucoes>
		break;
}

*/

var estado_civil = "S";
switch (estado_civil) {
	case "C":
		console.log("Casado");
		break;
	case "D":
		console.log("Divorciado");
		break;
	default:
		console.log("Solteiro");
		break;

}