import { useContext } from 'react';
import { UserInvestContext } from '@contexts/UserInvestContext.tsx';

const useUserInvest = () => {
  const {
    initialValue,
    yearsOfInvest,
    setInitialValue,
    setYearsOfInvest,
  } = useContext(UserInvestContext);

  const updateValue = (value: number, type: 'initial' | 'years') => {
    if (type === 'years') {
      return setYearsOfInvest(value);
    }

    return setInitialValue(value);
  };

  return {
    initialValue,
    yearsOfInvest,
    updateValue,
  };
};

export default useUserInvest;
