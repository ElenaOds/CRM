import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store.ts';
import App from './App.tsx';
import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  
    <BrowserRouter basename="crm">
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
