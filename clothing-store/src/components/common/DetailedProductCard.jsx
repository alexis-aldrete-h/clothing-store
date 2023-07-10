import React from 'react';

import './DetailedProductCard.css';
import SizesRadionButtons from './SizesRadioButtons';

const DetailedProductCard = (props) => {
    return (<div className='detailed-product-card'>
        <div className="product-images">
            <img src={props.imagePath} alt="Product 1" />
            <img src={props.imagePath} alt="Product 1" />
            <img src={props.imagePath} alt="Product 1" />
        </div>
        <div className="product-info">
            <div className="title">
                <h1>{props.productTitle}</h1>
            </div>
            <br/>
            <div className="price">
                <h3>
                {props.productPrice}
                </h3>
            </div>
            <br/>
            <br/>
            <div className="sizes-nav-title">
                <p>Select Size</p>
            </div>
            <div className="sizes-nav-links">
                <SizesRadionButtons />
            </div>
            <br/>
            <br/>
            <div className="add-to-cart-button">
                <button className='add-to-cart-button'>ADD TO CART</button>
            </div>
            <br/>
            <br/>
            <div className="product-info-title">
                <h6>Product Info</h6>
            </div>
            <div className="product-info-description">
                <p>{props.productInfo}</p>
            </div>
            <div className="shipping-info-title">
                <h6>Shipping Info</h6>
            </div>
            <div className="shipping-info-description">
                <p>{props.productShippingInfo}</p>
            </div>

        </div>
    </div>)
}

export default DetailedProductCard;