import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './Reducers/index';

const middleWare = applyMiddleware(thunk);

export default createStore(allReducers, middleWare);