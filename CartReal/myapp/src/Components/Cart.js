import React, { Component } from 'react';

class Cart extends Component {
    render() {
        let {children} = this.props;
        return (
            <ul className="listorder" id="product-list">
                {children}
            </ul>
        );
    }
}

export default Cart;

