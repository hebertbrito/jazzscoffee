import React from 'react'
import './styles.css'

interface ProductitemUI {
    img?: JSX.Element
    nameProduct: string
    tipoProduct: string
}

export function ProductItem(props: ProductitemUI) {

    return (
        <div className="container_product_item">
            <div className="products">
                <div className="product_item">
                    {props.img}
                </div>
            </div>
            <div className="product_info">
                <p className="description_item"><p className="ind_product">Produto: </p>{props.nameProduct}</p>
                <p className="description_item"><p className="ind_product">Tipo: </p>{props.tipoProduct}</p>
            </div>
        </div>
    );
}