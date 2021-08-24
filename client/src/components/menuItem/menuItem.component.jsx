import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItem.styles.scss';
const MenuItem = ({title, imageUrl, size, history, linkUrl}) => (
    <div 
    className={`${size} menuItem`} 
    onClick={() => history.push(`${linkUrl}`)}>
        <div 
        className='backgroundImage'
        style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);