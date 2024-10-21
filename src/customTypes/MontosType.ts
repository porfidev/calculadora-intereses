export type InnerMonto = {
  montoAnual: number;
  mensuales?: number[]
}

export type MontosType = {
  anuales?: InnerMonto[];
  mensuales?: number[];
  restoInvest?: number;
}
