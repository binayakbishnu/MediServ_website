import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConsultationForm from './ConsultationPage/ConsultationForm';
import HomePage from './HomePage/HomePage';
import OrderForm from './OrderPage/OrderForm';
import ProfilePage from './ProfilePage/ProfilePage';
import PaymentHistory from './ProfilePage/PaymentHistory';
import Auth from './Authentication/Auth';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import ForgotPassword from './Authentication/ForgotPassword';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
        </Route>
        <Route path="/mainApp" element={<App />}>
          <Route path="/mainApp" element={<HomePage />} />
          <Route path="consultationForm" element={<ConsultationForm />} />
          <Route path="orderForm" element={<OrderForm />} />
          <Route path="profilePage" element={<ProfilePage />} />
          <Route path="paymentHistory" element={<PaymentHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
