import React from 'react';

import './SeasonsPart.css';
import TitleButtonCard from '../../utils/TitleButtonCard';

const SeasonsPart = (props) => {
    return (
        <div className='seasons-part'>
            <div className='season-one'>
                <div className='season-container-title-card-wrapper'>
                    <TitleButtonCard  title="Isla Bonita" buttonTitle="SNEAK A PEAK"/>
                </div>
            </div>
            <div className='season-two'>
                <div className='season-container-title-card-wrapper'>
                    <TitleButtonCard  title="Current Availabilities" buttonTitle="SHOP NOW"/>
                </div>
            </div>
        </div>
    );
}

export default SeasonsPart;