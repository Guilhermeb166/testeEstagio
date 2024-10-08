const distribuidora = {
  estados: [
    { SP: 67836.43 },
    { RJ: 36678.66 },
    { MG: 29229.88 },
    { ES: 27165.48 },
    { outros: 19849.53 },
  ],
};

function calcularPercentual(faturamento) {
  faturamentoMensal = faturamento.estados.map(
    (estado) => Object.values(estado)[0]
  );
  valorTotal = faturamentoMensal.reduce(
    (acumulador, valor) => acumulador + valor,
    0
  );

  const percentuais = faturamento.estados.map((estado, index) => {
    const valorEstado = faturamentoMensal[index];
    return {
      estado: Object.keys(estado)[0],
      percentual: ((valorEstado / valorTotal) * 100).toFixed(2) + '%'
    };
  });
  return percentuais
}

console.log(calcularPercentual(distribuidora));
