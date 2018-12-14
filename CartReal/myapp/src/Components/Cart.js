import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Cart extends Component {
    render() {
        let {children} = this.props;
        return (
            <ul className="listorder" id="product-list">

                {children}
                <CartResult/>
            </ul>
        );
    }
}

export default Cart;

