/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoViagem(distancia, precoCombustivel) {
    return distancia * this.gastoMedioPorKm * precoCombustivel;
  }
}

const uno = new Carro('Fiat', 'Vermelho', 1/12);
const palio = new Carro('Palio', 'Azul', 1/10);
console.log(uno.calcularGastoViagem(70, 5).toFixed(2));
console.log(palio.calcularGastoViagem(70, 5).toFixed(2));

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  // metodo
  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc() {
    const imc = this.calcularImc();

    if (imc < 18.5) {
      return ('abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
      return ('peso normal');
    } else if (imc >= 25 && imc < 30) {
      return ('acima do peso');
    } else if (imc => 30 && imc < 40) {
      return ('obeso');
    } else {
      return ('obesidade grave');
    }
  }
}

const jose = new Pessoa('Jose', 70, 1.79);
const isaac = new Pessoa('Isaac', 65, 1.60);
console.log(jose.classificarImc());
console.log(isaac.classificarImc());