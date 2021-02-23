import React from 'react';

import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage =({match}) => (

      <div className = 'shop-page'>
        <Route exact path={`${match.path}`} component = {CollectionsOverview}/>
        <Route component = {CollectionPage} path={`${match.path}/:collectionId`} />
      </div>
)


export default ShopPage
