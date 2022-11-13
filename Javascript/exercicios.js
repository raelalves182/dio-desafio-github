/* 
1) Faça um algoritimo que dado as 2 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

  Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const notaUm = 8;
const notaDois = 7;
const notaTres = 7;

const mediaGeral = (notaUm + notaDois + notaTres) / 3;
console.log(mediaGeral.toFixed(2));

if (mediaGeral < 5) {
  console.log('reprovação')
} else if (mediaGeral >= 5 && mediaGeral <= 7) {
  console.log('recuperação')
} else {
  console.log('Aprovado')
}

/* 
2) o IMC - Indice de Massa Corporal é um critério da Organização Mundial de saúde para dar uma indicação sobre a condição de peso de uma pessoa.

  Formula do IMC:
  IMC = peso / (altura * altura)

  Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5, abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave;
*/

const peso = 72;
const altura = 1.55;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
  console.log('abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
  console.log('peso normal')
} else if (imc >= 25 && imc < 30) {
  console.log('acima do peso')
} else if (imc => 30 && imc < 40) {
  console.log('obeso')
} else {
  console.log('obesidade grave')
}


console.log(imc.toFixed(2));