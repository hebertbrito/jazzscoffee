import React from 'react';
import './styles.css'

export function Menubar() {
    const menu = [
        'Menu','Schedules','Contact','About'
    ]
    
    return (
        <div className="containermenubar">
        <ul className="ulmenu">
            {menu.map(x => {
                return <li className="limenu">{x}</li>
            })}
        </ul>
      </div>
    );
}

