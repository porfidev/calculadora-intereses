import { useEffect, useState } from 'react';
import useUserInvest from '@hooks/useUserInvest.ts';
import calculateInterest from '@utils/calculateInterest.ts';
import { MontosType } from '@customTypes/MontosType.ts';

type useInterestProps = {
  interestRate?: number;
  frequency: number;
  investLimit?: number;
};

const useInterest = ({ interestRate = 15, frequency = 1, investLimit }: useInterestProps) => {
  const { initialValue, yearsOfInvest } = useUserInvest();

  const [currentInterestRate, setCurrentInterestRate] = useState<number>(interestRate);
  const [currentFrequency, setCurrentFrequency] = useState<number>(frequency);
  const [finalInvest, setFinalInvest] = useState<MontosType>({});

  useEffect(() => {
    if (!initialValue || !yearsOfInvest) {
      return;
    }

    const montoFinal = calculateInterest(
      investLimit && investLimit < initialValue ? investLimit : initialValue,
      currentInterestRate,
      currentFrequency,
      yearsOfInvest
    );
    setFinalInvest(
      investLimit && investLimit < initialValue
        ? { ...montoFinal, restoInvest: initialValue - investLimit }
        : montoFinal
    );
  }, [initialValue, currentInterestRate, yearsOfInvest, currentFrequency, investLimit]);

  return {
    setCurrentInterestRate,
    setCurrentFrequency,
    result: finalInvest,
  };
};

export default useInterest;
