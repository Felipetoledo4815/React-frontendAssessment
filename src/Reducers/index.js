import {combineReducers} from 'redux';
import GnomesReducer from '../Reducers/Reducers.gnomes';
import FilterReducer from '../Reducers/Reducers.filters';

const allReducers = combineReducers({
    gnomes: GnomesReducer,
    filters: FilterReducer
});

export default allReducers;