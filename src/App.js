import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import Home from './components/pages/Home.jsx';
import Header from './components/common/header/Header.jsx';
import Footer from './components/common/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Routes>
              <Route path="/" element={<Home />} />
              {AppRoutes}
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;