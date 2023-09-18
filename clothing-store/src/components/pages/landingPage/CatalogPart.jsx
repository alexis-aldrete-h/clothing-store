import React from 'react';
import './CatalogPart.css'
import ProductCard from '../../common/ProductCard';

import catalogProductsMockedData from '../../../data/catalogProductsData';
import TitleCard from '../../common/TitleCard';
import ButtonCard from '../../common/ButtonCard';

const CatalogPart = () => {

    const catalogProductsData = catalogProductsMockedData;

    return (
        <div className='catalog-part'>
          <TitleCard title='Some of our favorites' />
          {catalogProductsData.map((catalogProduct, index) => (
            <ProductCard
              key={index}
              imagePath={require(`../../../${catalogProduct.imagePath}`)}
              title={catalogProduct.title}
              price={catalogProduct.price}
            />
          ))}
          <ButtonCard title='VIEW ALL PRODUCTS'/>
        </div>
    );
}

export default CatalogPart;