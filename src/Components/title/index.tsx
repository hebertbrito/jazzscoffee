import React from 'react'
import './styles.css'
import ReactDOM from 'react-dom';
import { TextField } from '@material-ui/core';

interface TitleUI {
    // lstLetter?: Array<string>
}

const nametitle = [
    'C', 'o', 'f', 'f', 'e', 'e',
]

export function Title(props: TitleUI) {
    return (
        <ul className="ul-title">
            {nametitle.length > 0 &&(
                nametitle.map(x => {
                    return <li key={x} className="li-title">{x}</li>
                })
            )}
        </ul>
    );
}