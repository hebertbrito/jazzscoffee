import React from 'react';
import { Divider } from '@material-ui/core';
import './styles.css'

import { ProductItem } from '../../Components/producitem'

class Products extends React.Component {
    render() {
        return (
            <div className="containerproduct">
                {/* <div className="prod">
                    <p className="news">News products</p>
                </div> */}
                <div className="cont_title">
                    <Divider style={{ backgroundColor: '#fafafa', height: '3px', width: '15%', alignSelf: 'center' }} />
                    <p className="title_prod">News products</p>
                    <Divider style={{ backgroundColor: '#fafafa', height: '2px', width: '15%', alignSelf: 'center' }} />
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