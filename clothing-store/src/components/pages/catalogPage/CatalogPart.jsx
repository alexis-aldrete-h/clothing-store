import React from 'react';

import ProductCard from '../../common/ProductCard';

import catalogProductsMockedData from '../../../data/catalogProductsData';

const CatalogPart = () => {

    const catalogProductsData = catalogProductsMockedData;


    return (
        <div className='catalog-part'>
            {catalogProductsData.map((catalogProduct, index) => (
            <ProductCard
              key={index}
              imagePath={require(`../../../${catalogProduct.imagePath}`)}
              title={catalogProduct.title}
              price={catalogProduct.price}
            />
          ))}
        </div>
    )
}

export default CatalogPart;