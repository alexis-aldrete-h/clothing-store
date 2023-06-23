import React from 'react';

import NavigationBar from '../../navbar/NavigationBar';
import SeasonsPart from './SeasonsPart';
import CatalogPart from './CatalogPart';

const LandingPage = () => {
    return(
        <div className='landing-page'>
            <NavigationBar />
            <SeasonsPart />
            <CatalogPart />
        </div>
    )
}

export default LandingPage