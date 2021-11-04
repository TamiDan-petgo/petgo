import { IonContent, IonPage, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle} from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Translations } from '../../Content/Translations';
import { TranslationHelper } from '../../Helpers/TranslationHelper';
import './Home.scss';

import { useAuth } from '../../contexts/AuthContext';

/**
 * Create Home page every user is directed to when starting petgo.
 * @returns Home Page component
 */
const Home: React.FC = () => {
  const {signout} = useAuth();

  function logout() {
    signout();
  }
  return (
    <IonPage>
      <PageHeader title="Home"/>
      <IonContent fullscreen>
        <BackgroundContainer circleOnTop={true}>
          <button onClick={() => {logout()}}>{Translations.signOut[TranslationHelper.getLanguage()]}</button>
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Home;