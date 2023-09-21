import React, { createContext, useContext, useState } from 'react';

const SelectedProductContext = createContext();

export function SelectedProductProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const updateSelectedProductSize = (size) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      size: size,
    }));
  };

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, setSelectedProduct, updateSelectedProductSize }}>
      {children}
    </SelectedProductContext.Provider>
  );
}

export function useSelectedProductContext() {
  return useContext(SelectedProductContext);
}
