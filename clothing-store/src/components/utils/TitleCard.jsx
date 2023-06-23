import React from 'react';
import './TitleCard.css';

const TitleCard = (props) => {
    return (
        <div className='title-card'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default TitleCard