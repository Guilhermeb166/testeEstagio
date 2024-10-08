const faturamentoMensal = {
  faturamentoDiario: [
    { dia: 1, valor: 200 },
    { dia: 2, valor: 0 },
    { dia: 3, valor: 300 },
    { dia: 4, valor: 0 },
    { dia: 5, valor: 500 },
    { dia: 6, valor: 0 },
    { dia: 7, valor: 0 },
    { dia: 8, valor: 400 },
    { dia: 9, valor: 0 },
    { dia: 10, valor: 600 },
    { dia: 11, valor: 0 },
    { dia: 12, valor: 0 },
    { dia: 13, valor: 700 },
    { dia: 14, valor: 0 },
    { dia: 15, valor: 0 },
    { dia: 16, valor: 200 },
    { dia: 17, valor: 100 },
    { dia: 18, valor: 0 },
    { dia: 19, valor: 500 },
    { dia: 20, valor: 0 },
    { dia: 21, valor: 0 },
    { dia: 22, valor: 800 },
    { dia: 23, valor: 900 },
    { dia: 24, valor: 0 },
    { dia: 25, valor: 0 },
    { dia: 26, valor: 1000 },
    { dia: 27, valor: 0 },
    { dia: 28, valor: 0 },
    { dia: 29, valor: 0 },
    { dia: 30, valor: 600 },
  ],
};
function calcularFaturamento(faturamento) {
  const diasComFaturamento = faturamento.faturamentoDiario.filter((dia)=> dia.valor > 0).map((dia) => dia.valor);

  const menorFaturamento = Math.min(...diasComFaturamento);
  const maiorFaturamento = Math.max(...diasComFaturamento);

  const somaFaturamento = diasComFaturamento.reduce(
    (acumulador, valor) => acumulador + valor,
    0
  );
  const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

  const diasAcimaMedia = diasComFaturamento.filter(
    (valor) => valor > mediaFaturamento
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaMedia,
  };
}

const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor valor de faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior valor de faturamento: ${resultado.maiorFaturamento}`);
console.log(
  `Número de dias com faturamento acima da média: ${resultado.diasAcimaMedia}`
);
