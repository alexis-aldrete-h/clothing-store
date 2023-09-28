import React from 'react';

import './TotalBalance.css';

const TotalBalance = (props) => {
    return(
        <div className='total-balance-container'>
            <div className='total-price'>
                <p>Total</p>
                <h1>${props.totalBalance}</h1>
            </div>
            <div className='tax-description'>
                <p>Tax included and shipping calculated at checkout</p>
            </div>
            <div className='buttons-container'>
                <button className='view-cart-button'>VIEW CART</button>
                <button className='checkout-button'>CHECKOUT</button>
            </div>
            
        </div>
    )
}

export default TotalBalance;