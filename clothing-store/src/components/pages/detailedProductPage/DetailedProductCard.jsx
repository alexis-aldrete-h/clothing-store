import React from 'react';

import './DetailedProductCard.css';
import SizesRadionButtons from '../../common/SizesRadioButtons';
import AddToCartButton from './AddToCartButton';
import { useSelectedProductContext } from '../../SelectedProductContext';

const DetailedProductCard = () => {

    const { selectedProduct } = useSelectedProductContext();

    return (<div className='detailed-product-card'>
        <div className="product-images">
            <img src={require(`../../../${selectedProduct.imagePath}`)} alt="Product 1" />
            <img src={require(`../../../${selectedProduct.imagePath}`)} alt="Product 1" />
            <img src={require(`../../../${selectedProduct.imagePath}`)} alt="Product 1" />
        </div>
        <div className="product-info">
            <div className="title">
                <h1>{selectedProduct.title}</h1>
            </div>
            <br/>
            <div className="price">
                <h3>${selectedProduct.price}</h3>
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
                <AddToCartButton name="Add To Cart"/>
            </div>
            <br/>
            <br/>
            <div className="product-info-title">
                <h6>Product Info</h6>
            </div>
            <div className="product-info-description">
                <p>{selectedProduct.description}</p>
            </div>
            <div className="shipping-info-title">
                <h6>Shipping Info</h6>
            </div>
            <div className="shipping-info-description">
                <p>{selectedProduct.shipping}</p>
            </div>

        </div>
    </div>)
}

export default DetailedProductCard;