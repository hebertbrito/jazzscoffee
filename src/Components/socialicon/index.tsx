import React from 'react'
import './styles.css'
import ReactDOM from 'react-dom';
import { TextField } from '@material-ui/core';

interface SocialIconUI {

}

const lstsocialIcon = [
    'fab fa-facebook-f',
    'fab fa-twitter',
    'fab fa-google',
    'fab fa-instagram',
    'fab fa-youtube',
]

export function SocialIcon() {
    return (
        <>
            <div className="container_social_media">
                {lstsocialIcon.length > 0 && (
                    lstsocialIcon.map(x =>{
                        return(
                            <a className="icon" href="#">
                                <i className={x}></i>
                            </a>
                        )
                    })
                )}
            </div>
        </>
    );
}