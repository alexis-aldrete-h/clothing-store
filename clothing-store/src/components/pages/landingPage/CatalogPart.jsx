import React from 'react';
import './CatalogPart.css'
import ProductCard from '../../utils/ProductCard';

import productsMockedData from '../../../data/mockedData';
import TitleCard from '../../utils/TitleCard';
import ButtonCard from '../../utils/ButtonCard';

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