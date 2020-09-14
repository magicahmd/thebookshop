import { combineReducers } from 'redux';
import asyncReducer from '../../async/asyncReducer';
import authReducer from './authReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    order: orderReducer,
    async: asyncReducer
});

export default rootReducer;