import { IonContent, IonPage} from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import './Home.scss';
import { TranslationHelper } from '../../Helpers/TranslationHelper';
import { Translations } from '../../Content/Translations';

/**
 * Create Home page every user is directed to when starting petgo.
 * @returns Home Page component
 */
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
          {Translations.dontHaveAnAccountYet[TranslationHelper.getLanguage()]}
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Home;