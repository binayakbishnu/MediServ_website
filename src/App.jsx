import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  // Link,
  Outlet
} from "react-router-dom";

import './App.css';

import Nav from './Nav';
import Footer from './Footer';
import HomePage from './HomePage/HomePage';
import ConsultationForm from './ConsultationPage/ConsultationForm';

// import HomePage from './Pages/HomePage'
// import MoreProjects from './Pages/MoreProjects';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>

        <Nav />

        <Routes>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/consultationForm">
            <ConsultationForm />
          </Route>
        </Routes>

        <Footer />

      </BrowserRouter> */}
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
