import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
/**
 * Create basic Registration page for petgo Application.
 * @returns Signup Page component
 */
const Registration: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
            <div>
                <span>Hallo Welt!</span>
            </div>
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Registration;
