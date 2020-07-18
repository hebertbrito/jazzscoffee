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
                    <h5 className="safra">Coffee harvest 20/21</h5>
                    <p className="texto">According to Cecafé, with regard to global demand, there is little accurate data on consumer behavior, 
                    especially during the pandemic....07/15/2020</p>
                </div>
            </div>
        </div>
    );
}