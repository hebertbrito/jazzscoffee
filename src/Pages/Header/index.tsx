import React from 'react';
import {Menubar} from '../../Components/menubar'

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
          <ul className="ulheader">
            {nametitle.map(x => {
              return <li key={x} className="liheader">{x}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}


export default Header;