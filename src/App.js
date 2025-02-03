import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NetApiBasicsRoutes from './routes/NetApiBasicsRoutes.jsx';
import ReactBasicsRoutes from './routes/ReactBasicsRoutes.jsx';
import Header from './components/common/header/Header.jsx';
import Footer from './components/common/Footer.jsx';
import ErrorBoundary from '././components/common/ErrorBoundary.jsx';
import Home from './components/common/Home.jsx';

function App() {

  return (
    <>
      <ErrorBoundary>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Routes>
                <Route path="/" element={<Home />} />
                {NetApiBasicsRoutes}
                {ReactBasicsRoutes}
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;