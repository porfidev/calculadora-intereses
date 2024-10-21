import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type UserInvestContextType = {
  initialValue?: number;
  yearsOfInvest?: number;
  setInitialValue: Dispatch<SetStateAction<number>>;
  setYearsOfInvest: Dispatch<SetStateAction<number>>;
};

const UserInvestContext = createContext<UserInvestContextType>({
  setInitialValue: () => {},
  setYearsOfInvest: () => {},
});

type UserInvestContextProps = {
  children: ReactNode;
};

function UserInvestProvider({ children }: UserInvestContextProps) {
  const [initialValue, setInitialValue] = useState<number>(100);
  const [yearsOfInvest, setYearsOfInvest] = useState<number>(1);

  return (
    <UserInvestContext.Provider
      value={{ initialValue, setInitialValue, yearsOfInvest, setYearsOfInvest }}
    >
      {children}
    </UserInvestContext.Provider>
  );
}

export { UserInvestProvider, UserInvestContext };
