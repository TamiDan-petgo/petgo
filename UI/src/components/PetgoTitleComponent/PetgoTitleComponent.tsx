import React from 'react'

interface PetgoTitleProps {
    title: string, 
    splitAfterWord: number
}

function PetgoTitleComponent() {
    return (
        <div>
             <span className="petgo-main-title">Schön,</span> 
             <span className="petgo-subtitle">dass Du da bist!</span>
        </div>
    )
}

export default PetgoTitleComponent
