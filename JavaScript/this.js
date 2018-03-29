let sanduiche = {
	pao: "integral",
	queijo: "suíço",

	preparar: function() {
		return "\nPão " + this.pao + " com queijo " + this.queijo;
	}
	servir: function() {
		setTimeout(function() {
			console.log(this.preparar());
		}, 3000);
	}
}

console.log(sanduiche.pao);
console.log(sanduiche.queijo);

console.log(sanduiche.servir())