import './App.css';
import useInterest from '@hooks/useInterest.ts';
import InvestInputForm from '@components/InvestInputForm/InvestInputForm.tsx';
import InvestResult from '@components/InvestResult/InvestResult.tsx';
import { ScrollDivContextProvider } from '@contexts/ScrollDivContext.tsx';

enum FREQUENCIES {
  DAILY = 365,
  WEEKLY = 52,
  MONTHLY = 12,
  YEARLY = 1,
}

function App() {
  const mercadoPago = useInterest({
    interestRate: 15,
    frequency: FREQUENCIES.DAILY,
    investLimit: 23000,
  });
  const klar = useInterest({ interestRate: 11.0, frequency: FREQUENCIES.DAILY });
  const nu = useInterest({ interestRate: 14.25, frequency: FREQUENCIES.DAILY });
  const bonddia = useInterest({ interestRate: 10.79, frequency: FREQUENCIES.DAILY });

  return (
    <ScrollDivContextProvider>
      <div className={'app-container'}>
        <h1>Calculadora de Inversiones</h1>
        <InvestInputForm />
        <InvestResult results={mercadoPago.result} title={'Mercado Pago (15%)'} />
        <InvestResult results={nu.result} title={'Nu (14.25%)'} />
        <InvestResult results={klar.result} title={'Klar (11%)'} />
        <InvestResult results={bonddia.result} title={'Bonddia (10.79%)'} />
        <div>
          <p>
            Calculadora de Inversiones creada por <a href={'https://porfi.dev'}>porfi.dev</a>
          </p>
          <p>Está calculadora es solo como referencia, no debe tomarse como sugerencia de inversión, el autor no tiene relación con las opciones financieras mostradas.</p>
          <p>v.0.1</p>
        </div>
      </div>
    </ScrollDivContextProvider>
  );
}

export default App;
