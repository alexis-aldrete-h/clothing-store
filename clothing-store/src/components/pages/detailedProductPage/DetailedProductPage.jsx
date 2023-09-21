import React from 'react';

import './DetailedProductPage.css';

import NavigationBar from '../../common/NavigationBar';
import DetailedProductCard from './DetailedProductCard';
import Footer from '../../common/Footer';


const DetailedProductPage = () => {

    return (<div className='detailed-product-page'>
        <NavigationBar />
        <DetailedProductCard />
        <Footer />
    </div>)
}

export default DetailedProductPage;