import React from 'react';
import './ProductCard.css';

import { Link } from 'react-router-dom';

import { useSelectedProductContext } from '../SelectedProductContext';

const ProductCard = (props) => {

    const { setSelectedProduct } = useSelectedProductContext();

    return (
        <div className='product-card'>
            <div className='product-image'>
                <Link to={`/detailed-product-page/${props.productId}`}> 
                    <img
                        src={require(`../../${props.productImagePath}`)}
                        alt="Product 1"
                        onClick={() => {
                            const product = {
                                productId :props.productId,
                                title : props.productTitle,
                                price: props.productPrice,
                                description: props.productDescription,
                                shipping: props.productShipping,
                                imagePath: props.productImagePath,
                                size: 'XS',
                            };
                            setSelectedProduct(product);
                        }}
                    />
                </Link>
            </div>
            <div className='product-info'>
                <div className='product-title'>
                    <h6>{props.productTitle}</h6>
                </div>
                <div className='product-price'>
                    <p>${props.productPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;