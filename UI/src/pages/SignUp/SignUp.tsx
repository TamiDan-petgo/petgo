import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import Signup from '../../components/SignupForm/Signup';
import './SignUp.scss';

/**
 * Create basic Registration page for petgo Application.
 * @returns Signup Page component
 */
const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
            <Signup />
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default SignUp;