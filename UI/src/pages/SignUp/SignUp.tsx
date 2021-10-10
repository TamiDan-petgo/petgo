import { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import Signup from '../../components/SignupForm/Signup';
import { TranslationHelper } from '../../Helpers/TranslationHelper';
import './SignUp.scss';
/**
 * Create basic Registration page for petgo Application.
 * @returns Signup Page component
 */
const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const[passwordNotEqualError, setPasswordNotEqualError] = useState('');
  const[emailPlaceholder, setEmailPlaceholder] = useState('');
  const[passwordPlaceholder, setPasswordPlaceholder] = useState('');
  const[passwordConfirmationPlaceholder, setPasswordConfirmationPlaceholder] = useState('');
  const[signupButtonPlaceholder, setSignupButtonPlaceholder] = useState('');
  const[alreadyHaveAnAccount, setAlreadyHaveAnAccount] = useState('');
  const[loginLinkText, setLoginLinkText] = useState('');
  
  useEffect(() => {
      let emailPlaceholderTranslationId = "f36f049b-1b98-4e97-a0cd-777a49e2519f";
      let passwordPlaceholderTranslationId = "8f900511-9881-44fb-805e-4b5ae04f654b";
      let signupButtonPlaceholder = "1e4af000-c68b-42c6-b5a8-5e1d4b0a351b";
      let passwordNotEqualError = "bccc8ad8-88df-4e47-8cd7-75b5b6e1cd72";
      let passwordConfirmationPlaceholder = "cb6b03c7-60fd-49bb-9d54-72c9bc2eeab9";
      let alreadyHaveAnAccount = "b9368fba-5ea8-4cf1-b891-51fd6fea2709";
      let loginLinkText = "8a8b8562-b782-4088-93ca-1e25babdd476";
  
      let translationIDs: string[] = [emailPlaceholderTranslationId, passwordPlaceholderTranslationId, signupButtonPlaceholder, passwordNotEqualError, passwordConfirmationPlaceholder, alreadyHaveAnAccount, loginLinkText];
      TranslationHelper.getTranslations(translationIDs)
      .then((translations: {[key: string]: string}) => {
        setEmailPlaceholder(translations[emailPlaceholderTranslationId]);
        setPasswordPlaceholder(translations[passwordPlaceholderTranslationId]);
        setSignupButtonPlaceholder(translations[signupButtonPlaceholder]);
        setPasswordNotEqualError(translations[passwordNotEqualError]);
        setPasswordConfirmationPlaceholder(translations[passwordConfirmationPlaceholder]);
        setAlreadyHaveAnAccount(translations[alreadyHaveAnAccount]);
        setLoginLinkText(translations[loginLinkText]);
        setLoading(false);
      }).catch((err: string) => {
        console.log(err);
      })
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
            <Signup passwordNotEqualError={passwordNotEqualError} 
              emailPlaceholder={emailPlaceholder} 
              passwordPlaceholder={passwordPlaceholder} 
              passwordConfirmationPlaceholder={passwordConfirmationPlaceholder} 
              signupButtonPlaceholder={signupButtonPlaceholder}
              alreadyHaveAnAccount = {alreadyHaveAnAccount}
              loginLinkText = {loginLinkText}
            />
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default SignUp;