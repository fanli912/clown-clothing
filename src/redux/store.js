import {createStore, applyMiddleware} from 'redux';

//middleware: receive action in, do something with them and pass in to root reducer

import logger from 'redux-logger';
import rootReducer from './root-reducer'

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
