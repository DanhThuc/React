import  { combineReducers } from 'redux';
import phones from './phones';
import cart from './cart';


const appReducers = combineReducers({
    phones,
    cart
});

export default appReducers;