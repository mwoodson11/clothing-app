import React from 'react';

import './contentBox.styles.scss';

const ContentBox = ({title, description, image, imageLeft}) => (
    <div className={`content-box-container ${imageLeft ? "left" : "right"}`}>
        <div className="content-box-content">
            <h1 className="content-box-title">{title}</h1>
            <span className="content-box-description">{description}</span>
        </div>
        <div 
          className="content-box-image"
          style={{backgroundImage: `url(${image})`}}
        />
    </div>
);

export default ContentBox;