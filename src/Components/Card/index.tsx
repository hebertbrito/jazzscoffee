import React from 'react'
import './styles.css'

interface CardUI {
    titlecard?: string,
    conteudoCard?: string
}

export function Card(props: CardUI) {
    return (
        <div className="containercard">
            <div>
                <h2 className="title_info">Today's news</h2>
                <div className="carddois">
                    <h5 className="safra">Safra de café 20/21</h5>
                    <p className="texto">De acordo com o Cecafé, com relação à demanda global,
                    há poucos dados precisos sobre o comportamento do consumidor,
                    principalmente durante a pandemia...15/07/2020</p>
                </div>
            </div>
        </div>
    );
}