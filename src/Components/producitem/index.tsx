import React from 'react'
import './styles.css'
import image2 from '../../Assets/irishcoffee.jpg'

export function ProductItem() {

    const img2 = <img src={image2} className="imgproduct" />

    return (
        <div className="container_product_item">
            <div className="products">
                <div className="product_item">
                    {img2}
                </div>
            </div>
            <div className="product_info">
                <p className="description_item"><p className="ind_product">Produto: </p>Cappucino</p>
                <p className="description_item"><p className="ind_product">Tipo: </p>Alcolico</p>
            </div>
        </div>
    );
}