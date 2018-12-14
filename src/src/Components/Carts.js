import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Carts extends Component {
    render() {
        return (
            <ul className="listorder" id="product-list">

                <CartItem />
                <CartItem />
                <CartItem />
                <input type="hidden" id="total11" data-txt="2 - 5 ngày" value="0" />
                <CartResult/>
            </ul>
        );
    }
}

export default Carts;

