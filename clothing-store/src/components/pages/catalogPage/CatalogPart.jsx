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
                productTitle={product.title}
                productPrice={product.price}
                productDescription={product.description}
                productShipping={product.shipping}
                productImagePath={product.imagePath}
                productQuantity={1}
            />
          ))}
        </div>
    )
}

export default CatalogPart;