import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

export function configureStore() {
	return createStore(rootReducer, devToolsEnhancer());
}
