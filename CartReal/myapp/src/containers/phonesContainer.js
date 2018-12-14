import React, { Component } from 'react';
import { connect } from 'react-redux';
import Phones from '../Components/Phones';
import Phone from '../Components/Phone';
import PropTypes from 'prop-types';

class PhonesContainer extends Component {
    showProduct(phones) {
        var result = null;
        if (phones.length > 0) {
            result = phones.map((phone, index) => {
                if (index % 4 === 0) {
                    return <li className="feature" key={index}>

                        <Phone phone={phone} km={index} />

                    </li>
                }
                else
                    return <li key={index}>
                        <Phone phone={phone} km={index} />
                    </li>
            });

        }
        return result;
    };
    render() {
        let { phones } = this.props;
        console.log(phones);

        return (
            <Phones >{this.showProduct(phones)}</Phones>
        );
    }
}
const mapStateToProps = state => {
    return {
        phones: state.phones
    }
}
PhonesContainer.propTypes = {
    phones : PropTypes.arrayOf(
        PropTypes.shape({
            id :PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            des : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
            numberReview : PropTypes.number.isRequired,
            promotions : PropTypes.arrayOf(
                PropTypes.shape({
                    content : PropTypes.string.isRequired
                })
            ).isRequired                
        })
    ).isRequired
  };
export default connect(mapStateToProps, null)(PhonesContainer);