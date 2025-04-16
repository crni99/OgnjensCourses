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
import { CourseCategories, CoursesPaths } from './utils/const.js';
import PageNotFound from './components/pages/PageNotFound.jsx';
import SQLAdvancedRoutes from './routes/SQLAdvancedRoutes.jsx';
import DotNetAdvancedHome from './components/pages/dotnet/advanced/DotNetAdvancedHome.jsx';
import ReactAdvancedHome from './components/pages/react/advanced/ReactAdvancedHome.jsx';

function App() {

  return (
    <>
      <ErrorBoundary>
        <div className="page-container">
          <Header />
          <div className="container content">
            <div className="row">
              <div className="col-12">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<PageNotFound />} />
                  <Route path={CourseCategories.BACKEND} element={<BackendHome />} />
                  <Route path={CoursesPaths.NET_API_ADVANCED} element={<DotNetAdvancedHome />} />
                  <Route path={CourseCategories.FRONTEND} element={<FrontendHome />} />
                  <Route path={CoursesPaths.REACT_ADVANCED} element={<ReactAdvancedHome />} />
                  <Route path={CourseCategories.DATABASE} element={<DatabaseHome />} />
                  {NetApiBasicsRoutes}
                  {ReactBasicsRoutes}
                  {SQLBasicsRoutes}
                  {SQLAdvancedRoutes}
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;