import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productsReducer } from './reducers/productsReducer';
import { currentProductReducer } from './reducers/currentProductReducer';
import { displayCartReducer } from './reducers/displayCartReducer';
import { displayMenuReducer } from './reducers/displayMenuReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    products: productsReducer,
    currentProduct: currentProductReducer,
    displayCart: displayCartReducer,
    displayMenu: displayMenuReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
