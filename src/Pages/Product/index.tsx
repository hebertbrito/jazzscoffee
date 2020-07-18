import React from 'react';
import { Divider } from '@material-ui/core';
import './styles.css'

import { ProductItem } from '../../Components/producitem'

class Products extends React.Component {
    render() {
        return (
            <div className="containerproduct">
                <div className="cont_title">
                    <div className="divider"></div>
                    {/* <Divider style={{ backgroundColor: '#fafafa', height: '3px', width: '15%', alignSelf: 'center' }} /> */}
                    <p className="title_prod">News products</p>
                    {/* <Divider style={{ backgroundColor: '#fafafa', height: '2px', width: '15%', alignSelf: 'center' }} /> */}
                    <div className="divider"></div>

                </div>
                <div className="produc_subs">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        );
    }
}

export default Products;