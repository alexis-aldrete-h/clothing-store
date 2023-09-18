import React from 'react';
import './CatalogPart.css'
import ProductCard from '../../common/ProductCard';

import landingPageCatalogProductsMockedData from '../../../data/landingPageCatalogProductsData';
import TitleCard from '../../common/TitleCard';
import ButtonCard from '../../common/ButtonCard';

const CatalogPart = () => {

    const landingPageCatalogProductsData = landingPageCatalogProductsMockedData;

    return (
        <div className='catalog-part'>
          <TitleCard title='Some of our favorites' />
          {landingPageCatalogProductsData.map((landingPageCatalogProduct, index) => (
            <ProductCard
              key={index}
              imagePath={require(`../../../${landingPageCatalogProduct.imagePath}`)}
              title={landingPageCatalogProduct.title}
              price={landingPageCatalogProduct.price}
            />
          ))}
          <ButtonCard title='VIEW ALL PRODUCTS'/>
        </div>
    );
}

export default CatalogPart;