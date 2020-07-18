import React from 'react';
import { Divider } from '@material-ui/core';
import './styles.css'
import image2 from '../../Assets/irishcoffee.jpg'

import { ProductItem } from '../../Components/producitem'
import { url } from 'inspector';

const lstProduct = [] = [
    {
        img: <img src={require('../../Assets/irishcoffee.jpg')} className="imgproduct" />,
        nameProduct: 'Irish Coffee',
        typeProduct: 'Alcoholic'
    },
    {
        img: <img src={require('../../Assets/coldbrew.jpg')} className="imgproduct" />,
        nameProduct: 'Cold Brew',
        typeProduct: 'Ice Cold / Smooth'
    },
    {
        img: <img src={require('../../Assets/cafegelado.jpg')} className="imgproduct" />,
        nameProduct: 'Iced Coffee',
        typeProduct: 'Ice Cold'
    },
    {
        img: <img src={require('../../Assets/cafeafogatto.jpg')} className="imgproduct" />,
        nameProduct: 'Affogato Coffe',
        typeProduct: 'Dessert / Iced Cold'
    },
    {
        img: <img src={require('../../Assets/donuts.jpg')} className="imgproduct" />,
        nameProduct: 'Doughnut',
        typeProduct: 'Dessert'
    },
]

class Products extends React.Component {
    render() {
        return (
            <div className="containerproduct">
                <div className="cont_title">
                    <div className="divider"></div>
                    <p className="title_prod">News products</p>
                    <div className="divider"></div>

                </div>
                <div className="produc_subs">
                    {lstProduct.map(x => (
                        <ProductItem img={x.img} nameProduct={x.nameProduct} tipoProduct={x.typeProduct} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Products;