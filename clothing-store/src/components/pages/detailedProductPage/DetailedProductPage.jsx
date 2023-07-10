import React from 'react';

import './DetailedProductPage.css';
import NavigationBar from '../../common/NavigationBar';
import DetailedProductCard from '../../common/DetailedProductCard';

const DetailedProductPage = () => {
    return (<div className='detailed-product-page'>
        <NavigationBar />
        <DetailedProductCard 
            imagePath={require(`../../../assets/images/products/product1Back.webp`)}
            productTitle='The Original Cap' 
            productPrice='€45.00'
            productInfo='
                100% Organic Cotton, 240g/m2
                Pre-washed & Pre-shrunk
                Carbon Dye
                Natural'
            productShippingInfo='
                Your items will be shipped out within 1 week
                Customs & Brexit info can be found here
                Please visit our help center if you have any questions'
            />
    </div>)
}

export default DetailedProductPage;