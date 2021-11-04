import { IonContent, IonPage } from '@ionic/react';
import { FormEvent, PointerEvent, useState } from 'react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import './Questionaire.scss';
import IconSelectionScreen from '../../components/Controls/IconSelectionScreen';
import { IconSelectionScreenModel } from '../../Models/IconSelectionScreenModel';
import { Translations } from '../../Content/Translations';
import { TranslationHelper } from '../../Helpers/TranslationHelper';
import { worker } from 'cluster';
/**
 * Create basic Questionaire page for petgo Application.
 * @returns Questionaire Page
 */
const Questionaire: React.FC = () => {
  /**get src of icon by iconName
   * @param iconName Name of the icon
   */
  function getIconUrl(iconName: string) :  string {
    return require(`../../Content/img/${iconName}.png`).default;
  } 

  const[loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const test: IconSelectionScreenModel[] = [
    new IconSelectionScreenModel(getIconUrl("cat"), Translations.Cat[TranslationHelper.getLanguage()], 'cat'), 
    new IconSelectionScreenModel(getIconUrl("dog"), Translations.Dog[TranslationHelper.getLanguage()], 'dog'),
    new IconSelectionScreenModel(getIconUrl("rabbit"), Translations.Rodent[TranslationHelper.getLanguage()], 'rabbit'),
    new IconSelectionScreenModel(getIconUrl("bird"), Translations.Bird[TranslationHelper.getLanguage()], 'bird'),
    new IconSelectionScreenModel(getIconUrl("turtle"), Translations.Other[TranslationHelper.getLanguage()], 'turtle')
  ];

  const [activeOption, setActiveOption] = useState(test.find(opt => opt.IsDefault) ?? test[0]);
  
  function fade(ev: PointerEvent, toNext: boolean = true) : void {
    let containerToFadeOut: HTMLElement = getParentNodeWithClassName(ev.currentTarget,'fadeableContainer') as HTMLElement;
    let indexOfContainer: number = parseInt(containerToFadeOut?.getAttribute("data-index") ?? "");
    indexOfContainer = toNext ? indexOfContainer += 1 : indexOfContainer -= 1;
    let containerToFadeIn: HTMLElement | null = document.getElementsByClassName("fadeableContainer").item(indexOfContainer) as HTMLElement;

    if (containerToFadeIn != null && containerToFadeOut != null) {
      containerToFadeOut.classList.add('fade-out');
      window.setTimeout(function(){
        containerToFadeOut.classList.remove('fade-out');
        containerToFadeOut.style.display = 'none';
        if(containerToFadeIn != null) {
          containerToFadeIn.style.display = 'block';
          containerToFadeIn.classList.add('fade-in');
          window.setTimeout(function(){
            containerToFadeIn?.classList.remove('fade-in');
          }, 1000);
        }
      }, 1000);
    }
  }

  function getParentNodeWithClassName(element: Element, className: string, timeToLive: number = 10) : Element | null | undefined {
    let parentNode : Element | null = element;
    if(className.trim().length > 0){
      for(timeToLive >= 0; timeToLive--;){
        if (parentNode?.classList.contains(className)) {
          return parentNode;
        }
        parentNode = parentNode?.parentNode as Element;
      }
    return null;
  } }

  function fadeToPrevious(ev: PointerEvent) {
    fade(ev, false);
  }

  function fadeToNext(ev: PointerEvent) {
    fade(ev);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer loading={loading} title={Translations.GoodToSeeYou[TranslationHelper.getLanguage()]} splitTitleAfterWord={1}>
            <div>
                <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)} className="questionaire-form">
                  <div className="fadeableContainer" data-index="0" style={{display: 'block'}}>
                    <span className="question">{Translations.HowDoYouInvisionYourNewRoommate[TranslationHelper.getLanguage()]}</span>
                    <IconSelectionScreen options={test} activeOption={activeOption} onValueChange={(selected: IconSelectionScreenModel) => {setActiveOption(selected)}}/>
                    <div className="linkNext">
                      <a onPointerUp={(ev : PointerEvent)=> {fadeToNext(ev)}}>{Translations.next[TranslationHelper.getLanguage()]}</a>
                    </div>
                    <button type="button"
                      className="button-on-bottom">
                      <img src={getIconUrl("pet-insurance")} />
                      <span>{Translations.iAmAnOrganization[TranslationHelper.getLanguage()]}</span>
                    </button>
                  </div>
                  <div className="fadeableContainer" data-index="1" style={{display: 'none'}}>
                  </div>
                </form>
            </div>
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
}


export default Questionaire;