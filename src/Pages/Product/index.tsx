import React from 'react';
import { Divider } from '@material-ui/core';
import './styles.css'

import { ProductItem } from '../../Components/producitem'

class Products extends React.Component {
    render() {
        return (
            <div className="containerproduct">
                <div className="prod">
                    <p className="news">News products</p>
                </div>
                <div className="produc_subs">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        );
    }
}

export default Products;