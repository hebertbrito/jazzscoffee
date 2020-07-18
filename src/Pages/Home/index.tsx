import React from 'react';
import Product from '../Header'
import Header from '../Header'
import Information from '../Information'

class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Information />
      </>
    );
  }
}

export default HomeScreen;