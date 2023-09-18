import React from "react";

import './ItemCard.css';

const ItemCard = (props) => {
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
                    <button className="symbol-button">-</button>
                    <p>{props.quantity}</p>
                    <button className="symbol-button">+</button>
                    <button className="remove-button">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;