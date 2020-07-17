import React from 'react';
import './styles.css'

import { Slider, SliderDois, SliderTres } from '../../Components/Sliders'
import { Card } from '../../Components/Card'
class Information extends React.Component {
    render() {
        return (
            <div className="containerinformation">
                <div className="divinformationone">
                    <div className="informationone">
                        <h1 className="highlight">Highlight of the week</h1>
                        <Slider />
                        <SliderDois />
                        <SliderTres />
                    </div>
                </div>
                <div className="divinformationtwo">
                    <div className="informationtwo">
                        <h2 style={{
                        }}>Today's news</h2>
                        <Card />
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;