import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={props.imagePath} alt="Product 1" />
            </div>
            <div className='product-info'>
                <div className='product-title'>
                    <h6>{props.title}</h6>
                </div>
                <div className='product-price'>
                    <p>${props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;