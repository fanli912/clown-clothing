//an object that combine all states together
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] //what reducer you want to persist
}

const rootReducer = combineReducers ({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)


//user reducer: store states of current user
