import React from 'react';
import './CatalogPart.css'
import ProductCard from '../../common/ProductCard';

import productsMockedData from '../../../data/mockedData';
import TitleCard from '../../common/TitleCard';
import ButtonCard from '../../common/ButtonCard';

const CatalogPart = () => {

    const productsData = productsMockedData;

    return (
        <div className='catalog-part'>
          <TitleCard title='Some of our favorites' />
          {productsData.map((product, index) => (
            <ProductCard
              key={index}
              imagePath={require(`../../../${product.imagePath}`)}
              title={product.title}
              price={product.price}
            />
          ))}
          <ButtonCard title='VIEW ALL PRODUCTS'/>
        </div>
    );
}

export default CatalogPart;