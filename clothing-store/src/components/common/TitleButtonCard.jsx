import React from 'react';

import './TitleButtonCard.css';

import { Link } from 'react-router-dom';

const TitleButtonCard = (props) => {
    return (
        <div className='title-button-card'>
            <div className='title-wrapper'>
                <h1>{props.title}</h1>
            </div>
            <div className='button-wrapper'>
                <Link to={props.link}>
                    <button>{props.buttonTitle}</button>
                </Link>
            </div>
        </div>
    )
}

export default TitleButtonCard