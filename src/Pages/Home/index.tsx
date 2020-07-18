import React from 'react';

import Header from '../Header'
import Information from '../Information'
import Product from '../Product'
import Footer from '../Footer'

class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Information />
        <Product />
        <Footer />
      </>
    );
  }
}

export default HomeScreen;