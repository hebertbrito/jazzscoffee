import React from 'react'
import './styles.css'
import ReactDOM from 'react-dom';
import { TextField } from '@material-ui/core';

interface button {
    title: string;
}

export function Button(props: button) {
    return (
        <>
            <button className="button_form">{props.title}</button>
        </>
    );
}