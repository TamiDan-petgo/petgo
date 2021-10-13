import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { FormEvent, useState } from 'react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import { IonSelect, IonSelectOption } from '@ionic/react';
import './Questionaire.scss';
/**
 * Create basic Questionaire page for petgo Application.
 * @returns Questionaire Page
 */
const Questionaire: React.FC = () => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const test: string[] = ["Rosi", "Erna", "Schnief"];
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
            <div>
                Questionaire
                <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                  <div className="questionContainer">
                    <IonSelect placeholder="Wie lebst du?" name="cars" id="cars">
                      {
                        test.map(ff => <IonSelectOption value={ff}>{ff}</IonSelectOption>)
                      }
                    </IonSelect>
                  </div>
                  <div className="questionContainer">

                  </div>
                  <div className="questionContainer"></div>

                  <button type="submit">Click me!</button>
                </form>
            </div>
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Questionaire;