import { MontosType } from '@customTypes/MontosType.ts';

export default function calculateInterest(
  initialValue: number,
  interestRate: number,
  frequency: number,
  yearsOfInvest: number
) {
  const interestDecimal = interestRate / 100;
  const montos: MontosType = {
    anuales: [],
  };

  for (let currentYear = 1; currentYear <= yearsOfInvest; currentYear++) {
    const montoAnual =
      initialValue * Math.pow(1 + interestDecimal / frequency, frequency * currentYear);

    const montosMensuales = [];
    for (let mes = 1; mes <= 12; mes++) {
      const periodo = (currentYear - 1) * 12 + mes;
      const montoMensual =
        initialValue * Math.pow(1 + interestDecimal / frequency, frequency * (periodo / 12));
      montosMensuales.push(montoMensual);
    }

    montos.anuales?.push({ montoAnual: montoAnual, mensuales: montosMensuales });
  }

  return montos;
}
