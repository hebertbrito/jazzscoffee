import React from 'react';

import Header from '../Header'
import Information from '../Information'
import Product from '../Product'

class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Information />
        <Product />
      </>
    );
  }
}

export default HomeScreen;