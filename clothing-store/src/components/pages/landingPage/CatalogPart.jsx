import React from 'react';
import './CatalogPart.css'
import ProductCard from '../../utils/ProductCard';

import productsMockedData from '../../../data/mockedData';

const CatalogPart = () => {

    const productsData = productsMockedData;

    return (
        <div className='catalog-part'>
          {productsData.map((product, index) => (
            <ProductCard
              key={index}
              imagePath={require(`../../../${product.imagePath}`)}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
    );
}

export default CatalogPart;