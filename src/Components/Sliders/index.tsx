import React from 'react'
import './styles.css'


export function Slider() {
    return (
        <div className="containerslider">
            <div className="containerprogress">
                <div className="progress"></div>
            </div>
            <div className="titlep">Cappuccino</div>
        </div>
    );
}

export function SliderDois() {
    return (
        <div className="containerslider">
            <div className="containerprogress">
                <div className="progressdois"></div>
            </div>
            <div className="titlep">Macchiato</div>
        </div>
    );
}

export function SliderTres() {
    return (
        <div className="containerslider">
            <div className="containerprogress">
                <div className="progresstres"></div>
            </div>
            <div className="titlep">Coffee</div>
        </div>
    );
}