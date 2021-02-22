import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist'

//middleware: receive action in, do something with them and pass in to root reducer

import logger from 'redux-logger';
import rootReducer from './root-reducer'

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);


export default {store, persistor};
