import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CollectionItem from '../../components/collectionItem/collectionItem.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import './collection.styles.scss';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const dispatch = useDispatch();
    const collection = useSelector(selectCollection(collectionId));

    useEffect(() => {
        dispatch(fetchCollectionsStart())
      }, [dispatch]);

  const { title, items } = collection;
  
  return (
    <div className='collectionPage'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
            items ? 
          items.map(item => <CollectionItem key={item.id} item={item}/>)
          :
          null
        }
      </div>
    </div>
  );
};

export default CollectionPage;