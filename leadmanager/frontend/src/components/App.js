import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store'; 
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';

const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

const App = () => {
  return(
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}>
        <Header />
        <Alerts />
        <div className="container">
        <Dashboard />
        </div>
        </AlertProvider> 
    </Provider>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
