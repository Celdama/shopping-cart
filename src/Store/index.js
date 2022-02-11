import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productsReducer } from './reducers/productsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    products: productsReducer,
    fiter: () => console.log('filter'),
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
