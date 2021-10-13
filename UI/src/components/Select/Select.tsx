import React from 'react'
import { useState } from 'react';
import Option from './Option';
import './Select.scss';

function Select() {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    function toggle() {
        setOpen(!open);
        console.log(open);
    }
    return (
        <div className="selectionWrapper">
            <div className="selectContainer" tabIndex={1} onPointerDown={() => {toggle()}}>
                <span className="placeholder">Hallo Welt</span>
                <div className="select-icon">
                    <div className="select-icon-inner"></div>
                </div>
            </div>
            {open ?             
            <div className="optionContainer">
                <Option></Option>
            </div>: null}
        </div>
    )
}

export default Select
