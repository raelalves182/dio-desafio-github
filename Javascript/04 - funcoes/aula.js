function maiorDeIdade(idade) {
  if (idade >= 18) {
    console.log('Sou maior de idade');
  } else {
    console.log('Sou menor de idade');
  }
}

maiorDeIdade(18);

// Separando em funções
function aplicarDesconto(valor, desconto) {
  return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
  return valor + (valor * (juros / 100))
}

function main() {
  const precoEtiqueta = 100;
  const formaDePagar = 4;

  if (formaDePagar === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
  } else if (formaDePagar === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
  } else if (formaDePagar === 3) {
    console.log(precoEtiqueta);
  } else {
    console.log(aplicarJuros(precoEtiqueta, 10))
  }
}

main();
