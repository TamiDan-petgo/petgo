import React from 'react'
import './LoadingScreen.scss';

function LoadingScreen() {
    return (
        <div className="loadingScreenWrapper">
            <div className="loadingAnimation">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className="loadingScreenText">Loading...</span>
        </div>
    )
}

export default LoadingScreen
