//an object that combine all states together
import {combineReducers} from 'redux';

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers ({
  user: userReducer,
  cart: cartReducer
})


//user reducer: store states of current user
