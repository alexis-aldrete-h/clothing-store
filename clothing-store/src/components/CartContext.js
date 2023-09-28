import React, {createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({children}){
    const [cartProductsData, setCartProductsData] = useState([]);

    return (
        <CartContext.Provider value={{ cartProductsData, setCartProductsData}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext(){
    return useContext(CartContext);
}