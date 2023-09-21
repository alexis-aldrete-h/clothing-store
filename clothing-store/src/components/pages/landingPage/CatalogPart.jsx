import React from 'react';

import { useCatalogContext } from '../../CatalogContext';

import './CatalogPart.css'

import ProductCard from '../../common/ProductCard';
import TitleCard from '../../common/TitleCard';
import ButtonCard from '../../common/ButtonCard';

const CatalogPart = () => {

    const {catalogProductsData} = useCatalogContext();
    const landingPageProducts = catalogProductsData.slice(0, 6);

    return (
        <div className='catalog-part'>
          <TitleCard title='Some of our favorites' />
          {landingPageProducts.map((product) => {
            return (
              <ProductCard
                key={product.productId}
                productId={product.productId}
                productTitle={product.title}
                productPrice={product.price}
                productDescription={product.description}
                productShipping={product.shipping}
                productImagePath={product.imagePath}
                productQuantity={1}
              />
            )
          })}
          <ButtonCard title='VIEW ALL PRODUCTS'/>
        </div>
    );
}

export default CatalogPart;