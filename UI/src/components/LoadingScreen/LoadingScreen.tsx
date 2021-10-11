import React from 'react'
import { Translations } from '../../Content/Translations'
import { TranslationHelper } from '../../Helpers/TranslationHelper';
import './LoadingScreen.scss';

function LoadingScreen() {
    return (
        <div className="loadingScreenWrapper">
            <div className="loadingAnimation">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className="loadingScreenText">{Translations.loading[TranslationHelper.getLanguage()]}</span>
        </div>
    )
}

export default LoadingScreen
