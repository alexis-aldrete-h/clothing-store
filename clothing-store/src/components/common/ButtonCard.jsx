import React from 'react';

import './ButtonCard.css';

const ButtonCard = (props) => {
    return(
        <div className='button-card'>
            <button className='button'>{props.title}</button>
        </div>
    )
}

export default ButtonCard;