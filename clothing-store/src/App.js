import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailedProductPage from './components/pages/detailedProductPage/DetailedProductPage';
import LandingPage from './components/pages/landingPage/LandingPage';
import CatalogPage from './components/pages/catalogPage/CatalogPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog-page" element={<CatalogPage />} />
        <Route path="/detailed-product-page" element={<DetailedProductPage />} />
        {/* <Route path="/product/:productId" element={<DetailedProductPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
