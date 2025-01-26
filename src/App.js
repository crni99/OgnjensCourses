import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import Home from './components/pages/Home.jsx';

function App() {
  return (
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
  );
}

export default App;