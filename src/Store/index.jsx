import {createStore , combineReducers} from 'redux'
import BankReducer from './Reducers/bank-reducer';
import {ProdReducer} from './Reducers/product-reducer';

const appReducers = combineReducers({
    bank : BankReducer ,
    prod : ProdReducer
})

const store = createStore(appReducers);

export default store;
