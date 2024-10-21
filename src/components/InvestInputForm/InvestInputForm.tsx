import { ChangeEvent } from 'react';
import useUserInvest from '@hooks/useUserInvest.ts';
import './InvestInputForm.styles.scss';

const InvestInputForm = () => {
  const { updateValue, initialValue, yearsOfInvest } = useUserInvest();
  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: 'initial' | 'years') => {
    updateValue(Number(event.target.value), type);
  };

  return (
    <form className={'form-wrapper'}>
      <div className={'form-group'}>
        <label htmlFor={'initialValue'}>Capital Inicial</label>
        <input
          name={'initialValue'}
          id={'initialValue'}
          value={initialValue}
          onChange={(e) => handleChange(e, 'initial')}
        />
      </div>

      <div className={'form-group'}>
        <label htmlFor={'yearsOfInvest'}>Número de años</label>
        <input
          name={'yearsOfInvest'}
          id={'yearsOfInvest'}
          value={yearsOfInvest}
          onChange={(e) => handleChange(e, 'years')}
        />
      </div>
    </form>
  );
};

export default InvestInputForm;
