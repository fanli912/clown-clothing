//combine all states together
import {combineReducers} from 'redux';

import userReducer from './user/user.reducer'

export default combineReducers ({
  user : userReducer
})


//user reducer: store states of current user
