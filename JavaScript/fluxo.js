function a() {
  console.log("A");
}
function b() {
  console.log("B");
  setTimeout(function() { // simula uma leitura de arquivo
  	console.log("leu do arquivo"); // setTimeout - parâmetros: função e tempo a executar (em milissegundos)
  }, 2000);
}
function c() {
  console.log("C");
}
a();
b();
c();

function lerArquivo(callback) {
  setTimeout(function() { // simula uma leitura de arquivo
  	let conteudo = "Lorem Ipsum";
  	//callback(conteudo);
  }, 2000);
}
let mostrarTela = function(conteudo) {
  console.log(conteudo);
}

lerArquivo();
mostrarTela();
