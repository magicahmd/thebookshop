import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import orderReducer from './reducers/orderReducer';

export function configureStore() {
	return createStore(orderReducer, devToolsEnhancer());
}
