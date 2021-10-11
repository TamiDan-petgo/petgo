import { FormEvent, useEffect, useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';
import { UserHelper } from '../../Helpers/UserHelper';
import { Translations } from '../../Content/Translations';
import { TranslationHelper } from '../../Helpers/TranslationHelper';
import { Link } from 'react-router-dom';
import './SignUp.scss';
/**
 * Create basic Registration page for petgo Application.
 * @returns Signup Page component
 */
const SignUp: React.FC = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  const emailRef : any = useRef();
  const passwordRef : any = useRef();
  const passwordConfirmationRef : any = useRef();
  const [error, setError] = useState("");
  const {signup, isCurrentUser, currentUser} = useAuth();
  const history = useHistory();
  const [user, setUser] = useState("");


  useEffect(() => {
    if(initialLoad) {
      setLoading(false);
      setInitialLoad(false);
    }

    if(isCurrentUser() && user == "") {
      UserHelper.getQuestionaire(currentUser).then((data: object) => {
          setUser(JSON.stringify(data));
      }).catch((err: string) => {
          history.push('/questionaire');
      });
    }
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    setError('');
    if(passwordRef.current.value !== passwordConfirmationRef.current.value) {
        setError(Translations.passowrdsNotEqual[TranslationHelper.getLanguage()]);
        return;
    }
    try {
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        history.push('/questionaire');
    }
    catch(ex : any) {
        setError('error: ' + "\n" + ex);
    }
    setLoading(false);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
            <form className="signup"
              onSubmit = {(e) => handleSubmit(e)}>
              <input type="email" 
                  name="email"
                  required 
                  ref={emailRef}
                  placeholder={Translations.emailPlaceholder[TranslationHelper.getLanguage()]}
              />
              <input type="password"
                  name="password"
                  required
                  ref={passwordRef}
                  placeholder = {Translations.passwordPlaceholder[TranslationHelper.getLanguage()]}
                  onChange = {() => setError('')}
              />
              <input type="password"
                  name="passwordConfirmation"
                  required
                  ref={passwordConfirmationRef}
                  placeholder = {Translations.repeatPasswortPlaceholder[TranslationHelper.getLanguage()]}
                  onChange = {() => setError('')}
              />
              <span id="error">{error}</span>
              <button
                  type="submit"
                  disabled = {loading}
              >
                  {Translations.signUp[TranslationHelper.getLanguage()]}
              </button>

              <div>
                  <span>{Translations.AlreadyHaveAnAccount[TranslationHelper.getLanguage()]} <Link to="/login">{Translations.signIn[TranslationHelper.getLanguage()]}!</Link></span>
              </div>
          </form>
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default SignUp;