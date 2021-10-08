import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import { useAuth } from '../../contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom';
import './Home.scss';
import { useEffect, useState } from 'react';
import { componentOnReady } from '@ionic/core';
import { TranslationHelper } from '../../Helpers/TranslationHelper';

/**
 * Create Home page every user is directed to when starting petgo.
 * @returns Home Page component
 */
const Home: React.FC = () => {
  let [test, setTest] = useState<string | null>();
  /**
 * Display text from server on Home page
 * @returns 
 */
function getApiRequest() : void {
  fetch(TranslationHelper.getTranslationUrl('C028B6B0-A9E2-4943-9F8B-B9A5D513CFD4'))
    .then(res => res.text())
    .then(text => setTest(text));
}

useEffect(() => {
  getApiRequest();
});

  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
          {test}
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Home;