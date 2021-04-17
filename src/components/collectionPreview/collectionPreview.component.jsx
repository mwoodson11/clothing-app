import React from 'react';

import CollectionItem from '../collectionItem/collectionItem.component';
import './collectionPreview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collectionPreview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps}/>
                    
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;