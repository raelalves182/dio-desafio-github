const { gets, print } = require('./funcoes-auxiliares');
/*

  Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
  Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

  dados de entrada:
  5
  50
  10
  98
  23

  saída:
  98

*/

/*
  const numerosSorteados = [];

  for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado)
  }

  let maiorValor = 0;

  for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
      maiorValor = numerosSorteado;
    }
  }
*/
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numerosSorteado = gets();
  if (numerosSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numerosSorteado;
  }
}

print(maiorValorEncontrado);
