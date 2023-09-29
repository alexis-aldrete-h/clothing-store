import React, { useEffect } from 'react';
import './DetailedProductPage.css';
import { useParams } from 'react-router-dom';
import NavigationBar from '../../common/NavigationBar';
import DetailedProductCard from './DetailedProductCard';
import Footer from '../../common/Footer';
import { useSelectedProductContext } from '../../SelectedProductContext';
import { useCatalogContext } from '../../CatalogContext';

const DetailedProductPage = (props) => {
    const { selectedProduct, setSelectedProduct } = useSelectedProductContext();
    const { catalogProductsData } = useCatalogContext();
    const { productId } = useParams();
  
    useEffect(() => {
      if (!selectedProduct) {
        if (productId) {
          console.log(productId);
          const productInCatalog = catalogProductsData.find(
            (product) => product.productId === Number(productId)
          );
          const product = {
            productId : productInCatalog.productId,
            title : productInCatalog.title,
            price: productInCatalog.price,
            description: productInCatalog.description,
            shipping: productInCatalog.shipping,
            imagePath: productInCatalog.imagePath,
            size: 'XS',
        };
          setSelectedProduct(product);
        } else {
          console.log("404");
          return null;
        }
      }
    }, [selectedProduct, productId, catalogProductsData, setSelectedProduct]);
  
    return (
      <div className="detailed-product-page">
        <NavigationBar />
        {selectedProduct ? <DetailedProductCard /> : null}
        <Footer />
      </div>
    );
  };

export default DetailedProductPage;