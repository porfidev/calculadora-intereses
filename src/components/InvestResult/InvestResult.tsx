import { ReactNode, useEffect, useRef } from 'react';
import { MontosType } from '@customTypes/MontosType.ts';
import './InvestResult.styles.scss';
import { useScrollDivContext } from '@contexts/ScrollDivContext.tsx';

type InvestResultProps = {
  results: MontosType;
  title: string;
};

type DivScrollSyncProps = {
  children: ReactNode;
};

const DivScrollSync = ({ children }: DivScrollSyncProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { setScrollPosition, scrollPosition } = useScrollDivContext();

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    if (divRef.current) {
      setScrollPosition(divRef.current.scrollLeft);
    }
  };
  return (
    <div className={'year-wrapper'} ref={divRef} onScroll={handleScroll}>
      {children}
    </div>
  );
};

const InvestResult = ({ results, title }: InvestResultProps) => {
  return (
    <div className={'invest-result-wrapper'}>
      <h1>{title}</h1>

      {results.anuales?.map((year, index) => (
        <DivScrollSync key={index}>
          {year.mensuales?.map((month, index) => (
            <div className={'months-result-wrapper'} key={month + index}>
              <div className={'month'}>
                <span>{`mes ${index + 1}`}</span>
              </div>
              <div className={'month-quantity'}>
                <span key={`mensual-${index}`}>$ {month.toFixed(2)}</span>
              </div>
            </div>
          ))}
          <div className={'year-result-wrapper'}>
            <div className={'year'}>
              <span>{`año ${index + 1}`}</span>
            </div>
            <div className={'year-quantity'}>
              <span key={`anual-${index}`}>$ {year.montoAnual.toFixed(2)}</span>
            </div>
          </div>
        </DivScrollSync>
      ))}

      {results.restoInvest && <p>Resto de inversion {results.restoInvest}</p>}
    </div>
  );
};

export default InvestResult;
