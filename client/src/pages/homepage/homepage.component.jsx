import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Route } from 'react-router';

import Directory from '../../components/directory/directory.component';
import CollectionsPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { HomePageContainer } from './homepage.styles';
const Homepage = () => {
    const dispatch = useDispatch()
    const match = useRouteMatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart())
      }, [dispatch]);

    return (
        <HomePageContainer >
            <Route exact path={`${match.path}`} component={Directory} />
            <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
            {/* { !match ? <Directory /> : <CollectionsPageContainer collectionId={collectionId} /> } */}
        </ HomePageContainer>
    );
};

export default Homepage;