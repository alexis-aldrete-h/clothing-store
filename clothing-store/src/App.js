import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CatalogProvider } from './components/CatalogContext';
import { SelectedProductProvider } from './components/SelectedProductContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import DetailedProductPage from './components/pages/detailedProductPage/DetailedProductPage';
import LandingPage from './components/pages/landingPage/LandingPage';
import CatalogPage from './components/pages/catalogPage/CatalogPage';

function App() {
  return (
      <CatalogProvider> 
        <SelectedProductProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/catalog-page" element={<CatalogPage />} />
              <Route path="/detailed-product-page/:productId" element={<DetailedProductPage />} />
            </Routes>
          </Router>
        </SelectedProductProvider>
      </CatalogProvider>
  );
}

export default App;
