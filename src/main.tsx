import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'normalize.css';
import '@styles/colors.scss';
import '@fontsource-variable/nunito-sans';
import { UserInvestProvider } from '@contexts/UserInvestContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserInvestProvider>
      <App />
    </UserInvestProvider>
  </React.StrictMode>
);
