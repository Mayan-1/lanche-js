const prompt = require("prompt-sync")();

class Lanche {
  constructor(codigo, nome, preco) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }

  getNome() {
    return this.nome;
  }

  setNome(valor) {
    this.nome = valor;
  }

  getCodigo() {
    return this.codigo;
  }

  getPreco() {
    return this.preco;
  }

  setPreco(valor) {
    this.preco = valor;
  }
}

let lanches = [
  new Lanche(1, "Cachorro Quente", 4.0),
  new Lanche(2, "X-salada", 4.5),
  new Lanche(3, "X-bacon", 5.0),
  new Lanche(4, "Torrada simples", 2.0),
  new Lanche(5, "Refrigerante", 1.5),
];

const codigo = parseInt(prompt("Digite o código do produto que você deseja: "));
const quantidade = parseInt(prompt("Agora digite a quantidade: "));

if (codigo < 1 || codigo > lanches.length) {
  console.log("Código de produto inválido!");
} else {
  const lancheSelecionado = lanches.find((x) => x.getCodigo() == codigo);
  const total = lancheSelecionado.getPreco() * quantidade;
  console.log("Total: R$ " + total.toFixed(2));
}
