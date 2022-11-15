/* Programa para calcular o valor de uma viagem 

Você terá 3 variaveis. Sendo elas:
1 - Preço do combustivel;
2 - Gasto medio de combustivel do carro por km;
3 - Distancia em km da viagem;
*/

const precoCombustivel = 5.79;
const gastoMedio = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / gastoMedio;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));