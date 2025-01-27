import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import Home from './components/pages/Home.jsx';
import Header from './components/common/header/Header.jsx';
import Footer from './components/common/Footer.jsx';
import ErrorBoundary from '././components/common/ErrorBoundary.jsx';
import PageNavigation from './components/common/PageNavigation.jsx';
import { RouteList } from '../src/utils/const.js';

function App() {
  const location = useLocation();

  const getPrevNextPages = (currentPath) => {
    const currentIndex = RouteList.findIndex(route => route.path === currentPath);
    const prevPage = currentIndex > 0 ? RouteList[currentIndex - 1].path : null;
    const nextPage = currentIndex < RouteList.length - 1 ? RouteList[currentIndex + 1].path : null;
    return { prevPage, nextPage };
  };

  const { prevPage, nextPage } = getPrevNextPages(location.pathname);

  return (
    <>
      <ErrorBoundary>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Routes>
                <Route path="/" element={<Home />} />
                {AppRoutes}
              </Routes>
              {location.pathname !== '/' && (
                <PageNavigation prevPage={prevPage} nextPage={nextPage} />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;