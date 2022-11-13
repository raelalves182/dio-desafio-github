// Estrutura condicional

const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
  console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
  console.log('Sim');
} else {
  console.log('Não');
}

// Desafio 

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoMedio = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaKm / gastoMedio;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;

  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;

  console.log(valorGasto.toFixed(2));
}