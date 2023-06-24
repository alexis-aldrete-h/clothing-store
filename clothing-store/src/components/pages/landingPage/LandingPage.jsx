import React from 'react';

import NavigationBar from '../../common/NavigationBar';
import SeasonsPart from './SeasonsPart';
import CatalogPart from './CatalogPart';
import Footer from '../../common/Footer';

const LandingPage = () => {
    return(
        <div className='landing-page'>
            <NavigationBar />
            <SeasonsPart />
            <CatalogPart />
            <Footer />
        </div>
    )
}

export default LandingPage