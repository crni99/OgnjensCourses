import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NetApiBasicsRoutes from './routes/NetApiBasicsRoutes.jsx';
import ReactBasicsRoutes from './routes/ReactBasicsRoutes.jsx';
import SQLBasicsRoutes from './routes/SQLBasicsRoutes.jsx';
import Header from './components/common/header/Header.jsx';
import Footer from './components/common/Footer.jsx';
import ErrorBoundary from '././components/common/ErrorBoundary.jsx';
import Home from './components/common/Home.jsx';
import BackendHome from './components/pages/BackendHome.jsx';
import FrontendHome from './components/pages/FrontendHome.jsx';
import DatabaseHome from './components/pages/DatabaseHome.jsx';
import { CourseCategories } from './utils/const.js';

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
                <Route path={CourseCategories.BACKEND} element={<BackendHome />} />
                <Route path={CourseCategories.FRONTEND} element={<FrontendHome />} />
                <Route path={CourseCategories.DATABASE} element={<DatabaseHome />} />
                {NetApiBasicsRoutes}
                {ReactBasicsRoutes}
                {SQLBasicsRoutes}
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