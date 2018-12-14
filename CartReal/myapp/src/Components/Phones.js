import React, { Component } from 'react';

class Phones extends Component {
 
  render() {
    return (
        <ul className="homeproduct">
          {this.props.children}
        </ul>
    );
}
}

export default Phones;