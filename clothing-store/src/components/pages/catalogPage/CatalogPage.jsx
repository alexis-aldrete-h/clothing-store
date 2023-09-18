import React from 'react';
import NavigationBar from '../../common/NavigationBar';
import Footer from '../../common/Footer';
import CatalogPart from './CatalogPart';

const CatalogPage = () => {
    return (
        <div className='catalog-page'>
            <NavigationBar />
            <CatalogPart />
            <Footer />
        </div>
    )
}

export default CatalogPage;