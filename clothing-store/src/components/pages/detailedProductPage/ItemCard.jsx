import React from "react";

import './ItemCard.css';

const ItemCard = (props) => {
    const handleQuantityChange = (change, title, size) => {
        props.onQuantityChange(change, title, size);
    };

    const handleProductRemoved = (title, size) => {
        props.onProductRemoved(title, size);
    }

    return(
        <div className="cart-off-canvas-item-card">
            <div className="item-image">
                <img src={props.imagePath} alt="Product 1" />
            </div>
            <div className="item-info">
                <p className="item-title">{props.title}</p>
                <p className="item-price">${props.price}</p>
                <p className="item-size">{props.size}</p>
                <div className="quantity-info">
                    <button className="symbol-button" onClick={() => handleQuantityChange(-1, props.title, props.size)}>-</button>
                    <p>{props.quantity}</p>
                    <button className="symbol-button" onClick={() => handleQuantityChange(+1, props.title, props.size)}>+</button>
                    <button className="remove-button" onClick={() => handleProductRemoved(props.title, props.size)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;