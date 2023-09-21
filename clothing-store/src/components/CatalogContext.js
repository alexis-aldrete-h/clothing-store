import React, { createContext, useContext, useState } from 'react';

import mockedCatalogProductsData from '../data/catalogProductsData';

const CatalogContext = createContext();

export function CatalogProvider({ children }) {
  const [catalogProductsData, setCatalogProductsData] = useState(mockedCatalogProductsData);
  
  return (
    <CatalogContext.Provider value={{ catalogProductsData, setCatalogProductsData }}>
      {children}
    </CatalogContext.Provider>
  );
}

export function useCatalogContext() {
  return useContext(CatalogContext);
}
