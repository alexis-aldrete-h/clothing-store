import React from 'react';

import './TitleButtonCard.css';

const TitleButtonCard = (props) => {
    return (
        <div className='title-button-card'>
            <div className='title-wrapper'>
                <h1>{props.title}</h1>
            </div>
            <div className='button-wrapper'>
                <button>{props.buttonTitle}</button>
            </div>
        </div>
    )
}

export default TitleButtonCard