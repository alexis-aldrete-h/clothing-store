import React from 'react';

import NavigationBar from '../../navbar/NavigationBar';
import SeasonsPart from './SeasonsPart';

const LandingPage = () => {
    return(
        <div className='landing-page'>
            <NavigationBar />
            <SeasonsPart />
        </div>
    )
}

export default LandingPage