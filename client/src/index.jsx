import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';
import { store } from '../src/components/dashboard/Todo/storage/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
reportWebVitals();
