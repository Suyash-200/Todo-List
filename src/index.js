import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoContextProvider from './store/todo-conrext';
import LoadingContextProvider from './store/loading-context';
import Loader from './componants/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingContextProvider>
    <TodoContextProvider>
     
    <App />
    </TodoContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
