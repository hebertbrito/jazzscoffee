import React from 'react';
import {Menubar} from '../../Components/menubar'
import { Title } from '../../Components/title'
import './styles.css';

class Header extends React.Component {
  render() {

    const nametitle = [
      'C','o','f','f','e','e',
    ]

    return (
      <div className="containerheader">
        <img src={require('../../Assets/bgheader.jpg')} className="img" />
        <Menubar />
        <div className="title">
          <Title />
        </div>
      </div>
    );
  }
}


export default Header;