import React from 'react';

import { Link } from 'react-router-dom';

import './ButtonCard.css';

const ButtonCard = (props) => {
    return(
        <div className='button-card'>
            <Link id='link' to={'/catalog-page'}> 
                <button className='button'>{props.title}</button>
            </Link>
        </div>
    )
}

export default ButtonCard;