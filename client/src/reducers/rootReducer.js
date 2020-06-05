import {combineReducers} from 'redux';
import accountReducer from './accountReducer'
import userReducer from './userReducer'

export default combineReducers({
    account:accountReducer,
    user:userReducer
})