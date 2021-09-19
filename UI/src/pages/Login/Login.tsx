import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import LoginForm from '../../components/LoginForm/LoginForm';

/**
 * Create basic Login page for petgo Application.
 * @returns Login Page component
 */
const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
            <LoginForm />
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Login;