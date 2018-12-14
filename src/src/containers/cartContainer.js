import React, { Component } from 'react';
import { connect } from 'react-redux';
import Phones from '../Components/Phones';
import Phone from '../Components/Phone';
import PropTypes from 'prop-types';

class CartContainer extends Component {
    render() {
        var cart = this.props.cart;
        console.log(cart);
        return (
            <div></div>
        );
    }
}

CartContainer.propTypes = {
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

export default connect(mapStateToProps, null)(CartContainer);