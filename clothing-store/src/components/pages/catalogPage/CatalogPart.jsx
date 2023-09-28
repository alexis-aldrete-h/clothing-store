import React from 'react';
import { useCatalogContext } from '../../CatalogContext';

import ProductCard from '../../common/ProductCard';

const CatalogPart = () => {

  const { catalogProductsData } = useCatalogContext();

    return (
        <div className='catalog-part'>
            {catalogProductsData.map((product) => (
            <ProductCard
              key={product.productId}
              productId={product.productId}
              productImagePath={product.imagePath}
              productTitle={product.title}
              productPrice={product.price}
            />
          ))}
        </div>
    )
}

export default CatalogPart;