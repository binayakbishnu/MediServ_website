import React from 'react';

import { Outlet } from "react-router-dom";

import './App.css';

import Nav from './Nav';
import Footer from './Footer';

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
      <Footer />
    </div>
  );
}

export default App;
