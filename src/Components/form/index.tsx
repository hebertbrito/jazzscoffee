import React from 'react'
import './styles.css'
import ReactDOM from 'react-dom';
import { TextField } from '@material-ui/core';

import { Button } from '../button'

interface FormUI{
    buttonName: string
}

export function Form(props: FormUI) {
    return (
        <form  noValidate autoComplete="off" className="container_form">
            <TextField id="outlined-basic" label="Email"
                placeholder="Email"
                variant="outlined" className="input_item"
                // style={{height: '20px'}}
            />
            <TextField id="outlined-basic" label="Message"
                variant="outlined" className="input_item"
                multiline={true} placeholder="Message"
                rows={3}
                size="medium"
                margin="normal"
                style={{}}
            />
            <Button title={props.buttonName}/>
        </form>
    );
}