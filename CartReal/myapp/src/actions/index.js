import * as types from '../constain/ActionTypes';

export const actAddToCart = (phone, quantity) =>{
    return{
        type : types.ADD_TO_CART,
        phone ,
        quantity
    }
}