import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../Components/Cart'
import CartItem from '../Components/CartItem';
import CartResult from '../Components/CartResult';
import * as Message from '../constain/Message';


class CartsContainer extends Component {
    render() {
        var {cart} = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem=(cart)=>{
        var result = Message.MS_CART_EMPTY;
        if(cart.length>0){
            result = cart.map((item,index)=>{
                return(
                    <CartItem
                        key ={index}
                        item = {item}
                        index = {index}
                    />
                );
            })
        }
        return result;
    }
    showTotalAmount = (cart) =>{
       
        if(cart.length >0)
        {
            return <CartResult cart ={cart}/>
        }
        return null;
    }
}

CartsContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            phone: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                des: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                numberReview: PropTypes.number.isRequired,
                promotions: PropTypes.arrayOf(
                    PropTypes.shape({
                        content: PropTypes.string.isRequired
                    })
                ).isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};
const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(CartsContainer);