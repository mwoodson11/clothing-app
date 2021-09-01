import React from 'react';

import './contentBox.styles.scss';

const ContentBox = ({title, description, image}) => (
    <div className={`content-box-container`}>
        <div 
          className="content-box-image"
          style={{backgroundImage: `url(${image})`}}
        />
        <div className="content-box-content">
            <h1 className="content-box-title">{title}</h1>
            <span className="content-box-description">{description}</span>
        </div>
    </div>
);

export default ContentBox;