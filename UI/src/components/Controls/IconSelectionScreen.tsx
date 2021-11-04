import { useState, PointerEvent } from "react";
import React from 'react'
import { IconSelectionScreenModel } from "../../Models/IconSelectionScreenModel";
import './IconSelectionScreen.scss';
interface IconSelectionScreenProps {
    options: IconSelectionScreenModel[],
    activeOption: IconSelectionScreenModel
    onValueChange: any
}

const IconSelectionScreen: React.FC<IconSelectionScreenProps>= ({options, activeOption, onValueChange}) => {
    function isEqualToActive(option: IconSelectionScreenModel) : boolean{
        return option.Icon == activeOption.Icon && option.Value == activeOption.Value;
    }
    return (
        <div className="optionContainer">
            {options.map(ff => {
                return(
                    <div className = {"option " + (isEqualToActive(ff) ? "isActive" : "")} onPointerUp={() => {onValueChange(ff)}}>
                        <div className="option-icon">
                            <img src={ff.Icon}></img>
                        </div>
                        <div className="option-label">{ff.Label}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default IconSelectionScreen
