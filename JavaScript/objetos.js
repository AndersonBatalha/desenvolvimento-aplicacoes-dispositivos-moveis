/*
Objetos: suportam uma coleção de valores. Cada item dessa coleção é uma propriedade
As propriedades são compostas por pares nome: valor
Método: quando a propriedade armazena uma função, ao invés de um valor.
Existem duas formas de criar objetos:
	- Notação literal
	- Função construtora
*/

/* Método 1 - Notação literal */

var pessoa = {
	nome: "Anderson",
	idade: 23,
	sexo: "Masculino",
	estado_civil: "Solteiro",
	info: function() {
		console.log("Nome: " + this.nome + "\nIdade: " + this.idade + "\nSexo: " + this.sexo + "\nEstado civil: " + this.estado_civil);
	} // usa-se a palavra reservada 'this' para acessar as variáveis dentro do objeto
};

pessoa.info() // nome_variavel.nome_metodo() 

/* Método 2: Função construtora */
// para criar um objeto, utiliza-se a notação 'new Object()'

var album = new Object() 
album.nome = "The Sun Sessions"
album.artista = "Elvis Presley"
album.dataLancamento = 1976
album.gravadora = "RCA"
album.genero = "Rock"
album.musicos = ["Elvis Presley (Voz, Violão e Guitarra)", "Scotty Moore (Guitarra)", "Bill Black (Baixo)", "Jimmie Lott (Bateria)", "Johnny Bernero (Bateria)"]
album.descricao = function() {
	console.log("\n\nNome: " + this.nome + "\nArtista: " + this.artista + "\nData de lançamento: " + this.dataLancamento + "\nGravadora: " + this.gravadora + "\nGênero: " + this.genero + "\nMúsicos: ");
	for (var musico in this.musicos) {
		console.log("\t" + this.musicos[musico]);
	}
}

album.descricao();

/* Acessar propriedades : pode ser feito de duas formas
nome_objeto.nome_propriedade
OU 
nome_objeto["nome_propriedade"]
*/

// retornam a mesma coisa
console.log(album.dataLancamento); // 1976
console.log(album["dataLancamento"]); // 1976

/* Acessar métodos : igual a acessar as propriedades
nome_objeto.nome_metodo()
OU 
nome_objeto["nome_metodo"]()
*/

// retornam a mesma coisa
album.descricao()
album["descricao"]()


/* Alterar propriedades: semelhante a acessar as proprieades

nome_objeto.nome_propriedade = novo_valor
OU
nome_objeto["nome_propriedade"] = novo_valor

*/

album.nome = "Peace in the Valley"
album.dataLancamento = 1957
album.descricao()

album.nome = "The Sun Sessions"
album.dataLancamento = 1976

/* Adicionar propriedades: mesma sintaxe de alterar propriedades
nome_objeto.nome_propriedade = novo_valor
OU
nome_objeto["nome_propriedade"] = novo_valor
*/

album.faixas = ["That's All Right Mama", "Blue Moon Of Kentucky", "I Don't Care If The Sun Don't Shine", "Good Rockin Tonight", "Milkcow Blues Boogie", "You're a Heartbreaker", "I'm Left, You're Right, She's Gone", "Baby Let's Play House", "Mistery Train", "I Forgot To Remember To Forget", "I'll Never Let You Go", "Trying To Get You", "I Love You Because", "Blue Moon", "Just Because"]

album.descricao = function() { // alterando o método para exibir o nome das faixas
	console.log("\n\nNome: " + this.nome + "\nArtista: " + this.artista + "\nData de lançamento: " + this.dataLancamento + "\nGravadora: " + this.gravadora + "\nGênero: " + this.genero + "\nMúsicos: ");
	for (var musico in this.musicos) {
		console.log("\t" + this.musicos[musico]);
	}
	console.log("Faixas: ");
	for (var musica in this.faixas) {
		console.log("\t" + this.faixas[musica]);
	}
}

album.descricao()


/* Deletando métodos ou propriedades
Para apagar um método ou propriedade, utiliza-se a palavra 'delete'

delete nome_objeto.nome_propriedade
OU
delete nome_objeto.nome_metodo

*/

// typeof : exibe o tipo de dados de uma variável
console.log(typeof album.nome) // string
delete album.nome
console.log(album.nome) // undefined
album.descricao()

// album.nome = "The Sun Sessions"