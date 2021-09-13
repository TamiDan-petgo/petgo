import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { EventHandler } from 'react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import './Home.scss';
import Signup from '../../components/SignupForm/Signup';
import { AuthProvider } from '../../contexts/AuthContext';


/**
 * Create Home page every user is directed to when starting petgo.
 * @returns Home Page component
 */
const Home: React.FC = () => {
  return (
    <AuthProvider>
      <IonPage>
        <IonContent fullscreen>
          <BackgroundContainer>
            <div>
              <Signup></Signup>
            </div>
          </BackgroundContainer>
          </IonContent>
      </IonPage>
    </AuthProvider>
  );
};

export default Home;