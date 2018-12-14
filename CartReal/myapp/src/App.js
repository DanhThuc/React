import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Message from './Components/Message';
import Foodter from './Components/Foodter';

import CartsContainer from './containers/cartContainer';

import PhonesContainer from './containers/phonesContainer';


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <section className=" ">
   
      <h1 className="h1">Điện thoại nổi bật nhất</h1>
      <PhonesContainer />
      <Message />
      
      </section>
      <div className="wrap_cart">
      <CartsContainer/>
     
      </div>
      <Foodter/>
      </div>
    );
  }
}

export default App;
