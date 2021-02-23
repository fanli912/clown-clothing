import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionoUrlParam =>
createSelector(
  [selectCollections],
  collections => collections[collectionoUrlParam]

)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)
