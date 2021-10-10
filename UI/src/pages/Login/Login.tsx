import { IonContent, IonPage } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState, useEffect } from 'react'
import { TranslationHelper } from '../../Helpers/TranslationHelper';
/**
 * Create basic Login page for petgo Application.
 * @returns Login Page component
 */
const Login: React.FC = () => {
  const [emailPlaceholder, setEmailPlaceholder] = useState('');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('');
  const [loginButton, setLoginButton] = useState('');
  const [notYetRegistered, setNotYetRegistered] = useState('');
  const [signupLinkText, setSignupLinkText] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      let emailPlaceholderTranslationId = "f36f049b-1b98-4e97-a0cd-777a49e2519f";
      let passwordPlaceholderTranslationId = "8f900511-9881-44fb-805e-4b5ae04f654b";
      let loginButton = "8a8b8562-b782-4088-93ca-1e25babdd476";
      let notYetRegistered = "ba761e6d-54fa-4680-a3d5-b007e209f610";
      let signUpLinkText = "1e4af000-c68b-42c6-b5a8-5e1d4b0a351b";
      let translationIDs: string[] = [emailPlaceholderTranslationId, passwordPlaceholderTranslationId, loginButton, notYetRegistered, signUpLinkText];
      TranslationHelper.getTranslations(translationIDs)
      .then((translations: {[key: string]: string}) => {
        setEmailPlaceholder(translations[emailPlaceholderTranslationId]);
        setPasswordPlaceholder(translations[passwordPlaceholderTranslationId]);
        setLoginButton(translations[loginButton]);
        setNotYetRegistered(translations[notYetRegistered]);
        setSignupLinkText(translations[signUpLinkText]);
        setLoading(false);
      }).catch((err: string) => {
        console.log(err);
      })
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer loading={loading}>
          <LoginForm emailPlaceholder={emailPlaceholder} passwordPlaceholder={passwordPlaceholder} loginButton={loginButton} notYetRegistered={notYetRegistered} signUpLinkText={signupLinkText}/>
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Login;