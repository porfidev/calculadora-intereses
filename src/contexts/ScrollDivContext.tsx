import { createContext, ReactNode, useContext, useState } from 'react';

type ScrollDivContextType = {
  scrollPosition: number;
  setScrollPosition: (scrollPosition: number) => void;
};

const ScrollDivContext = createContext<ScrollDivContextType>({
  scrollPosition: 0,
  setScrollPosition: (scrollPosition: number) => {
    return scrollPosition;
  },
});

const useScrollDivContext = () => {
  const context = useContext(ScrollDivContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

type ScrollDivContextProps = {
  children: ReactNode;
};

const ScrollDivContextProvider = ({ children }: ScrollDivContextProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <ScrollDivContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </ScrollDivContext.Provider>
  );
};

export { ScrollDivContextProvider, ScrollDivContext, useScrollDivContext };
