import { IonContent, IonPage } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import { FormEvent, useState, useEffect, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';
import { Translations } from '../../Content/Translations';
import { TranslationHelper } from '../../Helpers/TranslationHelper';
import { Link } from 'react-router-dom';
import { componentOnReady } from '@ionic/core';

/**
 * Create basic Login page for petgo Application.
 * @returns Login Page component
 */
const Login: React.FC = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  const[error, setError] = useState('');
  const emailRef : any = useRef();
  const passwordRef : any = useRef();
  const {login} = useAuth();
  const history = useHistory();

  useEffect(() => { 
    if(initialLoad) {
       setLoading(false);
       setInitialLoad(false);
       console.log('useEffect');
    }
  });

  async function handleSubmit(e : FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setError('');
      try {
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value);
          history.push('/');
      }
      catch(ex : any) {
          setError(ex.toString());
      }
      setLoading(false);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer loading={loading}>
          <form className="login"
                onSubmit = {(e) => handleSubmit(e)}>
                    <input
                        type = "email"
                        required
                        placeholder = {Translations.emailPlaceholder[TranslationHelper.getLanguage()]}
                        ref={emailRef}
                    />
                    <input type="password"
                        required
                        placeholder = {Translations.passwordPlaceholder[TranslationHelper.getLanguage()]}
                        ref={passwordRef}
                        />
                    <button
                        type="submit"
                        name= "sumbit"
                        disabled = {loading}
                        onChange = {() => setError('')}
                        >
                        {Translations.signIn[TranslationHelper.getLanguage()]}
                    </button>
                    <br/>
                    <span>{error}</span>
                    <br/>
                    <span>{Translations.dontHaveAnAccountYet[TranslationHelper.getLanguage()]} 
                    <Link to="/signup">{Translations.signUp[TranslationHelper.getLanguage()]}</Link>
                    </span>
                </form>
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Login;