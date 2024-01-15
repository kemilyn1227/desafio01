//bibliotecas
import React from 'react';
import ReactDOM from 'react-dom/client';

//calculadora
import App from './App';

//reset css
import GlobalStyles  from './global';

//Html principal div#root
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  //strictmode avisa os problemas que podem acontecer no código
  <React.StrictMode>

    <GlobalStyles/>
    <App />
    
  </React.StrictMode>
);